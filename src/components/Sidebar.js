// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      onClose={toggleSidebar}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/favorites">
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem button component={Link} to="/history">
          <ListItemText primary="History" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
