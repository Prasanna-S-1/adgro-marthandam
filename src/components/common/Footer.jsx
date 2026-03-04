import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ROUTING ARCHITECTURE - Mapped to Marthandam Slug Logic
  const footerLinks = {
    hair: [
      { name: "Restoration Plan", link: "/hair/restoration-plan" },
      { name: "Retention Plan", link: "/hair/retention-plan" },
      { name: "Non-Invasive Treatment", link: "/hair/non-invasive-treatment" },
      { name: "Super Specialty", link: "/hair/super-specialty" },
      { name: "Cosmetic Replacement", link: "/hair/cosmetic-hair-replacement" }
    ],
    skin: [
      { name: "Skin Brightening", link: "/skin/skin-brightening-pigmentation" },
      { name: "Hair Reduction", link: "/skin/permanent-hair-reduction" },
      { name: "Anti-Aging / Ageless", link: "/skin/ageless" },
      { name: "Dull Skin Recovery", link: "/skin/dry-dull-skin" },
      { name: "Premium IV Therapy", link: "/skin/iv-therapy" }
    ],
    quick: [
      { name: "Home", link: "/" },
      { name: "About Clinic", link: "/about" },
      { name: "Hair Directory", link: "/hair" },
      { name: "Skin Directory", link: "/skin" },
      { name: "Contact Hub", link: "/contact" }
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
              className="inline-flex flex-col items-start mb-8 group transition-all duration-700"
            >
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=150&auto=format&fit=crop" 
                alt="AdGro Marthandam Logo" 
                className="h-16 md:h-20 lg:h-24 object-contain filter brightness-0 invert group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="mt-4">
                <h2 className="text-xl font-serif font-bold tracking-tight">AdGro<span className="text-[#B70303]">Hair</span> & GloSkin</h2>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Marthandam Branch</p>
              </div>
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
                  <FooterLink to={item.link} name={item.name} />
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
                  <FooterLink to={item.link} name={item.name} />
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

const FooterLink = ({ to, name }) => (
  <Link 
    to={to} 
    className="text-gray-400 text-sm hover:text-white transition-all duration-500 flex items-center gap-3 group whitespace-nowrap"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-[#B70303] scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_8px_#B70303]" />
    <span className="transform transition-all duration-500 group-hover:translate-x-1 font-light tracking-wide">{name}</span>
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