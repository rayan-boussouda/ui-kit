import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Spinner } from '@/primitives/Spinner'

export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onClear?: () => void
  isLoading?: boolean
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onClear, isLoading, value, ...props }, ref) => (
    <div className={cn('relative flex items-center', className)}>
      <svg
        className="absolute left-3 h-4 w-4 text-neutral-400 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        ref={ref}
        type="search"
        value={value}
        className={cn(
          'h-10 w-full rounded-lg border border-neutral-300 bg-white pl-10 pr-10 text-sm',
          'placeholder:text-neutral-400',
          'transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-0',
          'disabled:pointer-events-none disabled:opacity-50'
        )}
        {...props}
      />
      <div className="absolute right-3">
        {isLoading ? (
          <Spinner size="sm" className="text-neutral-400" />
        ) : value && onClear ? (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search"
            className="text-neutral-400 hover:text-neutral-700 focus-visible:outline-none"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </button>
        ) : null}
      </div>
    </div>
  )
)

SearchBar.displayName = 'SearchBar'
