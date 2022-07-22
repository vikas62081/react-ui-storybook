import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonAppBar } from '../../../src';

const args = {
  title1: 'Explore myCOI Central',
  title2: 'Feedback',
  userName: 'TestUser',
  image: 'test',
  menuList: [
    {
      title: 'Account Settings',
      icon: '',
      to: '/',
    },
  ],
};

describe('< ButtonAppBar/>', () => {
  describe('click', () => {
    test('renders Switch component has text', () => {
      render(
        <ButtonAppBar
          title1={args.title1}
          title2={args.title2}
          userName={args.userName}
          image={args.image}
          menuList={args.menuList}
        />
      );
      expect(screen.getByText(`${args.title1}`)).toBeInTheDocument();
      expect(screen.getByText(`${args.title2}`)).toBeInTheDocument();
      expect(screen.getByText(`${args.userName}`)).toBeInTheDocument();
    });
  });
});
