import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Cuisine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-120px" }); // triggers slightly before entering
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset when not in view
    }
  }, [isInView, controls]);

  return (
    <section className="bg-white relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="w-full"
          >
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
                  className="mt-4 bg-[#c26545] rounded-full hover:shadow-lg hover:bg-[#c26545] hover:shadow-[#c26545] text-white font-normal uppercase border-none"
                >
                  Pesan
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="w-full"
          >
            <div className="relative w-full h-fit sm:rounded-xl overflow-hidden flex justify-center">
              <Image
                width={320}
                height={420}
                src="/assets/asset(10).webp"
                alt="Bendega restaurant interior"
                className="w-full md:max-w-[320px] h-[420px] object-fill rounded-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
