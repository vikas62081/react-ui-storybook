import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { SideBarReact } from '../../../../src';

const mockItems = [
  {
    title: 'Home',
    icon: 'icon',
    to: '/',
  },
];
const checked = false;
const isEnterpriseChild = true;

describe('SideBarReact component ', () => {
  test(' initial renders  ', () => {
    render(
      <Router>
        <SideBarReact
          checked={checked}
          sideBarItems={mockItems}
          isEnterpriseChild={isEnterpriseChild}
        />
      </Router>
    );
    expect(screen.getByTestId('nextGen-sideBar')).toBeInTheDocument();
  });
  test('renders SideBarReact on toggle to be false ', () => {
    render(
      <Router>
        <SideBarReact
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
