import { useState } from 'react'
import { NavigationMenu, Dialog, VisuallyHidden } from 'radix-ui'
import { cn } from '@/lib/utils'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export interface HeaderProps {
  logo?: React.ReactNode
  links?: NavLink[]
  rightSlot?: React.ReactNode
  className?: string
}

export const Header = ({ logo, links = [], rightSlot, className }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-sm',
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        {logo && <div className="shrink-0">{logo}</div>}

        {/* Desktop nav */}
        {links.length > 0 && (
          <NavigationMenu.Root className="hidden md:flex">
            <NavigationMenu.List className="flex items-center gap-1">
              {links.map((link) => (
                <NavigationMenu.Item key={link.href}>
                  <NavigationMenu.Link
                    href={link.href}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      'hover:bg-neutral-100 hover:text-neutral-900',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600',
                      link.active
                        ? 'text-blue-600'
                        : 'text-neutral-600'
                    )}
                    aria-current={link.active ? 'page' : undefined}
                  >
                    {link.label}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        )}

        {/* Desktop right slot */}
        {rightSlot && (
          <div className="hidden md:flex items-center gap-3">{rightSlot}</div>
        )}

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger
              className={cn(
                'flex items-center justify-center rounded-md p-2 text-neutral-600',
                'hover:bg-neutral-100 hover:text-neutral-900',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600'
              )}
              aria-label="Open navigation menu"
            >
              <HamburgerIcon open={mobileOpen} />
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
              <Dialog.Content
                className={cn(
                  'fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-xl',
                  'flex flex-col p-6',
                  'focus-visible:outline-none'
                )}
              >
                <VisuallyHidden.Root>
                  <Dialog.Title>Navigation menu</Dialog.Title>
                </VisuallyHidden.Root>

                {/* Mobile logo */}
                {logo && (
                  <div className="mb-6 shrink-0">{logo}</div>
                )}

                {/* Mobile links */}
                <nav className="flex flex-col gap-1">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                        'hover:bg-neutral-100 hover:text-neutral-900',
                        link.active
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-neutral-700'
                      )}
                      aria-current={link.active ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile right slot */}
                {rightSlot && (
                  <div className="mt-auto pt-6 border-t border-neutral-200">
                    {rightSlot}
                  </div>
                )}
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    {open ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ) : (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    )}
  </svg>
)
