import { ChevronRightIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Portfolio() {
  const portfolio = [
    {
      key: 2,
      title: "Rasa yang Menggugah Selera",
      subtitle: "Perayaan kesegaran, disajikan dengan sempurna.",
      src: "/assets/asset(2).jpg",
    },
    {
      key: 1,
      title: "Ketenangan di Sudut Meja",
      subtitle:
        "Makanan yang dibungkus dengan rasa, siap menemani waktu istirahat Anda.",
      src: "/assets/asset(1).jpg",
    },
    {
      key: 3,
      title: "Kaldu dengan Kedalaman Rasa",
      subtitle: "Sup bening yang kaya akan tradisi dan cita rasa halus.",
      src: "/assets/asset(3).jpg",
    },
  ];
  return (
    <>
      <div className="w-full h-full sm:h-20 px-4 sm:px-14 my-12 sm:mb-20">
        <div className="container mx-auto border-l-10 sm:border-l-20 border-l-[#c96c45] h-full flex flex-col sm:flex-row sm:items-center gap-2">
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
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <section className="p-4 sm:py-12 md:pr-12 flex">
          <div className="w-full justify-start flex gap-4">
            {portfolio.map((eachPortfolio, index) => {
              const alwaysVisible = true
              return (
                <div
                  className={`${index > 0 ? "hidden lg:block" : ""}`}
                  key={index}
                >
                  <div className="relative group w-full h-80 min-w-full sm:min-w-68 overflow-hidden rounded-lg">
                    <Image
                      src={eachPortfolio.src}
                      alt="assets"
                      width={1020}
                      height={890}
                      className="w-screen h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />

                    <div
                      className={`absolute bottom-0 left-0 w-full h-36 bg-[#c96c45]/80 text-white text-sm px-4 pb-8 pt-4 transition-all duration-300 
              ${
                alwaysVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
                    >
                      <p className="text-sm font-bold mb-2">
                        {eachPortfolio.title}
                      </p>
                      <span className="text-[10px]">
                        {eachPortfolio.subtitle}
                      </span>
                      <div className="w-full flex gap-2 mt-4">
                        <MapPinIcon className="size-4" />
                        <span className="text-xs">Bendega Bali</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-80 flex items-center ml-4 hidden xl:block rounded-full">
            <Link href={"/galeri"} className="w-full h-full flex items-center">
              <ChevronRightIcon className="size-10 bg-[#c96c45] text-white rounded-full transition duration-300 hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
