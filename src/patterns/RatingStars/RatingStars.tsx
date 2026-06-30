import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface RatingStarsProps {
  value: number
  max?: number
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
  onChange?: (value: number) => void
  className?: string
}

const starSizes = { sm: 'h-3 w-3', md: 'h-4 w-4', lg: 'h-5 w-5' }

export const RatingStars = ({
  value,
  max = 5,
  readonly = true,
  size = 'md',
  onChange,
  className,
}: RatingStarsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  const normalized = Math.round((value / 10) * max)
  const display = hovered ?? normalized

  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      aria-label={`Rating: ${value} out of 10`}
      role={readonly ? undefined : 'group'}
    >
      {Array.from({ length: max }, (_, i) => {
        const filled = i + 1 <= display
        return (
          <svg
            key={i}
            className={cn(
              'transition-colors duration-100',
              starSizes[size],
              filled ? 'text-yellow-400' : 'text-neutral-300',
              !readonly && 'cursor-pointer hover:scale-110'
            )}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            onMouseEnter={readonly ? undefined : () => setHovered(i + 1)}
            onMouseLeave={readonly ? undefined : () => setHovered(null)}
            onClick={
              readonly
                ? undefined
                : () => onChange?.(Math.round(((i + 1) / max) * 10))
            }
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )
      })}
    </div>
  )
}

RatingStars.displayName = 'RatingStars'
