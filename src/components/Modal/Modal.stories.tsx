import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from './Modal'
import { Button } from '@/primitives/Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} className="w-full max-w-md">
          <ModalHeader>
            <ModalTitle>Delete movie</ModalTitle>
            <ModalDescription>This action cannot be undone.</ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-neutral-600">
              Are you sure you want to remove this movie from your watchlist?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const NoFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} className="w-full max-w-md">
          <ModalHeader>
            <ModalTitle>Notice</ModalTitle>
            <ModalDescription>
              Press Escape, click the overlay, or use the close button to dismiss this.
            </ModalDescription>
          </ModalHeader>
        </Modal>
      </>
    )
  },
}
