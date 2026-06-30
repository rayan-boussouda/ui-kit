import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

const sizeClasses = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[]
  label?: string
  error?: string
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, size = 'md', id, ...props }, ref) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            'w-full appearance-none rounded-md border bg-white text-neutral-900',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0',
            'disabled:pointer-events-none disabled:opacity-50',
            error
              ? 'border-red-500 focus-visible:ring-red-500'
              : 'border-neutral-300 focus-visible:ring-blue-600',
            sizeClasses[size],
            className
          )}
          aria-invalid={!!error}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
