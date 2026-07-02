import type { Meta, StoryObj } from '@storybook/react'
import { UserMenu } from './UserMenu'

const meta: Meta<typeof UserMenu> = {
  title: 'Components/UserMenu',
  component: UserMenu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof UserMenu>

const items = [
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
  { label: 'Log out', onClick: () => alert('Logged out'), separator: true },
]

export const WithAvatar: Story = {
  name: 'With avatar image',
  args: {
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rayan',
    alt: 'Rayan',
    name: 'Rayan',
    items,
  },
}

export const WithInitials: Story = {
  name: 'With initials fallback',
  args: {
    initials: 'RB',
    name: 'Rayan Boussouda',
    items,
  },
}

export const NoName: Story = {
  name: 'Without name header',
  args: {
    initials: 'RB',
    items,
  },
}
