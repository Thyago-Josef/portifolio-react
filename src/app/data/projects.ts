export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  image: string;
  gallery?: string[];
  isProprietary: boolean;
  repoUrl?: string;
  features?: string[];
  challenges?: string;
  architecture?: string;
}

export const projects: Project[] = [
  {
    slug: "conversor-pdf",
    title: "Conversor de PDF",
    description: "Sistema completo de conversão de documentos com arquitetura de microsserviços. Autenticação JWT, processamento assíncrono via RabbitMQ, planos de assinatura e gateway de pagamento integrado.",
    longDescription: "Plataforma full-stack para conversão de documentos PDF para múltiplos formatos (imagens, Word, HTML). Desenvolvida com arquitetura de microsserviços, onde o backend Java gerencia autenticação, filas e pagamentos, enquanto um microserviço Python specialize em processamento de PDF de alta qualidade.",
    stack: ["Java", "Spring Boot", "Python", "Flask", "React", "Docker", "RabbitMQ"],
    image: "/projects/pdf-converter-dashboard.png",
    gallery: [
      "/projects/pdf-converter-dashboard.png",
      "/projects/pdf-converter-login.png",
      "/projects/pdf-converter-home.png",
      "/projects/pdf-converter-planos.png",
    ],
    isProprietary: false,
    repoUrl: "https://github.com/Thyago-Josef/app-pdf",
    features: [
      "Autenticação JWT com refresh token e replay detection",
      "RBAC (Role-Based Access Control) com isolamento de dados",
      "Processamento assíncrono via RabbitMQ",
      "Planos de assinatura FREE/PRO com limite diário",
      "Gateway de pagamento Mercado Pago",
      "Rate limiting com Bucket4j",
      "Cache Caffeine para consultas frequentes",
      "Logging estruturado JSON",
      "Health monitoring com Spring Actuator",
      "LGPD: máscara de e-mail nos endpoints"
    ],
    challenges: "O maior desafio foi integrar o processamento pesado de PDF (realizado pelo Python/Docling) com o backend Spring Boot de forma assíncrona. A solução foi usar RabbitMQ como intermediário, onde o Spring publica a requisição na fila e o Python consome, processa e publica o resultado em uma fila de reply. Isso permite que o sistema escalle horizontalmente e não bloqueie as threads HTTP durante conversões longas.",
    architecture: "Frontend (React + Vite) → API Gateway (Spring Boot) → RabbitMQ → Microservice (Python/Flask + Docling) → RabbitMQ Reply → Spring Boot atualiza banco → Frontend faz polling do resultado"
  },
  {
    slug: "site-curso",
    title: "Site de Curso",
    description: "Marketplace de cursos profissionalizantes com CMS dinâmico, carrinho de compras e painel administrativo completo.",
    longDescription: "Plataforma completa para uma escola de cursos profissionalizantes, funcionando como um marketplace de cursos com gerenciamento dinâmico de conteúdo. O sistema conta com catálogo de cursos gerenciável via CMS, carrinho de compras, planos de assinatura, área de vídeos exclusiva para alunos e um painel administrativo completo para controle de cursos, usuários e vendas. Design moderno e responsivo focado em conversão e experiência do usuário.",
    stack: ["React", "TypeScript", "CSS Modules", "Vite", "CMS"],
    image: "/projects/curso-web/home.png",
    gallery: [
      "/projects/curso-web/home.png",
      "/projects/curso-web/cursos.png",
      "/projects/curso-web/planos.png",
      "/projects/curso-web/sobre.png",
      "/projects/curso-web/videos.png",
    ],
    isProprietary: false,
    repoUrl: "https://github.com/Thyago-Josef/site-market-curso",
    features: [
      "Marketplace de cursos com CMS para gerenciamento dinâmico",
      "Catálogo de cursos com categorias e busca",
      "Carrinho de compras completo",
      "Planos de assinatura com tabela comparativa",
      "Área de vídeos exclusiva para alunos matriculados",
      "Painel administrativo para controle de cursos, usuários e vendas",
      "Páginas CMS-dinâmicas (sobre, contato, etc.)",
      "Design responsivo e otimizado para mobile"
    ],
    challenges: "O maior desafio foi desenvolver um CMS dinâmico que permitisse à equipe da escola gerenciar todo o conteúdo do site — cursos, páginas institucionais e planos — sem precisar de conhecimento técnico, tudo integrado a um carrinho de compras funcional e painel administrativo.",
    architecture: "React + Vite → CMS dinâmico → Roteamento SPA"
  },
  {
    slug: "app-delivery",
    title: "App de Delivery",
    description: "Aplicativo mobile para pedidos com rastreamento em tempo real e sistema de pagamentos integrado.",
    longDescription: "Aplicativo mobile completo para restaurantes e lanchonetes, com acompanhamento do pedido em tempo real via WebSocket, sistema de avaliações e integração com gateways de pagamento.",
    stack: ["React Native", "Django", "Redis", "Docker"],
    image: "/projects/delivery-app.jpg",
    isProprietary: true,
    features: [
      "Cardápio digital com categorias e busca",
      "Carrinho de compras com personalização",
      "Rastreamento em tempo real via WebSocket",
      "Pagamento integrado (PIX, cartão, dinheiro)",
      "Sistema de avaliações e ranking"
    ],
    challenges: "Manter a atualização em tempo real do status do pedido para múltiplos usuários simultâneos, utilizando WebSocket com Django Channels e Redis como layer de cache.",
    architecture: "React Native → Django REST + Channels → Redis → PostgreSQL"
  },
  {
    slug: "portal-elearning",
    title: "Portal de E-learning",
    description: "Plataforma de cursos online com aulas ao vivo, quizzes interativos e certificados automáticos.",
    longDescription: "Plataforma educacional completa com suporte a aulas gravadas e ao vivo, sistema de progresso, quizzes, forum de dúvidas e emissão automática de certificados.",
    stack: ["Next.js", "Spring Boot", "MongoDB", "AWS"],
    image: "/projects/elearning.jpg",
    isProprietary: true,
    features: [
      "Aulas gravadas com player customizado",
      "Aulas ao vivo via WebRTC",
      "Quizzes interativos com correção automática",
      "Sistema de progresso e gamificação",
      "Emissão automática de certificados PDF"
    ],
    challenges: "Implementar o streaming de vídeo ao vivo com baixa latência e suporte a múltiplos alunos conectados, utilizando WebRTC com SFU (Selective Forwarding Unit).",
    architecture: "Next.js → Spring Boot → MongoDB + AWS S3/CloudFront"
  },
  {
    slug: "dashboard-analitico",
    title: "Dashboard Analítico",
    description: "Painel de métricas com gráficos dinâmicos, exportação de relatórios e alertas configuráveis.",
    longDescription: "Painel de business intelligence para visualização de KPIs e métricas de negócio, com gráficos interativos, exportação de relatórios em PDF/Excel e sistema de alertas por email.",
    stack: ["Angular", "Java", "MySQL", "Chart.js"],
    image: "/projects/dashboard.jpg",
    isProprietary: true,
    features: [
      "Dashboards customizáveis com drag-and-drop",
      "Gráficos interativos (linha, barra, pizza, heatmap)",
      "Exportação de relatórios em PDF e Excel",
      "Alertas configuráveis por email/Webhook",
      "Fontes de dados conectáveis (API, CSV, banco)"
    ],
    challenges: "Criar um sistema de drag-and-drop para permitir que os usuários customizassem seus dashboards, salvando o layout no backend e restaurando ao fazer login.",
    architecture: "Angular → Java/Spring Boot → MySQL"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
