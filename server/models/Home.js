```javascript
const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  bannerImage: {
    type: String,
    required: true
  },
  bannerText: {
    type: String,
    required: true
  },
  aboutUs: {
    type: String,
    required: true
  },
  offerings: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  news: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Home', HomeSchema);
```