import React from 'react';
import { Helmet } from 'react-helmet-async';
import SuccessHero from '../components/SuccessStories/SuccessHero';
import SuccessStoriesGrid from '../components/SuccessStories/SuccessGrid';

function SuccessStories() {
  return (
    <>
      <Helmet>
        <title>Client Case Studies and Success Stories | Skyphoria</title>
        <meta name="description" content="See how Skyphoria has helped brands across industries grow organic traffic, generate leads, and build lasting online visibility through data-driven marketing." />
      </Helmet>
      <SuccessHero />
      <SuccessStoriesGrid />
    </>
  );
}

export default SuccessStories;