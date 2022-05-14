import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicDatePicker } from '../../src';

describe('<BasicDatePicker />', () => {
  test('renders BasicDatePicker component with out discription', () => {
    render(<BasicDatePicker ranges={[]} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
