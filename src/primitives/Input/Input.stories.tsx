import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'Enter text…' },
}

export const WithLabel: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com', type: 'email' },
}

export const WithHint: Story = {
  args: { label: 'Username', placeholder: 'john_doe', hint: 'Must be unique across the platform.' },
}

export const WithError: Story = {
  args: { label: 'Password', type: 'password', value: '123', error: 'Password must be at least 8 characters.' },
}

export const Disabled: Story = {
  args: { label: 'Read-only field', value: 'Cannot edit this', disabled: true },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
}
