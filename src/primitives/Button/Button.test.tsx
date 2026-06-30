import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('fires onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('does not fire onClick when disabled', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} disabled>Click</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('is disabled and aria-busy when loading', () => {
    render(<Button loading>Save</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
    expect(btn).toHaveAttribute('aria-busy', 'true')
  })

  it('does not fire onClick when loading', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} loading>Save</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies destructive variant class', () => {
    render(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-red-600')
  })

  it('applies sm size class', () => {
    render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-8')
  })

  it('merges custom className', () => {
    render(<Button className="custom-class">Click</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('forwards ref to the button element', () => {
    const ref = { current: null as HTMLButtonElement | null }
    render(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
