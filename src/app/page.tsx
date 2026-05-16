export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] px-4 py-8 text-[#e7e7e7]">
      <main className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <section className="space-y-7">
          <div className="inline-flex rounded-full border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2 text-sm font-semibold text-[#ff6a2b]">
            Authentification par mail
          </div>
          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Un site de connexion propre, pret pour Vercel.
            </h1>
            <p className="max-w-xl text-base leading-7 text-[#a7a7a7] md:text-lg">
              Cette version remplace la page HTML de depart par une interface
              Next.js claire pour demander un code de connexion par email.
            </p>
          </div>
          <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Next.js", "Email OTP", "Vercel"].map((item) => (
              <div
                className="rounded-lg border border-[#2a2a2a] bg-[#171717] px-4 py-3 text-sm font-bold text-white"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] shadow-2xl shadow-black/30">
          <div className="bg-[#ff4400] px-7 py-5 text-center">
            <p className="text-lg font-bold text-white">mail-login</p>
          </div>
          <form className="space-y-5 p-7">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold text-white">
                Connexion securisee
              </h2>
              <p className="text-sm text-[#9b9b9b]">
                Entre ton email pour recevoir un code de verification.
              </p>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-semibold text-[#d7d7d7]">
                Email
              </span>
              <input
                className="w-full rounded-md border border-[#2a2a2a] bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#ff4400] focus:ring-2 focus:ring-[#ff4400]/25"
                placeholder="vous@exemple.com"
                type="email"
              />
            </label>

            <button
              className="w-full rounded-md bg-[#ff4400] px-4 py-3 font-bold text-white transition hover:bg-[#ff5f24]"
              type="button"
            >
              Envoyer le code
            </button>

            <div className="rounded-lg border border-[#2a2a2a] bg-[#121212] p-4 text-sm leading-6 text-[#a7a7a7]">
              Branche les routes API du projet ou tes variables email avant de
              deployer l&apos;envoi reel des codes.
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
