import React from 'react';
import { render, screen } from '@testing-library/react';
import { CombinedRadio } from '../../src';

const text = 'Click Me!';

describe('<ContainedCheckbox />', () => {
  test('renders ContainedCheckbox component with out discription', () => {
    render(<CombinedRadio label={text} />);
    expect(screen.getByText(`${text}`)).toBeInTheDocument();
  });
});
