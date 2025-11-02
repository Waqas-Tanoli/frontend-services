import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { HiOutlineEye } from 'react-icons/hi';

import { IconButton } from './IconButton';

type IconButtonProps = ComponentProps<typeof IconButton>;

const meta: Meta<IconButtonProps> = {
  title: 'UI-kit/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'destructive'],
    },
    type: {
      control: 'select',
      options: ['button', 'reset', 'submit'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'xs'],
    },
    disabled: {
      type: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<IconButtonProps>;

export const Primary: Story = {
  args: {
    'children': <HiOutlineEye />,
    'aria-label': 'It should always contain something meaningful',
  },
};

export const Secondary: Story = {
  args: {
    'variant': 'secondary',
    'children': <HiOutlineEye />,
    'aria-label': 'It should always contain something meaningful',
  },
};

export const Outline: Story = {
  args: {
    'variant': 'outline',
    'children': <HiOutlineEye />,
    'aria-label': 'It should always contain something meaningful',
  },
};

export const Destructive: Story = {
  args: {
    'variant': 'destructive',
    'children': <HiOutlineEye />,
    'aria-label': 'It should always contain something meaningful',
  },
};

export const Disabled: Story = {
  args: {
    'disabled': true,
    'children': <HiOutlineEye />,
    'aria-label': 'It should always contain something meaningful',
  },
};
