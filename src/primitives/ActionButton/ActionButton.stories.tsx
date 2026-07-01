import type { Meta, StoryObj } from '@storybook/react'
import { ActionButton } from './ActionButton'

const meta: Meta<typeof ActionButton> = {
  title: 'Primitives/ActionButton',
  component: ActionButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['edit', 'delete'] },
    size: { control: 'select', options: [1, 2, 3, 4, 5] },
  },
}

export default meta
type Story = StoryObj<typeof ActionButton>

export const Edit: Story = {
  args: { variant: 'edit', size: 2 },
}

export const Delete: Story = {
  args: { variant: 'delete', size: 2 },
}

export const Sizes: Story = {
  name: 'All sizes',
  render: () => (
    <div className="flex items-end gap-4">
      {([1, 2, 3, 4, 5] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <ActionButton variant="edit" size={s} />
          <ActionButton variant="delete" size={s} />
          <span className="text-xs text-neutral-500">size {s}</span>
        </div>
      ))}
    </div>
  ),
}
