import Link from "next/link"
// import { Facebook, Instagram, Twitter } from "lucide-react"
import {  Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white pt-12 pb-6 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="font-serif text-2xl italic text-[#c96c45]">
            bendega
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Berdiri sejak tahun 1996, Bendega adalah kombinasi & perpaduan mempersembahkan kuliner Arak Bali &
            Nusantara.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Tempatini dari masa hingga sekarang dan terus berkembang dari Sabang sampai Merauke.
          </p>
        </div>

        <div className="col-span-1">
          <h3 className="font-medium mb-4">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/tentang-kami">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/meeting">Meeting</Link>
            </li>
            <li>
              <Link href="/galeri">Galeri</Link>
            </li>
            <li>
              <Link href="/lokasi">Lokasi</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-medium mb-4">Social Media</h3>
          <div className="mt-4 flex space-x-4">
            <Link href="https://www.instagram.com/bendega.bali" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-[#c96c45]" />
            </Link>
            {/* <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-[#c96c45]" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-[#c96c45]" />
            </Link> */}
          </div>
        </div>        
      </div>
      <div className="w-full">
          <h3 className="font-medium mb-4">Lokasi</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2601070104856!2d115.22556687417054!3d-8.666795188206313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2408c4dfd9f85%3A0x2d0ee0e62af3d942!2sBendega%20Restaurant!5e0!3m2!1sen!2sid!4v1745166218827!5m2!1sen!2sid" 
          width="300" 
          height="260" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          ></iframe>
      </div>
      <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <p>© 2025 Bendega Bali. All Rights Reserved</p>
      </div>
    </footer>
  )
}
