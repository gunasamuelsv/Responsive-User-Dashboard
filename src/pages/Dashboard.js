// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Favorite as FavoriteIcon, History as HistoryIcon, Notifications as AlertsIcon } from '@mui/icons-material';
import axios from 'axios';

const Dashboard = () => {
  // State to store user data
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data (Favorites and History)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/USER_ID');  // Replace USER_ID with actual user ID
        setUserData(response.data); // Store fetched data in state
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Run once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Favorites Section */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <FavoriteIcon sx={{ fontSize: 60, color: '#1abc9c', marginBottom: 2 }} />
              <Typography variant="h6" component="div" gutterBottom>
                Favorites
              </Typography>
              {/* Display favorites dynamically */}
              {userData && userData.favorites.length > 0 ? (
                userData.favorites.map((fav, index) => (
                  <div key={index}>
                    <Typography variant="body2" gutterBottom>
                      {fav.title}
                    </Typography>
                  </div>
                ))
              ) : (
                <Typography variant="body2">No favorites available.</Typography>
              )}
              <Button variant="contained" sx={{ marginTop: 2 }}>
                Manage Favorites
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* History Section */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <HistoryIcon sx={{ fontSize: 60, color: '#f39c12', marginBottom: 2 }} />
              <Typography variant="h6" component="div" gutterBottom>
                History
              </Typography>
              {/* Display history dynamically */}
              {userData && userData.history.length > 0 ? (
                userData.history.map((activity, index) => (
                  <div key={index}>
                    <Typography variant="body2" gutterBottom>
                      {activity.activity} - {new Date(activity.timestamp).toLocaleString()}
                    </Typography>
                  </div>
                ))
              ) : (
                <Typography variant="body2">No history available.</Typography>
              )}
              <Button variant="contained" sx={{ marginTop: 2 }}>
                View History
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Alerts Section */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '300px' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <AlertsIcon sx={{ fontSize: 60, color: '#e74c3c', marginBottom: 2 }} />
              <Typography variant="h6" component="div" gutterBottom>
                Alerts
              </Typography>
              <Typography variant="body2">
                View important notifications and updates.
              </Typography>
              <Button variant="contained" sx={{ marginTop: 2 }}>
                Check Alerts
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
