# Igor Amantino — Portfolio

Site de portfólio pessoal construído com **Next.js 14**, **TypeScript** e **Tailwind CSS**, pronto para deploy na Vercel.

## 🚀 Deploy na Vercel (passo a passo)

### Opção 1 — Via GitHub (Recomendado)

1. Crie um repositório no GitHub (público ou privado)
2. Faça o upload dos arquivos:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio inicial"
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
4. Clique em **"Add New Project"**
5. Importe o repositório que você criou
6. Deixe as configurações padrão (a Vercel detecta Next.js automaticamente)
7. Clique em **"Deploy"** ✅

### Opção 2 — Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 💻 Rodar localmente

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Inter)

## 📁 Estrutura

```
igor-portfolio/
├── app/
│   ├── layout.tsx      # Layout global + metadados SEO
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globais + animações
├── components/
│   ├── Navbar.tsx      # Navegação fixa com scroll
│   ├── Hero.tsx        # Seção inicial
│   ├── About.tsx       # Sobre mim
│   ├── Skills.tsx      # Competências técnicas
│   ├── Experience.tsx  # Experiência profissional
│   ├── Education.tsx   # Formação e certificações
│   └── Contact.tsx     # Contato + footer
├── vercel.json
└── package.json
```

## ✏️ Personalizar

Para adicionar foto de perfil, coloque a imagem em `/public/avatar.jpg` e edite o componente `Hero.tsx` substituindo o div com as iniciais por um `<Image>` do Next.js.
