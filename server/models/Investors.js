```javascript
const mongoose = require('mongoose');

const InvestorsSchema = new mongoose.Schema({
  financialReports: {
    type: Array,
    required: true
  },
  pitchDeck: {
    type: String,
    required: true
  },
  contactDetails: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('Investors', InvestorsSchema);
```