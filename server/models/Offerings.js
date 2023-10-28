```javascript
const mongoose = require('mongoose');

const OfferingsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  benefits: {
    type: [String],
    required: true,
  },
  uniqueSellingPropositions: {
    type: [String],
    required: true,
  },
  demoLink: {
    type: String,
    required: true,
  },
  contactSalesLink: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Offerings', OfferingsSchema);
```