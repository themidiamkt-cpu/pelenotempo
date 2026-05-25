import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const proofStats = [
  { value: "Estúdio valorizado", label: "atendimento, agenda e presença" },
  { value: "3 meses", label: "de acompanhamento na rotina" },
  { value: "+R$50k/mês", label: "com estrutura profissional aplicada" },
];

const painPoints = [
  "Você trabalha muito, mas no fim do mês não sabe exatamente para onde o dinheiro foi.",
  "Tem medo de cobrar mais caro e perder clientes.",
  "Sua agenda oscila: uma semana cheia, outra cheia de buracos.",
  "Chegam pessoas pedindo desconto, comparando seu trabalho com preço de promoção.",
  "Você sente que seu perfil não comunica o valor real do que você entrega.",
  "O atendimento, o estoque, o WhatsApp e o financeiro vivem no improviso.",
  "Você sabe que tem potencial, mas falta estrutura para crescer sem se sobrecarregar.",
];

const methodPillars = [
  {
    title: "Posicionamento premium",
    text: "Ajuste de percepção, comunicação, Instagram e experiência para atrair clientes que valorizam técnica, segurança e estética.",
  },
  {
    title: "Gestão lucrativa",
    text: "Organização financeira, custos, precificação, fluxo de caixa, estoque e decisões de investimento com clareza.",
  },
  {
    title: "Aquisição e vendas",
    text: "Marketing, tráfego pago, WhatsApp, campanhas sazonais e conversão sem parecer insistente ou desesperada.",
  },
  {
    title: "Operação de estúdio",
    text: "Agenda, rotina, fornecedores, legalização, atendimento e processos para seu negócio funcionar com menos caos.",
  },
];

const transformationBenefits = [
  "Sair do modo prestadora de serviço e começar a operar como dona de uma marca.",
  "Cobrar com mais segurança porque seu posicionamento passa valor antes do preço.",
  "Entender quais números importam para parar de faturar sem lucrar.",
  "Criar uma rotina de atendimento, agenda e pós-venda que melhora a fidelização.",
  "Atrair clientes mais alinhadas, que buscam qualidade e não apenas desconto.",
  "Planejar o mês com campanhas, metas e decisões menos emocionais.",
];

const authorityMoments = [
  "Audrei estruturou o próprio estúdio saindo da rotina improvisada para uma operação mais clara e profissional.",
  "O crescimento veio da combinação entre atendimento, posicionamento, agenda, experiência da cliente e gestão.",
  "A mentoria traduz essa construção para a realidade de outras body piercers.",
];

const experienceHighlights = [
  {
    title: "Atendimento com mais intenção",
    text: "Da primeira mensagem ao pós-procedimento, cada detalhe passa a reforçar segurança, cuidado e valor percebido.",
  },
  {
    title: "Agenda menos instável",
    text: "Planejamento, campanhas e fidelização para sair da sensação de depender apenas do movimento da semana.",
  },
  {
    title: "Rotina de estúdio organizada",
    text: "Financeiro, estoque, fornecedores e atendimento deixam de viver no improviso e ganham processo.",
  },
];

const mentorshipTopics = [
  "Onde realmente vale a pena investir",
  "Posicionamento profissional",
  "Marketing que atrai clientes",
  "Vendas sem parecer insistente",
  "Gestão financeira",
  "Fluxo de caixa",
  "Organização do estoque",
  "Fornecedores, valores e qualidade",
  "Legalização do espaço",
  "Captação e fidelização de clientes",
  "Campanhas sazonais personalizadas",
  "Planejamento mensal",
  "Custos fixos e variáveis",
  "Sistematização do atendimento",
  "Seguros importantes para empreendedoras",
  "Caixinha/Nubank e organização financeira",
  "Tráfego pago",
  "Análise do seu perfil profissional",
];

const offerDetails = [
  "Encontro inicial de 3 horas ao vivo com Audrei e especialistas convidados.",
  "3 meses de acompanhamento semanal para aplicar, ajustar e evoluir.",
  "Análise do seu perfil profissional, posicionamento e pontos de melhoria.",
  "Direcionamento prático em marketing, vendas, financeiro, estoque e operação.",
  "Turma selecionada para manter proximidade e profundidade no acompanhamento.",
];

const faqs = [
  {
    question: "Serve para quem ainda está começando?",
    answer:
      "Sim, desde que você queira tratar o body piercing como negócio. A mentoria ajuda a construir base, posicionamento e organização desde cedo.",
  },
  {
    question: "Preciso ter estúdio próprio?",
    answer:
      "Não. A estrutura pode ser aplicada para quem atende em parceria, está migrando para um espaço próprio ou quer profissionalizar a operação atual.",
  },
  {
    question: "E se eu não entendo marketing ou tráfego pago?",
    answer:
      "Você não precisa chegar sabendo. A proposta é traduzir marketing, vendas e tráfego para a realidade de uma body piercer, com ações práticas.",
  },
  {
    question: "Já fiz cursos e não tive resultado. Qual a diferença?",
    answer:
      "Aqui o foco não é só conteúdo. É acompanhamento, diagnóstico do seu momento e aplicação no seu negócio, com ajustes durante 3 meses.",
  },
  {
    question: "Não tenho muitos clientes ainda. Vale a pena?",
    answer:
      "Vale se você quer criar uma base mais forte antes de crescer. A mentoria trabalha atração, posicionamento, atendimento e fidelização.",
  },
];

const mentors = [
  {
    name: "Audrei",
    icon: "✦",
    text: "Body piercer, empreendedora e mentora. Vai te guiar com direcionamento prático para construir uma marca forte, profissional e lucrativa.",
  },
  {
    name: "Especialista em tráfego pago",
    icon: "◐",
    text: "Vai mostrar estratégias para atrair mais clientes, aumentar sua visibilidade e estruturar campanhas com mais clareza.",
  },
  {
    name: "Especialista em vendas",
    icon: "◇",
    text: "Responsável pela gestão de agenda, WhatsApp e vendas, ensinando organização, atendimento e conversão de clientes.",
  },
];

const formFields = [
  {
    id: "nome",
    label: "Qual seu nome?",
    type: "text",
    placeholder: "Seu nome completo",
  },
  {
    id: "tempoAtuacao",
    label: "Há quanto tempo você atua como body piercer?",
    type: "text",
    placeholder: "Ex: 1 ano e 6 meses",
  },
  {
    id: "modeloTrabalho",
    label: "Você trabalha em estúdio próprio, em parceria ou atende em casa?",
    type: "text",
    placeholder: "Conte como você atende hoje",
  },
  {
    id: "maiorDificuldade",
    label: "Qual sua maior dificuldade hoje no seu negócio?",
    type: "textarea",
    placeholder: "Descreva sua principal dificuldade",
  },
  {
    id: "viveDaPerfuracao",
    label: "Hoje você vive exclusivamente da perfuração?",
    type: "select",
    options: ["Sim", "Não", "Parcialmente"],
  },
  {
    id: "travaCrescimento",
    label: "O que você sente que está travando seu crescimento?",
    type: "textarea",
    placeholder: "Compartilhe o que mais pesa nesse momento",
  },
  {
    id: "objetivoSeisMeses",
    label: "Qual seu objetivo nos próximos 6 meses?",
    type: "textarea",
    placeholder: "Ex: aumentar agenda, melhorar faturamento, estruturar processos...",
  },
  {
    id: "investiuAntes",
    label: "Você já investiu em cursos ou mentorias antes?",
    type: "select",
    options: ["Sim", "Não"],
  },
  {
    id: "organizacaoFinanceira",
    label: "Como está sua rotina de organização financeira atualmente?",
    type: "textarea",
    placeholder: "Conte como você controla entradas, custos e lucro",
  },
  {
    id: "clientesFidelizacao",
    label: "Você sente dificuldade em atrair clientes ou fidelizar?",
    type: "textarea",
    placeholder: "Fale sobre sua captação e relacionamento com clientes",
  },
  {
    id: "instagram",
    label: "Qual seu Instagram profissional?",
    type: "text",
    placeholder: "@seuperfil",
  },
  {
    id: "porqueMentoria",
    label: "Por que você acredita que essa mentoria pode te ajudar?",
    type: "textarea",
    placeholder: "Conte o que você espera transformar com a mentoria",
  },
];

const FORM_WEBHOOK_URL = "https://automacao2.themidiamarketing.com.br/webhook/form-audrei";

function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const base =
    "shine-button inline-flex w-full items-center justify-center rounded-xl px-7 py-5 text-center text-[0.74rem] font-bold uppercase tracking-[0.18em] transition duration-300 focus:outline-none focus:ring-4 sm:w-auto sm:rounded-lg sm:px-6 sm:py-4 sm:text-[0.72rem] sm:tracking-[0.22em]";
  const variants = {
    primary:
      "bg-[#C77871] text-[#3C2224] shadow-[0_18px_34px_rgba(199,120,113,0.28)] hover:-translate-y-0.5 hover:bg-[#3C2224] hover:text-[#E5DDDA] hover:shadow-[0_22px_46px_rgba(199,120,113,0.34)] focus:ring-[#9D5955]",
    ghost:
      "border border-[#C77871]/55 bg-[#4E2C2D]/70 text-[#CCAAA5] hover:border-[#C77871] hover:bg-[#3C2224] focus:ring-[#9D5955]",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header reveal mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#C77871]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[1.03] text-[#E5DDDA] sm:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#CCAAA5]">
          {children}
        </p>
      )}
    </div>
  );
}

function DecorativeMark() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C77871]" />
      <span className="h-2.5 w-2.5 rotate-45 rounded-[1px] bg-[#C77871]" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C77871]" />
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
    );

    elements.forEach((element) => {
      if (element.style.animationDelay && !element.style.transitionDelay) {
        element.style.transitionDelay = element.style.animationDelay;
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

function HeroJewelryCard() {
  return (
    <div className="reveal atelier-card relative mx-auto mt-12 w-full max-w-[22.5rem] border border-[#C77871]/45 bg-[#3C2224] p-3 shadow-[0_28px_70px_rgba(60,34,36,0.28)] sm:mt-9 sm:max-w-[27rem] sm:p-4 lg:mt-0">
      <div className="absolute -left-5 top-8 hidden h-48 w-10 border-y border-l border-[#C77871]/50 md:block" />
      <div className="absolute -right-4 bottom-10 hidden h-36 w-10 border-y border-r border-[#9D5955]/80 md:block" />
      <div className="relative overflow-hidden border border-[#9D5955]/45 bg-[#4E2C2D] px-6 py-8 text-center sm:px-7 sm:py-9">
        <div className="absolute inset-x-5 top-6 h-px bg-gradient-to-r from-transparent via-[#C77871] to-transparent sm:inset-x-7 sm:top-7" />
        <div className="relative mx-auto flex h-52 w-52 items-center justify-center sm:h-56 sm:w-56">
          <span className="absolute inset-4 rounded-full border border-[#C77871]/45 bg-[#3C2224]/55 shadow-[0_18px_52px_rgba(199,120,113,0.18)]" />
          <span className="absolute inset-9 rounded-full border border-[#9D5955]" />
          <img
            src="/audrei-logo.png"
            alt="Logo Piercing by Audrei"
            className="relative z-10 h-32 w-32 object-contain drop-shadow-[0_16px_22px_rgba(60,34,36,0.18)] sm:h-36 sm:w-36"
          />
          <span className="absolute right-7 top-8 h-3.5 w-3.5 rounded-full bg-[#C77871] sm:right-9 sm:top-10 sm:h-4 sm:w-4" />
          <span className="absolute bottom-9 left-8 h-3 w-3 rounded-full bg-[#9D5955] sm:bottom-11 sm:left-10" />
        </div>
        <p className="mx-auto mt-6 max-w-xs font-display text-xl italic leading-snug text-[#CCAAA5] sm:mt-7 sm:text-2xl">
          da bancada de atendimento para um estúdio mais organizado e valorizado
        </p>
        <div className="mt-6 grid grid-cols-3 border-y border-[#9D5955] py-3 text-[#CCAAA5] sm:mt-8 sm:py-4">
          <span className="text-[0.62rem] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.22em]">Agenda</span>
          <span className="text-[0.62rem] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.22em]">Cliente</span>
          <span className="text-[0.62rem] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.22em]">Gestão</span>
        </div>
      </div>
    </div>
  );
}

const heroImages = [
  {
    src: "/hero/piercing-1.jpg",
    alt: "Curadoria de joias para body piercing em orelha",
    className: "hero-image-card--one",
  },
  {
    src: "/hero/piercing-2.jpg",
    alt: "Piercings dourados delicados em composição profissional",
    className: "hero-image-card--two",
  },
  {
    src: "/hero/piercing-3.jpg",
    alt: "Joias douradas e brilhantes em atendimento de body piercing",
    className: "hero-image-card--three",
  },
  {
    src: "/hero/piercing-4.jpg",
    alt: "Piercing com joias sofisticadas em close de orelha",
    className: "hero-image-card--four",
  },
];

function RotatingHeroWord() {
  const words = ["estrutura", "valor", "clareza", "presença"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [words.length]);

  return (
    <span className="hero-rotating-word" aria-live="polite">
      <span key={words[index]}>{words[index]}</span>
    </span>
  );
}

function HeroImageComposition() {
  return (
    <div className="hero-image-composition" aria-label="Trabalhos de body piercing da Audrei">
      {heroImages.map((image, index) => (
        <figure key={image.src} className={`hero-image-card ${image.className}`}>
          <img src={image.src} alt={image.alt} />
          {index === 1 && <figcaption>Audrei Body Piercer</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function RadialTopicsTimeline() {
  const [activeId, setActiveId] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const sectionRef = useRef(null);

  const activeTopic = mentorshipTopics[activeId - 1];

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || isAutoPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveId((current) => (current % mentorshipTopics.length) + 1);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isAutoPaused, isInView]);

  function handleSelectTopic(id) {
    setActiveId(id);
    setIsAutoPaused(true);
  }

  return (
    <div ref={sectionRef} className="radial-method reveal">
      <div className="radial-method__stage" aria-label="Tópicos trabalhados na mentoria">
        <div className="radial-method__ring" />
        <div className="radial-method__ring radial-method__ring--inner" />

        <div className="radial-method__center">
          <img src="/audrei-logo.png" alt="Piercing by Audrei" />
          <span>Mentoria</span>
        </div>

        {mentorshipTopics.map((topic, index) => {
          const id = index + 1;
          const isActive = activeId === id;

          return (
            <button
              key={topic}
              type="button"
              className={`radial-method__node ${isActive ? "is-active" : ""}`}
              style={{
                "--angle": `${(index / mentorshipTopics.length) * 360 - 90}deg`,
              }}
              onClick={() => handleSelectTopic(id)}
              aria-pressed={isActive}
              aria-label={topic}
            >
              <span>{id}</span>
            </button>
          );
        })}

        <div className="radial-method__hint" aria-hidden="true">
          <span className="radial-method__mouse" />
          <small>Selecione um número</small>
        </div>
      </div>

      <div className="radial-method__panel">
        <p className="radial-method__eyebrow">Tópico {String(activeId).padStart(2, "0")}</p>
        <h3>{activeTopic}</h3>
        <p>Esse ponto será trabalhado de forma prática para fortalecer a rotina, o posicionamento e a gestão do seu estúdio.</p>
        <div className="radial-method__progress" aria-hidden="true">
          {mentorshipTopics.map((topic, index) => (
            <button
              key={topic}
              type="button"
              className={activeId === index + 1 ? "is-active" : ""}
              onClick={() => handleSelectTopic(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <main className="paper-bg min-h-screen bg-[#4E2C2D] text-[#E5DDDA]">
      <section className="mobile-hero relative min-h-[100svh] overflow-hidden px-4 py-5 sm:px-8 sm:py-8 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-[46rem] bg-[linear-gradient(145deg,rgba(157,89,85,0.68)_0%,rgba(78,44,45,0.94)_42%,rgba(78,44,45,0)_78%)]" />
        <div className="absolute right-0 top-0 hidden h-full w-1/2 border-l border-[#9D5955]/55 opacity-70 [transform:skewX(-12deg)] lg:block" />
        <div className="absolute left-1/2 top-6 h-px w-[84vw] max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C77871]/70 to-transparent" />
        <HeroImageComposition />

        <div className="hero-shell relative z-10 mx-auto flex min-h-[94svh] max-w-6xl flex-col">
          <header className="flex items-center justify-between gap-4">
            <a
              href="/"
              className="font-display text-2xl font-semibold italic text-[#E5DDDA]"
            >
              Audrei
            </a>
            <ButtonLink href="/formulario" variant="ghost">
              Aplicar
            </ButtonLink>
          </header>

          <div className="hero-center reveal flex flex-1 flex-col items-center justify-center py-10 text-center sm:py-16">
            <div className="hero-copy-panel mx-auto max-w-4xl">
              <div className="mb-5 inline-flex max-w-full items-center gap-3 border border-[#9D5955] bg-[#3C2224]/70 px-3.5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#CCAAA5] shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.25em]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C77871]" />
                Mentoria para body piercers
              </div>

              <h1 className="mx-auto flex max-w-[11ch] flex-col items-center font-display text-[3.05rem] font-semibold leading-[0.88] text-[#E5DDDA] min-[390px]:text-[3.35rem] sm:max-w-4xl sm:text-7xl sm:leading-[0.9] lg:text-[6.8rem]">
                <span>Seu estúdio de piercing pode crescer com</span>
                <RotatingHeroWord />
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-[1.02rem] leading-8 text-[#CCAAA5] sm:mt-8 sm:text-2xl sm:leading-10">
                Uma mentoria para body piercers que querem transformar bons atendimentos em uma rotina mais organizada, valorizada e profissional.
              </p>
              <p className="hero-note mx-auto mt-5 max-w-xl border-t border-[#C77871]/45 px-4 pt-5 text-[0.9rem] leading-7 text-[#CCAAA5]/90 sm:mt-6 sm:px-8 sm:text-base sm:leading-8">
                Audrei viveu essa virada no próprio estúdio: atendimento,
                agenda, vendas, posicionamento e gestão deixaram de ser partes
                soltas e passaram a sustentar um negócio mais sólido.
              </p>

              <div className="mx-auto mt-8 flex w-full max-w-xl flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <ButtonLink href="/formulario">
                  Quero estruturar meu estúdio
                </ButtonLink>
                <ButtonLink href="/formulario" variant="ghost" className="mobile-secondary-cta">
                  Quero crescer além do atendimento
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-proof px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="proof-grid-mobile premium-scroll mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {proofStats.map((item, index) => (
            <article
              key={item.label}
              className="reveal border border-[#9D5955] bg-[#3C2224]/64 p-6 shadow-[0_18px_44px_rgba(60,34,36,0.08)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <strong className="block font-display text-3xl leading-none text-[#E5DDDA]">
                {item.value}
              </strong>
              <span className="mt-3 block text-xs uppercase leading-5 tracking-[0.18em] text-[#CCAAA5]">
                {item.label}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-editorial px-5 py-16 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="reveal sticky top-10 self-start">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C77871]">
              A dor silenciosa
            </p>
            <h2 className="font-display text-4xl leading-[1.02] text-[#E5DDDA] sm:text-6xl">
              O estúdio parece cheio de movimento, mas por dentro falta clareza.
            </h2>
            <p className="mt-6 max-w-md leading-8 text-[#CCAAA5]">
              Muitas body piercers são excelentes tecnicamente, mas seguem
              tentando crescer com agenda instável, financeiro solto e decisões
              tomadas no cansaço.
            </p>
          </div>

          <div className="premium-stack grid gap-4">
            {painPoints.map((item, index) => (
              <article
                key={item}
                className="reveal group border border-[#9D5955]/85 bg-[#3C2224]/72 p-6 shadow-[0_16px_38px_rgba(60,34,36,0.08)] transition duration-500 hover:-translate-y-1 hover:bg-[#3C2224]"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <h3 className="flex gap-4 text-base font-semibold leading-7 text-[#E5DDDA]">
                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-[#C77871] transition group-hover:scale-125" />
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-editorial px-5 py-16 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="reveal">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C77871]">
              Profissionalização
            </p>
            <h2 className="font-display max-w-3xl text-4xl leading-[1.02] text-[#E5DDDA] sm:text-6xl">
              Crescer no body piercing exige mais do que fazer uma boa perfuração.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-[#CCAAA5]">
              A experiência começa no Instagram, continua no WhatsApp, aparece
              na agenda, se confirma no atendimento e se sustenta no financeiro.
              A mentoria organiza essa jornada.
            </p>
            <p className="mt-8 max-w-3xl border-l-2 border-[#C77871] pl-5 font-display text-3xl leading-tight text-[#E5DDDA] sm:text-4xl">
              Atendimento bonito. Negócio estruturado. Cliente valorizada.
            </p>
            <div className="mt-8">
              <ButtonLink href="/formulario">Quero profissionalizar meu negócio</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-editorial px-5 py-16 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Método da Audrei" title="Estrutura Lucrativa para estúdios de body piercing.">
            Um método para transformar rotina, posicionamento e atendimento em
            uma base mais profissional de crescimento.
          </SectionHeader>

          <div className="method-grid-mobile premium-scroll grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {methodPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="reveal group min-h-72 border border-[#9D5955] bg-[#3C2224]/75 p-6 shadow-[0_18px_46px_rgba(60,34,36,0.1)] transition duration-500 hover:-translate-y-2 hover:bg-[#3C2224] hover:shadow-[0_28px_70px_rgba(60,34,36,0.14)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[#C77871] text-lg font-bold text-[#3C2224] shadow-[0_12px_24px_rgba(199,120,113,0.28)] transition group-hover:scale-105">
                  0{index + 1}
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#E5DDDA]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#CCAAA5]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-editorial px-5 py-16 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden border border-[#9D5955] bg-[#3C2224]/68 p-5 shadow-[0_22px_60px_rgba(60,34,36,0.1)] sm:p-10">
          <SectionHeader eyebrow="O que será trabalhado" title="Os detalhes que deixam seu estúdio mais profissional por dentro e por fora.">
            Da agenda ao estoque, do Instagram ao fluxo de caixa, cada ponto é
            pensado para organizar a rotina e melhorar a forma como o mercado
            percebe o seu trabalho.
          </SectionHeader>

          <RadialTopicsTimeline />

        </div>
      </section>

      <section className="mobile-editorial px-5 py-16 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Benefícios emocionais" title="O que muda quando você deixa de conduzir tudo no improviso.">
            O objetivo não é trabalhar mais. É se sentir mais segura para
            conduzir o estúdio como um negócio sério, bonito e sustentável.
          </SectionHeader>

          <div className="benefits-grid-mobile premium-scroll grid gap-4 md:grid-cols-3">
            {transformationBenefits.map((benefit, index) => (
              <article
                key={benefit}
                className="reveal border border-[#9D5955] bg-[#4E2C2D]/70 p-6 shadow-[0_14px_34px_rgba(60,34,36,0.07)]"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <p className="text-sm font-semibold leading-7 text-[#E5DDDA]">
                  {benefit}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-editorial px-5 py-16 sm:px-8 sm:py-28 lg:px-10">
        <div className="reveal mx-auto grid max-w-6xl gap-8 border border-[#9D5955] bg-[#3C2224]/75 p-6 shadow-[0_22px_60px_rgba(60,34,36,0.11)] sm:p-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C77871]">
              Como funciona
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#E5DDDA] sm:text-5xl">
              Acompanhamento para aplicar, ajustar e amadurecer.
            </h2>
            <p className="mt-5 leading-8 text-[#CCAAA5]">
              Não é uma sequência fria de aulas. É uma experiência guiada para
              olhar o seu estúdio, entender seus gargalos e implementar com
              direção.
            </p>
            <div className="mt-8">
              <ButtonLink href="/formulario">Quero aplicar para a mentoria</ButtonLink>
            </div>
          </div>

          <div className="grid gap-4">
            {offerDetails.map((detail, index) => (
              <div
                key={detail}
                className="border border-[#9D5955]/85 bg-[#4E2C2D] p-5 transition hover:bg-[#3C2224]"
              >
                <span className="font-display text-3xl text-[#C77871]">
                  0{index + 1}
                </span>
                <p className="mt-3 text-sm leading-7 text-[#CCAAA5]">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-editorial px-5 py-16 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Experiência da mentoria" title="Uma rotina mais refinada, sem perder a realidade do estúdio.">
            A proposta é tornar o crescimento mais aplicável, com decisões
            pequenas e consistentes que mudam a experiência da cliente e a
            segurança da profissional.
          </SectionHeader>

          <div className="experience-grid-mobile premium-scroll grid gap-5 md:grid-cols-3">
            {experienceHighlights.map((item, index) => (
              <article
                key={item.title}
                className="reveal border border-[#9D5955] bg-[#3C2224]/70 p-7 shadow-[0_18px_46px_rgba(60,34,36,0.08)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <h3 className="font-display text-3xl leading-tight text-[#E5DDDA]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#CCAAA5]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-editorial px-5 py-16 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal border border-[#C77871]/45 bg-[#3C2224] p-8 text-[#E5DDDA]">
            <img
              src="/audrei-logo.png"
              alt="Logo Piercing by Audrei"
              className="h-24 w-24 object-contain"
            />
            <h2 className="mt-8 font-display text-4xl leading-tight">
              Quem é Audrei
            </h2>
            <p className="mt-5 leading-8 text-[#CCAAA5]">
              Body piercer profissional, empreendedora e mentora. Audrei
              construiu um estúdio mais profissional ao organizar atendimento,
              agenda, posicionamento, vendas, gestão e experiência da cliente.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {mentors.map((mentor, index) => (
              <article
                key={mentor.name}
                className="reveal border border-[#9D5955] bg-[#3C2224]/75 p-6 shadow-[0_18px_46px_rgba(60,34,36,0.1)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <h3 className="font-display text-2xl font-semibold text-[#E5DDDA]">
                  {mentor.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#CCAAA5]">
                  {mentor.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-editorial faq-mobile px-5 py-16 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Perguntas frequentes" title="Para quem está pronta para levar isso a sério.">
            Algumas dúvidas aparecem antes da aplicação. A resposta curta: você
            não precisa estar pronta, precisa estar comprometida.
          </SectionHeader>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-[#9D5955] bg-[#3C2224]/72 p-5 open:bg-[#3C2224]"
              >
                <summary className="cursor-pointer list-none font-semibold text-[#E5DDDA]">
                  <span className="mr-3 text-[#C77871]">✦</span>
                  {faq.question}
                </summary>
                <p className="mt-4 pl-7 text-sm leading-7 text-[#CCAAA5]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-28">
        <div className="reveal mx-auto max-w-5xl rounded-lg border border-[#C77871]/40 bg-[#3C2224] p-7 text-center shadow-[0_30px_80px_rgba(60,34,36,0.28)] sm:p-12">
          <div className="mb-7 flex justify-center">
            <DecorativeMark />
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#E5DDDA] sm:text-5xl">
            As vagas são selecionadas para manter acompanhamento próximo.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#CCAAA5]">
            Se você quer criar uma marca premium, cobrar com mais segurança,
            organizar o financeiro e transformar sua técnica em uma empresa mais
            lucrativa, preencha o formulário de aplicação.
          </p>
          <div className="mt-9">
            <ButtonLink href="/formulario">
              Quero profissionalizar meu negócio
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ field }) {
  const inputClasses =
    "mt-2 w-full rounded-lg border border-[#9D5955]/80 bg-[#3C2224]/80 px-4 py-3 text-[15px] text-[#E5DDDA] shadow-inner outline-none transition placeholder:text-[#CCAAA5]/45 focus:border-[#C77871] focus:bg-[#3C2224] focus:ring-4 focus:ring-[#9D5955]/45";

  return (
    <label htmlFor={field.id} className="block">
      <span className="text-sm font-semibold text-[#CCAAA5]">{field.label}</span>

      {field.type === "textarea" ? (
        <textarea
          id={field.id}
          name={field.id}
          required
          rows={4}
          placeholder={field.placeholder}
          className={`${inputClasses} min-h-32 resize-y`}
        />
      ) : field.type === "select" ? (
        <select
          id={field.id}
          name={field.id}
          required
          defaultValue=""
          className={inputClasses}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={field.id}
          name={field.id}
          type={field.type}
          required
          placeholder={field.placeholder}
          className={inputClasses}
        />
      )}
    </label>
  );
}

function InterestFormPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(false);
    setSubmitError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const answers = Object.fromEntries(formData.entries());
    const labeledAnswers = formFields.reduce((acc, field) => {
      acc[field.label] = answers[field.id] || "";
      return acc;
    }, {});

    try {
      const response = await fetch(FORM_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: "Mentoria Body Piercer Audrei",
          submittedAt: new Date().toISOString(),
          pageUrl: window.location.href,
          answers,
          labeledAnswers,
        }),
      });

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      setSubmitError("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="paper-bg min-h-screen bg-[#4E2C2D] text-[#E5DDDA]">
      <section className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(145deg,rgba(157,89,85,0.72)_0%,rgba(78,44,45,0.92)_44%,rgba(78,44,45,0)_76%)]" />
        <div className="absolute -right-20 top-0 h-full w-1/2 border-l border-[#9D5955]/55 opacity-70 [transform:skewX(-12deg)]" />
        <div className="absolute left-1/2 top-7 h-px w-[82vw] max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C77871]/70 to-transparent" />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
          <header className="mb-10 flex w-full items-center justify-between gap-4">
            <a
              href="/"
              className="font-display text-2xl font-semibold italic text-[#E5DDDA]"
            >
              Audrei
            </a>
            <ButtonLink href="/" variant="ghost">
              Voltar
            </ButtonLink>
          </header>

          <div className="reveal max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 border border-[#9D5955] bg-[#3C2224]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#CCAAA5] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C77871]" />
              Aplicação para mentoria
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-[#E5DDDA] sm:text-5xl lg:text-6xl">
              Aplique para a Mentoria Body Piercer
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#CCAAA5] sm:text-lg">
              Preencha com calma para entendermos seu momento, seus bloqueios e
              se a mentoria é o próximo passo para estruturar sua marca com mais
              lucro, posicionamento e clareza.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal mt-10 w-full max-w-3xl rounded-lg border border-[#9D5955] bg-[#3C2224]/82 p-5 shadow-[0_24px_70px_rgba(60,34,36,0.14)] backdrop-blur sm:p-8 lg:p-10"
          >
            <div className="mb-8 flex justify-center">
              <DecorativeMark />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className={field.type === "textarea" ? "sm:col-span-2" : ""}
                >
                  <Field field={field} />
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="shine-button mt-8 w-full rounded-lg bg-[#C77871] px-6 py-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#3C2224] shadow-[0_16px_32px_rgba(199,120,113,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#3C2224] hover:text-[#E5DDDA] hover:shadow-[0_20px_40px_rgba(199,120,113,0.34)] focus:outline-none focus:ring-4 focus:ring-[#9D5955]"
            >
              {isSubmitting ? "Enviando..." : "Enviar aplicação"}
            </button>

            {submitted && (
              <p
                role="status"
                className="mt-5 rounded-lg border border-[#9D5955] bg-[#4E2C2D] px-4 py-3 text-center text-sm font-semibold text-[#CCAAA5]"
              >
                Obrigada! Sua inscrição foi recebida.
              </p>
            )}

            {submitError && (
              <p
                role="alert"
                className="mt-5 rounded-lg border border-[#C77871] bg-[#4E2C2D] px-4 py-3 text-center text-sm font-semibold text-[#E5DDDA]"
              >
                {submitError}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function App() {
  useScrollReveal();

  const path = useMemo(() => window.location.pathname, []);

  if (path === "/formulario") {
    return <InterestFormPage />;
  }

  return <LandingPage />;
}

createRoot(document.getElementById("root")).render(<App />);
