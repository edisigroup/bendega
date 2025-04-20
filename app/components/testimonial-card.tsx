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
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium text-sm">{name}</h4>
          <div className="flex items-center gap-2">
            <StarRating rating={rating} size="sm" />
            <span className="text-xs text-gray-500">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700">{comment}</p>
      <a href={link} target="blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:underline">
        Read more
      </a>
    </div>
  )
}
