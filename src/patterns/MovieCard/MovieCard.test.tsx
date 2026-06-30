import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { MovieCard } from './MovieCard'

describe('MovieCard', () => {
  it('renders title', () => {
    render(<MovieCard title="Inception" />)
    expect(screen.getByText('Inception')).toBeInTheDocument()
  })

  it('renders year and rating', () => {
    render(<MovieCard title="Inception" year={2010} rating={8.8} />)
    expect(screen.getByText('2010')).toBeInTheDocument()
    expect(screen.getByText('★ 8.8')).toBeInTheDocument()
  })

  it('renders genre tags (max 3)', () => {
    render(<MovieCard title="Test" genres={['Action', 'Drama', 'Sci-Fi', 'Comedy']} />)
    expect(screen.getByText('Action')).toBeInTheDocument()
    expect(screen.getByText('Sci-Fi')).toBeInTheDocument()
    expect(screen.queryByText('Comedy')).not.toBeInTheDocument()
  })

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<MovieCard title="Inception" onClick={onClick} />)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('shows film icon placeholder when no posterUrl', () => {
    const { container } = render(<MovieCard title="No Poster" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
