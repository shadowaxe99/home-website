```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const offeringsRoutes = require('./routes/offerings');
const developersRoutes = require('./routes/developers');
const marketplaceRoutes = require('./routes/marketplace');
const contactRoutes = require('./routes/contact');
const blogRoutes = require('./routes/blog');
const faqRoutes = require('./routes/faq');
const investorsRoutes = require('./routes/investors');
const legalRoutes = require('./routes/legal');
const dbConnect = require('./utils/dbConnect');
const seoOptimize = require('./utils/seoOptimize');
const security = require('./utils/security');
const accessibility = require('./utils/accessibility');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
dbConnect();

// SEO Optimization
seoOptimize(app);

// Security measures
security(app);

// Accessibility standards
accessibility(app);

// Routes
app.use('/home', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/offerings', offeringsRoutes);
app.use('/developers', developersRoutes);
app.use('/marketplace', marketplaceRoutes);
app.use('/contact', contactRoutes);
app.use('/blog', blogRoutes);
app.use('/faq', faqRoutes);
app.use('/investors', investorsRoutes);
app.use('/legal', legalRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
```