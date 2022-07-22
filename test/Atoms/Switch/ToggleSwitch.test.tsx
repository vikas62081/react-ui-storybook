import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleSwitch } from '../../../src';

const text = 'Click Me!';

describe('<Switch />', () => {
  describe('click', () => {
    test('renders Switch component has text', () => {
      render(<ToggleSwitch label={text} checked={true} color={'primary'} />);
      expect(screen.getByText('Click Me!')).toBeInTheDocument();
    });
    test('renders Switch on toggle to be false ', () => {
      render(<ToggleSwitch label={text} checked={false} color={'primary'} />);
      const toggleEl = screen.getByRole('checkbox');
      userEvent.click(toggleEl);
      expect(toggleEl).toBeChecked();
    });
  });
});
