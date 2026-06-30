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
        <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="font-bold text-lg text-black dark:text-white">
            CodeMali
          </Link>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="/" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
              Accueil
            </Link>
            <Link href="/cours" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
              Cours
            </Link>
            <Link href="/connexion" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
              Connexion
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}