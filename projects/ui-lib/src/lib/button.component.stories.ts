import {Meta, StoryObj} from '@storybook/angular';
import {ButtonComponent} from './button.component';
import {fn} from "@storybook/test";

const meta: Meta<ButtonComponent> = {
  title: 'DSwiss/Common/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {onClick: fn()},
  argTypes: {
    isHover: {
      control: 'boolean',
    },
    isActive: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};

export const Hover: Story = {
  args: {
    label: 'Hover',
    isHover: true,
  },
};

export const Active: Story = {
  args: {
    label: 'Active',
    isActive: true,
  },
};
