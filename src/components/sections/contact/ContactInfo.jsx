import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../../../data/siteConfig';

const ContactInfo = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const infoCards = [
    {
      icon: <Phone className="w-8 h-8 text-brand-red group-hover:scale-110 transition-transform duration-500" />,
      text: siteConfig.phone,
      link: `tel:${siteConfig.phone.replace(/\s+/g, '')}`
    },
    {
      icon: <Mail className="w-8 h-8 text-brand-red group-hover:scale-110 transition-transform duration-500" />,
      text: siteConfig.email,
      link: `mailto:${siteConfig.email}`
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-red group-hover:scale-110 transition-transform duration-500" />,
      text: siteConfig.address,
      link: "https://maps.google.com/?q=Advanced+GroHair+Marthandam",
      isAddress: true
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FCF8F8] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-white/50 blur-3xl z-0" />
      <div className="glow-orb-red w-[300px] h-[300px] -top-20 -right-20 z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark font-bold tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold italic font-light">Touch</span>
          </h2>
        </motion.div>

        {/* Glassmorphic Information Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {infoCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              target={card.isAddress ? "_blank" : "_self"}
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group relative glass-card p-10 lg:p-12 flex flex-col items-center justify-center text-center hover:border-brand-red/30 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border pointer-events-none" />

              {/* Icon with radial glow halo */}
              <div className="relative mb-6 flex items-center justify-center">
                {card.icon}
                <div className="absolute inset-[-12px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle, rgba(211, 47, 47, 0.1), transparent 70%)' }}
                />
              </div>
              <p className={`text-brand-dark font-sans font-medium leading-relaxed ${card.isAddress ? 'text-sm' : 'text-base'}`}>
                {card.text}
              </p>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ContactInfo;