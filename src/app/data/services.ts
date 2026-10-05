export const WHATSAPP = "5521966157428";
export const zap = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// ⚠️ Preços são exemplos: ajuste para a sua realidade.
export const services = [
  {
    id: "bio",
    nome: "Bio profissional",
    preco: "a partir de R$ 197",
    resumo: "Uma página única para o link do Instagram: WhatsApp, serviços, mapa e redes.",
    itens: ["Modelo do seu ramo", "Botão direto para o WhatsApp", "QR Code para balcão e cartão", "Entrega em poucos dias"],
    destaque: true,
  },
  {
    id: "site",
    nome: "Site institucional",
    preco: "a partir de R$ 897",
    resumo: "Site completo com várias páginas, SEO básico e domínio próprio.",
    itens: ["Design sob medida", "Formulário de contato", "Otimizado para Google e celular", "Hospedagem configurada"],
    destaque: false,
  },
  {
    id: "sistema",
    nome: "Sistema sob medida",
    preco: "sob orçamento",
    resumo: "Painel, agendamento, pedidos ou integrações para organizar a operação.",
    itens: ["Backend + frontend", "Login e painel administrativo", "Pagamentos e integrações", "Suporte pós-entrega"],
    destaque: false,
  },
];