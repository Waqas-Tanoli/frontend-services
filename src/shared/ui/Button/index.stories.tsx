import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Button } from './Button';

type ButtonProps = ComponentProps<typeof Button>;

const meta: Meta<ButtonProps> = {
  title: 'UI-kit/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'outline',
        'destructive',
        'link',
        'ghost',
      ],
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
    full: {
      description: "Will take 100% of the parent's width if set to `true`",
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const asChildExample: Story = {
  name: 'asChild Example',
  args: {
    // asChild: true,
    children: <a href="/">Link</a>,
  },
};
