import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RatingStars } from './RatingStars'

const meta: Meta<typeof RatingStars> = {
  title: 'Patterns/RatingStars',
  component: RatingStars,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RatingStars>

export const Readonly: Story = {
  args: { value: 8.0, readonly: true },
}

export const Interactive: Story = {
  render: () => {
    const [rating, setRating] = useState(0)
    return (
      <div className="flex flex-col items-center gap-2">
        <RatingStars value={rating} readonly={false} onChange={setRating} size="lg" />
        <p className="text-sm text-neutral-500">
          {rating > 0 ? `${rating}/10` : 'Click a star to rate'}
        </p>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <RatingStars value={8} size="sm" readonly />
      <RatingStars value={8} size="md" readonly />
      <RatingStars value={8} size="lg" readonly />
    </div>
  ),
}
