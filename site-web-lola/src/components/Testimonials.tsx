// components/Testimonials.tsx
import { useRef } from "react";
import Head from "next/head";

type Testimonial = {
  body: string;
  author?: string;
  date?: string;        // "2025-01-30"
  source?: string;      // "SMS", "Instagram", etc.
};

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  businessName?: string;
  businessUrl?: string;
};

export default function Testimonials({
  id = "temoignages",
  title = "Retours de séance",
  subtitle = "Des mots reçus après des accompagnements, partagés avec leur accord.",
  businessName = "Lola Hernandez – Kinésiologue",
  businessUrl,
  testimonials = [
    {
      body:
        "J’ai fait appel à Lola pour un soin énergétique à distance pour moi et pour mon fils. Pour l’anxiété et le stress : beaucoup de bien-être très rapidement ; mon fils était plus apaisé au coucher, et moi moins stressée avec plus de recul.",
      source: "Instagram",
    },
    {
      body:
        "La séance se déroule dans un cadre calme et apaisant. Lola cerne les points à travailler, précise un cadre flexible et à l’écoute du corps. On se laisse guider et tout se passe en douceur. Je recommande les yeux fermés.",
      source: "SMS",
    },
    {
      body:
        "Après la séance je me sens moins nerveuse. Quand je rumine, je me répète « j’accepte mon histoire familiale » et je cogite moins. J’ai repris du temps pour moi (marche, vélo) et je prévois un rdv aussi pour mon fils.",
      source: "SMS",
    },
  ],
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.9) * (dir === "next" ? 1 : -1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // JSON-LD minimal
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((t, i) => ({
      "@type": "Review",
      "position": i + 1,
      "reviewBody": t.body,
      ...(t.author ? { "author": { "@type": "Person", "name": t.author } } : {}),
      ...(t.date ? { "datePublished": t.date } : {}),
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": businessName,
        ...(businessUrl ? { "url": businessUrl } : {}),
      },
    })),
  };

  return (
    <section id={id} className="py-14 sm:py-16 scroll-mt-24">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <div className="text-[11px] sm:text-xs inline-flex items-center gap-2 rounded-full bg-[#F1E8DE] px-3 py-1 text-[#8F6B46] border border-[#E7D7C6]">
            <span>Avis</span>
          </div>
          <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-stone-900">{title}</h2>
          {subtitle && <p className="mt-2 text-stone-600 leading-relaxed">{subtitle}</p>}
        </div>

        {/* Zone relative : flèches centrées et symétriques */}
        <div className="relative mt-8 sm:mt-10">
          {/* Piste scrollable (avec gouttières pour les boutons) */}
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory
                       px-6 sm:px-8 scroll-px-6 sm:scroll-px-8 pb-2"
          >
            {testimonials.map((t, idx) => (
              <article
                key={idx}
                className="snap-start shrink-0 basis-[85%] sm:basis-[48%] lg:basis-[31%]
                           rounded-2xl sm:rounded-3xl border border-[#E7D7C6] bg-[#FFFCF8]/90 p-4 sm:p-5"
                aria-label={`Témoignage ${idx + 1}`}
              >
                <p className="text-stone-800 leading-relaxed">{t.body}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
                  <span>{t.author ?? "Client·e"}</span>
                  {t.source && (
                    <span className="rounded-full bg-[#F1E8DE] border border-[#E7D7C6] px-2 py-0.5">
                      {t.source}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Flèche gauche */}
          <button
            aria-label="Témoignage précédent"
            onClick={() => scrollBy("prev")}
            className="hidden sm:inline-flex absolute left-3 top-1/2 -translate-y-1/2
                       z-10 items-center justify-center w-10 h-10 rounded-full
                       border border-[#E7D7C6] bg-white/90 backdrop-blur shadow-sm hover:bg-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="#8F6B46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            aria-label="Témoignage suivant"
            onClick={() => scrollBy("next")}
            className="hidden sm:inline-flex absolute right-3 top-1/2 -translate-y-1/2
                       z-10 items-center justify-center w-10 h-10 rounded-full
                       border border-[#E7D7C6] bg-white/90 backdrop-blur shadow-sm hover:bg-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="#8F6B46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
