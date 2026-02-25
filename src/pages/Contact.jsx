import React from 'react';
import ContactInfo from '../components/sections/contact/ContactInfo';
import ContactForm from '../components/sections/contact/ContactForm';
import MapWidget from '../components/sections/contact/MapWidget';

const Contact = () => {
  return (
    <div className="w-full bg-brand-bg pt-[120px]"> {/* pt-[120px] clears the Navbar */}
      
      {/* Top Section: The 3 Cards */}
      <ContactInfo />

      {/* Bottom Section: Form (Left) & Map (Right) */}
      <section className="py-16 lg:py-24 bg-[#FCF8F8]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Side: Form */}
            <ContactForm />
            
            {/* Right Side: Map */}
            <MapWidget />

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;