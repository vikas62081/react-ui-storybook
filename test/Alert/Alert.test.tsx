import React from 'react';
import { render, screen } from '@testing-library/react';
import { CombinedAlert } from '../../src';

const text = 'Error Alert!';
const description = 'allow me';

describe('<Alert />', () => {
  test('renders Alert component with out discription', () => {
    render(<CombinedAlert title={text} />);
    expect(screen.getByText(`${text}`)).toBeInTheDocument();
  });
  test('renders Alert component with discription', () => {
    render(<CombinedAlert title={text} description={description} />);
    expect(screen.getByText(`${description}`)).toBeInTheDocument();
  });
});
