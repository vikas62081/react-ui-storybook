import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid, Link } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { Image } from '../../../Common/Iconimage';
import myCOILog from '../../../assets/myCOI.svg';
import Divider from '@mui/material/Divider';

import {
  ClientCard,
  ClientImage,
  StyledTypography,
  StyledCompanyTypography,
  useStyles,
  ClientContent,
} from '../navigation.styles';

export const SideBarFooter = (props: any) => {
  const { open, company, address, phone, email, image, isEnterpriseChild } =
    props;
  const classes = useStyles();
  return (
    <div>
      {open && <Divider />}
      {open && isEnterpriseChild && (
        <ClientCard>
          <ClientImage>
            <Image link={image} />
          </ClientImage>
          <ClientContent>
            <StyledCompanyTypography>{company}</StyledCompanyTypography>
            <StyledTypography>{address}</StyledTypography>
            <StyledTypography>{phone}</StyledTypography>
            <StyledTypography>{email}</StyledTypography>
          </ClientContent>
        </ClientCard>
      )}
      {open && (
        <ListItem button className={classes.FooterIcon}>
          <ListItemIcon className={classes.footerLogo}>
            <Image link={myCOILog} height={20} width={20} />
          </ListItemIcon>
          <ListItemText secondary="Powered by myCOI" />
        </ListItem>
      )}
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
