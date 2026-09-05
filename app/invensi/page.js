"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const HEADER_BG = "bg-[#4E9A73]"; 
const HEADER_TEXT = "text-[#4E9A73]";
const YELLO_BG = "bg-[#E8B931]";
const YELLO_TEXT = "text-[#E8B931]";
const MAIN_BG = "bg-white"; 

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

const erte = [1, 2, 3, 4, 5, 6, 7, 8]


export default function Home() {

    const [openRT, setOpenRT] = useState({ 1: true });

    const toggleRT = (rtNumber) => {
        setOpenRT((prev) => ({
        ...prev,
        [rtNumber]: !prev[rtNumber],
        }));
    };

    return (
        <div className={`min-h-screen ${MAIN_BG}`}>

            <div className={`${MAIN_BG} ${HEADER_TEXT} justify-center item-center py-12`}>
                    <h2 className="text-4xl font-bold text-center mb-2">
                        INVENTARIS BARANG
                    </h2>
                    <h2 className="text-3xl font-bold text-center mb-2">
                        DUSUN GAMPLONG IV
                    </h2>
                    <p className="text-sm text-center max-w-3xl mx-auto">
                        Kumpulan data inventaris barang-barang di Dusun Gamplong IV.
                    </p>
            </div>

            <div className={`${YELLO_BG} h-2`}/>
            <section className={`py-12 px-4 ${HEADER_BG}`}>
                <div className="col-span-2 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        TOTAL BARANG INVENTARIS DUSUN
                    </h2>                        
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
            </section>
            
            <div className={`${MAIN_BG} ${HEADER_TEXT} justify-center item-center py-12`}>
                <h2 className="text-4xl font-bold text-center mb-2">
                    INVENTARIS BARANG
                </h2>
                <h2 className="text-3xl font-bold text-center mb-2">
                    PER RT
                </h2>
            </div>

            {erte.map((rt) => {
                const isOpen = !!openRT[rt];
                const rtFormatted = String(rt).padStart(2, "0");

                return (
                <React.Fragment key={rt}>
                    <div className={`${YELLO_BG} h-2`}/>
                    <section className={`py-12 px-4 ${HEADER_BG}`}>
                    
                    {/* BUTTON TRIGGER ACCORDION */}
                    <button
                        onClick={() => toggleRT(rt)}
                        className="w-full mx-auto flex items-center justify-center text-white hover:opacity-90 transition-all cursor-pointer focus:outline-none px-2"
                    >
                        <h2 className="text-3xl md:text-4xl pl-9 font-bold text-left">
                        RT {rtFormatted}
                        </h2>
                        
                        <div className="flex items-center px-4 py-2 text-white text-xl">
                        {isOpen ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                        </div>
                    </button>

                        {isOpen && (
                            <div className="max-w-5xl mx-auto bg-white p-8 mt-12 rounded-4xl transition-all duration-300">
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
                        )}

                    </section>
                </React.Fragment>
                );
            })}    
        </div>
    );
}

