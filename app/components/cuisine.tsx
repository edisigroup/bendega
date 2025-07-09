import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Cuisine() {
  return (
    <section className="bg-white relative py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }} // Start lower and invisible
          animate={{ opacity: 1, y: 0 }} // End at original position and visible
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full max-w-md md:mx-auto space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold text-black">
                Cita Rasa Kuliner Kami
              </h2>
              <p className="text-black/90 text-base">
                Resep lokal kuliner nusantara yang terinspirasi dari traditional
                street food dengan rasa authentic disajikan secara modern.
              </p>
              <Link
                href={`https://api.whatsapp.com/send?phone=${"+6281227014734"}&text=${encodeURIComponent(
                  "Halo! Saya ingin pesan..."
                )}`}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-[#c26545] rounded-full hover:shadow-lg hover:bg-[#c26545] hover:shadow-[#c26545] text-white font-normal uppercase border-none"
                >
                  Pesan
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-fit sm:rounded-xl overflow-hidden flex justify-center">
              <Image
                width={320}
                height={420}
                src="/assets/asset(10).jpg"
                alt="Bendega restaurant interior"
                className="w-full md:max-w-[320px] h-[420px] object-fill rounded-xl"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
