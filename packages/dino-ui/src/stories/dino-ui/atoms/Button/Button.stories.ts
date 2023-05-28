import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'DinoUI/Button',
  component: Button
}

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button primary label="Button" />',
  }),
};