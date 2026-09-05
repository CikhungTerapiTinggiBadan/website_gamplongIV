import './globals.css';
import { Poppins } from 'next/font/google'; 
import Navbar from './components/navbar'; 
import Footer from './components/footer'; 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], 
  variable: '--font-poppins', 
});

const MAIN_BG = "bg-white"; 

export const metadata = {
  title: "Gamplong IV",
  description: "Website Gamplong IV",
};

const YELLO_BG = "bg-[#E8B931]";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`min-h-screen ${MAIN_BG} font-[var(--font-poppins)]`}>
        <Navbar />
        
        <div>
          {children}
        </div>
        
        <div className={`${YELLO_BG} h-2`}/>
        <Footer />
      </body>
    </html>
  );
}