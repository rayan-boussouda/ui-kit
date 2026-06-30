import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'
import { Button } from '@/primitives/Button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Inception</CardTitle>
        <CardDescription>Christopher Nolan · 2010</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600">
          A thief who steals corporate secrets through dream-sharing technology is given the inverse
          task of planting an idea into the mind of a C.E.O.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Add to watchlist</Button>
        <Button size="sm" variant="outline">Details</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-64 p-4">
      <p className="text-sm text-neutral-700">A minimal card with no sub-components.</p>
    </Card>
  ),
}
