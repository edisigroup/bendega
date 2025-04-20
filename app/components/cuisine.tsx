import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cuisine() {
    return (
        <section className="bg-white relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start space-y-6">
              <h2 className="text-4xl font-bold text-black">Our Cuisine</h2>
              <p className="text-black/90 text-lg">
                Resep lokal kuliner nusantara yang terinspirasi dari traditional street food dengan rasa authentic
                disajikan secara modern.
              </p>
              <Button variant="secondary" className="bg-[#c26545] hover:bg-[#b55a3b] text-white font-normal uppercase border-none">
                Pesan
              </Button>
            </div>
            <div className="relative w-full h-[400px] rounded-md overflow-hidden">
              <Image
                width={320}
                height={400}
                src="/pura.png"
                alt="Bendega restaurant interior"
                className="md:ml-24 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  }