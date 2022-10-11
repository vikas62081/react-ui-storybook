import { makeStyles } from '@mui/styles';
import { theme } from './theme';

export const useStyles = makeStyles(({
  footerDetails: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 'smaller',

  },
  hide: {
    visibility: "hidden"
  },
  iconBackground: {
    background: theme.palette.secondary.contrastText,
    '&:hover': {
      background: 'rgba(226, 229, 233, 1)',
    },
  },
  selected: {
    background: theme.palette.primary.light,
    '&:hover': {
      background: theme.palette.primary.light,
    },
  },
  footerLogo: {
    minWidth: 0,
    padding: "0 14px 0 3px"
  }

})
);
