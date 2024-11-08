// src/pages/HistoryPage.js
import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const HistoryPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Activity History
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Activity 1</Typography>
          <Typography variant="body2">Details about the activity...</Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            View Details
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HistoryPage;
