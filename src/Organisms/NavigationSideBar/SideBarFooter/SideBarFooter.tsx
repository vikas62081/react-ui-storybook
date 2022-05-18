import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Card, CardContent, Grid, Link, Typography } from '@mui/material';
import { MycoiLogo } from '../../../Atoms/IconCompoenent/MycoiLogo';
import { SvgIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../navigation.styles';

export const SideBarFooter = (props: any) => {
  const { open, company, address, phone, email, image } = props;
  const classes = useStyles();
  return (
    <div>
      {open && (
        <Card style={{ margin: 16 }}>
          <Grid textAlign="center">
            <SvgIcon component={image} fontSize="large" />
          </Grid>
          <CardContent>
            <Typography>{company}</Typography>
            <Typography style={{ whiteSpace: 'normal' }}>{address}</Typography>
            <Typography>{phone}</Typography>
            <Typography>{email}</Typography>
          </CardContent>
        </Card>
      )}
      <ListItem button className={classes.inactiveIcon}>
        <ListItemIcon className={classes.footerLogo}>
          <SvgIcon component={MycoiLogo} fontSize="large" />
        </ListItemIcon>
        {open && <ListItemText primary="Powered by myCOI" />}
      </ListItem>
      <div className={open ? classes.footerDetails : classes.hide}>
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
