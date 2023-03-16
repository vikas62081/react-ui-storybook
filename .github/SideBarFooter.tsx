import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid, Link } from '@mui/material';
import { MycoiLogo } from '../IconCompoenent/MycoiLogo';
import { SvgIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../global.styles';

export const SideBarFooter = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <ListItem button className={classes.iconBackground}>
        <ListItemIcon className={classes.footerLogo}>
          <SvgIcon component={MycoiLogo} />
        </ListItemIcon>
        <ListItemText secondary="Powered by myCOI" />
      </ListItem>
      <div className={props.open ? classes.footerDetails : classes.hide}>
        <Grid container>
          <Grid item sm={6}>
            <Link>Privacy Policy</Link>
          </Grid> 
          <Grid item sm={6}>
            <Link> Terms & conditions</Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
