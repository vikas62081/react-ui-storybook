import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { SideBarItemReact } from '../../../../src';
import { IListProps } from '../../../../src/Organisms/type';
// mock data

const sideBarItems: IListProps[] = [
  {
    title: 'Home',
    icon: '',
    to: '/',
  },
  {
    title: 'Compliance Review',
    icon: '',
    to: '/compliance-review',
  },
  {
    title: 'Divisions ',
    icon: '',
    to: '/divisions',
  },
];

describe('SideBarItemReact component ', () => {
  test('renders SideBarItemReact to check active  ', () => {
    const { container } = render(
      <Router>
        <SideBarItemReact />
      </Router>
    );
    expect(container.firstChild).toBeInTheDocument();
  });
  test('renders SideBarItemReact to check active  ', () => {
    render(
      <Router>
        <SideBarItemReact sideBarItems={sideBarItems} activeIndex={0} />
      </Router>
    );
    expect(screen.getByTestId('To-be-Active')).toBeInTheDocument();
  });
  test('renders SideBarItemReact to check active  ', () => {
    render(
      <Router>
        <SideBarItemReact sideBarItems={sideBarItems} activeIndex={1} />
      </Router>
    );
    expect(screen.getByTestId('To-be-Active')).toBeInTheDocument();
  });
});
