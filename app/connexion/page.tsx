export default function Connexion() {
  return (
    <main className="flex-1 px-8 py-16 max-w-sm mx-auto w-full">
      <h1 className="text-3xl font-bold mb-6">Connexion</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2 bg-transparent"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2 bg-transparent"
        />
        <button
          type="submit"
          className="bg-black text-white dark:bg-white dark:text-black rounded-lg px-4 py-2 font-medium"
        >
          Se connecter
        </button>
      </form>
    </main>
  );
}