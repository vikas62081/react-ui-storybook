import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid, Link } from '@mui/material';
import { MycoiLogo } from '../../../Atoms/IconCompoenent/MycoiLogo';
import { SvgIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../navigation.styles';

export const SideBarFooter = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <ListItem button className={classes.inactiveIcon}>
        <ListItemIcon className={classes.footerLogo}>
          <SvgIcon component={MycoiLogo} />
        </ListItemIcon>
        <ListItemText primary="Powered by myCOI" />
      </ListItem>
      <div className={props.open ? classes.footerDetails : classes.hide}>
        <Grid container>
          <Grid item sm={6}>
            <Link className={classes.footerLinks}>Privacy Policy</Link>
          </Grid>
          <Grid item sm={6}>
            <Link className={classes.footerLinks}> Terms & conditions</Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
