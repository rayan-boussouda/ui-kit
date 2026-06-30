import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('renders a text input', () => {
    render(<Input placeholder="Type here" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders label and links it to input', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('shows error message and sets aria-invalid', () => {
    render(<Input label="Email" error="Invalid email" />)
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('shows hint when no error', () => {
    render(<Input label="Name" hint="Your full name" />)
    expect(screen.getByText('Your full name')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})
