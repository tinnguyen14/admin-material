import { Box, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const drawerWidth = 40; 
const miniDrawerWidth = 10;


const Layout = ({ children }) => {
  const isMobile = useMediaQuery('(max-width:800px)');
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar onSidebarToggle={handleSidebarToggle} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: 'margin-left 0.3s ease-in-out',
          marginLeft: sidebarOpen && !isMobile ? `${drawerWidth}px` : `${miniDrawerWidth}px`,
          mt: '64px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
