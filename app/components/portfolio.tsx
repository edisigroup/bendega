import Image from "next/image";

export function Portfolio() {
  const portfolio = [
    {key:1, src:"/galeri/galeri(24).jpeg"},
    {key:2, src:"/galeri/galeri(22).jpg"},
    {key:3, src:"/galeri/galeri(16).jpg"},
  ]
  return (
    <div className="flex flex-col gap-2">
        <section className="p-4 sm:py-12 md:px-12 bg-gradient-to-br from-[#CB6743] to-orange-400">
              <div className="w-full justify-center flex gap-0 lg:gap-5">
                {portfolio.map((eachPortfolio)=>{
                  return (
                    <div className={`${eachPortfolio.key>1 && "hidden lg:block"}`} key={eachPortfolio.key}>
                        <Image                     
                        src={eachPortfolio.src}
                        alt="socmed"
                        width={1020}
                        height={890}
                        className={`w-full min-w-[280px] object-cover h-[320px] hover:shadow-xl hover:scale-105 transition-all duration-300`}
                        />
                    </div>
                  )
                })}
              </div>
        </section>
    </div>
  )
}
