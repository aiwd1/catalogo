# Catalogo

Monorepo pnpm (workspace) con due pacchetti:

- `backend/`: API Express sulla porta 3000, `GET /products` restituisce `{ success, message, data }`
- `frontend/`: React + Vite sulla porta 5173, legge i prodotti dal backend con `fetch`

## Script della root

Il `package.json` è JSON e non ammette commenti, quindi gli script sono spiegati qui:

| Script | Comando | Cosa fa |
|---|---|---|
| `pnpm back:dev` | `pnpm --filter backend dev` | `--filter` esegue lo script `dev` solo nel pacchetto `backend` |
| `pnpm front:dev` | `pnpm --filter frontend dev` | come sopra, solo nel `frontend` |
| `pnpm all:dev_alt` | `pnpm back:dev & pnpm front:dev` | `&` della shell: avvia il primo comando in background e subito dopo il secondo |
| `pnpm all:dev` | `pnpm --parallel -r dev` | `-r` (recursive) esegue `dev` in tutti i pacchetti del workspace, `--parallel` li fa girare insieme. È la versione consigliata |

## Avvio

```bash
pnpm install   # dalla root: installa le dipendenze di backend e frontend
pnpm all:dev
```
