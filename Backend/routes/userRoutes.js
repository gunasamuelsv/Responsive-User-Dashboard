// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Get User Data (Favorites and History)
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('favorites history');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Example route to add a favorite
router.post('/:userId/favorites', async (req, res) => {
  try {
    const { articleId, title, description } = req.body;
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Add new favorite
    user.favorites.push({ articleId, title, description });
    await user.save();
    
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
