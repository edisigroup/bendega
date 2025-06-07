export function Portfolio() {
  const portfolio = [
    {key:1, src:"/portfolio/portfolio-1.png"},
    {key:2, src:"/portfolio/portfolio-2.png"},
    {key:3, src:"/portfolio/portfolio-3.png"},
  ]
  return (
    <div className="flex flex-col gap-2">
        <section className="py-12 px-6 md:px-12 bg-[#CB6743]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {portfolio.map((eachPortfolio)=>{
                  return (
                    <div className="col-span-1" key={eachPortfolio.key}>
                        <img                     
                        src={eachPortfolio.src}
                        alt="socmed"
                        width={64}
                        height={96}
                        className="min-w-full w-28 h-96 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        />
                    </div>
                  )
                })}
              </div>
        </section>
    </div>
  )
}
