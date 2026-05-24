import { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const highlights = [
    {
      title: "Biji Kopi Pilihan",
      desc: "Single origin dari petani lokal Nusantara yang dipetik dengan penuh cinta.",
    },
    {
      title: "Barista Berpengalaman",
      desc: "Terlatih & bersertifikat SCAI — setiap cangkir dibuat dengan presisi.",
    },
    {
      title: "Suasana Cozy",
      desc: "Tempat ideal buat kerja, ngobrol santai, atau sekadar me-time.",
    },
  ];

  return (
    <section id="about" className="bg-cream py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-20 items-center">
          {/* ── KOLOM KIRI: Foto ── */}
          <div
            className="relative pb-8 pr-8 lg:pb-10 lg:pr-10"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            {/* Badge "Berdiri Sejak" */}
            <div className="absolute top-4 -left-3 z-10 bg-espresso rounded-xl px-4 py-3 border-4 border-cream">
              <p className="font-body text-latte text-[10px] tracking-widest uppercase mb-0.5">
                Berdiri sejak
              </p>
              <p className="font-body font-semibold text-milk text-lg leading-none">
                2020
              </p>
            </div>

            {/* Foto utama */}
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80"
                alt="Suasana dalam Jugoss Coffee"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foto kecil floating overlap */}
            <div className="absolute bottom-0 right-0 w-32 h-32 lg:w-36 lg:h-36 rounded-xl overflow-hidden border-4 border-cream shadow-none">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80"
                alt="Detail kopi Jugoss"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ── KOLOM KANAN: Teks ── */}
          <div className="flex flex-col gap-6">
            {/* Label kecil */}
            <span
              className="font-body text-roasted text-xs tracking-widest uppercase font-medium"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              Tentang Kami
            </span>

            {/* H2 */}
            <h2
              className="font-display text-espresso font-medium leading-snug"
              style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Lebih dari Sekadar
              <br />
              Secangkir Kopi
            </h2>

            {/* Body copy */}
            <p
              className="font-body text-base text-espresso/70 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Jugoss Coffee lahir dari kecintaan mendalam terhadap kopi
              Nusantara. Kami percaya bahwa secangkir kopi yang baik bukan hanya
              soal rasa — tapi juga tentang cerita di balik setiap biji,
              kehangatan yang kami suguhkan, dan momen yang tercipta bersama
              orang-orang tersayang.
            </p>

            {/* Divider */}
            <div
              className="w-2/5 h-px bg-latte/50"
              data-aos="fade-left"
              data-aos-delay="250"
            />

            {/* Highlight poin */}
            <div
              className="flex flex-col gap-5"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-latte mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-body font-medium text-espresso text-[15px] leading-snug">
                      {item.title}
                    </p>
                    <p className="font-body text-sm text-espresso/60 leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA underline */}
            <div data-aos="fade-left" data-aos-delay="400">
              <a
                href="#location"
                className="inline-flex items-center gap-2 font-body font-medium text-espresso text-sm border-b border-espresso pb-0.5 hover:text-roasted hover:border-roasted transition-colors duration-200"
              >
                Lihat Lokasi Kami
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
