export type Lecon = {
  slug: string;
  titre: string;
  description: string;
  module: string;
};

export const lecons: Lecon[] = [
  {
    slug: "introduction-html",
    titre: "Introduction au HTML",
    description: "Découvre les bases : les balises, la structure d'une page.",
    module: "Module 1 — HTML",
  },
  {
    slug: "balises-texte",
    titre: "Les balises de texte",
    description: "Titres, gras, italique, listes : mets en forme ton contenu.",
    module: "Module 1 — HTML",
  },
];