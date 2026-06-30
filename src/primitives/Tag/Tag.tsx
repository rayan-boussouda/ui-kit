import { cn } from '@/lib/utils'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string
  onRemove?: () => void
}

export const Tag = ({ label, onRemove, className, ...props }: TagProps) => (
  <span
    className={cn(
      'inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50',
      'px-2.5 py-1 text-xs font-medium text-neutral-700',
      className
    )}
    {...props}
  >
    {label}
    {onRemove && (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
        aria-label={`Remove ${label}`}
        className="ml-0.5 rounded-full p-0.5 text-neutral-400 hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
      >
        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M9 3L3 9M3 3l6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    )}
  </span>
)

Tag.displayName = 'Tag'
