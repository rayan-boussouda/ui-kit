import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Tag } from './Tag'

describe('Tag', () => {
  it('renders label', () => {
    render(<Tag label="Action" />)
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  it('does not show remove button by default', () => {
    render(<Tag label="Action" />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('shows remove button and fires onRemove', async () => {
    const onRemove = vi.fn()
    render(<Tag label="Action" onRemove={onRemove} />)
    await userEvent.click(screen.getByRole('button', { name: 'Remove Action' }))
    expect(onRemove).toHaveBeenCalledOnce()
  })
})
