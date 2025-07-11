// PortfolioCard.tsx
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function PortfolioCard({
  title,
  subtitle,
  src,
  delay = 0,
  className = "",
}: {
  title: string;
  subtitle: string;
  src: string;
  delay: number;
  className: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-120px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8 + delay,
            ease: "easeOut",
          },
        },
      }}
      className={`w-full sm:w-80 ${className}`}
    >
      <div className="relative group h-80 overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={title}
          width={1020}
          height={890}
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full h-36 bg-[#c96c45]/80 text-white text-sm px-4 pb-8 pt-4">
          <p className="text-sm font-bold mb-2">{title}</p>
          <span className="text-[10px]">{subtitle}</span>
          <div className="w-full flex gap-2 mt-4">
            <MapPinIcon className="size-4" />
            <span className="text-xs">Bendega Bali</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
