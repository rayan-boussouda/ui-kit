import { cn } from '@/lib/utils'

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-lg',
  xl: 'h-20 w-20 text-2xl',
}

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string
  alt?: string
  initials?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Avatar = ({
  src,
  alt = '',
  initials,
  size = 'md',
  className,
  ...props
}: AvatarProps) => (
  <span
    className={cn(
      'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-200 font-medium text-neutral-600',
      sizeClasses[size],
      className
    )}
    {...props}
  >
    {src ? (
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    ) : initials ? (
      <span aria-label={alt}>{initials}</span>
    ) : (
      <svg
        className="h-1/2 w-1/2 text-neutral-400"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )}
  </span>
)

Avatar.displayName = 'Avatar'
