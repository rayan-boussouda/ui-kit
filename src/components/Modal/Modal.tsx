import { Dialog } from 'radix-ui'
import { cn } from '@/lib/utils'

export const Modal = ({
  children,
  className,
  open,
  onClose,
}: {
  children: React.ReactNode
  className?: string
  open: boolean
  onClose: () => void
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 shadow-lg',
            className
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
export const ModalTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Dialog.Title className={cn('font-semibold text-neutral-900', className)}>
      {children}
    </Dialog.Title>
  )
}

export const ModalDescription = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Dialog.Description className={cn('text-sm text-neutral-500', className)}>
      {children}
    </Dialog.Description>
  )
}
export const ModalHeader = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('flex flex-col gap-1.5 p-6', className)}>{children}</div>
}

export const ModalBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>
}

export const ModalFooter = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('flex justify-end gap-2 p-6 pt-0', className)}>{children}</div>
}
