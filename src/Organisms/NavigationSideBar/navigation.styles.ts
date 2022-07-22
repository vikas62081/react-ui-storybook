import { makeStyles } from '@mui/styles';
import { COLORS } from '../../colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import {
  Button,
  Card,
  CardContent,
  Grid,
  List,
  Typography,
} from '@mui/material';
import { TOP } from './Drawer/Drawer';

export const useStyles = makeStyles({
  hide: {
    visibility: 'hidden',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
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
    textDecoration: 'underline',
    '&:hover': {
      color: COLORS.WHITE,
    },
    '&:active': {
      color: COLORS.MINT[500],
    },
  },
});
export const StyledMenu = styled(Button)({
  color: 'black',
});
export const ClientCard = styled(Card)({
  margin: 16,
});
export const StyledTypography = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'normal',
});
export const ClientContent = styled(CardContent)({
  backgroundColor: COLORS.FIREFLY[50],
  borderRadius: 2,
  margin: 8,
  paddingTop: 8,
  paddingRight: 0,
  paddingLeft: 0,
});
export const ClientImage = styled(Grid)({
  paddingTop: 8,
  textAlign: 'center',
});
export const ListContainer = styled(List)({
  padding: '8px',
  columnGap: 8,
});
export const GridContainer = styled(Grid)({
  position: 'absolute',
  bottom: TOP,
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
