"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import Link from "next/link";


const HEADER_BG = "bg-[#4E9A73]"; 
const HEADER_TEXT = "text-[#4E9A73]";
const YELLO_BG = "bg-[#E8B931]";
const MAIN_BG = "bg-white"; 
const HEADER_BORDER = "border-[#4E9A73]";


const ketud = [
    {
        title: "Kepala Dusun",
        name: "Shodiqin",
        imageUrl: "/Shodiq.jpg"
    }
];

const pengur = [
    // Group 1 (Baris 1)
    [
        { title: "Sekretaris Dusun", name: "Nurul", imageUrl: "/Shodiq.jpg" }, // Accessible via group[0]
        { title: "Bendahara Dusun", name: "Siti", imageUrl: "/Shodiq.jpg" }    // Accessible via group[1]
    ],
    // Group 2 (Baris 2)
    [
        { title: "Ketua RT 01", name: "Fulan A", imageUrl: "/Shodiq.jpg" },
        { title: "Ketua RT 02", name: "Fulan B", imageUrl: "/Shodiq.jpg" }
    ],
    [
        { title: "Ketua RT 03", name: "Fulan C", imageUrl: "/Shodiq.jpg" },
        { title: "Ketua RT 04", name: "Fulan D", imageUrl: "/Shodiq.jpg" }
    ],
    [
        { title: "Ketua RT 05", name: "Fulen E", imageUrl: "/Shodiq.jpg"},
        { title: "Ketua RT 06", name: "Fulan F", imageUrl: "/Shodiq.jpg"}
    ]
];

const pendudud = [
    [
        { title: "Jumlah Penduduk", value: "1.234", imageUrl: "/Shodiq.jpg" },
        { title: "Jumlah Keluarga", value: "567", imageUrl: "/Shodiq.jpg" },
        { title: "Jumlah RT", value: "100", imageUrl: "/Shodiq.jpg" }
    ],
    [
        { title: "Jumlah Laki-laki", value: "600", imageUrl: "/Shodiq.jpg" },
        { title: "Jumlah Perempuan", value: "634", imageUrl: "/Shodiq.jpg" },
        { title: "Jumlah Lansia", value: "150", imageUrl: "/Shodiq.jpg" }
    ]
]

const PaldusCard = ({ title, name, imageUrl }) => (
    <div className={`${HEADER_BG} border-4 border-white p-5  items-center justify-center rounded-4xl mt-10 max-w-md mx-auto`}>
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl mb-10 p-4">
            <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-2xl mx-auto `}>
                <img 
                    src={imageUrl} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center mt-4">  
                    <h3 className="text-xl font-bold text-black">{name}</h3>
                    <p className="text-black">{title}</p>
            </div>
        </div>
    </div>
)

const KepdusCardRight = ({ title, name, imageUrl }) => (
    
    <div className={`${HEADER_BG} border-4 border-white p-5 flex flex-col items-center justify-center rounded-4xl z-20 mt-10 max-w-md mx-auto`}>        
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl mb-10 p-4">
            <div className="relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-2xl mx-auto">
                <img 
                    src={imageUrl} 
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center mt-4">  
                <h3 className="text-xl font-bold text-black">{name}</h3>
                <p className="text-black">{title}</p>
            </div>
        </div>
    </div>
);

const KepdusCardLeft = ({ title, name, imageUrl}) => (
    <div className={`${HEADER_BG} border-4 border-white p-5 flex flex-col items-center justify-center rounded-4xl z-20 mt-10 max-w-md mx-auto`}>        
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl mb-10 p-4">
            <div className="relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-2xl mx-auto">
                <img 
                    src={imageUrl} 
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center mt-4">  
                <h3 className="text-xl font-bold text-black">{name}</h3>
                <p className="text-black">{title}</p>
            </div>
        </div>
    </div>
)

const potensi = [
    {   title: "Masjid At Taubah",
        description: "Masjid yang menjadi pusat kegiatan keagamaan di Dusun Gamplong IV. Masjid ini didirikan pada tahun 500 SM. Masjid ini memiliki arsitektur yang indah dan menjadi tempat berkumpulnya masyarakat untuk sholat berjamaah, pengajian, dan kegiatan sosial lainnya.",
        imageUrl: "/Shodiq.jpg",
        jamBud : "08.00 - 20.00",
        kepemilikan : "Desa",
        link : "https://goo.gl/maps/1a2b3c4d5e6f7g8h9"
    },
    {   title: "Studio Alam",
        description: "Studio Alam adalah tempat yang menyediakan fasilitas untuk kegiatan belajar dan bermain. Studio ini didirikan pada tahun 2010 dan menjadi pusat kegiatan anak-anak di Dusun Gamplong IV.",
        imageUrl: "/Shodiq.jpg",
        jamBud : "08.00 - 20.00",
        kepemilikan : "Swasta",
        link : "https://goo.gl/maps/1a2b3c4d5e6f7g8h9"
    },
];

const images = [
    { src: '/Shodiq.jpg' },
    { src: '/Shodiq.jpg' },
    { src: '/Shodiq.jpg' },
];

const kelompokMasyarakat = [
    {
        id: "ternak-kambing",
        title: "KELOMPOK TERNAK KAMBING",
        subtitle: "DUSUN GAMPLONG IV",
        bgImage: "/Shodiq.jpg",
        items: [
            {
                image: "/Shodiq.jpg",
                text: "Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN. Hahahahaha. Jadi ini adalah contoh teks yang panjang untuk mengisi ruang di sini. Kita bisa menambahkan lebih banyak informasi tentang kelompok ternak kambing ini, termasuk sejarahnya, tujuan mereka, dan kegiatan yang mereka lakukan."
            },
            {
                image: "/Shodiq.jpg",
                text: "Semoga informasi ini bermanfaat bagi pembaca yang ingin mengetahui lebih lanjut tentang Dusun Gamplong IV dan komunitasnya. Kegiatan rutin dilakukan setiap bulan untuk memantau kesehatan ternak dan sarana peternakan."
            }
        ]
    },
    {
        id: "kelompok-tani",
        title: "KELOMPOK TANI",
        subtitle: "DUSUN GAMPLONG IV",
        bgImage: "/Shodiq.jpg",
        items: [
            {
                image: "/Shodiq.jpg",
                text: "Komunitas petani Dusun Gamplong IV berfokus pada pengelolaan hasil bumi, ketahanan pangan, dan optimalisasi sistem irigasi pertanian lokal."
            },
            {
                image: "/Shodiq.jpg",
                text: "Kelompok Tani juga mengadakan pelatihan berkala mengenai penggunaan pupuk organik dan teknik bercocok tanam ramah lingkungan."
            }
        ]
    },
    {
        id: "kelompok-pemuda",
        title: "KELOMPOK PEMUDA",
        subtitle: "DUSUN GAMPLONG IV",
        bgImage: "/Shodiq.jpg",
        items: [
            {
                image: "/Shodiq.jpg",
                text: "Wadah kreativitas dan gotong royong pemuda-pemudi Dusun Gamplong IV dalam menggerakkan kegiatan sosial, olahraga, dan kebudayaan."
            },
            {
                image: "/Shodiq.jpg",
                text: "Pemuda aktif mengelola event desa dan mendukung program inovasi digital untuk kemajuan lingkungan setempat."
            }
        ]
    }
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

const KelompokItemCard = ({ group }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full overflow-hidden">
            {/* Header Banner (Tombol Toggle Collapsible) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full max-w-full bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8 flex items-center justify-between cursor-pointer transition-all duration-300 group"
                style={{
                    backgroundImage: `url('${group.bgImage}')`,
                    backgroundBlendMode: "multiply",
                    backgroundColor: "rgba(0, 0, 0, 0.65)"
                }}
            >
                <div className="flex flex-col items-center justify-center w-full">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-1">
                        {group.title}
                    </h2>
                    {group.subtitle && (
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white/90">
                            {group.subtitle}
                        </h3>
                    )}
                </div>
                <ChevronDown 
                    className={`w-7 h-7 md:w-9 md:h-9 text-white transition-transform duration-300 group-hover:scale-110 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Isi Konten (Conditional Rendering) */}
            {isOpen && (
                <div className="bg-white p-6 md:p-10 space-y-8 md:space-y-12 animate-fadeIn">
                    {group.items.map((item, idx) => {
                        const isEven = idx % 2 === 0;

                        return (
                            <div 
                                key={idx} 
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-center"
                            >
                                {/* Selang-seling Posisi Gambar & Teks */}
                                {isEven ? (
                                    <>
                                        <div className="col-span-1 flex justify-center">
                                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-2 overflow-hidden rounded-3xl">
                                                <img 
                                                    src={item.image} 
                                                    alt={group.title} 
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                                            <p className="text-xs sm:text-sm md:text-base text-center md:text-justify text-black leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-span-1 md:col-span-2 flex flex-col justify-center order-2 md:order-1">
                                            <p className="text-xs sm:text-sm md:text-base text-center md:text-justify text-black leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                        <div className="col-span-1 flex justify-center order-1 md:order-2">
                                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-2 overflow-hidden rounded-3xl">
                                                <img 
                                                    src={item.image} 
                                                    alt={group.title} 
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

const CollapsibleSection = ({ 
    id,
    title, 
    subtitle, 
    description, 
    bgColor = MAIN_BG, 
    textColor = HEADER_TEXT, 
    defaultOpen = true, 
    children 
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

        return (
        <section id={id} className={`py-8 md:py-12 ${bgColor} transition-all duration-300`}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex flex-col items-center justify-center cursor-pointer group focus:outline-none"
                    aria-expanded={isOpen}
                >
                    <div className="flex items-center justify-center gap-3 px-4">
                        <h2 className={`text-lg md:text-4xl font-bold text-center ${textColor}`}>
                            {title}
                        </h2>
                        <ChevronDown 
                            className={`w-6 h-6 md:w-8 md:h-8 ${textColor} transition-transform duration-300 group-hover:scale-110 ${isOpen ? "rotate-180" : ""}`}
                        />
                    </div>
                    {subtitle && (
                        <h3 className={`text-xl md:text-3xl hidden md:block font-bold text-center mt-1 ${textColor}`}>
                            {subtitle}
                        </h3>
                    )}
                    {description && (
                        <p className={`text-xs md:text-sm hidden md:block text-center max-w-3xl mx-auto mt-2 opacity-90 ${textColor}`}>
                            {description}
                        </p>
                    )}
                </button>

                {isOpen && (
                    <div className="mt-8 transition-all duration-300 animate-fadeIn">
                        {children}
                    </div>
                )}
        </section>
    );
};

    return (
        <div className={`min-h-screen ${MAIN_BG}`}>

{/*SEJARAH DUSUN*/}
            <CollapsibleSection 
                title="SEJARAH DUSUN"
                subtitle="GAMPLONG IV"
                description="Profil dan Sejarah Dusun Gamplong IV."
                bgColor={HEADER_BG}
                textColor="text-white"
                id="sejarah"
            >
            <div className="max-w-5xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                    <div className="col-span-1">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 border-2 overflow-hidden rounded-full mx-auto">
                            <img 
                                src="/Shodiq.jpg" 
                                alt="Sejarah Dusun"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                        <p className="text-xs md:text-sm text-center md:text-left text-white leading-relaxed">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN.
                        </p>
                    </div>
                </div>
            </div>
            </CollapsibleSection>

{/* VISI DUSUN */}
            <CollapsibleSection 
                title="VISI DUSUN"
                subtitle="GAMPLONG IV"
                description="Visi Dusun Gamplong IV."
                bgColor={MAIN_BG}
                textColor={HEADER_TEXT}
                id="visi"
            >
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-center order-2 md:order-1">
                        <p className="text-xs md:text-sm text-center md:text-left text-black leading-relaxed">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN.
                        </p>
                    </div>
                    <div className="col-span-1 order-1 md:order-2">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 border-2 overflow-hidden rounded-full mx-auto">
                            <img 
                                src="/Shodiq.jpg" 
                                alt="Visi Dusun"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            </CollapsibleSection>

{/* MISI DUSUN */}
            <div className={`${YELLO_BG} h-2`}/>
            <CollapsibleSection 
                title="MISI DUSUN"
                subtitle="GAMPLONG IV"
                description="Misi Dusun Gamplong IV."
                bgColor={HEADER_BG}
                textColor="text-white"
                id="misi"
            >
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                    <div className="col-span-1">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 border-2 overflow-hidden rounded-full mx-auto">
                            <img 
                                src="/Shodiq.jpg" 
                                alt="Misi Dusun"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                        <p className="text-xs md:text-sm text-center md:text-left text-white leading-relaxed">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN.
                        </p>
                    </div>
                </div>
            </div>
            </CollapsibleSection>

{/* KEPENGURUSAN */}
            <CollapsibleSection 
                title="KEPENGURUSAN DUSUN"
                subtitle="GAMPLONG IV"
                description="Kepengurusan Pemerintahan dan Pimpinan Kelompok Masyarakat Dusun Gamplong IV."
                bgColor={MAIN_BG}
                textColor={HEADER_TEXT}
                id="kepengurusan"
            >
            <div className="max-w-5xl mx-auto">
                <div className="relative flex flex-col items-center w-full">
                    
                    {/* Kepala Dusun */}
                    {ketud.map((person, index) => (
                        <div key={index} className="relative z-20 mb-8 md:mb-12 w-full max-w-md mx-auto">
                            <PaldusCard {...person} />
                        </div>
                    ))}

                    {/* Pengurus Dusun & RT */}
                    {pengur.map((row, rowIndex) => (
                        <div key={rowIndex} className="relative z-10 w-full mb-6 md:mb-0">
                            <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl mx-auto relative gap-6 md:gap-0">
                                
                                {/* Card Sisi Kiri */}
                                <div className="z-10 justify-start w-full md:w-auto">
                                    <KepdusCardRight {...row[0]} />
                                </div>

                                {/* ORNAMEN GARIS & LINGKARAN DESKTOP (Sembunyi di HP) */}
                                {/* Lingkaran Tengah */}
                                <div className={`${HEADER_BORDER} absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-10 rounded-full z-20 hidden md:block transition-colors duration-300`}/>
                                
                                {/* Spacer Tengah Desktop */}
                                <div className="hidden md:flex justify-center items-center w-2xl h-5" />
                                
                                {/* Garis Horizontal Kiri */}
                                <div className={`hidden md:block absolute top-1/2 left-0 right-1/2 h-5 ${HEADER_BG} -translate-y-1/2 z-0`} />
                                
                                {/* Garis Horizontal Kanan */}
                                {row[1] && (
                                    <div className={`hidden md:block absolute top-1/2 left-1/2 right-0 h-5 ${HEADER_BG} -translate-y-1/2 z-0`} />
                                )}
                                
                                {/* Garis Vertikal Tengah */}
                                <div className={`hidden md:block absolute h-126.5 bottom-1/2 w-2.5 ${HEADER_BG} left-1/2 -translate-x-1/2 z-0`} /> 

                                {/* Card Sisi Kanan */}
                                <div className="z-10 justify-end w-full md:w-auto">
                                    {row[1] ? (
                                        <KepdusCardLeft {...row[1]} />
                                    ) : (
                                        <div className="hidden md:block w-44 sm:w-56 md:w-64" />
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </CollapsibleSection>

{/*KELOMPOK MASYARAKAT*/}
            <div className={`${YELLO_BG} h-2`}/>
            <CollapsibleSection 
                title="KELOMPOK MASYARAKAT"
                subtitle="DUSUN GAMPLONG IV"
                description="Sejarah, tujuan dan ragam kegiatan Kelompok Masyarakat di Dusun Gamplong IV."
                bgColor={HEADER_BG}
                textColor="text-white"
                id="ormas"
            >
                <div className="w-full mx-auto">
                    {kelompokMasyarakat.map((group) => (
                        <KelompokItemCard key={group.id} group={group} />
                    ))}
                </div>
            </CollapsibleSection>

{/* ADMINISTRASI */}
            <CollapsibleSection 
                title="ADMINISTRASI PENDUDUK"
                subtitle="DUSUN GAMPLONG IV"
                description="Kumpulan data dan Statistik seputar Dusun Gamplong IV."
                bgColor={MAIN_BG}
                textColor={HEADER_TEXT}
                id="administrasi"
            >

                <div className="max-w-5xl mx-auto bg-white p-8 rounded-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pendudud.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {row.map((item, itemIndex) => (
                                    <div key={itemIndex} className="bg-[#4E9A73] p-6 rounded-2xl text-center">
                                        <img
                                            src={item.imageUrl} 
                                            alt={item.title}
                                            className="mx-auto w-15 h-15 mb-4 rounded-xl"
                                        />
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-lg text-white">{item.value}</p>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </CollapsibleSection>

{/* POTENSI */}
            <div className={`${YELLO_BG} h-2`}/>
            <CollapsibleSection 
                title="POTENSI WISATA DAN LINGKUNGAN"
                subtitle="DUSUN GAMPLONG IV"
                description="Profil dan Lokasi Lingkungan dan Potensi Wisata yang ada di Dusun Gamplong IV."
                bgColor={HEADER_BG}
                textColor="text-white"
                id="potensi"
            >

                    {/* Outer Grid Container */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 py-12 mt-12 rounded-3xl ${HEADER_BG} p-6 md:p-10 items-center`}>
                    
                    {/* SISI KIRI: CAROUSEL GAMBAR & NAVIGASI */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-white overflow-hidden rounded-2xl">
                        <img
                            src={potensi[currentImage]?.imageUrl}
                            alt={potensi[currentImage]?.title}
                            className="w-full h-full object-cover transition-opacity duration-300"
                        />
                        </div>
                        
                        <div className="bg-white w-64 md:w-80 text-center py-2 -mt-4 z-10 rounded-b-lg shadow-md">
                        <p className={`uppercase text-xl font-bold ${HEADER_TEXT} text-gray-900`}>
                            {potensi[currentImage]?.title}
                        </p>
                        </div>

                        <div className="w-64 md:w-80 flex items-center pt-6 justify-between px-2">
                        <button
                            onClick={prevImage}
                            className="border-2 border-white text-white p-1 transition-all rounded hover:bg-white hover:text-gray-900"
                            aria-label="Previous Image"
                        >
                            <ChevronLeft size={24} strokeWidth={3} />
                        </button>

                        <div className="text-center">
                            <p className="text-lg text-white font-semibold">
                            {currentImage + 1} <span className="text-white">/</span> {potensi.length}
                            </p>
                        </div>

                        <button
                            onClick={nextImage}
                            className="border-2 border-white text-white p-1 transition-all rounded hover:bg-white hover:text-gray-900"
                            aria-label="Next Image"
                        >
                            <ChevronRight size={24} strokeWidth={3} />
                        </button>
                        </div>
                    </div>

                    {potensi.map((item, index) => {
                        if (index !== currentImage) return null;

                        return (
                        <div key={index}className={`w-full relative rounded-4xl p-2 ${MAIN_BG} transition-all duration-300`}>
                            <div className={`grid grid-cols-3 md:grid-cols-6 gap-2 border-2 m-3 p-4 text-white rounded-2xl ${HEADER_BG}`}>
                                <h3 className="col-span-2 text-sm flex items-center justify-start font-black uppercase">Nama Potensi</h3>
                                <h3 className="col-span-1 text-sm text-center flex items-center justify-center font-black md:text-start uppercase"> : </h3>
                                <p className="col-span-3 text-lg font-black">{item.title}</p>

                                <h3 className="col-span-2 text-sm font-black flex items-center justify-start uppercase">Deskripsi</h3>
                                <h3 className="col-span-1 text-sm text-center flex items-center justify-center font-black md:text-start uppercase">:</h3>
                                <p className="col-span-3 font-bold text-xs md:text-sm text-justify">{item.description}</p>

                                <h3 className="col-span-2 text-sm font-black flex items-center justify-start uppercase">Jam Buka</h3>
                                <h3 className="col-span-1 text-sm text-center flex items-center justify-center font-black md:text-start uppercase">:</h3>
                                <p className="col-span-3 font-bold text-xs md:text-sm">{item.jamBud}</p>

                                <h3 className="col-span-2 text-sm font-black flex items-center justify-start uppercase">Kepemilikan</h3>
                                <h3 className="col-span-1 text-sm text-center flex items-center justify-center font-black md:text-start uppercase">:</h3>
                                <p className="col-span-3 font-bold text-xs md:text-sm">{item.kepemilikan}</p>
                            </div>

                            <div className="flex justify-center mb-3">
                            <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${HEADER_TEXT} text-sm font-bold border-b-2 border-white pb-0.5 hover:text-blue-400 hover:border-blue-400 transition`}
                            >
                                SELENGKAPNYA
                            </Link>
                            </div>
                        </div>
                        );
                    })}

                    </div>
            </CollapsibleSection>
        </div>
    );
}


