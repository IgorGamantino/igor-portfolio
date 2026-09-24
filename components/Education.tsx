const education = [
  {
    degree: "Bacharelado em Engenharia de Software",
    school: "Centro Universitário de Ourinhos (UNIFIO)",
    period: "2023 – 2027",
    status: "Em andamento",
    icon: "🎓",
  },
  {
    degree: "Diploma em Língua Inglesa",
    school: "New College Group",
    period: "2023 – 2024",
    status: "Concluído",
    icon: "🇬🇧",
  },
  {
    degree: "Desenvolvimento de Sistemas / Full-stack",
    school: "Rocketseat",
    period: "2019 – 2020",
    status: "Concluído",
    icon: "🚀",
  },
];

const certifications = [
  { title: "React Native: Design System no seu App", issuer: "Rocketseat", icon: "📱" },
  { title: "React: Testes em Aplicações Front-end", issuer: "Udemy", icon: "🧪" },
  { title: "Jenkins: Integração Contínua & CI/CD", issuer: "Alura", icon: "⚙️" },
  { title: "Redux com React", issuer: "Alura", icon: "🔄" },
  { title: "Jest, React Testing Library e TDD", issuer: "Certificação", icon: "✅" },
  { title: "Especialização em React Native", issuer: "Certificação", icon: "🏅" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-brand font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-white">Formação & Certificações</h2>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-6">
              Formação Acadêmica
            </h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07] card-hover"
                >
                  <span className="text-3xl flex-shrink-0">{e.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm mb-0.5">{e.degree}</h4>
                    <p className="text-slate-400 text-xs mb-2">{e.school}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 text-xs font-mono">{e.period}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          e.status === "Em andamento"
                            ? "bg-brand/10 border border-brand/20 text-brand-light"
                            : "bg-green-500/10 border border-green-500/20 text-green-400"
                        }`}
                      >
                        {e.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-6">
              Certificações
            </h3>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] card-hover"
                >
                  <span className="text-xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-white text-sm font-medium">{c.title}</p>
                    <p className="text-slate-500 text-xs">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
