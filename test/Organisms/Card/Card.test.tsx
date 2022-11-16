import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomizedCard from '../../../src/Organisms/Card/Card';

const Text = 'Hey Start your day ';

describe('< CustomizedSteppers/>', () => {
  describe('CustomizedCard', () => {
    test('renders CustomizedCard component has text', () => {
      render(<CustomizedCard>{Text}</CustomizedCard>);
      expect(screen.getByText(`Hey Start your day`)).toBeInTheDocument();
    });
  });
});
