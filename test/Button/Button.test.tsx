import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContainedButton } from '../../src';

const text = 'Click Me!';

describe('<Button />', () => {
  describe('click', () => {
    test('renders Button  component with name ', () => {
      render(<ContainedButton color="primary">{text}</ContainedButton>);
      expect(screen.getByText(`${text}`)).toBeInTheDocument();
    });
    test('renders Button  component with color', () => {
      render(<ContainedButton color="primary">{text}</ContainedButton>);
      expect(screen.getByRole('button')).toHaveStyle(
        `color: rgb(255, 255, 255)`
      );
    });
  });
});
