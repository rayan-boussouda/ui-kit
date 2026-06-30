import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Modal, ModalTitle } from './Modal'

describe('Modal', () => {
  it('renders nothing when closed', () => {
    render(
      <Modal open={false} onClose={vi.fn()}>
        <ModalTitle>Hello</ModalTitle>
      </Modal>
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders children when open', () => {
    render(
      <Modal open onClose={vi.fn()}>
        <ModalTitle>Hello</ModalTitle>
      </Modal>
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('calls onClose when Escape is pressed', async () => {
    const handleClose = vi.fn()
    render(
      <Modal open onClose={handleClose}>
        <ModalTitle>Hello</ModalTitle>
      </Modal>
    )
    await userEvent.keyboard('{Escape}')
    expect(handleClose).toHaveBeenCalledOnce()
  })

  it('does not call onClose when dialog content is clicked', async () => {
    const handleClose = vi.fn()
    render(
      <Modal open onClose={handleClose}>
        <ModalTitle>Hello</ModalTitle>
      </Modal>
    )
    await userEvent.click(screen.getByRole('dialog'))
    expect(handleClose).not.toHaveBeenCalled()
  })

  it('applies a custom className to the dialog content', () => {
    render(
      <Modal open onClose={vi.fn()} className="max-w-lg">
        <ModalTitle>Hello</ModalTitle>
      </Modal>
    )
    expect(screen.getByRole('dialog')).toHaveClass('max-w-lg')
  })
})
