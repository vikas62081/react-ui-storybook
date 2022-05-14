import { makeStyles } from '@mui/styles';
//import { theme } from '../../theme';
import { COLORS } from '../../colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Grid, List } from '@mui/material';

export const useStyles = makeStyles({
  hide: {
    visibility: 'hidden',
  },
  notSelected: {
    '&:hover': {
      background: COLORS.FIREFLY[400],
      borderRadius: '4px',
    },
  },
  selected: {
    background: COLORS.MINT[500],
    color: COLORS.FIREFLY[900],
    borderRadius: '4px',
    '&:hover': {
      background: COLORS.MINT[500],
      color: COLORS.FIREFLY[900],
      borderRadius: '4px',
    },
  },
  activeIcon: {
    color: COLORS.FIREFLY[900],
  },
  inactiveIcon: {
    color: COLORS.WHITE,
  },
  footerDetails: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 'smaller',
  },

  footerLogo: {
    minWidth: 0,
    padding: '0 14px 0 3px',
  },
  footerLinks: {
    color: COLORS.BUTTER[500],
    '&:hover': {
      color: COLORS.WHITE,
    },
    '&:active': {
      color: COLORS.MINT[500],
    },
  },
});
export const ListContainer = styled(List)({
  padding: '8px',
  columnGap: 8,
});
export const GridContainer = styled(Grid)({
  position: 'absolute',
  bottom: 0,
  container: true,
  rowspacing: 4,
});
export const GridItem = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  item: true,
  sm: 12,
});
export const MyIconButton = styled(IconButton)({
  background: COLORS.FIREFLY[500],
  borderRadius: 4,
  position: 'fixed',
  width: 32,
  height: 32,
  marginRight: -14,
  bottom: 140,
  '&:hover': {
    background: COLORS.FIREFLY[900],
  },
});
