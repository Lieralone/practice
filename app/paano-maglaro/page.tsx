"use client";

import Link from "next/link";
import {
  HiEye,
  HiCursorClick,
  HiCheckCircle,
  HiLightBulb,
  HiPlay,
  HiColorSwatch,
  HiArrowLeft,
} from "react-icons/hi";
import {
  GAME_NAME,
  WORDS_PER_GROUP,
  TOTAL_GROUPS,
  MAX_ATTEMPTS,
} from "@/lib/constants";
import { GROUP_THEME, GroupColor } from "@/lib/constants";
import { HiTrophy } from "react-icons/hi2";

const STEPS = [
  {
    number: 1,
    title: "Suriin ang mga salita",
    description: `Makikita mo ang ${WORDS_PER_GROUP * TOTAL_GROUPS} na salita na naka-shuffle sa game board. Ang mga salitang ito ay nagmula sa iba't ibang katutubong wika ng miyembro ng aming grupo.`,
    icon: HiEye,
  },
  {
    number: 2,
    title: "Pumili ng 4 na salita",
    description: `I-tap o i-click ang ${WORDS_PER_GROUP} na salita na sa tingin mo ay konektado.`,
    icon: HiCursorClick,
  },
  {
    number: 3,
    title: "Isumite ang sagot",
    description: `Kapag sure ka na sa napili mong ${WORDS_PER_GROUP} na sa salita. Isipin uli kung tama ba talaga ang pinili mo. At kung sure ka na talaga, pindutin ang "Isumite" button.`,
    icon: HiCheckCircle,
  },
  {
    number: 4,
    title: "Ulitin ang Hakbang 1-3",
    description: `Hanggang mahanap mo lahat ng ${TOTAL_GROUPS} na grupo ay ulitin lamang ang mga hakbang sa itaas. Ayun lang, good luck po!`,
    icon: HiTrophy,
  },
];

const DIFFICULTY_ORDER: GroupColor[] = ["yellow", "green", "blue", "purple"];

export default function PaanoMaglaroPage() {
  return (
    <div className="flex flex-col min-h-screen font-pixel">
      <header className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-5">
        <div className="max-w-[640px] mx-auto flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm font-semibold no-underline transition-all hover:border-[var(--green-primary)] hover:text-[var(--green-primary)]"
          >
            <HiArrowLeft className="w-4 h-4" />
            Bumalik
          </Link>

          <h1 className="text-xl font-bold text-[var(--green-primary)] m-0">
            Paano Maglaro?
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-[640px] w-full mx-auto px-4 py-8">
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-[var(--text-primary)] mb-3">
            Maligayang pagdating sa {GAME_NAME} PH!
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
            Ang {GAME_NAME} ay isang daily word connections game na naglalayong
            ipagdiwang ang ating mga wikang Filipino. Hanapin ang mga grupo ng
            salita na may koneksyon! Sa kasalukuyan mayroon 3 suportadong wika:
            Tagalog, Kapampangan, at Pangasinense.
          </p>
        </section>

        {/* ── step cards ── */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-5">
            Mga Hakbang
          </h3>

          <div className="flex flex-col gap-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="animate-fade-in-up p-6 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-secondary)]"
                  style={{
                    animationDelay: `${step.number * 100}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* icon */}
                    <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--green-glow)] border border-[var(--green-primary)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[var(--green-primary)]" />
                    </div>

                    <div>
                      <div className="text-[0.7rem] font-bold text-[var(--green-primary)] uppercase tracking-widest mb-1">
                        Hakbang {step.number}
                      </div>

                      <div className="text-base font-bold text-[var(--text-primary)] mb-1.5">
                        {step.title}
                      </div>

                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed m-0">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── legend ── */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
            Antas ng Kahirapan
          </h3>

          <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
            Ang bawat grupo ay may kulay na nagpapahiwatig ng kahirapan:
          </p>

          <div className="flex flex-col gap-2">
            {DIFFICULTY_ORDER.map((color) => {
              const theme = GROUP_THEME[color];

              return (
                <div
                  key={color}
                  className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-sm)] border"
                  style={{
                    background: theme.bg,
                    borderColor: theme.accent,
                  }}
                >
                  <HiColorSwatch
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: theme.accent }}
                  />

                  <div>
                    <span
                      className="font-bold text-sm"
                      style={{ color: theme.accent }}
                    >
                      {theme.label}
                    </span>

                    <span className="text-xs text-[var(--text-muted)] ml-2">
                      ({color})
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <HiLightBulb className="w-5 h-5 text-[var(--green-primary)]" />
            Mga Payo
          </h3>

          <div className="p-5 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-secondary)]">
            <ul className="list-disc pl-5 text-sm text-[var(--text-secondary)] leading-loose">
              <li>
                Simulan sa mga salitang sigurado ka, ang{" "}
                <span className="text-[var(--group-yellow)]">dilaw</span> na
                grupo ang pinakamadali.
              </li>

              <li>
                Gamitin ang{" "}
                <span className="text-[var(--text-primary)] font-semibold">
                  I-shuffle
                </span>{" "}
                kung di na keri.
              </li>

              <li>
                May {MAX_ATTEMPTS} na pagkakataon ka lang, so isipin muna ng
                mabuti like mga 7 times bago isumite.
              </li>
            </ul>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-12 py-4 rounded-[var(--radius-md)] bg-[var(--green-primary)] text-[var(--text-inverse)] font-bold text-base no-underline transition-all hover:opacity-90"
          >
            <HiPlay className="w-5 h-5" />G Na!
          </Link>
        </div>
      </main>

      <footer className="border-t border-[var(--border-default)] p-4 text-center text-xs text-[var(--text-muted)]">
        {GAME_NAME} © {new Date().getFullYear()} — Tagline here
      </footer>
    </div>
  );
}
