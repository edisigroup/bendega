import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SocialMedia } from "../components/social-media";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start space-y-6">
            <h2 className="text-4xl font-bold text-black">Tentang Kami</h2>
            <p className="text-black/90 text-base">
              {`Berdiri sejak tahun 1996 -Bendega selalu konsisten & semangat
                mempromosikan kuliner khas Bali & Nusantara. Terinspirasi dari resep resep
                legenda dan rumahan yang diwariskan turun temurun dari Sabang sampai
                Merauke , kami ingin memperkenalkan kekayaan kuliner nusantara. Selama
                bertahun tahun`}
            </p>
            <p className="text-black/90 text-base">
              {`Bendega mengkombinasikan resep kuliner tradisional terbaik dengan bahan
                    baku yang fresh dan “locally sourced”, diolah dan disajikan secara modern tanpa
                    mengurangi rasa asli & aunthetic. Melalui inovasi terus menerus & adaptasi ,
                    Bendega selalu menyajikan pilihan kuliner Nusantara terbaik agar dapat
                    dinikmati dari generasi ke generasi
                    `}
            </p>
          </div>
          <Image
            width={1080}
            height={620}
            src={`/assets/asset(17).jpg`}
            alt="Bendega restaurant interior"
            className={`w-full h-full rounded-full object-cover object-center`}
            priority
          />
        </div>
      </div>
      <Image
        width={1080}
        height={620}
        src={`/assets/asset(19).jpg`}
        alt="Bendega restaurant interior"
        className={`w-full h-[420px] object-cover object-center`}
        priority
      />
      <SocialMedia />
      <Footer />
    </main>
  );
}
