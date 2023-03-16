import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonAppBarReact } from '../../../src';
import { IHeaderProps } from '../../../src/Organisms/type';

const args: IHeaderProps = {
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

describe('< ButtonAppBarReact/>', () => {
  describe('click', () => {
    test('renders Header component has text', () => {
      render(
        <ButtonAppBarReact
          clientId={args.clientId}
          userName={args.userName}
          image={args.image}
          menuList={args.menuList}
        />
      );
      expect(screen.getByText(`${args.clientId}`)).toBeInTheDocument();
      expect(screen.getByText(`${args.userName}`)).toBeInTheDocument();
    });
    test('renders header component has optionList', () => {
      render(
        <ButtonAppBarReact
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
