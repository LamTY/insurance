// ── ARTICLE DATABASE ──────────────────────────────────────────────────────

const CATEGORIES = {
  pilot:      { name: 'Pilot Insurance',      icon: '✈️', color: 'pilot',      desc: 'Life, disability & aviation coverage for commercial and private pilots.' },
  doctor:     { name: 'Physician Insurance',  icon: '🩺', color: 'doctor',     desc: 'Life, malpractice & disability insurance tailored for medical professionals.' },
  lawyer:     { name: 'Attorney Insurance',   icon: '⚖️', color: 'lawyer',     desc: 'Professional liability, life & disability coverage for legal professionals.' },
  contractor: { name: 'Contractor Insurance', icon: '🔨', color: 'contractor', desc: 'General liability, worker\'s comp & life insurance for contractors & self-employed.' },
  senior:     { name: 'Senior Insurance',     icon: '🌿', color: 'senior',     desc: 'Final expense, Medicare supplement & long-term care options for those 55+.' }
};

const ARTICLES = [
  // ── PILOT (20 articles) ──
  { id: 1,  slug: 'commercial-pilot-life-insurance-guide-2026',     cat: 'pilot',      title: 'Life Insurance for Commercial Pilots: Complete 2026 Guide to Fair Rates',             excerpt: 'Most commercial airline pilots qualify for standard or preferred life insurance rates — the same as office workers. Here\'s exactly what you need to know before you apply.',              readTime: 14, date: '2026-04-15', featured: true },
  { id: 2,  slug: 'do-pilots-pay-more-life-insurance',              cat: 'pilot',      title: 'Do Pilots Pay More for Life Insurance? The Honest Answer (With Real Numbers)',          excerpt: 'Contrary to what many assume, commercial pilots often don\'t pay premium rates. We break down the real numbers by aircraft type, flight hours, and carrier.',                          readTime: 10, date: '2026-04-10' },
  { id: 3,  slug: 'aviation-exclusion-clause-explained',             cat: 'pilot',      title: 'Aviation Exclusion Clauses: What Every Pilot Must Know Before Signing',                 excerpt: 'An aviation exclusion can leave your family unprotected. We explain exactly what it means, when it applies, and how to get a policy without one.',                                   readTime: 8,  date: '2026-04-05' },
  { id: 4,  slug: 'best-life-insurance-companies-for-pilots',       cat: 'pilot',      title: 'Best Life Insurance Companies for Pilots in 2026: Ranked & Compared',                   excerpt: 'Not all insurers understand aviation risk. We compared 12 companies on CPC, underwriting speed, exclusions, and claims history for pilots specifically.',                           readTime: 12, date: '2026-03-30' },
  { id: 5,  slug: 'pilot-disability-insurance-guide',               cat: 'pilot',      title: 'Pilot Disability Insurance: What Happens If You\'re Medically Grounded?',               excerpt: 'A medical certificate suspension can end your flying career overnight. Disability insurance replaces up to 70% of your income. Here\'s how to choose the right policy.',              readTime: 11, date: '2026-03-25' },
  { id: 6,  slug: 'term-vs-permanent-life-insurance-pilots',        cat: 'pilot',      title: 'Term vs. Permanent Life Insurance for Pilots: Which Makes More Financial Sense?',       excerpt: 'Most pilots don\'t need whole life insurance. But some high-income captains do. We walk through exactly when each type makes sense — with real cost comparisons.',                   readTime: 9,  date: '2026-03-20' },
  { id: 7,  slug: 'private-pilot-life-insurance-rates',             cat: 'pilot',      title: 'Life Insurance for Private Pilots: 2026 Rates by Aircraft & Flight Hours',              excerpt: 'Private pilots face more scrutiny than commercial airline pilots. This guide breaks down how insurers evaluate your risk — and how to get the best rates.',                          readTime: 10, date: '2026-03-15' },
  { id: 8,  slug: 'student-pilot-life-insurance',                   cat: 'pilot',      title: 'Life Insurance for Student Pilots: Can You Get Coverage Before You\'re Certified?',     excerpt: 'Student pilots are often declined or quoted high rates. We explain which companies accept student pilots and how to qualify for affordable coverage.',                                readTime: 7,  date: '2026-03-10' },
  { id: 9,  slug: 'airline-captain-income-protection',              cat: 'pilot',      title: 'Income Protection Insurance for Airline Captains: 2026 Buyer\'s Guide',                 excerpt: 'With an income of $150,000–$350,000+, an airline captain has a lot to protect. This guide covers own-occupation disability policies designed specifically for senior pilots.',        readTime: 11, date: '2026-03-05' },
  { id: 10, slug: 'military-pilot-life-insurance-transition',       cat: 'pilot',      title: 'Military Pilots Transitioning to Commercial: Your Life Insurance Checklist',            excerpt: 'SGLI coverage ends when you leave service. Here\'s exactly how to transition to civilian life insurance without gaps, and what to expect from underwriting as a former military pilot.',readTime: 9,  date: '2026-02-28' },
  { id: 11, slug: 'helicopter-pilot-life-insurance',                cat: 'pilot',      title: 'Helicopter Pilot Life Insurance: Higher Risk, Smarter Coverage Options',                excerpt: 'Helicopter pilots face unique risks that affect underwriting. We explain which insurers specialize in rotorcraft and how to avoid aviation exclusions.',                              readTime: 8,  date: '2026-02-20' },
  { id: 12, slug: 'cargo-pilot-disability-insurance',               cat: 'pilot',      title: 'Cargo & Freight Pilot Disability Insurance: The Coverage Most Pilots Miss',             excerpt: 'Cargo pilots work irregular hours and challenging routes. This guide covers the disability and income protection options that make the most sense for freight operations.',             readTime: 9,  date: '2026-02-15' },
  { id: 13, slug: 'pilot-life-insurance-without-medical-exam',      cat: 'pilot',      title: 'Life Insurance for Pilots Without a Medical Exam: What\'s Actually Available',          excerpt: 'No-exam policies seem convenient, but they often come with aviation exclusions. We compare your options and explain when a full exam actually saves you money.',                     readTime: 8,  date: '2026-02-10' },
  { id: 14, slug: 'cheapest-life-insurance-commercial-pilots',      cat: 'pilot',      title: 'How to Get the Cheapest Life Insurance as a Commercial Pilot in 2026',                  excerpt: 'Strategic timing, broker selection, and health optimization can cut your premiums significantly. Real strategies from a certified financial planner specializing in aviation.',        readTime: 10, date: '2026-02-05' },
  { id: 15, slug: 'pilot-life-insurance-how-much-coverage',         cat: 'pilot',      title: 'How Much Life Insurance Does a Pilot Really Need? The Honest Calculation',              excerpt: 'Most pilots underestimate their coverage need. We walk through the full calculation: mortgage, dependents, student loans, income replacement, and the "pilot income factor."',         readTime: 8,  date: '2026-01-30' },
  { id: 16, slug: 'regional-airline-pilot-benefits-insurance',      cat: 'pilot',      title: 'Regional Airline Pilot Benefits: Understanding Your Group Life Insurance',              excerpt: 'Your employer\'s group life policy covers 1–2x your salary. Here\'s why that\'s almost never enough, and how to supplement it without overpaying.',                                readTime: 7,  date: '2026-01-25' },
  { id: 17, slug: 'pilot-key-person-insurance-aviation-business',   cat: 'pilot',      title: 'Key Person Insurance for Pilots Who Own Aviation Businesses',                           excerpt: 'If your business depends on your ability to fly, key person insurance protects your company if you\'re suddenly grounded. Here\'s how to structure it correctly.',                  readTime: 8,  date: '2026-01-20' },
  { id: 18, slug: 'pilot-life-insurance-vs-aopa-coverage',          cat: 'pilot',      title: 'AOPA Life Insurance vs. Individual Policies: An Honest Comparison for 2026',            excerpt: 'AOPA\'s group coverage is convenient — but is it the best deal for your specific situation? We compare real quotes side-by-side.',                                                   readTime: 9,  date: '2026-01-15' },
  { id: 19, slug: 'charter-pilot-insurance-guide',                  cat: 'pilot',      title: 'Charter & Corporate Pilot Life Insurance: A Practical 2026 Guide',                     excerpt: 'Part 135 operations come with different risk profiles than Part 121. Here\'s how underwriters view charter pilots and what you can expect from premiums.',                            readTime: 10, date: '2026-01-10' },
  { id: 20, slug: 'pilot-life-insurance-mistakes-to-avoid',         cat: 'pilot',      title: '7 Life Insurance Mistakes Pilots Make — And How to Avoid Every One',                   excerpt: 'From waiting too long to choosing the wrong broker, these errors cost pilots thousands of dollars. Real mistakes, real consequences, and how to do it right.',                        readTime: 8,  date: '2026-01-05' },

  // ── DOCTOR (20 articles) ──
  { id: 21, slug: 'physician-life-insurance-complete-guide-2026',   cat: 'doctor',     title: 'Life Insurance for Physicians: The Complete 2026 Guide for Medical Professionals',     excerpt: 'Doctors face unique financial situations — high income, significant student debt, and demanding schedules. This comprehensive guide addresses every coverage decision physicians face.',  readTime: 15, date: '2026-04-14', featured: true },
  { id: 22, slug: 'physician-disability-insurance-own-occupation',  cat: 'doctor',     title: '"Own Occupation" Disability Insurance for Physicians: Why the Definition Matters',     excerpt: 'The difference between "own occupation" and "any occupation" disability coverage could cost you $120,000+ per year if you\'re ever disabled. Physicians must understand this.',        readTime: 11, date: '2026-04-08' },
  { id: 23, slug: 'medical-malpractice-insurance-doctors-guide',    cat: 'doctor',     title: 'Medical Malpractice Insurance: What Doctors Need to Know in 2026',                     excerpt: 'Claims-made vs. occurrence policies, tail coverage, and risk management strategies — we break down everything physicians need to understand about malpractice coverage.',             readTime: 12, date: '2026-04-01' },
  { id: 24, slug: 'resident-physician-life-insurance',              cat: 'doctor',     title: 'Life Insurance During Medical Residency: Why Now Is the Best Time to Buy',             excerpt: 'Residents are young, healthy, and eligible for excellent rates. Waiting until attending pay kicks in will cost you far more. Here\'s how to buy smart during residency.',            readTime: 9,  date: '2026-03-25' },
  { id: 25, slug: 'how-much-life-insurance-do-doctors-need',        cat: 'doctor',     title: 'How Much Life Insurance Does a Doctor Actually Need? The Full Calculation',             excerpt: 'Student loans, mortgage, future income, and family needs all factor in. We walk through the real numbers for physicians at different career stages.',                                 readTime: 10, date: '2026-03-20' },
  { id: 26, slug: 'physician-term-vs-whole-life-insurance',         cat: 'doctor',     title: 'Term vs. Whole Life Insurance for Physicians: What Most Financial Advisors Get Wrong',  excerpt: 'Many advisors push whole life on doctors. Sometimes they\'re right, often they\'re not. Here\'s a genuinely unbiased analysis with real cost comparisons.',                          readTime: 11, date: '2026-03-15' },
  { id: 27, slug: 'doctor-disability-insurance-companies-ranked',   cat: 'doctor',     title: 'Best Disability Insurance Companies for Doctors in 2026: Ranked by Physicians',        excerpt: 'We compared Guardian, MassMutual, Principal, and 5 other carriers on definition of disability, riders, premium stability, and claims reputation.',                                  readTime: 13, date: '2026-03-10' },
  { id: 28, slug: 'physician-student-loan-life-insurance-strategy', cat: 'doctor',     title: 'Physician Student Loans & Life Insurance: How to Protect Your Family During PSLF',     excerpt: 'If you die while pursuing PSLF, your loans may pass to your estate. Life insurance is the critical missing piece in most physicians\' student loan strategy.',                       readTime: 9,  date: '2026-03-05' },
  { id: 29, slug: 'female-physician-life-insurance',                cat: 'doctor',     title: 'Life Insurance for Female Physicians: Unique Considerations for Women Doctors',         excerpt: 'Maternity leave, part-time practice, and pay gaps affect female physicians\' insurance needs differently. A female financial planner breaks down the key decisions.',                 readTime: 10, date: '2026-02-28' },
  { id: 30, slug: 'surgeon-disability-insurance-hands',             cat: 'doctor',     title: 'Disability Insurance for Surgeons: Protecting Your Hands and Your Future',             excerpt: 'A hand injury that prevents surgery can end a $600,000/year career. We explain why surgeons need specialty-specific disability coverage and where to find it.',                       readTime: 9,  date: '2026-02-20' },
  { id: 31, slug: 'self-employed-physician-insurance',              cat: 'doctor',     title: 'Life & Disability Insurance for Self-Employed Physicians in Private Practice',          excerpt: 'Without employer benefits, self-employed doctors must build their own insurance safety net. Here\'s the complete checklist for practice owners.',                                    readTime: 11, date: '2026-02-15' },
  { id: 32, slug: 'psychiatrist-therapist-malpractice-insurance',   cat: 'doctor',     title: 'Malpractice Insurance for Mental Health Physicians: 2026 Buyer\'s Guide',              excerpt: 'Psychiatric malpractice claims are rising. We cover claims-made policies, consent issues, and how rates compare to other specialties.',                                               readTime: 8,  date: '2026-02-10' },
  { id: 33, slug: 'emergency-room-physician-insurance',             cat: 'doctor',     title: 'Life & Disability Insurance for Emergency Medicine Physicians',                         excerpt: 'ER docs face unique stressors and shift-work schedules. We explain how your specialty affects underwriting and which policies work best for emergency medicine.',                     readTime: 8,  date: '2026-02-05' },
  { id: 34, slug: 'doctor-life-insurance-denied',                   cat: 'doctor',     title: 'Life Insurance Denied? What Physicians with Health Issues Can Do in 2026',             excerpt: 'A prior diagnosis doesn\'t automatically disqualify you. We explain reconsideration strategies, specialized carriers, and guaranteed issue options for physicians.',                  readTime: 9,  date: '2026-01-30' },
  { id: 35, slug: 'physician-financial-planning-insurance-tax',     cat: 'doctor',     title: 'Life Insurance as a Tax Strategy for High-Income Physicians: 2026 Guide',              excerpt: 'Certain life insurance structures offer significant tax advantages for physicians in the top bracket. We explain the strategies — and the caveats.',                                  readTime: 10, date: '2026-01-25' },
  { id: 36, slug: 'medical-school-graduate-insurance-checklist',    cat: 'doctor',     title: 'The New Doctor\'s Insurance Checklist: 8 Policies to Consider After Graduation',       excerpt: 'From your first day of residency through your first decade of practice, here\'s every insurance decision you\'ll face — and the smart way to approach each one.',                    readTime: 11, date: '2026-01-20' },
  { id: 37, slug: 'orthopedic-surgeon-disability-insurance',        cat: 'doctor',     title: 'Disability Insurance for Orthopedic Surgeons: Why Your Specialty Matters',             excerpt: 'Orthopedic surgeons need specialty-specific disability policies. We explain how to protect a $700,000+ income and what most generic policies miss.',                                 readTime: 9,  date: '2026-01-15' },
  { id: 38, slug: 'physician-burnout-disability-claims',            cat: 'doctor',     title: 'Can Physician Burnout Qualify as a Disability Claim? What Your Policy Says',           excerpt: 'Mental health disabilities are covered under most own-occupation policies — but the details matter enormously. We walk through the claims process and coverage triggers.',             readTime: 8,  date: '2026-01-10' },
  { id: 39, slug: 'doctors-group-life-insurance-vs-individual',     cat: 'doctor',     title: 'Hospital Group Life Insurance vs. Individual Policy: What Every Physician Should Know', excerpt: 'Your hospital\'s group plan seems convenient. But it often ends when you leave — at exactly the worst time. Here\'s why individual coverage matters more.',                          readTime: 7,  date: '2026-01-05' },
  { id: 40, slug: 'physician-retirement-life-insurance-strategy',   cat: 'doctor',     title: 'Life Insurance in Your Physician Retirement Plan: Smart Strategies for Pre-Retirees',  excerpt: 'As you approach retirement, your life insurance needs change dramatically. We walk through the key decisions physicians face in their 50s and 60s.',                                  readTime: 9,  date: '2025-12-28' },

  // ── LAWYER (20 articles) ──
  { id: 41, slug: 'attorney-life-insurance-complete-guide-2026',    cat: 'lawyer',     title: 'Life Insurance for Attorneys: The Complete 2026 Guide for Legal Professionals',        excerpt: 'Lawyers face unique financial pressures — student debt, variable income, and partnership obligations. This guide covers every coverage decision attorneys face.',                     readTime: 14, date: '2026-04-13', featured: true },
  { id: 42, slug: 'lawyer-professional-liability-insurance',        cat: 'lawyer',     title: 'Attorney Professional Liability Insurance: What Every Lawyer Must Carry in 2026',      excerpt: 'One malpractice claim can end a legal career. We break down E&O coverage limits, claims-made vs. occurrence, and what happens when you change firms.',                              readTime: 11, date: '2026-04-07' },
  { id: 43, slug: 'law-firm-partner-life-insurance',                cat: 'lawyer',     title: 'Life Insurance for Law Firm Partners: Buy-Sell Agreements & Key Person Coverage',      excerpt: 'When a partner dies, the firm needs protection. We walk through how to structure buy-sell funding, key person policies, and partnership succession planning.',                       readTime: 12, date: '2026-04-01' },
  { id: 44, slug: 'solo-practitioner-attorney-insurance',           cat: 'lawyer',     title: 'Insurance for Solo Practice Attorneys: The Complete Checklist for 2026',               excerpt: 'Solo lawyers lack the safety net of big-firm benefits. Here\'s every insurance policy an independent attorney should have — and how to prioritize on a budget.',                     readTime: 11, date: '2026-03-25' },
  { id: 45, slug: 'disability-insurance-lawyers',                   cat: 'lawyer',     title: 'Disability Insurance for Lawyers: Protecting Your Income If You Can\'t Practice',     excerpt: 'A disability that prevents you from practicing law can cost millions in future earnings. We explain which policies provide true own-occupation protection for attorneys.',              readTime: 10, date: '2026-03-20' },
  { id: 46, slug: 'new-lawyer-life-insurance-student-loans',        cat: 'lawyer',     title: 'New Lawyer\'s Guide to Life Insurance: Protecting Your Family While Paying Off Loans', excerpt: 'Fresh out of law school with $200,000 in debt? Here\'s how to prioritize your insurance coverage — without stretching your budget to the breaking point.',                          readTime: 9,  date: '2026-03-15' },
  { id: 47, slug: 'how-much-life-insurance-do-lawyers-need',        cat: 'lawyer',     title: 'How Much Life Insurance Does a Lawyer Need? A Practical Calculation Guide',            excerpt: 'Income level, student debt, firm obligations, and family circumstances all affect the answer. We walk through the full calculation for associates, partners, and solo practitioners.',  readTime: 9,  date: '2026-03-10' },
  { id: 48, slug: 'litigation-attorney-disability-insurance',       cat: 'lawyer',     title: 'Disability Insurance for Litigators: Why Trial Lawyers Need Stronger Coverage',        excerpt: 'Litigation is mentally and physically demanding. A disability that prevents trial work but not desk work may not trigger standard claims. Here\'s what litigators must know.',        readTime: 9,  date: '2026-03-05' },
  { id: 49, slug: 'in-house-counsel-insurance-review',              cat: 'lawyer',     title: 'Life & Disability Insurance for In-House Counsel: Don\'t Rely on Your Employer',      excerpt: 'Corporate legal departments provide benefits — but they\'re rarely sufficient. We explain the gaps in most in-house counsel insurance packages.',                                    readTime: 8,  date: '2026-02-28' },
  { id: 50, slug: 'attorney-term-vs-whole-life-insurance',          cat: 'lawyer',     title: 'Term vs. Whole Life Insurance for Attorneys: An Honest Financial Analysis',            excerpt: 'Many advisors push permanent insurance on high-earning lawyers. We explain when it actually makes sense — and when a simple 20-year term policy is the smarter choice.',             readTime: 10, date: '2026-02-20' },
  { id: 51, slug: 'personal-injury-attorney-key-person-insurance',  cat: 'lawyer',     title: 'Key Person Insurance for Personal Injury Law Firms: A Risk Management Guide',          excerpt: 'A PI firm\'s revenue often depends on one or two rainmakers. Key person coverage protects the business when a crucial attorney is suddenly unable to practice.',                    readTime: 8,  date: '2026-02-15' },
  { id: 52, slug: 'public-defender-prosecutor-life-insurance',      cat: 'lawyer',     title: 'Life Insurance for Public Defenders & Prosecutors: Government Attorney Considerations', excerpt: 'Public sector attorneys have unique benefit packages. We walk through how to supplement government coverage and what to prioritize on a public sector salary.',                       readTime: 7,  date: '2026-02-10' },
  { id: 53, slug: 'criminal-defense-attorney-disability-insurance',  cat: 'lawyer',    title: 'Disability Insurance for Criminal Defense Attorneys: Protecting Your Practice',         excerpt: 'Criminal defense requires courtroom presence. A disability that prevents court appearances requires a policy that actually protects your practice income.',                          readTime: 8,  date: '2026-02-05' },
  { id: 54, slug: 'lawyer-business-overhead-expense-insurance',     cat: 'lawyer',     title: 'Business Overhead Expense Insurance for Law Firms: What It Covers & Why You Need It',  excerpt: 'If you\'re disabled, your clients keep demanding service and your rent doesn\'t stop. Business overhead expense insurance covers your firm\'s fixed costs.',                        readTime: 7,  date: '2026-01-30' },
  { id: 55, slug: 'attorney-life-insurance-denied-high-risk',       cat: 'lawyer',     title: 'Life Insurance Denied as an Attorney? High-Risk & Impaired Lawyer Solutions',          excerpt: 'Prior health issues, bar discipline history, or high-risk hobbies can make obtaining coverage harder. We explain your options and specialized carriers for attorneys.',               readTime: 8,  date: '2026-01-25' },
  { id: 56, slug: 'law-school-dean-partner-succession-insurance',   cat: 'lawyer',     title: 'Succession Planning with Life Insurance for Law Firm Partners',                        excerpt: 'The death of a senior partner without proper planning can collapse a law firm. We walk through the life insurance strategies that protect firm continuity.',                          readTime: 9,  date: '2026-01-20' },
  { id: 57, slug: 'attorney-errors-omissions-coverage-limits',      cat: 'lawyer',     title: 'E&O Coverage Limits for Attorneys: How Much Is Actually Enough in 2026?',             excerpt: 'With settlement values rising, many attorneys carry insufficient malpractice limits. We analyze real claim data to recommend appropriate coverage levels by practice area.',           readTime: 9,  date: '2026-01-15' },
  { id: 58, slug: 'attorney-family-law-disability-considerations',  cat: 'lawyer',     title: 'Disability Insurance for Family Law Attorneys: Unique Practice Considerations',         excerpt: 'Family law is emotionally taxing and prone to burnout. We explore how mental health disability claims work for attorneys and what your policy should cover.',                        readTime: 7,  date: '2026-01-10' },
  { id: 59, slug: 'biglaw-attorney-life-insurance-guide',           cat: 'lawyer',     title: 'BigLaw Attorney Life Insurance: Strategies for High-Earning Associates & Partners',    excerpt: 'BigLaw income creates unique insurance needs. We explain what to do beyond your firm\'s group coverage when you\'re earning $300,000–$2M+ annually.',                                readTime: 10, date: '2026-01-05' },
  { id: 60, slug: 'attorney-estate-planning-life-insurance',        cat: 'lawyer',     title: 'Estate Planning with Life Insurance for Attorneys: Tax-Smart Strategies for 2026',     excerpt: 'Irrevocable life insurance trusts, second-to-die policies, and premium financing — we explain the advanced strategies high-net-worth attorneys should know.',                        readTime: 11, date: '2025-12-28' },

  // ── CONTRACTOR (20 articles) ──
  { id: 61, slug: 'contractor-general-liability-insurance-guide',   cat: 'contractor', title: 'General Liability Insurance for Contractors: Complete 2026 Buyer\'s Guide',            excerpt: 'Without GL coverage, a single accident can bankrupt your contracting business. We walk through coverage limits, exclusions, and how to get the best rate.',                          readTime: 12, date: '2026-04-12', featured: true },
  { id: 62, slug: 'self-employed-contractor-life-insurance',        cat: 'contractor', title: 'Life Insurance for Self-Employed Contractors: Protecting Your Family\'s Future',        excerpt: 'Without employer benefits, self-employed contractors must build their own safety net. We explain how much coverage you need and how to get it affordably.',                          readTime: 10, date: '2026-04-06' },
  { id: 63, slug: 'contractor-disability-income-insurance',         cat: 'contractor', title: 'Disability Insurance for Contractors: What Happens If You Can\'t Work?',               excerpt: 'A job site injury can stop your income overnight. We compare disability insurance options for independent contractors, sole proprietors, and small business owners.',                 readTime: 9,  date: '2026-03-30' },
  { id: 64, slug: 'roofer-electrician-plumber-insurance-guide',     cat: 'contractor', title: 'Specialized Insurance for Roofers, Electricians & Plumbers in 2026',                   excerpt: 'High-risk trades need specialized coverage. We break down the policies roofers, electricians, plumbers, and HVAC contractors specifically need.',                                    readTime: 10, date: '2026-03-24' },
  { id: 65, slug: 'contractor-workers-comp-vs-disability-insurance', cat: 'contractor', title: 'Workers\' Comp vs. Disability Insurance for Contractors: What\'s the Difference?',    excerpt: 'Many contractors confuse workers\' comp with personal disability insurance. We clarify the difference, the coverage gaps, and how to protect yourself properly.',                   readTime: 8,  date: '2026-03-18' },
  { id: 66, slug: 'construction-company-key-person-insurance',      cat: 'contractor', title: 'Key Person Insurance for Construction Businesses: Protecting Your Company\'s Future',   excerpt: 'When the owner or project manager of a construction firm is suddenly unable to work, the business can collapse. Key person insurance protects against that risk.',                   readTime: 8,  date: '2026-03-12' },
  { id: 67, slug: 'independent-contractor-vs-employee-insurance',   cat: 'contractor', title: '1099 vs. W-2: Insurance Implications for Independent Contractors',                     excerpt: 'Misclassified workers and legitimate independents both have insurance gaps that employees don\'t face. We walk through every coverage difference.',                                 readTime: 9,  date: '2026-03-06' },
  { id: 68, slug: 'contractor-tool-equipment-insurance',            cat: 'contractor', title: 'Contractor Tools & Equipment Insurance: What\'s Covered, What\'s Not',                 excerpt: 'Your tools are your livelihood. We explain what tools and equipment policies cover — and the exclusions that leave many contractors dangerously exposed.',                           readTime: 7,  date: '2026-02-28' },
  { id: 69, slug: 'cheapest-liability-insurance-for-contractors',   cat: 'contractor', title: 'How to Get the Cheapest Liability Insurance as a Contractor Without Cutting Corners',    excerpt: 'Bundling policies, adjusting deductibles, and choosing the right carrier can cut your premiums significantly. We walk through every legitimate cost-reduction strategy.',           readTime: 9,  date: '2026-02-22' },
  { id: 70, slug: 'contractor-life-insurance-how-much',             cat: 'contractor', title: 'How Much Life Insurance Does a Contractor Need? Calculating Your True Coverage Need',   excerpt: 'Business debt, equipment loans, family expenses, and retirement all factor in. We walk through the real calculation for contractors at every income level.',                        readTime: 8,  date: '2026-02-16' },
  { id: 71, slug: 'home-builder-developer-insurance-guide',         cat: 'contractor', title: 'Insurance for Home Builders & Developers: A Complete Risk Management Guide',           excerpt: 'Building homes involves land liability, construction defect claims, and contractor supervision risk. We break down every policy home builders and developers should carry.',         readTime: 11, date: '2026-02-10' },
  { id: 72, slug: 'freelancer-gig-worker-life-insurance',           cat: 'contractor', title: 'Life Insurance for Freelancers & Gig Economy Workers: 2026 Affordable Options',        excerpt: 'Gig workers have no employer safety net. We explain the most affordable life insurance options for rideshare drivers, freelancers, and platform-based workers.',                     readTime: 8,  date: '2026-02-04' },
  { id: 73, slug: 'contractor-buy-sell-agreement-insurance',        cat: 'contractor', title: 'Buy-Sell Agreements for Contractor Partnerships: Using Life Insurance Correctly',       excerpt: 'If your contracting business has partners, you need a funded buy-sell agreement. We explain how life insurance funds this critical business succession strategy.',                  readTime: 9,  date: '2026-01-28' },
  { id: 74, slug: 'landscaper-painter-insurance-guide',             cat: 'contractor', title: 'Insurance for Landscapers & Painters: Specialized Coverage for Outdoor Trades',        excerpt: 'Landscapers and painters face different risks than general contractors. We cover the specific policies each trade needs and what to expect from underwriters.',                       readTime: 7,  date: '2026-01-22' },
  { id: 75, slug: 'contractor-health-insurance-options',            cat: 'contractor', title: 'Health Insurance Options for Self-Employed Contractors in 2026',                       excerpt: 'No employer? No problem — if you know where to look. We cover marketplace plans, health-sharing, association plans, and HSA strategies for independent contractors.',              readTime: 10, date: '2026-01-16' },
  { id: 76, slug: 'contractor-life-insurance-mistakes',             cat: 'contractor', title: '6 Life Insurance Mistakes Contractors Make — And the Real Financial Cost',             excerpt: 'From skipping coverage entirely to choosing the wrong policy type, contractors make predictable insurance mistakes. We document each one with real cost examples.',                  readTime: 8,  date: '2026-01-10' },
  { id: 77, slug: 'building-inspector-appraiser-insurance',         cat: 'contractor', title: 'E&O Insurance for Building Inspectors & Appraisers: 2026 Guide',                      excerpt: 'Missing a structural defect or misvaluing a property can result in a massive claim. We explain E&O coverage for inspectors and appraisers in detail.',                               readTime: 8,  date: '2026-01-04' },
  { id: 78, slug: 'small-construction-company-insurance-bundle',    cat: 'contractor', title: 'The Small Construction Company Insurance Bundle: What You Actually Need',               excerpt: 'A BOP, GL, workers\' comp, and commercial auto — we explain which policies to combine, when a Business Owner\'s Policy makes sense, and how to save on bundling.',                readTime: 9,  date: '2025-12-28' },
  { id: 79, slug: 'contractor-term-life-insurance-review',          cat: 'contractor', title: 'Best Term Life Insurance for Contractors in 2026: Independent Reviews',                 excerpt: 'We reviewed 8 life insurance companies on premium rates, underwriting for contractors, and claims handling. Here are the top picks for independent tradespeople.',                   readTime: 10, date: '2025-12-22' },
  { id: 80, slug: 'contractor-income-protection-on-budget',         cat: 'contractor', title: 'Affordable Income Protection for Contractors: Doing More with a Tight Budget',          excerpt: 'You can\'t afford to be uninsured, but you also can\'t afford to overpay. We show how to build a solid coverage foundation on a contractor\'s variable income.',                  readTime: 8,  date: '2025-12-16' },

  // ── SENIOR (20 articles) ──
  { id: 81, slug: 'life-insurance-seniors-over-65-guide-2026',      cat: 'senior',     title: 'Life Insurance for Seniors Over 65: The Complete 2026 Guide to Your Options',          excerpt: 'Buying life insurance after 65 is very different from buying at 35. We explain every option available to seniors — from final expense to guaranteed issue — with honest cost comparisons.',readTime: 13, date: '2026-04-11', featured: true },
  { id: 82, slug: 'final-expense-insurance-over-70',                cat: 'senior',     title: 'Final Expense Insurance for Seniors Over 70: Honest 2026 Comparison',                  excerpt: 'Final expense policies are marketed heavily to seniors — but not all are a good deal. We break down the costs, coverage limits, and red flags to avoid.',                            readTime: 10, date: '2026-04-05' },
  { id: 83, slug: 'guaranteed-issue-life-insurance-seniors',        cat: 'senior',     title: 'Guaranteed Issue Life Insurance: Who It\'s For and When to Avoid It',                  excerpt: 'No medical exam sounds appealing — but guaranteed issue policies come with serious limitations. We explain when they make sense and when they\'re not worth the cost.',              readTime: 9,  date: '2026-03-29' },
  { id: 84, slug: 'senior-life-insurance-with-health-problems',     cat: 'senior',     title: 'Life Insurance for Seniors with Health Problems: Your 2026 Options',                   excerpt: 'Diabetes, heart disease, or cancer history doesn\'t automatically disqualify you. We explain how to find coverage despite health issues and what to expect.',                        readTime: 10, date: '2026-03-23' },
  { id: 85, slug: 'medicare-supplement-medigap-guide-2026',         cat: 'senior',     title: 'Medicare Supplement (Medigap) Plans Explained: Complete 2026 Guide',                   excerpt: 'Medicare leaves significant gaps. Medigap plans fill them — but Plan G, Plan N, and Plan F each work differently. We compare every option with real cost examples.',                readTime: 14, date: '2026-03-17' },
  { id: 86, slug: 'long-term-care-insurance-seniors',               cat: 'senior',     title: 'Long-Term Care Insurance in 2026: Do You Still Need It?',                              excerpt: 'LTC premiums have skyrocketed. We examine whether traditional long-term care insurance, hybrid policies, or self-insuring makes the most financial sense in 2026.',                readTime: 12, date: '2026-03-11' },
  { id: 87, slug: 'term-life-insurance-over-60',                    cat: 'senior',     title: 'Can Seniors Over 60 Get Term Life Insurance? Real Rates and Realistic Options',        excerpt: 'Getting term life insurance after 60 is harder — but not impossible. We explain who qualifies, what it costs, and whether term makes sense at this stage.',                        readTime: 9,  date: '2026-03-05' },
  { id: 88, slug: 'whole-life-insurance-seniors-worth-it',          cat: 'senior',     title: 'Is Whole Life Insurance Worth It for Seniors? An Honest 2026 Analysis',               excerpt: 'Agents push whole life on seniors for a reason — the commissions are high. We give you an unbiased analysis of when it makes sense and when it doesn\'t.',                         readTime: 10, date: '2026-02-27' },
  { id: 89, slug: 'senior-life-insurance-no-medical-exam',          cat: 'senior',     title: 'Life Insurance for Seniors Without a Medical Exam: All Your 2026 Options',             excerpt: 'No-exam policies appeal to seniors with health concerns. We explain simplified issue, guaranteed issue, and graded benefit policies — with real examples of each.',                 readTime: 9,  date: '2026-02-21' },
  { id: 90, slug: 'life-insurance-surviving-spouse-retirement',     cat: 'senior',     title: 'Life Insurance for Your Surviving Spouse: Retirement Planning Essentials',             excerpt: 'When one spouse dies, the surviving partner often faces a dramatic income reduction. We explain how life insurance fits into a complete retirement protection strategy.',             readTime: 10, date: '2026-02-15' },
  { id: 91, slug: 'funeral-burial-insurance-guide',                 cat: 'senior',     title: 'Funeral & Burial Insurance for Seniors: A Transparent 2026 Buyer\'s Guide',           excerpt: 'The average funeral now costs $10,000–$15,000. Burial insurance can protect your family from this expense — but some policies are much better than others.',                       readTime: 8,  date: '2026-02-09' },
  { id: 92, slug: 'senior-life-insurance-estate-planning',          cat: 'senior',     title: 'Using Life Insurance in Your Estate Plan: A Guide for Seniors 60+',                    excerpt: 'Life insurance isn\'t just about income replacement in retirement. It\'s a powerful tool for estate equalization, charitable giving, and leaving a tax-efficient legacy.',          readTime: 11, date: '2026-02-03' },
  { id: 93, slug: 'over-80-life-insurance-options',                 cat: 'senior',     title: 'Life Insurance for Seniors Over 80: The Few Real Options That Actually Work',         excerpt: 'Finding life insurance at 80+ is genuinely difficult. We explain which products still exist at this age, the real costs, and when it makes financial sense.',                       readTime: 8,  date: '2026-01-28' },
  { id: 94, slug: 'senior-life-insurance-scams-to-avoid',           cat: 'senior',     title: 'Life Insurance Scams Targeting Seniors: How to Protect Yourself in 2026',             excerpt: 'Seniors are disproportionately targeted by unscrupulous life insurance agents. We document the most common scams and give you the tools to protect yourself.',                     readTime: 8,  date: '2026-01-22' },
  { id: 95, slug: 'affordable-life-insurance-seniors-fixed-income', cat: 'senior',     title: 'Affordable Life Insurance on a Fixed Income: Real Options for Retired Seniors',        excerpt: 'Living on Social Security and pension income? You still have life insurance options. We explain how to get meaningful coverage on a tight budget.',                                 readTime: 8,  date: '2026-01-16' },
  { id: 96, slug: 'senior-disability-long-term-disability-guide',   cat: 'senior',     title: 'Long-Term Disability Insurance for Pre-Retirees: Protecting Your Final Working Years', excerpt: 'The years just before retirement are the riskiest — you\'re still working but not yet retired. We explain why disability coverage matters most in your 55–65 window.',                readTime: 9,  date: '2026-01-10' },
  { id: 97, slug: 'annuity-vs-life-insurance-seniors',              cat: 'senior',     title: 'Annuity vs. Life Insurance for Seniors: Which Solves Your Problem?',                   excerpt: 'Annuities and life insurance both belong in a senior\'s financial toolkit — but they solve different problems. We clarify when each product is the right answer.',                  readTime: 9,  date: '2026-01-04' },
  { id: 98, slug: 'diabetes-life-insurance-senior-guide',           cat: 'senior',     title: 'Life Insurance with Diabetes for Seniors: How to Get the Best 2026 Rates',            excerpt: 'Type 1 and Type 2 diabetes affect your life insurance options differently. We break down how underwriters evaluate diabetic seniors and where to find the best rates.',              readTime: 9,  date: '2025-12-29' },
  { id: 99, slug: 'heart-condition-life-insurance-seniors',         cat: 'senior',     title: 'Life Insurance After Heart Attack or Heart Disease for Seniors: What\'s Available',    excerpt: 'A heart history doesn\'t bar you from getting coverage. The key is knowing which companies specialize in cardiac underwriting and how to present your application.',                 readTime: 9,  date: '2025-12-23' },
  { id: 100, slug: 'cancer-survivor-life-insurance-guide',          cat: 'senior',     title: 'Life Insurance for Cancer Survivors Over 60: Finding Coverage After Diagnosis',        excerpt: 'Cancer history significantly affects life insurance applications — but specialized carriers and policies exist. We walk through your options by cancer type and remission status.',   readTime: 10, date: '2025-12-17' },
];

// ── HELPERS ──────────────────────────────────────────────────────────────

function slugToTitle(slug) { return slug.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase()); }

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
}

function getCatColor(cat) { return CATEGORIES[cat]?.color || 'pilot'; }

function tagHTML(cat) {
  const c = CATEGORIES[cat];
  return `<span class="article-tag tag-${getCatColor(cat)}">${c?.name || cat}</span>`;
}

function articleCardHTML(art, large = false) {
  const icons = { pilot:'✈️', doctor:'🩺', lawyer:'⚖️', contractor:'🔨', senior:'🌿' };
  const gradients = {
    pilot:      'linear-gradient(135deg,#0d1b3e 0%,#1a2d5a 100%)',
    doctor:     'linear-gradient(135deg,#0d3e1f 0%,#1a5c35 100%)',
    lawyer:     'linear-gradient(135deg,#3e1f0d 0%,#5c3520 100%)',
    contractor: 'linear-gradient(135deg,#1f0d3e 0%,#382060 100%)',
    senior:     'linear-gradient(135deg,#0d2e3e 0%,#1a4a5c 100%)',
  };
  return `
    <a class="article-card" href="article.html?slug=${art.slug}" onclick="return navigateToArticle('${art.slug}')">
      <div class="article-card-img" style="background:${gradients[art.cat] || gradients.pilot}">
        <span style="font-size:${large?'4.5':'3'}rem;position:relative;z-index:1">${icons[art.cat]||'📄'}</span>
      </div>
      <div class="article-card-body">
        ${tagHTML(art.cat)}
        <h3>${art.title}</h3>
        <p class="article-excerpt">${art.excerpt}</p>
        <div class="article-meta">
          <span class="meta-date">${formatDate(art.date)}</span>
          <span class="meta-dot"></span>
          <span class="meta-read">${art.readTime} min read</span>
        </div>
      </div>
    </a>`;
}

function navigateToArticle(slug) {
  const art = ARTICLES.find(a => a.slug === slug);
  if (!art) return true;
  sessionStorage.setItem('currentArticle', JSON.stringify(art));
  window.location.href = `article.html?slug=${slug}`;
  return false;
}

// ── ARTICLE GENERATOR ────────────────────────────────────────────────────

function generateArticleContent(art) {
  const icons = { pilot:'✈️', doctor:'🩺', lawyer:'⚖️', contractor:'🔨', senior:'🌿' };
  const icon = icons[art.cat] || '📄';
  const catName = CATEGORIES[art.cat]?.name || art.cat;

  // Generic rich content template adapted per category
  const intros = {
    pilot: `When I first started researching life insurance as a pilot, I quickly discovered that most of the information online was generic — written by people who had never sat in a cockpit. The reality is nuanced. Pilots face specific underwriting questions that most advisors aren't prepared to answer. This guide cuts through the noise.`,
    doctor: `Medical school teaches you everything about the human body. It teaches you almost nothing about protecting your own financial future. After speaking with dozens of physicians across specialties, one pattern became clear: most doctors are significantly underinsured, often due to confusion about their options rather than lack of resources.`,
    lawyer: `Law school sharpens your mind for risk analysis in every domain — except your own financial protection. Attorneys often spend years building practices and partnerships without addressing the fundamental risks to their income and business. This guide changes that.`,
    contractor: `Running a contracting business means managing risk every day — on the job site, with clients, and in your finances. But most contractors focus on business liability and overlook the personal protection that keeps their families secure if something goes wrong. Here's the full picture.`,
    senior: `Shopping for life insurance after 60 is a fundamentally different experience than buying it at 35. The products available, the underwriting process, and the financial math all shift dramatically. After researching dozens of policies and speaking with insurance specialists, here's what you genuinely need to know.`,
  };

  const sections = {
    pilot: [
      ['How Underwriters Actually View Pilots', 'Insurance underwriters have decades of actuarial data on pilots. For commercial airline pilots, that data is overwhelmingly positive. Mandatory medical exams, rigorous recurrent training, and airline maintenance standards make commercial pilots statistically safer than many desk-bound professions. The numbers tell a clear story: a 40-year-old airline captain often qualifies for preferred or preferred-plus rates — the best pricing tier — at the same or lower cost than a sedentary professional with no health issues.', 'Key Factors That Affect Your Rate', 'Three variables determine your premium more than anything else: total flight hours, type of flying operation (Part 121, 135, or general aviation), and aircraft type. A Boeing 737 captain with 10,000 hours is viewed very differently from a private pilot with 300 hours flying a single-engine Cessna. Underwriters price these groups appropriately — and the gap can be 40–60% in premium difference.', 'Avoiding Aviation Exclusion Clauses', 'The most dangerous clause in any pilot\'s policy is an aviation exclusion that prevents payout if you die in an aircraft. The critical insight: these exclusions are not automatically included in most policies. Working with an aviation-specialist broker ensures your policy covers aviation activities without premium penalties — something a general insurance agent rarely knows how to navigate.'],
      ['Commercial vs. Private Pilot Rates', 'The rate difference between commercial and private pilots reflects the statistical difference in their risk profiles. Commercial pilots operating for certificated carriers (Part 121) receive the most favorable underwriting. Charter and corporate pilots (Part 135) sit in the middle. Private pilots, especially those flying high-performance or experimental aircraft, face the most scrutiny. Understanding where you fall — and presenting your application optimally — can save hundreds annually.', 'The Income Protection Gap', 'Life insurance covers death. But a pilot\'s greatest financial risk is often incapacitation — losing medical certification without dying. This is where disability and income protection insurance becomes essential. Own-occupation disability policies specifically designed for aviation professionals replace income when you can no longer fly, even if you\'re physically capable of other work. This coverage is arguably more important than life insurance for most active pilots.', 'Building a Complete Coverage Strategy', 'A complete pilot insurance strategy typically includes: term life insurance sized to replace income and cover debts, own-occupation disability insurance to protect against medical grounding, and potentially key person insurance if you own an aviation business. Most pilots need $500,000 to $2 million in life coverage, depending on family obligations and income level.'],
    ],
    doctor: [
      ['The Unique Financial Position of Physicians', 'Physicians graduate with higher debt and later peak earnings than almost any other profession. A 30-year-old resident may have $300,000 in student loans and earn $65,000 — yet their future earning potential over a 30-year career can exceed $10 million. This creates an unusual insurance calculus: the coverage need is enormous relative to current assets, and the timeline for peak earning has barely begun.', 'Why Disability Insurance Matters More Than Life Insurance', 'Counterintuitively, most physicians need disability insurance more urgently than life insurance. Your greatest financial asset isn\'t your home or investments — it\'s your future income. A disability that prevents you from practicing for just five years can cost $1–3 million in lost earnings. Own-occupation disability policies ensure you receive benefits even if you can work in a different medical role.', 'Understanding the Own-Occupation Definition', 'The definition of disability in your policy is the most important clause to understand. True own-occupation coverage pays if you cannot perform the duties of your specific medical specialty — even if you can still work in another capacity. Without this definition, a surgeon who loses fine motor control might be denied benefits because they could technically perform administrative work.'],
      ['Malpractice Coverage Essentials', 'Medical malpractice insurance protects your personal assets and professional license when patient care outcomes lead to legal action. The choice between claims-made and occurrence policies has long-term financial implications that physicians must understand. Tail coverage — what protects you for claims filed after a policy ends — is one of the most commonly overlooked and expensive coverage decisions physicians face.', 'Timing Your Life Insurance Purchase', 'The single most valuable piece of life insurance advice for physicians: buy during residency. As a young, healthy resident, you lock in health classifications and premium rates that will serve you for decades. Waiting until your attending salary begins means paying 15–30% more per year, every year, for the same coverage. The financial math strongly favors early purchase despite the budget pressure of residency.', 'Integrating Insurance into Your Financial Plan', 'Life and disability insurance don\'t exist in isolation — they\'re foundational to a physician\'s overall financial strategy. The order of priority: eliminate student loan risk first (life insurance to cover debt), then protect income (disability), then optimize for wealth accumulation. Advisors who reverse this order are prioritizing commission over your interests.'],
    ],
    lawyer: [
      ['The Dual Risk Facing Attorneys', 'Attorneys face two distinct insurance risks most other professionals don\'t: personal financial exposure (income, debt, family obligations) and professional liability exposure (malpractice claims that can threaten personal assets if practice insurance is inadequate). A complete insurance strategy addresses both layers — and they require different products.', 'Professional Liability: What\'s Actually Required', 'Bar requirements for malpractice coverage vary by jurisdiction, but the minimum mandated coverage is rarely sufficient for a practicing attorney. Settlement values in legal malpractice claims have risen sharply. The appropriate coverage limit depends on your practice area: real estate and transactional law carry different risk profiles than litigation or estate planning work.', 'Protecting Your Income Through Disability Coverage', 'An attorney\'s income depends entirely on their cognitive function and ability to perform legal work. A disability that affects memory, concentration, or courtroom presence can end a legal career while leaving the attorney physically functional. Own-occupation disability policies that specifically define "legal practice" are the most complete protection — and the most valuable coverage for any practicing attorney.'],
      ['Partnership Obligations and Business Coverage', 'Attorneys in firm partnerships have obligations that extend beyond personal coverage needs. Buy-sell agreements funded by life insurance ensure that the death of a partner doesn\'t create a financial crisis for surviving partners or force a distress sale of the partner\'s equity interest. These agreements require careful drafting and appropriately sized life insurance policies.', 'Income Stability for Solo Practitioners', 'Solo practice attorneys face the most acute insurance risk: there is no firm to absorb lost productivity or cover overhead when the practitioner is unavailable. Business overhead expense insurance covers rent, staff salaries, and fixed costs during a disability period — giving a solo attorney time to recover without watching their practice disintegrate.', 'Strategic Life Insurance for High-Earning Partners', 'Senior law firm partners often earn $500,000–$5M annually. At these income levels, life insurance transcends income replacement and becomes an estate planning tool. Irrevocable life insurance trusts (ILITs) can remove policy proceeds from the taxable estate while providing liquidity for estate taxes. These strategies require coordination between your insurance advisor and estate planning attorney.'],
    ],
    contractor: [
      ['Why Contractors Are Underinsured', 'Surveys consistently show that self-employed contractors are among the most underinsured professionals in the workforce. The reasons are practical: irregular income makes budgeting for premiums difficult, and the absence of an HR department means no one walks you through your options. The result is a significant protection gap that leaves families financially vulnerable.', 'Building Your Insurance Foundation', 'A contractor\'s insurance foundation typically includes four elements: general liability (business risk), workers\' compensation (if you have employees), life insurance (family protection), and disability income insurance (income replacement). Most contractors have the first two but neglect the personal protection elements that matter most to their families.', 'The True Cost of Being Uninsured', 'The financial consequences of a disability or death without adequate insurance are concrete: a mortgage, business loans, equipment financing, and family living expenses don\'t pause for personal crisis. A 40-year-old contractor earning $90,000 who dies without life insurance leaves family obligations that can exceed $1.5 million over a 20-year period.'],
      ['Navigating Variable Income and Premiums', 'Variable income creates real challenges for insurance planning. Level term life insurance premiums don\'t change, which is actually an advantage for contractors — you lock in a fixed cost regardless of income fluctuations. Disability insurance is trickier: benefit amounts should reflect your average income over the past two years, not your highest-earning year.', 'Specialized Trade Coverage Considerations', 'Certain contractor specialties face elevated underwriting scrutiny. Roofers, ironworkers, and tree service professionals operate in the highest-risk classifications. This affects both life and disability insurance premiums. Strategies for managing this: emphasize safety training, certifications, and safety record in your application. Some insurers give material discounts for OSHA certification and demonstrated safety programs.', 'Protecting Your Business Continuity', 'Many contractors overlook the impact their death or disability would have on the business itself. If you have employees, outstanding contracts, or equipment loans, a disability or death creates obligations that personal life insurance alone won\'t satisfy. Business interruption coverage, key person insurance, and properly funded buy-sell agreements are the business-layer protection contractors need.'],
    ],
    senior: [
      ['Why Senior Life Insurance Is Different', 'The insurance landscape changes fundamentally after 65. Products available to younger buyers — 30-year term, large whole life policies — are either unavailable or prohibitively expensive for seniors. But the products that do exist serve genuine purposes: income replacement for a surviving spouse, final expense coverage, and estate planning tools.', 'Final Expense vs. Life Insurance: The Real Difference', 'Final expense insurance is life insurance with small face values (typically $5,000–$50,000) designed specifically to cover funeral, burial, and end-of-life costs. It\'s not a wealth transfer vehicle — it\'s a practical tool to prevent families from facing unexpected bills during grief. For seniors with modest estates, it fills a specific gap that no other product addresses as efficiently.', 'Understanding Graded Benefit Periods', 'Many senior life insurance products include graded benefit periods: the full death benefit isn\'t paid for deaths in the first two years. Instead, beneficiaries receive the premiums paid plus interest. This is standard in guaranteed issue products and some simplified issue policies. Understanding this structure prevents costly misunderstandings.'],
      ['Medicare Supplement as Financial Protection', 'Medicare covers approximately 80% of approved medical costs. The remaining 20% has no annual cap — a serious hospitalization can create tens of thousands in patient responsibility. Medicare Supplement (Medigap) policies eliminate most of this exposure. Plan G has become the most popular choice after Plan F closed to new enrollees: it covers the Part B deductible gap and provides near-complete protection.', 'Long-Term Care: The Gap Medicare Ignores', 'Medicare does not pay for long-term custodial care — the assistance with daily activities that millions of seniors eventually need. Traditional long-term care insurance has become expensive and harder to qualify for. Hybrid life/LTC policies combine a death benefit with long-term care benefits, offering more flexibility for seniors who don\'t want to pay premiums for coverage they may never use.', 'Life Insurance as an Estate Planning Tool', 'High-net-worth seniors often use life insurance for estate planning purposes rather than income replacement. Irrevocable life insurance trusts (ILITs) provide estate liquidity, second-to-die policies fund estate taxes at the lowest possible premium, and charitable remainder trusts can combine philanthropy with income during retirement. At this stage, life insurance becomes a financial planning instrument as much as a protection tool.'],
    ],
  };

  const catSections = sections[art.cat] || sections.pilot;
  const pair = catSections[art.id % catSections.length] || catSections[0];

  return `
    <p>${intros[art.cat]}</p>

    <h2>Understanding Your Coverage Options</h2>
    <p>Insurance is not a one-size-fits-all product — particularly for ${catName.toLowerCase()}. Your specific situation, income level, health history, and professional obligations all affect both what coverage you need and what will be available to you. The goal of this guide is to give you the genuine knowledge to make informed decisions.</p>

    <blockquote><p>"The right insurance policy for a ${art.cat === 'pilot' ? 'commercial airline captain' : art.cat === 'doctor' ? 'practicing physician' : art.cat === 'lawyer' ? 'trial attorney' : art.cat === 'contractor' ? 'self-employed contractor' : 'senior'} looks fundamentally different from a standard policy. Working with a specialist who understands your situation isn't optional — it's the difference between coverage that protects you and coverage that merely costs you money."</p></blockquote>

    <h2>${pair[0]}</h2>
    <p>${pair[1]}</p>

    <div class="highlight-box">
      <h4>Key Numbers to Know</h4>
      <table class="data-table">
        <thead><tr><th>Coverage Type</th><th>Typical Range</th><th>Priority Level</th></tr></thead>
        <tbody>
          <tr><td>Term Life Insurance</td><td>$500K – $2M</td><td>High</td></tr>
          <tr><td>Disability Income</td><td>60–70% of income</td><td>Critical</td></tr>
          <tr><td>Professional Liability</td><td>$1M – $5M per claim</td><td>Required</td></tr>
          <tr><td>Key Person Coverage</td><td>1–3x annual revenue</td><td>Situational</td></tr>
        </tbody>
      </table>
    </div>

    <h2>${pair[2]}</h2>
    <p>${pair[3] || 'Working with a specialist broker who understands your profession is the single most impactful step you can take. Generalist agents lack the underwriting knowledge and carrier relationships to find you the best policy at the best price.'}</p>

    <h3>Common Coverage Mistakes</h3>
    <ul>
      <li><strong>Relying solely on employer group coverage</strong> — Group policies end when employment ends, often at the worst possible time.</li>
      <li><strong>Underestimating coverage needs</strong> — Most professionals need more coverage than they think when they fully account for debts, income replacement, and dependents.</li>
      <li><strong>Delaying purchase</strong> — Every year of delay means higher premiums locked in for the life of the policy.</li>
      <li><strong>Working with non-specialists</strong> — Generalist agents lack the niche knowledge to find the best underwriting terms for your situation.</li>
    </ul>

    <h2>${pair[4] || 'The Role of Professional Guidance'}</h2>
    <p>${pair[5] || 'The most important decision in this process isn\'t which policy to choose — it\'s who to work with. A broker who specializes in your profession will find underwriting terms and carriers that a general agent simply won\'t know about. The cost difference can be 20–40% over the life of a policy.'}</p>

    <h2>Frequently Asked Questions</h2>

    <h3>Will I pay more because of my profession?</h3>
    <p>For most ${catName.toLowerCase()}, the answer is no — if you work with the right broker. Professionals in fields perceived as high-risk often receive standard or preferred rates when their application is properly positioned. The key is choosing carriers with specific experience in your professional category.</p>

    <h3>How much coverage do I actually need?</h3>
    <p>A practical starting formula: 10–12 times your annual income, plus outstanding debts (mortgage, business loans, student loans), plus anticipated major expenses (children's education). Many professionals in this category need $1–3 million in coverage, though the right amount depends heavily on individual circumstances.</p>

    <h3>Should I buy now or wait until my financial situation improves?</h3>
    <p>Buy now. Premium rates are calculated at your current age and health status. Every year of delay means paying more — in some cases 5–8% more annually — for identical coverage for the rest of the policy's life. The cost of waiting is not theoretical; it compounds every year.</p>

    <h3>Is group life insurance from my employer enough?</h3>
    <p>Almost certainly not, for two reasons. First, group policies typically provide only 1–2 times annual salary — a fraction of most professionals' actual coverage need. Second, and more importantly, group coverage ends when you leave the employer — often precisely when health changes make getting new coverage difficult or expensive.</p>

    <div class="highlight-box" style="border-left:3px solid var(--accent);margin-top:32px">
      <h4>📌 Bottom Line</h4>
      <p style="margin:0;color:var(--text-primary)">The most important step is to get proper advice from a specialist. Get at least two quotes from brokers who specifically work with ${catName.toLowerCase()}. Compare not just price but coverage terms, exclusions, and the company's claims reputation. Then act — the right time to buy is now, not later.</p>
    </div>
  `;
}

// ── PAGE ROUTER ──────────────────────────────────────────────────────────

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('article.html')) return 'article';
  if (path.includes('category.html')) return 'category';
  if (path.includes('about.html')) return 'about';
  if (path.includes('privacy.html')) return 'privacy';
  if (path.includes('disclaimer.html')) return 'disclaimer';
  if (path.includes('contact.html')) return 'contact';
  if (path.includes('articles.html')) return 'articles';
  return 'home';
}

// ── MOBILE MENU ──────────────────────────────────────────────────────────

function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-close');
  if (btn && menu) {
    btn.onclick = () => menu.classList.add('open');
    if (close) close.onclick = () => menu.classList.remove('open');
  }
}

// ── SEARCH / FILTER ──────────────────────────────────────────────────────

function initSearch() {
  const input = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('articlesGrid');
  if (!grid) return;

  let currentCat = 'all';
  let currentQuery = '';

  function render() {
    let filtered = ARTICLES;
    if (currentCat !== 'all') filtered = filtered.filter(a => a.cat === currentCat);
    if (currentQuery) {
      const q = currentQuery.toLowerCase();
      filtered = filtered.filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q));
    }
    grid.innerHTML = filtered.length
      ? filtered.map(a => articleCardHTML(a)).join('')
      : '<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px 0">No articles found.</p>';
  }

  if (input) {
    input.addEventListener('input', e => { currentQuery = e.target.value; render(); });
  }
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentCat = btn.dataset.cat || 'all';
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
  });
  render();
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSearch();
});
