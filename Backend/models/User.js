// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  favorites: [
    {
      articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }, // Referencing articles
      title: String,
      description: String
    }
  ],
  history: [
    {
      activity: String,  // e.g., "viewed article"
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
