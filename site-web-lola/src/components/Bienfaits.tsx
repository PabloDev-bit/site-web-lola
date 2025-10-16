import { useEffect, useRef, useState } from "react";

type Props = {
  id?: string;
  className?: string;
};

export default function Bienfaits({ id = "bienfaits", className = "" }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (ents) => ents.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} className={`bg-[#FFFDF9] ${className}`}>
      <div
        ref={rootRef}
        className={[
          "mx-auto max-w-5xl px-4 py-16 transition-all duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900">
          Les bienfaits de la kinésiologie
        </h2>

        {/* Intro */}
        <div className="mt-4 space-y-4 text-stone-700 leading-relaxed">
          <p>
            La kinésiologie est une approche globale qui aide à rétablir l’équilibre entre le corps,
            le cœur et l’esprit.
          </p>
          <p>
            À travers le test musculaire, le corps nous guide pour libérer ce qui bloque, apaiser
            les émotions et retrouver une circulation fluide de l’énergie.
          </p>
          <p>
            C’est un accompagnement qui permet de se reconnecter à soi, d’alléger ce qui pèse,
            et de redonner au corps toute sa capacité d’autorégulation.
          </p>
        </div>

        {/* Sous-titre */}
        <h3 className="mt-10 text-xl font-semibold text-[#8F6B46]">
          Elle peut aider à :
        </h3>

        {/* Liste des bienfaits */}
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-stone-800">
              <span className="mt-1 shrink-0">
                <CheckIcon className="h-5 w-5 text-[#C9AD92]" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Alerte info (optionnelle) */}
        <div className="mt-10 rounded-2xl border border-[#E7D7C6] bg-[#F7EFE7]/70 p-5 text-sm text-stone-700 shadow-[0_4px_12px_rgba(163,123,83,0.05)]">
          ⚠️ <strong>Important :</strong> la kinésiologie n’est pas une pratique médicale et ne
          remplace pas un suivi médical ou psychologique. Elle vient en complément, pour favoriser
          l’équilibre global et le bien-être.
        </div>
      </div>
    </section>
  );
}

/* ========================= Données & Icône ========================= */

const benefits = [
  "Gérer le stress, l’anxiété et les émotions trop présentes",
  "Retrouver confiance, calme et clarté intérieure",
  "Libérer les tensions physiques et les douleurs émotionnelles",
  "Améliorer le sommeil, la concentration et l’énergie au quotidien",
  "Dépasser les schémas répétitifs ou les blocages inconscients",
  "Accompagner les changements de vie avec plus de sérénité",
  "Soutenir les enfants dans leurs apprentissages, leurs émotions et leur confiance en eux",
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path
        d="M7 12.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
