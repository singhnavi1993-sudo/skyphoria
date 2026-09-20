import React from 'react';
import { Helmet } from 'react-helmet-async';
import Top from '../components/DigitalSection/Top';
import AboutStorySection from '../components/DigitalSection/AboutStorySection';
import ValuesSection from '../components/DigitalSection/ValueSection';
import MarketingSection from '../components/DigitalSection/MarketingSolution';

function DigitalSection() {
  return (
    <>
      <Helmet>
        <title>About Skyphoria Digital | Transparent Marketing Agency</title>
        <meta name="description" content="Skyphoria is a digital marketing agency built on transparency, creativity, and real impact, helping brands grow online without the confusion and guesswork." />
      </Helmet>
    <Top />
    <AboutStorySection />
    <ValuesSection />
    <MarketingSection />
    </>
  );
}

export default DigitalSection;
