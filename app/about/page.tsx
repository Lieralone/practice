"use client";

import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { GAME_NAME } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-pixel bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <header className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-5">
        <div className="max-w-[640px] mx-auto flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm font-semibold no-underline transition-all hover:border-[var(--green-primary)] hover:text-[var(--green-primary)]"
          >
            <HiArrowLeft className="w-4 h-4" />
            Bumalik
          </Link>

          <h1 className="text-xl font-bold text-[var(--green-primary)] m-0">About</h1>
        </div>
      </header>

      <main className="flex-1 max-w-[640px] w-full mx-auto px-4 py-8">
        <section className="space-y-6 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p className="text-[var(--text-primary)] text-lg font-bold">
            Mula sa simpleng ideya tungo sa kanunutan:
          </p>

          <p>
            Kami ang pangkat ‘Kanunutan’, mga estudyante ng Wika I Z taong 2026 na
            binubuo nina George Allen Donayre bilang punong tagagawa ng program ng
            laro, Glayvin Gabe Oragon bilang tagapag saliksik, Kian Marco Castro
            bilang tagapaglahad ng mga ideya, Kristan Norby Bugay bilang
            tagapagsaliksik, Lance Jacob Reyes bilang tagasulat ng pormal na papel
            at, Lysander Joseph Querijero bilang tagagawa ng program ng
            laro.
          </p>

          <p>
            Ang laro na aming binuo ay isang uri ng web-based word game kung saan
            nilalayon nitong linaning at hasain ang karunungan ng mga manlalaro sa iba
            pang mga katutubong wika sa Pilipinas. Kabilang sa mga espisipikong
            salita na kasama rito ay ang Tagalog, Kapampangan, at Pangasinense. Ang
            ninanais naming tagatanggap ng proyektong ito ay ang mga estudyante ng
            University of the Philippines Baguio, partikular na ang mga mag-aaral ng
            Wika I sa mga susunod na panahon.
          </p>

          <p>
            Ang larong ito ay isang simpleng paraan upang ang mga manlalaro ay
            magkaroon ng kaalaman sa mga salitang kalimitang ginagamit ng mga
            Pilipino sa kanilang pang-araw-araw na pakikipagtalastasan, partikular na
            sa larangang agham tulad ng biyolohiya, matematika, pisika, at computer
            science. Maaaring maturing na trivia ang mga halimbawa ng mga salitang
            kabilang sa larong ito at kung papalarin, nais naming magamit ang
            proyektong ito ng mga propesor ng nasabing unibersidad bilang midyum ng
            panturo sa ating mga katutubong wika upang mabigyang pahalaga ang
            proyektong aming ginawa at dinevelop sa pagkatuto ng mga mag-aaral ng
            Wika I. Inaasahang magagamit ang proyektong ito upang payabungin ang
            katatasan at pagtibayin ang ating pagmamahal sa ating wikang pambansa.
          </p>

          <p>
            Panghuli, bukas ang bawat miyembro ng pangkat Kanunutan sa mga
            katanungan at dagdag mungkahi upang higit pa naming mapabuti ang nilalaman
            ng aming proyekto.
          </p>

          <p className="font-semibold text-[var(--text-primary)]">
            Salamat! / Dakel ya Salamat!(pangasinan / Dakal a Salamat!(kapampangan)
          </p>
        </section>
      </main>

      <footer className="border-t border-[var(--border-default)] p-4 text-center text-xs text-[var(--text-muted)]">
        {GAME_NAME} © {new Date().getFullYear()} — Tagline here
      </footer>
    </div>
  );
}
