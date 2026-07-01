import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl mx-auto flex-col items-center justify-center py-32 px-8 text-center">
        <span className="text-sm font-semibold text-accent mb-4">
          Apprends à coder, gratuitement
        </span>
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50 mb-6">
          Bienvenue sur CodeMali
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-8">
          Apprends le développement web de zéro jusqu&apos;à devenir un
          développeur capable de créer un site complet.
        </p>
        <Link
          href="/cours"
          className="btn-primary rounded-full px-8 py-3 font-medium"
        >
          Commencer à apprendre
        </Link>
      </main>
    </div>
  );
}