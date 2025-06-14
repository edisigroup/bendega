import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import Image from "next/image";

export default function Galeri() {
  const images = [
    { id: 1, src: "/galeri/galeri (1).png" }, // Top-left large image
    { id: 2, src: "/galeri/galeri (2).png" }, // Bottom-right horizontal image (outdoor seating)
    { id: 3, src: "/galeri/galeri (3).png" }, // Bottom-left vertical image (swings)
    { id: 4, src: "/galeri/galeri (4).png" }, // Top-right vertical image,
    { id: 5, src: "/galeri/galeri (5).png" }, // Top-left large image
    { id: 6, src: "/galeri/galeri (6).png" }, // Bottom-right horizontal image (outdoor seating)
    { id: 7, src: "/galeri/galeri (7).png" }, // Bottom-left vertical image (swings)
    { id: 8, src: "/galeri/galeri (8).png" },
    { id: 9, src: "/galeri/galeri (9).png" }, // Top-left large image
    { id: 10, src: "/galeri/galeri (10).png" }, // Bottom-right horizontal image (outdoor seating)
    { id: 11, src: "/galeri/galeri (11).png" }, // Bottom-left vertical image (swings)
    { id: 12, src: "/galeri/galeri (12).png" },
    { id: 13, src: "/galeri/galeri (13).png" },
    { id: 14, src: "/galeri/galeri (14).png" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative z-30">
        <Navbar isTransparent={true} />
      </div>

      <div className="relative w-full h-screen">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/galeri/galeri(10).png')] z-0" />
        {/* Gradient overlay (behind Navbar) */}4
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#c96c45]/60 to-[#c96c45]/40 pointer-events-none z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-30">
          <h2 className="uppercase text-6xl sm:text-8xl">Bendega</h2>
          <h2 className="text-base tracking-wide">CITA RASA ASLI INDONESIA</h2>
        </div>
      </div>
      <div className="w-full h-[420px] mx-auto flex items-center justify-center">
        <div className="w-full h-full md:w-1/3 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center space-y-6 px-4 md:px-12">
            <p className="text-black/90 text-sm">
              Kami percaya bahwa makanan adalah bahasa cinta Indonesia. Di
              Bendega, setiap masakan diracik dengan rasa rumahan, penuh rempah
              dan cerita. Kami mempersembahkan berbagai sajian tradisional dari
              seluruh nusantara dengan rasa autentik, bahan lokal terbaik, dan
              sentuhan khas.
            </p>
            <Link href="/">
            <Button
              variant="secondary"
              size="lg"
              className="bg-[#c26545] hover:shadow-lg hover:bg-[#c26545] hover:shadow-[#c26545] text-white font-normal uppercase border-none"
            >
              Hubungi Kami
            </Button>
            </Link>
          </div>
        </div>
        <div className="hidden w-full h-full md:w-2/3 md:flex flex-col items-center justify-center text-2xl md:text-6xl bg-[#c26545] px-4 md:px-6">
          <h2 className="text-white">by EDISI GROUP</h2>
        </div>
      </div>

      {/* Image Section 1*/}
      <div className="w-full h-[480px] flex">
        <div className="w-1/2 sm:w-2/3 h-full">
          <Image
            width={400}
            height={600}
            src={images[6].src}
            alt="Swings in a garden area"
            className="w-full h-[480px] object-cover py-1 pr-1"
            priority
          />
        </div>
        <div className="w-1/2 sm:w-1/3 h-full flex flex-col">
          <Image
            width={400}
            height={240}
            src={images[7].src}
            alt="Swings in a garden area"
            className="w-full h-1/2 object-cover pt-1 pb-1 pr-1"
            priority
          />
          <Image
            width={400}
            height={240}
            src={images[5].src}
            alt="Swings in a garden area"
            className="w-full h-1/2 object-cover pb-1 pr-1"
            priority
          />
        </div>
      </div>
      {/* Image Section 2*/}
      <div className="w-full h-[480px] flex">
        <div className="w-1/2 sm:w-1/3 h-full">
          <Image
            width={400}
            height={600}
            src={images[10].src}
            alt="Swings in a garden area"
            className="w-full h-1/2 object-cover pl-1 pb-1"
            priority
          />
          <Image
            width={400}
            height={240}
            src={images[12].src}
            alt="Swings in a garden area"
            className="w-full h-1/2 object-cover pl-1 pb-1"
            priority
          />
        </div>
        <div className="w-1/2 sm:w-2/3 h-full flex flex-col">
          <Image
            width={400}
            height={240}
            src={images[11].src}
            alt="Swings in a garden area"
            className="w-full h-full object-cover pl-1 pb-1"
            priority
          />
        </div>
      </div>
      {/* Image Section 3 */}
      <div className="w-full h-[480px] flex flex-col sm:flex-row">
        <div className="w-full h-[480px]">
          <Image
            width={400}
            height={600}
            src={images[1].src}
            alt="Swings in a garden area"
            className="w-full h-full object-cover pb-1"
            priority
          />
        </div>
        <div className="w-full h-[480px] hidden md:block">
          <Image
            width={400}
            height={600}
            src={images[2].src}
            alt="Swings in a garden area"
            className="w-full h-full object-cover pb-1"
            priority
          />
        </div>
        <div className="w-full h-[480px] hidden sm:block">
          <Image
            width={400}
            height={240}
            src={images[3].src}
            alt="Swings in a garden area"
            className="w-full h-full object-cover pb-1 pr-1"
            priority
          />
        </div>
      </div>
      {/* Image Section 4 */}
      <div className="w-full h-[600px] flex">
        <div className="w-1/2 sm:w-2/3 h-full">
          <Image
            width={400}
            height={600}
            src={images[13].src}
            alt="Swings in a garden area"
            className="w-full h-full object-cover px-1"
            priority
          />          
        </div>
        <div className="w-1/2 sm:w-1/3 h-full flex flex-col">
        <Image
            width={400}
            height={240}
            src={images[4].src}
            alt="Swings in a garden area"
            className="w-full h-1/2 object-cover pb-1"
            priority
          />
          <Image
            width={400}
            height={240}
            src={images[0].src}
            alt="Swings in a garden area"
            className="w-full h-full object-cover "
            priority
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
