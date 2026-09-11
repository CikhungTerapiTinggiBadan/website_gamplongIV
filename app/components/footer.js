import Link from "next/link";

const HEADER_BG = "bg-[#4E9A73]"; 
const YELLO_BORDER = "border-[#E8B931]";

export default function Footer() {
  return (
    <footer className={`${HEADER_BG} py-8 sm:py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-5xl mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 text-center md:text-left items-start">
          
          {/* DESKRIPSI (Urutan 2 di Mobile, Urutan 1 di Desktop) */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wide">
              Website Resmi Padukuhan Gamplong IV
            </h3>
            <p className="text-xs sm:text-sm text-gray-100 leading-relaxed max-w-sm md:max-w-none">
              Sumber informasi resmi terkait Padukuhan Gamplong IV, termasuk berita, acara, dan informasi penting lainnya.
            </p>
          </div>

          {/* LOGO & JUDUL (Urutan 1 di Mobile, Urutan 2 di Desktop) */}
          <div className="order-1 md:order-2 flex flex-col items-center justify-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center leading-tight">
              PADUKUHAN<br />GAMPLONG IV
            </h3>
            <img 
              src="/sleman.svg" 
              alt="Gamplong IV Logo" 
              className="w-28 sm:w-36 md:w-40 h-auto object-contain transition-transform hover:scale-105" 
            />
          </div>

          {/* KONTAKH DUSUN (Urutan 3 di Mobile & Desktop) */}
          <div className="order-3 md:order-3 text-center md:text-right flex flex-col items-center md:items-end">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wide">
              Kontak Dusun
            </h3>
            <p className="text-xs sm:text-sm mb-2 text-gray-100 max-w-xs md:max-w-none">
              Jl. Gamplong IV, Desa Sumberagung, Kec. Tempel, Kab. Sleman, Yogyakarta 55552
            </p>
            <a 
              href="https://wa.me/6289630539760" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs sm:text-sm mb-2 hover:underline text-gray-100 block transition-all"
            >
              +62 896-3053-9760 (a.n Nurochman)
            </a>
            <a 
              href="mailto:gamplongiv@gmail.com" 
              className="text-xs sm:text-sm mb-2 hover:underline text-gray-100 block transition-all"
            >
              Email: gamplongiv@gmail.com
            </a>
            <a 
              href="https://instagram.com/GamplongIV" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs sm:text-sm hover:underline text-gray-100 block transition-all"
            >
              IG @GamplongIV
            </a>
          </div>

        </div>

        {/* GARIS PEMBATAS */}
        <hr className={`my-8 sm:my-10 ${YELLO_BORDER} border-t-2 opacity-80`} />

        {/* COPYRIGHT & CREDITS */}
        <div className="space-y-2 text-center text-xs sm:text-sm text-gray-200">
          <p>
            &copy; {new Date().getFullYear()} Padukuhan Gamplong IV. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs opacity-90">
            Dibuat dengan{" "}
            <Link 
              href="/admin/login" 
              title="Login Admin"
              className="hover:text-[#E8B931] hover:scale-125 transition-all inline-block font-bold px-0.5 cursor-pointer"
            >
              &lt;3
            </Link>{" "}
            oleh Divisi TI KKN UNY Padukuhan Gamplong IV
          </p>
        </div>
      </div>
    </footer>
  );
}