import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  subtitle?: string;
  items?: string[];
  whaleSrc?: string;
};

export default function BienfaitsWithWhale({
  title,
  subtitle,
  items = [],
  whaleSrc = "/whale.jpg",
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="bienfaits" className="bg-[#FFFDF9]">
      <div
        ref={rootRef}
        className={[
          "mx-auto max-w-6xl px-4 py-16 transition-all duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        {/* En-tête */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900">{title}</h2>
          {subtitle && <p className="mt-2 text-stone-600 leading-relaxed">{subtitle}</p>}
        </div>

        {/* Contenu en deux colonnes */}
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Partie gauche — catégories détaillées */}
          <div className="space-y-8">
            <Category
              title="✨ Gestion émotionnelle et bien-être"
              items={[
                "Stress, anxiété, angoisses",
                "Gestion des émotions (colère, tristesse, hypersensibilité…)",
                "Fatigue, manque d’énergie, épuisement",
                "Manque de confiance en soi, estime de soi",
                "Phobies, peurs, blocages",
              ]}
            />
            <Category
              title="✨ Accompagnement personnel"
              items={[
                "Périodes de changements de vie (séparation, deuil, déménagement…)",
                "Difficultés relationnelles (famille, couple, travail)",
                "Soutien dans les périodes de transition (adolescence, parentalité, grossesse, ménopause…)",
                "Recherche d’équilibre entre vie personnelle et professionnelle",
              ]}
            />
            <Category
              title="✨ Somatisations et inconforts physiques"
              items={[
                "Tensions corporelles, douleurs inexpliquées",
                "Troubles du sommeil",
                "Migraines, maux de tête récurrents",
                "Troubles digestifs liés au stress",
              ]}
            />
            <Category
              title="✨ Développement et apprentissage"
              items={[
                "Difficultés scolaires ou d’apprentissage",
                "Manque de concentration, troubles de l’attention",
                "Mémorisation, organisation",
                "Préparation aux examens, entretiens",
              ]}
            />
            <Category
              title="✨ Pour les enfants et les adolescents"
              items={[
                "Gestion des émotions et du stress",
                "Hyperactivité, agitation, manque de concentration",
                "Troubles du sommeil",
                "Difficultés scolaires",
                "Peurs, angoisses nocturnes",
                "Accompagnement des réflexes archaïques",
              ]}
            />
          </div>

          {/* Partie droite — uniquement l’avertissement maintenant */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-[#E7D7C6] bg-[#F7EFE7]/70 p-5 text-sm text-stone-700 shadow-[0_4px_12px_rgba(163,123,83,0.05)]">
              ⚠️ <strong>Important :</strong> la kinésiologie n’est pas une pratique médicale et ne
              remplace pas un suivi médical ou psychologique. Elle vient en complément, pour
              favoriser l’équilibre global et le bien-être.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= COMPOSANTS INTERNES ========================= */
function Category({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#8F6B46] mb-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-stone-700">
            <span className="mt-1">
              <HandIcon className="h-4 w-4 text-[#C9AD92]" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 34c6-5 13-9 21-11 2-.6 3.8.7 3.7 2.6-.2 3.9-3.3 6.9-8.4 8.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M55 30c-6.1-4.4-13-7.5-20.3-9-2.1-.4-3.9 1.3-3.7 3.4.4 4.2 3.8 7 9.1 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
