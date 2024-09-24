const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const galleryRoutes = require('./routes/gallery');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/tattoo_shop', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactRoutes);

app.post('/api/upload', upload.single('image'), (req, res) => {
  res.json({ file: req.file });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));