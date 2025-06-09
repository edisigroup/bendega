export function SocialMedia() {
  const socmed = [
    { key: 1, src: "/socmed/socmed-1.png" },
    { key: 2, src: "/socmed/socmed-2.png" },
    { key: 3, src: "/socmed/socmed-3.png" },
    { key: 4, src: "/socmed/socmed-4.png" },
    { key: 5, src: "/socmed/socmed-5.png" },
    { key: 6, src: "/socmed/socmed-6.png" },
    { key: 7, src: "/socmed/socmed-7.png" },
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {socmed.map((eachSocmed) => (
                <div key={eachSocmed.key} className="col-span-1">
                  <a
                    href="https://www.instagram.com/bendega.bali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={eachSocmed.src}
                      alt="socmed"
                      className="w-full h-auto hover:shadow-xl hover:shadow-[#c96c45]/60 hover:-translate-y-2 transition-all duration-300"
                    />
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
