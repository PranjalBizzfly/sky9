import {
  Search, Target, Share2, PenTool, Funnel, BarChart3,
  Brain, MessageSquare, Zap, Wrench, Briefcase,
  Bug, FileText, ClipboardCheck, AlertTriangle, Users,
  Database, GitBranch, Settings, TrendingUp, PieChart,
  GraduationCap, Award, BookOpen, Rocket, Shield,
  Monitor, Globe, MapPin, CheckCircle, Layers
} from 'lucide-react';

// ============================================================
// COMPANY / STANDALONE PAGES
// ============================================================
export const standalonePages = [
  {
    slug: 'our-mission',
    title: 'Our Mission',
    breadcrumbLabel: 'Our Mission',
    subtitle: 'Empowering People Through Practical Skills',
    badge: 'Sky9 Mission',
    description: 'Our mission is to help individuals build practical skills that can create meaningful career, professional, freelancing, and business opportunities. We want learners to feel confident when they enter the professional world by giving them knowledge that goes beyond textbooks and theoretical education. Sky9 India focuses on creating learning experiences that are easy to understand, practical to apply, and relevant to modern industry requirements. Through expert mentorship, hands-on learning, assignments, projects, internship exposure, and certification guidance, we aim to support learners at every important stage of their professional development.',
    highlights: [
      'Focus on practical, hands-on application over passive theory',
      'Bridge the gap between academic education and industry expectations',
      'Integrate real project experience into every core program',
      'Provide continuous mentorship and career readiness support'
    ],
    faqs: [
      { question: 'What does "practical skills" actually mean at Sky9 India?', answer: 'It means every module pairs theory with a hands-on task, running a real ad campaign, writing an actual test case, or configuring a live automation, so you leave with work you can show, not just notes you memorized.' },
      { question: 'How is this mission different from a typical coaching institute?', answer: 'Most institutes optimize for covering a syllabus. Sky9 India optimizes for whether you can independently perform the skill afterward, which is why internships, assignments, and mentor feedback are built into every course rather than offered as an add-on.' },
      { question: 'Does the mission apply equally to freelancing and business goals, not just jobs?', answer: 'Yes. The mission explicitly includes freelancing and business opportunities alongside employment, so course content covers client-facing skills like proposals, pricing, and portfolio building, not only interview preparation.' },
      { question: 'How does mentorship fit into fulfilling this mission?', answer: 'Every assignment is reviewed by a mentor who has worked in that field, so feedback reflects how the skill is actually judged in a real workplace rather than an academic rubric.' },
      { question: 'What happens after I complete a course, does the mission end there?', answer: 'No. Career readiness support, certification guidance, and community access continue after course completion, since the mission is about long-term professional confidence, not just finishing a syllabus.' },
      { question: 'Is this mission specific to certain courses, or all programs?', answer: 'It applies across every Sky9 India program, Digital Marketing, AI & Automation, Software Testing, and ERP all follow the same practical-first, mentorship-backed structure.' },
      { question: 'How do you measure whether the mission is being achieved for a student?', answer: 'Through practical checkpoints: completed assignments, internship deliverables, and certification readiness, tangible proof of skill rather than attendance or theory scores alone.' },
      { question: 'Who is this mission built for, beginners or experienced professionals?', answer: 'Both. The mission explicitly targets career, professional, freelancing, and business opportunities, so course pacing accommodates complete beginners while still going deep enough for professionals upskilling or switching fields.' }
    ]
  },
  {
    slug: 'our-vision',
    title: 'Our Vision',
    breadcrumbLabel: 'Our Vision',
    subtitle: 'Creating a Future-Ready Learning Community',
    badge: 'Sky9 Vision',
    description: 'Our vision is to become a trusted destination for practical education, digital skills, technology training, and professional development. We want to build a learning community where people from different educational and professional backgrounds can develop the confidence to learn new technologies and adapt to changing industries. The future of work is changing rapidly because of artificial intelligence, automation, digital transformation, and new technologies. Sky9 India aims to help learners stay prepared for these changes by providing access to skills that are relevant today and valuable for the future.',
    highlights: [
      'Empower 50,000+ learners across India with job-ready skills',
      'Establish benchmark quality standards in EdTech training',
      'Build strong hiring networks across Pune and pan-India',
      'Foster innovation and AI adoption across small businesses'
    ],
    faqs: [
      { question: 'Why does the vision focus on "future-ready" rather than just "job-ready" skills?', answer: 'Because AI, automation, and digital transformation are reshaping roles faster than static curricula can track, the vision is built around adaptability, teaching learners how to pick up new tools, not just today\'s specific tool list.' },
      { question: 'How does Sky9 India plan to reach learners beyond Pune?', answer: 'Through live interactive online batches alongside the Pune classroom, plus a growing hiring and mentor network extending across other Indian cities as the community expands.' },
      { question: 'What role does AI adoption for small businesses play in this vision?', answer: 'Small businesses are often the slowest to adopt new technology despite needing it most, so the vision includes practical AI and automation training aimed specifically at helping smaller companies stay competitive.' },
      { question: 'Is the vision only about individual learners, or also about industry standards?', answer: 'Both, it includes establishing benchmark quality standards in EdTech training, meaning the goal is to raise the bar for how practical training is delivered industry-wide, not just to teach individual courses.' },
      { question: 'How does building hiring networks support this long-term vision?', answer: 'A learning community is only as valuable as the opportunities it connects to, so partnerships with hiring companies across Pune and pan-India are treated as part of the vision, not a separate afterthought.' },
      { question: 'Does this vision include supporting people from non-technical backgrounds?', answer: 'Yes. The vision explicitly includes people from different educational and professional backgrounds developing confidence with new technology, regardless of their starting point.' },
      { question: 'How will Sky9 India adapt its programs as industries keep changing?', answer: 'By continuously updating course content around current tools and workflows (like generative AI and modern automation platforms) rather than treating any curriculum as fixed or final.' },
      { question: 'What is the timeframe for achieving this vision?', answer: 'It\'s framed as an ongoing commitment rather than a fixed deadline, the vision evolves alongside the pace of technological change it is designed to prepare learners for.' }
    ]
  },
  {
    slug: 'why-choose-sky9',
    title: 'Why Choose Sky9',
    breadcrumbLabel: 'Why Choose Sky9',
    subtitle: 'Education Designed for the Real World',
    badge: 'The Sky9 Advantage',
    description: 'Choosing the right training program is an important decision because the skills you learn can influence your future opportunities. At Sky9 India, we focus on practical learning experiences that help students understand how professional skills are used outside the classroom. Our approach combines structured learning, practical assignments, expert mentorship, industry-focused tools, and career readiness. Instead of simply completing lessons, learners are encouraged to practice, explore, solve problems, and build confidence. Sky9 India highlights practical hands-on learning, expert mentorship, internship-integrated programs, and certification support as key parts of its learning approach.',
    highlights: [
      '100% Practical Hands-On Learning',
      'Expert Industry Mentorship',
      '1-Month Structured Internships Integrated',
      'Google & Meta Certification Guidance',
      'Offline Classroom in Pune & Live Online Batches',
      'Career Support with Resume Building & Mock Interviews'
    ],
    faqs: [
      { question: 'What specifically makes Sky9 India\'s training "practical" compared to other institutes?', answer: 'Every module is built around real tools and live tasks, running actual ad campaigns, writing real test cases, configuring real automations, rather than slide-based theory followed by a multiple-choice quiz.' },
      { question: 'Is the 1-month internship a separate paid add-on?', answer: 'No, it\'s structured and integrated directly into the core training programs, so you move from learning a skill to applying it on real work within the same course timeline.' },
      { question: 'Do I have to choose between classroom and online, can I mix both?', answer: 'You choose one mode at enrollment (offline in Pune or live online), and both deliver the identical curriculum and hands-on assignments, so the choice comes down to your logistics, not the quality of instruction.' },
      { question: 'Are the mentors actual industry professionals, or full-time trainers only?', answer: 'Courses are designed and delivered by practicing professionals with real domain experience, so the guidance reflects current industry practice rather than a fixed textbook curriculum.' },
      { question: 'What does "certification guidance" include beyond the Sky9 certificate?', answer: 'Alongside the Sky9 Course Completion Certificate, you get dedicated mentoring and preparation support for recognized external certifications like Google Ads, Google Analytics, and Meta Blueprint.' },
      { question: 'How is this advantage different for someone with zero prior experience?', answer: 'The practical-first structure means you build a working skill and a portfolio piece from week one, which matters most for beginners who need proof of capability, not just a certificate, when applying for their first role.' },
      { question: 'Does choosing Sky9 India guarantee a job afterward?', answer: 'No training program can guarantee employment, but the combination of practical skills, an internship, and career support (resume building, mock interviews, referrals) is specifically designed to maximize your readiness and visibility to hiring companies.' },
      { question: 'How do I know this approach actually works before enrolling?', answer: 'You can review course-specific FAQs, module breakdowns, and student testimonials on each course page, and speak directly with an admissions counselor about outcomes relevant to your specific background.' }
    ]
  },
  {
    slug: 'our-learning-approach',
    title: 'Our Learning Approach',
    breadcrumbLabel: 'Our Learning Approach',
    subtitle: 'Learn, Practice, Apply, Grow.',
    badge: 'Methodology',
    description: 'At Sky9 India, learning is designed as a journey rather than simply a collection of lessons. Students begin by understanding important concepts and gradually move towards practical applications. The learning approach focuses on understanding, practice, experimentation, assignments, projects, and professional guidance. This helps learners develop both knowledge and confidence. Our goal is to encourage students to ask questions, explore new tools, solve problems, and develop the ability to apply their learning in practical situations.',
    pillars: [
      { step: '01', title: 'Knowledge Building', desc: 'Establishing robust core concepts through expert-led interactive sessions.' },
      { step: '02', title: 'Practical Application', desc: 'Applying concepts through hands-on lab assignments and live tool simulations.' },
      { step: '03', title: 'Industry Exposure', desc: 'Working on real projects via integrated 1-month internships.' },
      { step: '04', title: 'Career Readiness', desc: 'Portfolio building, resume optimization, mock interviews, and placement referrals.' }
    ],
    faqs: [
      { question: 'Do I move through these 4 pillars in a strict order, or can they overlap?', answer: 'They\'re sequential by design, Knowledge Building grounds you before Practical Application, which feeds into the Industry Exposure stage, but later modules often loop back to reinforce earlier concepts as you apply them.' },
      { question: 'How long does each pillar typically take?', answer: 'It varies by course: a 7-day business bootcamp compresses all 4 pillars tightly, while longer programs like Software Testing (4-6 months) spend proportionally more time in Practical Application and Industry Exposure.' },
      { question: 'What exactly happens during "Industry Exposure"?', answer: 'This is where the 1-month structured internship happens, you work on live client-style deliverables (real campaigns, real test cycles, real automation builds) under mentor supervision, not simulated exercises.' },
      { question: 'Is "Career Readiness" only about resumes, or does it include technical prep too?', answer: 'It covers both, portfolio building and resume optimization alongside mock interviews and placement referrals, so you\'re prepared for both the technical and communication sides of job hunting.' },
      { question: 'Can I skip the Knowledge Building stage if I already have some background?', answer: 'The structure keeps everyone grounded in the same fundamentals to avoid knowledge gaps, but instructors do adjust pacing for learners who demonstrate stronger starting knowledge in early sessions.' },
      { question: 'How is "Practical Application" different from just watching demo videos?', answer: 'You directly perform the task yourself, configuring the tool, writing the test case, building the campaign, with mentor feedback on your specific output, not passively observing someone else do it.' },
      { question: 'Does this 4-pillar approach apply to every Sky9 India course equally?', answer: 'Yes, it\'s the consistent methodology across Digital Marketing, AI & Automation, Software Testing, and ERP, though the specific tools and deliverables differ by course.' },
      { question: 'What if I finish all 4 pillars but still feel unprepared for interviews?', answer: 'Career Readiness support continues after course completion, including additional mock interview sessions and mentor guidance, since building genuine confidence sometimes takes more than one pass.' }
    ]
  },
  {
    slug: 'our-commitment',
    title: 'Our Commitment',
    breadcrumbLabel: 'Our Commitment',
    subtitle: 'Helping You Move Forward With Confidence',
    badge: 'Student First',
    description: 'At Sky9 India, we understand that learning a new skill can sometimes feel challenging, especially when entering a completely new field. That is why we focus on creating a supportive and practical learning environment. Our commitment is to help learners move forward step by step. Through structured programs, mentorship, practical exposure, and industry-focused guidance, we aim to make the learning journey more meaningful and effective.',
    highlights: [
      'No exaggerated or false placement claims',
      'Transparent course fees with no hidden costs',
      'Dedicated mentor feedback on every practical assignment',
      'Lifetime career guidance and community access'
    ],
    faqs: [
      { question: 'What does "no exaggerated placement claims" actually mean in practice?', answer: 'Sky9 India will not promise guaranteed salary figures or guaranteed offers, since no training provider can control hiring decisions, instead, the commitment is to prepare you as thoroughly as possible and support your job search honestly.' },
      { question: 'Are there any hidden costs beyond the listed course fee?', answer: 'No. The published course fee covers the training, and any additional costs (like optional external certification exam fees charged by Google or Meta directly) are disclosed upfront, not added silently later.' },
      { question: 'What happens if I\'m struggling to keep up with the course pace?', answer: 'Mentors provide dedicated, assignment-level feedback rather than one-size-fits-all grading, so if you\'re falling behind, that feedback loop is where it gets caught and addressed early.' },
      { question: 'Does "lifetime career guidance" mean support ends after job placement?', answer: 'No, it continues even after you\'re placed, since career questions (switching roles, negotiating, upskilling further) don\'t stop the day you get hired.' },
      { question: 'How is this commitment enforced, is it just marketing language?', answer: 'It shapes concrete practices: transparent fee structures, per-assignment mentor feedback, and no false guarantees in enrollment conversations, you can verify these directly with the admissions team before committing.' },
      { question: 'What if I feel a mentor isn\'t giving me adequate feedback?', answer: 'You can raise this directly with the admissions or program coordination team, since consistent mentor feedback is treated as a core commitment, not an optional extra.' },
      { question: 'Is this commitment the same across all course price points?', answer: 'Yes, whether you\'re in the 7-day Digital Marketing for Business Owners bootcamp or the longer Software Testing program, the same transparency and mentorship standards apply.' },
      { question: 'How does community access work after I complete my course?', answer: 'Graduates retain access to the Sky9 India learning community for ongoing peer support, updates on new tools and trends, and continued informal career guidance.' }
    ]
  },
  {
    slug: 'who-can-join',
    title: 'Who Can Join',
    breadcrumbLabel: 'Who Can Join',
    subtitle: 'Learning Opportunities for Everyone',
    badge: 'Open Enrollment',
    description: 'Sky9 India welcomes learners from different backgrounds and at different stages of their professional journey. Whether you are a student exploring career opportunities, a fresher preparing for your first job, a graduate building practical skills, a homemaker restarting your career, a working professional upgrading your knowledge, or an entrepreneur growing a business, there are opportunities to learn and develop. The focus is on creating a supportive environment where learners can start from their current level and gradually build confidence through structured practical education.',
    highlights: [
      'College students seeking practical skills alongside their degree',
      'Fresh graduates from any stream wanting job-ready training',
      'Working professionals upskilling or switching careers',
      'Business owners and entrepreneurs growing their digital presence',
      'Career switchers from non-technical backgrounds',
      'Freelancers building new service capabilities'
    ],
    faqs: [
      { question: 'I\'m still in college, will the course schedule conflict with my classes?', answer: 'Sky9 India offers flexible weekend and evening batches alongside live online sessions specifically so college students can build practical skills without disrupting their degree.' },
      { question: 'I have no background at all in tech or marketing, can I still join?', answer: 'Yes. Programs start from fundamentals and build up progressively, and complete beginners across streams (B.A., B.Com, B.Sc., BBA, engineering) join and complete these courses regularly.' },
      { question: 'I\'m a working professional, do I have to quit my job to enroll?', answer: 'No. Weekend batches and live online sessions are designed so working professionals can apply what they learn to their current job immediately, without leaving their role.' },
      { question: 'I run a small business, will this course be too technical for me?', answer: 'Business-owner-focused programs like Digital Marketing for Business Owners are deliberately non-technical, teaching practical strategies in plain business language rather than jargon-heavy marketing theory.' },
      { question: 'I\'m switching careers from a completely unrelated field, is that realistic?', answer: 'Yes, career switchers from non-technical, sales, or administrative backgrounds are one of the core groups Sky9 India designs its beginner-friendly, structured roadmaps for.' },
      { question: 'Can homemakers restarting their careers realistically catch up with younger learners?', answer: 'Course pacing and mentor support are built around individual progress rather than competing against classmates, so returning to a career after a break doesn\'t put you at a structural disadvantage.' },
      { question: 'Is there a minimum educational qualification required to join?', answer: 'There\'s no strict degree requirement across streams, programs are open to students, graduates from any background, and career switchers, since the focus is on practical skill-building rather than prior credentials.' },
      { question: 'As a freelancer, will this course help me land clients, or just teach theory?', answer: 'Courses relevant to freelancers (Digital Marketing, AI & Automation) include portfolio-building assignments and career support like proposal and pricing guidance, aimed specifically at winning freelance work.' }
    ]
  },
  {
    slug: 'student-success-stories',
    title: 'Student Success Stories',
    breadcrumbLabel: 'Student Success Stories',
    subtitle: 'Real People, Real Learning Journeys.',
    badge: 'Success Stories',
    description: 'Every learner starts from a different point. Some people are beginning their first professional journey, while others are changing careers, returning to work, or learning new skills to grow a business. Sky9 India celebrates different learning journeys and believes that practical education can help people build confidence at every stage. Existing student testimonials include experiences from homemakers, business owners, career switchers, BBA students, and recent graduates. Our learners represent the idea that with the right guidance, practical experience, and commitment to learning, new opportunities can become possible.',
    highlights: [
      'Graduates placed in digital marketing and tech roles across Pune and India',
      'Business owners who increased their lead generation and revenue',
      'Career switchers who successfully transitioned into technology',
      'Students who earned Google and Meta certifications',
      'Professionals who automated their workflow with AI tools',
      'Freelancers who built new client portfolios'
    ],
    faqs: [
      { question: 'Are these student outcomes typical, or exceptional cases?', answer: 'Outcomes vary by individual effort, prior background, and course track, but the categories shown (placements, business growth, career switches, certifications) reflect the range of results across real graduate cohorts, not a single cherry-picked story.' },
      { question: 'Can I speak directly with a past student before enrolling?', answer: 'Testimonials and student stories are shared across course pages, and admissions counselors can help connect prospective learners with relevant graduate experiences for specific course tracks.' },
      { question: 'How long after course completion did these students see results?', answer: 'It varies by goal: placement-focused graduates often received interview calls within 1-2 months of finishing their internship, while business owners typically saw lead generation changes within weeks of implementing new strategies.' },
      { question: 'Do success stories only come from the Digital Marketing course?', answer: 'No, stories span all program tracks, including Software Testing placements, AI & Automation workflow improvements, and ERP career transitions, not just marketing-related outcomes.' },
      { question: 'What made the biggest difference for career switchers specifically?', answer: 'Structured, beginner-friendly roadmaps combined with the integrated internship consistently show up as the turning point, it gives switchers real project experience to point to, not just a certificate.' },
      { question: 'Were any of these students homemakers or people returning to work after a break?', answer: 'Yes, homemakers restarting their careers are explicitly represented among Sky9 India\'s student success stories, particularly in digital marketing and business-growth tracks.' },
      { question: 'Do business owners need technical skills to replicate these growth results?', answer: 'No, the business-owner success stories come from non-technical founders applying practical, plain-language marketing strategies taught specifically for that audience, not from learning advanced technical skills.' },
      { question: 'How can I track whether I\'m on a similar trajectory during my own course?', answer: 'Progress is visible through completed assignments, internship deliverables, and certification milestones, the same checkpoints that defined the paths of these earlier student outcomes.' }
    ]
  },
  {
    slug: 'hiring-partners',
    title: 'Hiring Partners',
    breadcrumbLabel: 'Hiring Partners',
    subtitle: 'Recruit Job-Ready, Practically Trained Talent',
    badge: 'Partner With Sky9',
    description: 'Sky9 India works with companies across Pune and pan-India looking to hire practically trained talent in digital marketing, AI & automation, software testing, and ERP. Every graduate completes hands-on assignments and a structured 1-month internship before entering the job market, so hiring partners get candidates who can demonstrate real project work, not just a completion certificate. Our placement cell coordinates directly with partner companies to understand role requirements, shortlist relevant candidates, and schedule interviews, at no cost to the hiring company.',
    highlights: [
      'Direct access to graduates across 4 practical training tracks',
      'Every candidate completes a 1-month hands-on internship before hiring',
      'Portfolio-verified skills, real assignments and project work, not just a certificate',
      'Dedicated placement cell coordinates shortlisting and interview scheduling',
      'No cost to source, screen, or interview candidates',
      'Open to hiring drives, campus interactions, and ongoing recruitment pipelines'
    ],
    faqs: [
      { question: 'What does it cost a company to become a Sky9 India hiring partner?', answer: 'Nothing. Sourcing, shortlisting, and interview coordination are provided at no cost to hiring partners as part of our placement support for graduates.' },
      { question: 'Which roles and domains can Sky9 India candidates be hired for?', answer: 'Candidates come from four practical tracks, Digital Marketing, AI & Automation, Software Testing (QA), and ERP, so partner companies can hire across marketing, technical, QA, and operations roles.' },
      { question: 'How are candidates screened before being referred to a hiring partner?', answer: 'Every candidate completes structured assignments and a 1-month internship reviewed by mentors, so referrals come with verified, demonstrable project work rather than a resume alone.' },
      { question: 'How does a company start the process of becoming a hiring partner?', answer: 'Reach out through our admissions/placement contact channel with your role requirements, and our placement cell will coordinate shortlisting candidates that match your specific needs.' },
      { question: 'Can we conduct a dedicated hiring drive or campus interaction with Sky9 India?', answer: 'Yes, the placement cell can coordinate dedicated hiring drives, mock-to-real interview days, or ongoing recruitment pipelines depending on your hiring volume and timeline.' },
      { question: 'Is this a one-time hire, or can we build an ongoing pipeline with Sky9 India?', answer: 'Both are supported. Many partners hire on a rolling basis as new batches graduate each cohort, building a consistent pipeline rather than a single one-off hiring round.' },
      { question: 'Do candidates come from Pune only, or other locations too?', answer: 'Both. Sky9 India trains students through the Pune classroom and live online batches from across India, so hiring partners can access candidates locally in Pune or remotely for distributed teams.' }
    ]
  }
];

// ============================================================
// COURSE TOPICS (nested under each course's own URL, see contentRepository.getTopicUrl)
// ============================================================
export const courseTopics = {
  'digital-marketing': [
    {
      slug: 'search-engine-optimization-seo',
      title: 'Search Engine Optimization (SEO)',
      subtitle: 'Master Organic Search Visibility & Ranking Strategies',
      icon: Search,
      overview: 'Search Engine Optimization is one of the most important skills in digital marketing because businesses want to appear when potential customers search for relevant products, services, and information. SEO involves understanding search behavior, keywords, content, website optimization, and visibility strategies. Sky9 India introduces learners to important SEO concepts such as keyword research, on-page optimization, off-page SEO, website visibility, search strategy, and performance analysis.',
      topics: ['Keyword Research & Intent Mapping', 'On-Page SEO & Content Optimization', 'Technical SEO & Site Speed', 'Off-Page Link Building Strategies', 'Local SEO & Google Business Profile', 'SEO Audits & GA4 Integration'],
      faqs: [
        { question: 'What SEO skills will I actually practice, not just learn in theory?', answer: 'You\'ll run real keyword research and intent mapping, optimize live pages for on-page SEO, audit technical site speed issues, and build off-page link strategies, each backed by a hands-on assignment.' },
        { question: 'Does this module cover local SEO for small businesses too?', answer: 'Yes, Local SEO & Google Business Profile optimization is a dedicated topic, useful both for agency-style SEO work and for supporting local business clients.' },
        { question: 'How does this SEO module connect with the analytics side of the course?', answer: 'The final topic, SEO Audits & GA4 Integration, ties directly into the course\'s Google Analytics module so you learn to measure the SEO changes you make, not just implement them blind.' },
        { question: 'Is this SEO training enough to start freelancing, or only for an in-house role?', answer: 'The practical skills covered, audits, keyword research, on-page fixes, are the same deliverables freelance SEO consultants sell to clients, so it supports both employment and freelance paths.' },
        { question: 'Is Search Engine Optimization (SEO) taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Search Engine Optimization (SEO) pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Search Engine Optimization (SEO) module?', answer: 'Search Engine Optimization (SEO) is one of the topic modules inside the Digital Marketing Training program (2 Months, ₹25,000).' },
        { question: 'Do I need prior experience before starting Search Engine Optimization (SEO)?', answer: 'No, Digital Marketing Training starts from fundamentals, so no prior marketing experience is required before starting Search Engine Optimization (SEO).' },
        { question: 'What other Digital Marketing Training modules pair well with Search Engine Optimization (SEO)?', answer: 'Search Engine Optimization (SEO) pairs naturally with Social Media Marketing (SMM) and Google Ads & Performance Marketing, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'social-media-marketing-smm',
      title: 'Social Media Marketing (SMM)',
      subtitle: 'Build Engaging Brand Presence & Community Growth',
      icon: Share2,
      overview: 'Social media has changed the way businesses communicate with customers. Platforms have become important spaces for building brand awareness, sharing content, engaging audiences, and supporting marketing campaigns. Sky9 India\'s Social Media Marketing training helps learners understand how businesses can use social platforms strategically, covering content planning, audience engagement, branding, campaign strategies, and social media performance.',
      topics: ['Platform-Specific Strategies', 'Content Calendar & Visual Planning', 'Community Management & Growth', 'Influencer Collaboration Basics', 'Social Analytics & Performance Metrics'],
      faqs: [
        { question: 'Which platforms does this Social Media Marketing module actually cover?', answer: 'Platform-specific strategies span the major channels used by Indian businesses, alongside content calendar planning, community management, and social analytics.' },
        { question: 'Will I learn to run a content calendar, or just individual posts?', answer: 'Yes, Content Calendar & Visual Planning is a dedicated topic, so you practice planning a consistent posting schedule, not just one-off content pieces.' },
        { question: 'Does this module touch influencer collaboration?', answer: 'Yes, Influencer Collaboration Basics is covered as part of the curriculum, alongside organic community growth tactics.' },
        { question: 'How is success measured in this module?', answer: 'Social Analytics & Performance Metrics is a dedicated topic covering how to read platform-native engagement and reach data to judge what\'s working.' },
        { question: 'Is Social Media Marketing (SMM) taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Social Media Marketing (SMM) pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Social Media Marketing (SMM) module?', answer: 'Social Media Marketing (SMM) is one of the topic modules inside the Digital Marketing Training program (2 Months, ₹25,000).' },
        { question: 'Do I need prior experience before starting Social Media Marketing (SMM)?', answer: 'No, Digital Marketing Training starts from fundamentals, so no prior marketing experience is required before starting Social Media Marketing (SMM).' },
        { question: 'What other Digital Marketing Training modules pair well with Social Media Marketing (SMM)?', answer: 'Social Media Marketing (SMM) pairs naturally with Google Ads & Performance Marketing and Meta Ads (Facebook & Instagram), which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'google-ads-and-performance-marketing',
      title: 'Google Ads & Performance Marketing',
      subtitle: 'Drive Targeted High-Intent Traffic & Conversions',
      icon: Target,
      overview: 'Paid advertising helps businesses reach specific audiences quickly and support goals such as website traffic, lead generation, sales, and brand awareness. Google Ads is one of the most important parts of the modern digital marketing ecosystem. Sky9 India provides practical exposure to paid marketing concepts, campaign strategies, audience targeting, advertising objectives, ad creatives, and performance monitoring.',
      topics: ['Search Campaigns & Quality Score', 'Display & Remarketing Networks', 'YouTube Video Advertising', 'Bidding Strategies & ROAS', 'Conversion Tracking & Tag Manager'],
      faqs: [
        { question: 'Does this module cover Search ads only, or Display and YouTube too?', answer: 'All three, Search Campaigns & Quality Score, Display & Remarketing Networks, and YouTube Video Advertising are each dedicated topics.' },
        { question: 'Will I learn how bidding strategies actually work, or just campaign setup?', answer: 'Bidding Strategies & ROAS is covered specifically so you understand how to optimize spend toward return on ad spend, not just launch a campaign.' },
        { question: 'Does this module include conversion tracking setup?', answer: 'Yes, Conversion Tracking & Tag Manager is a dedicated topic, since accurate tracking is what makes the rest of the optimization work meaningful.' },
        { question: 'Is prior Google Ads experience required to start this module?', answer: 'No, it\'s part of the Digital Marketing Training program, which starts from fundamentals, so no prior paid advertising experience is required.' },
        { question: 'Is Google Ads & Performance Marketing taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Google Ads & Performance Marketing pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Google Ads & Performance Marketing module?', answer: 'Google Ads & Performance Marketing is one of the topic modules inside the Digital Marketing Training program (2 Months, ₹25,000).' },
        { question: 'Do I need prior experience before starting Google Ads & Performance Marketing?', answer: 'No, Digital Marketing Training starts from fundamentals, so no prior marketing experience is required before starting Google Ads & Performance Marketing.' },
        { question: 'What other Digital Marketing Training modules pair well with Google Ads & Performance Marketing?', answer: 'Google Ads & Performance Marketing pairs naturally with Meta Ads (Facebook & Instagram) and Content Creation & Copywriting, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'meta-ads-facebook-and-instagram',
      title: 'Meta Ads (Facebook & Instagram)',
      subtitle: 'Run High-Converting Social Ad Campaigns',
      icon: Target,
      overview: 'Paid advertising helps businesses reach specific audiences quickly and support goals such as website traffic, lead generation, sales, and brand awareness. Meta advertising is a key part of the modern digital marketing ecosystem. Sky9 India provides practical exposure to paid marketing concepts, campaign strategies, audience targeting, advertising objectives, ad creatives, and performance monitoring on Facebook and Instagram.',
      topics: ['Campaign Objective Selection', 'Custom & Lookalike Audiences', 'Ad Creative & Copy Design', 'Meta Pixel & Conversion API', 'A/B Testing & Scaling Budgets'],
      faqs: [
        { question: 'Does this module cover both Facebook and Instagram advertising?', answer: 'Yes, Meta Ads training covers campaign objective selection, audience targeting, and ad creative across both Facebook and Instagram.' },
        { question: 'What\'s covered under audience targeting specifically?', answer: 'Custom & Lookalike Audiences is a dedicated topic, teaching how to build and target audiences based on existing customer data.' },
        { question: 'Does this module include tracking setup like the Meta Pixel?', answer: 'Yes, Meta Pixel & Conversion API is covered so you can measure ad performance and conversions accurately.' },
        { question: 'Will I learn how to test and scale campaigns, or only launch them?', answer: 'A/B Testing & Scaling Budgets is a dedicated topic covering how to test creative variations and scale what performs.' },
        { question: 'Is Meta Ads (Facebook & Instagram) taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Meta Ads (Facebook & Instagram) pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Meta Ads (Facebook & Instagram) module?', answer: 'Meta Ads (Facebook & Instagram) is one of the topic modules inside the Digital Marketing Training program (2 Months, ₹25,000).' },
        { question: 'Do I need prior experience before starting Meta Ads (Facebook & Instagram)?', answer: 'No, Digital Marketing Training starts from fundamentals, so no prior marketing experience is required before starting Meta Ads (Facebook & Instagram).' },
        { question: 'What other Digital Marketing Training modules pair well with Meta Ads (Facebook & Instagram)?', answer: 'Meta Ads (Facebook & Instagram) pairs naturally with Content Creation & Copywriting and Email Marketing & Funnel Automation, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'content-creation-and-copywriting',
      title: 'Content Creation & Copywriting',
      subtitle: 'Craft Compelling Stories That Convert Visitors Into Customers',
      icon: PenTool,
      overview: 'Develop persuasive copywriting skills for ads, landing pages, blogs, and email sequences using proven psychological frameworks.',
      topics: ['Persuasive Copywriting Frameworks (AIDA, PAS)', 'Blog Writing for SEO', 'Ad Copy Copywriting for Meta & Google', 'Visual Content Strategy', 'Brand Voice & Tone Guidelines'],
      faqs: [
        { question: 'What copywriting frameworks does this module teach?', answer: 'Persuasive Copywriting Frameworks like AIDA and PAS are taught as the structural basis for writing ads, landing pages, and email sequences.' },
        { question: 'Does this cover blog writing specifically for SEO, or just general writing?', answer: 'Blog Writing for SEO is a dedicated topic, so content is taught with organic search visibility in mind, not only general copywriting.' },
        { question: 'Will I write ad copy for specific platforms like Meta and Google?', answer: 'Yes, Ad Copy Copywriting for Meta & Google is covered as a distinct, platform-specific skill.' },
        { question: 'Does the module help me develop a consistent brand voice?', answer: 'Yes, Brand Voice & Tone Guidelines is a dedicated topic covering how to keep writing consistent across different content formats.' },
        { question: 'Is Content Creation & Copywriting taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Content Creation & Copywriting pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Content Creation & Copywriting module?', answer: 'Content Creation & Copywriting is one of the topic modules inside the Digital Marketing Training program (2 Months, ₹25,000).' },
        { question: 'Do I need prior experience before starting Content Creation & Copywriting?', answer: 'No, Digital Marketing Training starts from fundamentals, so no prior marketing experience is required before starting Content Creation & Copywriting.' },
        { question: 'What other Digital Marketing Training modules pair well with Content Creation & Copywriting?', answer: 'Content Creation & Copywriting pairs naturally with Email Marketing & Funnel Automation and Lead Generation & Sales Funnels, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'email-marketing-and-funnel-automation',
      title: 'Email Marketing & Funnel Automation',
      subtitle: 'Nurture Leads & Retain Customers with Automated Emails',
      icon: Funnel,
      overview: 'Set up email sequences, lead magnets, audience segmentation, broadcast newsletters, and lead nurturing workflows.',
      topics: ['Lead Magnet Creation', 'Welcome & Nurture Sequences', 'Audience Segmentation & Tags', 'Email Copy & Design Best Practices', 'Deliverability & Open Rate Optimization'],
      faqs: [
        { question: 'What does this module teach about building an email list, not just sending emails?', answer: 'Lead Magnet Creation is covered as the starting point, since building a list of engaged subscribers comes before any email sequence work.' },
        { question: 'Does it cover automated sequences, or only one-off newsletters?', answer: 'Welcome & Nurture Sequences are a dedicated topic, covering automated flows that trigger based on subscriber behavior.' },
        { question: 'Will I learn how to segment an audience for more targeted emails?', answer: 'Yes, Audience Segmentation & Tags is covered so you can send more relevant emails to different subscriber groups.' },
        { question: 'Does the module address why some emails don\'t get opened?', answer: 'Deliverability & Open Rate Optimization is a dedicated topic addressing exactly that, getting emails into the inbox and getting them opened.' },
        { question: 'Is Email Marketing & Funnel Automation taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Email Marketing & Funnel Automation pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Email Marketing & Funnel Automation module?', answer: 'Email Marketing & Funnel Automation is one of the topic modules inside the Digital Marketing Training program (2 Months, ₹25,000).' },
        { question: 'Do I need prior experience before starting Email Marketing & Funnel Automation?', answer: 'No, Digital Marketing Training starts from fundamentals, so no prior marketing experience is required before starting Email Marketing & Funnel Automation.' },
        { question: 'What other Digital Marketing Training modules pair well with Email Marketing & Funnel Automation?', answer: 'Email Marketing & Funnel Automation pairs naturally with Lead Generation & Sales Funnels and Google Analytics 4 & Performance Reporting, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'lead-generation-and-sales-funnels',
      title: 'Lead Generation & Sales Funnels',
      subtitle: 'Architect High-Converting Inbound Lead Systems',
      icon: Funnel,
      overview: 'Design landing pages, lead capture mechanisms, conversion rate optimization (CRO), and CRM integration for lead management.',
      topics: ['Landing Page Design Principles', 'Lead Magnet Strategy', 'Form Optimization & CRO', 'Lead Routing & CRM Sync', 'Funnel Analytics & Drop-off Analysis'],
      faqs: [
        { question: 'Does this module cover building the landing pages themselves?', answer: 'Yes, Landing Page Design Principles is a dedicated topic covering how to structure pages specifically for conversion.' },
        { question: 'What\'s covered about improving conversion rates, beyond just page design?', answer: 'Form Optimization & CRO is a separate topic focused specifically on reducing friction and improving completion rates on lead capture forms.' },
        { question: 'Does this module teach how leads get routed to a sales team or CRM?', answer: 'Yes, Lead Routing & CRM Sync is covered so leads don\'t just get captured but are properly handed off for follow-up.' },
        { question: 'How do I know if a funnel is actually working?', answer: 'Funnel Analytics & Drop-off Analysis is a dedicated topic covering how to identify exactly where prospects are dropping out of a funnel.' },
        { question: 'Is Lead Generation & Sales Funnels taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Lead Generation & Sales Funnels pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Lead Generation & Sales Funnels module?', answer: 'Lead Generation & Sales Funnels is one of the topic modules inside the Digital Marketing Training program (2 Months, ₹25,000).' },
        { question: 'Do I need prior experience before starting Lead Generation & Sales Funnels?', answer: 'No, Digital Marketing Training starts from fundamentals, so no prior marketing experience is required before starting Lead Generation & Sales Funnels.' },
        { question: 'What other Digital Marketing Training modules pair well with Lead Generation & Sales Funnels?', answer: 'Lead Generation & Sales Funnels pairs naturally with Google Analytics 4 & Performance Reporting and AI Tools for Digital Marketing, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'google-analytics-4-and-performance-reporting',
      title: 'Google Analytics 4 & Performance Reporting',
      subtitle: 'Turn Data Into Actionable Growth Insights',
      icon: BarChart3,
      overview: 'Master Google Analytics 4 (GA4), custom event tracking, conversion reporting, Google Search Console, and client-ready reporting dashboards.',
      topics: ['GA4 Setup & Configuration', 'Custom Event & Key Event Tracking', 'Google Search Console Insights', 'Looker Studio Dashboard Creation', 'Attribution Modeling & Insights'],
      faqs: [
        { question: 'Is this module specifically about GA4, or general analytics concepts?', answer: 'It\'s centered on GA4 Setup & Configuration specifically, since GA4 is the current standard Google Analytics platform used across the industry.' },
        { question: 'Does this cover Search Console as well as GA4?', answer: 'Yes, Google Search Console Insights is a dedicated topic, covering organic search performance alongside GA4\'s on-site behavior data.' },
        { question: 'Will I learn to build client-ready reports, or only read raw data?', answer: 'Looker Studio Dashboard Creation is covered specifically so you can turn analytics data into a presentable, client-ready reporting dashboard.' },
        { question: 'Does this module explain how to credit which channel drove a conversion?', answer: 'Attribution Modeling & Insights is a dedicated topic addressing exactly that, how to understand which marketing touchpoints get credit for a result.' },
        { question: 'Is Google Analytics 4 & Performance Reporting taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Google Analytics 4 & Performance Reporting pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Google Analytics 4 & Performance Reporting module?', answer: 'Google Analytics 4 & Performance Reporting is one of the topic modules inside the Digital Marketing Training program (2 Months, ₹25,000).' },
        { question: 'Do I need prior experience before starting Google Analytics 4 & Performance Reporting?', answer: 'No, Digital Marketing Training starts from fundamentals, so no prior marketing experience is required before starting Google Analytics 4 & Performance Reporting.' },
        { question: 'What other Digital Marketing Training modules pair well with Google Analytics 4 & Performance Reporting?', answer: 'Google Analytics 4 & Performance Reporting pairs naturally with AI Tools for Digital Marketing and Search Engine Optimization (SEO), which are covered as separate modules in the same program.' },
      ]
    }
  ,
    {
      slug: 'ai-tools-for-digital-marketing',
      title: 'AI Tools For Digital Marketing',
      subtitle: 'Accelerate Campaign Work with Practical AI Assistance',
      icon: Brain,
      overview: 'Apply AI assistants to everyday marketing execution such as keyword clustering, ad copy variants, creative briefs, and reporting summaries, while keeping human review in the loop.',
      topics: ['AI-assisted Keyword & Topic Clustering', 'Generating Ad Copy Variants for Testing', 'AI Content Briefs & Blog Outlines', 'Creative Ideation for Social Posts', 'Automated Campaign Report Summaries', 'Fact-checking & Brand-safety Review'],
      faqs: [
        { question: 'How does this module use AI without replacing human marketing judgment?', answer: 'Every AI-assisted task, keyword clustering, ad copy variants, content briefs, includes a Fact-checking & Brand-safety Review step, keeping human review in the loop rather than publishing AI output directly.' },
        { question: 'Can AI actually help with keyword research, or just writing?', answer: 'Yes, AI-assisted Keyword & Topic Clustering is a dedicated topic, using AI to speed up the grouping and organization side of keyword research.' },
        { question: 'Does this module help with reporting, not just content creation?', answer: 'Automated Campaign Report Summaries is covered, using AI to speed up turning raw performance data into a readable summary.' },
        { question: 'Is this a separate course, or part of the Digital Marketing program?', answer: 'It\'s one of the topic modules inside the Digital Marketing Training course, applying AI specifically to marketing execution tasks like copy variants and creative briefs.' },
        { question: 'Is AI Tools for Digital Marketing taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, AI Tools for Digital Marketing pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the AI Tools for Digital Marketing module?', answer: 'AI Tools for Digital Marketing is one of the topic modules inside the Digital Marketing Training program (2 Months, ₹25,000).' },
        { question: 'Do I need prior experience before starting AI Tools for Digital Marketing?', answer: 'No, Digital Marketing Training starts from fundamentals, so no prior marketing experience is required before starting AI Tools for Digital Marketing.' },
        { question: 'What other Digital Marketing Training modules pair well with AI Tools for Digital Marketing?', answer: 'AI Tools for Digital Marketing pairs naturally with Search Engine Optimization (SEO) and Social Media Marketing (SMM), which are covered as separate modules in the same program.' },
      ]
    }
  ],

  'ai-automation': [
    {
      slug: 'ai-foundations-and-core-principles',
      title: 'AI Foundations & Core Principles',
      subtitle: 'Understand Artificial Intelligence & Generative AI Tools',
      icon: Brain,
      overview: 'Build a solid conceptual foundation of AI technologies, machine learning concepts, Large Language Models (LLMs), and business use cases.',
      topics: ['AI & ML Overview for Professionals', 'Understanding LLMs (ChatGPT, Claude, Gemini)', 'AI Ethics & Operational Guidelines', 'Selecting the Right AI Tools for Work'],
      faqs: [
        { question: 'Do I need a technical background to start this module?', answer: 'No, AI & ML Overview for Professionals is written for a non-technical audience, building foundational understanding before going deeper into tools.' },
        { question: 'Which AI models does this module actually cover?', answer: 'Understanding LLMs (ChatGPT, Claude, Gemini) is a dedicated topic, comparing the major large language models rather than teaching just one.' },
        { question: 'Does the module address responsible or ethical AI use?', answer: 'Yes, AI Ethics & Operational Guidelines is covered as a core topic, not an afterthought.' },
        { question: 'How do I know which AI tool to use for a given task?', answer: 'Selecting the Right AI Tools for Work is a dedicated topic addressing exactly that decision process.' },
        { question: 'Is AI Foundations & Core Principles taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, AI Foundations & Core Principles pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the AI Foundations & Core Principles module?', answer: 'AI Foundations & Core Principles is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting AI Foundations & Core Principles?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting AI Foundations & Core Principles.' },
        { question: 'What other AI & Automation Training modules pair well with AI Foundations & Core Principles?', answer: 'AI Foundations & Core Principles pairs naturally with Structured Prompt Engineering and No-Code Workflow Automation, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'structured-prompt-engineering',
      title: 'Structured Prompt Engineering',
      subtitle: 'Master Prompt Crafting for Maximum Quality Output',
      icon: MessageSquare,
      overview: 'Learn zero-shot, few-shot, role-based, and chain-of-thought prompting techniques to generate high-quality text, code, and analysis.',
      topics: ['Role-Task-Context Prompt Framework', 'Zero-shot & Few-shot Techniques', 'Chain-of-Thought Reasoning', 'Building Personal Prompt Libraries', 'Refining AI Output Quality'],
      faqs: [
        { question: 'What\'s the core framework taught for writing better prompts?', answer: 'The Role-Task-Context Prompt Framework is the structural foundation, applied across the rest of the module\'s techniques.' },
        { question: 'Does this cover advanced prompting, or just basic instructions?', answer: 'Both, Zero-shot & Few-shot Techniques and Chain-of-Thought Reasoning are covered as more advanced methods beyond basic single-line prompts.' },
        { question: 'Will I have reusable prompts after finishing this module, or start from scratch each time?', answer: 'Building Personal Prompt Libraries is a dedicated topic, so you leave with a reusable set of prompts rather than one-off examples.' },
        { question: 'How do I know if my AI output is actually good?', answer: 'Refining AI Output Quality is covered as an iterative skill, evaluating and improving results rather than accepting the first response.' },
        { question: 'Is Structured Prompt Engineering taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Structured Prompt Engineering pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Structured Prompt Engineering module?', answer: 'Structured Prompt Engineering is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting Structured Prompt Engineering?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting Structured Prompt Engineering.' },
        { question: 'What other AI & Automation Training modules pair well with Structured Prompt Engineering?', answer: 'Structured Prompt Engineering pairs naturally with No-Code Workflow Automation and AI Productivity & Research Assistants, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'no-code-workflow-automation',
      title: 'No-Code Workflow Automation',
      subtitle: 'Automate Repetitive Business Tasks with Zapier & Make',
      icon: Zap,
      overview: 'Many businesses and professionals spend valuable time completing repetitive tasks manually. Workflow automation helps organizations improve efficiency by connecting processes and reducing unnecessary manual work. Sky9 India\'s workflow automation learning approach introduces students to the concepts behind automated processes and modern digital workflows, exploring how tasks such as lead management, communication, notifications, reporting, and data handling can be organized more efficiently.',
      topics: ['Workflow Logic & Triggers/Actions', 'Zapier Multi-step Automations', 'Make (Integromat) Complex Scenarios', 'Error Handling & Exception Routing', 'Webhooks & API Integration Basics'],
      faqs: [
        { question: 'Which automation platforms does this module actually teach?', answer: 'Zapier and Make (Integromat) are both covered as dedicated topics, including complex multi-step scenarios in Make.' },
        { question: 'What happens when an automation fails midway?', answer: 'Error Handling & Exception Routing is a dedicated topic, covering how to build automations that fail safely rather than silently breaking.' },
        { question: 'Do I need to know how to code to build these automations?', answer: 'No, this is no-code workflow automation; Webhooks & API Integration Basics are taught at a practical, no-code level.' },
        { question: 'What business tasks does this module apply automation to?', answer: 'Lead management, communication, notifications, reporting, and data handling are the example workflow categories used throughout the module.' },
        { question: 'Is No-Code Workflow Automation taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, No-Code Workflow Automation pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the No-Code Workflow Automation module?', answer: 'No-Code Workflow Automation is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting No-Code Workflow Automation?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting No-Code Workflow Automation.' },
        { question: 'What other AI & Automation Training modules pair well with No-Code Workflow Automation?', answer: 'No-Code Workflow Automation pairs naturally with AI Productivity & Research Assistants and Business & Customer Support Automation, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'ai-productivity-and-research-assistants',
      title: 'AI Productivity & Research Assistants',
      subtitle: 'Supercharge Workplace Efficiency & Knowledge Work',
      icon: Wrench,
      overview: 'Discover AI tools for document analysis, meeting summaries, automated research, smart spreadsheet functions, and slide generation.',
      topics: ['AI Meeting Transcribing & Action Items', 'Document Summarization & PDF Chat', 'AI-assisted Data Analysis in Sheets', 'Presentation & Report Generation'],
      faqs: [
        { question: 'Does this module help with meetings specifically?', answer: 'Yes, AI Meeting Transcribing & Action Items is a dedicated topic covering automatic transcription and follow-up task extraction.' },
        { question: 'Can this help me work with long documents or PDFs faster?', answer: 'Document Summarization & PDF Chat is covered specifically for that use case.' },
        { question: 'Does it cover spreadsheet work, or only documents?', answer: 'AI-assisted Data Analysis in Sheets is a dedicated topic, applying AI to spreadsheet-based analysis.' },
        { question: 'Will this help me build presentations faster?', answer: 'Presentation & Report Generation is covered, applying AI to speed up building slides and written reports.' },
        { question: 'Is AI Productivity & Research Assistants taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, AI Productivity & Research Assistants pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the AI Productivity & Research Assistants module?', answer: 'AI Productivity & Research Assistants is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting AI Productivity & Research Assistants?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting AI Productivity & Research Assistants.' },
        { question: 'What other AI & Automation Training modules pair well with AI Productivity & Research Assistants?', answer: 'AI Productivity & Research Assistants pairs naturally with Business & Customer Support Automation and Generative AI Tools, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'business-and-customer-support-automation',
      title: 'Business & Customer Support Automation',
      subtitle: 'Deploy AI Customer Support Bots & Automated Systems',
      icon: Briefcase,
      overview: 'Implement custom AI chatbots, automated lead qualification, auto-reply marketing flows, and operational dashboard generation.',
      topics: ['Custom AI Chatbot Deployment', 'Automated Lead Qualification Rules', 'Instant Customer Support Responses', 'Automated Daily Business Summaries'],
      faqs: [
        { question: 'Does this module teach me to build a chatbot, or just use existing ones?', answer: 'Custom AI Chatbot Deployment is a dedicated topic covering how to actually configure and deploy a bot, not just use a pre-built one.' },
        { question: 'Can this help qualify leads automatically?', answer: 'Yes, Automated Lead Qualification Rules is covered specifically for that purpose.' },
        { question: 'Does the module cover customer support automation?', answer: 'Instant Customer Support Responses is a dedicated topic addressing automated first-response support.' },
        { question: 'Will this help with internal business reporting, not just customer-facing tasks?', answer: 'Automated Daily Business Summaries is covered, applying automation to internal operational reporting.' },
        { question: 'Is Business & Customer Support Automation taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Business & Customer Support Automation pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Business & Customer Support Automation module?', answer: 'Business & Customer Support Automation is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting Business & Customer Support Automation?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting Business & Customer Support Automation.' },
        { question: 'What other AI & Automation Training modules pair well with Business & Customer Support Automation?', answer: 'Business & Customer Support Automation pairs naturally with Generative AI Tools and AI Content Creation, which are covered as separate modules in the same program.' },
      ]
    }
  ,
    {
      slug: 'generative-ai-tools',
      title: 'Generative AI Tools',
      subtitle: 'Work Confidently Across Text, Image & Audio Generation',
      icon: Zap,
      overview: 'AI tools are creating new possibilities for students, professionals, entrepreneurs, and businesses. These tools can help with writing, research, brainstorming, analysis, productivity, content creation, and workflow improvement. Sky9 India helps learners explore practical AI applications and understand where these technologies can provide value, focusing on using AI as a productivity and problem-solving tool rather than simply following trends.',
      topics: ['Text Generation with ChatGPT, Claude & Gemini', 'Image Generation & Editing Workflows', 'Voice, Audio & Video Generation Basics', 'Comparing Tool Strengths & Limitations', 'Licensing, Attribution & Responsible Use'],
      faqs: [
        { question: 'Does this module cover only text generation, or images and audio too?', answer: 'All three, Text Generation, Image Generation & Editing Workflows, and Voice, Audio & Video Generation Basics are each covered.' },
        { question: 'How do I know which generative AI tool is actually best for a task?', answer: 'Comparing Tool Strengths & Limitations is a dedicated topic addressing exactly that decision-making process.' },
        { question: 'Does this module address copyright or licensing concerns with AI-generated content?', answer: 'Yes, Licensing, Attribution & Responsible Use is covered as a core topic, not skipped.' },
        { question: 'Is this module about following AI trends, or practical business use?', answer: 'It\'s framed around using AI as a productivity and problem-solving tool rather than simply following trends, per the course\'s stated approach.' },
        { question: 'Is Generative AI Tools taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Generative AI Tools pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Generative AI Tools module?', answer: 'Generative AI Tools is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting Generative AI Tools?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting Generative AI Tools.' },
        { question: 'What other AI & Automation Training modules pair well with Generative AI Tools?', answer: 'Generative AI Tools pairs naturally with AI Content Creation and AI for Marketing Teams, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'ai-content-creation',
      title: 'AI Content Creation',
      subtitle: 'Produce Publish-Ready Content at Practical Speed',
      icon: PenTool,
      overview: 'Build a repeatable AI-assisted content pipeline covering research, drafting, editing, and repurposing across blogs, social, and email.',
      topics: ['Research & Outline Generation', 'Drafting in a Consistent Brand Voice', 'Human Editing & Quality Control Passes', 'Repurposing One Asset Across Channels', 'Avoiding Generic AI Output & Plagiarism'],
      faqs: [
        { question: 'Does this module produce publish-ready content, or just drafts?', answer: 'The pipeline covers Research & Outline Generation through Human Editing & Quality Control Passes, aiming for content that\'s actually publish-ready, not a raw AI draft.' },
        { question: 'How do I keep AI-written content sounding like my own brand?', answer: 'Drafting in a Consistent Brand Voice is a dedicated topic addressing exactly that challenge.' },
        { question: 'Can I turn one piece of content into multiple formats?', answer: 'Repurposing One Asset Across Channels is covered, teaching how to adapt one piece across blog, social, and email.' },
        { question: 'How does this module avoid generic-sounding AI content?', answer: 'Avoiding Generic AI Output & Plagiarism is a dedicated topic focused specifically on that risk.' },
        { question: 'Is AI Content Creation taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, AI Content Creation pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the AI Content Creation module?', answer: 'AI Content Creation is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting AI Content Creation?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting AI Content Creation.' },
        { question: 'What other AI & Automation Training modules pair well with AI Content Creation?', answer: 'AI Content Creation pairs naturally with AI for Marketing Teams and AI Agents & Modern Workflows, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'ai-for-marketing-teams',
      title: 'AI For Marketing Teams',
      subtitle: 'Embed AI Into Campaign Planning & Performance Work',
      icon: TrendingUp,
      overview: 'Use AI across the marketing lifecycle including audience research, segmentation ideas, campaign concepting, and performance analysis, with practical prompt patterns.',
      topics: ['Audience Research & Persona Drafting', 'Campaign Concepting & Angle Generation', 'Segmentation & Offer Personalization Ideas', 'Analyzing Performance Data with AI', 'Building Reusable Marketing Prompt Libraries'],
      faqs: [
        { question: 'Does this module help with audience research specifically?', answer: 'Yes, Audience Research & Persona Drafting is a dedicated topic applying AI to that research process.' },
        { question: 'Can AI help generate campaign ideas, or only execute existing ones?', answer: 'Campaign Concepting & Angle Generation is covered, using AI to help generate new campaign angles.' },
        { question: 'Does this module help analyze performance data, not just create content?', answer: 'Analyzing Performance Data with AI is a dedicated topic addressing that analytical side of marketing.' },
        { question: 'Will I leave with reusable prompts for marketing tasks?', answer: 'Building Reusable Marketing Prompt Libraries is covered, so you build a lasting set of marketing-specific prompts.' },
        { question: 'Is AI for Marketing Teams taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, AI for Marketing Teams pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the AI for Marketing Teams module?', answer: 'AI for Marketing Teams is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting AI for Marketing Teams?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting AI for Marketing Teams.' },
        { question: 'What other AI & Automation Training modules pair well with AI for Marketing Teams?', answer: 'AI for Marketing Teams pairs naturally with AI Agents & Modern Workflows and Practical Applications of AI, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'ai-agents-and-modern-workflows',
      title: 'AI Agents & Modern Workflows',
      subtitle: 'Move From Single Prompts to Multi-Step Automated Tasks',
      icon: GitBranch,
      overview: 'Understand how AI agents chain tools and steps to complete multi-stage tasks, and where agentic automation is genuinely reliable versus where human checkpoints are required.',
      topics: ['Agents vs Single-prompt Assistants', 'Tool Use, Memory & Context Basics', 'Designing Multi-step Task Flows', 'Connecting Agents to Business Apps', 'Guardrails, Approvals & Failure Handling'],
      faqs: [
        { question: 'What\'s the actual difference between an AI agent and just using ChatGPT?', answer: 'Agents vs Single-prompt Assistants is a dedicated topic explaining that distinction, agents chain tools and steps across multiple stages rather than responding to one prompt.' },
        { question: 'Does this module cover connecting agents to real business tools?', answer: 'Yes, Connecting Agents to Business Apps is a dedicated topic addressing that integration.' },
        { question: 'How does the module address AI agents making mistakes?', answer: 'Guardrails, Approvals & Failure Handling is covered specifically to address where agentic automation needs human checkpoints.' },
        { question: 'Is this considered a stable, mainstream skill, or still experimental?', answer: 'The module is framed around where agentic automation is genuinely reliable versus where it still needs human oversight, giving a realistic rather than hyped view.' },
        { question: 'Is AI Agents & Modern Workflows taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, AI Agents & Modern Workflows pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the AI Agents & Modern Workflows module?', answer: 'AI Agents & Modern Workflows is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting AI Agents & Modern Workflows?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting AI Agents & Modern Workflows.' },
        { question: 'What other AI & Automation Training modules pair well with AI Agents & Modern Workflows?', answer: 'AI Agents & Modern Workflows pairs naturally with Practical Applications of AI and AI Foundations & Core Principles, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'practical-applications-of-ai',
      title: 'Practical Applications Of AI',
      subtitle: 'Apply AI to Real Day-to-Day Job Responsibilities',
      icon: CheckCircle,
      overview: 'Role-based application sessions showing how AI is used inside marketing, operations, support, HR, and administrative work with realistic before-and-after examples.',
      topics: ['AI in Sales & Customer Communication', 'AI in Operations & Documentation', 'AI in HR, Hiring & Training Material', 'AI for Data Cleanup & Spreadsheets', 'Identifying High-value Automation Candidates'],
      faqs: [
        { question: 'Which business functions does this module apply AI to?', answer: 'Sales & Customer Communication, Operations & Documentation, HR, Hiring & Training Material, and Data Cleanup & Spreadsheets are each covered as role-based sessions.' },
        { question: 'Is this module theoretical, or does it use real before-and-after examples?', answer: 'It uses realistic before-and-after examples for each role, per the module\'s stated approach.' },
        { question: 'How do I know which of my own tasks are worth automating?', answer: 'Identifying High-value Automation Candidates is a dedicated topic addressing exactly that evaluation skill.' },
        { question: 'Is this module useful if I work in a non-marketing role?', answer: 'Yes, it explicitly spans operations, HR, and administrative work, not just marketing-focused tasks.' },
        { question: 'Is Practical Applications of AI taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Practical Applications of AI pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Practical Applications of AI module?', answer: 'Practical Applications of AI is one of the topic modules inside the AI & Automation Training program (1 Month, ₹15,000).' },
        { question: 'Do I need prior experience before starting Practical Applications of AI?', answer: 'No, AI & Automation Training focuses on no-code and low-code approaches, so no programming or technical background is required before starting Practical Applications of AI.' },
        { question: 'What other AI & Automation Training modules pair well with Practical Applications of AI?', answer: 'Practical Applications of AI pairs naturally with AI Foundations & Core Principles and Structured Prompt Engineering, which are covered as separate modules in the same program.' },
      ]
    }
  ],

  'software-testing': [
    {
      slug: 'manual-testing-fundamentals',
      title: 'Manual Testing Fundamentals',
      subtitle: 'Core QA Principles & Software Testing Life Cycle (STLC)',
      icon: BookOpen,
      overview: 'Manual testing is an important foundation for anyone starting a career in software quality assurance. Testing professionals examine applications, identify issues, document problems, and verify whether software features work according to requirements. Sky9 India helps learners understand the structured approach behind software testing, exploring testing processes, application functionality, test scenarios, and test cases.',
      topics: ['STLC vs SDLC Principles', 'Types of Testing (Functional, Regression, Smoke, Sanity)', 'Black Box vs White Box Testing', 'Requirement Analysis & Verification'],
      faqs: [
        { question: 'Do I need programming knowledge to start manual testing?', answer: 'No, manual testing does not require coding; it focuses on STLC vs SDLC principles, requirement analysis, and testing types like functional, regression, smoke, and sanity testing.' },
        { question: 'Does this module cover both black box and white box testing?', answer: 'Yes, Black Box vs White Box Testing is a dedicated topic in this module.' },
        { question: 'Does this module teach how to verify requirements before testing begins?', answer: 'Requirement Analysis & Verification is covered as a foundational topic, since testing accuracy depends on understanding requirements correctly first.' },
        { question: 'Is this the right starting point if I have zero QA background?', answer: 'Yes, this is the foundational module of the Software Testing course, designed as the entry point before functional testing and more technical topics.' },
        { question: 'Is Manual Testing Fundamentals taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Manual Testing Fundamentals pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Manual Testing Fundamentals module?', answer: 'Manual Testing Fundamentals is one of the topic modules inside the Software Testing Training program (4 to 6 Months, ₹35,000).' },
        { question: 'Do I need prior experience before starting Manual Testing Fundamentals?', answer: 'No, Software Testing Training starts from fundamentals; logical thinking matters more than prior IT or coding experience before starting Manual Testing Fundamentals.' },
        { question: 'What other Software Testing Training modules pair well with Manual Testing Fundamentals?', answer: 'Manual Testing Fundamentals pairs naturally with Functional & Regression Testing and Test Planning & Test Case Authoring, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'functional-and-regression-testing',
      title: 'Functional & Regression Testing',
      subtitle: 'Ensure Flawless Application Behavior & Feature Integrity',
      icon: ClipboardCheck,
      overview: 'Functional testing is an important foundation for anyone starting a career in software quality assurance. Testing professionals examine applications, identify issues, document problems, and verify whether software features work according to requirements. Practical exercises help learners understand how testing is performed in realistic project environments and how attention to detail can improve software quality.',
      topics: ['Boundary Value Analysis (BVA)', 'Equivalence Class Partitioning (ECP)', 'Exploratory & Ad-hoc Testing', 'Regression Test Suite Maintenance'],
      faqs: [
        { question: 'What specific techniques does this module teach for designing test inputs?', answer: 'Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP) are both covered as structured techniques for choosing effective test inputs.' },
        { question: 'Does this module cover unscripted, exploratory testing too?', answer: 'Yes, Exploratory & Ad-hoc Testing is a dedicated topic alongside the more structured techniques.' },
        { question: 'How is regression testing maintained as an application changes?', answer: 'Regression Test Suite Maintenance is covered specifically to address keeping a regression suite useful as features evolve.' },
        { question: 'How is this different from the Manual Testing Fundamentals module?', answer: 'This module goes deeper into functional and regression-specific techniques, building on the STLC and testing-type fundamentals covered earlier.' },
        { question: 'Is Functional & Regression Testing taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Functional & Regression Testing pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Functional & Regression Testing module?', answer: 'Functional & Regression Testing is one of the topic modules inside the Software Testing Training program (4 to 6 Months, ₹35,000).' },
        { question: 'Do I need prior experience before starting Functional & Regression Testing?', answer: 'No, Software Testing Training starts from fundamentals; logical thinking matters more than prior IT or coding experience before starting Functional & Regression Testing.' },
        { question: 'What other Software Testing Training modules pair well with Functional & Regression Testing?', answer: 'Functional & Regression Testing pairs naturally with Test Planning & Test Case Authoring and Defect Management & Jira Bug Tracking, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'test-planning-and-test-case-authoring',
      title: 'Test Planning & Test Case Authoring',
      subtitle: 'Write Professional Test Documentation & Matrices',
      icon: FileText,
      overview: 'Learn how to write detailed Test Scenarios, clear Test Cases, Requirements Traceability Matrices (RTM), and Test Execution Reports.',
      topics: ['Test Strategy & Test Plan Design', 'Writing Effective Test Cases', 'Requirement Traceability Matrix (RTM)', 'Test Summary & Status Reporting'],
      faqs: [
        { question: 'Does this module teach how to plan testing at a project level, not just write individual test cases?', answer: 'Yes, Test Strategy & Test Plan Design is covered as the project-level planning topic before individual test case writing.' },
        { question: 'What makes a test case "effective" according to this module?', answer: 'Writing Effective Test Cases is a dedicated topic covering the structure and clarity standards used in real QA teams.' },
        { question: 'Does this module cover tracing tests back to requirements?', answer: 'Yes, Requirement Traceability Matrix (RTM) is covered specifically for that purpose.' },
        { question: 'Will I learn to report testing status to a team or manager?', answer: 'Test Summary & Status Reporting is covered, addressing how testing progress and results get communicated upward.' },
        { question: 'Is Test Planning & Test Case Authoring taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Test Planning & Test Case Authoring pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Test Planning & Test Case Authoring module?', answer: 'Test Planning & Test Case Authoring is one of the topic modules inside the Software Testing Training program (4 to 6 Months, ₹35,000).' },
        { question: 'Do I need prior experience before starting Test Planning & Test Case Authoring?', answer: 'No, Software Testing Training starts from fundamentals; logical thinking matters more than prior IT or coding experience before starting Test Planning & Test Case Authoring.' },
        { question: 'What other Software Testing Training modules pair well with Test Planning & Test Case Authoring?', answer: 'Test Planning & Test Case Authoring pairs naturally with Defect Management & Jira Bug Tracking and Agile QA Sprints & Team Readiness, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'defect-management-and-jira-bug-tracking',
      title: 'Defect Management & Jira Bug Tracking',
      subtitle: 'Log, Track, and Manage Software Bugs Like a Pro',
      icon: AlertTriangle,
      overview: 'Master the complete Bug Lifecycle, bug reporting standards, severity vs priority classification, and hands-on Jira usage.',
      topics: ['Bug Lifecycle Stages', 'Defect Severity & Priority Classification', 'Writing Comprehensive Bug Reports', 'Hands-on Jira Issue Tracking & Dashboards'],
      faqs: [
        { question: 'Does this module teach the full lifecycle of a bug, or just how to log one?', answer: 'The full Bug Lifecycle Stages are covered, from discovery through resolution and closure, not just initial logging.' },
        { question: 'How do I know if a bug is high priority or just severe?', answer: 'Defect Severity & Priority Classification is a dedicated topic addressing exactly that distinction.' },
        { question: 'What does a "comprehensive" bug report actually include?', answer: 'Writing Comprehensive Bug Reports is covered as a specific skill, including the details that make a report actionable for developers.' },
        { question: 'Will I get hands-on practice with real bug tracking software?', answer: 'Yes, Hands-on Jira Issue Tracking & Dashboards is a dedicated, practical topic in this module.' },
        { question: 'Is Defect Management & Jira Bug Tracking taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Defect Management & Jira Bug Tracking pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Defect Management & Jira Bug Tracking module?', answer: 'Defect Management & Jira Bug Tracking is one of the topic modules inside the Software Testing Training program (4 to 6 Months, ₹35,000).' },
        { question: 'Do I need prior experience before starting Defect Management & Jira Bug Tracking?', answer: 'No, Software Testing Training starts from fundamentals; logical thinking matters more than prior IT or coding experience before starting Defect Management & Jira Bug Tracking.' },
        { question: 'What other Software Testing Training modules pair well with Defect Management & Jira Bug Tracking?', answer: 'Defect Management & Jira Bug Tracking pairs naturally with Agile QA Sprints & Team Readiness and End-to-End Testing Workflows, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'agile-qa-sprints-and-team-readiness',
      title: 'Agile QA Sprints & Team Readiness',
      subtitle: 'Collaborate Efficiently in Agile/Scrum Development Teams',
      icon: Briefcase,
      overview: 'Understand Agile sprint ceremonies, user story refinement, acceptance criteria verification, and technical interview preparation.',
      topics: ['Scrum Sprint Ceremonies for QA', 'User Story Acceptance Criteria', 'Cross-functional Team Collaboration', 'Technical QA Interview Drills'],
      faqs: [
        { question: 'Does this module cover how QA fits into Scrum ceremonies specifically?', answer: 'Yes, Scrum Sprint Ceremonies for QA is a dedicated topic addressing the tester\'s role in standups, planning, and reviews.' },
        { question: 'How do I know when a user story is actually "done" from a QA perspective?', answer: 'User Story Acceptance Criteria is covered specifically to address that verification standard.' },
        { question: 'Does this module help me work with developers, or only with other testers?', answer: 'Cross-functional Team Collaboration is a dedicated topic addressing how testers work alongside developers and product owners.' },
        { question: 'Does this module include interview preparation?', answer: 'Yes, Technical QA Interview Drills is covered as part of this module, not left for later.' },
        { question: 'Is Agile QA Sprints & Team Readiness taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Agile QA Sprints & Team Readiness pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Agile QA Sprints & Team Readiness module?', answer: 'Agile QA Sprints & Team Readiness is one of the topic modules inside the Software Testing Training program (4 to 6 Months, ₹35,000).' },
        { question: 'Do I need prior experience before starting Agile QA Sprints & Team Readiness?', answer: 'No, Software Testing Training starts from fundamentals; logical thinking matters more than prior IT or coding experience before starting Agile QA Sprints & Team Readiness.' },
        { question: 'What other Software Testing Training modules pair well with Agile QA Sprints & Team Readiness?', answer: 'Agile QA Sprints & Team Readiness pairs naturally with End-to-End Testing Workflows and Manual Testing Fundamentals, which are covered as separate modules in the same program.' },
      ]
    }
  ,
    {
      slug: 'end-to-end-testing-workflows',
      title: 'End-to-End Testing Workflows',
      subtitle: 'Run Testing the Way Product Teams Actually Run It',
      icon: GitBranch,
      overview: 'Connect the individual testing skills into a complete delivery workflow, from requirement intake and test design through execution cycles, retesting, and sign-off.',
      topics: ['Requirement Intake & Testability Review', 'Test Design & Coverage Planning', 'Execution Cycles & Daily Status Reporting', 'Retesting, Regression & Release Sign-off', 'Collaboration with Developers & Product Owners'],
      faqs: [
        { question: 'Does this module connect the individual testing skills into one end-to-end process?', answer: 'Yes, it explicitly connects requirement intake, test design, execution cycles, and release sign-off into a complete delivery workflow, rather than teaching skills in isolation.' },
        { question: 'What happens after a bug is fixed, according to this module?', answer: 'Retesting, Regression & Release Sign-off is covered specifically for that post-fix verification stage.' },
        { question: 'Does this module address how testers coordinate with the rest of a product team?', answer: 'Yes, Collaboration with Developers & Product Owners is a dedicated topic.' },
        { question: 'Is this the final module in the Software Testing course sequence?', answer: 'It\'s designed to tie together the skills from the earlier modules (manual testing, functional testing, documentation, defect management, agile) into how testing actually runs in a live product team.' },
        { question: 'Is End-to-End Testing Workflows taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, End-to-End Testing Workflows pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the End-to-End Testing Workflows module?', answer: 'End-to-End Testing Workflows is one of the topic modules inside the Software Testing Training program (4 to 6 Months, ₹35,000).' },
        { question: 'Do I need prior experience before starting End-to-End Testing Workflows?', answer: 'No, Software Testing Training starts from fundamentals; logical thinking matters more than prior IT or coding experience before starting End-to-End Testing Workflows.' },
        { question: 'What other Software Testing Training modules pair well with End-to-End Testing Workflows?', answer: 'End-to-End Testing Workflows pairs naturally with Manual Testing Fundamentals and Functional & Regression Testing, which are covered as separate modules in the same program.' },
      ]
    }
  ],

  'erp': [
    {
      slug: 'erp-architecture-and-enterprise-fundamentals',
      title: 'ERP Architecture & Enterprise Fundamentals',
      subtitle: 'Understand Enterprise Software Architecture & Data Flow',
      icon: Database,
      overview: 'Learn core ERP principles, centralized database concepts, module integration, role-based access control, and enterprise systems overview.',
      topics: ['ERP System Evolution & Value', 'Centralized Database Architecture', 'Role-Based Security & Permissions', 'Module Integration Principles'],
      faqs: [
        { question: 'Do I need a technical or IT background to start this module?', answer: 'No, ERP System Evolution & Value is covered from a business-concepts perspective before any technical depth is introduced.' },
        { question: 'Does this module explain how data stays consistent across departments?', answer: 'Yes, Centralized Database Architecture is a dedicated topic addressing exactly that.' },
        { question: 'Does this module cover who gets access to what inside an ERP system?', answer: 'Role-Based Security & Permissions is covered specifically for that access-control topic.' },
        { question: 'How do different ERP modules work together, according to this module?', answer: 'Module Integration Principles is a dedicated topic addressing how modules like finance, inventory, and sales connect.' },
        { question: 'Is ERP Architecture & Enterprise Fundamentals taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, ERP Architecture & Enterprise Fundamentals pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the ERP Architecture & Enterprise Fundamentals module?', answer: 'ERP Architecture & Enterprise Fundamentals is one of the topic modules inside the ERP Training program (7-8 Days, As Applicable).' },
        { question: 'Do I need prior experience before starting ERP Architecture & Enterprise Fundamentals?', answer: 'No, ERP Training is designed to build understanding from the ground up, so a business background helps but is not required before starting ERP Architecture & Enterprise Fundamentals.' },
        { question: 'What other ERP Training modules pair well with ERP Architecture & Enterprise Fundamentals?', answer: 'ERP Architecture & Enterprise Fundamentals pairs naturally with Business Process Mapping & SOP Development and Workflow & Operations Management, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'business-process-mapping-and-sop-development',
      title: 'Business Process Mapping & SOP Development',
      subtitle: 'Analyze & Re-engineer Business Operations',
      icon: GitBranch,
      overview: 'Learn business process re-engineering (BPR), flowcharting workflows, standard operating procedure (SOP) documentation, and gap analysis.',
      topics: ['As-Is vs To-Be Process Analysis', 'Process Flowcharting & Visual Mapping', 'SOP Documentation Frameworks', 'Identifying Process Bottlenecks'],
      faqs: [
        { question: 'What does "As-Is vs To-Be" analysis actually mean in this module?', answer: 'It\'s a structured comparison of how a process currently works versus how it should work after improvement, a dedicated topic in this module.' },
        { question: 'Will I learn to visually diagram a business process, or just describe it?', answer: 'Process Flowcharting & Visual Mapping is a dedicated, hands-on topic covering visual diagramming.' },
        { question: 'Does this module teach how to write formal SOPs?', answer: 'Yes, SOP Documentation Frameworks is covered specifically for that documentation skill.' },
        { question: 'How do I find where a business process is breaking down?', answer: 'Identifying Process Bottlenecks is a dedicated topic addressing that diagnostic skill.' },
        { question: 'Is Business Process Mapping & SOP Development taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Business Process Mapping & SOP Development pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Business Process Mapping & SOP Development module?', answer: 'Business Process Mapping & SOP Development is one of the topic modules inside the ERP Training program (7-8 Days, As Applicable).' },
        { question: 'Do I need prior experience before starting Business Process Mapping & SOP Development?', answer: 'No, ERP Training is designed to build understanding from the ground up, so a business background helps but is not required before starting Business Process Mapping & SOP Development.' },
        { question: 'What other ERP Training modules pair well with Business Process Mapping & SOP Development?', answer: 'Business Process Mapping & SOP Development pairs naturally with Workflow & Operations Management and Material Requirement Planning (MRP), which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'workflow-and-operations-management',
      title: 'Workflow & Operations Management',
      subtitle: 'Manage Purchase, Sales, Inventory & Order Lifecycles',
      icon: Settings,
      overview: 'Understand enterprise operational lifecycles from procure-to-pay, order-to-cash, inventory tracking, and warehouse workflows.',
      topics: ['Procure-to-Pay (P2P) Lifecycle', 'Order-to-Cash (O2C) Workflow', 'Inventory & Stock Management', 'Fulfillment & Goods Receipt'],
      faqs: [
        { question: 'Does this module cover the purchasing side of a business, the sales side, or both?', answer: 'Both, Procure-to-Pay (P2P) and Order-to-Cash (O2C) lifecycles are each dedicated topics.' },
        { question: 'Does this module address inventory tracking specifically?', answer: 'Yes, Inventory & Stock Management is a core topic in this module.' },
        { question: 'What happens after goods arrive at a warehouse, according to this module?', answer: 'Fulfillment & Goods Receipt is covered specifically for that stage of the operational workflow.' },
        { question: 'Is this module more about theory or actual operational workflows?', answer: 'It\'s framed around real operational lifecycles, procure-to-pay, order-to-cash, inventory, and fulfillment, rather than abstract ERP theory.' },
        { question: 'Is Workflow & Operations Management taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Workflow & Operations Management pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Workflow & Operations Management module?', answer: 'Workflow & Operations Management is one of the topic modules inside the ERP Training program (7-8 Days, As Applicable).' },
        { question: 'Do I need prior experience before starting Workflow & Operations Management?', answer: 'No, ERP Training is designed to build understanding from the ground up, so a business background helps but is not required before starting Workflow & Operations Management.' },
        { question: 'What other ERP Training modules pair well with Workflow & Operations Management?', answer: 'Workflow & Operations Management pairs naturally with Material Requirement Planning (MRP) and ERP Systems & Module Landscape, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'material-requirement-planning-mrp',
      title: 'Material Requirement Planning (MRP)',
      subtitle: 'Optimize Supply Chain & Financial Alignment',
      icon: Layers,
      overview: 'Master material demand forecasting, production scheduling, bill of materials (BOM), and financial integration points in ERP.',
      topics: ['Bill of Materials (BOM) Management', 'Demand Forecasting & Scheduling', 'Inventory Valuation Basics', 'Financial Audit Trail Integration'],
      faqs: [
        { question: 'Does this module teach how to calculate what materials a business actually needs?', answer: 'Yes, Demand Forecasting & Scheduling is a dedicated topic addressing exactly that.' },
        { question: 'What is a Bill of Materials, and is it covered here?', answer: 'Bill of Materials (BOM) Management is a core topic, covering how products are broken down into their component materials.' },
        { question: 'Does this module connect to financial data, or only inventory?', answer: 'Financial Audit Trail Integration is covered, connecting resource planning to the financial side of ERP.' },
        { question: 'Does this module cover how inventory value is calculated?', answer: 'Yes, Inventory Valuation Basics is a dedicated topic.' },
        { question: 'Is Material Requirement Planning (MRP) taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Material Requirement Planning (MRP) pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Material Requirement Planning (MRP) module?', answer: 'Material Requirement Planning (MRP) is one of the topic modules inside the ERP Training program (7-8 Days, As Applicable).' },
        { question: 'Do I need prior experience before starting Material Requirement Planning (MRP)?', answer: 'No, ERP Training is designed to build understanding from the ground up, so a business background helps but is not required before starting Material Requirement Planning (MRP).' },
        { question: 'What other ERP Training modules pair well with Material Requirement Planning (MRP)?', answer: 'Material Requirement Planning (MRP) pairs naturally with ERP Systems & Module Landscape and ERP Data Management & Migration, which are covered as separate modules in the same program.' },
      ]
    }
  ,
    {
      slug: 'erp-systems-and-module-landscape',
      title: 'ERP Systems & Module Landscape',
      subtitle: 'Navigate the Major ERP Platforms & Their Modules',
      icon: Database,
      overview: 'Compare widely used ERP platforms and their core modules across finance, inventory, procurement, sales, and HR, and understand how module choices follow business needs.',
      topics: ['ERP Platform Landscape & Market Overview', 'Finance & Accounting Module Overview', 'Inventory & Procurement Modules', 'Sales, CRM & HR Modules', 'Module Selection Against Business Requirements'],
      faqs: [
        { question: 'Does this module teach one specific ERP platform, or compare multiple?', answer: 'It compares the widely used ERP platforms and their core modules, rather than training on a single vendor\'s software exclusively.' },
        { question: 'Which business functions does this module map to specific modules?', answer: 'Finance & Accounting, Inventory & Procurement, and Sales, CRM & HR modules are each covered as distinct topics.' },
        { question: 'How do I know which modules a specific business actually needs?', answer: 'Module Selection Against Business Requirements is a dedicated topic addressing that decision-making process.' },
        { question: 'Is this module useful for someone evaluating ERP software for their own company?', answer: 'Yes, understanding the platform landscape and module choices is directly useful for business owners evaluating ERP options, not only for future ERP consultants.' },
        { question: 'Is ERP Systems & Module Landscape taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, ERP Systems & Module Landscape pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the ERP Systems & Module Landscape module?', answer: 'ERP Systems & Module Landscape is one of the topic modules inside the ERP Training program (7-8 Days, As Applicable).' },
        { question: 'Do I need prior experience before starting ERP Systems & Module Landscape?', answer: 'No, ERP Training is designed to build understanding from the ground up, so a business background helps but is not required before starting ERP Systems & Module Landscape.' },
        { question: 'What other ERP Training modules pair well with ERP Systems & Module Landscape?', answer: 'ERP Systems & Module Landscape pairs naturally with ERP Data Management & Migration and ERP for Business Operations, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'erp-data-management-and-migration',
      title: 'ERP Data Management & Migration',
      subtitle: 'Keep Enterprise Data Accurate, Clean & Trustworthy',
      icon: Layers,
      overview: 'Work through master data setup, validation rules, and migration practice, the data groundwork that determines whether an ERP rollout succeeds.',
      topics: ['Master Data Structure & Naming Standards', 'Data Cleaning & De-duplication', 'Migration Templates & Bulk Uploads', 'Validation Rules & Error Resolution', 'Access Control & Data Integrity Checks'],
      faqs: [
        { question: 'Why does data quality matter so much in ERP, according to this module?', answer: 'Master Data Structure & Naming Standards is covered as foundational, since inconsistent data structure is one of the most common reasons ERP rollouts fail.' },
        { question: 'Does this module teach how to clean up messy existing data?', answer: 'Yes, Data Cleaning & De-duplication is a dedicated, practical topic.' },
        { question: 'Will I get hands-on practice migrating data, or only theory?', answer: 'Migration Templates & Bulk Uploads is a hands-on topic covering practical migration work.' },
        { question: 'How does this module prevent bad data from entering the system in the first place?', answer: 'Validation Rules & Error Resolution is covered specifically to address that preventive step.' },
        { question: 'Is ERP Data Management & Migration taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, ERP Data Management & Migration pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the ERP Data Management & Migration module?', answer: 'ERP Data Management & Migration is one of the topic modules inside the ERP Training program (7-8 Days, As Applicable).' },
        { question: 'Do I need prior experience before starting ERP Data Management & Migration?', answer: 'No, ERP Training is designed to build understanding from the ground up, so a business background helps but is not required before starting ERP Data Management & Migration.' },
        { question: 'What other ERP Training modules pair well with ERP Data Management & Migration?', answer: 'ERP Data Management & Migration pairs naturally with ERP for Business Operations and ERP Architecture & Enterprise Fundamentals, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'erp-for-business-operations',
      title: 'ERP For Business Operations',
      subtitle: 'Run Daily Operations Through the ERP System',
      icon: Settings,
      overview: 'Practice the operational routines an ERP supports day to day, including order handling, stock movement, approvals, and the reporting management relies on.',
      topics: ['Order-to-Cash Operational Cycle', 'Procure-to-Pay Operational Cycle', 'Stock Movement & Warehouse Transactions', 'Approval Hierarchies & Exception Handling', 'Operational Dashboards & Management Reports'],
      faqs: [
        { question: 'Does this module teach how to actually run daily operations inside an ERP, not just configure it?', answer: 'Yes, it\'s framed around practising the operational routines an ERP supports day to day, including order handling, stock movement, and approvals.' },
        { question: 'Does this module cover both the buying and selling cycles?', answer: 'Yes, Order-to-Cash and Procure-to-Pay operational cycles are both covered from a day-to-day operations perspective.' },
        { question: 'How are exceptions or approvals handled, according to this module?', answer: 'Approval Hierarchies & Exception Handling is a dedicated topic addressing that operational control layer.' },
        { question: 'Does this module connect to management reporting?', answer: 'Yes, Operational Dashboards & Management Reports is covered, connecting daily operations to the reporting management relies on.' },
        { question: 'Is ERP for Business Operations taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, ERP for Business Operations pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the ERP for Business Operations module?', answer: 'ERP for Business Operations is one of the topic modules inside the ERP Training program (7-8 Days, As Applicable).' },
        { question: 'Do I need prior experience before starting ERP for Business Operations?', answer: 'No, ERP Training is designed to build understanding from the ground up, so a business background helps but is not required before starting ERP for Business Operations.' },
        { question: 'What other ERP Training modules pair well with ERP for Business Operations?', answer: 'ERP for Business Operations pairs naturally with ERP Architecture & Enterprise Fundamentals and Business Process Mapping & SOP Development, which are covered as separate modules in the same program.' },
      ]
    }
  ],

  'digital-marketing-for-business-owners': [
    {
      slug: 'automated-lead-funnels',
      title: 'Automated Lead Funnels',
      subtitle: 'Capture Qualified Customer Enquiries 24/7',
      icon: Funnel,
      overview: 'Build simple, automated lead funnels tailored for business owners to capture local or online enquiries automatically.',
      topics: ['High-Converting Lead Offer Creation', 'Simple Landing Page Setup', 'Automated Lead Notification to Phone', 'Instant Follow-up Automation'],
      faqs: [
        { question: 'Does this module require technical website-building skills?', answer: 'No, it covers simple landing page setup and automated lead notification specifically designed for business owners without a technical background.' },
        { question: 'How fast do I find out about a new lead?', answer: 'Automated Lead Notification to Phone is a dedicated topic, so leads reach you directly rather than sitting unnoticed in an inbox.' },
        { question: 'Does this module cover what makes an offer convert, not just the mechanics?', answer: 'Yes, High-Converting Lead Offer Creation is covered as the starting topic, before the funnel mechanics.' },
        { question: 'What happens right after someone submits a lead form?', answer: 'Instant Follow-up Automation is a dedicated topic addressing that critical first-response window.' },
        { question: 'Is Automated Lead Funnels taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Automated Lead Funnels pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Automated Lead Funnels module?', answer: 'Automated Lead Funnels is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Automated Lead Funnels?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Automated Lead Funnels.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Automated Lead Funnels?', answer: 'Automated Lead Funnels pairs naturally with Local SEO & Google Maps and High-ROI Paid Advertising, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'local-seo-and-google-maps',
      title: 'Local SEO & Google Maps',
      subtitle: 'Dominate Local Search & Get More Foot Traffic',
      icon: MapPin,
      overview: 'Optimize Google Business Profile to rank in local map packs, collect customer reviews, and attract nearby customers.',
      topics: ['Google Business Profile Optimization', 'Local Keyword Optimization', 'Review Generation Strategy', 'Local Citation Basics'],
      faqs: [
        { question: 'Does this module help me rank on Google Maps specifically?', answer: 'Yes, Google Business Profile Optimization is the core topic, directly targeting local map pack visibility.' },
        { question: 'Does this module address getting more customer reviews?', answer: 'Review Generation Strategy is a dedicated topic covering exactly that.' },
        { question: 'Is local keyword research different from regular SEO keyword research?', answer: 'Local Keyword Optimization is covered as its own topic, focused on location-based search terms rather than broad national keywords.' },
        { question: 'What are local citations, and are they covered?', answer: 'Local Citation Basics is a dedicated topic addressing consistent business listings across directories.' },
        { question: 'Is Local SEO & Google Maps taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Local SEO & Google Maps pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Local SEO & Google Maps module?', answer: 'Local SEO & Google Maps is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Local SEO & Google Maps?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Local SEO & Google Maps.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Local SEO & Google Maps?', answer: 'Local SEO & Google Maps pairs naturally with High-ROI Paid Advertising and Social Media Branding, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'high-roi-paid-advertising',
      title: 'High-ROI Paid Advertising',
      subtitle: 'Run Direct-Response Ads Without Wasting Money',
      icon: Target,
      overview: 'Learn how small business owners can run low-budget, high-intent Facebook and Google ads that generate direct phone calls or WhatsApp leads.',
      topics: ['Small Budget Ad Strategy (₹200-500/day)', 'Targeting Local Customers', 'WhatsApp Lead Ads Setup', 'Tracking Daily Ad Returns'],
      faqs: [
        { question: 'Is this module realistic for someone with only a few hundred rupees a day to spend?', answer: 'Yes, Small Budget Ad Strategy (₹200-500/day) is explicitly covered, tailored to small daily budgets rather than large agency-scale campaigns.' },
        { question: 'Does this module help target customers in a specific local area?', answer: 'Yes, Targeting Local Customers is a dedicated topic.' },
        { question: 'Does this module cover WhatsApp-based leads specifically?', answer: 'WhatsApp Lead Ads Setup is covered, since WhatsApp is a common direct-response channel for local Indian businesses.' },
        { question: 'How do I know if my ad spend is actually working?', answer: 'Tracking Daily Ad Returns is a dedicated topic addressing that day-to-day performance check.' },
        { question: 'Is High-ROI Paid Advertising taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, High-ROI Paid Advertising pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the High-ROI Paid Advertising module?', answer: 'High-ROI Paid Advertising is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting High-ROI Paid Advertising?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting High-ROI Paid Advertising.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with High-ROI Paid Advertising?', answer: 'High-ROI Paid Advertising pairs naturally with Social Media Branding and CRM & Lead Nurturing, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'social-media-branding',
      title: 'Social Media Branding',
      subtitle: 'Build Trust & Recognition in Your Local Market',
      icon: Share2,
      overview: 'Establish an organic social media presence on Instagram and Facebook that builds business credibility and retains existing clients.',
      topics: ['Simple Content Creation Routine', 'Showcasing Customer Testimonials', 'Behind-the-Scenes & Storytelling', 'Consistent Business Branding'],
      faqs: [
        { question: 'Does this module require professional photography or video equipment?', answer: 'No, Simple Content Creation Routine is designed around what a business owner can realistically produce consistently, not professional production.' },
        { question: 'Does this module help showcase customer feedback?', answer: 'Yes, Showcasing Customer Testimonials is a dedicated topic.' },
        { question: 'What kind of storytelling content does this module teach?', answer: 'Behind-the-Scenes & Storytelling is covered as a specific content approach for building trust.' },
        { question: 'How does this module keep branding consistent across posts?', answer: 'Consistent Business Branding is a dedicated topic addressing visual and messaging consistency.' },
        { question: 'Is Social Media Branding taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Social Media Branding pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Social Media Branding module?', answer: 'Social Media Branding is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Social Media Branding?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Social Media Branding.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Social Media Branding?', answer: 'Social Media Branding pairs naturally with CRM & Lead Nurturing and Build Your Online Presence, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'crm-lead-nurturing',
      title: 'CRM & Lead Nurturing',
      subtitle: 'Never Lose a Customer Lead Again',
      icon: Users,
      overview: 'Set up basic lead tracking, WhatsApp enquiry follow-ups, and repeat customer retention strategies for small businesses.',
      topics: ['Simple Lead Tracking Spreadsheet/CRM', 'WhatsApp Business Messaging', 'Follow-up Call Schedules', 'Customer Repeat Purchase Strategies'],
      faqs: [
        { question: 'Do I need CRM software to follow this module, or can I use something simpler?', answer: 'A Simple Lead Tracking Spreadsheet/CRM is explicitly covered as the starting point, so no dedicated CRM software purchase is required.' },
        { question: 'Does this module cover WhatsApp for customer communication?', answer: 'Yes, WhatsApp Business Messaging is a dedicated topic.' },
        { question: 'Does this module help me remember to follow up with leads?', answer: 'Follow-up Call Schedules is covered specifically to build a consistent follow-up habit.' },
        { question: 'Does this module address getting repeat customers, or only new ones?', answer: 'Customer Repeat Purchase Strategies is a dedicated topic focused specifically on retention.' },
        { question: 'Is CRM & Lead Nurturing taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, CRM & Lead Nurturing pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the CRM & Lead Nurturing module?', answer: 'CRM & Lead Nurturing is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting CRM & Lead Nurturing?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting CRM & Lead Nurturing.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with CRM & Lead Nurturing?', answer: 'CRM & Lead Nurturing pairs naturally with Build Your Online Presence and Understand Your Target Audience, which are covered as separate modules in the same program.' },
      ]
    }
  ,
    {
      slug: 'build-your-online-presence',
      title: 'Build Your Online Presence',
      subtitle: 'Establish the Digital Foundation Customers Search For',
      icon: Globe,
      overview: 'Set up the essential digital footprint every business needs first, covering website basics, Google Business Profile, and consistent listings, before spending on advertising.',
      topics: ['Website Essentials for Small Business', 'Google Business Profile Setup', 'Consistent Listings & Business Information', 'Collecting & Responding to Reviews', 'Choosing the Right Channels for Your Business'],
      faqs: [
        { question: 'Do I need a full custom website to complete this module?', answer: 'No, Website Essentials for Small Business focuses on the essential digital footprint needed first, not a full custom build.' },
        { question: 'Is Google Business Profile setup covered here as well as in the Local SEO module?', answer: 'Yes, this module covers the initial setup, while the Local SEO module goes deeper into ranking optimization.' },
        { question: 'Does this module address responding to reviews?', answer: 'Collecting & Responding to Reviews is a dedicated topic.' },
        { question: 'How do I know which online channels are actually worth setting up for my business?', answer: 'Choosing the Right Channels for Your Business is a dedicated topic addressing that decision.' },
        { question: 'Is Build Your Online Presence taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Build Your Online Presence pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Build Your Online Presence module?', answer: 'Build Your Online Presence is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Build Your Online Presence?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Build Your Online Presence.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Build Your Online Presence?', answer: 'Build Your Online Presence pairs naturally with Understand Your Target Audience and Content Strategy for Business Owners, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'understand-your-target-audience',
      title: 'Understand Your Target Audience',
      subtitle: 'Know Exactly Who You Are Selling To',
      icon: Users,
      overview: 'Define your real buyer before writing a single ad, covering demographics, buying triggers, objections, and where those customers actually spend attention online.',
      topics: ['Defining Your Ideal Customer Profile', 'Identifying Buying Triggers & Objections', 'Local vs Broader Market Targeting', 'Researching Competitor Audiences', 'Matching Message to Customer Intent'],
      faqs: [
        { question: 'Does this module help me write better ads, or is it purely research?', answer: 'Matching Message to Customer Intent is a dedicated topic connecting the audience research directly to messaging.' },
        { question: 'Does this module cover why customers hesitate to buy?', answer: 'Yes, Identifying Buying Triggers & Objections is covered specifically.' },
        { question: 'Should I target a local audience or try to go broader?', answer: 'Local vs Broader Market Targeting is a dedicated topic helping you make that call based on your business.' },
        { question: 'Does this module include researching competitors?', answer: 'Researching Competitor Audiences is covered as part of building a realistic audience picture.' },
        { question: 'Is Understand Your Target Audience taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Understand Your Target Audience pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Understand Your Target Audience module?', answer: 'Understand Your Target Audience is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Understand Your Target Audience?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Understand Your Target Audience.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Understand Your Target Audience?', answer: 'Understand Your Target Audience pairs naturally with Content Strategy for Business Owners and Mapping the Customer Journey, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'content-strategy-for-business-owners',
      title: 'Content Strategy For Business Owners',
      subtitle: 'Plan Content That Brings Enquiries, Not Just Likes',
      icon: PenTool,
      overview: 'Build a simple, sustainable content plan a busy owner can actually maintain, focused on the posts and pages that move prospects toward an enquiry.',
      topics: ['Choosing Content Themes That Sell', 'Simple Monthly Content Calendar', 'Low-effort Content Formats for Owners', 'Turning Customer Questions Into Content', 'Measuring Which Content Drives Enquiries'],
      faqs: [
        { question: 'Is this module designed for someone who can only spend a little time on content each week?', answer: 'Yes, Low-effort Content Formats for Owners is explicitly covered, built around what a busy owner can actually maintain.' },
        { question: 'Does this module help turn customer questions into content ideas?', answer: 'Turning Customer Questions Into Content is a dedicated topic addressing exactly that.' },
        { question: 'How do I know which content is actually generating enquiries?', answer: 'Measuring Which Content Drives Enquiries is a dedicated topic.' },
        { question: 'Do I need to plan months of content in advance?', answer: 'Simple Monthly Content Calendar is covered, a sustainable monthly structure rather than a long-term editorial plan.' },
        { question: 'Is Content Strategy for Business Owners taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Content Strategy for Business Owners pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Content Strategy for Business Owners module?', answer: 'Content Strategy for Business Owners is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Content Strategy for Business Owners?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Content Strategy for Business Owners.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Content Strategy for Business Owners?', answer: 'Content Strategy for Business Owners pairs naturally with Mapping the Customer Journey and AI for Business Owners, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'mapping-the-customer-journey',
      title: 'Mapping The Customer Journey',
      subtitle: 'See Every Step From First Click to Paying Customer',
      icon: Funnel,
      overview: 'Map the full path a customer takes through your business and find the specific stage where enquiries are being lost.',
      topics: ['Awareness, Consideration & Decision Stages', 'Mapping Touchpoints Across Channels', 'Identifying Drop-off Points', 'Reducing Friction in Enquiry & Booking', 'Post-purchase Follow-up & Referrals'],
      faqs: [
        { question: 'Does this module help me find exactly where I\'m losing customers?', answer: 'Yes, Identifying Drop-off Points is a dedicated topic addressing that specific diagnostic goal.' },
        { question: 'Does this module cover what happens after a sale, or just before it?', answer: 'Post-purchase Follow-up & Referrals is covered, extending the journey past the initial sale.' },
        { question: 'What are the stages this module maps a customer through?', answer: 'Awareness, Consideration & Decision Stages is the foundational topic structuring the rest of the module.' },
        { question: 'Does this module help reduce friction in booking or enquiring?', answer: 'Reducing Friction in Enquiry & Booking is a dedicated topic.' },
        { question: 'Is Mapping the Customer Journey taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Mapping the Customer Journey pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Mapping the Customer Journey module?', answer: 'Mapping the Customer Journey is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Mapping the Customer Journey?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Mapping the Customer Journey.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Mapping the Customer Journey?', answer: 'Mapping the Customer Journey pairs naturally with AI for Business Owners and Online Branding for Local Businesses, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'ai-for-business-owners',
      title: 'AI For Business Owners',
      subtitle: 'Use AI Practically Without a Technical Background',
      icon: Brain,
      overview: 'Non-technical AI application for owners covering customer replies, content drafting, quotations, and routine paperwork, with realistic expectations and clear limits.',
      topics: ['AI-drafted Customer Replies & Enquiries', 'Generating Marketing Content Quickly', 'Quotations, Proposals & Routine Documents', 'Summarizing Feedback & Reviews', 'What AI Should Not Be Trusted With'],
      faqs: [
        { question: 'Do I need technical skills to use the AI tools covered in this module?', answer: 'No, it\'s explicitly designed for owners without a technical background, covering practical uses like customer replies and content drafting.' },
        { question: 'Can AI help with quotations and paperwork, not just marketing content?', answer: 'Yes, Quotations, Proposals & Routine Documents is a dedicated topic.' },
        { question: 'Does this module warn me about AI\'s limits, or just its capabilities?', answer: 'Yes, What AI Should Not Be Trusted With is a dedicated topic addressing realistic limits.' },
        { question: 'Can AI help me understand customer feedback faster?', answer: 'Summarizing Feedback & Reviews is covered specifically for that purpose.' },
        { question: 'Is AI for Business Owners taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, AI for Business Owners pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the AI for Business Owners module?', answer: 'AI for Business Owners is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting AI for Business Owners?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting AI for Business Owners.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with AI for Business Owners?', answer: 'AI for Business Owners pairs naturally with Online Branding for Local Businesses and Customer Acquisition Systems, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'online-branding-for-local-businesses',
      title: 'Online Branding For Local Businesses',
      subtitle: 'Build Recognition & Trust in Your Market',
      icon: Award,
      overview: 'Develop a consistent, credible brand presence across every place a customer encounters your business online.',
      topics: ['Brand Positioning for Local Markets', 'Visual Consistency & Basic Brand Kit', 'Voice, Messaging & Trust Signals', 'Showcasing Work, Reviews & Credentials', 'Handling Reputation & Negative Feedback'],
      faqs: [
        { question: 'Does this module help if I already have negative reviews online?', answer: 'Yes, Handling Reputation & Negative Feedback is a dedicated topic.' },
        { question: 'Do I need a professional designer to build brand consistency?', answer: 'No, Visual Consistency & Basic Brand Kit is covered at a level a business owner can implement without hiring a designer.' },
        { question: 'Does this module help me position my business against local competitors?', answer: 'Brand Positioning for Local Markets is a dedicated topic addressing that positioning question.' },
        { question: 'Does this module help me showcase past work or credentials?', answer: 'Showcasing Work, Reviews & Credentials is covered specifically for that purpose.' },
        { question: 'Is Online Branding for Local Businesses taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Online Branding for Local Businesses pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Online Branding for Local Businesses module?', answer: 'Online Branding for Local Businesses is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Online Branding for Local Businesses?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Online Branding for Local Businesses.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Online Branding for Local Businesses?', answer: 'Online Branding for Local Businesses pairs naturally with Customer Acquisition Systems and Marketing Analytics for Owners, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'customer-acquisition-systems',
      title: 'Customer Acquisition Systems',
      subtitle: 'Create a Predictable Flow of New Customers',
      icon: Target,
      overview: 'Combine the organic and paid channels into a repeatable acquisition system with a known cost per enquiry and a clear follow-up process.',
      topics: ['Choosing Acquisition Channels by Budget', 'Offer Design & Enquiry Incentives', 'Cost per Enquiry & Cost per Customer', 'Follow-up Speed & Conversion Discipline', 'Scaling What Works, Cutting What Does Not'],
      faqs: [
        { question: 'Does this module combine paid and organic channels, or just one?', answer: 'It combines both, Choosing Acquisition Channels by Budget covers organic and paid options together as one repeatable system.' },
        { question: 'Does this module help me understand my actual cost per customer?', answer: 'Yes, Cost per Enquiry & Cost per Customer is a dedicated topic.' },
        { question: 'Does this module address how fast I should follow up with new leads?', answer: 'Follow-up Speed & Conversion Discipline is a dedicated topic addressing that operational discipline.' },
        { question: 'How do I know what to scale versus cut?', answer: 'Scaling What Works, Cutting What Does Not is covered specifically to guide that decision.' },
        { question: 'Is Customer Acquisition Systems taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Customer Acquisition Systems pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Customer Acquisition Systems module?', answer: 'Customer Acquisition Systems is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Customer Acquisition Systems?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Customer Acquisition Systems.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Customer Acquisition Systems?', answer: 'Customer Acquisition Systems pairs naturally with Marketing Analytics for Owners and Automated Lead Funnels, which are covered as separate modules in the same program.' },
      ]
    },
    {
      slug: 'marketing-analytics-for-owners',
      title: 'Marketing Analytics For Owners',
      subtitle: 'Track the Few Numbers That Actually Matter',
      icon: BarChart3,
      overview: 'Cut through vanity metrics and track the small set of numbers that tell a business owner whether marketing spend is genuinely returning money.',
      topics: ['Enquiries, Leads & Conversion Rate', 'Understanding Marketing Spend & ROI', 'Reading Google & Meta Reports Simply', 'Simple Monthly Performance Review', 'Deciding Where to Increase or Cut Spend'],
      faqs: [
        { question: 'Do I need to be a data or analytics expert to follow this module?', answer: 'No, it\'s built to cut through vanity metrics and track only the small set of numbers that actually matter to a business owner.' },
        { question: 'Does this module help me read Google and Meta reports without getting overwhelmed?', answer: 'Yes, Reading Google & Meta Reports Simply is a dedicated topic focused on simplicity.' },
        { question: 'Does this module help me decide where to spend more or less?', answer: 'Deciding Where to Increase or Cut Spend is covered specifically for that decision.' },
        { question: 'How often should I be checking these numbers?', answer: 'Simple Monthly Performance Review is the dedicated topic addressing a sustainable review cadence.' },
        { question: 'Is Marketing Analytics for Owners taught through hands-on practice, or only theory?', answer: 'Yes, like every Sky9 India topic module, Marketing Analytics for Owners pairs the concepts with live lab exercises and real project tasks, not lecture-only theory.' },
        { question: 'Which Sky9 India course includes the Marketing Analytics for Owners module?', answer: 'Marketing Analytics for Owners is one of the topic modules inside the Digital Marketing for Business Owners program (7 Days, ₹7,000).' },
        { question: 'Do I need prior experience before starting Marketing Analytics for Owners?', answer: 'No, Digital Marketing for Business Owners is taught in plain, non-technical business language, so no prior marketing or technical experience is required before starting Marketing Analytics for Owners.' },
        { question: 'What other Digital Marketing for Business Owners modules pair well with Marketing Analytics for Owners?', answer: 'Marketing Analytics for Owners pairs naturally with Automated Lead Funnels and Local SEO & Google Maps, which are covered as separate modules in the same program.' },
      ]
    }
  ]
};

// ============================================================
// AUDIENCE PAGES (/for-students, /for-freshers, etc.)
// ============================================================
export const audiencePages = [
  {
    slug: 'for-students',
    title: 'Practical Training For College Students',
    subtitle: 'Build Employable Skills Alongside Your Degree',
    description: 'Designed for currently enrolled college students seeking practical, industry-relevant skills in Digital Marketing, AI, Software Testing, or ERP before graduation.',
    benefits: ['Flexible weekend/evening batches', 'Resume-worthy 1-month internship experience', 'Practical campaign & software project portfolio', 'Google & Meta certification preparation'],
    faqs: [
      { question: 'Will this course schedule clash with my college lectures and exams?', answer: 'Batches are offered in weekend and evening slots specifically so college students can attend without missing regular classes, and mentors are used to working around exam periods.' },
      { question: 'Do I need to already know a course subject like marketing or coding?', answer: 'No prior background is required, programs start from the fundamentals, which is why they work for students from any degree stream, technical or non-technical.' },
      { question: 'How does the internship work if I\'m still a full-time student?', answer: 'The 1-month internship is structured to run alongside your studies through flexible timing, giving you resume-worthy real project experience before you even graduate.' },
      { question: 'Will this actually strengthen my resume for campus placements?', answer: 'Yes, you graduate with a practical portfolio (real campaigns, test cases, or automation projects depending on your track) plus a certificate and internship experience letter, which stands out alongside a college degree alone.' },
      { question: 'Can I choose a course that\'s different from my degree major?', answer: 'Absolutely, many students pick a track unrelated to their major (like a commerce student learning Software Testing) specifically to build cross-disciplinary, job-ready skills.' },
      { question: 'Is the fee structure different for students compared to working professionals?', answer: 'Course fees are the same published rates for everyone, though students can discuss batch timing and installment options with the admissions team based on their situation.' },
      { question: 'What if I want to continue in academics but still want practical exposure?', answer: 'That\'s exactly what this pathway is designed for, it\'s built as a skills supplement alongside your degree, not a replacement for it.' },
      { question: 'Can I get guidance on which course fits my future career interest?', answer: 'Yes, admissions counselors offer free guidance calls to help match your interests and degree background to the most relevant course track before you enroll.' }
    ]
  },
  {
    slug: 'for-freshers',
    title: 'Job-Ready Programs For Fresh Graduates',
    subtitle: 'Launch Your Career with Practical Confidence',
    description: 'Specialized intensive training programs for fresh graduates from B.A., B.Sc., B.Com, B.E., B.Tech, BBA, and BCA streams wanting to land their first job in tech or marketing.',
    benefits: ['Zero-to-hero curriculum from fundamentals', '1-month structured internship integrated', 'Resume writing & LinkedIn profile building', 'Direct interview referrals to hiring partners'],
    faqs: [
      { question: 'I have zero work experience, will I be competitive against other candidates?', answer: 'The zero-to-hero curriculum plus a 1-month internship exists specifically to close that gap, giving you a real project portfolio and experience letter that stands in for prior work history.' },
      { question: 'Does it matter which degree stream I graduated from?', answer: 'No, the programs are open to B.A., B.Sc., B.Com, B.E., B.Tech, BBA, and BCA graduates alike, since course content starts from fundamentals regardless of your academic background.' },
      { question: 'How quickly can I realistically expect interview calls after finishing?', answer: 'Most graduates start receiving interview calls within 1-2 months of completing the course and internship, though this varies by course track, market conditions, and individual application effort.' },
      { question: 'What exactly do the direct interview referrals involve?', answer: 'Sky9 India\'s placement cell connects graduates to hiring partner networks across Pune and pan-India, giving you a warmer introduction than a cold job application.' },
      { question: 'Will you help me build a LinkedIn profile, or just a resume?', answer: 'Both, resume writing and LinkedIn profile building are included, since recruiters increasingly source freshers directly through LinkedIn, not just resume boards.' },
      { question: 'I already have a few months of internship experience elsewhere, is this still relevant?', answer: 'Yes, this pathway works well even with some prior exposure, since it deepens your practical skill depth and adds a verifiable, structured internship specifically aligned to your target role.' },
      { question: 'Can I choose between a tech course (Software Testing, ERP) and a marketing course as a fresher?', answer: 'Yes, freshers from any stream can pick whichever track (Digital Marketing, AI & Automation, Software Testing, or ERP) matches their career interest, not just their degree subject.' },
      { question: 'What if I don\'t get a job offer immediately after the course?', answer: 'Career support, including mock interviews and referrals, continues beyond the course timeline, since landing a first job is often a multi-attempt process even with strong preparation.' }
    ]
  },
  {
    slug: 'for-graduates',
    title: 'Skill Elevation For Engineering & Business Graduates',
    subtitle: 'Bridge the Academic Gap with Practical Competence',
    description: 'Elevate your degree with high-demand practical specializations in software testing, AI automation, and performance digital marketing.',
    benefits: ['Hands-on project work on real industry tools', 'Technical mock interviews & coding/QA drills', 'Verified Sky9 internship completion certificate', 'Dedicated career mentor support'],
    faqs: [
      { question: 'I already have an engineering or business degree, why do I need additional training?', answer: 'A degree establishes theoretical foundation, but employers increasingly screen for hands-on tool proficiency and project experience, which is exactly what this specialization pathway is designed to add.' },
      { question: 'Are the technical mock interviews specific to my chosen specialization?', answer: 'Yes, mock interview and QA/coding drills are tailored to the track you choose (Software Testing, AI & Automation, or Digital Marketing), reflecting the actual interview patterns for those roles.' },
      { question: 'Is the internship certificate verifiable by employers?', answer: 'Yes, Sky9 India issues a verified internship completion certificate documenting the real project work completed, which employers can reference during background or reference checks.' },
      { question: 'How is a "graduate" pathway different from the general course experience?', answer: 'The core curriculum is the same, but graduate-focused cohorts add technical mock interviews and coding/QA drills specifically aimed at the entry-level interview formats used by tech and marketing employers.' },
      { question: 'What if my engineering branch has nothing to do with software (e.g., mechanical, civil)?', answer: 'That\'s common, many Software Testing and AI & Automation graduates come from non-CS engineering branches, since the courses teach the required tools and concepts from the ground up.' },
      { question: 'Does dedicated career mentor support mean one mentor for the whole journey?', answer: 'You get consistent mentor guidance through your course, internship, and job search phase, rather than being handed off between different people at each stage.' },
      { question: 'Can I pursue this alongside preparing for further studies (like an MBA or M.Tech)?', answer: 'Yes, since batch timing is flexible and the practical skills gained (digital marketing, QA, or AI automation) remain valuable regardless of whether you pursue further studies afterward.' },
      { question: 'How technical does the Software Testing specialization get for non-CS graduates?', answer: 'It starts with manual testing fundamentals before introducing more technical concepts, so non-CS graduates build up gradually rather than being expected to already know programming.' }
    ]
  },
  {
    slug: 'for-working-professionals',
    title: 'Career Upskilling For Working Professionals',
    subtitle: 'Upgrade Your Skills & Accelerate Career Growth',
    description: 'Designed for working professionals looking to transition into high-growth roles, master AI productivity tools, or switch to digital marketing & QA tech careers.',
    benefits: ['Convenient online & weekend class options', 'Immediate application to current workplace tasks', 'AI workflow automation for high productivity', 'Strategic career transition guidance'],
    faqs: [
      { question: 'Can I really keep my full-time job while doing this course?', answer: 'Yes, weekend and evening live online batches are specifically structured for working professionals, so you don\'t need to take a career break to upskill.' },
      { question: 'Will what I learn apply to my current job, or only to a future career switch?', answer: 'Many working professionals apply AI productivity and automation skills to their current role immediately, even before deciding whether to fully switch career tracks.' },
      { question: 'How is a career transition into tech realistic without a technical degree?', answer: 'Software Testing and AI & Automation training start from fundamentals and don\'t require a computer science background, logical thinking and consistent practice matter more than prior technical credentials.' },
      { question: 'What does "strategic career transition guidance" actually involve?', answer: 'It includes mentor conversations about which track fits your existing experience, how to position a career switch to employers, and how to sequence your transition without unnecessary risk.' },
      { question: 'I\'m mid-career, will I be learning alongside much younger, less experienced batchmates?', answer: 'Batches include a mix of students, freshers, and professionals, and course pacing and mentor support are individualized, so your prior professional experience is treated as an asset, not a mismatch.' },
      { question: 'How much time per week should I realistically budget for this?', answer: 'This depends on the course length and mode, but weekend and evening batches are designed around a working professional\'s typical availability, admissions counselors can outline exact weekly hours for your chosen course.' },
      { question: 'Can this help me get promoted in my current company instead of switching companies?', answer: 'Yes, skills like AI workflow automation and digital marketing are frequently applied internally to take on higher-value responsibilities and support internal promotion cases, not just external job changes.' },
      { question: 'What if I\'m unsure whether to fully switch careers or just add a new skill?', answer: 'You don\'t have to decide upfront, many professionals start by building a new skill for their current role and only fully commit to a career switch once they\'ve validated the fit.' }
    ]
  },
  {
    slug: 'for-business-owners',
    title: 'Business Owners Pathway',
    // Breadcrumb/nav label is the canonical page name, distinct from the
    // longer marketing headline used for the on-page hero title.
    breadcrumbLabel: 'Business Owners Pathway',
    subtitle: 'Take Control of Your Business Marketing & Operations',
    description: 'Actionable, non-technical digital marketing and AI automation training designed specifically for founders, traders, and small business owners.',
    benefits: ['7-day intensive business growth bootcamp', 'Set up automated lead generation funnels', 'Dominate local Google Maps search ranking', 'Run high-ROI social ads on small budgets'],
    faqs: [
      { question: 'I have no marketing background at all, will I actually understand this in 7 days?', answer: 'Yes, the bootcamp is deliberately non-technical and taught in plain business language, focused on strategies you can apply immediately rather than marketing theory or jargon.' },
      { question: 'Can I really run these ad campaigns myself, or will I still need to hire an agency?', answer: 'The program is built to make you self-sufficient for small-budget, high-ROI campaigns, though as your business scales you may still choose to outsource execution, the key benefit is you\'ll understand what you\'re paying for.' },
      { question: 'What size budget do I need for the paid advertising strategies taught here?', answer: 'The course specifically teaches high-ROI tactics for limited budgets, covering strategies that work whether you\'re spending a few hundred or a few thousand rupees per day.' },
      { question: 'How does "dominating local Google Maps ranking" work for a small shop or service business?', answer: 'It involves optimizing your Google Business Profile, managing customer reviews, and using local SEO tactics, practical steps any local business owner can execute without technical expertise.' },
      { question: 'Is 7 days really enough, or will I need follow-up training?', answer: 'The 7-day format covers a focused, actionable curriculum sufficient to launch real campaigns and funnels immediately; some business owners later pursue the full Digital Marketing Training course for deeper specialization.' },
      { question: 'Does this apply to service-based businesses, or only product sellers?', answer: 'Both, the lead generation funnels, local SEO, and social ad strategies apply equally to service businesses (consultants, clinics, trades) and product-based businesses.' },
      { question: 'Can my staff attend this training instead of me personally?', answer: 'Yes, business owners often send a marketing-responsible staff member to attend, though owners typically get the most value from directly understanding the strategy themselves.' },
      { question: 'What happens after the bootcamp, is there ongoing support?', answer: 'You can continue with mentor guidance during initial campaign setup, and many business owners return for the fuller Digital Marketing Training program once they see initial results.' }
    ]
  },
  {
    slug: 'for-career-switchers',
    title: 'Transition Programs For Career Switchers',
    subtitle: 'Switch to a High-Growth Tech or Marketing Career',
    description: 'Guided career transition pathways for professionals coming from non-technical, sales, admin, or non-IT backgrounds into Quality Assurance, AI, or Digital Marketing.',
    benefits: ['Step-by-step beginner friendly roadmap', 'No prior coding background required', 'Real workplace scenario assignments', 'Comprehensive interview & portfolio preparation'],
    faqs: [
      { question: 'I\'ve worked in sales/admin for years with zero tech exposure, is switching to QA or AI actually realistic?', answer: 'Yes, this pathway is built specifically for that exact situation, using a step-by-step beginner-friendly roadmap that assumes no prior technical background.' },
      { question: 'Do I need to learn to code to become a Software Tester?', answer: 'No, manual testing, which is where the roadmap starts, does not require coding; logical thinking and attention to detail matter more than programming knowledge at the entry level.' },
      { question: 'How long does a realistic career switch into tech or digital marketing take?', answer: 'It depends on the course length (from 1 month for AI & Automation to 4-6 months for Software Testing) plus job search time, but most switchers see interview traction within 1-2 months of finishing their internship.' },
      { question: 'Will hiring managers take my application seriously without a technical degree?', answer: 'Employers increasingly hire on demonstrated skill and portfolio rather than degree alone, which is why real workplace scenario assignments and a verified internship are core parts of this pathway.' },
      { question: 'What if I\'m not sure whether QA, AI & Automation, or Digital Marketing is the right switch for me?', answer: 'Admissions counselors provide guidance calls to help match your existing strengths (attention to detail, communication, analytical thinking) to the track most likely to suit you.' },
      { question: 'Are the "real workplace scenario assignments" the same as the paid internship?', answer: 'They work together, scenario-based assignments build core skills during the course, and the internship afterward applies those skills to live, real project work under mentor supervision.' },
      { question: 'How comprehensive is the interview preparation for someone starting from zero interview experience in tech?', answer: 'It includes both technical mock interviews relevant to your track and general interview coaching, since many career switchers need support with both the subject matter and the interview format itself.' },
      { question: 'Is age a barrier to switching careers through this pathway?', answer: 'No specific age limit applies, career switchers of varying ages and experience levels join these tracks, since the roadmap is designed around skill-building progress rather than age.' }
    ]
  }
];

// ============================================================
// LOCATION ARCHITECTURE DATA (/locations, /locations/:citySlug)
// ============================================================
export const locationCities = [
  { slug: 'pune', name: 'Pune', hub: 'Shri Nivas Towers, Above Baramati Bank, Pune – 411043', state: 'Maharashtra', isMainHub: true },
  { slug: 'mumbai', name: 'Mumbai', hub: 'Live Interactive Online & Regional Mentorship', state: 'Maharashtra', isMainHub: false },
  { slug: 'bangalore', name: 'Bangalore', hub: 'Live Interactive Online & Regional Mentorship', state: 'Karnataka', isMainHub: false },
  { slug: 'hyderabad', name: 'Hyderabad', hub: 'Live Interactive Online & Regional Mentorship', state: 'Telangana', isMainHub: false },
  { slug: 'delhi-ncr', name: 'Delhi NCR', hub: 'Live Interactive Online & Regional Mentorship', state: 'Delhi', isMainHub: false }
];

// ============================================================
// RESOURCE ARCHITECTURE DATA (/resources, /resources/:type)
// ============================================================
export const resourceCategories = [
  { slug: 'frequently-asked-questions', title: 'Frequently Asked Questions', desc: 'Find quick answers to common questions about admissions, fees, internships, and certifications.', icon: BookOpen },
  { slug: 'career-skill-guides', title: 'Career & Skill Guides', desc: 'In-depth articles and career roadmaps for Digital Marketing, AI, Software QA, and ERP.', icon: FileText },
  { slug: 'student-success-stories', title: 'Student Success Stories', desc: 'Real stories of how Sky9 learners transformed their careers and grew their businesses.', icon: Award },
  { slug: 'industry-tool-index', title: 'Industry Tool Index', desc: 'Explore the 30+ industry-standard tools taught across Sky9 training programs.', icon: Wrench }
];
