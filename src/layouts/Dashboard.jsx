import { Box, Grid, Paper, Toolbar, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h4" gutterBottom>
        Welcome back, Jaydon Frankie
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Total Active Users</Typography>
            <Typography variant="h4">18,765</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Total Installed</Typography>
            <Typography variant="h4">4,876</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Total Downloads</Typography>
            <Typography variant="h4">678</Typography>
          </Paper>
        </Grid>
        {/* Thêm các khối khác tương tự */}
      </Grid>
    </Box>
  );
};

export default Dashboard;
