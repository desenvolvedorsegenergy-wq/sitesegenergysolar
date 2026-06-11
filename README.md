# SegEnergy - Site Institucional

Site institucional premium para geração de leads de franquias SegEnergy Solar e SegEnergy Charger.

## Stack

- **Next.js 15+** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Shadcn/UI**
- **Framer Motion**
- **next-themes** (Dark Mode)

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estrutura

```
src/
├── app/                  # App Router (pages, API, SEO)
├── components/
│   ├── layout/           # Header, Footer
│   ├── providers/        # Theme Provider
│   ├── sections/         # Seções da landing page
│   ├── shared/           # Componentes reutilizáveis
│   └── ui/               # Shadcn/UI
├── hooks/                # Custom hooks
├── lib/                  # Constantes, SEO, integrações
└── types/                # Tipagens TypeScript
```

## Integrações CRM

Configure as variáveis de ambiente (copie `.env.example` para `.env.local`):

| Variável | CRM |
|---|---|
| `HUBSPOT_API_KEY` | HubSpot |
| `RD_STATION_TOKEN` | RD Station |
| `PIPEDRIVE_API_TOKEN` | Pipedrive |

O formulário envia leads para `/api/leads`, que despacha automaticamente para os CRMs configurados.

## SEO

- Metadata otimizada (Open Graph, Twitter Cards)
- Schema.org Organization
- Sitemap e robots.txt automáticos
- Lazy loading de seções abaixo do fold

## Paleta de Cores

| Cor | Hex |
|---|---|
| Azul escuro | `#0B1F3A` |
| Verde energia | `#16A34A` |
| Cinza claro | `#F4F6F8` |
