import { cn } from '@/lib/utils'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <div
    className={cn('animate-pulse rounded-md bg-neutral-200', className)}
    aria-hidden="true"
    {...props}
  />
)

Skeleton.displayName = 'Skeleton'
