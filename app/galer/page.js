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
    image: "/Shodiq.jpg",
  },
  {
    id: 2,
    image: "/Shodiq.jpg",
  },
  {
    id: 3,
    image: "/Shodiq.jpg",
  },

  {
    id: 4,
    image: "/Shodiq.jpg",
  },

  
  {
    id: 5,
    image: "/Shodiq.jpg",
  },
  {
    id: 6,
    image: "/Shodiq.jpg",
  },

  {
    id: 7,
    image: "/Shodiq.jpg",
  },
  {
    id: 8,
    image: "/Shodiq.jpg",
  },
  {
    id: 9,
    image: "/Shodiq.jpg",
  },
  {
    id: 10,
    image: "/Shodiq.jpg",
  },
  {
    id: 11,
    image: "/Shodiq.jpg",
  },
  {
    id: 12,
    image: "/Shodiq.jpg",
  },
  {
    id: 13,
    image: "/Shodiq.jpg"
  }
];


export default function BeritaPage() {
  const [activeModal, setActiveModal] = useState(null);

  const activeArticle = newsArticles.find((a) => a.id === activeModal);

  return (
    <div className="min-h-screen bg-white text-black">
      

    <section>
      <div className={`${HEADER_BG} px-6 md:px-12 py-12`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsArticles.map((item) => (
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
      </div>
    </section>

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