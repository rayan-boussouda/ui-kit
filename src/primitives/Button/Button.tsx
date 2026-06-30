import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-medium leading-none select-none cursor-pointer',
    'rounded-md transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
        secondary:
          'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-400',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
        outline:
          'border border-neutral-300 bg-transparent text-neutral-900 hover:bg-neutral-50 focus-visible:ring-neutral-400',
        ghost:
          'bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-neutral-400',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  )
)

Button.displayName = 'Button'
