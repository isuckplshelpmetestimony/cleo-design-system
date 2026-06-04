# Cleo Design System

Quiet Authority design language for Cleo — AI-assisted documentation and denial prevention for outpatient physical therapy.

## Brand naming

**Cleo** is the product and company name going forward. Do not refer to the app, codebase, or pilot as **Therapeia** / Therapeia in new docs, prompts, or UI copy. This design system documents **Cleo** only; implementation may still live in a legacy monorepo path until rename is complete.

## Stack

- [Astro](https://astro.build) 6 + React islands + MDX
- Node.js ≥ 22.12

## Develop

```bash
nvm use 22
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Deploy output is in `dist/` (Netlify-ready via `netlify.toml`).

## Cursor + Cleo Vault (engineers)

Open this repo in Cursor. When Enzo scans or pastes from the **Cleo Vault** (Obsidian), the agent should follow the playbook automatically — resolve UI via `src/config/registry.ts` (`vaultKeywords`), open implementation files, and apply tokens. No manual “Copy path” from block doc pages.

- **Site (full):** `/getting-started/cursor-vault` after `npm run dev`
- Agent playbook: [`AGENTS.md`](./AGENTS.md)
- Cursor rule: [`.cursor/rules/cleo-vault-to-ds.mdc`](./.cursor/rules/cleo-vault-to-ds.mdc)
- AI system prompt: [`CLEO_DESIGN_SYSTEM_PROMPT.md`](./CLEO_DESIGN_SYSTEM_PROMPT.md)
