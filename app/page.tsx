"use client";
import { useState } from "react";

const NAV_LINKS = [
  "NEW IN",
  "SUITS",
  "BLAZERS",
  "SHIRTS",
  "TROUSERS",
  "CASUAL",
  "SHOES",
  "ACCESSORIES",
];

const SUIT_IMAGES = [
  {
    id: 1,
    alt: "Grant Stone - Front View",
    src: "/images/Grant_Stone_Pinstripe_Suit_Front.webp",
  },
  {
    id: 2,
    alt: "Grant Stone - Full Length",
    src: "/images/Grant_Stone_Pinstripe_Suit_Front_1.webp",
  },
  {
    id: 3,
    alt: "Grant Stone - Side View",
    src: "/images/Grant_Stone_Pinstripe_Suit_Back_2.webp",
  },
  {
    id: 4,
    alt: "Grant Stone - Back View",
    src: "/images/Grant_Stone_Pinstripe_Blazer_Front_2.webp",
  },
  {
    id: 5,
    alt: "Grant Stone - Waistcoat Detail",
    src: "/images/Grant_Stone_Pinstripe_Waistcoat_Front.webp",
  },
  {
    id: 6,
    alt: "Grant Stone - Trouser Detail",
    src: "/images/Grant_Stone_Pinstripe_Waistcoat_Back.webp",
  },
  {
    id: 7,
    alt: "Grant Stone - Accessory Shot",
    src: "/images/Grant_Stone_Pinstripe_Trousers.webp",
  },
];

const BLAZER_SIZES = ["34R", "36R", "38R", "40R", "42R", "44R", "46R"];
const WAISTCOAT_SIZES = ["34R", "36R", "38R", "40R", "42R", "44R", "46R"];
const TROUSER_SIZES = ["28R", "30R", "32R", "34R", "36R", "38R"];

const RELATED = [
  { name: "Suit Bag", price: "£5.00", src: "/images/SuitBag1.webp" },
  {
    name: "HMS - Stone Tailored Trousers",
    price: "£72.50",
    src: "/images/180A8834.webp",
  },
  {
    name: "MD Paisley - Tie & Pocket Square Set",
    price: "£24.99",
    src: "/images/MC-TIES-ECOM-80_2e622cf6-91db-4dc0-be63-f11a8ca44c53.webp",
  },
  {
    name: "Ribbed Relaxed Co-Ord Set",
    price: "£49.99",
    src: "/images/50126.webp",
  },
  {
    name: "HMS - Stone Tailored Blazer",
    price: "£174.99",
    src: "/images/180A8818.jpg",
  },
];

const ACCORDION_ITEMS = [
  "Description",
  "Product Code",
  "Shipping Information",
  "Returns",
  "FAQs",
];

const FOOTER_LINKS = {
  "Quick Links": ["Returns", "Shipping Policy", "GET 10% OFF"],
  "About Us & More": [
    "About Us",
    "Contact Us",
    "Size Guide",
    "Discount & Promo Codes",
    "Become an Affiliate",
  ],
  Information: ["Terms of Service", "Klarna", "Privacy Policy", "Careers"],
};

export default function GrantStonePage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [blazerSize, setBlazerSize] = useState("34R");
  const [waistcoatSize, setWaistcoatSize] = useState("34R");
  const [trouserSize, setTrouserSize] = useState("28R");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [suitMenuOpen, setSuitMenuOpen] = useState(false);

  const SUIT_SUBMENU = {
    SUITS: [
      "3 Piece Suits",
      "2 Piece Suits",
      "Tuxedos",
      "Waistcoats",
      "Suits Under £200",
      "Boys Suits",
      "Suit Bag",
    ],
    STYLE: [
      "Checked Suits",
      "Double Breasted Suits",
      "Tweed Suits",
      "Linen Suits",
    ],
    COLOUR: [
      "Black Suits",
      "Navy & Blue Suits",
      "Grey Suits",
      "Beige Suits",
      "Green Suits",
      "Brown Suits",
    ],
    BRANDS: ["Marc Darcy", "Cavani", "Milano Couture"],
    OCCASIONS: [
      "Wedding Suits",
      "Groom Suits",
      "Dinner Suits",
      "Prom Suits",
      "Race Day Suits",
      "Father & Son Suits",
    ],
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* TOP BANNER */}
      <div className="bg-black text-white text-center text-xs py-2 tracking-widest">
        FREE UK DELIVERY ON ORDERS OVER £100
      </div>

      {/* NAVBAR */}
      <nav className="border-b border-gray-200 px-6 py-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-1 md:text-center">
            <span className="text-xl font-bold tracking-[0.3em] text-black">
              MILANO COUTURE
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs tracking-widest flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <div key={link} className="relative group">
                <button
                  className={`hover:text-gray-500 transition-colors ${link === "SALE" ? "text-red-600" : "text-black"}`}
                  onMouseEnter={() => link === "SUITS" && setSuitMenuOpen(true)}
                  onMouseLeave={() =>
                    link === "SUITS" && setSuitMenuOpen(false)
                  }
                >
                  {link}
                </button>
                {link === "SUITS" && suitMenuOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-xl p-8 z-50 w-[700px] grid grid-cols-5 gap-6"
                    onMouseEnter={() => setSuitMenuOpen(true)}
                    onMouseLeave={() => setSuitMenuOpen(false)}
                  >
                    {Object.entries(SUIT_SUBMENU).map(([cat, items]) => (
                      <div key={cat}>
                        <p className="font-bold text-xs tracking-widest mb-3 text-black">
                          {cat}
                        </p>
                        {items.map((item) => (
                          <p
                            key={item}
                            className="text-xs text-gray-600 hover:text-black cursor-pointer mb-2 leading-relaxed"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hover:opacity-60 transition-opacity">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 z-50 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <p
                key={link}
                className={`py-2 text-sm tracking-widest border-b border-gray-100 ${link === "SALE" ? "text-red-600" : "text-black"}`}
              >
                {link}
              </p>
            ))}
          </div>
        )}
      </nav>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-3 text-xs text-gray-400 tracking-wide">
        Home / Suits / Three Piece Suits / Grant Stone Pinstripe Three Piece
        Suit
      </div>

      {/* MAIN PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — Image Gallery */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-20 flex-shrink-0">
              {SUIT_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 bg-gray-100 border-2 transition-all flex items-center justify-center ${
                    selectedImage === idx
                      ? "border-black"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex-1 relative">
              <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <img
                  src={SUIT_IMAGES[selectedImage].src}
                  alt={SUIT_IMAGES[selectedImage].alt}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() =>
                    setSelectedImage(
                      (prev) =>
                        (prev - 1 + SUIT_IMAGES.length) % SUIT_IMAGES.length,
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow flex items-center justify-center hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setSelectedImage((prev) => (prev + 1) % SUIT_IMAGES.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow flex items-center justify-center hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT — Product Info */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-black mb-1">
              Marc Darcy
            </p>
            <h1 className="text-xl font-bold tracking-wide text-black mb-3 uppercase">
              Grant Stone Pinstripe Three Piece Suit
            </h1>
            <p className="text-2xl font-bold text-black mb-5">£319.99</p>

            <button className="w-full bg-black text-white text-xs tracking-widest py-3 mb-6 hover:bg-gray-800 transition-colors">
              GET 10% OFF WHEN YOU SIGN UP
            </button>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs text-gray-500 tracking-wide mb-1">
                  Grant - Stone Pinstripe Blazer (Size)
                </label>
                <select
                  value={blazerSize}
                  onChange={(e) => setBlazerSize(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-black focus:outline-none focus:border-black bg-white"
                >
                  {BLAZER_SIZES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 tracking-wide mb-1">
                  Grant - Stone Double Breasted Pinstripe Waistcoat (Size)
                </label>
                <select
                  value={waistcoatSize}
                  onChange={(e) => setWaistcoatSize(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-black focus:outline-none focus:border-black bg-white"
                >
                  {WAISTCOAT_SIZES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 tracking-wide mb-1">
                  Grant - Stone Pinstripe Trousers (Size)
                </label>
                <select
                  value={trouserSize}
                  onChange={(e) => setTrouserSize(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-black focus:outline-none focus:border-black bg-white"
                >
                  {TROUSER_SIZES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="flex items-center border border-gray-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-black hover:bg-gray-100 transition-colors text-lg"
                >
                  −
                </button>
                <span className="px-4 py-2 text-sm text-black min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-black hover:bg-gray-100 transition-colors text-lg"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-black text-white text-xs tracking-widest py-3 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                ADD TO CART
              </button>
            </div>

            <button className="w-full bg-indigo-600 text-white text-sm py-3 mb-2 hover:bg-indigo-700 transition-colors font-medium">
              Buy with <span className="font-bold">shop</span>
            </button>
            <p className="text-center text-xs text-gray-400 underline cursor-pointer mb-6">
              More payment options
            </p>

            <div className="flex gap-2 flex-wrap mb-6">
              {["Klarna", "Mastercard", "Maestro", "Visa"].map((p) => (
                <div
                  key={p}
                  className="border border-gray-200 rounded px-2 py-1 text-xs text-gray-500"
                >
                  {p}
                </div>
              ))}
            </div>

            {/* VIRTUAL TRY-ON PLACEHOLDER */}
            <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center bg-gray-50 mb-6">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-bold tracking-widest text-black uppercase mb-1">
                Virtual Try-On
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Upload your photo and see how this suit looks on you
              </p>
              <div className="bg-black text-white text-xs tracking-widest py-2 px-6 inline-block opacity-50">
                COMING SOON — V3.0
              </div>
            </div>

            <p className="text-xs font-bold tracking-widest text-black mb-3">
              YOU MAY ALSO LIKE
            </p>
            <div className="flex gap-3">
              <img
                src="/images/SuitBag1.webp"
                alt="Suit Bag"
                className="w-16 h-20 object-cover"
              />
              <div>
                <p className="text-xs text-gray-600">Suit Bag</p>
                <p className="text-xs font-bold text-red-600">£5.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACCORDION */}
        <div className="mt-16 border-t border-gray-200">
          {ACCORDION_ITEMS.map((item) => (
            <div key={item} className="border-b border-gray-200">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === item ? null : item)
                }
                className="w-full flex items-center justify-between py-4 text-sm text-black tracking-wide hover:text-gray-500 transition-colors"
              >
                {item}
                <svg
                  className={`w-4 h-4 transition-transform ${openAccordion === item ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openAccordion === item && (
                <div className="pb-4 text-sm text-gray-500">
                  {item === "Description" ? (
                    <p>
                      The Grant Stone Pinstripe Three Piece Suit by Marc Darcy
                      is a sophisticated take on classic tailoring. Featuring a
                      stone pinstripe blazer, double breasted waistcoat, and
                      matching trousers — perfect for weddings, proms, and
                      formal occasions.
                    </p>
                  ) : (
                    <p className="text-gray-400 italic">
                      [{item} content placeholder]
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RELATED ITEMS */}
        <div className="mt-16">
          <h2 className="text-sm font-bold tracking-widest text-black mb-6">
            RELATED ITEMS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {RELATED.map((item) => (
              <div key={item.name} className="group cursor-pointer">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full aspect-[3/4] object-cover mb-3"
                />
                <p className="text-xs text-gray-700 mb-1 leading-snug">
                  {item.name}
                </p>
                <p className="text-xs font-bold text-black">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section}>
                <p className="text-xs font-bold tracking-widest text-black mb-4">
                  {section}
                </p>
                {links.map((link) => (
                  <p
                    key={link}
                    className="text-xs text-gray-500 hover:text-black cursor-pointer mb-2"
                  >
                    {link}
                  </p>
                ))}
              </div>
            ))}
            <div>
              <p className="text-xs font-bold tracking-widest text-black mb-4">
                FOLLOW US
              </p>
              <div className="flex gap-3">
                {["F", "I", "T"].map((s) => (
                  <div
                    key={s}
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:bg-gray-700 transition-colors"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              © 2025 Milano Couture. All rights reserved.
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
              {[
                "Amex",
                "Apple Pay",
                "Discover",
                "Google Pay",
                "Klarna",
                "Maestro",
                "Mastercard",
                "Shop Pay",
                "Visa",
              ].map((p) => (
                <div
                  key={p}
                  className="border border-gray-200 rounded px-2 py-1 text-xs text-gray-400 bg-white"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
