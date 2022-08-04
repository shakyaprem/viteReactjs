import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { useGlobalContext } from '../context/context';
import LoadingSpinner from '../components/LoadingSpinner';
import Contact from './Contact';
import Services from './Services';
import Stories from './Stories';


const Home = () => {
  const { loading, updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);
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
      <Services />
      <Stories />
      <Contact />
    </>
  );
};

export default Home;