import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { SideBar } from '../../../../src';

// mock data
const mockItems = [
  {
    title: 'Home',
    icon: 'icon',
    to: '/',
  },
];
const checked = false;
const isEnterpriseChild = true;

describe('SideBar component ', () => {
  test(' initial renders  ', () => {
    render(
      <Router>
        <SideBar
          checked={checked}
          sideBarItems={mockItems}
          isEnterpriseChild={isEnterpriseChild}
        />
      </Router>
    );
    expect(screen.getByTestId('nextGen-sideBar')).toBeInTheDocument();
  });
  test('renders SideBar component on toggle to be false ', () => {
    render(
      <Router>
        <SideBar
          checked={checked}
          sideBarItems={mockItems}
          isEnterpriseChild={isEnterpriseChild}
        />
      </Router>
    );
    const toggleEl = screen.getByTestId('handle-click');
    userEvent.click(toggleEl);
    expect(checked).toBeFalsy();
  });
});
