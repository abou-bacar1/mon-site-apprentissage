import Link from "next/link";
import { lecons } from "@/app/data/cours";

export default function Cours() {
  return (
    <main className="flex-1 px-8 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Nos cours</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-10">
        Progresse leçon par leçon, à ton rythme.
      </p>

      <div className="flex flex-col gap-4">
        {lecons.map((lecon, index) => (
          <Link
            key={lecon.slug}
            href={`/cours/${lecon.slug}`}
            className="group flex items-center gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-accent transition-colors bg-white dark:bg-zinc-950"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-semibold shrink-0">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="text-xs text-zinc-500 mb-1">{lecon.module}</p>
              <h2 className="font-semibold text-lg group-hover:text-accent transition-colors">
                {lecon.titre}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {lecon.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}