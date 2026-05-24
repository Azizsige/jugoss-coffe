// src/components/Menu.jsx
import { useState } from "react";
import { menus } from "../data";
import AOS from "aos"; // tambah import ini di atas

const CATEGORIES = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

const Badge = ({ badge }) => {
  if (!badge) return null;
  const styles =
    badge === "Best Seller"
      ? "bg-amber-100 text-amber-700"
      : "bg-green-100 text-green-700";
  return (
    <span
      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${styles}`}
    >
      {badge}
    </span>
  );
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeItem, setActiveItem] = useState(menus[0]);
  const [listVisible, setListVisible] = useState(true);
  const [imgVisible, setImgVisible] = useState(true);

  const filtered =
    activeCategory === "Semua"
      ? menus
      : menus.filter((m) => m.category === activeCategory);

  // Ganti kategori → fade out → reset → fade in
  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return;
    setListVisible(false);
    setTimeout(() => {
      setActiveCategory(cat);
      const newFiltered =
        cat === "Semua" ? menus : menus.filter((m) => m.category === cat);
      setActiveItem(newFiltered[0]);
      setListVisible(true);
      AOS.refresh(); // ← tambah ini
    }, 150);
  };

  // Hover / tap item → crossfade foto
  const handleItemHover = (item) => {
    if (item.id === activeItem?.id) return;
    setImgVisible(false);
    setTimeout(() => {
      setActiveItem(item);
      setImgVisible(true);
    }, 150);
  };

  return (
    <section id="menu" className="bg-cream py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10" data-aos="fade-up">
          <p className="text-[11px] tracking-widest text-roasted uppercase mb-2">
            Pilihan Kami
          </p>
          <h2 className="font-display text-4xl text-espresso leading-tight">
            Menu <em className="not-italic text-roasted">Jugoss</em>
          </h2>
          <p className="text-[14px] text-roasted/70 mt-2 max-w-md leading-relaxed">
            Kopi pilihan & hidangan terbaik untuk menemani hari-harimu.
          </p>
        </div>

        {/* Filter pills */}
        <div
          className="flex gap-2 flex-wrap mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`
                text-[11px] font-medium px-4 py-2 rounded-full
                transition-all duration-200 cursor-pointer
                ${
                  activeCategory === cat
                    ? "bg-espresso text-cream"
                    : "bg-white text-roasted/60 border border-latte/40 hover:border-latte hover:text-espresso"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Layout utama: list kiri + foto kanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kiri: daftar editorial */}
          <div
            className={`
              bg-white rounded-2xl border border-latte/30 overflow-hidden
              transition-all duration-150
              ${listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
          >
            {filtered.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => handleItemHover(item)}
                onClick={() => handleItemHover(item)}
                className={`
                  flex items-center justify-between gap-3 px-4 py-4 cursor-pointer
                  transition-all duration-200
                  ${index !== filtered.length - 1 ? "border-b border-latte/20" : ""}
                  ${
                    activeItem?.id === item.id
                      ? "border-l-2 border-l-espresso bg-milk pl-3.5"
                      : "opacity-60 hover:opacity-100 hover:bg-latte/10"
                  }
                `}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3
                      className={`text-[13px] transition-all duration-200 ${
                        activeItem?.id === item.id
                          ? "font-semibold text-espresso"
                          : "font-medium text-espresso/80"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <Badge badge={item.badge} />
                  </div>
                  <p className="text-[11px] text-roasted/60 leading-relaxed truncate">
                    {item.description}
                  </p>
                </div>
                <p className="text-[12px] font-semibold text-espresso flex-shrink-0">
                  {new Intl.NumberFormat("id-ID").format(item.price / 1000)}k
                </p>
              </div>
            ))}
          </div>

          {/* Kanan: foto + deskripsi aktif */}
          <div
            className="flex flex-col gap-4 md:sticky md:top-24 md:self-start"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            {/* Foto besar */}
            <div
              className={`
                relative rounded-2xl overflow-hidden aspect-[4/3]
                transition-all duration-150
                ${imgVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.99]"}
              `}
            >
              <img
                src={activeItem?.image_url}
                alt={activeItem?.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[11px] text-latte tracking-widest uppercase mb-1">
                      {activeItem?.category}
                    </p>
                    <h3 className="text-xl font-semibold text-cream leading-tight">
                      {activeItem?.name}
                    </h3>
                  </div>
                  <p className="text-lg font-bold text-cream">
                    {formatPrice(activeItem?.price)}
                  </p>
                </div>
              </div>
            </div>

            {/* Deskripsi lengkap */}
            <div
              className={`
                bg-white rounded-2xl border border-latte/30 p-5
                transition-all duration-150
                ${imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
              `}
            >
              <p className="text-[10px] tracking-widest text-roasted/50 uppercase mb-2">
                Tentang Menu Ini
              </p>
              <p className="text-[13px] text-roasted/80 leading-relaxed">
                {activeItem?.description}
              </p>
              {activeItem?.badge && (
                <div className="mt-3 pt-3 border-t border-latte/20">
                  <Badge badge={activeItem.badge} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
