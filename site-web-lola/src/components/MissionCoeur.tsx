// components/MissionCoeur.tsx
type Props = { className?: string };

export default function MissionCoeur({ className = "" }: Props) {
  return (
    <section
      className={[
        "rounded-2xl border border-amber-200 bg-amber-50/70",
        "px-5 py-5 sm:px-6 sm:py-6",
        "shadow-[0_6px_30px_-12px_rgba(163,123,83,.25)]",
        "mx-auto lg:mx-0 w-full",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">☀️</span>
        <h3 className="text-lg sm:text-xl font-semibold text-amber-800 tracking-wide">
          MA MISSION DE CŒUR
        </h3>
        <span className="text-xl hidden sm:inline">☀️</span>
      </div>

      <div className="mt-3 space-y-3 text-base sm:text-[1.05rem] leading-relaxed text-stone-700">
        <p>
          Accompagner les enfants dans la réintégration de leurs{" "}
          <strong>réflexes archaïques</strong>, c’est bien plus qu’un travail
          pour moi&nbsp;: c’est ma mission de cœur. Je souhaite leur offrir des
          bases solides pour qu’ils puissent <strong>apprendre</strong> avec plus
          de facilité, <strong>grandir</strong> avec confiance et{" "}
          <strong>s’épanouir</strong> pleinement dans leur vie.
        </p>
        <p>
          Les voir retrouver leur <strong>équilibre</strong>, leur{" "}
          <strong>calme intérieur</strong> et leur <strong>joie</strong>, c’est le
          plus beau sens à mon chemin. ✨
        </p>
      </div>
    </section>
  );
}
