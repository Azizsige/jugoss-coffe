// src/components/Location.jsx
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import storeInfo from "../data/storeInfo";

export default function Location() {
  return (
    <section id="location" className="bg-milk overflow-x-hidden">
      {/* Top divider tipis */}
      <div className="h-px bg-latte/40" />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:px-12">
        {/* Section label */}
        <p className="font-body text-roasted text-sm tracking-widest uppercase mb-3">
          Temukan Kami
        </p>

        {/* Heading asimetris — rata kiri, bukan center */}
        <h2
          className="font-display text-espresso text-4xl md:text-5xl font-semibold leading-tight mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Mampir Langsung,
          <br />
          <span className="italic font-normal">kopi terbaik menunggu.</span>
        </h2>

        {/* Grid: info kiri 45% | maps kanan 55% */}
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 md:gap-16 items-start">
          {/* ── KIRI: Info Kontak ── */}
          <div
            className="flex flex-col gap-8"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {/* Alamat */}
            <div className="flex gap-4 items-start">
              <span className="mt-1 p-2 rounded-full bg-cream border border-latte/50 text-roasted shrink-0">
                <MapPin size={16} />
              </span>
              <div>
                <p className="font-body text-xs text-roasted tracking-wide uppercase mb-1">
                  Alamat
                </p>
                <p className="font-body text-espresso text-base leading-relaxed">
                  {storeInfo.address}
                </p>
              </div>
            </div>

            {/* Telepon */}
            <div className="flex gap-4 items-start">
              <span className="mt-1 p-2 rounded-full bg-cream border border-latte/50 text-roasted shrink-0">
                <Phone size={16} />
              </span>
              <div>
                <p className="font-body text-xs text-roasted tracking-wide uppercase mb-1">
                  Telepon
                </p>
                <a
                  href={`tel:${storeInfo.phone}`}
                  className="font-body text-espresso text-base hover:text-roasted transition-colors"
                >
                  {storeInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <span className="mt-1 p-2 rounded-full bg-cream border border-latte/50 text-roasted shrink-0">
                <Mail size={16} />
              </span>
              <div>
                <p className="font-body text-xs text-roasted tracking-wide uppercase mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${storeInfo.email}`}
                  className="font-body text-espresso text-base hover:text-roasted transition-colors"
                >
                  {storeInfo.email}
                </a>
              </div>
            </div>

            {/* Jam Buka */}
            <div className="flex gap-4 items-start">
              <span className="mt-1 p-2 rounded-full bg-cream border border-latte/50 text-roasted shrink-0">
                <Clock size={16} />
              </span>
              <div>
                <p className="font-body text-xs text-roasted tracking-wide uppercase mb-1">
                  Jam Buka
                </p>
                <div className="flex flex-col gap-1">
                  {storeInfo.open_hours.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between gap-8 font-body text-espresso text-base"
                    >
                      <span>{item.day}</span>
                      <span className="text-roasted font-medium shrink-0">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-latte/40 w-3/4" />

            {/* Social Links */}
            <div className="flex gap-3 items-center">
              <p className="font-body text-xs text-roasted tracking-wide uppercase">
                Ikuti Kami
              </p>
              <a
                href={storeInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-cream border border-latte/50 text-roasted hover:bg-espresso hover:text-cream hover:border-espresso transition-all duration-200"
                aria-label="Instagram Jugoss Coffee"
              >
                {/* Instagram SVG inline — lucide tidak punya */}
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
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href={storeInfo.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-cream border border-latte/50 text-roasted hover:bg-espresso hover:text-cream hover:border-espresso transition-all duration-200"
                aria-label="TikTok Jugoss Coffee"
              >
                {/* TikTok SVG inline */}
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
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── KANAN: Google Maps ── */}
          <div
            className="w-full rounded-2xl overflow-hidden border border-latte/50 shadow-sm"
            style={{ aspectRatio: "4/3" }}
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <iframe
              src={storeInfo.maps_iframe_url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Jugoss Coffee"
            />
          </div>
        </div>
      </div>

      {/* Bottom spacing sebelum Footer */}
      <div className="h-8" />
    </section>
  );
}
