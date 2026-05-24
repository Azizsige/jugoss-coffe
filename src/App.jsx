// src/App.jsx
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <Helmet>
        {/* Primary */}
        <title>Jugoss Coffee — Specialty Coffee di Surabaya</title>
        <meta
          name="description"
          content="Jugoss Coffee, kedai kopi specialty di Surabaya. Nikmati espresso, manual brew, dan pastry homemade dalam suasana yang hangat dan nyaman."
        />
        <meta
          name="keywords"
          content="kopi surabaya, specialty coffee, kedai kopi, jugoss coffee, coffee shop surabaya"
        />
        <link rel="canonical" href="https://jugosscoffee.id" />

        {/* Open Graph — buat preview di WhatsApp, Facebook, dll */}
        <meta property="og:type" content="restaurant" />
        <meta
          property="og:title"
          content="Jugoss Coffee — Specialty Coffee di Surabaya"
        />
        <meta
          property="og:description"
          content="Kedai kopi specialty di Surabaya dengan suasana hangat. Espresso, manual brew, dan pastry homemade."
        />
        <meta property="og:url" content="https://jugosscoffee.id" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"
        />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Jugoss Coffee" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jugoss Coffee — Specialty Coffee di Surabaya"
        />
        <meta
          name="twitter:description"
          content="Kedai kopi specialty di Surabaya dengan suasana hangat. Espresso, manual brew, dan pastry homemade."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"
        />

        {/* Local Business Schema — boost Google local search */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            name: "Jugoss Coffee",
            description:
              "Kedai kopi specialty di Surabaya dengan suasana hangat dan nyaman.",
            url: "https://jugosscoffee.id",
            telephone: "+62812-3456-7890",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jl. Raya Darmo No. 42",
              addressLocality: "Surabaya",
              addressRegion: "Jawa Timur",
              postalCode: "60241",
              addressCountry: "ID",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "07:00",
                closes: "22:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "08:00",
                closes: "23:00",
              },
            ],
            servesCuisine: "Coffee, Pastry",
            priceRange: "Rp 25.000 – Rp 65.000",
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
