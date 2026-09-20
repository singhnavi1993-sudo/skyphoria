import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getServiceBySlug } from '../data/serviceData';
import ServiceHero from '../components/ServiceSections/ServiceHero';
import RoiDrivenSection from '../components/ServiceSections/RoiDrivenSection';
import WhySection from '../components/ServiceSections/WhySection';
import WhatYouGet from '../components/ServiceSections/WhatYouGet';
import WhyEffective from '../components/ServiceSections/WhyEffective';
import NumbersProof from '../components/ServiceSections/NumbersProof';

function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // Redirect to home if service not found
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.metaTitle || `Skyphoria | ${service.hero.title}`}</title>
        <meta name="description" content={service.metaDescription || `Expert ${service.hero.title} services by Skyphoria Digital. ${service.hero.description}`} />
      </Helmet>
      <ServiceHero {...service.hero} />
      <div className="section-divider"></div>
      <RoiDrivenSection {...service.roi} />
      <WhySection {...service.whySection} />
      <WhatYouGet {...service.whatYouGet} />
      <WhyEffective {...service.whyEffective} />
      <NumbersProof {...service.numbersProof} />
    </>
  );
}

export default ServicePage;
