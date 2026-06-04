import {
  getRegistryEntry,
  getRelatedEntries,
  registryEntries,
  type RegistryEntry,
} from '../config/registry';

export interface ResolvedRegistryMatch {
  entry: RegistryEntry;
  matchedKeywords: string[];
  score: number;
}

/**
 * Map vault notes, user prompts, or Obsidian excerpts to registry entries.
 * Used by Cursor agents — humans should not copy paths manually.
 */
export function resolveRegistryFromText(text: string): ResolvedRegistryMatch[] {
  const normalized = text.toLowerCase();
  const matches: ResolvedRegistryMatch[] = [];

  for (const entry of registryEntries) {
    const keywords = entry.vaultKeywords ?? [];
    const matchedKeywords = keywords.filter((kw) =>
      normalized.includes(kw.toLowerCase())
    );
    if (matchedKeywords.length === 0) continue;
    matches.push({
      entry,
      matchedKeywords,
      score: matchedKeywords.length,
    });
  }

  return matches.sort((a, b) => b.score - a.score);
}

export interface RegistryImplementationPlan {
  primary: RegistryEntry;
  related: RegistryEntry[];
  copyPaths: string[];
  docHrefs: string[];
  tokensFile: string;
  patterns: string[];
}

/**
 * After vault scan, produce what the agent should read and implement next.
 */
export function buildImplementationPlan(
  entryId: string
): RegistryImplementationPlan | undefined {
  const primary = getRegistryEntry(entryId);
  if (!primary) return undefined;

  const related = getRelatedEntries(entryId);
  const all = [primary, ...related];
  const copyPaths = all
    .map((e) => e.copyPath)
    .filter((p): p is string => Boolean(p));
  const docHrefs = all.map((e) => e.href);

  const patterns: string[] = [];
  if (entryId === 'visit-shell' || related.some((e) => e.id === 'visit-shell')) {
    patterns.push('/components/ipad-constraints', '/components/hitl');
  }
  if (entryId === 'treatment-table' || related.some((e) => e.id === 'treatment-table')) {
    patterns.push('/components/hitl');
  }

  return {
    primary,
    related,
    copyPaths,
    docHrefs,
    tokensFile: 'src/styles/tokens.css',
    patterns,
  };
}
