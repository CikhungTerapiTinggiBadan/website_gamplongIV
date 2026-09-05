"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react'; 
import { useEffect } from "react";

const HEADER_BG = "bg-[#4E9A73]"; 
const YELLO_BG = "bg-[#E8B931]";
const YELLO_TEXT = "text-[#E8B931]";
const MAIN_BG = "bg-white"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContOpen, setIsContOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Profil", href: "/prifil" },
    { name: "Berita", href: "/berutu" },
    { name: "Maps", href: "/gugelmap" },
    { name: "Inventaris", href: "/invensi" },
    { name: "Galeri", href: "/galer" },
    { name: "Kontak", isAction: true, actionType: "contact" },
  ];

  const socialLinks = [
    { href: 'https://whatsapp.com/082249906357', alt: 'WhatsApp', icon: '/wa.png' },
    { href: 'https://instagram.com', alt: 'Instagram', icon: '/ig.png' },
  ];

  const handleActionClick = (type) => {
    if (type === 'contact') {
      setIsContOpen(true);
      setIsBookOpen(false); 
    } else if (type === 'book') {
      setIsBookOpen(true);
      setIsContOpen(false);
    }
    setIsOpen(false); 
  };
  

  return (
    <nav className={`sticky top-0 left-0 right-0 ${HEADER_BG} z-[9999]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="text-white text-3xl font-bold">GAMPLONG</span>
            <span className={`${YELLO_TEXT} text-2xl font-bold`}>IV</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.isAction ? (
                  <button
                    key={item.name}
                    onClick={() => handleActionClick(item.actionType)}
                    className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${YELLO_BG} h-2`}/>
      

      {isOpen && (
        <div className={`md:hidden ${HEADER_BG} border-t border-green-900`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              item.isAction ? (
                <button
                  key={item.name}
                  onClick={() => handleActionClick(item.actionType)}
                  className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}

      {isContOpen && (
        <>
          <div className="fixed inset-0" onClick={() => setIsContOpen(false)} />
          
          <div className="absolute top-16 right-4 w-80 md:w-96 bg-white shadow-2xl rounded-md text-black z-[10000] border border-gray-200 p-6 flex flex-col transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">FIND US</h2>
              <button onClick={() => setIsContOpen(false)} className="text-gray-400 hover:text-black">
                <X size={20} />
              </button>
            </div>
               
            <div className={` ${HEADER_BG} p-4 mb-4 rounded-sm`}>
              <h3 className="font-bold text-xs mb-4 border-b border-white pb-2 uppercase tracking-widest text-center"></h3>
              
              <div className="grid grid-cols-2 gap-6 place-items-center mb-4 p-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <img
                      src={link.icon}
                      alt={link.alt}
                      className="w-10 h-10 object-contain" 
                    />
                  </a>
                ))}
              </div>
                
              <div className="flex justify-between font-bold text-sm mt-4 pt-3 border-t border-white text-white">

              </div>
            </div>
          </div>
        </>
      )}

      {isBookOpen && (
        <>
          <div className="fixed inset-0" onClick={() => setIsBookOpen(false)} />
          
          <div className="absolute top-16 right-4 w-80 md:w-96 bg-white shadow-2xl rounded-md text-black z-[10000] border border-gray-200 p-6 flex flex-col transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">BOOK US THROUGH</h2>
              <button onClick={() => setIsBookOpen(false)} className="text-gray-400 hover:text-black">
                <X size={20} />
              </button>
            </div>
               
            <div className={`${HEADER_BG} p-4 mb-4 rounded-sm`}>
              <h3 className="font-bold text-xs mb-4 border-b border-white pb-2 uppercase tracking-widest text-center"></h3>
              <p className="text-white font-bold mb-2 uppercase tracking-wide ml-2">Airbnb</p>
              <Link
              href= 'https://www.airbnb.ca/rooms/1573861391574619719?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget'
              className="flex items-center bg-white border border-gray-400 rounded-lg p-2 mb-3 shadow-sm">
                  <div className="w-16 h-13 bg-[#ff5a5f] rounded-full overflow-hidden flex items-center justify-center border border-gray-200">
                    <img
                      src= '/bnb.png'
                      className="w-10 h-10 object-contain" 
                    />                 
                  </div>
                  <span className="text-center w-full font-bold text-lg text-black tracking-wide uppercase">Rp 1.500.000 / Night</span>
              </Link>
                
              <div className="flex justify-between font-bold text-sm mt-4 pt-3 border-t border-white text-white"></div>
              
              <p className="text-white mb-2 uppercase tracking-wide ml-2">OR</p>

              <h3 className="font-bold text-xs mb-4 border-b border-white pb-2 uppercase tracking-widest text-center"></h3>
              <p className="text-white font-bold mb-2 uppercase tracking-wide ml-2">Book Directly</p>
              <Link
              href= '/book'
              className="flex items-center bg-white border border-gray-400 rounded-lg p-2 mb-3 shadow-sm">
                  <div className={`w-16 h-13 ${HEADER_BG} rounded-full overflow-hidden flex items-center justify-center`}>
                    <img
                      src= '/wa.png'
                      className="w-7 h-7 object-contain" 
                    />                 
                  </div>
                  <span className="text-center w-full font-bold text-lg text-red-600 tracking-wide uppercase">Rp 1.250.000 / Night</span>
              </Link>
                
              <div className="flex justify-between font-bold text-sm mt-4 pt-3 border-t border-white text-white">

              </div>

            </div>
            
          </div>
        </>
      )}
    </nav>
  );
}