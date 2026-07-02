import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { Button } from '@/primitives/Button'
import { Avatar } from '@/primitives/Avatar'

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
  <span className="text-lg font-bold tracking-tight text-neutral-900">
    🎬 CineApp
  </span>
)

export const LoggedOut: Story = {
  name: 'Logged out',
  args: {
    logo: <Logo />,
    links: navLinks,
    rightSlot: (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">Sign in</Button>
        <Button size="sm">Sign up</Button>
      </div>
    ),
  },
}

export const LoggedIn: Story = {
  name: 'Logged in',
  args: {
    logo: <Logo />,
    links: navLinks,
    rightSlot: (
      <div className="flex items-center gap-3">
        <span className="text-sm text-neutral-600">Rayan</span>
        <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=rayan" alt="Rayan" />
      </div>
    ),
  },
}

export const NoLinks: Story = {
  name: 'Logo and slot only',
  args: {
    logo: <Logo />,
    rightSlot: <Button size="sm">Get started</Button>,
  },
}

export const Mobile: Story = {
  name: 'Mobile (open drawer)',
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    logo: <Logo />,
    links: navLinks,
    rightSlot: (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">Sign in</Button>
        <Button size="sm">Sign up</Button>
      </div>
    ),
  },
}
