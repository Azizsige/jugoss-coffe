import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-milk flex items-center pt-20 pb-16 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* ── KOLOM KIRI: Teks ── */}
          <div className="flex flex-col gap-6">
            {/* Label atas + garis latte */}
            <div
              className="flex items-center gap-3"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <span className="w-[3px] h-9 bg-latte rounded-full block" />
              <span className="text-roasted text-xs tracking-widest uppercase font-medium font-body">
                Specialty Coffee · Est. 2020
              </span>
            </div>

            {/* H1 + Tagline */}
            <div data-aos="fade-right" data-aos-delay="100">
              <h1
                className="font-display text-espresso font-semibold leading-tight mb-3"
                style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
              >
                Setiap Tegukan,
                <br />
                Sebuah Cerita
              </h1>
              <p
                className="font-display italic text-roasted"
                style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
              >
                Dari biji pilihan, untuk momen yang tak terlupakan.
              </p>
            </div>

            {/* Body copy */}
            <p
              className="font-body text-base text-espresso/70 leading-relaxed max-w-md"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Jugoss Coffee hadir dengan racikan kopi spesialti yang autentik,
              suasana nyaman, dan pelayanan hangat — tempat di mana setiap
              kunjungan terasa seperti rumah.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex items-center gap-4 flex-wrap"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-espresso text-milk font-body font-medium px-6 py-3 rounded-lg hover:-translate-y-1 transition-transform duration-200"
              >
                Lihat Menu
                <span className="text-latte">→</span>
              </a>
              <a
                href="#location"
                className="inline-flex items-center gap-2 border border-espresso text-espresso font-body font-medium px-6 py-3 rounded-lg hover:-translate-y-1 transition-transform duration-200"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Stats Row */}
            <div
              className="flex items-center gap-6 pt-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <p className="font-body font-semibold text-espresso text-xl">
                  50+
                </p>
                <p className="font-body text-roasted text-xs tracking-wide uppercase">
                  Menu Pilihan
                </p>
              </div>
              <div className="w-px h-8 bg-latte" />
              <div>
                <p className="font-body font-semibold text-espresso text-xl">
                  1000+
                </p>
                <p className="font-body text-roasted text-xs tracking-wide uppercase">
                  Pelanggan Happy
                </p>
              </div>
              <div className="w-px h-8 bg-latte" />
              <div>
                <p className="font-body font-semibold text-espresso text-xl">
                  4.9★
                </p>
                <p className="font-body text-roasted text-xs tracking-wide uppercase">
                  Rating Google
                </p>
              </div>
            </div>
          </div>

          {/* ── KOLOM KANAN: Foto + Floating Badge ── */}
          <div
            className="relative pb-6 pr-6 lg:pb-8 lg:pr-8"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Suasana Jugoss Coffee"
                className="w-full h-full object-cover"
              />
              {/* Overlay tipis biar teks badge kontras */}
              <div className="absolute inset-0 bg-espresso/10" />
            </div>

            {/* Floating Badge — Jam Buka */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-5 lg:-right-5 bg-espresso text-milk rounded-xl px-4 py-3 shadow-none border-4 border-milk min-w-[130px]">
              <p className="font-body text-latte text-[11px] tracking-wide uppercase mb-1">
                Buka Sekarang
              </p>
              <p className="font-body font-medium text-sm text-milk">
                08:00 – 22:00 WIB
              </p>
            </div>

            {/* Dekorasi circle kecil kiri atas */}
            <div className="absolute top-2 left-2 w-14 h-14 rounded-full border-2 border-latte/50 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
