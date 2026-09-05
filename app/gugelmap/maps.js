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
    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
      Memuat Peta...
    </div>
  ),
});

// === DATA LOKASI MANUAL (DUMMY) ===
const DUMMY_LOKASI = {
  main: [-7.731, 110.387], // Titik Utama / Pusat
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

export default function LocationsPage() {
  // Simpan API Key di variabel ini (Kosongkan jika belum ada)
  const GOOGLE_MAPS_API_KEY = ""; 

  // Direct state initialization dengan data manual
  const [lokasi] = useState(DUMMY_LOKASI);
  const [selectedNearby, setSelectedNearby] = useState({
    coords: DUMMY_LOKASI.indo.coords,
    label: "Indomaret",
    tipe: DUMMY_LOKASI.indo.tipe,
  });
  const [selectedPopular, setSelectedPopular] = useState({
    coords: DUMMY_LOKASI.tugu.coords,
    label: "Stasiun Tugu",
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
    return <div className="p-10 text-center">Memuat Data Lokasi...</div>;
  }

  return (
    <div className={`${HEADER_BG} min-h-screen text-black pb-12`}>
      <div className="max-w-5xl font-bold text-center text-white mx-auto px-4 py-12">
        <h2 className="text-4xl mb-1">
          MAPS LOKASI
        </h2>
        <h2 className="text-3xl">
          DUSUN GAMPLONG IV
        </h2>

      </div>

      <div className="max-w-5xl mx-auto px-4">
        <section className={`${MAIN_BG} mb-16 rounded-2xl p-12`}>
          <div className={`aspect-video w-full rounded-xl overflow-hidden border border-10 ${YELLO_BORDER}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.0155609371848!2d110.23699238859953!3d-7.805113498053795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af900698e4779%3A0xdb881b201d91bbc6!2sdukuh%20gamplong%204!5e1!3m2!1sid!2sid!4v1787988756891!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="text-center mt-10">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${HEADER_BG} text-white px-8 py-4 rounded-2xl text-xl font-bold inline-block hover:opacity-90 transition-opacity`}
            >
              LIHAT DI GOOGLE MAPS
            </a>
          </div>
        </section>



        {/* SECTION POPULAR HOTSPOT */}
        <section>
          <h2 className="text-4xl font-bold text-center text-white mb-2">
            UMKM & HOTSPOT
          </h2>
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            DUSUN GAMPLONG IV
          </h2>
          <p className="text-sm text-center text-white max-w-3xl mx-auto mb-12">
              Kumpulan UMKM dan Hotspot area sekitar Dusun Gamplong IV.
          </p>

          <div className="bg-white rounded-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`h-[400px] rounded-xl overflow-hidden border border-10 ${YELLO_BORDER}`}>
            <RoutingMap
              start={lokasi.main}
              end={selectedPopular.coords}
              label={selectedPopular.label}
              apiKey={GOOGLE_MAPS_API_KEY}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 text-white mb-10 self-start">
            {/* STASIUN TUGU */}
            <button
              onClick={() =>
                setSelectedPopular({
                  coords: lokasi.tugu.coords,
                  label: "Stasiun Tugu",
                  tipe: lokasi.tugu.tipe,
                })
              }
              className={`justify-center p-2 rounded-xl flex items-center gap-4 transition-all ${
                selectedPopular.label === "Stasiun Tugu"
                  ? "bg-[#E8B931]"
                  : "bg-[#4E9A73]"
              }`}
            >
              <div className="w-10 h-10 relative overflow-hidden rounded-full flex-shrink-0">
                <img
                  src={getIconByTipe(lokasi.tugu.tipe)}
                  alt="icon"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-white uppercase text-md">Rumah RT 1</p>
              </div>
            </button>

            {/* TERMINAL CONCAT */}
            <button
              onClick={() =>
                setSelectedPopular({
                  coords: lokasi.terminal.coords,
                  label: "Terminal Concat",
                  tipe: lokasi.terminal.tipe,
                })
              }
              className={`p-2 justify-center item-center rounded-xl flex items-center gap-4 transition-all ${
                selectedPopular.label === "Terminal Concat"
                  ? "bg-[#E8B931]"
                  : "bg-[#4E9A73]"
              }`}
            >
              <div className="w-10 h-10 relative overflow-hidden rounded-full flex-shrink-0">
                <img
                  src={getIconByTipe(lokasi.terminal.tipe)}
                  alt="icon"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left ">
                <p className="font-bold uppercase text-md">Rumah Pak Dukuh</p>
              </div>
            </button>

            {/* UGM */}
            <button
              onClick={() =>
                setSelectedPopular({
                  coords: lokasi.ugm.coords,
                  label: "UGM",
                  tipe: lokasi.ugm.tipe,
                })
              }
              className={`p-2 justify-center item-center rounded-xl flex gap-4 transition-all ${
                selectedPopular.label === "UGM"
                  ? "bg-[#E8B931]"
                  : "bg-[#4E9A73]"
              }`}
            >
              <div className="w-10 h-10 relative overflow-hidden rounded-full flex-shrink-0">
                <img
                  src={getIconByTipe(lokasi.ugm.tipe)}
                  alt="icon"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <p className="font-bold uppercase text-md">
                  Masjid At Taubah
                </p>
              </div>
            </button>

            {/* UII */}
            <button
              onClick={() =>
                setSelectedPopular({
                  coords: lokasi.uii.coords,
                  label: "UII",
                  tipe: lokasi.uii.tipe,
                })
              }
              className={`p-2 justify-center item-center rounded-xl flex items-center gap-4 transition-all ${
                selectedPopular.label === "UII"
                  ? "bg-[#E8B931]"
                  : "bg-[#4E9A73]"
              }`}
            >
              <div className="w-10 h-10 relative overflow-hidden rounded-full flex-shrink-0">
                <img
                  src={getIconByTipe(lokasi.uii.tipe)}
                  alt="icon"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <p className="font-bold uppercase text-md">
                  Lapangan Voli
                </p>
              </div>
            </button>

            {/* KALIURANG BOTANICAL PARK */}
            <button
              onClick={() =>
                setSelectedPopular({
                  coords: lokasi.kalpark.coords,
                  label: "Kaliurang Botanical Park",
                  tipe: lokasi.kalpark.tipe,
                })
              }
              className={`p-2 justify-center item-center rounded-xl flex items-center gap-4 transition-all ${
                selectedPopular.label === "Kaliurang Botanical Park"
                  ? "bg-[#E8B931]"
                  : "bg-[#4E9A73]"
              }`}
            >
              <div className="w-10 h-10 relative overflow-hidden rounded-full  flex-shrink-0">
                <img
                  src={getIconByTipe(lokasi.kalpark.tipe)}
                  alt="icon"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <p className="font-bold uppercase text-md">
                  Pasar
                </p>
              </div>
            </button>

            {/* SURALOKA */}
            <button
              onClick={() =>
                setSelectedPopular({
                  coords: lokasi.suraloka.coords,
                  label: "Suraloka",
                  tipe: lokasi.suraloka.tipe,
                })
              }
              className={`justify-center item-center rounded-xl flex items-center gap-4 transition-all ${
                selectedPopular.label === "Suraloka"
                  ? "bg-[#E8B931]"
                  : "bg-[#4E9A73]"
              }`}
            >
              <div className="w-10 h-10 relative overflow-hidden rounded-full flex-shrink-0">
                <img
                  src={getIconByTipe(lokasi.suraloka.tipe)}
                  alt="icon"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <p className="font-bold uppercase text-md">
                  POSKO CEWE
                </p>
              </div>
            </button>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}