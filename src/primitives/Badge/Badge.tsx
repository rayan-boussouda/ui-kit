import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const badgeVariants = cva('inline-flex items-center font-medium rounded-full', {
  variants: {
    variant: {
      default: 'bg-blue-100 text-blue-700',
      secondary: 'bg-neutral-100 text-neutral-700',
      destructive: 'bg-red-100 text-red-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-800',
      outline: 'border border-neutral-300 text-neutral-700 bg-transparent',
    },
    size: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-xs',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, size, ...props }: BadgeProps) => (
  <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
)

Badge.displayName = 'Badge'
