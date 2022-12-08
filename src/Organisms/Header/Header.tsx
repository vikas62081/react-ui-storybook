import * as React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { COLORS } from '../../colors';
import styled from '@emotion/styled';
import { Divider, Toolbar, Typography } from '@mui/material';
import { ContainedButton } from '../../Atoms/Button/Button';
import { BasicMenu } from '../../Atoms/BasicMenu/BasicMenu';
import { Image } from '../../Common/Iconimage';
import ListItemIcon from '@mui/material/ListItemIcon';

const StyledAppBar = styled(AppBar)({
  minHeight: 80,
  justifyContent: 'center',
  backgroundColor: COLORS.WHITE,
  color: COLORS.FIREFLY[50],
  boxShadow: 'none',
  borderBottom: '1px solid #E2E8F0',
});
export type ListProps = {
  title: string;
  icon?: string;
  to?: string;
};
export type ButtonAppBarProps = {
  clientId?: string;
  userName?: string;
  image?: string;
  appBar?: AppBarProps;
  optionList?: ListProps[];
  menuList?: ListProps[];
};

export const ButtonAppBar = ({
  image,
  userName,
  clientId,
  optionList,
  menuList,
  ...props
}: ButtonAppBarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar {...props}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Image link={image} height={70} width={70} />

            {clientId && (
              <>
                <Divider
                  style={{ color: 'black', marginLeft: '20px', height: 'auto' }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
                <div style={{ padding: '10px 20px 0 20px' }}>
                  <div
                    style={{
                      color: COLORS.SLATE[500],
                      fontWeight: 500,
                      fontSize: 13,
                      fontVariant: 'small-caps',
                    }}
                  >
                    <Typography>impersonating</Typography>
                  </div>
                  <div
                    style={{
                      color: COLORS.FIREFLY[700],
                      fontWeight: 500,
                      fontSize: 14,
                    }}
                  >
                    <Typography>{clientId}</Typography>
                  </div>
                </div>
              </>
            )}
          </Box>
          {optionList?.map((option, index: number) => (
            <ContainedButton
              href={option?.to}
              key={index}
              sx={{
                mr: 2,
                border: 'none',
                color: COLORS.FIREFLY[700],
                backgroundColor: COLORS.SLATE[100],
                ':hover': {
                  color: COLORS.FIREFLY[700],
                  backgroundColor: COLORS.SLATE[200],
                },
              }}
              color="secondary"
              size="small"
            >
              {option?.icon && (
                <ListItemIcon sx={{ minWidth: '25px' }}>
                  {option?.icon}
                </ListItemIcon>
              )}
              {option?.title}
            </ContainedButton>
          ))}
          <BasicMenu list={menuList} userName={userName} />
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};
