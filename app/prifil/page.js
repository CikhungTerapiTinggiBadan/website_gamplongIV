"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from "next/link";


const HEADER_BG = "bg-[#4E9A73]"; 
const HEADER_TEXT = "text-[#4E9A73]";
const YELLO_BG = "bg-[#E8B931]";
const YELLO_TEXT = "text-[#E8B931]";
const MAIN_BG = "bg-white"; 


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
        { title: "Admin Tawuran", name: "Galuh", imageUrl: "/Shodiq.jpg"},
        { title: "Admin Tawuran", name: "Galuh", imageUrl: "/Shodiq.jpg"}
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
    <div className={`${HEADER_BG} border-4 p-3 flex flex-col items-center justify-center rounded-4xl mt-10 max-w-md mx-auto`}>
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl my-10 p-4">
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
    
    <div className={`${HEADER_BG} border-4 p-3 flex flex-col items-center justify-center rounded-4xl z-20 mt-10 max-w-md mx-auto`}>        
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl my-10 p-4">
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
    <div className={`${HEADER_BG} border-4 p-3 flex flex-col items-center justify-center rounded-4xl z-20 mt-10 max-w-md mx-auto`}>        
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl my-10 p-4">
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

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

    return (
        <div className={`min-h-screen ${MAIN_BG}`}>
            
            <section className={`p-10 ${HEADER_BG}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="col-span-1 ">
                        <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-full mx-auto `}>
                            <img 
                            src={"/Shodiq.jpg"} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold text-center text-white mb-10">
                            SEJARAH DUSUN GAMPLONG IV
                        </h2>                        
                        <p className="text-sm text-center text-white max-w-3xl mx-auto mb-8">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN.
                        </p>
                    </div>
                </div>
            </section>

            <section className={`p-10 ${MAIN_BG}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="col-span-2 flex flex-col justify-center">
                        <h2 className={`text-4xl font-bold text-center ${HEADER_TEXT} mb-10`}>
                            VISI DUSUN GAMPLONG IV
                        </h2>                        
                        <p className="text-sm text-center text-black max-w-3xl mx-auto mb-8">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN.
                        </p>
                    </div>

                    <div className="col-span-1 ">
                        <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-full mx-auto `}>
                            <img 
                            src={"/Shodiq.jpg"} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className={`${YELLO_BG} h-2`}/>
            <section className={`p-10 ${HEADER_BG}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="col-span-1 ">
                        <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-full mx-auto `}>
                            <img 
                            src={"/Shodiq.jpg"} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold text-center text-white mb-10">
                            MISI DUSUN GAMPLONG IV
                        </h2>                        
                        <p className="text-sm text-center text-white max-w-3xl mx-auto mb-8">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN.
                        </p>
                    </div>
                </div>
            </section>

            <section className={`py-12 px-4 ${MAIN_BG} ${HEADER_TEXT}`}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-2">
                        KEPENGURUSAN DUSUN
                    </h2>
                    <h2 className="text-3xl font-bold text-center mb-2">
                        GAMPLONG IV
                    </h2>

                    <div className="relative flex flex-col items-center w-full">
                        
                        {ketud.map((person, index) => (
                            <div key={index} className="relative z-20 mb-12">
                                <PaldusCard {...person} />
                            </div>
                        ))}

                        {pengur.map((row, rowIndex) => (
                            <div key={rowIndex} className="relative z-10 w-full">
                                <div className="justify-center items-center w-5xl flex mx-auto relative">
                                    
                                    <div className="z-10 justify-start">
                                        <KepdusCardRight {...row[0]} />
                                    </div>
                                
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-10 rounded-full z-20 hidden md:block transition-colors duration-300"/>
                                    <div className={`justify-center items-center w-2xl flex h-5 `}/>
                                    <div className={`absolute top-1/2 left-0 right-1/2 h-5 ${HEADER_BG} -translate-y-1/2 z-0`} />
                                    {row[1] && (
                                        <div className={`absolute top-1/2 left-1/2 right-0 h-5 ${HEADER_BG} -translate-y-1/2 z-0`} />
                                    )}
                                    <div className={`absolute h-133 bottom-1/2 w-2.5 ${HEADER_BG} left-1/2 -translate-x-1/2 z-0`} /> 
                                
                                    <div className="z-10 justify-end">
                                        {row[1] ? (
                                        <KepdusCardLeft {...row[1]} />
                                        ) : (
                                            <div className="w-44 sm:w-56 md:w-64" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <div className={`${YELLO_BG} h-2`}/>
            <section className={`pt-12 ${HEADER_BG}`}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-2">
                        KELOMPOK MASYARAKAT
                    </h2>
                    <h2 className="text-3xl font-bold text-center text-white mb-2">
                        DUSUN GAMPLONG IV
                    </h2>
                    <p className="text-sm text-center text-gray-300 max-w-3xl mx-auto">
                        Organisasi dan Kelopok masyarakat yang ada di Dusun Gamplong IV.
                    </p>
                </div>

                <div className="max-w-full bg-cover bg-center bg-no-repeat pt-12 pb-12 mt-12" 
                style=
                {{ 
                    backgroundImage: "url('/Shodiq.jpg')",
                    backgroundBlendMode: "multiply",
                    backgroundColor: "rgba(0, 0, 0, 0.65)"
                }}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-4xl font-bold text-center text-white mb-2">
                            KELOMPOK TERNAK KAMBING
                        </h2>
                        <h2 className="text-3xl font-bold text-center text-white mb-2">
                            DUSUN GAMPLONG IV
                        </h2>
                    </div>
                </div>
                
                <div className="max-w-full bg-white py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="col-span-1 ">
                        <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-3xl mx-auto `}>
                            <img 
                            src={"/Shodiq.jpg"} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col justify-center">                      
                        <p className="text-sm text-center text-black max-w-3xl mx-auto mb-8">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN. Hahahahaha. Jadi ini adalah contoh teks yang panjang untuk mengisi ruang di sini. 
                            Kita bisa menambahkan lebih banyak informasi tentang kelompok ternak kambing ini, termasuk sejarahnya, tujuan mereka, dan PentolPentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol  pentol pentol pentol kegiatan yang mereka lakukan.
                            Semoga informasi ini bermanfaat bagi pembaca yang ingin mengetahui lebih lanjut tentang Dusun Gamplong IV dan komunitasnya. 
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-12">
                    <div className="col-span-2 flex flex-col justify-center">
                       
                        <p className="text-sm text-center text-black max-w-3xl mx-auto mb-8">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN. Hahahahaha. Jadi ini adalah contoh teks yang panjang untuk mengisi ruang di sini. 
                            Kita bisa menambahkan lebih banyak informasi tentang kelompok ternak kambing ini, termasuk sejarahnya, tujuan mereka, dan PentolPentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol  pentol pentol pentol kegiatan yang mereka lakukan.
                            Semoga informasi ini bermanfaat bagi pembaca yang ingin mengetahui lebih lanjut tentang Dusun Gamplong IV dan komunitasnya. 
                        </p>
                    </div>

                    <div className="col-span-1 ">
                        <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-3xl mx-auto `}>
                            <img 
                            src={"/Shodiq.jpg"} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                </div>

            <div className="max-w-full bg-cover bg-center bg-no-repeat pt-12 pb-12" 
                style=
                {{ 
                    backgroundImage: "url('/Shodiq.jpg')",
                    backgroundBlendMode: "multiply",
                    backgroundColor: "rgba(0, 0, 0, 0.65)"
                }}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-4xl font-bold text-center text-white mb-2">
                            KELOMPOK TANI
                        </h2>
                        <h2 className="text-3xl font-bold text-center text-white mb-2">
                            DUSUN GAMPLONG IV
                        </h2>
                    </div>
                </div>
                
                <div className="max-w-full bg-white py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="col-span-1 ">
                        <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-3xl mx-auto `}>
                            <img 
                            src={"/Shodiq.jpg"} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col justify-center">                      
                        <p className="text-sm text-center text-black max-w-3xl mx-auto mb-8">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN. Hahahahaha. Jadi ini adalah contoh teks yang panjang untuk mengisi ruang di sini. 
                            Kita bisa menambahkan lebih banyak informasi tentang kelompok ternak kambing ini, termasuk sejarahnya, tujuan mereka, dan PentolPentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol  pentol pentol pentol kegiatan yang mereka lakukan.
                            Semoga informasi ini bermanfaat bagi pembaca yang ingin mengetahui lebih lanjut tentang Dusun Gamplong IV dan komunitasnya. 
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-12">
                    <div className="col-span-2 flex flex-col justify-center">
                       
                        <p className="text-sm text-center text-black max-w-3xl mx-auto mb-8">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN. Hahahahaha. Jadi ini adalah contoh teks yang panjang untuk mengisi ruang di sini. 
                            Kita bisa menambahkan lebih banyak informasi tentang kelompok ternak kambing ini, termasuk sejarahnya, tujuan mereka, dan PentolPentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol  pentol pentol pentol kegiatan yang mereka lakukan.
                            Semoga informasi ini bermanfaat bagi pembaca yang ingin mengetahui lebih lanjut tentang Dusun Gamplong IV dan komunitasnya. 
                        </p>
                    </div>

                    <div className="col-span-1 ">
                        <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-3xl mx-auto `}>
                            <img 
                            src={"/Shodiq.jpg"} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                </div>

            <div className="max-w-full bg-cover bg-center bg-no-repeat pt-12 pb-12" 
                style=
                {{ 
                    backgroundImage: "url('/Shodiq.jpg')",
                    backgroundBlendMode: "multiply",
                    backgroundColor: "rgba(0, 0, 0, 0.65)"
                }}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-4xl font-bold text-center text-white mb-2">
                            KELOMPOK PEMUDA
                        </h2>
                        <h2 className="text-3xl font-bold text-center text-white mb-2">
                            DUSUN GAMPLONG IV
                        </h2>
                    </div>
                </div>
                
                <div className="max-w-full bg-white py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="col-span-1 ">
                        <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-3xl mx-auto `}>
                            <img 
                            src={"/Shodiq.jpg"} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col justify-center">                      
                        <p className="text-sm text-center text-black max-w-3xl mx-auto mb-8">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN. Hahahahaha. Jadi ini adalah contoh teks yang panjang untuk mengisi ruang di sini. 
                            Kita bisa menambahkan lebih banyak informasi tentang kelompok ternak kambing ini, termasuk sejarahnya, tujuan mereka, dan PentolPentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol  pentol pentol pentol kegiatan yang mereka lakukan.
                            Semoga informasi ini bermanfaat bagi pembaca yang ingin mengetahui lebih lanjut tentang Dusun Gamplong IV dan komunitasnya. 
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-12">
                    <div className="col-span-2 flex flex-col justify-center">
                       
                        <p className="text-sm text-center text-black max-w-3xl mx-auto mb-8">
                            Gamplong dihina gamplong diam, dijelek jelekkan gamplong juga diam, tapi kali ini di Sangubanyu GAMPLONG AKAN LAWAN. Hahahahaha. Jadi ini adalah contoh teks yang panjang untuk mengisi ruang di sini. 
                            Kita bisa menambahkan lebih banyak informasi tentang kelompok ternak kambing ini, termasuk sejarahnya, tujuan mereka, dan PentolPentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol Pentol pentol pentol pentol  pentol pentol pentol kegiatan yang mereka lakukan.
                            Semoga informasi ini bermanfaat bagi pembaca yang ingin mengetahui lebih lanjut tentang Dusun Gamplong IV dan komunitasnya. 
                        </p>
                    </div>

                    <div className="col-span-1 ">
                        <div className={`relative w-56 h-56 md:w-74 md:h-74 border-2 overflow-hidden rounded-3xl mx-auto `}>
                            <img 
                            src={"/Shodiq.jpg"} 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                </div>

            </section>

            <div className={`${YELLO_BG} h-2`}/>
            <section className={`py-12 px-4 ${HEADER_BG}`}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-2">
                        ADMINISTRASI PENDUDUK
                    </h2>
                    <h2 className="text-3xl font-bold text-center text-white mb-2">
                        DUSUN GAMPLONG IV
                    </h2>
                    <p className="text-sm text-center text-white max-w-3xl mx-auto mb-8">
                        Kumpulan data dan Statistik seputar Dusun Gamplong IV.
                    </p>
                </div>

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
                        {/* <div className="bg-[#4E9A73] p-6 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Jumlah Penduduk</h3>
                            <p className="text-lg text-white">1.234</p>
                        </div>
                        <div className="bg-[#4E9A73] p-6 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Jumlah Keluarga</h3>
                            <p className="text-lg text-white">567</p>
                        </div>
                        <div className="bg-[#4E9A73] p-6 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Jumlah RT</h3>
                            <p className="text-lg text-white">4</p>
                        </div>
                    </div>

                </div> */}
            </section>

            <section className={`py-12 px-4 ${MAIN_BG}`}>
                <div className="max-w-5xl mx-auto">
                    <h2 className={`text-4xl font-bold text-center ${HEADER_TEXT} mb-2`}>
                    POTENSI WISATA DAN LINGKUNGAN
                    </h2>
                    <h2 className={`text-3xl font-bold text-center ${HEADER_TEXT} mb-2`}>
                    DUSUN GAMPLONG IV
                    </h2>
                    <p className={`text-sm text-center ${HEADER_TEXT} max-w-3xl mx-auto`}>
                    Profil dan Lokasi Lingkungan dan Potensi Wisata yang ada di Dusun Gamplong IV.
                    </p>

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
                                SEE MORE
                            </Link>
                            </div>
                        </div>
                        );
                    })}

                    </div>
                </div>
            </section>

            <div className="bg-white h-10 "/>
        </div>
    );
}

