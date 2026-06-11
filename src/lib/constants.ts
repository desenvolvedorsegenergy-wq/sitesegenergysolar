export const SITE_CONFIG = {
  name: "SegEnergy",
  tagline: "Franquias de Energia Solar e Mobilidade Elétrica",
  url: "https://segenergysolar.com.br",
  email: "contato@segenergysolar.com.br",
  phone: "+55 11 4000-0000",
  whatsapp: "5511400000000",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#franquias", label: "Franquias" },
  { href: "#grupo", label: "Grupo Zanon" },
  { href: "#contato", label: "Contato" },
] as const;

export const HERO_STATS = [
  { value: 4000, prefix: "+", suffix: "", label: "franquias vendidas" },
  { value: 7, prefix: "", suffix: "", label: "países" },
  { value: 2.5, prefix: "+R$ ", suffix: " bi", label: "em faturamento" },
  { value: 0, prefix: "", suffix: "", label: "Grupo empresarial consolidado", isText: true },
] as const;

export const GROUP_STATS = [
  { value: 4000, prefix: "+", suffix: "", label: "Franquias comercializadas" },
  { value: 7, prefix: "", suffix: "", label: "Países de atuação" },
  { value: 2.5, prefix: "R$ ", suffix: " bi", label: "Faturamento acumulado" },
] as const;

export const SOLAR_MARKETS = [
  "Crescimento constante da energia solar",
  "Busca por redução de custos energéticos",
  "Mercado residencial",
  "Mercado empresarial",
  "Mercado rural",
] as const;

export const SOLAR_BENEFITS = [
  "Produto de alta demanda",
  "Mercado sustentável",
  "Alto potencial de faturamento",
  "Expansão nacional",
] as const;

export const CHARGER_BENEFITS = [
  "Mercado em expansão",
  "Mobilidade do futuro",
  "Receitas recorrentes",
  "Baixa concorrência regional",
] as const;

export const DIFFERENTIALS = [
  {
    icon: "Wrench",
    title: "Engenharia Própria",
    description:
      "Equipe especializada para desenvolvimento e implantação dos projetos.",
  },
  {
    icon: "Rocket",
    title: "Implantação Completa",
    description: "Suporte operacional do início ao funcionamento.",
  },
  {
    icon: "Scale",
    title: "Suporte Jurídico",
    description: "Segurança contratual e suporte especializado.",
  },
  {
    icon: "Megaphone",
    title: "Marketing Estruturado",
    description: "Captação e geração de oportunidades de negócio.",
  },
  {
    icon: "Network",
    title: "Ecossistema Integrado",
    description: "Parcerias estratégicas e fornecedores homologados.",
  },
  {
    icon: "Building2",
    title: "Respaldo Institucional",
    description: "A força e experiência do Grupo Zanon.",
  },
] as const;

export const EXECUTIVES = [
  {
    name: "Reinaldo Zanon",
    role: "Fundador · Grupo Zanon",
    bio: "Mais de duas décadas estruturando redes de franquia no Brasil e no exterior. Visão de quem já escalou múltiplos negócios.",
    image: "/reinaldo-zanon.webp",
  },
  {
    name: "Leonardo Cannizza",
    role: "CEO · SegEnergy",
    bio: "Líder de operações com foco em engenharia de implantação e expansão. Comanda a frente técnica e comercial da SegEnergy.",
    image: "/leonardo-cannizza.webp",
  },
] as const;

export const BRAZIL_STATES = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const;

export const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/segenergyfranchising/", label: "Instagram" },
  { href: "https://web.facebook.com/segenergyfranchising", label: "Facebook" },
  { href: "https://www.youtube.com/channel/UCVPkWAxirBpmY05CEJDyxhQ", label: "YouTube" },
] as const;

export const INTEREST_OPTIONS = [
  { value: "solar", label: "SegEnergy Solar" },
  { value: "charger", label: "SegEnergy Charger" },
  { value: "both", label: "Ambos" },
] as const;
