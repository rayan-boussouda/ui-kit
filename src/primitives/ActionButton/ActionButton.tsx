import { cn } from '@/lib/utils'

const sizeMap = {
  1: 'h-6 w-6 [&>svg]:h-3 [&>svg]:w-3',
  2: 'h-8 w-8 [&>svg]:h-4 [&>svg]:w-4',
  3: 'h-10 w-10 [&>svg]:h-5 [&>svg]:w-5',
  4: 'h-12 w-12 [&>svg]:h-6 [&>svg]:w-6',
  5: 'h-14 w-14 [&>svg]:h-7 [&>svg]:w-7',
} as const

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'edit' | 'delete'
  size?: 1 | 2 | 3 | 4 | 5
}

export const ActionButton = ({
  variant,
  size = 2,
  className,
  ...props
}: ActionButtonProps) => (
  <button
    type="button"
    className={cn(
      'flex items-center justify-center rounded-full transition-colors duration-150',
      sizeMap[size],
      variant === 'edit' &&
        'bg-neutral-100 text-neutral-600 hover:bg-blue-100 hover:text-blue-600',
      variant === 'delete' &&
        'bg-neutral-100 text-neutral-600 hover:bg-red-100 hover:text-red-600',
      className
    )}
    {...props}
  >
    {variant === 'edit' ? <EditIcon /> : <TrashIcon />}
  </button>
)

const EditIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
)

const TrashIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
)

ActionButton.displayName = 'ActionButton'
