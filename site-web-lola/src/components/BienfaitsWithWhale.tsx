import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  subtitle?: string;
  items: string[];
  whaleSrc?: string; // /whale.jpg par défaut
};

export default function BienfaitsWithWhale({
  title,
  subtitle,
  items,
  whaleSrc = "/whale.jpg",
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [ratio, setRatio] = useState(0);

  // Apparition + progression (pour la cascade des points)
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ioEnter = new IntersectionObserver(
      (ents) => ents.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.15 }
    );
    ioEnter.observe(el);

    const ioRatio = new IntersectionObserver(
      (ents) =>
        ents.forEach((e) =>
          setRatio(Math.max(0, Math.min(1, e.intersectionRatio)))
        ),
      { threshold: Array.from({ length: 20 }, (_, i) => +(i / 19).toFixed(2)) }
    );
    ioRatio.observe(el);

    return () => {
      ioEnter.disconnect();
      ioRatio.disconnect();
    };
  }, []);

  const visibleCount = Math.ceil(items.length * ratio);

  return (
    <section id="bienfaits" className="bg-[#FFFDF9]">
      <div
        ref={rootRef}
        className={[
          "mx-auto max-w-6xl px-4 py-16 transition-all duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          "motion-reduce:transition-none",
        ].join(" ")}
      >
        {/* Header */}
        <div className="max-w-2xl">
          <div className="text-xs inline-flex items-center gap-2 rounded-full bg-[#F1E8DE] px-3 py-1 text-[#8F6B46] border border-[#E7D7C6]">
            <span>Bienfaits</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-stone-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-stone-600 leading-relaxed">{subtitle}</p>
          )}
        </div>

        {/* Contenu */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Liste gauche */}
          <ul className="space-y-3">
            {items.map((t, i) => {
              const show = i < visibleCount;
              const delay = `${Math.min(i * 90, 420)}ms`;
              return (
                <li
                  key={i}
                  className={[
                    "flex items-start gap-3 transition-all duration-500 ease-out",
                    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                  ].join(" ")}
                  style={{ transitionDelay: delay }}
                >
                  <span className="mt-1">
                    <HandIcon className="h-5 w-5 text-[#C9AD92]" />
                  </span>
                  <span className="text-stone-700">{t}</span>
                </li>
              );
            })}
          </ul>

          {/* Colonne droite — image CONFINÉE */}
          <div className="relative">
            {/* Carte texte */}
            <div className="relative z-10 rounded-3xl border border-[#E7D7C6] bg-[#F7EFE7]/80 p-6 lg:p-7 backdrop-blur-[2px] shadow-[0_10px_24px_rgba(163,123,83,0.05)]">
              <p className="leading-relaxed text-stone-700">
                Chaque séance est unique. Grâce au test musculaire et à une écoute
                bienveillante, nous identifions ce qui a besoin d’être rééquilibré
                pour remettre en mouvement vos ressources profondes.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm">
                <HandIcon className="h-5 w-5 text-[#C9AD92]" />
                <span className="text-stone-600">
                  Approche globale, respectueuse et personnalisée.
                </span>
              </div>
            </div>

            {/* Bloc décoratif inférieur — ne déborde JAMAIS de cette colonne */}
            <div className="relative mt-4">
              <div
                className={[
                  // conteneur verrouillé
                  "relative overflow-hidden rounded-[28px] border border-[#E7D7C6] bg-white/70 shadow-[0_6px_24px_rgba(163,123,83,0.06)]",
                  // hauteur fixe responsives pour éviter tout chevauchement
                  "h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]",
                  // fondu d’entrée
                  "transition-opacity duration-700",
                  visible ? "opacity-100" : "opacity-0",
                ].join(" ")}
                // masque doux en haut pour mieux fondre avec la section
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0.0) 100%)",
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0.0) 100%)",
                }}
                aria-hidden="true"
              >
                {/* Image fill, centrée vers le bas pour voir la baleine */}
                <div className="absolute inset-0">
                  <Image
                    src={whaleSrc}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 560px, 100vw"
                    className="object-cover object-[center_85%] animate-[floatSoft_10s_ease-in-out_infinite] motion-reduce:animate-none"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* keyframes globales */}
      <style jsx global>{`
        @keyframes floatSoft {
          0% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -6px, 0); }
          100% { transform: translate3d(0, 0px, 0); }
        }
      `}</style>
    </section>
  );
}

function HandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M9 34c6-5 13-9 21-11 2-.6 3.8.7 3.7 2.6-.2 3.9-3.3 6.9-8.4 8.8"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M55 30c-6.1-4.4-13-7.5-20.3-9-2.1-.4-3.9 1.3-3.7 3.4.4 4.2 3.8 7 9.1 8.5"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
