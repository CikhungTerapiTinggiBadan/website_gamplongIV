"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const HEADER_BG = "bg-[#4E9A73]"; 
const HEADER_TEXT = "text-[#4E9A73]";
const YELLO_BG = "bg-[#E8B931]";
const YELLO_TEXT = "text-[#E8B931]";
const MAIN_BG = "bg-white"; 

const newsArticles = [
  {
    id: 1,
    category: "PENGUMUMAN",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini. Setelah penyelidikan intensif oleh kepolisian dan masyarakat setempat, tersangka akhirnya berhasil ditangkap di area Sangubanyu."
  },
  {
    id: 2,
    category: "PENGUMUMAN",
    title: "Minyak Goreng Sekarang Harganya Melebihi Minyak Pijet",
    image: "/Shodiq.jpg",
    preview: "Ini Semua gara gara Wowooo!!!!!! MANA JANJI 19 JUTA LAPANGAN...",
    content: "Hahahahahahahahahahah."
  },
  {
    id: 3,
    category: "PENGUMUMAN",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Informasi resmi terkait penanganan situasi keamanan di kawasan Sangubanyu dan sekitarnya."
  },

  {
    id: 4,
    category: "KEGIATAN",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Kegiatan gotong royong dan posko pengamanan warga yang digelar pasca kejadian di Sangubanyu."
  },

  
  {
    id: 5,
    category: "KEGIATAN",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Pelatihan kewaspadaan dan keamanan lingkungan bagi para pemuda dusun."
  },
  {
    id: 6,
    category: "KEGIATAN",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Dokumentasi kegiatan ronda malam dan patroli bergilir warga Dusun Gamplong IV."
  },

  {
    id: 7,
    category: "BERITA",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Laporan mendalam mengenai kejadian penangkapan di Sangubanyu."
  },
  {
    id: 8,
    category: "BERITA",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Tanggapan tokoh masyarakat Gamplong IV terkait situasi terkini."
  },
  {
    id: 9,
    category: "BERITA",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Rangkuman berita lokal seputar Dusun Gamplong IV dan sekitarnya."
  },
  {
    id: 10,
    category: "KEGIATAN",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Kegiatan gotong royong dan posko pengamanan warga yang digelar pasca kejadian di Sangubanyu."
  },
  {
    id: 11,
    category: "KEGIATAN",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Kegiatan gotong royong dan posko pengamanan warga yang digelar pasca kejadian di Sangubanyu."
  },
  {
    id: 12,
    category: "KEGIATAN",
    title: "Pembunuh Berantai Gamplong Ditangkap di Sangubanyu",
    image: "/Shodiq.jpg",
    preview: "Awalnya tak ada yang curiga bahwa ada pembunuh berantai di desa ini...",
    content: "Kegiatan gotong royong dan posko pengamanan warga yang digelar pasca kejadian di Sangubanyu."
  },
];

const categories = ["PENGUMUMAN", "KEGIATAN", "BERITA"];

export default function BeritaPage() {
  const [activeModal, setActiveModal] = useState(null);

  const activeArticle = newsArticles.find((a) => a.id === activeModal);

  return (
    <div className="min-h-screen bg-white text-black">
      

      <main className="py-8">
        {categories.map((catName) => {
          // Filter berita berdasarkan kategori saat ini
          const filteredArticles = newsArticles.filter(
            (article) => article.category === catName
          );

          if (filteredArticles.length === 0) return null;

          return (
            <section key={catName} className="mb-12">
              <div className="max-w-5xl justify-center item-center mb-3 mx-auto">
                <span className={`inline-block ${HEADER_BG} text-white font-extrabold text-sm px-8 py-2 rounded-full uppercase tracking-wider`}>
                  {catName}
                </span>
              </div>

              <div className={`w-full h-2 ${YELLO_BG}`}></div>

              <div className={`${HEADER_BG} px-6 md:px-12 py-12`}>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                  {filteredArticles.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setActiveModal(item.id)}
                      className="bg-white rounded-xl p-3 shadow-md hover:scale-[1.02] transition-transform cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative w-full h-50 rounded-2xl overflow-hidden mb-3">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                              No Image
                            </div>
                          )}
                        </div>

                        <h3 className="font-extrabold text-sm md:text-base text-black leading-tight mb-2 line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                          {item.preview}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-2 mt-6">
                  <span className="w-2.5 h-2.5 bg-white/70 rounded-full"></span>
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-white/70 rounded-full"></span>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {activeModal && activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#438e64] text-white px-6 py-3 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full">
                {activeArticle.category}
              </span>
              <button
                onClick={() => setActiveModal(null)}
                className={`text-white hover:text-yellow-300 transition-colors`}
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 max-h-[75vh] overflow-y-auto">
              {activeArticle.image && (
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              <h2 className="text-xl font-bold text-black mb-3 leading-snug">
                {activeArticle.title}
              </h2>

              <p className="text-sm text-black leading-relaxed text-justify whitespace-pre-line">
                {activeArticle.content}
              </p>

              <div className="text-right mt-6">
                <button
                  onClick={() => setActiveModal(null)}
                  className={`${HEADER_BG} text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#34704e] transition-colors`} 
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}