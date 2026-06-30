import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('applies destructive variant class', () => {
    render(<Badge variant="destructive">Error</Badge>)
    expect(screen.getByText('Error')).toHaveClass('bg-red-100')
  })

  it('applies success variant class', () => {
    render(<Badge variant="success">OK</Badge>)
    expect(screen.getByText('OK')).toHaveClass('bg-green-100')
  })
})
