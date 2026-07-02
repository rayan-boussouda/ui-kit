import { DropdownMenu } from 'radix-ui'
import { Avatar } from '@/primitives/Avatar'
import { cn } from '@/lib/utils'

export interface UserMenuItem {
  label: string
  href?: string
  onClick?: () => void
  /** Renders a separator line above this item */
  separator?: boolean
}

export interface UserMenuProps {
  src?: string
  alt?: string
  initials?: string
  name?: string
  items: UserMenuItem[]
}

export const UserMenu = ({ src, alt, initials, name, items }: UserMenuProps) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button
        className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        aria-label="User menu"
      >
        <Avatar src={src} alt={alt ?? name ?? 'User'} initials={initials} size="sm" />
      </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content
        align="end"
        sideOffset={8}
        className={cn(
          'z-50 min-w-48 rounded-xl border border-neutral-200 bg-white p-1 shadow-lg',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2'
        )}
      >
        {name && (
          <>
            <DropdownMenu.Label className="px-3 py-2 text-xs font-medium text-neutral-500">
              {name}
            </DropdownMenu.Label>
            <DropdownMenu.Separator className="my-1 h-px bg-neutral-100" />
          </>
        )}

        {items.map((item) => (
          <div key={item.label}>
            {item.separator && (
              <DropdownMenu.Separator className="my-1 h-px bg-neutral-100" />
            )}
            <DropdownMenu.Item
              asChild={!!item.href}
              onSelect={item.onClick}
              className={cn(
                'flex cursor-pointer select-none items-center rounded-lg px-3 py-2 text-sm text-neutral-700',
                'hover:bg-neutral-100 hover:text-neutral-900',
                'focus-visible:outline-none focus:bg-neutral-100 focus:text-neutral-900',
                'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
              )}
            >
              {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
            </DropdownMenu.Item>
          </div>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
)

UserMenu.displayName = 'UserMenu'
