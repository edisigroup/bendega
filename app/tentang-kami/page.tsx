"use client";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SocialMedia } from "../components/social-media";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Home() {
  // TEXT LEFT
  const textRef = useRef(null);
  const textInView = useInView(textRef, { margin: "-120px" });
  const textControls = useAnimation();

  useEffect(() => {
    if (textInView) textControls.start("visible");
    else textControls.start("hidden");
  }, [textInView]);

  // IMAGE BOTTOM 1
  const image1Ref = useRef(null);
  const image1InView = useInView(image1Ref, { margin: "-120px" });
  const image1Controls = useAnimation();

  useEffect(() => {
    if (image1InView) image1Controls.start("visible");
    else image1Controls.start("hidden");
  }, [image1InView]);

  // IMAGE BOTTOM 2
  const image2Ref = useRef(null);
  const image2InView = useInView(image2Ref, { margin: "-120px" });
  const image2Controls = useAnimation();

  useEffect(() => {
    if (image2InView) image2Controls.start("visible");
    else image2Controls.start("hidden");
  }, [image2InView]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* TEXT */}
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textControls}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="w-full"
          >
            <div className="flex flex-col items-start space-y-6">
              <h2 className="text-4xl font-bold text-black">Tentang Kami</h2>
              <p className="text-black/90 text-base">
                {`Berdiri sejak tahun 1996 - Bendega selalu konsisten & semangat
                mempromosikan kuliner khas Bali & Nusantara. Terinspirasi dari resep-resep
                legenda dan rumahan yang diwariskan turun temurun dari Sabang sampai
                Merauke, kami ingin memperkenalkan kekayaan kuliner nusantara.`}
              </p>
              <p className="text-black/90 text-base">
                {`Bendega mengkombinasikan resep kuliner tradisional terbaik dengan bahan
                baku yang fresh dan “locally sourced”, diolah dan disajikan secara modern tanpa
                mengurangi rasa asli & authentic. Melalui inovasi terus menerus & adaptasi,
                Bendega selalu menyajikan pilihan kuliner Nusantara terbaik agar dapat
                dinikmati dari generasi ke generasi.`}
              </p>
            </div>
          </motion.div>

          {/* IMAGE 1 */}
          <motion.div
            ref={image1Ref}
            initial="hidden"
            animate={image1Controls}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="w-full"
          >
            <Image
              width={1080}
              height={620}
              src={`/assets/asset(17).webp`}
              alt="Bendega restaurant interior"
              className="w-full h-full rounded-full object-cover object-center"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* IMAGE 2 */}
      <motion.div
        ref={image2Ref}
        initial="hidden"
        animate={image2Controls}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        className="w-full"
      >
        <Image
          width={1080}
          height={620}
          src={`/assets/asset(19).webp`}
          alt="Bendega restaurant"
          className="w-full h-[460px] object-cover object-center"
          priority
        />
      </motion.div>

      <SocialMedia />
      <Footer />
    </main>
  );
}
