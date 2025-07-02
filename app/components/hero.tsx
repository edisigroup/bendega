"use client";

import Cuisine from "./cuisine";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({
  isCuisine = true,
  isAbout = true,
}: {
  isCuisine?: boolean;
  isAbout?: boolean;
}) {
  return (
    <>
      <Image
        width={1080}
        height={620}
        src={`${isAbout ? "/hero.jpg" : "/chef.png"}`}
        alt="Bendega restaurant interior"
        className={`w-full h-full sm:h-[calc(100vh-64px)]`}
        priority
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }} // Start lower and invisible
        animate={{ opacity: 1, y: 0 }} // End at original position and visible
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        {isCuisine && <Cuisine />}
      </motion.div>
    </>
  );
}
