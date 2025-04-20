import { link } from "fs"
import { TestimonialCard } from "./testimonial-card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Theodora",
      rating: 5,
      date: "February 11, 2025",
      comment: "Tempatnya nyaman ada yang outdoor dan indoor lalu ada tempat untuk bermain anak2 di luar. Restaurant ini berada di daerah Renon.Untuk makanannya bervariasi ada juga seafood dan menu kids. Untuk hari Minggu ada free menu kids dengan syarat yang berlaku.",
      link:"https://maps.app.goo.gl/gsDkcz1rddVLpSWz6",
      initials: "MT",
    },
    {
      name: "Darren Tee",
      rating: 5,
      date: "March 5, 2025",
      comment: "Indonesian food here is amazing. I heard the president visited before, and I can understand why. The place has a simple atmosphere, not too crowded or touristy, but it serves great local cuisine",
      link:"https://maps.app.goo.gl/Bgf7TLQW9QHNhZdK9",
      initials: "DT",
    },
    {
      name: "Ayu Manik",
      rating: 5,
      date: "March 11, 2025",
      comment: "Aku suka bgt sama menu gado gadonya. Suasana nya nyaman staff ramah. Recommende makan bareng keluarga",
      link:"https://maps.app.goo.gl/txsDJXbYQ1JjWcqg9",
      initials: "AM",
    },
  ]

  return (
    <section className="py-12 px-6 md:px-12">
      <h2 className="text-2xl font-bold text-center mb-10">The Trust We've Earned</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            rating={testimonial.rating}
            date={testimonial.date}
            comment={testimonial.comment}
            initials={testimonial.initials}
            link={testimonial.link}
          />
        ))}
      </div>
    </section>
  )
}
