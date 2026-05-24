import { useState, useCallback } from "react";

// ─── Data galleries (nanti ganti dengan import dari src/data/galleries.js) ───
const GALLERY_ITEMS = [
  {
    id: 1,
    image_url:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    alt_text: "Pour over coffee sedang diseduh",
    caption: "The Pour",
    description:
      "Ritual pagi yang nggak bisa dilewatkan. Satu tetes, satu momen.",
  },
  {
    id: 2,
    image_url:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    alt_text: "Interior Jugoss Coffee yang cozy",
    caption: "The Corner",
    description: "Sudut favorit pelanggan setia kami sejak hari pertama buka.",
  },
  {
    id: 3,
    image_url:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    alt_text: "Latte art di atas cappuccino",
    caption: "Latte Art",
    description: "Setiap cangkir adalah kanvas kecil barista kami.",
  },
  {
    id: 4,
    image_url:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    alt_text: "Meja dan kursi kayu di kafe",
    caption: "The Table",
    description: "Banyak cerita lahir di meja-meja kayu ini.",
  },
  {
    id: 5,
    image_url:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
    alt_text: "Biji kopi specialty premium",
    caption: "Origin Beans",
    description:
      "Single origin Flores & Aceh — dipilih langsung dari petaninya.",
  },
  {
    id: 6,
    image_url:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    alt_text: "Espresso shot dituang ke gelas",
    caption: "The Shot",
    description: "27 detik. Tekanan 9 bar. Hasilnya nggak pernah bohong.",
  },
  {
    id: 7,
    image_url:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",
    alt_text: "Barista sedang meracik kopi",
    caption: "The Craft",
    description: "Tangan yang sama, konsistensi yang dijaga tiap hari.",
  },
  {
    id: 8,
    image_url:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80",
    alt_text: "Suasana kafe di malam hari",
    caption: "Night Shift",
    description:
      "Malam di Jugoss punya vibe tersendiri — tenang, hangat, jujur.",
  },
];

// ─── Rotasi polaroid per foto — statis biar nggak re-render ───
const ROTATIONS = [-2.5, 1.5, -1, 2, -1.5, 1, -2, 2.5];

// ─── Helper: susun foto ke 3 kolom masonry ───
function splitToColumns(items, cols = 3) {
  const columns = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => columns[i % cols].push({ ...item, colIndex: i }));
  return columns;
}

// ─── Polaroid Card ───
function PolaroidCard({ item, index, onFocus, isFocusMode }) {
  const rotation = ROTATIONS[index % ROTATIONS.length];

  return (
    <button
      onClick={() => onFocus(index)}
      className="group relative w-full text-left cursor-pointer"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) translateY(-6px)";
        e.currentTarget.style.zIndex = "10";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}deg)`;
        e.currentTarget.style.zIndex = "1";
      }}
      aria-label={`Fokus ke foto: ${item.caption}`}
    >
      <div
        className="bg-milk border border-latte"
        style={{
          padding: "8px 8px 28px",
          borderRadius: "2px",
          opacity: isFocusMode ? 0.25 : 1,
          transition: "opacity 0.4s ease",
          pointerEvents: isFocusMode ? "none" : "auto",
        }}
      >
        <div className="overflow-hidden" style={{ borderRadius: "1px" }}>
          <img
            src={item.image_url}
            alt={item.alt_text}
            className="w-full object-cover"
            style={{ height: "120px", display: "block" }}
            loading="lazy"
          />
        </div>
        <p
          className="text-espresso mt-2 text-center"
          style={{
            fontSize: "11px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          {item.caption}
        </p>
      </div>
    </button>
  );
}

// ─── Stack Deck (focus mode) ───
function StackDeck({ items, activeIndex, onNext, onPrev, totalCount }) {
  const visibleCount = Math.min(3, items.length - activeIndex);
  const stackRotations = [0, -3, 5];

  return (
    <div className="relative" style={{ height: "260px" }}>
      {Array.from({ length: visibleCount })
        .map((_, i) => visibleCount - 1 - i)
        .map((layerIndex) => {
          const itemIndex = activeIndex + layerIndex;
          if (itemIndex >= items.length) return null;
          const item = items[itemIndex];
          const isActive = layerIndex === 0;
          const rot = stackRotations[layerIndex] || 0;
          const offset = layerIndex * 10;

          return (
            <div
              key={item.id}
              className="absolute bg-milk border border-latte"
              style={{
                left: `${offset}px`,
                top: `${offset * 0.5}px`,
                right: `${offset}px`,
                bottom: 0,
                padding: "10px 10px 32px",
                borderRadius: "2px",
                transform: `rotate(${rot}deg)`,
                transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                zIndex: visibleCount - layerIndex,
                opacity: isActive ? 1 : 0.6 + layerIndex * 0.1,
              }}
            >
              {isActive && (
                <>
                  <img
                    src={item.image_url}
                    alt={item.alt_text}
                    className="w-full object-cover"
                    style={{ height: "160px", borderRadius: "1px" }}
                  />

                  {/* ── Prev Button ── */}
                  {activeIndex > 0 && (
                    <button
                      onClick={onPrev}
                      aria-label="Foto sebelumnya"
                      style={{
                        position: "absolute",
                        bottom: "36px",
                        left: "10px",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(245,236,215,0.92)",
                        border: "0.5px solid #C8A882",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "transform 0.2s ease, background 0.2s ease",
                        zIndex: 10,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.background = "#F5ECD7";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background =
                          "rgba(245,236,215,0.92)";
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M9 2L4 7l5 5"
                          stroke="#3D2B1F"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}

                  {/* ── Next Button ── */}
                  <button
                    onClick={onNext}
                    aria-label="Foto berikutnya"
                    style={{
                      position: "absolute",
                      bottom: "36px",
                      right: "10px",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#3D2B1F",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "transform 0.2s ease, background 0.2s ease",
                      zIndex: 10,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.background = "#7B4F2E";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.background = "#3D2B1F";
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M5 2l5 5-5 5"
                        stroke="#F5ECD7"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
}

// ─── MAIN COMPONENT ───
export default function Gallery() {
  const [focusIndex, setFocusIndex] = useState(null); // null = board mode
  const [stackIndex, setStackIndex] = useState(0); // index foto aktif di stack

  const isFocusMode = focusIndex !== null;
  const columns = splitToColumns(GALLERY_ITEMS, 3);

  const handleFocus = useCallback((globalIndex) => {
    setFocusIndex(globalIndex);
    setStackIndex(globalIndex);
  }, []);

  const handleNext = useCallback(() => {
    const next = stackIndex + 1;
    if (next >= GALLERY_ITEMS.length) {
      // Loop balik ke awal
      setStackIndex(0);
    } else {
      setStackIndex(next);
    }
  }, [stackIndex]);

  const handlePrev = useCallback(() => {
    const prev = stackIndex - 1;
    if (prev < 0) {
      setStackIndex(GALLERY_ITEMS.length - 1);
    } else {
      setStackIndex(prev);
    }
  }, [stackIndex]);

  const handleClose = useCallback(() => {
    setFocusIndex(null);
    setStackIndex(0);
  }, []);

  const activeItem = isFocusMode ? GALLERY_ITEMS[stackIndex] : null;
  const dotCount = Math.min(8, GALLERY_ITEMS.length);

  return (
    <section
      id="gallery"
      className="bg-cream"
      style={{ paddingTop: "96px", paddingBottom: "80px" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* ── Header ── */}
        <div
          className="flex justify-between items-end mb-14"
          data-aos="fade-up"
        >
          <div>
            <p
              className="text-roasted uppercase mb-2"
              style={{
                fontSize: "12px",
                letterSpacing: "0.12em",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Our Space
            </p>
            <h2
              className="text-espresso"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 500,
                lineHeight: 1.2,
                fontStyle: "italic",
              }}
            >
              The Jugoss Story
            </h2>
          </div>
          {!isFocusMode && (
            <p
              className="text-latte hidden md:block"
              style={{
                fontSize: "12px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              tap a photo to focus →
            </p>
          )}
        </div>

        {/* ── Layout: Board + Focus Panel ── */}
        <div className="relative">
          {/* ── Masonry Board ── */}
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            {columns.map((col, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-col gap-4"
                style={{
                  paddingTop:
                    colIdx === 1 ? "20px" : colIdx === 2 ? "10px" : "0px",
                }}
              >
                {col.map((item) => (
                  <PolaroidCard
                    key={item.id}
                    item={item}
                    index={item.colIndex}
                    onFocus={handleFocus}
                    isFocusMode={isFocusMode}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* ── Focus Mode Overlay Panel ── */}
          {isFocusMode && activeItem && (
            <div
              className="fixed inset-0 flex items-center justify-center"
              style={{ zIndex: 50, padding: "20px" }}
            >
              {/* Backdrop — klik di luar untuk close */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(61,43,31,0.35)" }}
                onClick={handleClose}
              />

              {/* Panel card */}
              <div
                className="relative w-full max-w-2xl grid gap-8 items-center"
                style={{
                  gridTemplateColumns: "3fr 2fr",
                  padding: "24px",
                  background: "rgba(245,236,215,0.97)",
                  borderRadius: "4px",
                  border: "0.5px solid #C8A882",
                }}
              >
                {/* Stack Deck */}
                <StackDeck
                  items={GALLERY_ITEMS}
                  activeIndex={stackIndex}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  totalCount={GALLERY_ITEMS.length}
                />

                {/* Info Panel */}
                <div className="flex flex-col gap-4">
                  <div>
                    <p
                      className="text-roasted uppercase mb-1"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {activeItem.caption}
                    </p>
                    <p
                      className="text-espresso"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {activeItem.description}
                    </p>
                  </div>

                  {/* Dot counter */}
                  <div className="flex gap-1 flex-wrap">
                    {GALLERY_ITEMS.slice(0, dotCount).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setStackIndex(i)}
                        className="rounded-full transition-all"
                        style={{
                          width: i === stackIndex ? "20px" : "7px",
                          height: "7px",
                          background: i === stackIndex ? "#3D2B1F" : "#C8A882",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                        }}
                        aria-label={`Foto ke-${i + 1}`}
                      />
                    ))}
                  </div>

                  <p
                    className="text-latte"
                    style={{
                      fontSize: "11px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {stackIndex + 1} / {GALLERY_ITEMS.length} foto
                  </p>

                  <div style={{ height: "0.5px", background: "#C8A882" }} />

                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="flex items-center gap-2 text-roasted"
                    style={{
                      fontSize: "12px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      background: "none",
                      border: "0.5px solid #C8A882",
                      borderRadius: "3px",
                      padding: "6px 12px",
                      cursor: "pointer",
                      width: "fit-content",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(200,168,130,0.15)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "none")
                    }
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M1 1l10 10M11 1L1 11"
                        stroke="#7B4F2E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    tutup fokus
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
