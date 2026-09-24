import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Igor Amantino | Senior React Native & ReactJS Engineer",
  description:
    "Engenheiro de Software Sênior com 6+ anos de experiência em React Native, ReactJS e TypeScript. Especializado em aplicações mobile e web de alta escala.",
  keywords: [
    "React Native",
    "ReactJS",
    "TypeScript",
    "Mobile Engineer",
    "Software Engineer",
    "Igor Amantino",
  ],
  authors: [{ name: "Igor Amantino" }],
  openGraph: {
    title: "Igor Amantino | Senior React Native & ReactJS Engineer",
    description:
      "Engenheiro de Software Sênior com 6+ anos de experiência em React Native, ReactJS e TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
