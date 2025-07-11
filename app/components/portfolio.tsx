"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { PortfolioCard } from "./portofolioCard";

export function Portfolio() {
  const portfolio = [
    {
      key: 2,
      title: "Rasa yang Menggugah Selera",
      subtitle: "Perayaan kesegaran, disajikan dengan sempurna.",
      src: "/assets/asset(2).webp",
    },
    {
      key: 1,
      title: "Ketenangan di Sudut Meja",
      subtitle:
        "Makanan yang dibungkus dengan rasa, siap menemani waktu istirahat Anda.",
      src: "/assets/asset(1).webp",
    },
    {
      key: 3,
      title: "Kaldu dengan Kedalaman Rasa",
      subtitle: "Sup bening yang kaya akan tradisi dan cita rasa halus.",
      src: "/assets/asset(3).webp",
    },
  ];

  // Top section animation
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { margin: "-160px" });
  const sectionControls = useAnimation();

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start("visible");
    } else {
      sectionControls.start("hidden");
    }
  }, [sectionInView]);

  // Chevron animation
  const chevronRef = useRef(null);
  const chevronInView = useInView(chevronRef, { margin: "-160px" });
  const chevronControls = useAnimation();

  useEffect(() => {
    if (chevronInView) {
      chevronControls.start("visible");
    } else {
      chevronControls.start("hidden");
    }
  }, [chevronInView]);

  return (
    <>
      {/* TOP SECTION */}
      <div className="w-full h-full sm:h-20 px-4 sm:px-14 my-12 sm:mb-20">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={sectionControls}
          variants={{
            hidden: { opacity: 0, x: -90 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="container mx-auto border-l-10 sm:border-l-20 border-l-[#c96c45] h-full flex flex-col sm:flex-row sm:items-center gap-2"
        >
          <div className="w-full sm:w-1/2 pl-4">
            <p className="text-2xl sm:text-3xl text-[#c96c45] font-semibold">
              Warisan Rasa, Sentuhan Modern
            </p>
          </div>
          <div className="w-full sm:w-1/2 max-w-md px-4 sm:pl-0">
            <p className="text-black/90 text-sm">
              Bendega mengkombinasikan resep kuliner tradisional terbaik dengan
              bahan baku yang fresh dan “locally sourced”, diolah dan disajikan
              secara modern tanpa mengurangi rasa asli & aunthetic.
            </p>
          </div>
        </motion.div>
      </div>

      {/* PORTFOLIO + CHEVRON */}
      <div className="flex flex-col gap-2">
        <section className="p-4 sm:py-12 md:pr-12 flex flex-wrap gap-4">
          {portfolio.map((item, i) => (
            <PortfolioCard
              key={item.key}
              title={item.title}
              subtitle={item.subtitle}
              src={item.src}
              delay={i * 0.2}
              className={i > 0 ? "hidden lg:block" : ""}
            />
          ))}

          {/* Chevron Link */}
          <motion.div
            ref={chevronRef}
            initial="hidden"
            animate={chevronControls}
            variants={{
              hidden: { opacity: 0, y: 90 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            className="w-full sm:w-auto h-80 xl:flex items-center ml-4 hidden rounded-full"
          >
            <Link href={"/galeri"} className="w-full h-full flex items-center">
              <ChevronRightIcon className="size-10 bg-[#c96c45] text-white rounded-full transition duration-300 hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}
