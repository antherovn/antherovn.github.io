import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  Menu,
  Play,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import portraitAsset from "@/assets/anthero-professional-portrait.png";
import casualPortraitAsset from "@/assets/anthero-casual.jpeg";
import godAxiom from "@/assets/coredrain/god-axiom.jpg";
import godSolarys from "@/assets/coredrain/god-solarys.jpg";
import godSylvara from "@/assets/coredrain/god-sylvara.jpg";
import godVorrath from "@/assets/coredrain/god-vorrath.jpg";
import godVulkran from "@/assets/coredrain/god-vulkran.jpg";
import theroTvAtmosfera from "@/assets/therotv/atmosfera.jpg";
import theroTvFrame from "@/assets/therotv/app-frame.jpg";
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
        content: "Engenharia de software, arquitetura, DevOps e IA aplicada a produtos reais.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-anthero.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-anthero.png" },
    ],
  }),
  component: Portfolio,
});

type Language = "pt" | "en";

const content = {
  pt: {
    nav: {
      work: "Theroverse",
      tv: "TheroTV",
      game: "CoreDrain",
      journey: "Trajetória",
      approach: "Como trabalho",
      contact: "Contato",
    },
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
    projectsEyebrow: "01 — Ecossistema Theroverse",
    projectsTitle: "Uma suíte, cinco mundos que se conectam.",
    projectsIntro:
      "Planetas autossustentáveis que protegem seus dados, naves que mapeiam código sem queimar tokens e inteligência de engenharia para blindar sua produção. Open source, local-first e 0% telemetria invasiva.",
    suiteCta: "Conhecer o Theroverse",
    suiteCtaHref: "https://theroverse.github.io/",
    theroTvEyebrow: "02 — TheroTV",
    theroTvTitle: "Cada um na sua tela. Todo mundo no mesmo ponto.",
    theroTvText:
      "Um app de entretenimento que reúne TV ao vivo, filmes, séries e doramas numa experiência única — com sala de cinema compartilhada, synchronized watch party, widget de continuidade e player próprio. Android, iOS e desktop.",
    theroTvHref: "https://therotv.vercel.app/",
    theroTvHighlights: [
      {
        label: "TV ao vivo & EPG",
        text: "Canais agrupados por país e programação completa na palma da mão.",
      },
      {
        label: "Catálogo sob demanda",
        text: "Milhares de títulos com sinopse, elenco e favoritos sincronizados.",
      },
      {
        label: "Sala de cinema",
        text: "Assista com amigos em sincronia, com reações e bate-papo ao vivo.",
      },
      {
        label: "Widget & multiplataforma",
        text: "Continue de onde parou direto da tela inicial — Android, iOS e desktop.",
      },
    ],
    theroTvChipLive: "Ao vivo",
    theroTvChipContinue: "Continuar",
    theroTvChipRoom: "Assistindo junto",
    products: [
      {
        name: "Thero",
        role: "O Maestro da IA",
        tagline: "Claude Code preparado para trabalho sério desde o primeiro comando.",
        description:
          "Um Engineering Operating System que injeta contexto persistente, regras de engenharia sênior e agentes especializados no início de cada projeto — sem impor dependências ao repositório.",
        stack: ["Python", "Agent skills", "Open source"],
        href: "https://theroverse.github.io/thero/",
      },
      {
        name: "Athena",
        role: "A Nave Cartógrafa",
        tagline: "Uma planta baixa do seu projeto, gerada e mantida pela IA.",
        description:
          "Motor de resumo recursivo bottom-up com cache incremental em .athena/ — uma visão real da arquitetura em segundos, sem gastar uma chamada em algo que não mudou.",
        stack: ["Python", "Stdlib only", "Resumo recursivo"],
        href: "https://theroverse.github.io/athena/",
      },
      {
        name: "Zeus",
        role: "O Estrategista Tático",
        tagline: "Um plano de ação verificável antes da primeira linha de código.",
        description:
          "Cruza a tarefa em linguagem natural com os resumos da Athena e entrega um plano em Markdown com objetivo, arquivos e riscos — revisão humana antes de qualquer execução.",
        stack: ["Python", "Planejamento", "Open source"],
        href: "https://theroverse.github.io/zeus/",
      },
      {
        name: "Genesis",
        role: "O Berço da Criação",
        tagline: "O setup pós-formatação do Windows 11, do zero à máquina pronta.",
        description:
          "Assistente de 17 etapas com catálogo real de 68 apps via winget, detecção do que já existe e interface nativa WebView2 — num único .exe, sem instalador.",
        stack: ["PowerShell", "WebView2", "winget"],
        href: "https://theroverse.github.io/genesis/",
      },
      {
        name: "Nexo",
        role: "O Planeta dos Dados",
        tagline: "Uma máquina organizada sem nuvem, assinatura ou linha de comando.",
        description:
          "Aplicativo desktop local-first com arquitetura de microsserviços que observa, entende e organiza arquivos — mídia, documentos e downloads — só na sua máquina.",
        stack: ["Electron", "React 19", "FastAPI"],
        href: "https://get-nexo.vercel.app/",
      },
    ],
    coredrainEyebrow: "03 — Em desenvolvimento",
    coredrainTitle: "CoreDrain",
    coredrainTagline: "Faça o mundo amadurecer... e beba o seu Coração.",
    coredrainText:
      "Um jogo de disputa estratégica em 30 segundos: cidades, primórdiais deuses e cinco panteões em um ecossistema onde escolha, timing e engenharia social definem a partida — com respeito total ao jogador no modelo financeiro.",
    coredrainStatus: "Em desenvolvimento",
    coredrainHighlights: [
      "Disputas em 30 segundos",
      "Cinco panteões divinos",
      "Economia sem pay-to-win",
    ],
    coredrainPantheons: [
      {
        name: "Vulkran",
        title: "o Forjador",
        motto: "Tudo tem uma peça que falta.",
        image: godVulkran,
        imageAlt:
          "Vulkran, o deus forjador do CoreDrain, armadura de metal com martelo incandescente",
      },
      {
        name: "Sylvara",
        title: "a Tecelã das Raízes",
        motto: "A raiz espera. A raiz sempre vence.",
        image: godSylvara,
        imageAlt:
          "Sylvara, a deusa das raízes do CoreDrain, em floresta com folhas e cogumelos luminosos",
      },
      {
        name: "Axiom",
        title: "o Engenheiro de Vidas",
        motto: "Tudo é matéria-prima.",
        image: godAxiom,
        imageAlt: "Axiom, o deus cientista do CoreDrain, biotecnologia com brilho ciano",
      },
      {
        name: "Vorrath",
        title: "o Faminto",
        motto: "Tudo termina. Eu só apresso.",
        image: godVorrath,
        imageAlt: "Vorrath, o deus da sombra do CoreDrain, figura escura com espiral roxa no peito",
      },
      {
        name: "Solarys",
        title: "a Mantenedora",
        motto: "Devolva mais do que tomou.",
        image: godSolarys,
        imageAlt: "Solarys, a deusa da luz do CoreDrain, asas douradas com halo radiante",
      },
    ],
    privateEyebrow: "04 — Projetos privados",
    privateTitle: "Outros produtos em produção.",
    privateIntro:
      "Plataformas comerciais que arquitetiei e mantive em operação — disponíveis ao vivo.",
    privateProjects: [
      {
        name: "MeuWatt",
        category: "Energia · SaaS industrial",
        href: "https://www.meuwatt.com.br/",
      },
      {
        name: "CompareAuto",
        category: "Automotivo · Comparador",
        href: "https://compareauto.com.br/",
      },
      {
        name: "InteriorCarro",
        category: "Automotivo · Conteúdo",
        href: "https://interiorcarros.com.br/",
      },
      { name: "CoverPay", category: "Pagamentos · SaaS", href: "https://www.coverpay.com.br/" },
      {
        name: "CGC Energia",
        category: "Energia · Sistema de gestão",
        href: "https://system.cgc-energia.com.br/",
      },
    ],
    journeyEyebrow: "05 — Trajetória",
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
    approachEyebrow: "06 — Como trabalho",
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
    contactEyebrow: "07 — Contato",
    contactTitle: "Vamos construir algo que valha a pena?",
    contactText:
      "Estou sempre aberto a boas conversas sobre produtos ambiciosos, arquitetura de software e inteligência artificial aplicada.",
    linkedin: "Conversar no LinkedIn",
    github: "Ver GitHub",
    footer: "Projetado e construído com intenção.",
  },
  en: {
    nav: {
      work: "Theroverse",
      tv: "TheroTV",
      game: "CoreDrain",
      journey: "Journey",
      approach: "How I work",
      contact: "Contact",
    },
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
    projectsEyebrow: "01 — Theroverse ecosystem",
    projectsTitle: "One suite, five connected worlds.",
    projectsIntro:
      "Self-sustaining planets that protect your data, ships that map code without burning tokens, and engineering intelligence to shield your production. Open source, local-first, and 0% invasive telemetry.",
    suiteCta: "Explore Theroverse",
    suiteCtaHref: "https://theroverse.github.io/",
    theroTvEyebrow: "02 — TheroTV",
    theroTvTitle: "One screen each. Everyone in the same place.",
    theroTvText:
      "An entertainment app that brings live TV, movies, series, and doramas together in a single experience — with a shared cinema room, synchronized watch party, continuity widget, and its own player. Android, iOS, and desktop.",
    theroTvHref: "https://therotv.vercel.app/",
    theroTvHighlights: [
      {
        label: "Live TV & EPG",
        text: "Channels grouped by country with full programming in the palm of your hand.",
      },
      {
        label: "On-demand catalog",
        text: "Thousands of titles with synopsis, cast, and synced favorites.",
      },
      { label: "Cinema room", text: "Watch with friends in sync, with live reactions and chat." },
      {
        label: "Widget & cross-platform",
        text: "Pick up where you left off right from the home screen — Android, iOS, and desktop.",
      },
    ],
    theroTvChipLive: "Live",
    theroTvChipContinue: "Continue",
    theroTvChipRoom: "Watching together",
    products: [
      {
        name: "Thero",
        role: "The AI Maestro",
        tagline: "Claude Code ready for serious work from the very first command.",
        description:
          "An Engineering Operating System that injects persistent context, senior engineering rules, and specialist agents at the start of every project — without imposing dependencies on the repository.",
        stack: ["Python", "Agent skills", "Open source"],
        href: "https://theroverse.github.io/thero/",
      },
      {
        name: "Athena",
        role: "The Cartographer Ship",
        tagline: "A blueprint of your project, generated and kept current by AI.",
        description:
          "A bottom-up recursive summarization engine with incremental caching under .athena/ — a real view of the architecture in seconds, without spending a call on anything that hasn't changed.",
        stack: ["Python", "Stdlib only", "Recursive summarization"],
        href: "https://theroverse.github.io/athena/",
      },
      {
        name: "Zeus",
        role: "The Tactical Strategist",
        tagline: "A verifiable action plan before the first line of code.",
        description:
          "Cross-references the natural-language task with Athena's summaries and delivers a Markdown plan with objective, files, and risks — human review before any execution.",
        stack: ["Python", "Task planning", "Open source"],
        href: "https://theroverse.github.io/zeus/",
      },
      {
        name: "Genesis",
        role: "The Cradle of Creation",
        tagline: "The post-format Windows 11 setup, from zero to a ready machine.",
        description:
          "A 17-step assistant with a real 68-app catalog via winget, detection of what's already installed, and a native WebView2 interface — as a single .exe, no installer.",
        stack: ["PowerShell", "WebView2", "winget"],
        href: "https://theroverse.github.io/genesis/",
      },
      {
        name: "Nexo",
        role: "The Data Planet",
        tagline: "An organized machine without cloud storage, subscriptions, or a command line.",
        description:
          "A local-first desktop app with a microservices architecture that observes, understands, and organizes files — media, documents, and downloads — on your machine only.",
        stack: ["Electron", "React 19", "FastAPI"],
        href: "https://get-nexo.vercel.app/",
      },
    ],
    coredrainEyebrow: "03 — In development",
    coredrainTitle: "CoreDrain",
    coredrainTagline: "Make the world ripen... and drink its Heart.",
    coredrainText:
      "A 30-second strategic dispute game: cities, primordial gods, and five pantheons in an ecosystem where choice, timing, and social engineering decide the match — with total respect for the player in its financial model.",
    coredrainStatus: "In development",
    coredrainHighlights: ["30-second disputes", "Five divine pantheons", "No pay-to-win economy"],
    coredrainPantheons: [
      {
        name: "Vulkran",
        title: "the Forger",
        motto: "Everything has a missing piece.",
        image: godVulkran,
        imageAlt: "Vulkran, the CoreDrain forge god, in metal armor with a glowing hammer",
      },
      {
        name: "Sylvara",
        title: "the Root Weaver",
        motto: "The root waits. The root always wins.",
        image: godSylvara,
        imageAlt:
          "Sylvara, the CoreDrain root goddess, in a forest with glowing leaves and mushrooms",
      },
      {
        name: "Axiom",
        title: "the Life Engineer",
        motto: "Everything is raw material.",
        image: godAxiom,
        imageAlt: "Axiom, the CoreDrain science god, with cyan biotech glow",
      },
      {
        name: "Vorrath",
        title: "the Hollow",
        motto: "Everything ends. I just hurry it.",
        image: godVorrath,
        imageAlt:
          "Vorrath, the CoreDrain shadow god, a dark figure with a purple spiral in the chest",
      },
      {
        name: "Solarys",
        title: "the Keeper",
        motto: "Give back more than you took.",
        image: godSolarys,
        imageAlt: "Solarys, the CoreDrain light goddess, golden wings with a radiant halo",
      },
    ],
    privateEyebrow: "04 — Private projects",
    privateTitle: "Other products in production.",
    privateIntro: "Commercial platforms I architected and kept in operation — live and available.",
    privateProjects: [
      {
        name: "MeuWatt",
        category: "Energy · Industrial SaaS",
        href: "https://www.meuwatt.com.br/",
      },
      {
        name: "CompareAuto",
        category: "Automotive · Comparison",
        href: "https://compareauto.com.br/",
      },
      {
        name: "InteriorCarro",
        category: "Automotive · Content",
        href: "https://interiorcarros.com.br/",
      },
      { name: "CoverPay", category: "Payments · SaaS", href: "https://www.coverpay.com.br/" },
      {
        name: "CGC Energia",
        category: "Energy · Management system",
        href: "https://system.cgc-energia.com.br/",
      },
    ],
    journeyEyebrow: "05 — Journey",
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
    approachEyebrow: "06 — How I work",
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
    contactEyebrow: "07 — Contact",
    contactTitle: "Shall we build something worthwhile?",
    contactText:
      "I am always open to thoughtful conversations about ambitious products, software architecture, and applied artificial intelligence.",
    linkedin: "Talk on LinkedIn",
    github: "View GitHub",
    footer: "Designed and built with intent.",
  },
} as const;

/** Ícones oficiais das entidades do Theroverse (recriados dos SVGs do hub) */
const productGlyphs: Record<string, ReactNode> = {
  Thero: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
      className="h-full w-full"
    >
      <path
        d="M15 27 C15 16.5 22.6 8 32 8 C41.4 8 49 16.5 49 27 C49 37.5 42 49 32 56 C22 49 15 37.5 15 27 Z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M20 26 H44" strokeWidth="3.5" />
      <path d="M32 26 V44" strokeWidth="3.5" />
      <circle cx="32" cy="26" r="3.5" fill="var(--color-background)" strokeWidth="2.5" />
      <path d="M22 36 H26 M38 36 H42" strokeWidth="2" strokeOpacity="0.8" />
    </svg>
  ),
  Athena: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
      className="h-full w-full"
    >
      <path
        d="M20 17 A 19 19 0 0 1 44 17"
        strokeWidth="2"
        strokeDasharray="4 3"
        strokeOpacity="0.8"
      />
      <path d="M32 9 L52 43 L32 35 L12 43 Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M32 16 V35" strokeWidth="2" />
      <path d="M20 50 L28 41 M32 50 V41 M44 50 L36 41" strokeWidth="1.75" strokeOpacity="0.8" />
      <circle cx="20" cy="53" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="32" cy="53" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="44" cy="53" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  Zeus: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
      className="h-full w-full"
    >
      <path d="M24 10 H20 A 4 4 0 0 0 16 14 V18" strokeWidth="2" strokeOpacity="0.6" />
      <path d="M40 10 H44 A 4 4 0 0 1 48 14 V18" strokeWidth="2" strokeOpacity="0.6" />
      <path d="M48 46 V50 A 4 4 0 0 1 44 54 H40" strokeWidth="2" strokeOpacity="0.6" />
      <path d="M16 46 V50 A 4 4 0 0 0 20 54 H24" strokeWidth="2" strokeOpacity="0.6" />
      <path d="M37 11 L22 32 H33 L26 53 L45 28 H33 Z" fill="currentColor" fillOpacity="0.22" />
    </svg>
  ),
  Genesis: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
      className="h-full w-full"
    >
      <path d="M32 7 L57 32 L32 57 L7 32 Z" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M32 14 V50 M14 32 H50"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        strokeOpacity="0.55"
      />
      <path
        d="M32 18 Q32 32 46 32 Q32 32 32 46 Q32 32 18 32 Q32 32 32 18 Z"
        fill="currentColor"
        fillOpacity="0.3"
        strokeWidth="2.75"
      />
    </svg>
  ),
  Nexo: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
      className="h-full w-full"
    >
      <ellipse
        cx="32"
        cy="32"
        rx="25"
        ry="10.5"
        transform="rotate(-26 32 32)"
        strokeWidth="2.5"
        strokeDasharray="4 2"
        strokeOpacity="0.45"
      />
      <circle cx="32" cy="32" r="12.5" fill="currentColor" fillOpacity="0.16" strokeWidth="3.25" />
      <path
        d="M21 32 C21 27 43 27 43 32 C43 37 21 37 21 32"
        strokeWidth="1.75"
        strokeOpacity="0.85"
      />
      <path d="M10 39 C14 45 32 46 45 40" strokeWidth="3" />
      <circle cx="12" cy="24" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="51" cy="40" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="47" cy="20" r="2" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="17" cy="44" r="2" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  ),
};

/** Cores oficiais de cada entidade (do ecossistema.ts do hub) */
const productColors: Record<string, string> = {
  Thero: "#F97316",
  Athena: "#10B981",
  Zeus: "#A3E635",
  Genesis: "#A855F7",
  Nexo: "#00D2FF",
};

function Portfolio() {
  const [language, setLanguage] = useState<Language>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = content[language];

  const consulting =
    language === "pt"
      ? [
          [
            "Consultoria técnica",
            "Diagnóstico direto para transformar restrições de negócio em decisões técnicas sustentáveis.",
          ],
          [
            "Soluções exclusivas",
            "Produtos e sistemas desenhados para o contexto real da operação — não adaptações genéricas.",
          ],
          [
            "Cultura & fluxos",
            "Práticas, rituais e automações que aproximam engenharia, produto e operação.",
          ],
          [
            "Gargalos & manutenção",
            "Análise de produção, estabilização e evolução contínua para devolver velocidade aos times.",
          ],
        ]
      : [
          [
            "Technical advisory",
            "Direct diagnosis that turns business constraints into sustainable technical decisions.",
          ],
          [
            "Bespoke solutions",
            "Products and systems designed for the operation's real context — never generic adaptations.",
          ],
          [
            "Culture & workflows",
            "Practices, rituals, and automation that bring engineering, product, and operations together.",
          ],
          [
            "Bottlenecks & maintenance",
            "Production analysis, stabilization, and continuous evolution that restores team velocity.",
          ],
        ];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const navItems = [
    [copy.nav.work, "#projetos"],
    [copy.nav.tv, "#therotv"],
    [copy.nav.game, "#coredrain"],
    [copy.nav.journey, "#trajetoria"],
    [copy.nav.approach, "#metodo"],
    [copy.nav.contact, "#contato"],
  ] as const;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="page-shell flex h-20 items-center justify-between">
          <a
            href="#inicio"
            className="group flex items-center gap-4"
            aria-label="Anthero Vieira Neto"
          >
            <AvntMark />
            <span className="hidden text-xs font-medium text-muted-foreground sm:block">
              ANTHERO VIEIRA NETO
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-link text-sm text-muted-foreground">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex border border-border bg-secondary p-1" aria-label="Idioma">
              {(["pt", "en"] as const).map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(option)}
                  aria-pressed={language === option}
                  aria-label={option === "pt" ? "Português" : "English"}
                  className={`h-7 rounded-none px-2.5 text-[10px] uppercase ${language === option ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
                >
                  {option}
                </Button>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-none lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? copy.close : copy.menu}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav
            className="border-t border-border bg-background px-5 py-5 lg:hidden"
            aria-label="Menu móvel"
          >
            {navItems.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 border-b border-border py-4 text-lg"
              >
                <span className="text-xs text-accent">0{index + 1}</span>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="min-h-screen overflow-hidden bg-background text-foreground">
        <section id="inicio" className="relative min-h-[92svh] pt-20">
          <div className="pointer-events-none absolute inset-0 technical-grid" />
          <div className="page-shell relative grid min-h-[calc(92svh-5rem)] content-end pb-14 pt-24">
            <div className="hero-enter grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <div className="mb-8 flex items-center gap-3 text-xs uppercase text-muted-foreground">
                  <span className="status-dot" />
                  {copy.availability}
                </div>
                <p className="mb-4 text-xs font-semibold uppercase text-accent">
                  {copy.role} · Consultant · Builder
                </p>
                <h1 className="max-w-5xl text-balance font-display text-[clamp(3.25rem,8.2vw,8.2rem)] font-semibold leading-[0.9]">
                  {copy.introLead} <span className="chrome-text">{copy.introAccent}</span>
                  <br />
                  {copy.introTail}
                </h1>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-5 lg:col-span-4 lg:grid-cols-1">
                <div className="portrait-frame aspect-[4/5] overflow-hidden border border-border bg-secondary lg:w-44">
                  <img
                    src={portraitAsset}
                    alt="Retrato profissional de Anthero Vieira Neto"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="border-l border-accent/50 pl-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{copy.intro}</p>
                  <a
                    href="#projetos"
                    className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-foreground"
                  >
                    {copy.viewWork}
                    <ArrowDown size={16} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-14 flex items-end justify-between border-t border-border pt-5 text-[10px] uppercase text-muted-foreground">
              <span>
                {copy.years} {copy.yearsLabel}
              </span>
              <span>{copy.scroll} ↓</span>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/60 py-20 sm:py-28">
          <div className="page-shell grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="section-eyebrow">
                00 — {language === "pt" ? "Atuação" : "Capabilities"}
              </p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                {copy.signalTitle}
              </h2>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-8">
              {consulting.map(([title, text], index) => (
                <article key={title} className="capability bg-secondary p-7">
                  <span className="text-xs text-accent">0{index + 1}</span>
                  <h3 className="mt-10 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-36">
          <div className="universe-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="page-shell relative">
            <SectionHeader
              eyebrow={copy.projectsEyebrow}
              title={copy.projectsTitle}
              intro={copy.projectsIntro}
            />
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-y border-border py-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                {copy.products.map((product, index) => (
                  <span key={product.name} className="inline-flex items-center gap-2">
                    {index > 0 && (
                      <span className="mr-2 text-border" aria-hidden="true">
                        →
                      </span>
                    )}
                    <span
                      className="product-dot"
                      style={{ "--dot": productColors[product.name] } as CSSProperties}
                      aria-hidden="true"
                    />
                    {product.name}
                  </span>
                ))}
              </div>
              <a
                href={copy.suiteCtaHref}
                target="_blank"
                rel="noreferrer"
                className="text-link text-sm"
              >
                {copy.suiteCta}
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="product-grid mt-16 sm:mt-20">
              {copy.products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className="product-card group"
                  style={{ "--product": productColors[product.name] } as CSSProperties}
                >
                  <div className="product-card-inner">
                    <div className="flex items-start justify-between gap-4">
                      <span className="product-glyph" aria-hidden="true">
                        {productGlyphs[product.name]}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-[var(--product)]"
                      />
                    </div>
                    <div className="mt-10">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                        {product.role}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-semibold">{product.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {product.tagline}
                      </p>
                      <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground/80">
                        {product.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {product.stack.map((item) => (
                          <span
                            key={item}
                            className="border border-border px-2 py-1 text-[9px] uppercase text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
              <a
                href={copy.suiteCtaHref}
                target="_blank"
                rel="noreferrer"
                className="product-cta group"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">
                  {language === "pt" ? "Ecossistema completo" : "Full ecosystem"}
                </span>
                <div className="mt-10">
                  <h3 className="font-display text-2xl font-semibold">{copy.suiteCta}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {language === "pt"
                      ? "Manifesto, mapa do universo e todas as entidades em um só lugar."
                      : "Manifesto, universe map, and every entity in one place."}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    theroverse.github.io
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="therotv" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
          <img
            src={theroTvAtmosfera}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="therotv-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="page-shell relative grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <TheroTvStage
                chipLive={copy.theroTvChipLive}
                chipContinue={copy.theroTvChipContinue}
                chipRoom={copy.theroTvChipRoom}
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <p className="section-eyebrow">{copy.theroTvEyebrow}</p>
              <h2 className="mt-6 max-w-md text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
                {copy.theroTvTitle}
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                {copy.theroTvText}
              </p>
              <dl className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {copy.theroTvHighlights.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-semibold uppercase text-[#f5a141]">{item.label}</dt>
                    <dd className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={copy.theroTvHref}
                target="_blank"
                rel="noreferrer"
                className="text-link mt-9"
              >
                therotv.vercel.app
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="coredrain"
          className="scroll-mt-20 overflow-hidden border-y border-border bg-secondary/40 py-24 sm:py-32"
        >
          <div className="page-shell grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="section-eyebrow">{copy.coredrainEyebrow}</p>
              <h2 className="mt-6 font-display text-6xl font-semibold leading-none sm:text-7xl">
                Core<span className="text-[#e0523a]">Drain</span>
              </h2>
              <p className="mt-5 text-xl font-medium text-foreground/90">{copy.coredrainTagline}</p>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                {copy.coredrainText}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 border border-[#e0523a]/40 bg-[#e0523a]/10 px-3 py-2 text-[10px] font-semibold uppercase text-[#e8705c]">
                  <span
                    className="status-dot"
                    style={{ background: "#e0523a", animation: "none" }}
                    aria-hidden="true"
                  />
                  {copy.coredrainStatus}
                </span>
                {copy.coredrainHighlights.map((item) => (
                  <span
                    key={item}
                    className="border border-border px-3 py-2 text-[10px] uppercase text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="pantheon-strip">
                {copy.coredrainPantheons.map((god) => (
                  <figure key={god.name} className="pantheon-cell group">
                    <img
                      src={god.image}
                      alt={god.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <figcaption className="pantheon-caption">
                      <span className="font-display text-lg font-semibold text-white">
                        {god.name}
                      </span>
                      <span className="text-[10px] uppercase text-white/60">{god.title}</span>
                      <span className="mt-1 text-[11px] italic text-white/0 transition-colors duration-300 group-hover:text-white/80">
                        "{god.motto}"
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="privados" className="scroll-mt-20 py-20 sm:py-24">
          <div className="page-shell">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-baseline">
              <div className="lg:col-span-4">
                <p className="section-eyebrow">{copy.privateEyebrow}</p>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {copy.privateTitle}
                </h2>
              </div>
              <p className="max-w-xl leading-relaxed text-muted-foreground lg:col-span-8">
                {copy.privateIntro}
              </p>
            </div>
            <ul className="mt-10 border-t border-border">
              {copy.privateProjects.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="private-row group flex items-baseline justify-between gap-6 border-b border-border py-5"
                  >
                    <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                      <span className="font-display text-xl font-semibold transition-colors group-hover:text-accent sm:text-2xl">
                        {project.name}
                      </span>
                      <span className="text-xs uppercase text-muted-foreground">
                        {project.category}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="trajetoria"
          className="scroll-mt-20 border-y border-border bg-secondary/60 py-24 sm:py-32"
        >
          <div className="page-shell grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <p className="section-eyebrow">{copy.journeyEyebrow}</p>
              <h2 className="mt-6 font-display text-5xl font-semibold leading-tight">
                {copy.journeyTitle}
              </h2>
              <p className="mt-6 text-muted-foreground">{copy.journeyIntro}</p>
              <figure className="casual-portrait mt-10 max-w-sm overflow-hidden border border-border">
                <img
                  src={casualPortraitAsset}
                  alt={
                    language === "pt"
                      ? "Anthero em um momento descontraído"
                      : "Anthero in a casual moment"
                  }
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-[center_57%]"
                />
                <figcaption className="flex items-center justify-between border-t border-border bg-background px-4 py-3 text-[10px] uppercase text-muted-foreground">
                  <span>{language === "pt" ? "Fora do escritório" : "Off the clock"}</span>
                  <span>SP · BR</span>
                </figcaption>
              </figure>
            </div>
            <div className="lg:col-span-8">
              {copy.timeline.map((item, index) => (
                <article
                  key={item.title}
                  className="timeline-row grid gap-5 border-t border-border py-8 sm:grid-cols-[5rem_1fr]"
                >
                  <span className="text-xs text-accent">0{index + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <span className="text-xs uppercase text-muted-foreground">{item.marker}</span>
                    </div>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="scroll-mt-20 py-24 sm:py-32">
          <div className="page-shell">
            <SectionHeader
              eyebrow={copy.approachEyebrow}
              title={copy.approachTitle}
              intro={copy.signalBody}
            />
            <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
              {copy.principles.map((principle) => (
                <article key={principle.number} className="bg-background p-7 sm:p-9">
                  <span className="text-xs text-accent">{principle.number}</span>
                  <h3 className="mt-16 text-xl font-semibold">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-20 border-t border-border pt-7">
              <p className="section-eyebrow">{copy.stackEyebrow}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {copy.stack.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 border border-border bg-secondary px-4 py-3 text-xs text-muted-foreground"
                  >
                    <Check size={13} className="text-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 border-t border-border py-24 sm:py-36">
          <div className="page-shell">
            <p className="section-eyebrow">{copy.contactEyebrow}</p>
            <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:items-end">
              <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] sm:text-7xl lg:col-span-8">
                {copy.contactTitle}
              </h2>
              <div className="lg:col-span-4">
                <p className="text-muted-foreground">{copy.contactText}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:an@thero.live"
                    className="contact-link bg-accent text-accent-foreground"
                  >
                    <Mail size={17} />
                    an@thero.live
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anthero-vieira-neto-aa7a6b8a"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link border border-border"
                  >
                    <Linkedin size={17} />
                    {copy.linkedin}
                  </a>
                  <a
                    href="https://github.com/netovieira"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link border border-border"
                  >
                    <Github size={17} />
                    {copy.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-10">
        <div className="page-shell flex flex-col gap-5 text-[10px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <AvntMark />
            <span>© {new Date().getFullYear()} Anthero Vieira Neto</span>
          </div>
          <span>{copy.footer}</span>
        </div>
      </footer>
    </>
  );
}

/** Palco do TheroTV: réplica do hero da landing — feixe de luz, marca se desenhando,
 *  celular inclinável pelo ponteiro e chips de interface flutuando em profundidade. */
function TheroTvStage({
  chipLive,
  chipContinue,
  chipRoom,
}: {
  chipLive: string;
  chipContinue: string;
  chipRoom: string;
}) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = stage.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      raf = 0;
      node.style.setProperty("--ry", `${tx * 14}deg`);
      node.style.setProperty("--rx", `${ty * -10}deg`);
      node.style.setProperty("--mx", String(tx));
      node.style.setProperty("--my", String(ty));
    };
    const move = (e: PointerEvent) => {
      const r = node.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
      ty = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const leave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="tv-stage" ref={stage} aria-label="Aplicativo TheroTV em um celular">
      <div className="tv-beam" aria-hidden="true" />
      <svg className="tv-mark" viewBox="0 0 220 220" aria-hidden="true">
        <line className="tv-draw tv-d1" x1="14" y1="110" x2="206" y2="110" pathLength="1" />
        <line className="tv-draw tv-d2" x1="24" y1="38" x2="206" y2="110" pathLength="1" />
        <line className="tv-draw tv-d3" x1="24" y1="182" x2="206" y2="110" pathLength="1" />
      </svg>

      <div className="tv-float">
        <div className="tv-phone">
          <div className="tv-phone-body">
            <img
              src={theroTvFrame}
              alt="Tela inicial do TheroTV com partida ao vivo e catálogo de filmes"
            />
            <span className="tv-glare" aria-hidden="true" />
          </div>

          <div className="tv-chip tv-chip-live" aria-hidden="true">
            <span className="tv-chip-badge">{chipLive}</span>
            <span>13:16 – 13:38</span>
            <i className="tv-chip-bar">
              <b />
            </i>
          </div>
          <div className="tv-chip tv-chip-continue" aria-hidden="true">
            <Play size={14} fill="currentColor" />
            <span>{chipContinue}</span>
            <i className="tv-chip-bar">
              <b />
            </i>
          </div>
          <div className="tv-chip tv-chip-room" aria-hidden="true">
            <Users size={15} />
            <span>{chipRoom}</span>
            <span className="tv-chip-dots">
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <p className="section-eyebrow lg:col-span-3">{eyebrow}</p>
      <div className="lg:col-span-8 lg:col-start-5">
        <h2 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] sm:text-6xl">
          {title}
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </div>
    </div>
  );
}

function AvntMark() {
  return (
    <span className="avnt-mark" aria-hidden="true">
      <i>A</i>
      <i>V</i>
      <i>N</i>
      <i>T</i>
    </span>
  );
}
