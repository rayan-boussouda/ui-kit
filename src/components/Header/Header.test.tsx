import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

const links = [
  { label: 'Home', href: '/', active: true },
  { label: 'Movies', href: '/movies' },
  { label: 'Watchlist', href: '/watchlist' },
]

describe('Header', () => {
  it('renders logo', () => {
    render(<Header logo={<span>MyApp</span>} />)
    expect(screen.getByText('MyApp')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Header links={links} />)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Movies').length).toBeGreaterThan(0)
  })

  it('marks active link with aria-current', () => {
    render(<Header links={links} />)
    const activeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(activeLinks.some((el) => el.getAttribute('aria-current') === 'page')).toBe(true)
  })

  it('renders the right slot', () => {
    render(<Header rightSlot={<button>Sign in</button>} />)
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument()
  })

  it('opens mobile drawer when hamburger is clicked', async () => {
    render(<Header links={links} />)
    await userEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes mobile drawer when Escape is pressed', async () => {
    render(<Header links={links} />)
    await userEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes mobile drawer when a link is clicked', async () => {
    render(<Header links={links} />)
    await userEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    const drawerLinks = screen.getAllByRole('link', { name: 'Movies' })
    await userEvent.click(drawerLinks[drawerLinks.length - 1])
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
