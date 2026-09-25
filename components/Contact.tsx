"use client";
import { trackClick } from "@/lib/firebase";

const contactLinks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: "E-mail",
    value: "justin.amantino@gmail.com",
    href: "mailto:justin.amantino@gmail.com",
    cta: "Enviar e-mail",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/igor-amantinoipaussu",
    href: "https://www.linkedin.com/in/igor-amantinoipaussu/",
    cta: "Ver perfil",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/IgorGamantino",
    href: "https://github.com/IgorGamantino",
    cta: "Ver código",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: "Telefone",
    value: "(14) 99844-1160",
    href: "tel:+5514998441160",
    cta: "Ligar",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050816]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-brand font-mono text-sm">05.</span>
          <h2 className="text-3xl font-bold text-white">Contato</h2>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-14">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Vamos trabalhar juntos?
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            Estou disponível para oportunidades remotas ou presenciais em São Paulo. Se você tem um
            projeto interessante ou uma vaga para React Native / ReactJS, adoraria conversar!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => trackClick(link.label, "contact", link.href)}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-brand/30 hover:bg-brand/5 transition-all group card-hover text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand-light group-hover:bg-brand/20 transition-colors">
                {link.icon}
              </div>
              <div>
                <p className="text-slate-400 text-xs mb-0.5">{link.label}</p>
                <p className="text-white text-xs font-medium break-all">{link.value}</p>
              </div>
              <span className="text-brand-light text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {link.cta} →
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:justin.amantino@gmail.com"
            onClick={() => trackClick("Enviar mensagem", "contact", "mailto:justin.amantino@gmail.com")}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand to-indigo-500 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-xl shadow-brand/20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar mensagem
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-white/5 pt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-slate-600 text-sm font-mono">
            Igor Amantino © {new Date().getFullYear()}
          </span>
          <span className="text-slate-700 text-xs">
            Built with Next.js · TypeScript · Tailwind CSS
          </span>
        </div>
      </div>
    </section>
  );
}
