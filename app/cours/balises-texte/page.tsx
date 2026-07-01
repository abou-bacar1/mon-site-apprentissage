import LessonEditor from "@/app/components/ LessonEditor";

export default function BalisesTexte() {
  return (
    <main className="flex-1 px-8 py-16 max-w-3xl mx-auto">
      <p className="text-sm text-zinc-500 mb-2">Module 1 — HTML</p>
      <h1 className="text-3xl font-bold mb-6">Les balises de texte</h1>

      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        HTML propose plusieurs balises pour structurer et mettre en valeur du
        texte. Voici les plus importantes à connaître.
      </p>

      <h2 className="text-xl font-semibold mb-3 mt-6">Les titres</h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        Il existe 6 niveaux de titres, de <code>&lt;h1&gt;</code> (le plus
        important) à <code>&lt;h6&gt;</code> (le moins important). On
        n&apos;utilise généralement qu&apos;un seul <code>&lt;h1&gt;</code>
        par page.
      </p>

      <pre className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 text-sm overflow-x-auto mb-6">
{`<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Petit sous-titre</h3>`}
      </pre>

      <h2 className="text-xl font-semibold mb-3 mt-6">Mettre en valeur du texte</h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        Pour mettre du texte en <strong>gras</strong>, on utilise{" "}
        <code>&lt;strong&gt;</code>. Pour mettre du texte en <em>italique</em>,
        on utilise <code>&lt;em&gt;</code>.
      </p>

      <pre className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 text-sm overflow-x-auto mb-6">
{`<p>Ce mot est <strong>important</strong>.</p>
<p>Ce mot est <em>souligné par le sens</em>.</p>`}
      </pre>

      <h2 className="text-xl font-semibold mb-3 mt-6">Les listes</h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        Une liste à puces s&apos;écrit avec <code>&lt;ul&gt;</code>, et chaque
        élément avec <code>&lt;li&gt;</code>.
      </p>

      <pre className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 text-sm overflow-x-auto mb-6">
{`<ul>
  <li>Premier élément</li>
  <li>Deuxième élément</li>
</ul>`}
      </pre>

      <h2 className="text-xl font-semibold mb-3 mt-6">À toi de jouer</h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-2">
        Crée une petite fiche à propos de toi : un titre avec ton nom, un
        paragraphe de présentation avec un mot en gras, et une liste de 3
        choses que tu aimes.
      </p>

      <LessonEditor
        defaultCode={`<h1>Mon nom</h1>
<p>Je suis en train d'apprendre le <strong>développement web</strong>.</p>
<ul>
  <li>Chose 1</li>
  <li>Chose 2</li>
  <li>Chose 3</li>
</ul>`}
      />

      <p className="text-zinc-500 text-sm mt-6">
        💡 Astuce : pour une liste numérotée, remplace <code>&lt;ul&gt;</code>{" "}
        par <code>&lt;ol&gt;</code>.
      </p>
    </main>
  );
}