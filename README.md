# Pousada Dona Maria — Landing Page

Landing page da Pousada Dona Maria (interior do Tocantins), focada em conversão via
WhatsApp: cada quarto e o camping têm rota própria, com um contexto diferente enviado
no link do WhatsApp.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v3 (tokens portados de `base/DESIGN.md`)
- lucide-react (ícones)
- Sem login/cadastro, sem motor de reservas — captação de lead 100% via WhatsApp

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha com os dados reais quando tiver
npm run dev
```

Abra http://localhost:3000.

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Home: hero, quartos + camping, cachoeiras, história da Dona Maria, avaliações, mapa, CTA final |
| `/quartos/[slug]` | Página de cada quarto (`suite-master`, `quarto-deluxe`, `loft-jardim`, `chale-familiar`) |
| `/camping` | Página do camping |

Quartos/camping são definidos em `src/data/rooms.ts`. Adicionar uma acomodação nova =
adicionar um item nesse array (a rota `/quartos/[slug]` é gerada automaticamente).

## Build de produção

```bash
npm run build
npm run start
```
