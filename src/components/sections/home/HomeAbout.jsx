import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const HomeAbout = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const features = [
    "Customized Treatments for Skin & Hair Concerns",
    "Cutting-Edge Equipment & Safe Procedures",
    "Trusted by Clients Across Kanyakumari District"
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-clinical-mesh overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: LUXURY IMAGE COMPOSITION --- */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              {/* Main Large Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/5] w-[85%]">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Premium Clinic Experience" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply" />
              </div>

              {/* Overlapping Secondary Image (The "Elite" Depth Effect) */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-10 -right-4 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-premium-hover border-8 border-white z-20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=800&auto=format&fit=crop" 
                  alt="Advanced Dermatological Technology" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Signature Red Corner Accent */}
              <div className="absolute top-8 -left-6 w-12 h-24 bg-brand-red -z-10 rounded-tl-xl" />
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: STAGGERED CONTENT --- */}
          <div className="w-full lg:w-1/2 pt-12 lg:pt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-xl"
            >
              {/* Kicker / Subtitle */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-brand-red" />
                <span className="text-brand-gold font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs">
                  About Us
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark font-bold leading-[1.15] mb-6">
                Personalized Hair &amp; Skin Care Solutions in <span className="text-brand-red italic">Marthandam</span>
              </motion.h2>

              {/* Description Paragraph */}
              <motion.p variants={itemVariants} className="text-gray-600 font-sans text-sm md:text-base leading-relaxed mb-8">
                At AdGroHair &amp; AdGloSkin Marthandam, we bring expert care, advanced technology, and a passion for transformation together to help you look and feel your best. Every treatment is tailored to your unique needs, ensuring natural, lasting results.
              </motion.p>

              {/* Animated Checklist */}
              <motion.ul variants={containerVariants} className="flex flex-col gap-4 mb-10">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-brand-dark font-medium text-sm md:text-base">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Secondary CTA Button (Outline Style for contrast against Hero) */}
              <motion.div variants={itemVariants}>
                <a 
                  href="/about" 
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-full border-2 border-brand-dark text-brand-dark font-bold text-sm hover:bg-brand-dark hover:text-white transition-all duration-500 group"
                >
                  Discover Our Clinic
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;