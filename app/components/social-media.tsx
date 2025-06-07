export function SocialMedia() {
  const socmed = [
    {key:1, src:"/socmed/socmed-1.png"},
    {key:2, src:"/socmed/socmed-2.png"},
    {key:3, src:"/socmed/socmed-3.png"},
    {key:4, src:"/socmed/socmed-4.png"},
    {key:5, src:"/socmed/socmed-5.png"},
    {key:6, src:"/socmed/socmed-6.png"},
    {key:7, src:"/socmed/socmed-7.png"},
    {key:8, src:"/socmed/socmed-8.png"},
  ]
  return (
    <div className="flex flex-col gap-2">
        <section className="py-12 px-6 md:px-12">
              <h2 className="text-2xl font-bold text-center mb-10">Discover Bendega in Instagram</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                {socmed.map((eachSocmed)=>{
                  return (
                    <div className="col-span-1" key={eachSocmed.key}>
                      <a href="https://www.instagram.com/bendega.bali">
                        <img                     
                        src={eachSocmed.src}
                        alt="socmed"
                        width={252}
                        height={336}
                        className=" min-w-full w-fit rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        />
                      </a>
                    </div>
                  )
                })}
              </div>
        </section>
    </div>
  )
}
