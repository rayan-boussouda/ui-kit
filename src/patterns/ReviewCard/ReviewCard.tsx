import { cn } from '@/lib/utils'
import { Avatar } from '@/primitives/Avatar'
import { RatingStars } from '@/patterns/RatingStars'

export interface ReviewCardProps {
  author: string
  avatarUrl?: string
  avatarInitials?: string
  rating?: number
  content: string
  date?: string
  movieTitle?: string
  className?: string
}

export const ReviewCard = ({
  author,
  avatarUrl,
  avatarInitials,
  rating,
  content,
  date,
  movieTitle,
  className,
}: ReviewCardProps) => (
  <div
    className={cn(
      'flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm',
      className
    )}
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <Avatar
          src={avatarUrl}
          initials={avatarInitials}
          alt={author}
          size="sm"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-neutral-900">{author}</span>
          {movieTitle && (
            <span className="text-xs text-neutral-500">{movieTitle}</span>
          )}
        </div>
      </div>
      {date && <span className="shrink-0 text-xs text-neutral-400">{date}</span>}
    </div>

    {rating !== undefined && <RatingStars value={rating} size="sm" readonly />}

    <p className="text-sm leading-relaxed text-neutral-700">{content}</p>
  </div>
)

ReviewCard.displayName = 'ReviewCard'
