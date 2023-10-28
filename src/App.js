```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import OurOfferingsPage from './components/OurOfferingsPage';
import DevelopersCornerPage from './components/DevelopersCornerPage';
import AIMarketplacePage from './components/AIMarketplacePage';
import ContactPage from './components/ContactPage';
import BlogNewsSection from './components/BlogNewsSection';
import FAQSection from './components/FAQSection';
import InvestorRelationsPage from './components/InvestorRelationsPage';
import LegalComplianceSection from './components/LegalComplianceSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/offerings" component={OurOfferingsPage} />
        <Route path="/developers" component={DevelopersCornerPage} />
        <Route path="/marketplace" component={AIMarketplacePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/blog" component={BlogNewsSection} />
        <Route path="/faq" component={FAQSection} />
        <Route path="/investors" component={InvestorRelationsPage} />
        <Route path="/legal" component={LegalComplianceSection} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
```