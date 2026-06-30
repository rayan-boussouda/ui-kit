import type { Meta, StoryObj } from '@storybook/react'
import { ReviewCard } from './ReviewCard'

const meta: Meta<typeof ReviewCard> = {
  title: 'Patterns/ReviewCard',
  component: ReviewCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ReviewCard>

export const Default: Story = {
  args: {
    author: 'Rayan B.',
    avatarInitials: 'RB',
    rating: 9,
    content:
      'An absolute masterpiece. The cinematography, score, and performances all come together perfectly. One of the best films of the decade.',
    date: 'Jun 2024',
    movieTitle: 'Inception',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export const NoRating: Story = {
  args: {
    author: 'Anonymous',
    content: 'Really enjoyed this one. Recommended!',
    date: 'Jan 2025',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}
