"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const HEADER_BG = "bg-[#4E9A73]"; 
const HEADER_TEXT = "text-[#4E9A73]";
const YELLO_BG = "bg-[#E8B931]";
const YELLO_BORDER = "border-[#E8B931]";
const YELLO_TEXT = "text-[#E8B931]";
const MAIN_BG = "bg-white"; 

const RoutingMap = dynamic(() => import("@/components/routingmaps"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
      Memuat Peta...
    </div>
  ),
});

// === DATA LOKASI MANUAL (DUMMY) ===
const DUMMY_LOKASI = {
  main: [-7.731, 110.387],
  indo: { coords: [-7.732, 110.388], tipe: "market" },
  alfa: { coords: [-7.733, 110.389], tipe: "market" },
  kamisan: { coords: [-7.734, 110.390], tipe: "market" },
  piqali: { coords: [-7.735, 110.391], tipe: "resto" },
  rockBurger: { coords: [-7.736, 110.392], tipe: "resto" },
  banteng: { coords: [-7.737, 110.393], tipe: "resto" },
  tugu: { coords: [-7.782, 110.367], tipe: "trans" },
  terminal: { coords: [-7.753, 110.395], tipe: "trans" },
  ugm: { coords: [-7.771, 110.377], tipe: "book" },
  uii: { coords: [-7.687, 110.414], tipe: "book" },
  kalpark: { coords: [-7.598, 110.424], tipe: "default" },
  suraloka: { coords: [-7.595, 110.423], tipe: "default" },
};

// Daftar Hotspot untuk iterasi tombol secara dinamis dan rapi
const HOTSPOT_LIST = [
  { id: "tugu", label: "Rumah RT 1" },
  { id: "terminal", label: "Rumah Pak Dukuh" },
  { id: "ugm", label: "Masjid At Taubah" },
  { id: "uii", label: "Lapangan Voli" },
  { id: "kalpark", label: "Pasar" },
  { id: "suraloka", label: "POSKO CEWE" },
];

export default function LocationsPage() {
  const GOOGLE_MAPS_API_KEY = ""; 

  const [lokasi] = useState(DUMMY_LOKASI);
  const [selectedPopular, setSelectedPopular] = useState({
    coords: DUMMY_LOKASI.tugu.coords,
    label: "Rumah RT 1",
    tipe: DUMMY_LOKASI.tugu.tipe,
  });

  const getIconByTipe = (tipe) => {
    if (tipe === "trans") return "/m1.png";
    if (tipe === "resto") return "/m2.png";
    if (tipe === "market") return "/m3.png";
    if (tipe === "book") return "/m4.png";
    return "/m5.png";
  };

  if (!lokasi) {
    return <div className="p-10 text-center text-white font-semibold">Memuat Data Lokasi...</div>;
  }

  return (
    <div className={`${HEADER_BG} min-h-screen text-black pb-8 sm:pb-12`}>
      {/* HEADER PAGE */}
      <div className="max-w-5xl font-bold text-center text-white mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-1 tracking-wide">
          MAPS LOKASI
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl tracking-wide">
          DUSUN GAMPLONG IV
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* SECTION UTAMA (EMBEDDED GOOGLE MAPS) */}
        <section className={`${MAIN_BG} mb-10 sm:mb-16 rounded-2xl p-4 sm:p-8 md:p-12 shadow-lg`}>
          <div className={`aspect-video w-full rounded-xl overflow-hidden border-[6px] sm:border-[10px] ${YELLO_BORDER}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.0155609371848!2d110.23699238859953!3d-7.805113498053795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af900698e4779%3A0xdb881b201d91bbc6!2sdukuh%20gamplong%204!5e1!3m2!1sid!2sid!4v1787988756891!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="text-center mt-6 sm:mt-10">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${HEADER_BG} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-xl font-bold inline-block hover:opacity-90 transition-opacity w-full sm:w-auto shadow-md`}
            >
              LIHAT DI GOOGLE MAPS
            </a>
          </div>
        </section>

        {/* SECTION POPULAR HOTSPOT */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-1">
            UMKM & HOTSPOT
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-2">
            DUSUN GAMPLONG IV
          </h2>
          <p className="text-xs sm:text-sm text-center text-white max-w-3xl mx-auto mb-6 sm:mb-12 px-2">
            Kumpulan UMKM dan Hotspot area sekitar Dusun Gamplong IV.
          </p>

          <div className="bg-white rounded-2xl p-4 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 shadow-lg">
            {/* CONTAINER MAPS ROUTING */}
            <div className={`h-[280px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden border-[6px] sm:border-[10px] ${YELLO_BORDER}`}>
              <RoutingMap
                start={lokasi.main}
                end={selectedPopular.coords}
                label={selectedPopular.label}
                apiKey={GOOGLE_MAPS_API_KEY}
              />
            </div>

            {/* CONTAINER TOMBOL HOTSPOT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-white self-start">
              {HOTSPOT_LIST.map((item) => {
                const spot = lokasi[item.id];
                const isSelected = selectedPopular.label === item.label;

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      setSelectedPopular({
                        coords: spot.coords,
                        label: item.label,
                        tipe: spot.tipe,
                      })
                    }
                    className={`p-2.5 sm:p-3 rounded-xl flex items-center gap-3 sm:gap-4 transition-all w-full text-left cursor-pointer shadow-sm ${
                      isSelected
                        ? "bg-[#E8B931]"
                        : "bg-[#4E9A73] hover:bg-[#3d7c5c]"
                    }`}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 relative overflow-hidden rounded-full flex-shrink-0 bg-white/10 p-0.5">
                      <img
                        src={getIconByTipe(spot.tipe)}
                        alt="icon"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold uppercase text-xs sm:text-sm leading-snug truncate text-white">
                        {item.label}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}