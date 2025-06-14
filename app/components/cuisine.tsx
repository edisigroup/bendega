import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cuisine() {
    return (
        <section className="bg-white relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold text-black">Cita Rasa Kuliner Kami</h2>
              <p className="text-black/90 text-base sm:text-lg">
                Resep lokal kuliner nusantara yang <br/>
                terinspirasi dari traditional street food dengan
                rasa authentic disajikan secara modern.
              </p>
              <Button variant="secondary" className="bg-[#c26545] hover:bg-[#b55a3b] text-white font-normal uppercase border-none">
                Pesan
              </Button>
            </div>
            <div className="relative w-full h-fit sm:rounded-xl overflow-hidden">
              <Image
                width={320}
                height={420}
                src="/pura-2.png"
                alt="Bendega restaurant interior"
                className="w-full md:w-auto md:ml-24 h-[420px] object-fill sm:object-cover sm:rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  }