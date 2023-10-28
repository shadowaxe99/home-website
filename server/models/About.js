```javascript
const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  vision: {
    type: String,
    required: true
  },
  mission: {
    type: String,
    required: true
  },
  values: {
    type: String,
    required: true
  },
  testimonials: [
    {
      name: {
        type: String,
        required: true
      },
      position: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('About', AboutSchema);
```