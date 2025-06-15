import Cuisine from "./cuisine";
import Image from "next/image";

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
      {isCuisine && <Cuisine />}
    </>
  );
}
