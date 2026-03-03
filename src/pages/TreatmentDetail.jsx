import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { hairData } from '../data/hairData';
import { skinData } from '../data/skinData';
import nanoFueHair from "../assets/NANO-FUE-Hair.png";
import fueHair from "../assets/Untitled-design-2025-07-14T110348.203-1.png";
import basicFueHair from "../assets/Hair-Transplant.png";
import percutaneousFueHair from "../assets/Percutaneous-FUE-1-1.png";

/**
 * MASTER TREATMENT DETAIL ENGINE - ULTRA PREMIUM
 * Features:
 * - Symmetrical 3x2 Advantage Grid for perfect vertical balance.
 * - Integrated hero-1.jpg photo banner in the contact section.
 * - Zero "Dead Space" desktop layout.
 */
const TreatmentDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHair, setIsHair] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    setLoading(true);
    const typeCheck = category?.toLowerCase().includes('hair');
    setIsHair(typeCheck);
    const source = typeCheck ? hairData : skinData;

    let found = null;
    source.forEach((catGroup) => {
      const match = catGroup.subData?.find(
        item => item.slug?.toLowerCase() === id?.toLowerCase()
      );
      if (match) {
        found = match;
        found.parentCategory = catGroup.category;
      }
    });

    if (found) {
      setData(found);
      setLoading(false);
      document.title = `${found.title} | Advanced GroHair & GloSkin`;
    } else {
      navigate('/not-found', { replace: true });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, category, navigate]);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  if (loading || !data) return (
    <div className="h-screen flex items-center justify-center bg-[#f8f9fa]">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-brand-red rounded-full animate-spin" />
    </div>
  );

  const processSteps = data.process || [
    { title: "Personalised Consultation", desc: "Detailed assessment of your condition, health, and density. Based on your goals, we design a customized plan." },
    { title: "Clinical Extraction & Preparation", desc: "Our specialists use ultra-fine, precision instruments to gently extract or prepare the area, ensuring minimal damage." },
    { title: "High-Precision Implantation", desc: "Grafts or treatments are placed into the recipient area with exact angle, depth, and direction for flawless results." }
  ];

  const clinicalAdvantages = data.benefits || data.whyChoose || [
    "USFDA Approved Technology",
    "Expert Clinical Practitioners",
    "Painless Procedure Protocols",
    "Lasting Natural Results",
    "Post-Treatment Support",
    "Safety First Formulations"
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">

      {/* --- PREMIUM BREADCRUMBS --- */}
      <div className="bg-[#f8f9fa] pt-32 pb-4 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 animate-reveal-up">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <span className="opacity-30">/</span>
            <Link to={`/${category}`} className="hover:text-brand-red transition-colors">{isHair ? 'Hair' : 'Skin'}</Link>
            <span className="opacity-30">/</span>
            <span className="text-brand-red tracking-widest">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative py-12 md:py-20 bg-[#f8f9fa] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

            <div className="animate-reveal-up z-10 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-brand-red animate-width" />
                <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px]">
                  {data.category || 'Premium Procedure'}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-8 leading-[1.1] tracking-tighter">
                {data.title}
              </h1>
              {data.slug === "nano-fue-hair-transplant" && (
                <img
                  src={nanoFueHair}
                  alt="NANO FUE Hair Transplant Procedure"
                  className="w-full md:w-4/5 mx-auto rounded-xl shadow-lg mt-6 mb-8"
                />
              )}
              {data.slug === "fue-hair-transplant-valliyur" && (
                <img
                  src={fueHair}
                  alt="FUE Hair Transplant Procedure"
                  className="w-full md:w-4/5 mx-auto rounded-xl shadow-lg mt-6 mb-8"
                />
              )}
              {data.slug === "basic-fue-hair-transplant-valliyur" && (
                <img
                  src={basicFueHair}
                  alt="Basic FUE Hair Transplant"
                  className="w-full md:w-4/5 mx-auto rounded-xl shadow-lg mt-6 mb-8"
                />
              )}
              {data.slug === "percutaneous-fue" && (
                <img
                  src={percutaneousFueHair}
                  alt="Percutaneous FUE Hair Transplant Procedure"
                  className="w-full md:w-4/5 mx-auto rounded-xl shadow-lg mt-6 mb-8"
                />
              )}
              <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-xl">
                {data.fullDesc || data.description}
              </p>

              <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-200">
                <a href="#booking-form" className="relative group px-10 py-5 bg-brand-red text-white text-[11px] font-bold uppercase tracking-[0.3em] overflow-hidden shadow-2xl transition-all hover:-translate-y-1">
                  <span className="relative z-10">Book Consultation</span>
                  <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>
                <a href="https://wa.me/919786856789" className="px-10 py-5 border border-gray-300 text-brand-dark text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-white transition-all duration-500 hover:-translate-y-1">
                  WhatsApp Expert
                </a>
              </div>
            </div>

            <div className="relative animate-reveal-up [animation-delay:200ms] order-1 lg:order-2 group">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] border-[8px] border-white">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3000ms] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/95 backdrop-blur-xl p-8 shadow-2xl rounded-3xl border border-white animate-float z-20">
                <p className="text-5xl font-serif font-bold text-brand-red leading-none mb-1">99%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Clinical Success</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- THE PROCESS (TIGHTENED SPACING) --- */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 animate-reveal-up">
            <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Step-by-Step</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark tracking-tight">How <span className="italic text-brand-red font-light">It Works.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-10 bg-[#f8f9fa] rounded-3xl group hover:bg-brand-dark transition-all duration-700 ease-out">
                <div className="absolute top-4 right-8 text-7xl font-serif font-bold text-brand-red/5 group-hover:text-white/10 transition-colors">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-white mb-4 relative z-10 transition-colors">{step.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed relative z-10 transition-colors">{step.desc}</p>
                <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SYMMETRICAL WHY CHOOSE & FAQ (FIXED SPACING) --- */}
      <section className="py-20 bg-[#fcfcfc] border-t border-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* 3x2 SYMMETRICAL GRID */}
            <div className="animate-reveal-up">
              <div className="flex items-center gap-4 mb-10 pl-2">
                <span className="h-[1px] w-12 bg-brand-red" />
                <h2 className="text-4xl font-serif font-bold text-brand-dark tracking-tight">The AdGro <span className="text-brand-red italic font-light">Advantage.</span></h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 h-full">
                {clinicalAdvantages.map((benefit, idx) => (
                  <div key={idx} className="group bg-[#f8f9fa] p-6 rounded-2xl border border-gray-100 hover:border-brand-red/30 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center h-full justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-brand-dark text-xs font-bold uppercase tracking-widest leading-snug">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SYMMETRICAL FAQ LIST */}
            <div className="animate-reveal-up [animation-delay:200ms] h-full flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-10 pl-6 border-l-4 border-brand-red tracking-tight">Common Inquiries</h2>
              <div className="divide-y divide-gray-100 border-t border-gray-100">
                {data.faqs?.map((faq, idx) => (
                  <div key={idx} className={`group transition-all duration-500 ${openFaq === idx ? 'bg-white shadow-xl rounded-2xl my-4 px-2' : ''}`}>
                    <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center py-7 px-4 text-left focus:outline-none">
                      <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${openFaq === idx ? 'text-brand-red' : 'text-brand-dark group-hover:text-brand-red'}`}>{faq.q}</span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border transition-all duration-500 flex items-center justify-center ${openFaq === idx ? 'bg-brand-red border-brand-red text-white rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-brand-red group-hover:text-brand-red'}`}>
                        {openFaq === idx ? '−' : '+'}
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${openFaq === idx ? 'max-h-[500px] opacity-100 pb-8 px-6' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-500 text-base leading-relaxed pl-6 border-l-2 border-brand-red/30 italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PREMIUM CONTACT CARD (WITH PHOTO BANNER) --- */}
      <section id="booking-form" className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-[1.15fr_0.85fr]">

            <div className="p-12 md:p-20 relative">
              {/* PHOTO BANNER INTEGRATION */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05] overflow-hidden grayscale">
                <img src="/images/hero/hero-1.jpg" alt="Clinic Banner" className="w-full h-full object-cover scale-125 rotate-6" />
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4 tracking-tighter">Request Callback</h3>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-16">Priority Consultation Slot</p>

              <form className="space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input type="text" id="name" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-red transition-all bg-transparent peer placeholder-transparent text-brand-dark font-medium" placeholder="Your Name" required />
                    <label htmlFor="name" className="absolute left-0 -top-6 text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-brand-red">Full Name *</label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-red transition-all bg-transparent peer placeholder-transparent text-brand-dark font-medium" placeholder="Place" required />
                    <label htmlFor="email" className="absolute left-0 -top-6 text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-brand-red">Place *</label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <textarea rows="2" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-brand-red bg-transparent resize-none peer placeholder-transparent text-brand-dark" placeholder="Your requirements..."></textarea>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">Special Requirements</label>
                </div>
                <button type="submit" className="w-full md:w-auto px-16 py-6 bg-brand-dark text-white text-[11px] font-bold uppercase tracking-[0.5em] rounded-2xl shadow-xl transition-all hover:bg-brand-red hover:-translate-y-2">Confirm Slot Request</button>
              </form>
            </div>

            <div className="bg-brand-dark p-12 md:p-20 flex flex-col justify-center relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
              <h3 className="text-3xl font-serif font-bold mb-12 relative z-10 leading-tight">Clinic <br /><span className="text-brand-red italic font-light text-4xl">Concierge.</span></h3>
              <ul className="space-y-8 relative z-10">
                {[
                  { t: "USFDA Technology", d: "Highest safety standards." },
                  { t: "Expert Practitioners", d: "Trained clinical professionals." },
                  { t: "Transparent Pricing", d: "No hidden costs." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-6 group">
                    <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_20px_rgba(211,47,47,0.4)] transition-transform group-hover:scale-110">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-white mb-1 group-hover:text-brand-red transition-colors">{item.t}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-16 pt-12 border-t border-white/10 relative z-10">
                <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.4em] mb-4">Direct Support</p>
                <a href="tel:+919786856789" className="text-3xl md:text-4xl font-serif text-white hover:text-brand-red transition-all">+91 97868 56789</a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default TreatmentDetail;