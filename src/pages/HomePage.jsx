import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroForm from  '../components/HomeComponents/HeroSection'
import WhatWeDoSection from '../components/HomeComponents/WhatWeDoSection';
import AboutSection from '../components/HomeComponents/AboutSection';
import SuccessStories from '../components/HomeComponents/SuccessStories';
import BlogSection from '../components/HomeComponents/BlogSection';
import DriveRevenueSection from '../components/HomeComponents/whySection';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Skyphoria | Digital Marketing Made Simple</title>
        <meta name="description" content="Our digital marketing services cover everything from SEO and paid ads to content and social media, built around your goals and designed to drive real growth." />
      </Helmet>
      <HeroForm />
      <WhatWeDoSection />
      <AboutSection />
      <SuccessStories />
      <DriveRevenueSection />
      <BlogSection/>

    </>
  );
}

export default HomePage;
