import React from 'react';
import AboutHero from '../components/sections/about/AboutHero';
import AboutStat from '../components/sections/about/AboutStat';
import WhyChooseUs from '../components/sections/about/WhyChooseUs';
import Treatments from '../components/sections/about/Treatments'; // <-- Import here

const About = () => {
  return (
    <div className="w-full bg-brand-bg">
      
      {/* 1. The Parallax Cinematic Hero */}
      <AboutHero />
      
      {/* 2. The Editorial Intro & Animated Stats */}
      <AboutStat />

      {/* 3. The Dark Theme 'Why Choose Us' Grid */}
      <WhyChooseUs />
      
      {/* 4. The Treatments Links & Final Call to Action */}
      <Treatments /> {/* <-- Add here */}

    </div>
  );
};

export default About;