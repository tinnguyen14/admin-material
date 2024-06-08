import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider, Typography, Collapse, useMediaQuery, useTheme } from '@mui/material';
import { Home, Person, ShoppingCart, Dashboard, ExpandLess, ExpandMore, Edit, BarChart } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';
import { sidebar } from '../assets/images';

const drawerWidth = 235;
const miniDrawerWidth = 60;

const sidebarItems = [
  { text: 'Dashboard', icon: <Home />, path: '/' },
  { text: 'Users', icon: <Person />, path: '/users' },
  { text: 'Posts', icon: <ShoppingCart />, path: '/posts' },
  { text: 'Request', icon: <Dashboard />, path: '/request' },
  { text: 'UI Element', icon: <Edit />, subItems: [{ text: 'Editor', path: '/editor' }, { text: 'Charts', path: '/charts' }] },
];

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const { error } = theme.palette;
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:800px)');
  const [openSubMenu, setOpenSubMenu] = useState(false);

  useEffect(() => {
    const isAnySubItemActive = sidebarItems.some(item => 
      item.subItems && item.subItems.some(subItem => location.pathname.startsWith(subItem.path))
    );
    setOpenSubMenu(isAnySubItemActive);
  }, [location.pathname]);

  const handleSubMenuToggle = () => {
    setOpenSubMenu(!openSubMenu);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const isParentActive = (subItems) => {
    return subItems.some(subItem => location.pathname.startsWith(subItem.path));
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? open : true}
      onClose={onClose}
      sx={{
        width: open ? drawerWidth : miniDrawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        position: isMobile ? 'fixed' : 'relative',
        zIndex: isMobile ? '9999' : '1',
        transition: 'width 0.3s ease-in-out',
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : miniDrawerWidth,
          boxSizing: 'border-box',
          backgroundImage: `url(${sidebar})`,
          transition: 'width 0.3s ease-in-out',
        },
      }}
    >
      <Toolbar>
        {open ? (
          <Typography variant="h6" noWrap color={error.contrastText}>
            Admin Dashboard
          </Typography>
        ) : (
          <img src="/logo.png" alt="logo" style={{ width: '32px' }} />
        )}
      </Toolbar>
      <Divider />
      <List>
        {sidebarItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              component={NavLink}
              to={item.path}
              exact={item.path === '/'}
              onClick={item.subItems ? handleSubMenuToggle : null}
              style={{
                backgroundColor: isActiveRoute(item.path) || (item.subItems && isParentActive(item.subItems)) ? 'white' : '',
                color: isActiveRoute(item.path) || (item.subItems && isParentActive(item.subItems)) ? error.main : error.contrastText,
              }}
            >
              <ListItemIcon
                style={{
                  color: isActiveRoute(item.path) || (item.subItems && isParentActive(item.subItems)) ? error.main : error.contrastText,
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
              {item.subItems && (open ? (openSubMenu ? <ExpandLess /> : <ExpandMore />) : null)}
            </ListItem>
            {item.subItems && open && openSubMenu && (
              <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem
                      button
                      key={subIndex}
                      component={NavLink}
                      to={subItem.path}
                      sx={{ pl: 4, mt: 1 }}
                      style={{
                        backgroundColor: isActiveRoute(subItem.path) ? error.contrastText : '',
                        color: isActiveRoute(subItem.path) ? error.main : error.contrastText,
                      }}
                    >
                      <ListItemIcon
                        style={{
                          color: isActiveRoute(subItem.path) ? error.main : error.contrastText,
                        }}
                      >
                        <BarChart />
                      </ListItemIcon>
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
