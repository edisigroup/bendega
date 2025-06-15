"use client";

import { useState } from "react";

export function Email() {
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Formats as 'YYYY-MM-DD'
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: getTodayDate(), 
    time: "",
    guests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    const messageBody = `
        Hello, Bendega!
            Reservation Details:
            - Number of Guests: ${formData.guests}
            - Date: ${formData.date}
            - Time: ${formData.time}
            - Phone: ${formData.phone}
        `;
        const phoneNumber = '';
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageBody)}`;
        window.location.href = whatsappLink;
    e.preventDefault();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative p-4 my-20 w-full flex flex-col justify-center h-[600px] bg-cover bg-center bg-no-repeat bg-[url('/cuisine3.jpg')]">
      <div className="absolute sm:block hidden right-6 h-[680px] sm:w-[280px] lg:w-[420px] bg-[#c96c45] -top-10 rounded-xl p-8">
        <div className="w-full h-full flex flex-col justify-center items-center text-center">
          <span className="text-4xl font-bold text-white">
            Kami Siap Menyambut Anda
          </span>
          <span className="text-base mt-4 text-white">
            Untuk reservasi dan informasi
          </span>
          <span className="font-bold my-10 text-black text-2xl">
            📞 (0361) 249555
          </span>
          <span className="text-base text-white">📍 Bendega</span>
          <span className="text-sm px-8 text-white">
            {" "}
            Dangin Puri Klod, Denpasar Timur, Kota Denpasar, Bali
          </span>
        </div>
      </div>
      <div className="w-full flex justify-start items-center px-4 sm:pl-12">
        <div className="flex flex-col w-full sm:w-1/2 rounded-xl">
          <span className="text-5xl font-bold text-white">
            Reservasi Sekarang
          </span>
          <div className="relative flex py-6 items-center">
            <div className="flex-grow border-t border-white"></div>
            <span className="flex-shrink mx-4 text-sm text-white uppercase bg-amber-600 p-1">
              Tentukan waktu bersantap Anda
            </span>
            <div className="flex-grow border-t border-white"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                id="name"
                type="text"
                placeholder="Nama"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className=" w-full col-span-1 sm:col-span-2 p-3 bg-white placeholder-gray-600 rounded-lg focus:outline-none"
              />
              <input
                id="phone"
                type="tel"
                placeholder="Nomor Telepon"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                className="w-full col-span-1 p-3 bg-white placeholder-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                required
                className="appearance-none w-full bg-white placeholder-gray-600 text-black p-3 rounded-lg focus:outline-none"
              />
              <select
                id="time"
                value={formData.time}
                onChange={(e) => handleInputChange("time", e.target.value)}
                required
                className="appearance-none w-full bg-white placeholder-gray-600 text-black p-3 rounded-lg focus:outline-none"
              >
                <option value="08:00 AM">08:00 AM</option>
                <option value="08:30 AM">08:30 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="09:30 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="13:00 PM">13:00 PM</option>
                <option value="13:30 PM">13:30 PM</option>
                <option value="14:00 PM">14:00 PM</option>
                <option value="14:30 PM">14:30 PM</option>
                <option value="15:00 PM">15:00 PM</option>
                <option value="15:30 PM">15:30 PM</option>
                <option value="16:00 PM">16:00 PM</option>
                <option value="16:30 PM">16:30 PM</option>
                <option value="17:00 PM">17:00 PM</option>
                <option value="17:30 PM">17:30 PM</option>
                <option value="18:00 PM">18:00 PM</option>
                <option value="18:30 PM">18:30 PM</option>
                <option value="19:00 PM">19:00 PM</option>
                <option value="19:30 PM">19:30 PM</option>
                <option value="20:00 PM">20:00 PM</option>
                <option value="20:30 PM">20:30 PM</option>
                <option value="21:00 PM">21:00 PM</option>
              </select>
              <select
                id="guests"
                value={formData.guests}
                onChange={(e) => handleInputChange("guests", e.target.value)}
                required
                className="appearance-none w-full bg-white placeholder-gray-600 text-black p-3 rounded-lg focus:outline-none"
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
                <option value="3">3 Orang</option>
                <option value="4">4 Orang</option>
                <option value="5">5 Orang</option>
                <option value="6">6 Orang</option>
                <option value="7">7 Orang</option>
                <option value="8">8 Orang</option>
                <option value="8+">8+ Orang</option>
              </select>
            </div>

            <div className="grid grid-cols-3 mt-4">
              <button
                type="submit"
                className="col-span-2 sm:col-span-1 w-full bg-[#c96c45] text-white py-2 px-4 rounded-lg font-medium"
              >
                Pesan Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
