import { cn } from '@/lib/utils'

const colClasses = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-6',
}

export interface MovieGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4 | 5 | 6
}

export const MovieGrid = ({ columns = 4, className, children, ...props }: MovieGridProps) => (
  <div className={cn('grid gap-4', colClasses[columns], className)} {...props}>
    {children}
  </div>
)

MovieGrid.displayName = 'MovieGrid'
