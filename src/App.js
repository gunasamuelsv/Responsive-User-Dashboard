// src/App.js
import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, Container, Avatar } from '@mui/material';
import { Dashboard as DashboardIcon, Favorite as FavoriteIcon, History as HistoryIcon } from '@mui/icons-material';
import DashboardPage from './pages/Dashboard';
import FavoritesPage from './pages/FavoritesPage';
import HistoryPage from './pages/HistoryPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); // State to track active tab

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Left Sidebar (Vertical Menu) */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#2C3E50', // Dark background color for sidebar
            color: 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
          {/* Large User Avatar */}
          <Avatar
            sx={{
              width: 80, // Set avatar size to large
              height: 80, // Set avatar size to large
              marginBottom: '20px', // Space below the avatar
              backgroundColor: '#1abc9c', // Custom background color for the user avatar
              fontSize: '40px', // Icon size within the avatar
            }}
          >
            U {/* User Initial or Image */}
          </Avatar>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            User Name
          </Typography>
        </Box>

        {/* Menu Items */}
        <List>
          {/* Dashboard Menu Item */}
          <ListItem button onClick={() => handleTabChange('dashboard')}>
            <DashboardIcon sx={{ fontSize: 40, marginRight: 2 }} />
            <ListItemText
              primary="Dashboard"
              sx={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                '&:hover': { color: '#1abc9c' }, // Hover color effect
              }}
            />
          </ListItem>

          {/* Favorites Menu Item */}
          <ListItem button onClick={() => handleTabChange('favorites')}>
            <FavoriteIcon sx={{ fontSize: 40, marginRight: 2 }} />
            <ListItemText
              primary="Favorites"
              sx={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                '&:hover': { color: '#1abc9c' },
              }}
            />
          </ListItem>

          {/* History Menu Item */}
          <ListItem button onClick={() => handleTabChange('history')}>
            <HistoryIcon sx={{ fontSize: 40, marginRight: 2 }} />
            <ListItemText
              primary="History"
              sx={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                '&:hover': { color: '#1abc9c' },
              }}
            />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          padding: '20px',
        }}
      >
        <Container>
          {/* Content Section: Display content based on selected tab */}
          {activeTab === 'dashboard' && <DashboardPage />}
          {activeTab === 'favorites' && <FavoritesPage />}
          {activeTab === 'history' && <HistoryPage />}
        </Container>
      </Box>
    </Box>
  );
};

export default App;
