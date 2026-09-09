"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const HEADER_BG = "bg-[#4E9A73]";
const YELLO_BG = "bg-[#E8B931]";
const YELLO_TEXT = "text-[#E8B931]";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  {
    name: "Profil",
    href: "/prifil",
    subItems: [
      { name: "Sejarah Dusun", href: "/prifil#sejarah" },
      { name: "Visi Dusun", href: "/prifil#visi" },
      { name: "Misi Dusun", href: "/prifil#misi" },
      { name: "Kepengurusan", href: "/prifil#kepengurusan" },
      { name: "Kelompok Masyarakat", href: "/prifil#ormas" },
      { name: "Administrasi Penduduk", href: "/prifil#administrasi" },
      { name: "Potensi Wisata", href: "/prifil#potensi" },
    ],
  },
  { name: "Berita", href: "/berutu" },
  { name: "Maps", href: "/gugelmap" },
  { name: "Inventaris", 
    href: "/invensi",
    subItems: [
      { name: "Total Barang", href: "/invensi#total" },
      { name: "RT 01", href: "/invensi#rt-01" },
      { name: "RT 02", href: "/invensi#rt-02" },
      { name: "RT 03", href: "/invensi#rt-03" },
      { name: "RT 04", href: "/invensi#rt-04" },
      { name: "RT 05", href: "/invensi#rt-05" },
      { name: "RT 06", href: "/invensi#rt-06" },
    ]
  },
  { name: "Galeri", href: "/galer" },
  { name: "Kontak", isAction: true, actionType: "contact" },
];

const SOCIAL_LINKS = [
  { href: "https://wa.me/6282249906357", alt: "WhatsApp", icon: "/wa.svg" },
  { href: "https://instagram.com", alt: "Instagram", icon: "/ig.svg" },
  { href: "mailto:info@gamplong.id", alt: "Email", icon: "/mail.svg" },
];

export default function Navbar() {
  const [activeModal, setActiveModal] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(false); // Untuk accordion submenu mobile

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setOpenSubmenu(false);
  }, []);

  const handleActionClick = (type) => {
    setActiveModal(type);
  };

  const toggleMenu = () => {
    setActiveModal((prev) => (prev === "menu" ? null : "menu"));
  };

  return (
    <nav className={`sticky top-0 left-0 right-0 ${HEADER_BG} z-[9999]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-1">
            <span className="text-white text-2xl sm:text-3xl font-bold">GAMPLONG</span>
            <span className={`${YELLO_TEXT} text-xl sm:text-2xl font-bold`}>IV</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2 lg:space-x-4">
              {NAV_ITEMS.map((item) =>
                item.isAction ? (
                  <button
                    key={item.name}
                    onClick={() => handleActionClick(item.actionType)}
                    className="text-white hover:bg-black/10 px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    {item.name}
                  </button>
                ) : item.subItems ? (
                  /* Dropdown Menu untuk Desktop */
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className="text-white hover:bg-black/10 px-3 py-2 rounded-md text-sm font-medium transition inline-flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                    </Link>
                    {/* Submenu Dropdown */}
                    <div className="absolute left-0 mt-0 w-52 bg-white rounded-xl shadow-xl py-2 hidden group-hover:block border border-gray-100 animate-in fade-in duration-150">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#4E9A73] transition font-medium"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:bg-black/10 px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-2 rounded-md text-white hover:bg-black/10 focus:outline-none transition"
            >
              {activeModal === "menu" ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${YELLO_BG} h-2`} />

      {/* Mobile Navigation Dropdown */}
      {activeModal === "menu" && (
        <div className={`md:hidden ${HEADER_BG} border-t border-green-800`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) =>
              item.isAction ? (
                <button
                  key={item.name}
                  onClick={() => handleActionClick(item.actionType)}
                  className="w-full text-left text-white hover:bg-black/10 block px-3 py-2 rounded-md text-base font-medium transition"
                >
                  {item.name}
                </button>
              ) : item.subItems ? (
                /* Collapsible Accordion untuk HP */
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between text-white hover:bg-black/10 rounded-md">
                    <Link
                      href={item.href}
                      onClick={closeModal}
                      className="flex-1 px-3 py-2 text-base font-medium"
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => setOpenSubmenu(!openSubmenu)}
                      className="p-2 text-white"
                      aria-label="Toggle Submenu"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          openSubmenu ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Child Items Mobile */}
                  {openSubmenu && (
                    <div className="pl-4 space-y-1 border-l-2 border-white/20 ml-3">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={closeModal}
                          className="text-white/90 hover:bg-black/10 block px-3 py-1.5 rounded-md text-sm font-medium transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeModal}
                  className="text-white hover:bg-black/10 block px-3 py-2 rounded-md text-base font-medium transition"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}

      {/* Popups / Modals (Kontak) */}
      {activeModal === "contact" && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={closeModal} />
          <div className="relative w-full max-w-sm sm:max-w-md bg-white shadow-2xl rounded-2xl text-black border border-gray-100 p-5 sm:p-6 flex flex-col z-10 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold">KONTAK DUSUN</h2>
              <button
                onClick={closeModal}
                className="p-1 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>
            </div>

            <div className={`${HEADER_BG} p-4 sm:p-6 lg:p-2 rounded-xl text-white`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg hover:bg-white/10 transition duration-200"
                  >
                    <img
                      src={link.icon}
                      alt={link.alt}
                      className="w-7 h-7 md:w-15 md:h-15 object-contain"
                    />
                    <span className="text-white text-sm md:text-lg font-semibold ml-3">
                      {link.alt}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}