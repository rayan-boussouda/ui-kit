import { cn } from '@/lib/utils'
import { Badge } from '@/primitives/Badge'
import { GenreTag } from '@/patterns/GenreTag'
import { RatingStars } from '@/patterns/RatingStars'
import { ActionButton } from '@/primitives/ActionButton/ActionButton'

export interface MovieCardProps {
  title: string
  id: number
  posterUrl?: string
  rating?: number
  myRating?: number
  onRate?: (value: number) => void
  genres?: string[]
  year?: number
  overview?: string
  onClick?: () => void
  className?: string
  onEdit?: (id: number) => void
  onDelete?: (id: number) => void
}

export const MovieCard = ({
  title,
  id,
  posterUrl,
  rating,
  myRating,
  onRate,
  genres = [],
  year,
  overview,
  onClick,
  className,
  onEdit,
  onDelete,
}: MovieCardProps) => (
  <div
    className={cn(
      'group relative flex flex-col overflow-hidden rounded-xl bg-neutral-900 shadow-lg',
      'transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl',
      onClick && 'cursor-pointer',
      className
    )}
    onClick={onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
  >
    <div className="relative h-48 overflow-hidden bg-neutral-800">
      {posterUrl ? (
        <img
          src={posterUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-neutral-600">
          <FilmIcon />
        </div>
      )}
      {rating !== undefined && (
        <div className="absolute top-2 right-2">
          <Badge className="border-0 bg-black/70 text-yellow-400 backdrop-blur-sm">
            ★ {rating.toFixed(1)}
          </Badge>
        </div>
      )}

      {(onEdit || onDelete) && (
        <div className="absolute top-2 left-2 flex gap-1" onClick={(e) => e.stopPropagation()}>
          {onEdit && <ActionButton variant="edit" size={2} onClick={() => onEdit(id)} />}
          {onDelete && <ActionButton variant="delete" size={2} onClick={() => onDelete(id)} />}
        </div>
      )}
    </div>

    <div className="flex flex-col gap-2 p-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-white">{title}</h3>
        {year && <span className="shrink-0 text-xs text-neutral-400">{year}</span>}
      </div>

      {rating !== undefined && <RatingStars value={rating} size="sm" readonly />}

      {onRate !== undefined && (
        <div className="flex flex-col gap-0.5" onClick={(e) => e.stopPropagation()}>
          <span className="text-xs text-neutral-500">My Rating</span>
          <RatingStars
            value={myRating !== undefined ? myRating * 2 : 0}
            size="sm"
            readonly={false}
            onChange={(v) => onRate(Math.round((v / 10) * 5))}
          />
        </div>
      )}

      {overview && (
        <p className="line-clamp-2 text-xs leading-relaxed text-neutral-400">{overview}</p>
      )}

      {genres.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {genres.slice(0, 3).map((g) => (
            <GenreTag
              key={g}
              name={g}
              className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
            />
          ))}
        </div>
      )}
    </div>
  </div>
)

const FilmIcon = () => (
  <svg
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
)

MovieCard.displayName = 'MovieCard'
