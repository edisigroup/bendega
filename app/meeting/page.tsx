import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SocialMedia } from "../components/social-media";
import Image from "next/image";

export default function Home() {
  const images = [
    { id: 1, src: "/about_us.png" }, // Top-left large image
    { id: 2, src: "/cek4.png" }, // Bottom-right horizontal image (outdoor seating)
    { id: 3, src: "/cek3.png" }, // Bottom-left vertical image (swings)
    { id: 4, src: "/cek2.png" }, // Top-right vertical image
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-20 sm:py-48">
        <div className="w-full mx-auto flex flex-col sm:flex-row sm:justify-center items-center gap-8 sm:gap-20">
          <div className="w-full sm:w-1/2 flex flex-col items-start sm:items-end text-5xl sm:text-7xl">
            <h2 className="font-bold text-black">Bendega</h2>
            <h2 className="font-bold text-black">Bali</h2>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="w-full">
              <p className="text-black/90 text-sm">
                Berdiri sejak tahun 1996 -Bendega selalu konsisten & semangat <br />
                mempromosikan kuliner khas Bali & Nusantara. Terinspirasi dari resep resep 
                legenda dan rumahan yang diwariskan turun temurun dari Sabang sampai 
                Merauke , kami ingin memperkenalkan kekayaan kuliner nusantara. Selama
                bertahun tahun
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full py-20">
        <div className="flex flex-col md:flex-row">
            {/* Top-left image (restaurant interior) */}
            <div className="w-full md:w-2/4"> {/* Adjust width as needed */}
             <div className="mt-8 w-full"/>
              <Image
                key={images[0].id}
                width={800} // Increased width for better resolution on larger image
                height={500} // Adjusted height to maintain aspect ratio for a horizontal image
                src={images[0].src}
                alt="Bendega restaurant interior"
                className="w-full h-[220px] md:h-full object-cover" // Added  for subtle styling
                priority
              />
            </div>
            {/* Top-right image (EAT. DRINK. SHOP LOCAL) */}
            <div className="w-full md:w-1/4 h-fit min-h-full flex items-end"> {/* Adjust width and alignment */}
              <Image
                key={images[1].id}
                width={400} // Adjusted width4 for a vertical image
                height={600} // Adjusted height for a vertical image
                src={images[1].src}
                alt="EAT. DRINK. SHOP LOCAL sign"
                className="w-full h-[220px] md:h-full object-cover "
                priority
              />
            </div>
          </div>
        {/* Bottom Row - Contains the bottom-left swings and bottom-right outdoor seating */}
          <div className="flex flex-col md:flex-row md:justify-end"> {/* Add margin-top for spacing */}
            {/* Bottom-left image (swings) */}
            <div className="w-full md:w-1/4 flex items-start"> {/* Adjust width and alignment */}
              <Image
                key={images[2].id}
                width={400} // Adjusted width for a vertical image
                height={600} // Adjusted height for a vertical image
                src={images[2].src}
                alt="Swings in a garden area"
                className="w-full h-[220px] mt-0 sm:mt-8 md:h-full object-cover "
                priority
              />
            </div>
            {/* Bottom-right image (outdoor seating) */}
            <div className="w-full md:w-2/4 flex justify-end"> {/* Adjust width and alignment */}
              <Image
                key={images[3].id}
                width={800} // Adjusted width for a horizontal image
                height={500} // Adjusted height for a horizontal image
                src={images[3].src}
                alt="Outdoor seating area"
                className="w-full h-[220px] -mt-0 sm:-mt-3 md:h-full object-cover"
                priority
              />
            </div>
          </div>
      </div>

      <SocialMedia />
      <Footer />
    </main>
  );
}