"use client";

import Cuisine from "./cuisine";
import Image from "next/image";
import { Portfolio } from "./portfolio";

export default function Hero({
  isCuisine = true,
  isAbout = true,
}: {
  isCuisine?: boolean;
  isAbout?: boolean;
}) {
  return (
    <>
      <h1 className="text-black text-center text-3xl hidden">BENDEGA BALI</h1>
      <div className="w-full h-[calc(100vh-64px)] flex flex-col sm:flex-row">
        {/* Image 1 */}
        <div className={!isAbout ? "w-full" : "w-full sm:w-1/3 h-full order-2"}>
          <Image
            src={isAbout ? "/assets/asset(20).webp" : "/assets/asset(19).webp"}
            alt="Image 1"
            width={1080}
            height={620}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        {/* Image 2 - hidden on mobile */}
        <div
          className={
            !isAbout ? "hidden" : "hidden sm:block w-1/3 h-full order-1"
          }
        >
          <Image
            src="/assets/asset(16).webp"
            alt="Image 2"
            width={1080}
            height={620}
            className={"w-full h-full object-cover"}
            priority
          />
        </div>

        {/* Image 3 - hidden on mobile */}
        <div
          className={
            !isAbout ? "hidden" : "hidden sm:block w-1/3 h-full order-3"
          }
        >
          <Image
            src="/assets/asset(15).webp"
            alt="Image 3"
            width={1080}
            height={620}
            className={"w-full h-full object-cover"}
            priority
          />
        </div>
      </div>
      <Portfolio />
      {isCuisine && <Cuisine />}
    </>
  );
}
