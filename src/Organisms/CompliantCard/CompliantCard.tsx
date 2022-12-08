import { Button, Grid, Typography } from '@mui/material';
import * as React from 'react';
import CustomizedCard from '../Card/Card';
import { COLORS } from '../../colors';
import { BasicMenu } from '../../Atoms/BasicMenu/BasicMenu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { COIToggleButton } from '../../Atoms/ToggleButton/ToggleButton';

export interface ICompliantCard {
  effectiveDate: Date;
  expiresDate: Date;
  title: string;
  id: string;
  agency: string;
  carrier: string;
  dropdown1: string;
  dropdown1Option: any[];
  rating: string;
  ratingOption: any[];
  complaint: string;
}

export default function CompliantCard(props: ICompliantCard) {
  const {
    effectiveDate,
    expiresDate,
    title,
    id,
    agency,
    carrier,
    dropdown1,
    rating,
    complaint,
    dropdown1Option,
    ratingOption,
  } = props;
  const options = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];

  const handleChange = (value: any) => {
    console.log(value);
  };
  return (
    <CustomizedCard style={{ padding: 8 }}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography color="text.secondary" variant="h6">
                {title}
                <span
                  style={{
                    textDecoration: 'underline',
                    letterSpacing: 2,
                    fontSize: '70%',
                    marginLeft: 4,
                  }}
                >
                  {id}
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              style={{
                background: COLORS.MINT[100],
                padding: '4px 8px',
                borderRadius: 20,
                width: 160,
                textAlign: 'center',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
              color="text.secondary"
              variant="subtitle1"
              component="div"
            >
              {complaint}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container spacing={1}>
          <Grid sm={2} item>
            <Typography
              style={{
                background: COLORS.SLATE[100],
                padding: '4px',
                borderRadius: `8px 0px 0 8px`,
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              Effective:{' '}
              <span style={{ fontWeight: 400 }}>{effectiveDate}</span>
            </Typography>
          </Grid>
          <Grid sm={2} item>
            <Typography
              style={{
                background: COLORS.SLATE[100],
                padding: '4px',
                borderRadius: `0px 8px 8px 0`,
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              Expires: <span style={{ fontWeight: 400 }}>{expiresDate}</span>
            </Typography>
          </Grid>
          <Grid sm={2} item>
            <COIToggleButton
              options={options}
              activeTab={options[0]}
              onTabChanged={handleChange}
              groupStyle={{ border: '1px #E2E8F0 solid', borderRadius: 20 }}
              optionStyle={{
                padding: '0 8px',
                borderRadius: 20,
                margin: 2,
                border: 0,
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item container direction="row" spacing={2}>
              <Grid item>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textTransform: 'uppercase' }}
                >
                  {agency}
                </Typography>
                <Typography variant="body2">Adam Osborn</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textTransform: 'uppercase' }}
                >
                  Carrier
                </Typography>
                <Typography variant="body2">{carrier}</Typography>
              </Grid>
              <Grid item>
                <BasicMenu
                  list={dropdown1Option}
                  userName={dropdown1}
                  size="small"
                />
              </Grid>
              <Grid item>
                <BasicMenu list={ratingOption} userName={rating} size="small" />
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Button variant="text" size="small" endIcon={<ExpandMoreIcon />}>
              View details
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </CustomizedCard>
  );
}
