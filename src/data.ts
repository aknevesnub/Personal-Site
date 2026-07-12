import { Briefcase, FolderGit2, Mail, User, GraduationCap, LucideIcon } from 'lucide-react';

export type Language = 'pt' | 'en';

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  link: string;
  emoji: string;
  logo: string;
  color: string;
  image: string;
  images?: { src: string; label: string }[];
  timeline: { date: string; title: string; description: string }[];
}

export interface ExperienceData {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationData {
  id: number;
  title: string;
  institution: string;
  period: string;
}

export interface ContentData {
  hero: {
    badge: string;
    description: string;
    fullHeroText: string;
    btnProjects: string;
    btnInfo: string;
    btnWhatsApp: string;
  };
  sections: {
    projects: { title: string; subtitle: string; btnAccess: string };
    experience: { title: string; subtitle: string };
    education: { title: string; subtitle: string; academic: string; certs: string };
    contact: { title: string; subtitle: string; email: string };
  };
  projects: ProjectData[];
  experience: ExperienceData[];
  education: EducationData[];
  certifications: string[];
  navItems: { id: string; icon: LucideIcon; label: string }[];
}

const pt: ContentData = {
  hero: {
    badge: 'Senior Product Manager',
    description: 'PM hands-on com mais de 15 anos de atuação em produto, crescimento, operações e negócios. Focado em product discovery, otimização de funil, métricas e IA. Atuação direta na estratégia, desenvolvimento e área de negócios de diversas startups e plataformas do ecossistema.',
    fullHeroText: 'Construindo produtos B2B SaaS do zero à escala.',
    btnProjects: 'Ver Cases',
    btnInfo: 'Mais info',
    btnWhatsApp: 'WhatsApp',
  },
  sections: {
    projects: {
      title: 'Em Destaque',
      subtitle: 'Produtos construídos e escalados recentemente no agronegócio, com detalhes de evolução e roadmap.',
      btnAccess: 'Acessar'
    },
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Trajetória e progressão de carreira em gestão de produtos e negócios.',
    },
    education: {
      title: 'Educação & Certificações',
      subtitle: 'Minha base acadêmica e especializações recentes.',
      academic: 'Formação Acadêmica',
      certs: 'Certificações',
    },
    contact: {
      title: 'Entre em contato.',
      subtitle: 'Mande uma mensagem para conversarmos sobre novos projetos e oportunidades em Produto.',
      email: 'E-mail'
    }
  },
  projects: [
    {
      id: 1,
      title: 'FarmBy',
      description: 'Plataforma AgroTech com +17.744 usuários orgânicos e 2 milhões de acessos/mês. Construído do zero até forte tração.',
      link: 'https://app.farmby.com.br',
      emoji: '🌱',
      logo: '/FARMBY LOGO.png',
      color: 'from-emerald-500/20 to-green-500/20',
      image: '/farmby.png',
      timeline: [
        { date: 'Agosto 2023', title: 'Product Discovery & MVP', description: 'Início do discovery para mapear a dor no agronegócio e lançamento do Produto Mínimo Viável.' },
        { date: 'Janeiro 2024', title: 'Tração Inicial', description: 'Marco de 5.000 usuários orgânicos e melhoria da jornada do usuário (CRO).' },
        { date: 'Presente', title: 'Scale & Growth', description: '+17.744 usuários ativos e 2 milhões de acessos orgânicos/mês com foco contínuo em Acquisition.' },
      ]
    },
    {
      id: 2,
      title: 'Rural Rota - CRM do Agro',
      description: 'Plataforma SaaS de gestão de vendas em campo para o agro — da concepção ao lançamento na App Store. CRM offline-first com funil de vendas, rotas por GPS, caderno de campo e agente de IA por voz.',
      link: 'https://ruralrota.com',
      emoji: '🚜',
      logo: '/RURAL ROTA LOGO.png',
      color: 'from-amber-500/20 to-orange-500/20',
      image: '/ruralrota-v2.png',
      images: [
        { src: '/ruralrota-v1.png', label: '2024 · v1' },
        { src: '/ruralrota-v2.png', label: '2026 · v2' },
      ],
      timeline: [
        { date: 'Janeiro 2024', title: 'Discovery & Posicionamento', description: 'Identificação de lacuna no mercado e definição de estratégia para gestão digital de vendas.' },
        { date: 'Setembro 2024', title: 'Desenvolvimento do Core', description: 'Entrega do CRM de vendas, gestão de equipes externas e caderno de campo digital.' },
        { date: 'Janeiro 2026', title: 'Lançamento & Adoção', description: 'Entrega final dentro do prazo contratual, com 6 grandes empresas clientes adquiridas.' },
        { date: 'Julho 2026', title: 'Rebuild do Zero (v2)', description: 'Plataforma refeita do zero e publicada na App Store: CRM offline-first que funciona sem sinal no campo, rotas por GPS, agente de IA por voz que registra visitas, leads e despesas sozinho, e multi-tenant com painel admin próprio.' },
      ]
    },
    {
      id: 3,
      title: 'Quem Produz',
      description: 'Novo projeto em desenvolvimento. Focado em conectar a cadeia produtiva do agronegócio.',
      link: 'https://quemproduz.com',
      emoji: '🌾',
      logo: '/QUEM PRODUZ LOGO.png',
      color: 'from-blue-500/20 to-indigo-500/20',
      image: '/quemproduz.png',
      timeline: [
        { date: '2025', title: 'Concepção do Produto', description: 'Mapeamento de stakeholders e design da arquitetura da plataforma.' },
        { date: 'Presente', title: 'Em Desenvolvimento', description: 'Estruturação, planejamento e desenvolvimento ativo do ecossistema e interface.' },
      ]
    },
  ],
  experience: [
    {
      id: 1,
      role: 'Growth Product Manager',
      company: 'FarmBy',
      period: 'Maio 2023 — Presente',
      description: 'Product Management e Growth de plataforma SaaS no agronegócio. Crescimento médio superior a 10% ao mês. Atuação em Product Strategy, Growth Strategy, CRO e AI.',
    },
    {
      id: 2,
      role: 'Fundador & Desenvolvedor de Produto',
      company: 'Rural Rota - CRM do Agro',
      period: 'Jan 2024 — Presente',
      description: 'Idealizei, desenvolvi e publiquei o Rural Rota — da descoberta do problema ao lançamento na App Store. CRM offline-first, rotas por GPS, agente de IA por voz e multi-tenant com painel admin. Stack: React, TypeScript, Capacitor, Supabase e OpenAI.',
    },
    {
      id: 3,
      role: 'Gerente de Marketing de Produtos',
      company: 'Empresa do Setor Elétrico',
      period: 'Jan 2019 — Fev 2023',
      description: 'Gestão por KPIs e padronização de processos para 50 projetos simultâneos. Redução de 20% no ciclo de entrega liderando equipe de 30 pessoas.',
    },
    {
      id: 4,
      role: 'Consultor Comercial',
      company: 'Banco PAN',
      period: 'Jan 2015 — Nov 2018',
      description: 'Atuação consultiva na venda de produtos financeiros (crédito com garantia, consórcios). Condução do ciclo completo de atendimento, análise e fechamento.',
    },
    {
      id: 5,
      role: 'Coordenador de Desenvolvimento de Negócios',
      company: 'Rodobens Negócios Imobiliários',
      period: 'Abr 2010 — Nov 2014',
      description: 'Redução de 40% no tempo de análise. Gestão de carteira de R$7,8 milhões e coordenação de 15 terceirizados.',
    },
    {
      id: 6,
      role: 'Designer da web',
      company: 'AG2 Publicis Modem',
      period: 'Jan 2009 — Dez 2009',
      description: 'Atuação em projetos web para grandes contas (Bradesco, GM, Angeloni), apoiando criação, layouts e colaboração com equipes de dev.',
    }
  ],
  education: [
    {
       id: 1,
       title: 'Gestão Financeira, Business/Commerce',
       institution: 'Fundação Getulio Vargas (FGV)',
       period: 'Out 2020 — Out 2022'
    },
    {
       id: 2,
       title: 'Lógica de Programação',
       institution: 'Alura',
       period: 'Jan 2021 — Jun 2021'
    }
  ],
  certifications: [
    'Introduction to agent skills',
    'AI Fluency Framework & Foundations',
    'Claude code 101'
  ],
  navItems: [
    { id: 'sobre', icon: User, label: 'Sobre' },
    { id: 'projetos', icon: FolderGit2, label: 'Projetos' },
    { id: 'experiencia', icon: Briefcase, label: 'Experiência' },
    { id: 'formacao', icon: GraduationCap, label: 'Formação' },
    { id: 'contato', icon: Mail, label: 'Contato' },
  ]
};

const en: ContentData = {
  hero: {
    badge: 'Senior Product Manager',
    description: 'Hands-on PM with over 15 years of experience in product, growth, operations, and business. Focused on product discovery, funnel optimization, metrics, and AI. Direct involvement in strategy, development, and business operations across various startups and platforms.',
    fullHeroText: 'Building B2B SaaS products from scratch to scale.',
    btnProjects: 'View Cases',
    btnInfo: 'More info',
    btnWhatsApp: 'WhatsApp',
  },
  sections: {
    projects: {
      title: 'Featured Projects',
      subtitle: 'Recently built and scaled products in agribusiness, detailing evolution and roadmap.',
      btnAccess: 'Go to'
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Career trajectory and progression in product and business management.',
    },
    education: {
      title: 'Education & Certifications',
      subtitle: 'My academic background and recent specializations.',
      academic: 'Academic Background',
      certs: 'Certifications',
    },
    contact: {
      title: 'Get in touch.',
      subtitle: 'Send a message to discuss new projects and product opportunities.',
      email: 'Email'
    }
  },
  projects: [
    {
      id: 1,
      title: 'FarmBy',
      description: 'AgroTech Platform with +17,744 organic users and 2 million accesses/month. Built from scratch to strong traction.',
      link: 'https://app.farmby.com.br',
      emoji: '🌱',
      logo: '/FARMBY LOGO.png',
      color: 'from-emerald-500/20 to-green-500/20',
      image: '/farmby.png',
      timeline: [
        { date: 'August 2023', title: 'Product Discovery & MVP', description: 'Started discovery to map agribusiness pain points and launched the Minimum Viable Product.' },
        { date: 'January 2024', title: 'Initial Traction', description: 'Milestone of 5,000 organic users and user journey improvement (CRO).' },
        { date: 'Present', title: 'Scale & Growth', description: '+17,744 active users and 2 million organic accesses/month with continuous focus on Acquisition.' },
      ]
    },
    {
      id: 2,
      title: 'Rural Rota - CRM do Agro',
      description: 'SaaS platform for field sales management in agribusiness — from concept to App Store launch. Offline-first CRM with sales funnel, GPS route tracking, field notebook and a voice AI agent.',
      link: 'https://ruralrota.com',
      emoji: '🚜',
      logo: '/RURAL ROTA LOGO.png',
      color: 'from-amber-500/20 to-orange-500/20',
      image: '/ruralrota-v2.png',
      images: [
        { src: '/ruralrota-v1.png', label: '2024 · v1' },
        { src: '/ruralrota-v2.png', label: '2026 · v2' },
      ],
      timeline: [
        { date: 'January 2024', title: 'Discovery & Positioning', description: 'Identified a market gap and defined the strategy for digital sales management.' },
        { date: 'September 2024', title: 'Core Development', description: 'Delivered the sales CRM, external team management, and digital field notebook.' },
        { date: 'January 2026', title: 'Launch & Adoption', description: 'Final delivery within the contractual deadline, acquiring 6 major corporate clients.' },
        { date: 'July 2026', title: 'Rebuilt from Scratch (v2)', description: 'Platform rebuilt from scratch and published on the App Store: offline-first CRM that works without signal in the field, GPS route tracking, a voice AI agent that logs visits, leads and expenses on its own, and multi-tenant with its own admin panel.' },
      ]
    },
    {
      id: 3,
      title: 'Quem Produz',
      description: 'New project in development. Focused on connecting the agribusiness supply chain.',
      link: 'https://quemproduz.com',
      emoji: '🌾',
      logo: '/QUEM PRODUZ LOGO.png',
      color: 'from-blue-500/20 to-indigo-500/20',
      image: '/quemproduz.png',
      timeline: [
        { date: '2025', title: 'Product Conception', description: 'Stakeholder mapping and platform architecture design.' },
        { date: 'Present', title: 'In Development', description: 'Structuring, planning, and active development of the ecosystem and interface.' },
      ]
    },
  ],
  experience: [
    {
      id: 1,
      role: 'Growth Product Manager',
      company: 'FarmBy',
      period: 'May 2023 — Present',
      description: 'Product Management and Growth for a SaaS platform in agribusiness. Average growth exceeding 10% per month. Working on Product Strategy, Growth Strategy, CRO, and AI.',
    },
    {
      id: 2,
      role: 'Founder & Product Developer',
      company: 'Rural Rota - CRM do Agro',
      period: 'Jan 2024 — Present',
      description: 'Conceived, built and shipped Rural Rota — from problem discovery to App Store launch. Offline-first CRM, GPS route tracking, voice AI agent and multi-tenant with admin panel. Stack: React, TypeScript, Capacitor, Supabase and OpenAI.',
    },
    {
      id: 3,
      role: 'Product Marketing Manager',
      company: 'Electrical Sector Company',
      period: 'Jan 2019 — Feb 2023',
      description: 'KPI management and process standardization for 50 simultaneous projects. Reduced delivery cycle by 20% while leading a 30-person team.',
    },
    {
      id: 4,
      role: 'Commercial Consultant',
      company: 'Banco PAN',
      period: 'Jan 2015 — Nov 2018',
      description: 'Consultative role in selling financial products (collateralized credit, consortiums). Conducted the full service cycle, from analysis to closing.',
    },
    {
      id: 5,
      role: 'Business Development Coordinator',
      company: 'Rodobens Negócios Imobiliários',
      period: 'Apr 2010 — Nov 2014',
      description: 'Reduced analysis time by 40%. Managed a BRL 7.8 million portfolio and coordinated 15 outsourced professionals.',
    },
    {
      id: 6,
      role: 'Web Designer',
      company: 'AG2 Publicis Modem',
      period: 'Jan 2009 — Dec 2009',
      description: 'Worked on web projects for major accounts (Bradesco, GM, Angeloni), supporting creation, layouts, and collaboration with dev teams.',
    }
  ],
  education: [
    {
       id: 1,
       title: 'Financial Management, Business/Commerce',
       institution: 'Fundação Getulio Vargas (FGV)',
       period: 'Oct 2020 — Oct 2022'
    },
    {
       id: 2,
       title: 'Programming Logic',
       institution: 'Alura',
       period: 'Jan 2021 — Jun 2021'
    }
  ],
  certifications: [
    'Introduction to agent skills',
    'AI Fluency Framework & Foundations',
    'Claude code 101'
  ],
  navItems: [
    { id: 'sobre', icon: User, label: 'About' },
    { id: 'projetos', icon: FolderGit2, label: 'Projects' },
    { id: 'experiencia', icon: Briefcase, label: 'Experience' },
    { id: 'formacao', icon: GraduationCap, label: 'Education' },
    { id: 'contato', icon: Mail, label: 'Contact' },
  ]
};

export const content = { pt, en };
