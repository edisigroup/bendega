import { Navbar } from "./components/navbar"
import { TestimonialsSection } from "./components/testimonials-section"
import { Footer } from "./components/footer"
import Hero from "./components/hero"
import { SocialMedia } from "./components/social-media"
import { Email } from "./components/email"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col !scroll-smooth">
      <Navbar />
      <Hero />
      <Email />
      <TestimonialsSection />
      <SocialMedia />
      <Footer />
    </main>
  )
}
