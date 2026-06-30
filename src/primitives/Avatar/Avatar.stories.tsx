import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Primitives/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithInitials: Story = {
  args: { initials: 'RB', alt: 'Rayan Boussouda' },
}

export const Fallback: Story = {
  args: { alt: 'Unknown user' },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
      <Avatar size="xl" initials="XL" />
    </div>
  ),
}
