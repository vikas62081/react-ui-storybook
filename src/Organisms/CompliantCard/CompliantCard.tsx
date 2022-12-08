import { Button, Grid, Typography } from '@mui/material';
import * as React from 'react';
import CustomizedCard from '../Card/Card';
import { COLORS } from '../../colors';
import { BasicMenu } from '../../Atoms/BasicMenu/BasicMenu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CompliantCard() {
  return (
    <CustomizedCard style={{ padding: 8 }}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography color="text.secondary" variant="h6">
                General Liability
                <span
                  style={{
                    textDecoration: 'underline',
                    letterSpacing: 2,
                    fontSize: '70%',
                    marginLeft: 2,
                  }}
                >
                  R2253604A
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
              78% Compliant
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
              Effective: <span style={{ fontWeight: 400 }}>03/10/2022</span>
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
              Expires: <span style={{ fontWeight: 400 }}>03/10/2022</span>
            </Typography>
          </Grid>
          <Grid sm={2} item>
            <Button variant="outlined" size="small">
              Toggle
            </Button>
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
                  Agency
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
                <Typography variant="body2">State Farm Insurance</Typography>
              </Grid>
              <Grid item>
                <BasicMenu list={[]} userName={'NAIC: 983473'} size="small" />
              </Grid>
              <Grid item>
                <BasicMenu
                  list={[]}
                  userName={'AM Best Rating:: A++'}
                  size="small"
                />
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
