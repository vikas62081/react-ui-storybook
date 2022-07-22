import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { SideBarItem } from '../../../../src';

// mock data

describe('SideBarItem component ', () => {
  test('renders Switch to check ative  ', () => {
    render(
      <Router>
        <SideBarItem />
      </Router>
    );
    expect(screen.getByTestId('To-be-Active')).toBeInTheDocument();
  });
});
