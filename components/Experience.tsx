const experiences = [
  {
    company: "C&A Brasil",
    role: "Senior Mobile Developer · React Native / iOS & Android",
    period: "Abr 2024 – Ago 2026",
    location: "São Paulo, SP",
    current: false,
    color: "from-brand/20 to-indigo-500/10",
    borderColor: "border-brand/30",
    dotColor: "bg-brand",
    description: [
      "Liderou a estratégia de migração do app mobile nativo para React Native com TypeScript, impulsionando a produtividade e padronizando manutenção multiplataforma.",
      "Atuou como referência técnica no time mobile: decisões arquiteturais, definição de padrões de engenharia, code reviews e mentoria.",
      "Desenvolveu componentes reutilizáveis para o Design System corporativo, promovendo consistência visual.",
      "Integrou React Native com módulos nativos usando Swift (iOS) e Kotlin (Android).",
      "Gerenciou o ciclo de build, deploy e publicação na App Store e Google Play via Azure DevOps e CI/CD.",
    ],
    techs: ["React Native", "TypeScript", "Swift", "Kotlin", "Azure DevOps", "CI/CD", "Design System", "Acessibilidade"],
  },
  {
    company: "Grupo FCamara / Dasa",
    role: "Software Engineer · React Native / Node.js",
    period: "Mar 2022 – Mar 2024",
    location: "São Paulo, SP",
    current: false,
    color: "from-cyan-500/10 to-blue-500/5",
    borderColor: "border-cyan-500/20",
    dotColor: "bg-cyan-400",
    description: [
      "Desenvolveu e modernizou os ecossistemas de saúde em grande escala (Nav Pro e Sigo) para a Dasa com React Native, TypeScript e Redux.",
      "Implementou testes unitários e de integração com Jest e React Testing Library, reduzindo riscos de regressão.",
      "Estruturou pipelines de CI/CD no Azure DevOps, automatizando build, testes e deploy para lojas mobile.",
      "Configurou e monitorou telemetria de performance e APM com Dynatrace.",
      "Contribuiu para a modernização do backend em microsserviços com Node.js, NestJS e PostgreSQL.",
    ],
    techs: ["React Native", "TypeScript", "Redux", "Node.js", "NestJS", "PostgreSQL", "Firebase", "Dynatrace", "Jest"],
  },
  {
    company: "Softplan",
    role: "Software Developer · ReactJS",
    period: "Set 2021 – Mar 2022",
    location: "Florianópolis, SC",
    current: false,
    color: "from-emerald-500/10 to-green-500/5",
    borderColor: "border-emerald-500/20",
    dotColor: "bg-emerald-400",
    description: [
      "Desenvolveu aplicações web de grande porte para o SAJ (Sistema de Automação da Justiça), utilizado em tribunais de grande escala.",
      "Implementou e expandiu arquitetura de Micro-Frontends utilizando Module Federation e ReactJS com TypeScript.",
      "Criou componentes reutilizáveis documentados no Storybook e realizou integrações com APIs GraphQL (Apollo Client).",
    ],
    techs: ["ReactJS", "TypeScript", "GraphQL", "Apollo Client", "Storybook", "Module Federation", "Micro-Frontends"],
  },
  {
    company: "Compasso UOL",
    role: "Mobile Developer · React Native",
    period: "Set 2020 – Set 2021",
    location: "São Paulo, SP",
    current: false,
    color: "from-orange-500/10 to-yellow-500/5",
    borderColor: "border-orange-500/20",
    dotColor: "bg-orange-400",
    description: [
      "Desenvolveu o app de e-commerce das Farmácias São João (iOS/Android) com integrações na plataforma VTEX.",
      "Implementou fluxos seguros de pagamento (crédito/débito) e navegação otimizada de catálogo.",
      "Liderou tecnicamente o app SalvoVidas do zero: arquitetura mobile e fluxos de localização de hemocentros.",
      "Liderança técnica em checkout e pagamentos com foco em estabilidade em períodos de alta demanda (Black Friday).",
    ],
    techs: ["React Native", "TypeScript", "Redux", "Context API", "Styled Components", "VTEX", "AWS", "Firebase"],
  },
  {
    company: "Amantino Softwares e Consultoria",
    role: "Desenvolvedor Mobile & Web · Full Stack",
    period: "Ago 2019 – Set 2020",
    location: "Ipaussu, SP",
    current: false,
    color: "from-pink-500/10 to-rose-500/5",
    borderColor: "border-pink-500/20",
    dotColor: "bg-pink-400",
    description: [
      "Desenvolveu soluções completas (web com ReactJS e mobile com React Native) para clientes de múltiplos segmentos.",
      "Responsável pelo ciclo completo: levantamento de requisitos, prototipagem, arquitetura, testes e publicação.",
    ],
    techs: ["React Native", "ReactJS", "TypeScript", "Styled Components", "Context API", "HTML5/CSS3"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050816]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-brand font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-white">Experiência Profissional</h2>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand/50 via-white/5 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={exp.company} className="relative flex gap-6">
                {/* Dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full mt-5 flex-shrink-0 z-10 ${exp.dotColor} ${exp.current ? "ring-4 ring-brand/20 animate-pulse" : ""}`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-2xl p-6 bg-gradient-to-br ${exp.color} border ${exp.borderColor} card-hover`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-lg">{exp.company}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold">
                            Atual
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 text-sm font-medium">{exp.role}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-brand-light text-sm font-mono">{exp.period}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-brand mt-1 flex-shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.techs.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/[0.08] text-slate-400 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
