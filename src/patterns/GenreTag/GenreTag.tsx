import { cn } from '@/lib/utils'

export interface GenreTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string
  active?: boolean
}

export const GenreTag = ({ name, active = false, className, ...props }: GenreTagProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
      active
        ? 'bg-blue-600 text-white'
        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
      className
    )}
    {...props}
  >
    {name}
  </span>
)

GenreTag.displayName = 'GenreTag'
