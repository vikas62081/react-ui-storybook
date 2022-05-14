import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicDatePickerRange } from '../../src';

describe('<DateRangePicker />', () => {
  test('renders BasicDatePickerRange component with out discription', () => {
    render(<BasicDatePickerRange ranges={[]} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
