import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import portraitAsset from "@/assets/anthero-professional-portrait.png";
import casualPortraitAsset from "@/assets/anthero-casual.jpeg.asset.json";
import meuwattAsset from "@/assets/meuwatt.jpg.asset.json";
import mouraverseAsset from "@/assets/mouraverse.jpg.asset.json";
import nexoAsset from "@/assets/nexo.jpg.asset.json";
import theroAsset from "@/assets/thero.jpg.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anthero Vieira Neto — Software Engineer" },
      {
        name: "description",
        content:
          "Portfólio de Anthero Vieira Neto, engenheiro de software especializado em arquitetura, DevOps e inteligência artificial aplicada.",
      },
      { property: "og:title", content: "Anthero Vieira Neto — Software Engineer" },
      {
        property: "og:description",
        content:
          "Engenharia de software, arquitetura, DevOps e IA aplicada a produtos reais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

type Language = "pt" | "en";

const content = {
  pt: {
    nav: { work: "Projetos", journey: "Trajetória", approach: "Como trabalho", contact: "Contato" },
    menu: "Abrir menu",
    close: "Fechar menu",
    language: "Mudar idioma para inglês",
    availability: "Brasil · Disponível globalmente",
    role: "Engenheiro de Software",
    introLead: "Eu transformo",
    introAccent: "complexidade",
    introTail: "em produto.",
    intro:
      "Há mais de 18 anos construindo software, conectando arquitetura, DevOps e inteligência artificial para levar ideias ambiciosas até a produção.",
    viewWork: "Ver projetos",
    scroll: "Role para explorar",
    signalTitle: "Engenharia com visão de sistema.",
    signalBody:
      "Do desenho da arquitetura à operação, trabalho nos pontos onde produto, código e infraestrutura precisam funcionar como uma coisa só.",
    years: "18+",
    yearsLabel: "anos construindo software",
    disciplines: ["Arquitetura", "DevOps", "IA aplicada"],
    projectsEyebrow: "01 — Trabalho selecionado",
    projectsTitle: "Produtos reais para problemas que importam.",
    projectsIntro:
      "Uma seleção de plataformas, ferramentas e sistemas que unem profundidade técnica a uma experiência clara.",
    visit: "Visitar projeto",
    privateProject: "Projeto em desenvolvimento",
    problem: "Contexto",
    contribution: "Contribuição",
    solution: "Sistema",
    projects: [
      {
        name: "MeuWatt",
        category: "Energia · SaaS industrial",
        statement: "Monitoramento de precisão para operações de energia solar em escala.",
        problem:
          "Operações solares industriais precisam transformar telemetria dispersa em decisões confiáveis e rápidas.",
        contribution:
          "Arquitetura de software e desenho da ingestão de dados em tempo real por webhooks.",
        solution:
          "Uma plataforma de monitoramento que centraliza desempenho energético e dá visibilidade operacional às usinas.",
        stack: ["Arquitetura", "Tempo real", "Webhooks", "SaaS"],
        href: "https://www.meuwatt.com.br/",
        image: meuwattAsset.url,
        imageAlt: "Tela do MeuWatt para monitoramento solar industrial",
      },
      {
        name: "JuriSuit",
        category: "Legaltech · Produto SaaS",
        statement: "O trabalho jurídico, reunido em um único espaço inteligente.",
        problem:
          "Advogados e escritórios operam entre dezenas de portais, processos, prazos e ferramentas desconectadas.",
        contribution:
          "Concepção de produto e arquitetura de uma plataforma completa para a operação jurídica brasileira.",
        solution:
          "Processos, clientes, tarefas, agenda e planos de ação assistidos por IA, sempre com aprovação humana.",
        stack: ["Next.js", "Postgres", "Prisma", "IA", "Stripe"],
      },
      {
        name: "Nexo",
        category: "IA local · Open source",
        statement: "Uma máquina organizada sem nuvem, assinatura ou linha de comando.",
        problem:
          "Downloads acumulam documentos, imagens, mídia e instaladores sem contexto ou organização consistente.",
        contribution:
          "Produto local-first com arquitetura de microsserviços e um pipeline híbrido de decisão.",
        solution:
          "Um aplicativo desktop que observa, entende e organiza arquivos localmente, com uma interface única de acompanhamento.",
        stack: ["Electron", "React 19", "FastAPI", "IA local"],
        href: "https://get-nexo.vercel.app/",
        image: nexoAsset.url,
        imageAlt: "Página do Nexo, organizador local de arquivos com inteligência artificial",
      },
      {
        name: "Thero",
        category: "Ferramentas para devs · Open source",
        statement: "Claude Code preparado para trabalho sério desde o primeiro comando.",
        problem:
          "Assistentes de código começam sem o contexto, os critérios e as práticas específicas de cada projeto.",
        contribution:
          "Criação de uma suíte que prepara contexto, regras e execução sem impor dependências ao projeto.",
        solution:
          "Um ambiente reutilizável com geração de sistema, indexação, agentes especializados e mudanças verificáveis.",
        stack: ["Python", "Claude Code", "Agent skills", "Open source"],
        href: "https://netovieira.github.io/thero/",
        image: theroAsset.url,
        imageAlt: "Página da suíte Thero para Claude Code",
      },
      {
        name: "Mouraverse",
        category: "IA corporativa · Knowledge systems",
        statement: "Memória hierárquica para dar contexto real a sistemas de inteligência artificial.",
        problem:
          "Conhecimento de produto e engenharia se perde entre código, documentos e decisões distribuídas.",
        contribution:
          "Desenho de um sistema proprietário de memória e arquitetura multiagente para bases complexas.",
        solution:
          "RAG recursivo que preserva a hierarquia do conhecimento e dá contexto especializado aos agentes Athena e Zeus.",
        stack: ["RAG", "Multiagentes", "TypeScript", "Python", "Kubernetes"],
        href: "https://avnt.notion.site/MOURAVERSE-18833d256cec80ce92f5cd45a6a4b4d8",
        image: mouraverseAsset.url,
        imageAlt: "Documentação pública do projeto Mouraverse",
      },
    ],
    journeyEyebrow: "02 — Trajetória",
    journeyTitle: "Construir, compreender, evoluir.",
    journeyIntro:
      "Minha carreira avançou junto com a escala dos problemas: do código à arquitetura, da infraestrutura à inteligência aplicada.",
    timeline: [
      {
        marker: "Base",
        title: "Engenharia como ofício",
        text: "Uma carreira construída no desenvolvimento de software e na busca por sistemas mais claros, confiáveis e sustentáveis.",
      },
      {
        marker: "Escala",
        title: "Arquitetura e DevOps",
        text: "Atuação em arquitetura sênior e cultura de entrega, aproximando software, infraestrutura e operação.",
      },
      {
        marker: "Contexto",
        title: "Inteligência artificial aplicada",
        text: "Pesquisa e construção de sistemas de memória, RAG e agentes capazes de trabalhar com o contexto real das organizações.",
      },
      {
        marker: "Agora",
        title: "Produtos de ponta a ponta",
        text: "Criação independente de produtos que combinam engenharia profunda, visão de negócio e uma experiência simples para quem usa.",
      },
    ],
    approachEyebrow: "03 — Como trabalho",
    approachTitle: "Decisões técnicas a serviço do produto.",
    principles: [
      {
        number: "01",
        title: "Entender antes de abstrair",
        text: "Começo pelo problema, pelos usuários e pelas restrições reais. A arquitetura vem depois — e precisa merecer sua complexidade.",
      },
      {
        number: "02",
        title: "Projetar para operar",
        text: "Software não termina no deploy. Observabilidade, segurança, custo e manutenção fazem parte da solução desde o início.",
      },
      {
        number: "03",
        title: "IA com responsabilidade",
        text: "Automação deve ampliar a capacidade humana, preservar contexto e manter decisões críticas sob controle de pessoas.",
      },
    ],
    stackEyebrow: "Ferramentas e disciplinas",
    stack: [
      "Arquitetura de software",
      "Sistemas distribuídos",
      "DevOps & Kubernetes",
      "TypeScript & React",
      "Python & FastAPI",
      "RAG & sistemas multiagentes",
      "Plataformas SaaS",
      "Observabilidade",
    ],
    contactEyebrow: "04 — Contato",
    contactTitle: "Vamos construir algo que valha a pena?",
    contactText:
      "Estou sempre aberto a boas conversas sobre produtos ambiciosos, arquitetura de software e inteligência artificial aplicada.",
    linkedin: "Conversar no LinkedIn",
    github: "Ver GitHub",
    footer: "Projetado e construído com intenção.",
  },
  en: {
    nav: { work: "Work", journey: "Journey", approach: "How I work", contact: "Contact" },
    menu: "Open menu",
    close: "Close menu",
    language: "Switch language to Portuguese",
    availability: "Brazil · Working globally",
    role: "Software Engineer",
    introLead: "I turn",
    introAccent: "complexity",
    introTail: "into product.",
    intro:
      "Building software for over 18 years, connecting architecture, DevOps, and artificial intelligence to take ambitious ideas all the way to production.",
    viewWork: "View selected work",
    scroll: "Scroll to explore",
    signalTitle: "Engineering with a systems view.",
    signalBody:
      "From architecture to operations, I work where product, code, and infrastructure must behave as one.",
    years: "18+",
    yearsLabel: "years building software",
    disciplines: ["Architecture", "DevOps", "Applied AI"],
    projectsEyebrow: "01 — Selected work",
    projectsTitle: "Real products for problems that matter.",
    projectsIntro:
      "A selection of platforms, tools, and systems combining technical depth with a clear experience.",
    visit: "Visit project",
    privateProject: "Work in progress",
    problem: "Context",
    contribution: "Contribution",
    solution: "System",
    projects: [
      {
        name: "MeuWatt",
        category: "Energy · Industrial SaaS",
        statement: "Precision monitoring for solar energy operations at scale.",
        problem:
          "Industrial solar operations need to turn scattered telemetry into reliable, timely decisions.",
        contribution:
          "Software architecture and real-time data ingestion design through webhooks.",
        solution:
          "A monitoring platform that centralizes energy performance and gives solar plants operational visibility.",
        stack: ["Architecture", "Real time", "Webhooks", "SaaS"],
        href: "https://www.meuwatt.com.br/",
        image: meuwattAsset.url,
        imageAlt: "MeuWatt industrial solar monitoring interface",
      },
      {
        name: "JuriSuit",
        category: "Legaltech · SaaS product",
        statement: "Legal work brought together in one intelligent workspace.",
        problem:
          "Lawyers and firms operate across dozens of disconnected portals, cases, deadlines, and tools.",
        contribution:
          "Product conception and architecture for a complete Brazilian legal operations platform.",
        solution:
          "Cases, clients, tasks, calendar, and AI-assisted action plans, always with human approval.",
        stack: ["Next.js", "Postgres", "Prisma", "AI", "Stripe"],
      },
      {
        name: "Nexo",
        category: "Local AI · Open source",
        statement: "An organized machine without cloud storage, subscriptions, or a command line.",
        problem:
          "Downloads pile up documents, images, media, and installers without context or consistent organization.",
        contribution:
          "A local-first product with a microservices architecture and hybrid decision pipeline.",
        solution:
          "A desktop app that observes, understands, and organizes files locally through a single monitoring interface.",
        stack: ["Electron", "React 19", "FastAPI", "Local AI"],
        href: "https://get-nexo.vercel.app/",
        image: nexoAsset.url,
        imageAlt: "Nexo local AI file organizer website",
      },
      {
        name: "Thero",
        category: "Developer tools · Open source",
        statement: "Claude Code ready for serious work from the very first command.",
        problem:
          "Coding assistants start without each project's context, quality standards, and specific practices.",
        contribution:
          "A suite that prepares context, rules, and execution without imposing dependencies on the project.",
        solution:
          "A reusable environment with system generation, indexing, specialist agents, and verifiable changes.",
        stack: ["Python", "Claude Code", "Agent skills", "Open source"],
        href: "https://netovieira.github.io/thero/",
        image: theroAsset.url,
        imageAlt: "Thero suite for Claude Code website",
      },
      {
        name: "Mouraverse",
        category: "Enterprise AI · Knowledge systems",
        statement: "Hierarchical memory that gives artificial intelligence genuine context.",
        problem:
          "Product and engineering knowledge gets lost across code, documents, and distributed decisions.",
        contribution:
          "Design of a proprietary memory system and multi-agent architecture for complex knowledge bases.",
        solution:
          "Recursive RAG that preserves knowledge hierarchy and gives specialized context to Athena and Zeus agents.",
        stack: ["RAG", "Multi-agent", "TypeScript", "Python", "Kubernetes"],
        href: "https://avnt.notion.site/MOURAVERSE-18833d256cec80ce92f5cd45a6a4b4d8",
        image: mouraverseAsset.url,
        imageAlt: "Public Mouraverse project documentation",
      },
    ],
    journeyEyebrow: "02 — Journey",
    journeyTitle: "Build, understand, evolve.",
    journeyIntro:
      "My career has progressed alongside the scale of the problems: from code to architecture, from infrastructure to applied intelligence.",
    timeline: [
      {
        marker: "Foundation",
        title: "Engineering as a craft",
        text: "A career built in software development and the pursuit of clearer, more reliable, and sustainable systems.",
      },
      {
        marker: "Scale",
        title: "Architecture and DevOps",
        text: "Working across senior architecture and delivery culture, bringing software, infrastructure, and operations closer together.",
      },
      {
        marker: "Context",
        title: "Applied artificial intelligence",
        text: "Researching and building memory, RAG, and agent systems capable of working with real organizational context.",
      },
      {
        marker: "Now",
        title: "End-to-end products",
        text: "Independently building products that combine deep engineering, business judgment, and a simple user experience.",
      },
    ],
    approachEyebrow: "03 — How I work",
    approachTitle: "Technical decisions in service of the product.",
    principles: [
      {
        number: "01",
        title: "Understand before abstracting",
        text: "I start with the problem, users, and real constraints. Architecture comes next — and must earn its complexity.",
      },
      {
        number: "02",
        title: "Design for operations",
        text: "Software does not end at deployment. Observability, security, cost, and maintenance belong in the solution from day one.",
      },
      {
        number: "03",
        title: "Responsible AI",
        text: "Automation should amplify human ability, preserve context, and keep critical decisions under people's control.",
      },
    ],
    stackEyebrow: "Tools and disciplines",
    stack: [
      "Software architecture",
      "Distributed systems",
      "DevOps & Kubernetes",
      "TypeScript & React",
      "Python & FastAPI",
      "RAG & multi-agent systems",
      "SaaS platforms",
      "Observability",
    ],
    contactEyebrow: "04 — Contact",
    contactTitle: "Shall we build something worthwhile?",
    contactText:
      "I am always open to thoughtful conversations about ambitious products, software architecture, and applied artificial intelligence.",
    linkedin: "Talk on LinkedIn",
    github: "View GitHub",
    footer: "Designed and built with intent.",
  },
} as const;

function Portfolio() {
  const [language, setLanguage] = useState<Language>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = content[language];

  const consulting = language === "pt"
    ? [
        ["Consultoria técnica", "Diagnóstico direto para transformar restrições de negócio em decisões técnicas sustentáveis."],
        ["Soluções exclusivas", "Produtos e sistemas desenhados para o contexto real da operação — não adaptações genéricas."],
        ["Cultura & fluxos", "Práticas, rituais e automações que aproximam engenharia, produto e operação."],
        ["Gargalos & manutenção", "Análise de produção, estabilização e evolução contínua para devolver velocidade aos times."],
      ]
    : [
        ["Technical advisory", "Direct diagnosis that turns business constraints into sustainable technical decisions."],
        ["Bespoke solutions", "Products and systems designed for the operation's real context — never generic adaptations."],
        ["Culture & workflows", "Practices, rituals, and automation that bring engineering, product, and operations together."],
        ["Bottlenecks & maintenance", "Production analysis, stabilization, and continuous evolution that restores team velocity."],
      ];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const navItems = [
    [copy.nav.work, "#projetos"],
    [copy.nav.journey, "#trajetoria"],
    [copy.nav.approach, "#metodo"],
    [copy.nav.contact, "#contato"],
  ] as const;

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="page-shell flex h-20 items-center justify-between">
          <a href="#inicio" className="group flex items-center gap-4" aria-label="Anthero Vieira Neto">
            <AvntMark />
            <span className="hidden text-xs font-medium text-muted-foreground sm:block">ANTHERO VIEIRA NETO</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {navItems.map(([label, href]) => <a key={href} href={href} className="nav-link text-sm text-muted-foreground">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex border border-border bg-secondary p-1" aria-label="Idioma">
              {(["pt", "en"] as const).map((option) => (
                <Button key={option} type="button" variant="ghost" size="sm" onClick={() => setLanguage(option)} aria-pressed={language === option} aria-label={option === "pt" ? "Português" : "English"} className={`h-7 rounded-none px-2.5 text-[10px] uppercase ${language === option ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>{option}</Button>
              ))}
            </div>
            <Button type="button" variant="outline" size="icon" onClick={() => setMenuOpen((open) => !open)} className="rounded-none lg:hidden" aria-expanded={menuOpen} aria-label={menuOpen ? copy.close : copy.menu}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Menu móvel">{navItems.map(([label, href], index) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-4 border-b border-border py-4 text-lg"><span className="text-xs text-accent">0{index + 1}</span>{label}</a>)}</nav>}
      </header>

      <section id="inicio" className="relative min-h-[92svh] pt-20">
        <div className="pointer-events-none absolute inset-0 technical-grid" />
        <div className="page-shell relative grid min-h-[calc(92svh-5rem)] content-end pb-14 pt-24">
          <div className="hero-enter grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-8 flex items-center gap-3 text-xs uppercase text-muted-foreground"><span className="status-dot" />{copy.availability}</div>
              <p className="mb-4 text-xs font-semibold uppercase text-accent">{copy.role} · Consultant · Builder</p>
              <h1 className="max-w-5xl text-balance font-display text-[clamp(3.25rem,8.2vw,8.2rem)] font-semibold leading-[0.9]">
                {copy.introLead} <span className="chrome-text">{copy.introAccent}</span><br />{copy.introTail}
              </h1>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-5 lg:col-span-4 lg:grid-cols-1">
              <div className="portrait-frame aspect-[4/5] overflow-hidden border border-border bg-secondary lg:w-44">
                <img src={portraitAsset} alt="Retrato profissional de Anthero Vieira Neto" className="h-full w-full object-cover" />
              </div>
              <div className="border-l border-accent/50 pl-5">
                <p className="text-sm leading-relaxed text-muted-foreground">{copy.intro}</p>
                <a href="#projetos" className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-foreground">{copy.viewWork}<ArrowDown size={16} /></a>
              </div>
            </div>
          </div>
          <div className="mt-14 flex items-end justify-between border-t border-border pt-5 text-[10px] uppercase text-muted-foreground">
            <span>{copy.years} {copy.yearsLabel}</span><span>{copy.scroll} ↓</span>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60 py-20 sm:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="section-eyebrow">00 — {language === "pt" ? "Atuação" : "Capabilities"}</p><h2 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">{copy.signalTitle}</h2></div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-8">
            {consulting.map(([title, text], index) => <article key={title} className="capability bg-secondary p-7"><span className="text-xs text-accent">0{index + 1}</span><h3 className="mt-10 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="projetos" className="scroll-mt-20 py-24 sm:py-36">
        <div className="page-shell">
          <SectionHeader eyebrow={copy.projectsEyebrow} title={copy.projectsTitle} intro={copy.projectsIntro} />
          <div className="project-grid mt-16 sm:mt-24">
            {copy.projects.map((project, index) => (
              <article key={project.name} className={`project-card group ${index === 0 || index === 3 ? "project-wide" : ""}`}>
                {"image" in project && project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025] group-hover:opacity-55" /> : <div className="jurisuit-art absolute inset-0 bg-primary"><Braces className="absolute left-7 top-7 text-accent" size={34} /></div>}
                <div className="project-shade absolute inset-0" />
                <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-start justify-between"><span className="text-[10px] font-semibold uppercase text-accent">0{index + 1} / {project.category}</span>{"href" in project && project.href ? <a href={project.href} target="_blank" rel="noreferrer" className="icon-link" aria-label={`${copy.visit}: ${project.name}`}><ArrowUpRight size={18} /></a> : <span className="text-[10px] uppercase text-muted-foreground">{copy.privateProject}</span>}</div>
                  <div><h3 className="font-display text-4xl font-semibold sm:text-5xl">{project.name}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{project.statement}</p><div className="project-detail mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-2"><p className="text-xs leading-relaxed text-muted-foreground">{project.contribution}</p><div className="flex flex-wrap content-start gap-2">{project.stack.slice(0, 3).map((item) => <span key={item} className="border border-border bg-background/60 px-2 py-1 text-[9px] uppercase text-muted-foreground">{item}</span>)}</div></div></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trajetoria" className="scroll-mt-20 border-y border-border bg-secondary/60 py-24 sm:py-32">
        <div className="page-shell grid gap-16 lg:grid-cols-12"><div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"><p className="section-eyebrow">{copy.journeyEyebrow}</p><h2 className="mt-6 font-display text-5xl font-semibold leading-tight">{copy.journeyTitle}</h2><p className="mt-6 text-muted-foreground">{copy.journeyIntro}</p><figure className="casual-portrait mt-10 max-w-sm overflow-hidden border border-border"><img src={casualPortraitAsset.url} alt={language === "pt" ? "Anthero em um momento descontraído" : "Anthero in a casual moment"} loading="lazy" className="aspect-[4/3] w-full object-cover object-[center_57%]" /><figcaption className="flex items-center justify-between border-t border-border bg-background px-4 py-3 text-[10px] uppercase text-muted-foreground"><span>{language === "pt" ? "Fora do escritório" : "Off the clock"}</span><span>SP · BR</span></figcaption></figure></div><div className="lg:col-span-8">{copy.timeline.map((item, index) => <article key={item.title} className="timeline-row grid gap-5 border-t border-border py-8 sm:grid-cols-[5rem_1fr]"><span className="text-xs text-accent">0{index + 1}</span><div><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="text-2xl font-semibold">{item.title}</h3><span className="text-xs uppercase text-muted-foreground">{item.marker}</span></div><p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{item.text}</p></div></article>)}</div></div>
      </section>

      <section id="metodo" className="scroll-mt-20 py-24 sm:py-32"><div className="page-shell"><SectionHeader eyebrow={copy.approachEyebrow} title={copy.approachTitle} intro={copy.signalBody} /><div className="mt-16 grid gap-px bg-border md:grid-cols-3">{copy.principles.map((principle) => <article key={principle.number} className="bg-background p-7 sm:p-9"><span className="text-xs text-accent">{principle.number}</span><h3 className="mt-16 text-xl font-semibold">{principle.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{principle.text}</p></article>)}</div><div className="mt-20 border-t border-border pt-7"><p className="section-eyebrow">{copy.stackEyebrow}</p><div className="mt-8 flex flex-wrap gap-3">{copy.stack.map((item) => <span key={item} className="inline-flex items-center gap-2 border border-border bg-secondary px-4 py-3 text-xs text-muted-foreground"><Check size={13} className="text-accent" />{item}</span>)}</div></div></div></section>

      <section id="contato" className="scroll-mt-20 border-t border-border py-24 sm:py-36"><div className="page-shell"><p className="section-eyebrow">{copy.contactEyebrow}</p><div className="mt-10 grid gap-14 lg:grid-cols-12 lg:items-end"><h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] sm:text-7xl lg:col-span-8">{copy.contactTitle}</h2><div className="lg:col-span-4"><p className="text-muted-foreground">{copy.contactText}</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://www.linkedin.com/in/anthero-vieira-neto-aa7a6b8a" target="_blank" rel="noreferrer" className="contact-link bg-accent text-accent-foreground"><Linkedin size={17} />{copy.linkedin}</a><a href="https://github.com/netovieira" target="_blank" rel="noreferrer" className="contact-link border border-border"><Github size={17} />{copy.github}</a></div></div></div><footer className="mt-28 flex flex-col gap-5 border-t border-border pt-7 text-[10px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><AvntMark /><span>© {new Date().getFullYear()} Anthero Vieira Neto</span></div><span>{copy.footer}</span></footer></div></section>
    </main>
  );
}

function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="lg:col-span-8 lg:col-start-5">
        <h2 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] sm:text-6xl">{title}</h2>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </div>
    </div>
  );
}

function AvntMark() {
  return <span className="avnt-mark" aria-hidden="true"><i>A</i><i>V</i><i>N</i><i>T</i></span>;
}