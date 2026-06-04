# Cleo Design System — agent playbook

**Site (canonical browsable copy):** `/getting-started/cursor-vault` on the Cleo DS docs.

For **Enzo** and any Cursor session in this repo. The human does **not** look up copy paths or registry rows manually.

## When the task mentions Cleo Vault / Obsidian / wiki

1. **Read vault** — follow skill `cleo-second-brain-query` (resolve iCloud path, read `wiki/synthesis/` first; never edit `raw/`).
2. **Resolve UI** — run keyword match on vault excerpt + user message:
   - Read `src/config/registry.ts` (`vaultKeywords` per entry), or call `resolveRegistryFromText()` in `src/lib/resolve-registry-from-text.ts`.
3. **Build plan** — `buildImplementationPlan(entryId)` returns `copyPaths`, `docHrefs`, `related`, and pattern pages.
4. **Execute without asking** — open every `copyPath`, doc page source under `src/pages`, `src/styles/tokens.css`, and `CLEO_DESIGN_SYSTEM_PROMPT.md`. Implement or update code; do not tell the user to paste paths or open the registry UI.

## Default Julie MVP stack

If vault text is about Julie pilot / daily note / iPad and no narrower match:

- Primary: `visit-shell` → `src/components/cleo/blocks/VisitShellShowcase.tsx`
- Related: `status-strip`, `stepper`, `tab-bar`, `treatment-table`, `locked-band`
- Components: `/components/hitl`, `/components/ipad-constraints`

## Quiet Authority (non-negotiable)

- Tokens from `src/styles/tokens.css` only — no Material / default Tailwind / bright SaaS palettes.
- Amber accent **once per screen**.
- iPad Safari is acceptance device for Julie MVP blocks.

## Copy path on the docs site

The **Copy path** control is for humans browsing the site. **Agents** use `registry.ts` + this file — never instruct Enzo to click Copy.
