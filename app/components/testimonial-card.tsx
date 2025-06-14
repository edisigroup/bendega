import { StarRating } from "./star-rating"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  name: string
  rating: number
  date: string
  comment: string
  avatarSrc?: string
  initials: string
  link:string
}

export function TestimonialCard({ name, rating, link, date, comment, avatarSrc, initials }: TestimonialCardProps) {
  return (
    <div className={`${initials==="DT" &&"bg-gradient-to-r from-[#CB6743] to-orange-400 sm:bg-none text-white sm:text-black shadow-lg sm:shadow-none"} text-black hover:text-white cursor-pointer flex flex-col gap-2 border hover:border-none hover:shadow-lg hover:shadow-[#CB6743] hover:-translate-y-2 hover:text-white hover:bg-gradient-to-r from-[#CB6743] to-orange-400 duration-200 transition all p-4 rounded-lg`}>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
          <AvatarFallback className="bg-[#CB6743]">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium text-sm">{name}</h4>
          <div className="flex items-center gap-2">
            <StarRating rating={rating} size="sm" />
            <span className="text-xs">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-sm">{comment}</p>
      <a href={link} target="blank" rel="noopener noreferrer" className="text-xs hover:underline">
        Lebih lengkap...
      </a>
    </div>
  )
}
