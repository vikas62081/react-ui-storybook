import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContainedCheckbox } from '../../src';

const text = 'Click Me!';

describe('<ContainedCheckbox />', () => {
  test('renders ContainedCheckbox component with out discription', () => {
    render(<ContainedCheckbox label={text} />);
    expect(screen.getByText(`${text}`)).toBeInTheDocument();
  });
});
