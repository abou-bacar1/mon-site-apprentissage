import LessonEditor from "@/app/components/ LessonEditor"
export default function IntroductionHTML() {
  return (
    <main className="flex-1 px-8 py-16 max-w-3xl mx-auto">
      <p className="text-sm text-zinc-500 mb-2">Module 1 — HTML</p>
      <h1 className="text-3xl font-bold mb-6">Mes premières balises</h1>

      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        HTML (HyperText Markup Language) sert à structurer le contenu d&apos;une
        page web. On utilise des <strong>balises</strong> pour indiquer ce
        qu&apos;est chaque élément : un titre, un paragraphe, une image, etc.
      </p>

      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        Une balise s&apos;écrit entre chevrons, comme <code>&lt;h1&gt;</code>,
        et se ferme généralement avec un <code>/</code>, comme{" "}
        <code>&lt;/h1&gt;</code>. Exemple :
      </p>

      <pre className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 text-sm overflow-x-auto mb-6">
{`<h1>Bonjour le monde</h1>
<p>Ceci est un paragraphe.</p>`}
      </pre>

      <h2 className="text-xl font-semibold mb-3">À toi de jouer</h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-2">
        Modifie le code ci-dessous : change le texte du titre, et ajoute un
        deuxième paragraphe avec la balise <code>&lt;p&gt;</code>.
      </p>

      <LessonEditor
        defaultCode={`<h1>Mon titre</h1>
<p>Mon premier paragraphe.</p>`}
      />

      <p className="text-zinc-500 text-sm mt-6">
        💡 Astuce : essaie aussi <code>&lt;h2&gt;</code> pour un sous-titre, ou{" "}
        <code>&lt;strong&gt;</code> pour mettre du texte en gras.
      </p>
    </main>
  );
}