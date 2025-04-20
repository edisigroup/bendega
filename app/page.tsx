import { Navbar } from "./components/navbar"
import { TestimonialsSection } from "./components/testimonials-section"
import { Footer } from "./components/footer"
import Hero from "./components/hero"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
