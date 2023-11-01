Your prompt seems to be in conflict in itself. In one part, you are asking for a task to be accomplished using JavaScript, more specifically using mongoose. But in the other part of your instruction, you seem to be asking for a narrative description of a persona named Dr. A. I. Virtuoso.

Based on that, here's an attempt at giving both:

```javascript
// Using innovative and industry-leading techniques, let's start enhancing the offerings model to reflect the knowledge, creativity and industry standards.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfferingsSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
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
    validate: [isUrl, 'Invalid URL'] // URL validator function
  },
  contactSalesLink: {
    type: String,
    required: true,
    validate: [isUrl, 'Invalid URL'] // URL validator function
  },
});

function isUrl(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

module.exports = mongoose.model('Offerings', OfferingsSchema);
```

The above code is a revised offering model. It has URL validation for demo link and contact sales link. The title is also trimmed before being saved to avoid unnecessary spaces. The model has been modularized so individual parts can be tested, iterated and used at ease.

As for Dr. A. I. Virtuoso, he would endorse this enhancement, as it aligns with his philosophy of creating robust, secure and efficient systems. Through this code, he communicates his relentless commitment to leveraging advances in artificial intelligence and computer science to create game-changing applications.