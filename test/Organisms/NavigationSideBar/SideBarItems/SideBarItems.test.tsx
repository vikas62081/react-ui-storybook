import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { SideBarItem } from '../../../../src';
import { IListProps } from '../../../../src/Organisms/type';

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
describe('SideBarItem component ', () => {
  test('renders SideBarItem to check active  ', () => {
    render(
      <Router>
        <SideBarItem />
      </Router>
    );
    expect(screen.getByTestId('To-be-Active')).toBeInTheDocument();
  });
  test('renders SideBarItem to check active  ', () => {
    const { container } = render(
      <Router>
        <SideBarItem />
      </Router>
    );
    expect(container.firstChild).toBeInTheDocument();
  });
  test('renders SideBarItemReact to check active  ', () => {
    render(
      <Router>
        <SideBarItem sideBarItems={sideBarItems} activeIndex={0} />
      </Router>
    );
    expect(screen.getByTestId('To-be-Active')).toBeInTheDocument();
  });
  test('renders SideBarItemReact to check active  ', () => {
    render(
      <Router>
        <SideBarItem sideBarItems={sideBarItems} activeIndex={1} />
      </Router>
    );
    expect(screen.getByTestId('To-be-Active')).toBeInTheDocument();
  });
});
