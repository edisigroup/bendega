import Image from "next/image";

export function SocialMedia() {
  const socmed = [
    { key: 4, src: "/galeri/galeri(16).jpg" },
    { key: 3, src: "/socmed/socmed-3.png" },
    { key: 1, src: "/socmed/socmed-1.png" },
    { key: 6, src: "/galeri/galeri(18).jpg" },
    { key: 5, src: "/galeri/galeri(17).jpg" },
    { key: 2, src: "/socmed/socmed-2.png" },
    { key: 7, src: "/galeri/galeri(19).jpg" },
    { key: 8, src: "/socmed/socmed-8.png" },
  ];

  return (
    <div className="flex flex-col gap-2">
      <section className="py-12 px-6 md:px-12">
        <h2 className="text-2xl font-bold text-center mb-10">
          Rasakan Suasana & Cita Rasa Bendega Lewat Instagram!
        </h2>

        <div className="w-full flex justify-center">
          <div className="max-w-[1024px] w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border-b border-[#c96c45] pb-4">
              {socmed.map((eachSocmed) => (
                <div key={eachSocmed.key} className="col-span-1">
                  <a
                    href="https://www.instagram.com/bendega.bali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full h-auto overflow-hidden"
                  >
                    {/* Social Media Image */}
                    <Image
                      src={eachSocmed.src}
                      alt="socmed"
                      width={340}
                      height={480}
                      className="w-full h-[320px] transition-all duration-300 group-hover:blur-sm group-hover:shadow-[rgba(0,0,0,0.5)_-10px_10px_20px]"
                    />

                    {/* White Circular Background */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full flex items-center justify-center">
                        <Image
                          width={72}
                          height={72}
                          src="/instagram.png" // Replace with your actual path
                          alt="Instagram"
                          className="size-18 object-contain"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
