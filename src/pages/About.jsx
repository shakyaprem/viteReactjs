import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { useGlobalContext } from '../context/context';
import LoadingSpinner from '../components/LoadingSpinner';

const About = () => {
  
  const { loading, updateAboutPage } = useGlobalContext();

  useEffect(() => updateAboutPage(), []);
  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  return (
    <>
      <HeroSection />
    </>
  );
}

export default About;