// pages/index.tsx
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import BienfaitsWithWhale from "@/components/BienfaitsWithWhale";
import Testimonials from "@/components/Testimonials";
import MissionCoeur from "@/components/MissionCoeur";
import ReflexesArchaiques from "@/components/ReflexesArchaïques";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Lola Hernandez – Kinésiologue</title>
        <meta
          name="description"
          content="Kinésiologie douce et holistique — séances adaptées pour enfants, parents, adultes et enseignants. À domicile ou à La Flachère (Les Belleville)."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Couleur de la barre d'état mobile */}
        <meta name="theme-color" content="#FAF5EF" />
      </Head>

      <main className="min-h-screen text-stone-800 bg-[#FAF5EF]">
        {/* NAV */}
        <header className="sticky top-0 z-40 bg-[#FAF5EF]/80 backdrop-blur border-b border-[#EDE1D4]">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HandsLogo className="h-8 w-8 text-[#D8C2AE]" />
              <Link href="#" className="font-semibold tracking-wide text-stone-700">
                Lola Hernandez
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#pour-qui" className="hover:text-[#A37B53] transition">Pour qui ?</a>
              <a href="#bienfaits" className="hover:text-[#A37B53] transition">Pourquoi ?</a>
              <a href="#temoignages" className="hover:text-[#A37B53] transition">Avis</a>
              <a href="#contact" className="hover:text-[#A37B53] transition">Contact</a>
            </nav>

            {/* Mobile burger */}
            <button
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-[#E7D7C6] bg-white/70 px-3 py-2 text-sm"
            >
              <span className="sr-only">Menu</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="#8F6B46" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Mobile drawer */}
          {menuOpen && (
            <div className="md:hidden border-t border-[#EDE1D4] bg-[#FFFCF8]/95 backdrop-blur">
              <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
                <a
                  href="#pour-qui"
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base border-b border-[#F0E6DA] hover:text-[#A37B53]"
                >
                  Pour qui ?
                </a>
                <a
                  href="#bienfaits"
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base border-b border-[#F0E6DA] hover:text-[#A37B53]"
                >
                  Pourquoi ?
                </a>
                <a
                  href="#temoignages"
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base border-b border-[#F0E6DA] hover:text-[#A37B53]"
                >
                  Avis
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base hover:text-[#A37B53]"
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* HERO */}
        <section className="relative scroll-mt-24" id="accueil">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(1200px 600px at 20% 20%, #FFF8F1 0%, #F7EFE7 45%, #F3E7DB 75%, #FAF5EF 100%)",
            }}
          />
          <WaveTop className="text-[#F1E7DB]" />

          <div className="mx-auto max-w-6xl px-4 pt-8 sm:pt-12 pb-14 sm:pb-16">
            {/* grille avec colonne gauche contrainte */}
            <div className="grid lg:grid-cols-[minmax(0,680px)_1fr] gap-10 sm:gap-12 items-start">
              {/* IMAGE */}
              <div className="relative order-1 lg:order-2">
                <div className="absolute -inset-6 rounded-[2rem] bg-[#EADCCF]/50 blur-2xl" />
                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-[#E7D7C6] shadow-sm bg-white">
                  <Image
                    src="/lola-photo.JPG"
                    alt="Portrait de Lola Hernandez, kinésiologue"
                    width={960}
                    height={1200}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 opacity-35">
                  <HandsLogo className="h-16 w-16 sm:h-20 sm:w-20 text-[#D8C2AE]" />
                </div>
              </div>

              {/* TEXTE */}
              <div className="order-2 lg:order-1">
                {/* wrapper colonne gauche pour centrage mobile + alignement desktop */}
                <div className="mx-auto lg:mx-0 max-w-[680px] flex flex-col">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#F1E8DE] px-3 py-1 text-[11px] sm:text-xs text-[#8F6B46] border border-[#E7D7C6]">
                    <HandsLogo className="h-4 w-4 text-[#C9AD92]" />
                    Kinésiologie douce & holistique
                  </span>

                  <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-stone-900">
                    Praticienne en kinésiologie et spécialisée en réflexes archaïques 
                  </h1>

                  {/* Description validée */}
                  <p className="mt-4 sm:mt-5 text-base sm:text-[1.05rem] leading-relaxed text-stone-700">
                    Passionnée par le bien-être et par
                    l’<strong>intelligence du corps</strong>. La <strong>kinésiologie</strong> est
                    devenue pour moi une évidence&nbsp;: elle révèle le dialogue entre le
                    <em> cerveau</em>, le <em>corps</em> et les <em>émotions</em>, et ouvre la voie
                    à l’<strong>équilibre</strong>, à la <strong>régénération</strong> et à la
                    découverte de nos <strong>ressources intérieures</strong>.
                  </p>

                  {/* Contexte formation & outils */}
                  <p className="mt-3 sm:mt-4 text-base sm:text-[1.05rem] leading-relaxed text-stone-700">
                    En formation depuis <strong>septembre 2024</strong>, j’accompagne déjà avec
                    <em> Santé par le Toucher</em>, <em> Édukinésiologie</em> et l’<em>Aura énergétique</em> afin de construire des séances douces et personnalisées. En{" "}
                    <strong>2025</strong>, j’ajoute le travail sur les{" "}
                    <strong>réflexes archaïques</strong>.
                  </p>

                  {/* Mission de cœur */}
                 
                  <ReflexesArchaiques className="mt-6 sm:mt-8" />
                   <MissionCoeur className="mt-6 sm:mt-8" />

                  {/* Boutons */}
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                    <a
                      href="#contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#A37B53] text-white px-5 py-3 text-sm font-medium shadow-sm hover:brightness-95 transition"
                    >
                      Prendre contact
                    </a>
                    <a
                      href="#bienfaits"
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-[#E0D3C4] bg-white/80 px-5 py-3 text-sm font-medium hover:border-[#C9AD92] hover:text-[#8F6B46] transition"
                    >
                      Pourquoi venir en séance ?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <WaveSeparator className="text-[#EEE3D7]" />
        </section>

        {/* POUR QUI */}
        <section id="pour-qui" className="py-14 sm:py-16 scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              eyebrow="Pour qui ?"
              title="Un accompagnement pour tous les âges"
              subtitle="Des séances adaptées avec douceur et authenticité."
            />
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card title="Enfants" text="Développement, apprentissages, concentration, gestion des émotions, confiance en soi." />
              <Card title="Parents" text="Mieux comprendre et accompagner vos enfants, trouver un soutien face aux défis du quotidien." />
              <Card title="Adultes" text="Dépasser des blocages, gérer le stress, apaiser les émotions, retrouver confiance et alignement." />
              <Card title="Enseignants" text="Des outils supplémentaires pour accompagner les enfants avec sérénité et compréhension." />
            </div>
          </div>
        </section>

        {/* BIENFAITS */}
        <section id="bienfaits" className="scroll-mt-24">
       <BienfaitsWithWhale
  title="Pourquoi faire une séance de kinésiologie ?"
  
  
/>
        </section>

        {/* AVIS (Testimonials) */}
        <Testimonials
          id="temoignages"
          title="Retours de séance"
          subtitle="Des mots reçus après des accompagnements, partagés avec leur accord."
          businessName="Lola Hernandez – Kinésiologue"
          businessUrl="https://ton-domaine.com"
        />

        {/* CONTACT */}
        <section id="contact" className="py-14 sm:py-16 scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              eyebrow="Contact"
              title="Réserver une séance"
              subtitle="À domicile ou chez moi à La Flachère (Les Belleville)."
            />
            <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-3xl border border-[#E7D7C6] bg-[#FFFDFB]/80 p-5 sm:p-6">
                <h3 className="font-semibold text-stone-800">Coordonnées</h3>
                <ul className="mt-3 space-y-2 text-stone-700">
                  <li>
                    <span className="font-medium">Email :</span>{" "}
                    <Link href="mailto:lolakinesio@gmail.com" className="text-[#8F6B46] underline underline-offset-2 hover:opacity-80">
                      lolakinesio@gmail.com
                    </Link>
                  </li>
                  <li>
                    <span className="font-medium">Téléphone :</span>{" "}
                    <a href="tel:+33659930142" className="text-[#8F6B46] hover:opacity-80">
                      06&nbsp;59&nbsp;93&nbsp;01&nbsp;42
                    </a>
                  </li>
                  <li>
                    <span className="font-medium">Adresse :</span> Rue du Nant du Four, lekoutere, 73440 Les Belleville
                  </li>
                </ul>
               
              </div>

              <div className="rounded-3xl border border-[#E7D7C6] bg-[#FFFDFB]/80 p-5 sm:p-6">
                <h3 className="font-semibold text-stone-800">Tarifs</h3>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Price title="Adulte et enfant" value="65 € / séance" />
                  <strong> <p> Une séance de kinésiologie dure environ 1h30.</p> </strong>
                </ul>
                
                <div className="mt-6">
                  <a
                    href="mailto:lola7473@hotmail.fr?subject=Prise%20de%20rendez-vous%20Kin%C3%A9siologie"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#A37B53] text-white px-5 py-3 text-sm font-medium shadow-sm hover:brightness-95 transition"
                  >
                    Écrire à Lola
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#E7D7C6] py-8 [padding-bottom:env(safe-area-inset-bottom)]">
          <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center sm:justify-between text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Lola Hernandez — Kinésiologue</p>
            <div className="flex items-center gap-2">
              <HandsLogo className="h-5 w-5 text-[#D8C2AE]" />
              <span>Site réalisé avec douceur</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

/* ====================== UI PARTAGÉE ====================== */
function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-[11px] sm:text-xs inline-flex items-center gap-2 rounded-full bg-[#F1E8DE] px-3 py-1 text-[#8F6B46] border border-[#E7D7C6]">
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-stone-900">{title}</h2>
      {subtitle && <p className="mt-2 text-stone-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="group relative rounded-2xl sm:rounded-3xl border border-[#E7D7C6] bg-[#FFFCF8]/80 p-4 sm:p-5 transition hover:border-[#C9AD92] hover:shadow-sm">
      <div className="absolute -top-3 -right-3 opacity-30">
        <HandsLogo className="h-8 w-8 text-[#D8C2AE]" />
      </div>
      <h3 className="font-semibold text-stone-800">{title}</h3>
      <p className="mt-2 text-sm text-stone-700 leading-relaxed">{text}</p>
    </div>
  );
}

function Price({ title, value }: { title: string; value: string }) {
  return (
    <li className="rounded-2xl border border-[#E7D7C6] bg-[#F7EFE7] p-4">
      <div className="text-stone-600 text-sm">{title}</div>
      <div className="text-stone-900 font-semibold">{value}</div>
    </li>
  );
}

function HandsLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M9 34c6-5 13-9 21-11 2-.6 3.8.7 3.7 2.6-.2 3.9-3.3 6.9-8.4 8.8"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M55 30c-6.1-4.4-13-7.5-20.3-9-2.1-.4-3.9 1.3-3.7 3.4.4 4.2 3.8 7 9.1 8.5"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 44c6.5-1.5 13.1-2.2 19.7-2.1 2.2 0 3.9 1.9 3.6 4.1-.4 3.1-3.4 5.5-7.6 5.9"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M49 44c-6.2-1.3-12.6-1.9-19-1.6-2.2.1-3.9 2.1-3.4 4.2.8 3 3.8 5 7.9 5"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WaveSeparator({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" className={`w-full h-[70px] sm:h-[80px] ${className}`} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,64L60,69.3C120,75,240,85,360,96C480,107,600,117,720,112C840,107,960,85,1080,80C1200,75,1320,85,1380,90L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WaveTop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" className={`w-full h-[50px] sm:h-[60px] ${className}`} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        fill="currentColor"
      />
    </svg>
  );
}
