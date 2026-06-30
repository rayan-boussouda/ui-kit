import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const inputVariants = cva(
  [
    'w-full rounded-md border bg-white text-neutral-900',
    'placeholder:text-neutral-400',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0',
    'disabled:pointer-events-none disabled:opacity-50',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      state: {
        default: 'border-neutral-300 focus-visible:ring-blue-600',
        error: 'border-red-500 focus-visible:ring-red-500',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Pick<VariantProps<typeof inputVariants>, 'size'> {
  label?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, label, error, hint, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(inputVariants({ size, state: error ? 'error' : 'default' }), className)}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-red-500">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-neutral-500">
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
