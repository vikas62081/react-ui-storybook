import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Auth } from '../src';

const meta: Meta = {
  title: 'Components/Organisms/Auth',
  component: Auth,
  argTypes: {},
};

export default meta;

const Template: Story = (args) => <Auth {...args} />;

export const Default = Template.bind({});
