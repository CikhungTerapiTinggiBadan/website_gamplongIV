"use client"
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { db } from '@/firebase/config'; 
import { doc, getDoc } from 'firebase/firestore';

export default function BookingSystem() {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [fullDates, setFullDates] = useState([]);

  useEffect(() => {
    const fetchFullDates = async () => {
      const docRef = doc(db, "room", "full");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const dates = Object.values(data).map((ts) => ts.toDate().toDateString());
        setFullDates(dates);
      }
    };
    fetchFullDates();
  }, []);

  const isFull = (date) => fullDates.includes(date.toDateString());

  const handleWhatsAppBooking = () => {
    const checkIn = dateRange[0];
    const checkOut = dateRange[1];

    if (!checkIn || !checkOut) return alert("Silakan pilih rentang tanggal dulu!");

    // Format tanggal ke format lokal Indonesia
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const checkInFormatted = checkIn.toLocaleDateString('id-ID', options);
    const checkOutFormatted = checkOut.toLocaleDateString('id-ID', options);

    const phoneNumber = "+6282249906357"; 
    const message = `Hai, saya ingin book Ayasa untuk tanggal ${checkInFormatted} sampai dengan tanggal ${checkOutFormatted}`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
  <div className="bg-white">
    <div className="max-w-5xl mx-auto px-4 py-8">
      <p className="text-xs text-gray-500 mb-2 ">
        Home / <span className="font-semibold text-black">Booking</span>
      </p>

      <h1 className="text-3xl font-bold text-black">Booking</h1>
    </div>

    <div className="max-w-5xl mx-auto px-4 pb-8 pt-4 text-black">
    <section className="mb-16 border-2 border-gray-300 rounded-2xl p-6">

      <h2 className="font-bold text-xl mb-6 text-center">Select Booking Dates</h2>
      <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <Calendar 
            onChange={setDateRange} 
            value={dateRange}
            selectRange={true} 
            tileClassName={({ date, view }) => {
              if (view === 'month' && isFull(date)) return 'full-booking-tile';
            }}
            tileDisabled={({ date }) => isFull(date)} 
            
          />
          <p className="text-sm text-gray-500 mt-2">*Red Dates mean they are fully booked</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
            <p className="text-sm font-medium">Book From :</p>
            <p className="text-lg font-bold text-blue-800 text-center">
              {dateRange[0]?.toLocaleDateString('id-ID')}
            </p>
            <p className="pt-4 text-sm font-medium mt-4">Until :</p>
            <p className="text-lg font-bold text-blue-800 text-center">
              {dateRange[1]?.toLocaleDateString('id-ID')}
            </p>
          </div>

          <button 
            onClick={handleWhatsAppBooking}
            className="w-full py-3 mt-8 mb-10 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Book Now
          </button>
        </div>
      </div>
      <style jsx global>{`
        .full-booking-tile {
          background-color: #fee2e2 !important; /* Merah muda tipis */
          color: #ef4444 !important; /* Teks merah */
          text-decoration: line-through;
          cursor: not-allowed;
          border-radius: 8px;
        }
        .react-calendar__tile--rangeStart, 
        .react-calendar__tile--rangeEnd,
        .react-calendar__tile--active {
          background: #3b82f6 !important; /* Biru untuk pilihan user */
          color: white !important;
          border-radius: 8px;
        }
      `}</style>
    </section>
    </div>
  </div>
  );
}