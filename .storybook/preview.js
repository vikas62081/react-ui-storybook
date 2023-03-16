// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { MemoryRouter } from "react-router-dom";
import { theme } from '../src/theme';

addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));
addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>);