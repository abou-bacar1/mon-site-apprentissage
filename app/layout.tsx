import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeMali",
  description: "Apprends le développement web de zéro jusqu'à devenir pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="font-bold text-xl text-accent">
            CodeMali
          </Link>
          <div className="flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors">
              Accueil
            </Link>
            <Link href="/cours" className="text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors">
              Cours
            </Link>
            <Link href="/connexion" className="btn-primary rounded-full px-5 py-2">
              Connexion
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}