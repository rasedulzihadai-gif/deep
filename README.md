# DeepThink

"Think deep. Build fast." — an autonomous AI agent platform. Chat UI on top,
DeepSeek's `deepseek-chat` / `deepseek-reasoner` models underneath, wired for
agentic tool-calling (plan → execute → validate) rather than plain chat.

## Status

This scaffold covers **Phase 1 (project setup)** and **Phase 2 (landing
page)** of the build plan below. Everything from Phase 3 onward (auth, chat
UI, DeepSeek streaming integration, the agent tool loop, the workspace panel,
Prisma persistence, polish, deployment) is not yet implemented — say the word
and I'll pick up at Phase 3.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- shadcn/ui-style components (Radix primitives, no CLI lock-in)
- Framer Motion for transitions
- Zustand (added, not yet wired) for chat/session state
- NextAuth.js (to be wired in Phase 3) — email/password + Google OAuth
- PostgreSQL + Prisma (to be wired in Phase 8)
- DeepSeek API (`https://api.deepseek.com/v1/chat/completions`), OpenAI-compatible

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:3000.

## Build order

1. Project scaffold — **done**
2. Landing page — **done**
3. Auth (NextAuth.js)
4. Chat UI shell (mock data)
5. DeepSeek streaming integration (`/api/chat`)
6. Tool-calling / agent loop + "Working" trace
7. Workspace panel (preview / code / terminal / export)
8. Persistence (Postgres + Prisma)
9. Polish pass (loading/error states, dark mode, mobile, a11y)
10. Environment & deployment config

## Notes on the agent design (for Phase 6)

Tools will be implemented as OpenAI-style function-calling tools passed to
DeepSeek: `file_write`, `file_read`, `file_edit`, `list_files`, `run_command`
(allowlisted), `web_search` (stub initially). The agent loop plans first,
then executes with a visible step trace, validates with a lightweight
build/lint check, and self-corrects before surfacing errors to the user.
