import skinPeels from "../assets/Skin-Peels.png";
import fullBodyPeel from "../assets/Full-Body-Peel.png";
import microdermabrasion from "../assets/Microdermabrasion.png";
import qSwitchedLaser from "../assets/Q-SWITCHED-LASER-THERAPY.png";
import mnrfTreatment from "../assets/Microneedling-Radiofrequency-1.png";
import rfFacials from "../assets/RF-Facials.png";
import botox from "../assets/Botox.png";
import dermalFillers from "../assets/Dermal-Fillers.png";
import facePrp from "../assets/Face-prp-1.png";
import threadLift from "../assets/Thread-Lift-1.png";
import ndYagLaser from "../assets/ND_YAG-LASER.png";
import diodeLaser from "../assets/DIODE-LASER-REMOVAL.png";
import laserHairReduction from "../assets/Adgro-Hair-1.png";
import hydraFacial from "../assets/Hydrafacial.png";
import glutathioneTherapy from "../assets/Adgro-Hair-1-2.png";

export const skinData = [
  {
    category: "Skin Brightening & Pigmentation",
    subData: [
      {
        slug: "skin-peels",
        title: "Skin Peels",
        category: "Clinical Exfoliation",
        description: "Gently removes outer skin layers to boost cell renewal, leaving skin smoother and brighter.",
        fullDesc: "Peels gently remove outer skin layers to boost cell renewal, leaving skin smoother, brighter, and refreshed. Clinically designed to address acne, discoloration, uneven texture, fine lines, and dullness, they offer a natural look with minimal downtime and long-lasting results—an effective, non-surgical solution. We offer specialized peels including Glycolic, Amelan, Argipeel, Lactic Acid, Ferulac, Nomelan, Yellow, and Salicylic Acid.",
        image: skinPeels,
        before: "/images/placeholders/skin-before.jpg",
        after: "/images/placeholders/skin-after.jpg",
        benefits: [
          "Smoother Skin – Refines texture, minimizes pores, and evens skin.",
          "Acne & Scar Reduction – Controls breakouts, reduces inflammation, and fades marks.",
          "Brighter Skin – Fades dullness and pigmentation for a clear, radiant look.",
          "Fine Line & Wrinkle Smoothing – Boosts collagen for firmer, smoother skin.",
          "Customizable Strengths – Tailored from mild to deep based on skin needs.",
          "Safe and controlled clinical environment ensuring optimal recovery."
        ],
        stats: { "Downtime": "1-7 Days", "Procedure Time": "30-45 Mins", "Recommended": "3-6 Sessions" },
        faqs: [
          { q: "Do chemical peels hurt?", a: "Most patients experience only a mild tingling or warm sensation during the application, which subsides quickly after neutralization." },
          { q: "How long does the procedure take?", a: "A typical peel session takes about 30 to 45 minutes, making it a perfect 'lunchtime' treatment." },
          { q: "How many sessions are required?", a: "For optimal, long-lasting results, we generally recommend a series of 3 to 6 sessions spaced 2 to 4 weeks apart." },
          { q: "Is there downtime?", a: "Downtime varies by peel strength. Light peels have 1-3 days of mild flaking, while deeper peels may cause shedding for 5-7 days." }
        ]
      },
      {
        slug: "full-body-peel-valliyur",
        title: "Full Body Peel",
        category: "Clinical Exfoliation",
        description: "Advanced exfoliating treatment that removes dead skin, evens tone, and restores radiance body-wide.",
        fullDesc: "Full Body Peel is an advanced exfoliating treatment that removes dead skin, evens tone, and restores a smooth, radiant appearance. Customized for your skin, it targets pigmentation, rough patches, tanning, and uneven texture on the back, arms, legs, and chest.",
        image: fullBodyPeel,
        benefits: [
          "Brighter, Even-Toned Skin – Targets sun damage, tanning, and pigmentation.",
          "Treats Body Acne & Marks – Helps reduce acne, blemishes, and ingrown hairs.",
          "Improves Texture & Smoothness – Removes dead skin buildup and roughness.",
          "Enhances Product Absorption – Prepares your skin to better absorb moisturisers.",
          "Promotes full-body cellular turnover for a youthful glow.",
          "Safe formulations customized for different body areas."
        ],
        stats: { "Safety": "Dermatologically Tested", "Coverage": "Full Body", "Results": "Visible in 1 Session" },
        faqs: [
          { q: "Is the treatment painful?", a: "No, the full body peel is formulated to be gentle yet effective, causing only a mild tingling sensation." },
          { q: "How long does the procedure take?", a: "Depending on the areas being treated, a session typically lasts between 60 to 90 minutes." },
          { q: "When can I see the results?", a: "Many clients notice smoother, brighter skin immediately after their first session, with shedding occurring over the next week." },
          { q: "Is there any downtime?", a: "You can resume normal activities immediately, though you should avoid direct sun exposure and heavy sweating for a few days." }
        ]
      },
      {
        slug: "microdermabrasion-valliyur",
        title: "Microdermabrasion",
        category: "Skin Rejuvenation",
        description: "Non-surgical treatment that removes dead skin, boosts collagen, and reveals a brighter complexion.",
        fullDesc: "Microdermabrasion is a non-surgical treatment that removes dead skin, boosts collagen, and reveals a brighter, smoother complexion. It’s effective for acne scars, uneven tone, and dull skin, with no downtime. A diamond-tip tool exfoliates while vacuum removes dead cells, cleansing and boosting circulation.",
        image: microdermabrasion,
        benefits: [
          "Removes dead cells to brighten and even skin tone.",
          "Painless with little to no downtime.",
          "Minimizes acne scars and texture imperfections.",
          "Flexible Treatment – Works alone or with other therapies.",
          "Stimulates blood flow and collagen production naturally.",
          "Instantly unclogs pores, leaving skin deeply cleansed."
        ],
        stats: { "Pain Level": "Zero", "Downtime": "None", "Technology": "Diamond-Tip" },
        faqs: [
          { q: "How long is a session?", a: "A standard microdermabrasion session takes about 30 to 45 minutes." },
          { q: "Is it safe for all skin types?", a: "Yes, it is a highly customizable and safe exfoliation method for nearly all skin types and tones." },
          { q: "How many treatments are needed?", a: "While your skin will feel softer immediately, a series of 4-6 sessions is recommended for addressing specific concerns like mild scarring." },
          { q: "Can I wear makeup right after?", a: "Yes, you can apply mineral makeup immediately, but we recommend letting your skin breathe for the rest of the day." }
        ]
      },
      {
        slug: "q-switched-laser-therapy",
        title: "Q-Switched Laser Therapy",
        category: "Laser Treatment",
        description: "High-intensity laser targeting melanin to treat pigmentation, sunspots, and tattoos.",
        fullDesc: "Q-Switched Laser Therapy treats pigmentation, melasma, sunspots, and tattoos using high-intensity light that targets melanin without harming the skin. It also boosts collagen, tightens texture, and reduces pores, wrinkles, and acne marks.",
        image: qSwitchedLaser,
        benefits: [
          "Best for Pigmentation – Treats melasma, sun spots, freckles, and age spots.",
          "Collagen Boost – Enhances skin elasticity and texture.",
          "Versatile – Treats pigmentation, removes tattoos, and improves skin texture.",
          "Safe & Non-Invasive – Whitens melanin without harming surrounding skin.",
          "Highly precise targeting of pigment cells.",
          "Quick sessions with minimal to no downtime."
        ],
        stats: { "Downtime": "Minimal", "Target": "Melanin", "Technology": "Q-Switched Light" },
        faqs: [
          { q: "What skin problems will this laser treat?", a: "It effectively treats melasma, freckles, age spots, post-inflammatory hyperpigmentation, and unwanted tattoos." },
          { q: "Will it hurt?", a: "Patients typically describe the sensation as a light rubber band snap against the skin. We use cooling techniques to ensure comfort." },
          { q: "What is the downtime?", a: "There is virtually no downtime. You may experience slight redness for a few hours, but you can return to normal activities immediately." },
          { q: "How many sessions are typically required?", a: "Depending on the depth of the pigmentation, 4 to 8 sessions spaced 3-4 weeks apart are generally recommended." }
        ]
      },
      {
        slug: "mnrf-treatment-valliyur",
        title: "MNRF Treatment",
        category: "Advanced Rejuvenation",
        description: "Combines microneedling and radiofrequency to boost collagen, improve skin texture, and firmness.",
        fullDesc: "MNRF (Microneedling Radio Frequency) Treatment is a non-surgical procedure combining microneedling and radiofrequency to boost collagen, improve skin texture, firmness, and pigmentation. Ideal for scars, fine lines, sagging skin, and large pores, with minimal downtime.",
        image: mnrfTreatment,
        benefits: [
          "Tightens & Lifts – Treats skin laxity on face, neck, and body.",
          "Reduces Scars & Marks – Smooths old scars and textured skin.",
          "Natural Collagen Boost – Improves skin tone, firmness, and glow.",
          "Pore & Pigment Control – Reduces pores and evens skin tone.",
          "Delivers thermal energy deep into the dermis without burning the surface.",
          "Suitable for all skin types, including darker skin tones."
        ],
        stats: { "Downtime": "24-48 Hours", "Anesthesia": "Topical Numbing", "Duration": "30-60 Mins" },
        faqs: [
          { q: "Is the procedure painful?", a: "We apply a strong topical numbing cream prior to the procedure, ensuring you experience minimal discomfort." },
          { q: "How many sessions are needed?", a: "For acne scars and skin tightening, 3 to 5 sessions spaced 4 weeks apart usually yield the best results." },
          { q: "Can I return to work after the procedure?", a: "Yes, though you will have mild redness similar to a sunburn for 24-48 hours, which can easily be managed." },
          { q: "When will I see the final results?", a: "While initial tightening is visible soon after, profound collagen rebuilding continues, showing peak results at 3-6 months." }
        ]
      }
    ]
  },
  {
    category: "Ageless",
    subData: [
      {
        slug: "rf-facials",
        title: "RF Facial",
        category: "Skin Tightening",
        description: "Uses radio frequency technology to tighten skin and remove skin imperfections.",
        fullDesc: "RF Facials use radio frequency technology to remove skin imperfections like moles, warts, and tags while tightening and smoothing the skin. Minimally invasive, it ensures minimal pain, downtime, and promotes a youthful, healthy appearance.",
        image: rfFacials,
        benefits: [
          "Accurate & Safe – RF targets lesions precisely while sparing surrounding tissue.",
          "Non-Surgical Rejuvenation – Tightens and firms skin for a youthful look without surgery.",
          "Bloodless Treatment – Simultaneously cuts and coagulates for a clean, safe procedure.",
          "Minimal Downtime – Quick recovery with no major side effects or pain.",
          "Stimulates deep collagen production for lasting firmness.",
          "Can be used safely on the face, neck, and décolletage."
        ],
        stats: { "Method": "Radio Frequency", "Recovery": "1-2 Days", "Surgery": "None" },
        faqs: [
          { q: "What skin problems can RF treat?", a: "It is excellent for skin tightening, as well as the precise removal of moles, warts, skin tags, and DPNs." },
          { q: "Does it hurt?", a: "Local anesthesia or numbing cream is used prior to lesion removal, making the process completely painless." },
          { q: "How long does an RF facial take?", a: "A standard skin-tightening session takes about 45-60 minutes, perfect for a midday refresh." },
          { q: "Is it safe for darker skin types?", a: "Yes, Radio Frequency technology is color-blind, making it a highly safe option for all skin tones." }
        ]
      },
      {
        slug: "botox-treatment-valliyur",
        title: "Botox",
        category: "Anti-Aging Injectable",
        description: "Non-surgical cosmetic treatment that relaxes facial muscles to reduce dynamic wrinkles.",
        fullDesc: "Botox (Botulinum toxin) is a leading non-surgical cosmetic treatment that relaxes facial muscles to reduce frown, smile, and squint lines. Using trusted brands like Botox® and Dysport®, it delivers safe, natural-looking results that last 3–5 months, leaving the face refreshed and youthful.",
        image: botox,
        benefits: [
          "Reduces dynamic wrinkles like crow’s feet, forehead, and frown lines.",
          "Minimally invasive injectable therapy with minimal discomfort and no downtime.",
          "Prevents new expression lines by relaxing overactive muscles.",
          "Relax jaw muscles for facial slimming (masseter reduction).",
          "Quick procedure taking less than 15 minutes.",
          "FDA-approved, safe, and administered by clinical experts."
        ],
        stats: { "Results Last": "3-5 Months", "Onset": "3-7 Days", "Downtime": "None" },
        faqs: [
          { q: "Is it safe for all skin types?", a: "Yes, Botox targets the underlying muscle, not the skin, making it exceptionally safe for all skin tones and types." },
          { q: "Is the treatment painful?", a: "The injections are done with an ultra-fine needle and are generally described as a quick, mild pinch." },
          { q: "Will my face look frozen?", a: "No, our clinical experts use precise micro-dosing to ensure your face retains natural movement while smoothing out wrinkles." },
          { q: "How soon will I see results?", a: "You will begin to see a smoothing effect within 3 to 7 days, with full results visible at 14 days." }
        ]
      },
      {
        slug: "dermal-fillers-treatment-valliyur",
        title: "Dermal Fillers",
        category: "Anti-Aging Injectable",
        description: "Injectable treatments that restore facial volume, smooth wrinkles, and subtly redefine contours.",
        fullDesc: "Dermal fillers are injectable treatments that restore facial volume, smooth wrinkles, and subtly redefine contours. Made mostly of hyaluronic acid, they enhance firmness and elasticity for a youthful look. At our clinic, we use top-rated fillers like Juvederm and Restylane for optimal results.",
        image: dermalFillers,
        benefits: [
          "Dermal fillers last 6 months to 2 years, depending on type and area.",
          "Customized to your facial contours and unique aesthetic goals.",
          "Non-surgical and minimally invasive, dermal fillers need no incisions or anesthesia.",
          "Restore volume to the cheeks, temples, or under the eyes.",
          "Instantly plumps lips and smooths deep nasolabial folds.",
          "Uses safe, biocompatible Hyaluronic Acid that can be dissolved if needed."
        ],
        stats: { "Material": "Hyaluronic Acid", "Longevity": "6-24 Months", "Results": "Immediate" },
        faqs: [
          { q: "What areas can dermal fillers treat?", a: "They are perfect for plumping lips, lifting cheeks, smoothing smile lines (nasolabial folds), and filling under-eye hollows." },
          { q: "Are there any side effects?", a: "Mild swelling or bruising at the injection site is common but typically resolves within a few days." },
          { q: "Do the results look natural?", a: "Yes, our injectors focus on enhancing your natural anatomy to restore youthful volume without looking 'overdone'." },
          { q: "How long does the procedure take?", a: "Filler appointments usually take between 30 to 45 minutes, providing immediate, visible results." }
        ]
      },
      {
        slug: "face-prp-treatment-valliyur",
        title: "Face PRP (Vampire Facial)",
        category: "Cellular Rejuvenation",
        description: "Natural skin renewal treatment using your own platelet-rich plasma to boost collagen.",
        fullDesc: "Face PRP (Vampire Facial) is a natural skin renewal treatment using your own platelet-rich plasma to boost collagen, improve texture, and create a smoother, radiant, and youthful complexion without chemicals or surgery.",
        image: facePrp,
        benefits: [
          "Stimulates natural collagen to tighten skin and reduce wrinkles.",
          "PRP promotes deep cellular repair using your own growth factors.",
          "Refines skin, smooths pores, and evens tone for a 'glass skin' effect.",
          "Minimally invasive—no cuts, sutures, or harsh chemicals.",
          "Safe and autologous, eliminating the risk of allergic reactions.",
          "Accelerates healing and rejuvenation from the inside out."
        ],
        stats: { "Source": "Autologous Blood", "Downtime": "24-48 Hours", "Format": "Microneedling / Injection" },
        faqs: [
          { q: "What skin issues can it treat?", a: "It is excellent for early signs of aging, acne scars, uneven texture, and restoring a healthy glow to dull skin." },
          { q: "How many sessions are needed?", a: "We typically recommend 3 to 4 sessions spaced a month apart for profound, lasting collagen regeneration." },
          { q: "Does the Vampire Facial hurt?", a: "We apply a strong topical numbing cream to the face prior to the microneedling step, making the process very tolerable." },
          { q: "What is the recovery time?", a: "Your face will look red, similar to a sunburn, for 24-48 hours. By day 3, the skin begins to glow and heal." }
        ]
      },
      {
        slug: "thread-lift",
        title: "Thread Lift",
        category: "Non-Surgical Lift",
        description: "Non-surgical procedure that lifts and tightens sagging skin using dissolvable threads.",
        fullDesc: "Thread Lift is a non-surgical procedure that lifts and tightens sagging skin using dissolvable threads. It enhances collagen, redefines facial contours, and rejuvenates areas like cheeks, jawline, eyebrows, and neck with minimal downtime.",
        image: threadLift,
        benefits: [
          "Instant Facial Lift – Visible results immediately, no surgery.",
          "Tailored Treatment – Targets areas like brows, jawline, neck, or mid-face.",
          "Boosts Collagen – For firmer, smoother skin as threads dissolve.",
          "Minimal Downtime – Resume daily activities within 1–2 days.",
          "Uses safe, fully absorbable PDO or PLLA medical threads.",
          "Provides a natural-looking lift without the 'pulled' look of traditional surgery."
        ],
        stats: { "Anesthesia": "Local", "Longevity": "1-2 Years", "Surgery": "None" },
        faqs: [
          { q: "How long do the results last?", a: "The physical lift is immediate, and the newly produced collagen helps maintain the tightened look for 12 to 18 months." },
          { q: "Are there side effects?", a: "Minor swelling, bruising, or slight puckering of the skin may occur but usually resolves within a week." },
          { q: "Can I feel the threads under my skin?", a: "Initially, you might feel slight tightness, but once settled and integrated with tissue, the threads are unnoticeable." },
          { q: "Is a Thread Lift an alternative to a facelift?", a: "It is an excellent, minimally invasive alternative for patients with mild to moderate skin sagging who do not want surgery." }
        ]
      }
    ]
  },
  {
    category: "Permanent Hair Reduction",
    subData: [
      {
        slug: "ndyag-laser",
        title: "Nd:YAG Laser",
        category: "Laser Hair Reduction",
        description: "Safe, effective laser treatment for unwanted hair, specially calibrated for darker or tanned skin.",
        fullDesc: "Nd:YAG Laser Hair Reduction is a safe, effective treatment for unwanted hair, especially on darker or tanned skin. It targets follicles without harming surrounding tissue, offering permanent results with no pain or downtime. Best for thick, dark hair, suitable for both men and women.",
        image: ndYagLaser,
        benefits: [
          "Safe for tanned, darker, and sensitive skin.",
          "Long-Term Hair Reduction with each treatment.",
          "Targeted Hair Removal – Destroys follicles without affecting surrounding skin.",
          "No-Invasive Procedure – Almost no discomfort with zero downtime.",
          "Prevents painful ingrown hairs and razor bumps.",
          "High-speed laser technology for quick full-body sessions."
        ],
        stats: { "Technology": "1064nm Wavelength", "Skin Types": "Safe for Dark/Tanned", "Pain Level": "Low" },
        faqs: [
          { q: "Does it handle all skin tones?", a: "Yes, the Nd:YAG laser is the gold standard globally for safely treating darker skin tones without risking burns or pigmentation." },
          { q: "How many treatments am I going to need?", a: "Hair grows in cycles. To catch all follicles in their active growth phase, 6 to 8 sessions spaced 4 weeks apart are required." },
          { q: "Is the treatment permanent?", a: "It provides permanent hair *reduction*, meaning the vast majority of hair is destroyed, and any remaining hair grows back significantly finer." },
          { q: "Does it hurt?", a: "The sensation is often described as a warm rubber band snap. Built-in cooling systems make it highly tolerable." }
        ]
      },
      {
        slug: "diode-laser-treatment-valliyur",
        title: "Diode Laser",
        category: "Laser Hair Reduction",
        description: "Advanced method targeting hair follicles with focused light and cooling technology.",
        fullDesc: "Diode Laser Hair Removal is an advanced, effective method for permanent hair reduction. It targets hair follicles with focused light while protecting the skin, using cooling technology for a safe and comfortable treatment suitable for all skin types.",
        image: diodeLaser,
        benefits: [
          "Particularly good for tanned, darker, or sensitive skin.",
          "Visible hair growth reduction with each treatment.",
          "Chooses to destroy hair follicles without harming skin around them.",
          "Almost no discomfort with zero downtime or recovery time.",
          "Integrated Chill-Tip ensures maximum comfort during the session.",
          "Highly effective on thick, coarse terminal hairs."
        ],
        stats: { "Technology": "Diode Focused Light", "Cooling": "Integrated Chill-Tip", "Downtime": "None" },
        faqs: [
          { q: "Is it painful?", a: "The Diode laser utilizes an advanced sapphire cooling tip that chills the skin on contact, making the procedure highly comfortable." },
          { q: "Is there any downtime?", a: "None. You can immediately return to work or daily activities, though sun protection is advised." },
          { q: "Can I shave between sessions?", a: "Yes, you can shave between sessions. However, you must strictly avoid waxing or plucking." },
          { q: "How long does a session take?", a: "Small areas like the upper lip take 5 minutes, while larger areas like full legs or back take 30-45 minutes." }
        ]
      },
      {
        slug: "laser-hair-reduction-valliyur",
        title: "Laser Hair Reduction",
        category: "Laser Hair Reduction",
        description: "USFDA-approved laser technology providing safe, effective hair reduction for Indian skin.",
        fullDesc: "Laser Hair Reduction targets hair follicles for long-term reduction while protecting the skin. At Adglo, USFDA-approved Diode and Nd:YAG lasers provide safe, effective results for Indian skin with minimal discomfort and no downtime.",
        image: laserHairReduction,
        benefits: [
          "Upper Lip & Lower Lip – Provides long-lasting smoothness.",
          "Chin – Manage hormonal or hereditary chin hair permanently.",
          "Underarms – No more razor bumps, odor retention, or dark patches.",
          "Safe and Comfortable Procedures with chill-tip cooling systems.",
          "Saves time and money compared to lifetime waxing and threading.",
          "Leaves skin feeling softer, smoother, and completely irritation-free."
        ],
        stats: { "Approval": "USFDA", "Downtime": "Zero", "Safety": "Clinical Standard" },
        faqs: [
          { q: "Will it work on light or white hair?", a: "Lasers target melanin (dark pigment). Therefore, they are highly effective on dark hair but are not effective on grey, white, or very light blonde hair." },
          { q: "Is it cost-effective?", a: "Yes, compared to a lifetime of waxing, shaving, and threading, a course of laser hair reduction saves significant time and money." },
          { q: "What should I do before my appointment?", a: "You must shave the treatment area 24 hours before your session. Do not wax, pluck, or use hair removal creams." },
          { q: "Is the procedure safe for sensitive areas?", a: "Absolutely. Our clinically calibrated lasers are perfectly safe for sensitive areas like the bikini line and underarms." }
        ]
      }
    ]
  },
  {
    category: "Dry & Dull Skin",
    subData: [
      {
        slug: "hydrafacials-valliyur",
        title: "HydraFacial",
        category: "Clinical Hydration",
        description: "Patented treatment that cleanses, extracts, and hydrates skin using antioxidant serums.",
        fullDesc: "HydraFacial is a patented treatment that instantly brightens and refreshes the skin. Using vortex-suction, it removes impurities while infusing antioxidant serums, delivering visible results for all skin types without downtime.",
        image: hydraFacial,
        benefits: [
          "Cleanses, exfoliates, extracts, and hydrates for instant skin texture improvement.",
          "Smooths skin texture and tone, reducing wrinkles and pores.",
          "Tailored to your skin type and specific concerns, from aging to acne-prone skin.",
          "Painless and comfortable, with no recovery time—ideal for working professionals.",
          "Delivers deep hydration with potent hyaluronic acid and antioxidants.",
          "Instantly unclogs pores via gentle vortex suction without manual squeezing."
        ],
        stats: { "Duration": "30-45 Mins", "Downtime": "Zero", "Results": "Instant Glow" },
        faqs: [
          { q: "Is HydraFacial suitable for sensitive skin?", a: "Absolutely. The vortex technology is incredibly gentle, and the infused serums are customized to soothe rather than irritate sensitive skin." },
          { q: "Does HydraFacial clear acne and blackheads?", a: "Yes, the painless vacuum extraction step efficiently removes blackheads, sebum, and debris from deep within the pores." },
          { q: "How often should I get a HydraFacial?", a: "For maintaining a healthy glow, we recommend one session per month." },
          { q: "Can I wear makeup immediately after?", a: "Yes, there is no downtime. You can apply makeup immediately, though many prefer to enjoy their bare, glowing skin." }
        ]
      }
    ]
  },
  {
    category: "IV Therapy",
    subData: [
      {
        slug: "glutathione-iv-therapy-valliyur",
        title: "Glutathione IV Therapy",
        category: "Wellness & Brightening",
        description: "Delivers powerful antioxidants directly into the bloodstream for enhanced wellness and skin clarity.",
        fullDesc: "Glutathione is a powerful antioxidant that detoxifies cells, supports immunity, and regulates melanin. IV Glutathione Therapy at Adglo delivers it directly into the bloodstream for enhanced wellness, skin clarity, and overall vitality—under clinical supervision, not as a fairness treatment.",
        image: glutathioneTherapy,
        benefits: [
          "Brightens skin naturally by reducing pigmentation and evening out tone.",
          "Boosts immunity and liver function by supporting natural detox.",
          "Fights free radicals from pollution, stress, and UV, preventing dull, ageing skin.",
          "Safe, non-invasive IV infusion by trained professionals with no downtime.",
          "100% absorption rate bypassing the digestive system for immediate effects.",
          "Promotes a healthy, radiant glow from the inside out."
        ],
        stats: { "Administration": "IV Infusion", "Duration": "30-60 Mins", "Quality": "Pharmaceutical-Grade" },
        faqs: [
          { q: "Is this a skin bleaching treatment?", a: "No. It is a powerful antioxidant wellness treatment that naturally regulates melanin production, resulting in a healthy, even-toned glow rather than artificial bleaching." },
          { q: "Are there any side effects?", a: "When administered by our clinical professionals using pharmaceutical-grade ingredients, side effects are extremely rare. You may feel a slight pinch during the IV insertion." },
          { q: "How many sessions are recommended?", a: "A typical protocol involves 5 to 10 sessions spaced weekly, followed by maintenance sessions as needed." },
          { q: "Is Glutathione IV safe?", a: "Yes, it is administered by certified medical staff in a sterile environment using strictly regulated, safe dosages." }
        ]
      }
    ]
  }
];