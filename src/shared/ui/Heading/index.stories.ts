import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Heading } from './Heading';

type HeadingProps = ComponentProps<typeof Heading>;

const meta: Meta<HeadingProps> = {
  title: 'UI-kit/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<HeadingProps>;

export const H1: Story = {
  name: 'H1',
  args: {
    as: 'h1',
    children: 'Lorem Ipsum',
  },
};

export const H2: Story = {
  name: 'H2',
  args: {
    as: 'h2',
    children: 'Lorem Ipsum',
  },
};

export const H3: Story = {
  name: 'H3',
  args: {
    as: 'h3',
    children: 'Lorem Ipsum',
  },
};

export const H4: Story = {
  name: 'H4',
  args: {
    as: 'h4',
    children: 'Lorem Ipsum',
  },
};
