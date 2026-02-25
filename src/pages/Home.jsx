import React from 'react';
import HomeHero from '../components/sections/home/HomeHero';
import HomeAbout from '../components/sections/home/HomeAbout';
import BookingBanner from '../components/sections/home/BookingBanner';
import ProcessSection from '../components/sections/home/ProcessSection';
import TransformCTA from '../components/sections/home/TransformCTA';
import HomeContact from '../components/sections/home/HomeContact';
import HomeFAQ from '../components/sections/home/HomeFAQ'; // <-- Import here

const Home = () => {
  return (
    <div className="w-full">
      <HomeHero />
      <HomeAbout />
      <BookingBanner />
      <ProcessSection />
      <TransformCTA />
      <HomeContact />
      <HomeFAQ /> {/* <-- Added here */}
    </div>
  );
};

export default Home;