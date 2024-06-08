import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { Notifications, AccountCircle, Menu } from '@mui/icons-material';
import { header } from '../assets/images';

const Navbar = ({ onSidebarToggle }) => {
  return (
    <AppBar position="fixed" sx={{ 
      zIndex: theme => theme.zIndex.drawer + 1,
      backgroundImage: `url(${header})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onSidebarToggle}>
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Admin Dashboard
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
