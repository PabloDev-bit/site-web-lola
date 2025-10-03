// components/ReflexesArchaiques.tsx
type Props = { className?: string };

export default function ReflexesArchaiques({ className = "" }: Props) {
  return (
    <section
      className={[
        "rounded-2xl border border-[#E7D7C6] bg-[#FFFCF8]/90",
        "px-5 py-6 sm:px-6 sm:py-7",
        "shadow-[0_6px_25px_-12px_rgba(163,123,83,.25)]",
        "mx-auto lg:mx-0 w-full leading-relaxed",
        className,
      ].join(" ")}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-[#8F6B46]">
        ✨ Les réflexes archaïques
      </h3>

      <p className="mt-3 text-base sm:text-[1.05rem] text-stone-700">
        Les réflexes archaïques sont les premiers mouvements de vie, présents dès la
        naissance. Ils posent les fondations de l’<strong>équilibre</strong>, de la{" "}
        <strong>motricité</strong>, de la <strong>concentration</strong> et de la{" "}
        <strong>confiance en soi</strong>.
      </p>

      <p className="mt-3 text-base sm:text-[1.05rem] text-stone-700">
        Quand certains réflexes restent actifs, l’enfant peut rencontrer des difficultés à
        l’école : manque de concentration, agitation, troubles de l’écriture, maladresse,
        fatigue, difficultés à lire ou à mémoriser… Cela peut aussi se traduire par un
        manque de confiance, des peurs ou des colères difficiles à gérer.
      </p>

      <p className="mt-3 text-base sm:text-[1.05rem] text-stone-700">
        La réintégration des réflexes, par des mouvements simples et ludiques, redonne à
        l’enfant une base solide. Petit à petit, on observe plus de calme, une meilleure
        attention, une plus grande aisance dans les apprentissages et surtout une belle
        confiance en lui. 🌱💫
      </p>

      <p className="mt-3 text-base sm:text-[1.05rem] text-stone-700">
        C’est un cadeau précieux pour accompagner son{" "}
        <strong>épanouissement</strong>, aussi bien à l’école que dans sa vie
        quotidienne. 💛
      </p>
    </section>
  );
}
