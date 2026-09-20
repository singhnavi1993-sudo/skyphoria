import React from 'react';
import { Helmet } from 'react-helmet-async';
import MarketingSolutions from '../components/MarketingComp/MarketingSolutions';
import SecondSection from '../components/MarketingComp/SecondSection';
import AboutStrategySection from '../components/MarketingComp/AboutStrategySection';
import GetStartedSection from '../components/MarketingComp/GetStartedSection.jsx';


function MarketingSol() {
  return (
    <>
      <Helmet>
        <title>Skyphoria Digital | Our Marketing Services</title>
        <meta name="description" content="Every digital marketing service you need, all under one roof! We build strategies around your audience, your goals, and real commercial growth." />
      </Helmet>
        <MarketingSolutions />
        <SecondSection />
        <AboutStrategySection />
        <GetStartedSection />

    </>
  );
}

export default MarketingSol;