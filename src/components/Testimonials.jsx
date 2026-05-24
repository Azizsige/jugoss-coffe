// src/components/Testimonials.jsx
import ReactFastMarquee from "react-fast-marquee";
import { testimonials } from "../data";

const Marquee = ReactFastMarquee.default ?? ReactFastMarquee;
// Data tambahan: tanggal + menu yang dipesan (extend dari testimonials.js)
const extendedTestimonials = [
  {
    ...testimonials[0],
    date: "12 Mei 2025",
    menu: "☕ Cappuccino",
    pinColor: "#e74c3c",
  },
  {
    ...testimonials[1],
    date: "3 Jun 2025",
    menu: "🍵 Matcha Latte",
    pinColor: "#2980b9",
  },
  {
    ...testimonials[2],
    date: "28 Apr 2025",
    menu: "🧊 Cold Brew",
    pinColor: "#27ae60",
  },
  {
    ...testimonials[3],
    date: "17 Jul 2025",
    menu: "🥑 Avocado Toast",
    pinColor: "#8e44ad",
  },
  {
    ...testimonials[4],
    date: "5 Agu 2025",
    menu: "☕ V60 Pour Over",
    pinColor: "#e67e22",
  },
  {
    ...testimonials[5],
    date: "22 Agu 2025",
    menu: "🍌 Banana Cake",
    pinColor: "#c0392b",
  },
];

const ROW_1 = [
  ...extendedTestimonials,
  ...extendedTestimonials,
  ...extendedTestimonials,
  ...extendedTestimonials,
];
const ROW_2 = [
  ...extendedTestimonials,
  ...extendedTestimonials,
  ...extendedTestimonials,
  ...extendedTestimonials,
];

const NOTE_STYLES = [
  { bg: "#FAF7F2", rotate: "-2deg" },
  { bg: "#F5ECD7", rotate: "1.5deg" },
  { bg: "#FFFFFF", rotate: "-0.8deg" },
  { bg: "#F5ECD7", rotate: "2deg" },
  { bg: "#FAF7F2", rotate: "-1.2deg" },
  { bg: "#FFFFFF", rotate: "0.5deg" },
];

const StarRating = ({ rating }) => (
  <p
    style={{
      fontSize: "10px",
      color: "#D97706",
      letterSpacing: "1px",
      margin: 0,
    }}
  >
    {Array.from({ length: 5 }, (_, i) => (i < rating ? "★" : "☆")).join("")}
  </p>
);

const Pushpin = ({ color }) => (
  <div
    style={{
      position: "absolute",
      top: "-10px",
      right: "16px",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div
      style={{
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        background: `radial-gradient(circle at 35% 35%, ${color}, ${color}cc)`,
        boxShadow:
          "0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)",
      }}
    />
    <div
      style={{
        width: "2px",
        height: "8px",
        background: "linear-gradient(to bottom, #aaa, #666)",
        borderRadius: "0 0 2px 2px",
      }}
    />
  </div>
);

const NoteCard = ({ item, styleIndex }) => {
  const style = NOTE_STYLES[styleIndex % NOTE_STYLES.length];
  return (
    <div
      style={{
        position: "relative",
        width: "220px",
        flexShrink: 0,
        backgroundColor: style.bg,
        borderRadius: "4px",
        padding: "16px 14px 14px",
        transform: `rotate(${style.rotate})`,
        boxShadow: "2px 4px 12px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.2)",
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 22px, rgba(200,168,130,0.18) 22px, rgba(200,168,130,0.18) 23px)",
      }}
    >
      <Pushpin color={item.pinColor} />

      {/* Tanggal */}
      <p
        style={{
          fontSize: "9px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#7B4F2E",
          margin: "0 0 6px",
        }}
      >
        {item.date}
      </p>

      {/* Review */}
      <p
        style={{
          fontSize: "11.5px",
          color: "#3D2B1F",
          lineHeight: 1.65,
          fontStyle: "italic",
          fontFamily: "'Playfair Display', serif",
          margin: "0 0 10px",
        }}
      >
        "{item.review}"
      </p>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px dashed #C8A882",
          margin: "0 0 8px",
        }}
      />

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: "#3D2B1F",
              margin: 0,
            }}
          >
            {item.customer_name}
          </p>
          <p style={{ fontSize: "9px", color: "#7B4F2E", margin: "2px 0 0" }}>
            {item.menu}
          </p>
        </div>
        <StarRating rating={item.rating} />
      </div>
    </div>
  );
};

const MarqueeRow = ({ items, direction = "right", duration = 28 }) => {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: direction === "right" ? "20px" : "0",
      }}
    >
      {/* Fade edge kiri */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to right, #3D2B1F, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Fade edge kanan */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to left, #3D2B1F, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <Marquee
        direction={direction}
        speed={40}
        pauseOnHover={true}
        gradient={false}
        style={{ paddingBlock: "16px" }}
      >
        {items.map((item, index) => (
          <div key={`${item.id}-${index}`} style={{ marginRight: "20px" }}>
            <NoteCard item={item} styleIndex={index} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default function Testimonials() {
  return (
    <>
      {/* Inject keyframes */}
      <style>{`
        @keyframes scrollRight {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollLeft {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <section id="testimonials" className="bg-espresso py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12" data-aos="fade-up">
            <p className="text-[11px] tracking-widest text-latte uppercase mb-2">
              Kata Mereka
            </p>
            <h2 className="font-display text-4xl text-cream leading-tight">
              Cerita dari{" "}
              <em className="not-italic text-latte">Pelanggan Kami</em>
            </h2>
            <p className="text-[14px] text-cream/50 mt-2 max-w-md leading-relaxed">
              Lebih dari sekadar kopi — ini tentang momen yang mereka rasakan.
            </p>
          </div>
        </div>

        {/* Marquee — full width, di luar max-w container */}
        <MarqueeRow items={ROW_1} direction="right" duration="28s" />
        <MarqueeRow items={ROW_2} direction="left" duration="32s" />
      </section>
    </>
  );
}
