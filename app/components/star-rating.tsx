import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  className?: string
}

export function StarRating({ rating, maxRating = 5, size = "md", className }: StarRatingProps) {
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1)

  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  const starSize = sizeClasses[size]

  return (
    <div className={cn("flex", className)}>
      {stars.map((star) => (
        <Star key={star} className={cn(starSize, "text-gray-300", star <= rating && "text-amber-500 fill-amber-500")} />
      ))}
    </div>
  )
}
