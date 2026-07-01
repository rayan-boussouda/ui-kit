import type { Meta, StoryObj } from '@storybook/react'
import { MovieCard } from './MovieCard'
import { MovieGrid } from '@/patterns/MovieGrid'

const meta: Meta<typeof MovieCard> = {
  title: 'Patterns/MovieCard',
  component: MovieCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MovieCard>

export const Default: Story = {
  args: {
    id: 1,
    title: 'Inception',
    rating: 8.8,
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    year: 2010,
    overview:
      'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
  },
  decorators: [(Story) => <div className="w-48"><Story /></div>],
}

export const NoPoster: Story = {
  args: {
    id: 2,
    title: 'Movie Without Poster',
    rating: 7.2,
    genres: ['Drama'],
    year: 2023,
  },
  decorators: [(Story) => <div className="w-48"><Story /></div>],
}

export const WithAdminActions: Story = {
  args: {
    id: 3,
    title: 'Inception',
    rating: 8.8,
    genres: ['Sci-Fi', 'Action'],
    year: 2010,
    onEdit: (id) => alert(`edit ${id}`),
    onDelete: (id) => alert(`delete ${id}`),
  },
  decorators: [(Story) => <div className="w-48"><Story /></div>],
}

export const WithMyRating: Story = {
  args: {
    id: 4,
    title: 'Inception',
    rating: 8.8,
    genres: ['Sci-Fi', 'Action'],
    year: 2010,
    myRating: 4,
    onRate: (v) => alert(`Rated ${v}`),
  },
  decorators: [(Story) => <div className="w-48"><Story /></div>],
}

export const Grid: Story = {
  name: 'In a MovieGrid',
  render: () => (
    <div className="w-[640px]">
      <MovieGrid columns={3}>
        {[
          { id: 1, title: 'Inception', rating: 8.8, genres: ['Sci-Fi', 'Action'], year: 2010 },
          { id: 2, title: 'The Dark Knight', rating: 9.0, genres: ['Action', 'Crime'], year: 2008 },
          { id: 3, title: 'Interstellar', rating: 8.6, genres: ['Sci-Fi', 'Drama'], year: 2014 },
          { id: 4, title: 'Dune', rating: 8.0, genres: ['Sci-Fi', 'Adventure'], year: 2021 },
          { id: 5, title: 'Oppenheimer', rating: 8.4, genres: ['History', 'Drama'], year: 2023 },
          { id: 6, title: 'Parasite', rating: 8.5, genres: ['Thriller', 'Drama'], year: 2019 },
        ].map((m) => (
          <MovieCard key={m.title} {...m} onClick={() => {}} />
        ))}
      </MovieGrid>
    </div>
  ),
}
