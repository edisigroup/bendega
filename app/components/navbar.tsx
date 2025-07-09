"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Menu", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  // { label: "Meeting", href: "/meeting" },
  { label: "Galeri", href: "/galeri" },
]

export function Navbar({isTransparent=false}:{isTransparent?:boolean}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <nav className={`${isTransparent===true?"bg-[#c96c45] sm:bg-transparent absolute w-full":"relative bg-[#c96c45]"} text-white py-4 px-6 md:px-12`}>
      <div className="flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl italic">
          <span className="text-white">Bendega</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-white hover:text-white/80 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute left-0 right-0 top-full bg-[#c96c45] z-50 shadow-lg md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white hover:text-white/80 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
