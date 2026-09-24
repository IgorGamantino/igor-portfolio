export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050816]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-brand font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold text-white">Sobre mim</h2>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-300 text-base leading-relaxed mb-5">
              Sou um <span className="text-white font-semibold">Engenheiro de Software Sênior</span> com mais de{" "}
              <span className="text-brand-light font-semibold">6 anos de experiência</span> especializada no
              desenvolvimento de aplicações mobile e web de alta complexidade utilizando{" "}
              <span className="text-white font-semibold">React Native, ReactJS e TypeScript</span>.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-5">
              Tenho ampla trajetória na construção de ecossistemas escaláveis para{" "}
              <strong className="text-slate-300">e-commerce</strong>,{" "}
              <strong className="text-slate-300">saúde</strong>,{" "}
              <strong className="text-slate-300">governo/jurídico</strong> e{" "}
              <strong className="text-slate-300">grande varejo</strong>. Atuo com destaque em arquitetura
              mobile/front-end, Design Systems reutilizáveis, Micro-Frontends (Module Federation) e automação de
              pipelines CI/CD.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Além do desenvolvimento front-end e mobile, tenho sólida bagagem em ecossistemas de{" "}
              <span className="text-slate-300">backend (Node.js, NestJS, GraphQL)</span> e em liderança técnica
              de times mobile, com foco em mentoria, code review e evolução das práticas de engenharia.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: "📱",
                title: "Mobile First",
                desc: "Especialista em React Native para iOS e Android, com publicações em App Store e Google Play.",
              },
              {
                icon: "🏗️",
                title: "Arquitetura & Design Systems",
                desc: "Clean Architecture, Micro-Frontends (Module Federation), componentes reutilizáveis e documentação com Storybook.",
              },
              {
                icon: "⚡",
                title: "Performance & Observabilidade",
                desc: "Otimização avançada, monitoramento com Dynatrace, pipelines CI/CD e automação de builds.",
              },
              {
                icon: "👥",
                title: "Liderança Técnica",
                desc: "Referência técnica no time mobile: decisões arquiteturais, code reviews e mentoria de desenvolvedores.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] card-hover"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
