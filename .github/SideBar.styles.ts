import { makeStyles } from '@mui/styles';
import { theme } from '../theme';

export const useStyles = makeStyles({
  sidebarActionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
  },
  sidebarActionIcon: {
    background: '#ffffff',
    border: '1px solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: 5,
    position: 'fixed',
    marginRight: -20,
    '&:hover': {
      background: '#ffffff',
    },
  },
});
