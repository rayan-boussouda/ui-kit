import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { RatingStars } from './RatingStars'

describe('RatingStars', () => {
  it('renders 5 stars by default', () => {
    const { container } = render(<RatingStars value={8} />)
    expect(container.querySelectorAll('svg')).toHaveLength(5)
  })

  it('has correct aria-label', () => {
    render(<RatingStars value={8} />)
    expect(screen.getByLabelText('Rating: 8 out of 10')).toBeInTheDocument()
  })

  it('calls onChange with correct value when star clicked', async () => {
    const onChange = vi.fn()
    const { container } = render(<RatingStars value={0} readonly={false} onChange={onChange} />)
    const stars = container.querySelectorAll('svg')
    await userEvent.click(stars[2])
    expect(onChange).toHaveBeenCalledWith(6)
  })
})
