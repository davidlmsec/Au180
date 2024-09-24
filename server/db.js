const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now }
});

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = {
  Gallery: mongoose.model('Gallery', GallerySchema),
  Contact: mongoose.model('Contact', ContactSchema)
};