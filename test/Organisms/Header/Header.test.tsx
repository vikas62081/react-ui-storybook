import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonAppBar } from '../../../src';

const args = {
  clientId: 'Kim',
  userName: 'TestUser',
  image: 'test',
  menuList: [
    {
      title: 'Account Settings',
      icon: '',
      to: '/',
    },
  ],
  optionList: [
    {
      title: 'Sign Out',
      icon: '',
      to: '/',
    },
  ],
};

describe('< ButtonAppBar/>', () => {
  describe('click', () => {
    test('renders Header component has text', () => {
      render(
        <ButtonAppBar
          clientId={args.clientId}
          userName={args.userName}
          image={args.image}
          menuList={args.menuList}
        />
      );
      expect(screen.getByText(`${args.clientId}`)).toBeInTheDocument();
      expect(screen.getByText(`${args.userName}`)).toBeInTheDocument();
    });
    test('renders Header component has menuList', () => {
      render(
        <ButtonAppBar
          clientId={args.clientId}
          userName={args.userName}
          image={args.image}
          menuList={args.menuList}
        />
      );
      fireEvent.click(screen.getByText(`${args.userName}`));
      expect(screen.getByText(`Account Settings`)).toBeInTheDocument();
    });
    test('renders header component has optionList', () => {
      render(
        <ButtonAppBar
          clientId={args.clientId}
          userName={args.userName}
          image={args.image}
          menuList={args.menuList}
          optionList={args.optionList}
        />
      );
      expect(screen.getByText(`Sign Out`)).toBeInTheDocument();
    });
  });
});
