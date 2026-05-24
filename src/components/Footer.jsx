// src/components/Footer.jsx
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top Grid — asimetris 3 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 pb-12 border-b border-latte/20">
          {/* Kolom 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-display text-3xl font-semibold tracking-tight">
                Jugoss
              </span>

              <span className="block text-[11px] font-body text-latte tracking-[0.2em] uppercase mt-0.5">
                Coffee
              </span>
            </div>

            <p className="font-body text-sm text-cream/60 leading-relaxed max-w-xs">
              Tempat ngopi yang nyaman dengan biji kopi pilihan, diseduh dengan
              penuh keahlian untuk setiap cangkir yang sempurna.
            </p>

            {/* Sosial */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-body text-latte hover:text-cream transition-colors duration-200 w-fit"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              @jugoss.coffee
            </a>
          </div>

          {/* Kolom 2 — Navigasi */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-latte">
              Navigasi
            </h4>

            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Gallery", href: "#gallery" },
                { label: "Testimoni", href: "#testimoni" },
                { label: "Lokasi", href: "#lokasi" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 — Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-latte">
              Info
            </h4>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-latte mt-0.5 shrink-0" />

                <span className="font-body text-sm text-cream/60 leading-relaxed">
                  Jl. Kopi No. 1,
                  <br />
                  Surabaya, Jawa Timur
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-latte shrink-0" />

                <span className="font-body text-sm text-cream/60">
                  +62 812-3456-7890
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock size={15} className="text-latte mt-0.5 shrink-0" />

                <span className="font-body text-sm text-cream/60 leading-relaxed">
                  Senin – Minggu
                  <br />
                  08.00 – 22.00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom — Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-cream/30">
            © {new Date().getFullYear()} Jugoss Coffee. All rights reserved.
          </p>

          <p className="font-body text-xs text-cream/30">
            Made with ☕ in Surabaya
          </p>
        </div>
      </div>
    </footer>
  );
}
