import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { UserMenu } from '@/components/UserMenu'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Header>

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Movies', href: '/movies' },
  { label: 'Watchlist', href: '/watchlist' },
  { label: 'Reviews', href: '/reviews' },
]

const Logo = () => (
  <span className="text-lg font-bold tracking-tight text-neutral-900">🎬 CineApp</span>
)

const userMenuItems = [
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
  { label: 'Log out', onClick: () => alert('Logged out'), separator: true },
]

export const Default: Story = {
  args: {
    logo: <Logo />,
    links: navLinks,
    rightSlot: (
      <UserMenu
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=rayan"
        alt="Rayan"
        name="Rayan"
        items={userMenuItems}
      />
    ),
  },
}

export const WithInitials: Story = {
  name: 'Avatar with initials (no image)',
  args: {
    logo: <Logo />,
    links: navLinks,
    rightSlot: (
      <UserMenu
        initials="RB"
        alt="Rayan Boussouda"
        name="Rayan Boussouda"
        items={userMenuItems}
      />
    ),
  },
}

export const Mobile: Story = {
  name: 'Mobile',
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    logo: <Logo />,
    links: navLinks,
    rightSlot: (
      <UserMenu
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=rayan"
        alt="Rayan"
        name="Rayan"
        items={userMenuItems}
      />
    ),
  },
}
