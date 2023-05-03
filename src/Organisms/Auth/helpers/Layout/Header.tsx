import {
  Avatar,
  Button,
  Grid,
  ListItemAvatar,
  Typography,
} from '@mui/material';
import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { COLORS } from '../../../../colors';

const AuthHeader = ({
  activeStep,
  totalSteps,
  icon = <Avatar />,
  exitButtonText = 'Exit 2FA setup',
  showSteps = true,
  handleExit = () => {},
  headersLabel = {},
}: any) => {
  const { title, description } = headersLabel;
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Grid container direction="row" columnGap={1}>
          <Grid
            item
            sx={{
              background: COLORS.SLATE[100],
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ListItemAvatar
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {icon}
            </ListItemAvatar>
          </Grid>
          <Grid item direction="column">
            <Grid item>
              <Typography
                component="span"
                variant="caption"
                color={COLORS.SLATE[400]}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="body2"
                fontWeight="bold"
                color={COLORS.FIREFLY[500]}
              >
                {description}
              </Typography>
            </Grid>

            <Grid item>
              {showSteps ? (
                <Typography
                  sx={{
                    background: COLORS.BUTTER[200],
                    borderRadius: 4,
                    padding: '2px 12px',
                  }}
                  component="span"
                  variant="body2"
                  fontWeight="500"
                  fontSize={12}
                  color="#A3610A"
                >
                  STEP {activeStep + 1} of {totalSteps}
                </Typography>
              ) : (
                <br />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          variant="text"
          startIcon={<ExitToAppIcon />}
          style={{ fontSize: 12 }}
          onClick={handleExit}
        >
          {exitButtonText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AuthHeader;
