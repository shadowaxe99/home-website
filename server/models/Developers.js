```javascript
const mongoose = require('mongoose');

const DevelopersSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  resources: [{
    name: String,
    link: String
  }],
  forums: [{
    name: String,
    link: String
  }]
});

module.exports = mongoose.model('Developers', DevelopersSchema);
```