const skillGroups = [
  {
    category: "Mobile",
    icon: "📱",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
    skills: [
      "React Native",
      "iOS (Swift)",
      "Android (Kotlin)",
      "React Navigation",
      "Reanimated",
      "Expo",
      "React Native CLI",
      "WebView",
    ],
  },
  {
    category: "Front-end Web",
    icon: "🌐",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20",
    skills: [
      "ReactJS",
      "TypeScript",
      "JavaScript ES6+",
      "Next.js",
      "Styled Components",
      "Tailwind CSS",
      "Storybook",
      "Module Federation",
    ],
  },
  {
    category: "State & Architecture",
    icon: "🏗️",
    color: "from-indigo-500/20 to-brand/10",
    border: "border-indigo-500/20",
    skills: [
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "React Query",
      "Clean Architecture",
      "Micro-Frontends",
      "Design Systems",
      "GraphQL (Apollo)",
    ],
  },
  {
    category: "Backend & Cloud",
    icon: "☁️",
    color: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/20",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "Firebase / Firestore",
      "AWS (Cognito, S3)",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Quality & DevOps",
    icon: "🚀",
    color: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/20",
    skills: [
      "CI/CD (Azure DevOps)",
      "GitHub Actions",
      "Jenkins",
      "Jest",
      "React Testing Library",
      "E2E Tests",
      "Dynatrace",
      "App Store / Google Play",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-brand font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-white">Competências Técnicas</h2>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl p-6 bg-gradient-to-br ${group.color} border ${group.border} card-hover`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge px-2.5 py-1 rounded-lg bg-white/5 border border-white/[0.08] text-slate-300 text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <h3 className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-4">
            Idiomas
          </h3>
          <div className="flex flex-wrap gap-6">
            {[
              { lang: "Português", level: "Nativo", pct: 100 },
              { lang: "Inglês", level: "Intermediário / Técnico", pct: 65 },
            ].map((l) => (
              <div key={l.lang} className="flex-1 min-w-[200px]">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-medium">{l.lang}</span>
                  <span className="text-slate-500 text-xs">{l.level}</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand to-accent"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
