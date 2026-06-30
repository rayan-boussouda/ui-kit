import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Select } from './Select'

const options = [
  { value: 'action', label: 'Action' },
  { value: 'drama', label: 'Drama' },
]

describe('Select', () => {
  it('renders all options', () => {
    render(<Select options={options} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Action' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Drama' })).toBeInTheDocument()
  })

  it('renders label and links it', () => {
    render(<Select options={options} label="Genre" />)
    expect(screen.getByLabelText('Genre')).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<Select options={options} error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('renders placeholder as first disabled option', () => {
    render(<Select options={options} placeholder="Pick a genre" />)
    const placeholder = screen.getByRole('option', { name: 'Pick a genre' })
    expect(placeholder).toBeDisabled()
  })
})
