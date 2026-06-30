import { cn } from '@/lib/utils'

export const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('rounded-xl border border-neutral-200 bg-white shadow-sm', className)}
    {...props}
  />
)
Card.displayName = 'Card'

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn('font-semibold leading-none tracking-tight text-neutral-900', className)}
    {...props}
  />
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-sm text-neutral-500', className)} {...props} />
)
CardDescription.displayName = 'CardDescription'

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
)
CardContent.displayName = 'CardContent'

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
)
CardFooter.displayName = 'CardFooter'
