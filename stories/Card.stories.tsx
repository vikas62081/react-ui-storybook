import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomizedCard, {
  CustomizedCardProps,
} from '../src/Organisms/Card/Card';
import { Button, Typography } from '@mui/material';
const meta: Meta = {
  title: 'Components/Organisms/Card',
  component: CustomizedCard,
  argTypes: {},
};

export default meta;

const Template: Story<CustomizedCardProps> = (args) => (
  <CustomizedCard {...args}>
    <Typography color="text.secondary" variant="body2">
      Your content goes here
    </Typography>
  </CustomizedCard>
);

export const Default = Template.bind({});
export const Actions = Template.bind({});

Default.args = {};
Actions.args = {
  actions: (
    <>
      <Button size="small" variant="contained" color="primary">
        Action
      </Button>
    </>
  ),
};
