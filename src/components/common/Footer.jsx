import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

// --- ASSET IMPORTS ---
import logoMarthandam from '../../assets/logo-marthandam.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- SMART ROUTING: Navigates to main category page and triggers the filter ---
  const footerLinks = {
    hair: [
      { name: "Restoration Plan", link: "/hair", filterName: "Restoration Plan" },
      { name: "Retention Plan", link: "/hair", filterName: "Retention Plan" },
      { name: "Non-Invasive Treatment", link: "/hair", filterName: "Non-Invasive Treatment" },
      { name: "Super Specialty", link: "/hair", filterName: "Super Specialty" },
      { name: "Cosmetic Replacement", link: "/hair", filterName: "Cosmetic Replacement" }
    ],
    skin: [
      { name: "Skin Brightening", link: "/skin", filterName: "Skin Brightening" },
      { name: "Hair Reduction", link: "/skin", filterName: "Hair Reduction" },
      { name: "Anti-Aging / Ageless", link: "/skin", filterName: "Ageless" },
      { name: "Dull Skin Recovery", link: "/skin", filterName: "Dry Dull Skin" },
      { name: "Premium IV Therapy", link: "/skin", filterName: "IV Therapy" }
    ]
  };

  return (
    <footer className="bg-[#050505] text-white pt-24 md:pt-32 pb-10 overflow-hidden relative z-30 border-t border-white/5 selection:bg-[#B70303] selection:text-white">
      
      {/* --- PREMIUM ATMOSPHERIC OVERLAYS --- */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none grayscale" />
      
      {/* Brand Glow Physics */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#B70303]/10 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">

        {/* --- MAIN EDITORIAL GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 items-start">
          
          {/* COLUMN 1: BRAND IDENTITY SECTION */}
          <div className="lg:col-span-4 xl:col-span-4 pr-0 lg:pr-12">
            <Link 
              to="/" 
              className="inline-flex flex-col items-start mb-10 group transition-all duration-700"
            >
              {/* Logo with Pure White Filter and Bloom Effect */}
              <img 
                src={logoMarthandam}
                alt="AdGro Marthandam Logo" 
                className="h-12 md:h-14 lg:h-16 w-auto object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]" 
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm font-light">
              Redefining clinical excellence in Kanyakumari. We deliver USFDA-approved hair and skin transformations through medical precision and aesthetic artistry.
            </p>
            
            {/* SOCIAL ECOSYSTEM */}
            <div className="flex gap-4">
              <SocialIcon href="https://facebook.com" icon={<Facebook className="w-4 h-4" />} />
              <SocialIcon href="https://instagram.com" icon={<Instagram className="w-4 h-4" />} />
            </div>
          </div>

          {/* COLUMN 2: HAIR VERTICAL */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-[#B70303]">
              Hair Care
            </h4>
            <ul className="space-y-5">
              {footerLinks.hair.map((item, idx) => (
                <li key={idx}>
                  <FooterLink to={item.link} name={item.name} filterState={item.filterName} />
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SKIN VERTICAL */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-[#B70303]">
              Skin Care
            </h4>
            <ul className="space-y-5">
              {footerLinks.skin.map((item, idx) => (
                <li key={idx}>
                  <FooterLink to={item.link} name={item.name} filterState={item.filterName} />
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CLINIC LOGISTICS */}
          <div className="lg:col-span-4 xl:col-span-4 lg:pl-12">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-[#B70303]">
              Clinic Hub
            </h4>
            <div className="space-y-8">
              
              <ContactBlock 
                icon={<Phone className="w-4 h-4" />} 
                title="Direct Appointment" 
                value="+91 97868 56789" 
                href="tel:+919786856789" 
              />
              
              <ContactBlock 
                icon={<Mail className="w-4 h-4" />} 
                title="Clinical Inquiries" 
                value="adgromarthandam@gmail.com" 
                href="mailto:adgromarthandam@gmail.com" 
              />

              <ContactBlock 
                icon={<MapPin className="w-4 h-4" />} 
                title="Location" 
                value="No.III-2179D, Trivandrum - Nagercoil Hwy, Thiruthuvapuram, Marthandam, TN 629163" 
                href="https://maps.google.com" 
              />

            </div>
          </div>
        </div>

        {/* --- LUXURY BOTTOM BAR --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gray-600 text-[11px] uppercase tracking-widest">
              © {currentYear} AdGro Marthandam
            </p>
            <div className="hidden md:block w-px h-3 bg-white/10" />
            <p className="text-gray-600 text-[11px] uppercase tracking-widest">
              USFDA Approved Protocols
            </p>
          </div>
          
          <div className="flex items-center gap-3 group cursor-default">
            <span className="text-[9px] text-gray-500 uppercase tracking-[0.3em] group-hover:text-[#B70303] transition-colors">
              Pinnacle Clinical Excellence
            </span>
            <div className="w-2 h-2 rounded-full bg-[#B70303] animate-pulse shadow-[0_0_10px_#B70303]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- SUB-COMPONENTS --- */

const FooterLink = ({ to, name, filterState }) => (
  <Link 
    to={to} 
    state={{ filter: filterState }} // Passes the specific category filter to the destination page
    className="text-gray-400 text-[13px] hover:text-white transition-all duration-500 flex items-center gap-3 group"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-[#B70303] scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_8px_#B70303] flex-shrink-0" />
    <span className="transform transition-all duration-500 group-hover:translate-x-1 font-light tracking-wide line-clamp-1">
      {name}
    </span>
  </Link>
);

const ContactBlock = ({ icon, title, value, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex items-start gap-5 group max-w-sm">
    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B70303] group-hover:bg-[#B70303] group-hover:text-white group-hover:border-[#B70303] transition-all duration-500 flex-shrink-0 shadow-lg group-hover:shadow-[0_0_20px_rgba(183,3,3,0.3)]">
      {icon}
    </div>
    <div className="pt-1 flex flex-col gap-1">
      <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{title}</p>
      <p className="text-gray-300 text-[13px] leading-relaxed group-hover:text-white transition-colors duration-300 font-medium">
        {value}
      </p>
    </div>
  </a>
);

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noreferrer"
    className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white
                hover:bg-[#B70303] hover:border-[#B70303] hover:shadow-[0_0_20px_rgba(183,3,3,0.4)] transition-all duration-500 transform hover:-translate-y-1.5"
  >
    {icon}
  </a>
);

export default Footer;