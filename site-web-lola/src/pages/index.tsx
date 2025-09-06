import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-emerald-200/60">
      {/* ===== NAV ===== */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 transition-transform group-hover:scale-110" />
            <span className="text-sm font-semibold tracking-tight">Lola Hernandez</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-[15px]">
            <a className="hover:text-gray-700" href="#apropos">À propos</a>
            <a className="hover:text-gray-700" href="#pour-qui">Pour qui ?</a>
            <a className="hover:text-gray-700" href="#approche">Approche</a>
            <a className="hover:text-gray-700" href="#bienfaits">Bienfaits</a>
            <a className="hover:text-gray-700" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:shadow-md active:scale-95">
            Prendre rendez-vous
          </a>
        </div>
      </header>

      {/* ===== HERO (structure alignée) ===== */}
      <section className="relative overflow-hidden">
        {/* fond décoratif léger */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-emerald-300/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-teal-300/30 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-50 to-transparent" />
        </div>

        {/* Conteneur centré et équilibré */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            {/* Colonne texte */}
            <div className="order-2 md:order-1">
              <p className="text-sm font-medium text-emerald-700">Bonjour, je suis Lola.</p>
              <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Kinésiologie & réflexes archaïques
              </h1>
              <p className="mt-4 max-w-xl text-[15px] text-gray-600">
                En formation depuis 2024, j’accompagne avec douceur et structure vers plus de force, d’équilibre et de confiance.
                Outils : <em>Santé par le toucher</em>, <em>Brain Gym</em>, <em>Aura énergétique</em>.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:shadow-md active:scale-95">
                  Réserver une séance
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094L13.585 11H4a1 1 0 01-.117-1.993L4 9h9.585l-3.292-3.293a1 1 0 010-1.414z"/></svg>
                </a>
                <a href="#apropos" className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-50">
                  Découvrir
                </a>
              </div>
            </div>

            {/* Colonne image */}
            <div className="order-1 md:order-2 md:pl-4">
              <div className="mx-auto w-full max-w-md">
                <div className="relative aspect-[4/5] w-full">
                  <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-200 via-teal-100 to-white blur-2xl" />
                  <Image
                    src="/lola-photo.JPG"
                    alt="Photo de présentation de Lola Hernandez"
                    fill
                    className="rounded-[1.5rem] object-cover shadow-xl ring-1 ring-black/5"
                    sizes="(max-width: 768px) 90vw, 480px"
                    priority
                  />
                </div>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Accompagnement avec douceur & authenticité
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== À PROPOS ===== */}
      <section id="apropos" className="border-t bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 py-16 md:grid-cols-2">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight">À propos</h2>
            <p>
              Je m’appelle <strong>Lola Hernandez</strong> et c’est mon propre chemin de vie, parsemé d’épreuves mais aussi de belles renaissances,
              qui m’a conduite vers la kinésiologie. J’ai commencé ma formation en <strong>septembre 2024</strong>, avec le désir de transmettre
              ce que cette pratique m’a apporté : de la force, de l’équilibre et de la confiance.
            </p>
            <p>
              Je suis actuellement en <strong>formation</strong>, avec déjà des outils concrets — <em>Santé par le toucher</em>, <em>Brain Gym</em>,
              et <em>Aura énergétique</em> — qui me permettent de construire des séances structurées et adaptées à chaque personne.
            </p>
            <p>
              En <strong>septembre 2026</strong>, je me suis également dirigée vers les <strong>réflexes archaïques</strong>, pour accompagner enfants, adultes,
              parents et enseignants avec des clés durables.
            </p>
          </div>
          <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
            <h3 className="text-lg font-medium">Signature d’accompagnement</h3>
            <ul className="mt-4 grid gap-3 text-sm text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500"/>Approche douce, globale et personnalisée</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500"/>Corps • émotions • mental en synergie</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500"/>Outils : Santé par le toucher, Brain Gym, Aura énergétique</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500"/>Formation continue depuis 2024</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== POUR QUI ===== */}
      <section id="pour-qui" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">Pour qui ?</h2>
            <p className="mt-2 text-gray-600">La kinésiologie s’adresse à tous, quel que soit l’âge ou le parcours.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Enfants', desc: 'Développement, apprentissages, concentration, émotions, confiance.' },
              { title: 'Parents', desc: 'Mieux comprendre et accompagner son enfant au quotidien.' },
              { title: 'Adultes', desc: 'Dépasser des blocages, gérer le stress, retrouver alignement.' },
              { title: 'Enseignants & éducateurs', desc: 'Des outils concrets pour plus de sérénité et de compréhension.' },
            ].map((c) => (
              <div key={c.title} className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{c.title}</h3>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 transition group-hover:scale-125" />
                </div>
                <p className="mt-3 text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPROCHE ===== */}
      <section id="approche" className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold tracking-tight">Mon approche</h2>
              <p>
                Une séance est construite comme un parcours : écoute, recentrage, tests doux, protocoles adaptés et intégration.
                L’objectif : créer les conditions d’un mieux‑être durable et d’un fonctionnement plus fluide au quotidien.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-gray-700">
                <li>• Mise en confiance & objectifs clairs</li>
                <li>• Protocoles issus de la kinésiologie (tests musculaires doux)</li>
                <li>• Intégration avec des outils ciblés (Santé par le toucher, Brain Gym, Aura énergétique)</li>
                <li>• Conseils simples pour prolonger les effets chez soi</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
              <h3 className="text-lg font-medium">Ce que vous ressentez souvent après</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {['Apaisement', 'Clarté intérieure', 'Lâcher‑prise', 'Énergie plus stable'].map((k) => (
                  <div key={k} className="rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5">
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BIENFAITS ===== */}
      <section id="bienfaits" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Les bienfaits</h2>
          <p className="mt-2 max-w-3xl text-gray-600">
            Vers un mieux‑être global : libération des tensions, meilleure gestion du stress, apaisement émotionnel et
            équilibre corps‑esprit. Confiance, concentration, motivation et clarté intérieure pour avancer sereinement.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Mieux‑être global', items: ['Tensions libérées', 'Sommeil & récupération', 'Énergie plus fluide'] },
              { title: 'Régulation émotionnelle', items: ['Stress apaisé', 'Clarté mentale', 'Ancrage & recentrage'] },
              { title: 'Performance & apprentissages', items: ['Concentration', 'Motivation', 'Progression sportive'] },
              { title: 'Transitions de vie', items: ['Périodes de changement', 'Blocages', 'Épuisement'] },
            ].map((g) => (
              <div key={g.title} className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{g.title}</h3>
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <ul className="mt-3 grid gap-2 text-sm text-gray-700">
                  {g.items.map((it) => (<li key={it}>• {it}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">Contact & tarifs</h2>
              <ul className="mt-6 grid gap-2 text-sm text-gray-800">
                <li>Email : <a className="underline decoration-emerald-400 underline-offset-4 hover:text-emerald-700" href="mailto:lola7473@hotmail.fr">lola7473@hotmail.fr</a></li>
                <li>Téléphone : <a className="underline decoration-emerald-400 underline-offset-4 hover:text-emerald-700" href="tel:+33659930142">06 59 93 01 42</a></li>
                <li className="text-gray-700">Séance à domicile ou chez moi à La Flachère — 53 chemin des greniers, 73440 Les Belleville</li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border bg-white p-3 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500" />
                <div className="text-sm text-gray-700">Réponse rapide par email. Décrivez brièvement votre besoin.</div>
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium">Tarifs</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm">
                  <div className="text-sm text-gray-500">Adulte</div>
                  <div className="mt-1 text-2xl font-semibold">50 €</div>
                </div>
                <div className="rounded-xl border bg-gradient-to-b from-gray-50 to-white p-5 shadow-sm">
                  <div className="text-sm text-gray-500">Enfant</div>
                  <div className="mt-1 text-2xl font-semibold">35 €</div>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500">Tarifs susceptibles d’évoluer selon formations & certifications.</p>
              <a href="mailto:lola7473@hotmail.fr" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:shadow-md active:scale-95">
                Demander un créneau
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Lola Hernandez — Kinésiologie & réflexes archaïques
        </div>
      </footer>
    </main>
  );
}
