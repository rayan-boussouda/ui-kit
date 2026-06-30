import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './SearchBar'

const meta: Meta<typeof SearchBar> = {
  title: 'Patterns/SearchBar',
  component: SearchBar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: { placeholder: 'Search movies…' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="w-80">
        <SearchBar
          placeholder="Search movies…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
        />
      </div>
    )
  },
}

export const Loading: Story = {
  args: { placeholder: 'Search movies…', value: 'Inception', isLoading: true },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}
