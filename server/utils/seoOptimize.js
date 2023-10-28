```javascript
const express = require('express');
const helmet = require('helmet');

const seoOptimize = (app) => {
  app.use(helmet());

  app.use(helmet.permittedCrossDomainPolicies());

  app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

  app.use(helmet.featurePolicy({
    features: {
      fullscreen: ["'self'"],
      vibrate: ["'none'"],
      payment: ["'none'"],
      syncXhr: ["'none'"]
    }
  }));

  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'validator.swagger.io'],
      fontSrc: ["'self'", 'https:', 'data:'],
      objectSrc: ["'none'"],
      mediaSrc: ["'none'"],
      frameAncestors: ["'none'"],
    },
  }));

  app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'Elysium Innovations');
    next();
  });
};

module.exports = seoOptimize;
```