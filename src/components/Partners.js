import React from 'react';
import { Box, Grid } from '@mui/material';
import HupspotLogo from '../images/Hupspot.png';
import LoomLogo from '../images/loom.png';
import GitLapLogo from '../images/GitLap.png';
import LivechatLogo from '../images/Livechat.png';
import MondayLogo from '../images/Monday.png';

export default function Partners() {
  return (
    <Box sx={{ textAlign: 'center', mt: { xs: '100px', sm: '200px' }, p: 3 }}>
      {/* Partners logos */}
      <Grid container justifyContent="center" spacing={4} >
        {/* Partner 1 */}
        <Grid item xs={2}>
          <img
            src={HupspotLogo} 
            style={{
              width: '80%',
              maxWidth: '100%',
            }}
          />
        </Grid>

        {/* Partner 2 */}
        <Grid item xs={2}>
          <img
            src={LoomLogo} 
            alt="Loom"
            style={{
              width: '80%',
              maxWidth: '100%',

            }}
          />
        </Grid>

        {/* Partner 3 */}
        <Grid item xs={2}>
          <img
            src={GitLapLogo} 
            alt="GitLap"
            style={{
              width: '80%',
              maxWidth: '100%',

            }}
          />
        </Grid>

        {/* Partner 4 */}
        <Grid item xs={2}>
          <img
            src={LivechatLogo} 
            alt="Livechat"
            style={{
              width: '80%',
              maxWidth: '100%',

            }}
          />
        </Grid>

        {/* Partner 5 */}
        <Grid item xs={2}>
          <img
            src={MondayLogo} 
            alt="Monday"
            style={{
              width: '80%',
              maxWidth: '100%',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
