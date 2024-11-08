// src/pages/FavoritesPage.js
import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const FavoritesPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Bookmarked Articles
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Article Title 1</Typography>
          <Typography variant="body2">A brief description of the article...</Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Read More
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FavoritesPage;
