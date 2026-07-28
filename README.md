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

## Variáveis de ambiente

Ver `.env.example`. Nenhuma é obrigatória para rodar localmente — todas têm um valor
placeholder — mas **precisam ser preenchidas antes de publicar**:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — número real da pousada (formato `55DDDNUMERO`).
- `NEXT_PUBLIC_CONTACT_EMAIL` / `NEXT_PUBLIC_CONTACT_PHONE_DISPLAY` — rodapé.
- `NEXT_PUBLIC_MAPS_LAT` / `NEXT_PUBLIC_MAPS_LNG` / `NEXT_PUBLIC_MAPS_ADDRESS` — endereço
  real da pousada (pegue lat/lng clicando com o botão direito no local no Google Maps).
- `GOOGLE_PLACES_API_KEY` / `GOOGLE_PLACE_ID` — opcional, ver seção abaixo.

## Avaliações reais do Google (opcional)

Sem essas variáveis configuradas, a seção "Quem já ficou, conta" usa os depoimentos de
exemplo em `src/data/testimonials.ts` (fallback automático, a página nunca quebra).

Para usar avaliações reais do Google:

1. Crie/confirme o perfil da pousada no Google Business Profile.
2. No [Place ID Finder do Google](https://developers.google.com/maps/documentation/places/web-service/place-id),
   busque "Pousada Dona Maria" e copie o **Place ID**.
3. No Google Cloud Console, habilite a **Places API** e crie uma API key restrita
   (restrição por API, sem uso no client).
4. Preencha `GOOGLE_PLACES_API_KEY` e `GOOGLE_PLACE_ID` no ambiente de produção.

A busca é feita no servidor (`src/lib/reviews.ts`), com cache de 24h — a chave nunca é
exposta ao navegador.

## Substituindo imagens

Ainda não há fotos reais — cada card/hero mostra um painel placeholder ("Foto em breve")
em vez de foto genérica de banco de imagens. Para trocar por fotos reais:

1. Coloque os arquivos em `public/images/` (ex.: `public/images/quartos/suite-master/1.jpg`).
2. Em `src/data/rooms.ts` / `waterfalls.ts`, preencha o array `images` (ou `image`) com o
   caminho (`/images/quartos/suite-master/1.jpg`).
3. Troque `<ImagePlaceholder ... />` pelo `<img>`/`next/image` correspondente nos
   componentes (`RoomCard.tsx`, `RoomDetail.tsx`, `WaterfallsSection.tsx`, `Hero.tsx`,
   `StorySection.tsx`) — feito ponto a ponto pra manter controle sobre crop/qualidade de
   cada seção.

## Antes de publicar

- [ ] Número de WhatsApp real
- [ ] Endereço/coordenadas reais
- [ ] Fotos e textos finais de quartos, camping e cachoeiras
- [ ] (Opcional) Place ID + API key do Google para avaliações reais

## Build de produção

```bash
npm run build
npm run start
```
