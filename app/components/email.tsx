"use client";

import Link from "next/link";
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
    time: "08:00 AM",
    guests: "1",
    location: "Bendega Renon",
  });

  let phoneNumber = "+6281227014734";
  const handleSubmit = (e: React.FormEvent) => {
    if(formData.location==="Bendega Renon"){phoneNumber="+6287764078434"}
    if(formData.location==="Bendega Jimbaran"){phoneNumber="+6281246032899"}
    const messageBody = `
        Hello, Bendega!
            Reservation Details:
            - Name: ${formData.name}
            - Number of Guests: ${formData.guests}
            - Date: ${formData.date}
            - Time: ${formData.time}
            - Phone: ${formData.phone}
        `;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      messageBody
    )}`;
    window.open(whatsappLink, "_blank")?.focus();
    e.preventDefault();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="select-none relative p-4 my-20 w-full flex flex-col justify-center h-[680px] bg-cover bg-center bg-no-repeat bg-[url('/galeri/galeri(24).jpeg')]">
      <div className="absolute sm:block hidden right-6 h-[680px] sm:w-[280px] lg:w-[420px] bg-[#c96c45] -top-10 rounded-xl p-8">
        <div className="w-full h-full flex flex-col justify-center items-center text-center">
          <span className="text-4xl font-bold text-white">
            Kami Siap Menyambut Anda
          </span>
          <span className="text-base mt-4 text-white">
            Untuk reservasi dan informasi
          </span>
          {formData.location === "Bendega Renon" && (
            <Link href={"https://g.co/kgs/twJDomz"} className="flex flex-col">
              <span className="font-bold my-10 text-black text-2xl">
                📞 087764078434
              </span>
              <span className="text-base text-white">📍 Bendega Renon</span>
              <span className="text-sm px-8 text-white">
                {" "}
                Jl. Cok Agung Tresna No.37, Dangin Puri Klod, Kec. Denpasar Tim., Kota Denpasar, Bali 80234
              </span>
            </Link>
          )}
          {formData.location === "Bendega Jimbaran" && (
            <Link href={"https://g.co/kgs/qEap4Ja"} className="flex flex-col">
              <span className="font-bold my-10 text-black text-2xl">
                📞 081246032899
              </span>
              <span className="text-base text-white">📍 Bendega Jimbaran</span>
              <span className="text-sm px-8 text-white">
                {" "}
                Jl. Raya Kampus Unud No.89, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80361
              </span>
            </Link>
          )}
          {formData.location === "Meeting/Private Function/Event" && (
            <>
              <span className="font-bold my-10 text-black text-2xl">
                📞 (0361) 249555
              </span>
              <span className="text-base text-white">📍 Meeting/Private Function/Event</span>
            </>
          )}
        </div>
      </div>
      <div className="w-full flex justify-start items-center px-4 sm:pl-12">
        <div className="flex flex-col w-full sm:w-1/2 rounded-xl">
          <span className="text-4xl md:text-5xl font-bold text-white">
            Reservasi Sekarang
          </span>
          <div className="relative flex py-6 items-center">
            <div className="flex-grow border-t border-white"></div>
            <span className="flex-shrink sm:mx-4 text-sm text-white uppercase bg-amber-600 p-1">
              Tentukan waktu bersantap Anda
            </span>
            <div className="flex-grow border-t border-white"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <select
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              required
              aria-label="Lokasi"
              className="mb-4 appearance-none w-full bg-white placeholder-gray-600 text-black p-3 rounded-lg focus:outline-none"
            >
              <option value="Bendega Renon">Bendega Renon</option>
              <option value="Bendega Jimbaran">Bendega Jimbaran</option>
              <option value="Meeting/Private Function/Event">
                Meeting/Private Function/Event
              </option>
            </select>
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
                className="col-span-2 sm:col-span-1 w-full bg-[#c96c45] hover:bg-[#c96c45]/80 cursor-pointer text-white py-2 px-4 rounded-lg font-medium"
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
