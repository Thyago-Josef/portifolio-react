export type Bio = {
  slug: string;
  nome: string;
  ramo: string;
  descricao: string;
  whatsapp: string;
  cor: string;
  links: { label: string; href: string }[];
};

// Cada cliente novo = mais um objeto aqui (depois dá para mover para um banco).
export const bios: Bio[] = [
  {
    slug: "barbearia-imperial",
    nome: "Barbearia Imperial",
    ramo: "Barbearia",
    descricao: "Cortes, barba e estilo com atendimento premium.",
    whatsapp: "5521999999999",
    cor: "#667eea",
    links: [
      { label: "Ver serviços e preços", href: "#" },
      { label: "Como chegar", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    slug: "studio-bella",
    nome: "Studio Bella Nails",
    ramo: "Manicure",
    descricao: "Unhas impecáveis e nail art em cada detalhe.",
    whatsapp: "5521999999999",
    cor: "#c2185b",
    links: [
      { label: "Catálogo de modelos", href: "#" },
      { label: "Agendar horário", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];