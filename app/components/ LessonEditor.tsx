"use client";

import { useState } from "react";

export default function LessonEditor({
  defaultCode,
}: {
  defaultCode: string;
}) {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div>
        <p className="text-sm font-medium mb-1 text-zinc-500">Ton code</p>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="w-full h-64 p-3 font-mono text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900"
        />
      </div>
      <div>
        <p className="text-sm font-medium mb-1 text-zinc-500">Résultat</p>
        <iframe
          srcDoc={code}
          className="w-full h-64 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white"
          sandbox=""
        />
      </div>
    </div>
  );
}