import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Primitives/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: { label: 'Action' },
}

export const Removable: Story = {
  args: { label: 'Sci-Fi', onRemove: () => alert('removed') },
}

export const TagList: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {['Action', 'Drama', 'Sci-Fi', 'Comedy', 'Thriller'].map((g) => (
        <Tag key={g} label={g} onRemove={() => {}} />
      ))}
    </div>
  ),
}
