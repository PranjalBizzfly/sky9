import {
  Search, Target, Share2, PenTool, Funnel, BarChart3,
  Brain, MessageSquare, Zap, Wrench, Briefcase,
  Bug, FileText, ClipboardCheck, AlertTriangle, Users,
  Database, GitBranch, Settings, TrendingUp, PieChart,
  GraduationCap, Award, BookOpen, Rocket, Shield,
  Monitor, Globe, Clock, IndianRupee, MapPin, Phone, Mail,
  CheckCircle, Star, Heart, Lightbulb, Code, Cpu,
  Layers, ArrowRight, Play, Sparkles
} from 'lucide-react';

import mentorVikramImg from '../assets/mentors/mentor-vikram.webp';
import mentorAnanyaImg from '../assets/mentors/mentor-ananya.webp';
import certHolderImg from '../assets/visuals/cert-holder.webp';
import studentRiyaImg from '../assets/testimonials/student-riya.webp';
import studentAmanImg from '../assets/testimonials/student-aman.webp';
import studentNehaImg from '../assets/testimonials/student-neha.webp';

// ============================================================
// COMPANY INFO
// ============================================================
export const companyInfo = {
  name: 'Sky9 India',
  shortName: 'SKY9',
  tagline: 'Learning by Doing',
  description: 'Sky9 India is a practical learning and professional training platform designed to help students, freshers, graduates, working professionals, entrepreneurs, homemakers, and career switchers build skills that matter in today\'s competitive world.',
  fullDescription: 'Our training programs focus on hands-on learning, real tools, practical assignments, industry-focused projects, and expert guidance. We believe that learning should not be limited to theory alone. The right education should help individuals understand how skills are actually used in real businesses and professional environments. At Sky9 India, learners can explore in-demand fields such as Digital Marketing, Artificial Intelligence, Automation, Software Testing, ERP, and business-focused digital skills. Our goal is to make professional education easier to understand, practical to learn, and useful for building real career and business opportunities.',
  vision: 'Our vision is to become a trusted destination for practical education, digital skills, technology training, and professional development. We want to build a learning community where people from different educational and professional backgrounds can develop the confidence to learn new technologies and adapt to changing industries. The future of work is changing rapidly because of artificial intelligence, automation, digital transformation, and new technologies. Sky9 India aims to help learners stay prepared for these changes by providing access to skills that are relevant today and valuable for the future.',
  mission: 'Our mission is to help individuals build practical skills that can create meaningful career, professional, freelancing, and business opportunities. We want learners to feel confident when they enter the professional world by giving them knowledge that goes beyond textbooks and theoretical education. Sky9 India focuses on creating learning experiences that are easy to understand, practical to apply, and relevant to modern industry requirements. Through expert mentorship, hands-on learning, assignments, projects, internship exposure, and certification guidance, we aim to support learners at every important stage of their professional development.',
  phone: '+91 7 319 419 519',
  email: 'info@Sky9India.com',
  address: '2nd Floor, Shri Nivas Towers, Above Baramati Bank, Pune – 411043, Maharashtra, India',
  socialLinks: {
    facebook: 'https://facebook.com/sky9india',
    instagram: 'https://instagram.com/sky9india',
    youtube: 'https://youtube.com/@sky9india',
    linkedin: 'https://linkedin.com/company/sky9india',
    twitter: 'https://x.com/sky9india',
  },
};

// ============================================================
// STATS
// ============================================================
export const stats = [
  { value: '5000+', label: 'Students Trained', icon: Users },
  { value: '5', label: 'Professional Courses', icon: BookOpen },
  { value: '500+', label: 'Graduates Placed', icon: Briefcase },
  { value: '4.8', label: 'Student Rating', icon: Star },
];

// ============================================================
// WHY CHOOSE SKY9
// ============================================================
export const whyChooseUs = [
  {
    icon: Wrench,
    title: '100% Practical, Hands-On Learning',
    description: 'Education goes beyond lectures. Students work on actual tools, real datasets, and live campaigns to build practical competence.',
  },
  {
    icon: GraduationCap,
    title: 'Expert Industry Mentorship',
    description: 'Courses are designed and delivered by practicing professionals with deep domain expertise in tech and digital industries.',
  },
  {
    icon: Briefcase,
    title: 'Internship-Integrated Programs',
    description: 'Structured 1-month internships integrated directly into training to give candidates authentic industry exposure and work experience.',
  },
  {
    icon: Award,
    title: 'Globally Recognized Certifications',
    description: 'In addition to Sky9\'s Course Completion Certificate, learners receive dedicated guidance and preparation for recognized certifications from Google and Meta.',
  },
  {
    icon: Monitor,
    title: 'Flexible Learning Modes',
    description: 'Available in both high-engagement Classroom (Offline in Pune) and Interactive Live Online batches to suit students, working professionals, and homemakers.',
  },
  {
    icon: TrendingUp,
    title: 'Dedicated Career & Placement Support',
    description: 'Comprehensive placement assistance including resume building, technical mock interview drills, portfolio development, and direct hiring partner referrals.',
  },
];

// ============================================================
// LEARNING FRAMEWORK (4 Pillars)
// ============================================================
export const learningPillars = [
  {
    step: '01',
    title: 'Knowledge Building',
    description: 'Establishing robust core concepts through expert-led sessions, interactive modules, and industry-standard foundations.',
    icon: BookOpen,
  },
  {
    step: '02',
    title: 'Practical Application',
    description: 'Applying concepts through hands-on assignments, laboratory tasks, project simulations, and continuous mentor feedback.',
    icon: Code,
  },
  {
    step: '03',
    title: 'Industry Exposure',
    description: 'Gaining real-world experience via 1-month structured internships, live projects, and workplace workflows.',
    icon: Globe,
  },
  {
    step: '04',
    title: 'Career Readiness',
    description: 'Finalizing the transition with portfolio creation, resume building, mock interviews, skill assessments, and certification guidance.',
    icon: Rocket,
  },
];

// ============================================================
// COURSES
// ============================================================
export const courses = [
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing Training',
    shortTitle: 'Digital Marketing',
    subtitle: 'Master the Complete Digital Marketing Ecosystem',
    category: 'Marketing',
    icon: Target,
    color: 'emerald',
    duration: '2 Months',
    fee: '₹25,000',
    mode: 'Online & Offline',
    certification: 'Sky9 Certificate + Google & Meta Certification Guidance',
    internship: '1-Month Hands-on Internship Included',
    featured: true,
    audience: ['Students', 'Fresh Graduates', 'Marketing Aspirants', 'Working Professionals'],
    overview: 'A comprehensive, hands-on program designed to help learners build practical digital marketing skills across search, social, content, advertising, and analytics. Includes internship support and certification guidance.',
    benefits: [
      'Practical Learning Experience',
      'Industry-Relevant Skills',
      'Hands-On Training',
      'Internship Support',
      'Certification Guidance',
      'Career-Focused Learning',
    ],
    whyChoose: 'Our Digital Marketing program goes beyond theory. You will plan, execute, and optimize real marketing campaigns. By graduation, you will have a portfolio of measurable results that demonstrate your expertise to employers.',
    careerOpportunities: [
      'Digital Marketing Executive',
      'SEO Specialist',
      'Social Media Manager',
      'PPC / Performance Marketing Analyst',
      'Content Marketing Strategist',
      'Email Marketing Specialist',
      'Marketing Automation Manager',
      'Freelance Digital Marketer',
    ],
    modules: [
      {
        title: 'Search Engine Optimization (SEO)',
        icon: Search,
        topics: ['Keyword Research', 'On-Page SEO', 'Off-Page Link Building', 'Technical SEO', 'Local SEO (Google Business Profile)', 'SEO Audits', 'Search Algorithms'],
      },
      {
        title: 'Paid Marketing (Performance Advertising)',
        icon: Target,
        topics: ['Google Ads (Search, Display, Video, YouTube)', 'Meta Ads (Facebook & Instagram)', 'Ad Copywriting', 'Budget Planning', 'Bidding Strategies', 'ROAS Optimization'],
      },
      {
        title: 'Social Media Marketing (SMM)',
        icon: Share2,
        topics: ['Platform Strategy', 'Content Calendar Planning', 'Audience Growth', 'Community Engagement', 'Brand Voice', 'Social Analytics'],
      },
      {
        title: 'Content Creation & Copywriting',
        icon: PenTool,
        topics: ['Content Marketing Strategy', 'Blog Writing', 'Ad Copywriting', 'Visual Storytelling', 'Brand Messaging Frameworks'],
      },
      {
        title: 'Lead Generation & Sales Funnels',
        icon: Funnel,
        topics: ['Lead Funnels', 'Landing Page Optimization', 'Conversion Rate Optimization (CRO)', 'Lead Magnets', 'CRM Integration', 'Email Automation'],
      },
      {
        title: 'Analytics & Performance Reporting',
        icon: BarChart3,
        topics: ['Google Analytics 4 (GA4)', 'Google Search Console', 'Event Tracking', 'Custom Dashboards', 'KPI Monitoring', 'Campaign Attribution'],
      },
    ],
    faqs: [
      {
        question: 'Do I need prior marketing experience?',
        answer: 'No prior experience is required. Our course starts from fundamentals and progressively builds to advanced strategies. It is designed for complete beginners as well as professionals looking to upskill.',
      },
      {
        question: 'Will I work on real campaigns?',
        answer: 'Yes! You will plan, execute, and optimize real digital marketing campaigns using actual budgets, live tools, and industry-standard platforms during the course.',
      },
      {
        question: 'What certifications will I earn from the Digital Marketing Training course?',
        answer: 'You will receive the Sky9 Course Completion Certificate and receive dedicated mentoring and preparation for Google Ads and Meta Blueprint certification exams.',
      },
      {
        question: 'Is the internship paid?',
        answer: 'The internship is a practical learning experience integrated into the course. You will work on real client projects and campaigns under mentor supervision, building your professional portfolio.',
      },
      {
        question: 'Can I take the course online?',
        answer: 'Yes! Sky9 India offers both offline classroom batches at our Pune center and interactive live online sessions. Both modes provide the same curriculum and hands-on experience.',
      },
      {
        question: 'What modules does the Digital Marketing program actually cover?',
        answer: 'Six core modules: SEO, Paid Marketing (Google & Meta Ads), Social Media Marketing, Content Creation & Copywriting, Lead Generation & Sales Funnels, and Analytics & Performance Reporting.',
      },
      {
        question: 'What career roles can I pursue after completing this course?',
        answer: 'Graduates commonly move into roles such as Digital Marketing Executive, SEO Specialist, Social Media Manager, PPC/Performance Marketing Analyst, Content Marketing Strategist, and Email Marketing Specialist.',
      },
      {
        question: 'What makes this program different from just watching marketing tutorials online?',
        answer: 'The course goes beyond theory, you plan, execute, and optimize real marketing campaigns, graduating with a portfolio of measurable results rather than just conceptual knowledge.',
      },
    ],
  },
  {
    id: 'digital-marketing-for-business-owners',
    slug: 'digital-marketing-for-business-owners',
    title: 'Digital Marketing For Business Owners',
    shortTitle: 'Digital Marketing For Business Owners',
    subtitle: 'Grow Your Business with Proven Digital Strategies',
    category: 'Business',
    icon: TrendingUp,
    color: 'blue',
    duration: '7 Days',
    fee: '₹7,000/-',
    mode: 'Online & Offline',
    certification: 'Certificate of Completion',
    internship: 'Practical Project Included',
    featured: false,
    audience: ['Entrepreneurs', 'Small Business Owners', 'Traders', 'Consultants', 'Startup Founders'],
    overview: 'A focused workshop for entrepreneurs and professionals looking to understand digital marketing and implement proven growth strategies for their businesses.',
    benefits: [
      'Understand Digital Marketing Fundamentals',
      'Learn Online Growth Strategies',
      'Improve Your Business Visibility',
      'Understand Lead Generation',
      'Learn Social Media Marketing',
      'Explore Digital Advertising',
      'Discover Modern Marketing Tools',
      'Master Local SEO & Google Business Profile',
    ],
    whyChoose: 'This intensive bootcamp is built for busy business owners. In just 7 days, you will learn actionable digital marketing strategies that you can implement immediately to generate leads, increase visibility, and grow revenue.',
    careerOpportunities: [],
    modules: [
      {
        title: 'Lead Generation Funnels',
        icon: Funnel,
        topics: ['Automated lead capture', 'High-converting landing pages', 'Lead magnets', 'Sales funnel architecture'],
      },
      {
        title: 'Local SEO & Google Maps',
        icon: MapPin,
        topics: ['Google Business Profile setup', 'Local search optimization', 'Review management', 'Map pack ranking strategies'],
      },
      {
        title: 'Paid Advertising on Budget',
        icon: Target,
        topics: ['Facebook & Instagram Ads', 'Google Ads essentials', 'Budget optimization', 'ROI tracking'],
      },
      {
        title: 'Social Media Branding',
        icon: Share2,
        topics: ['Content strategy', 'Organic growth tactics', 'Customer engagement', 'Brand consistency'],
      },
      {
        title: 'CRM & Lead Nurturing',
        icon: Users,
        topics: ['Basic CRM setup', 'Lead scoring', 'Follow-up automation', 'Customer retention strategies'],
      },
    ],
    faqs: [
      {
        question: 'Is this suitable for non-technical business owners?',
        answer: 'Absolutely! This bootcamp is designed specifically for business owners with no prior digital marketing or technical knowledge. Everything is taught in practical, business-oriented language.',
      },
      {
        question: 'Can I implement what I learn immediately?',
        answer: 'Yes! Every session includes actionable strategies that you can implement for your business on the same day. The focus is on immediate, practical application.',
      },
      {
        question: 'What if I have a very small marketing budget?',
        answer: 'This course specifically focuses on high-ROI strategies that work with limited budgets. You will learn how to maximize results whether you have ₹5,000 or ₹50,000 per month to spend.',
      },
      {
        question: 'What topics does the 7-day bootcamp actually cover?',
        answer: 'Five focused modules: Lead Generation Funnels, Local SEO & Google Maps, Paid Advertising on a Budget, Social Media Branding, and CRM & Lead Nurturing.',
      },
      {
        question: 'Do I receive a certificate after completing this bootcamp?',
        answer: 'Yes, a Certificate of Completion is issued once you finish the 7-day program.',
      },
      {
        question: 'Does this course include any hands-on project work?',
        answer: 'Yes, a practical project is included so you leave having applied the strategies to your own business, not just heard them explained.',
      },
      {
        question: 'Who is this bootcamp designed for?',
        answer: 'It\'s built for entrepreneurs, small business owners, traders, consultants, and startup founders, not marketing professionals.',
      },
      {
        question: 'Why choose this 7-day bootcamp instead of the full Digital Marketing Training course?',
        answer: 'This bootcamp is intensive and business-owner-focused, designed to deliver strategies you can implement immediately rather than a comprehensive marketing skillset, business owners who want deeper specialization often follow up with the full Digital Marketing Training program later.',
      },
    ],
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Automation Training',
    shortTitle: 'AI & Automation',
    subtitle: 'Harness the Power of AI to Transform Your Workflow',
    category: 'Technology',
    icon: Brain,
    color: 'purple',
    duration: '1 Month',
    fee: '₹15,000',
    mode: 'Online & Offline',
    certification: 'Sky9 Certificate of Completion',
    internship: 'Live Automation Project & Internship Integration',
    featured: false,
    audience: ['Professionals', 'Freelancers', 'Digital Marketers', 'Tech Enthusiasts'],
    overview: 'A practical program focused on leveraging AI tools and automation systems to improve productivity, streamline workflows, and support business growth.',
    benefits: [
      'Learn Practical AI Tools',
      'Understand Automation Systems',
      'Improve Productivity',
      'Streamline Business Workflows',
      'Explore AI Applications',
      'Learn Modern Technology Skills',
      'Prepare for the Future of Work',
      'Master Prompt Engineering Techniques',
    ],
    whyChoose: 'AI is reshaping every industry. Our training gives you practical, immediately applicable skills to work with AI tools and build automation systems. No coding background needed, we focus on no-code and low-code approaches.',
    careerOpportunities: [
      'AI Operations Specialist',
      'Automation Consultant',
      'Prompt Engineer',
      'AI-Powered Marketing Specialist',
      'Business Process Automation Analyst',
      'AI Integration Specialist',
    ],
    modules: [
      {
        title: 'AI Foundations',
        icon: Brain,
        topics: ['AI Core Principles', 'Generative AI Models', 'Industry Use Cases', 'Workflow Tool Selection'],
      },
      {
        title: 'Prompt Engineering',
        icon: MessageSquare,
        topics: ['Structured Prompt Design', 'Zero-shot & Few-shot Prompting', 'Prompt Libraries', 'Content Generation', 'Productivity Workflows'],
      },
      {
        title: 'Automation Systems',
        icon: Zap,
        topics: ['Workflow Architecture', 'No-code/Low-code Tools (Zapier, Make)', 'Task Automation', 'Process Pipelines'],
      },
      {
        title: 'Productivity Tools',
        icon: Wrench,
        topics: ['AI Research Assistants', 'Meeting Transcription & Summarization', 'Document Creation', 'Smart Spreadsheets'],
      },
      {
        title: 'Business Applications',
        icon: Briefcase,
        topics: ['Automated Marketing Campaigns', 'Customer Support Bots', 'Reporting Automation', 'Lead Sync & Operational Efficiency'],
      },
    ],
    faqs: [
      {
        question: 'Do I need a programming background?',
        answer: 'No! Our AI & Automation course focuses on no-code and low-code tools that anyone can learn. We teach practical AI application, not AI development.',
      },
      {
        question: 'Which AI tools will I learn?',
        answer: 'You will work with ChatGPT, Claude, Google Gemini, Zapier, Make (Integromat), and various AI productivity tools for content creation, research, automation, and business operations.',
      },
      {
        question: 'Is AI really relevant for my career?',
        answer: 'AI skills are becoming essential across all industries. Professionals who can effectively use AI tools are significantly more productive and valuable to employers. This course future-proofs your career.',
      },
      {
        question: 'What kind of projects will I work on?',
        answer: 'You will build real automation workflows, such as automated lead capture systems, content generation pipelines, customer support chatbots, and business reporting dashboards.',
      },
      {
        question: 'What modules are covered in the AI & Automation program?',
        answer: 'Five modules: AI Foundations, Prompt Engineering, Automation Systems, Productivity Tools, and Business Applications.',
      },
      {
        question: 'What career paths does this course open up?',
        answer: 'Graduates pursue roles such as AI Operations Specialist, Automation Consultant, Prompt Engineer, AI-Powered Marketing Specialist, and Business Process Automation Analyst.',
      },
      {
        question: 'Is there an internship component in this course?',
        answer: 'Yes, a live automation project with internship integration, so you apply what you learn to a real workflow rather than only exercises.',
      },
      {
        question: 'Why does Sky9 India\'s approach to AI training stand out?',
        answer: 'The training focuses on practical, immediately applicable skills with no-code and low-code approaches, rather than requiring a programming background.',
      },
    ],
  },
  {
    id: 'software-testing',
    slug: 'software-testing',
    title: 'Software Testing Training',
    shortTitle: 'Software Testing',
    subtitle: 'Master Manual & Automation Testing for a Career in QA',
    category: 'Technology',
    icon: Bug,
    color: 'orange',
    duration: '4 to 6 Months',
    fee: '₹35,000',
    mode: 'Online & Offline',
    certification: 'Sky9 Certificate of Completion',
    internship: 'Real-world Project Work & 1-Month QA Internship',
    featured: false,
    audience: ['Engineering/IT Graduates', 'Career Switchers into Tech', 'Manual Testers Upskilling'],
    overview: 'An industry-focused program that develops practical software testing skills, quality assurance knowledge, and testing methodologies used in modern software development.',
    benefits: [
      'Learn Software Testing Fundamentals',
      'Understand Manual Testing',
      'Explore Functional Testing',
      'Learn Quality Assurance Processes',
      'Gain Industry-Relevant Skills',
      'Work With Practical Testing Concepts',
      'Prepare for Technology Career Opportunities',
      'Learn Defect Management & Bug Tracking (Jira)',
    ],
    whyChoose: 'Software Testing is one of the fastest-growing tech careers with strong demand and excellent growth potential. Our program gives you end-to-end QA skills with real project experience that makes you job-ready from day one.',
    careerOpportunities: [
      'QA Analyst',
      'Software Tester',
      'Test Engineer',
      'QA Lead',
      'Quality Assurance Specialist',
      'Automation Test Engineer',
      'Performance Test Engineer',
    ],
    modules: [
      {
        title: 'Testing Fundamentals',
        icon: BookOpen,
        topics: ['STLC (Software Testing Life Cycle)', 'SDLC Models (Agile/Scrum, Waterfall)', 'QA Principles', 'Testing Levels & Test Types'],
      },
      {
        title: 'Manual Testing',
        icon: ClipboardCheck,
        topics: ['Functional Testing', 'Regression Testing', 'Sanity & Smoke Testing', 'Exploratory Testing', 'Boundary Value Analysis', 'Test Execution'],
      },
      {
        title: 'Test Documentation',
        icon: FileText,
        topics: ['Test Planning', 'Requirement Analysis', 'Test Scenario Writing', 'Test Case Authoring', 'Traceability Matrices (RTM)'],
      },
      {
        title: 'Defect Management',
        icon: AlertTriangle,
        topics: ['Bug Lifecycle', 'Defect Severity & Priority', 'Jira Tracking Tool', 'Issue Reporting', 'Defect Verification & Closure'],
      },
      {
        title: 'Industry Practices & Readiness',
        icon: Briefcase,
        topics: ['Live Web/App Testing', 'QA Team Collaboration', 'Quality Metrics', 'Agile Sprints', 'Technical Interview Preparation'],
      },
    ],
    faqs: [
      {
        question: 'Can non-IT graduates join this course?',
        answer: 'Yes! While an IT background is helpful, many successful QA professionals come from non-IT backgrounds. Our course starts from fundamentals and builds up progressively. Logical thinking is more important than prior IT knowledge.',
      },
      {
        question: 'How long does it take to get a job after the course?',
        answer: 'Most graduates start receiving interview calls within 1-2 months after completing the course and internship. Our career support team provides ongoing assistance with resume preparation, mock interviews, and job referrals.',
      },
      {
        question: 'Is automation testing covered?',
        answer: 'The primary focus is on building a strong manual testing foundation. Automation testing concepts and tools are introduced to prepare you for advanced learning. A dedicated automation testing module can be discussed with the admissions team.',
      },
      {
        question: 'What is the job market like for software testers?',
        answer: 'Software testing is in high demand. Every software company needs QA professionals, and the field offers excellent career growth from QA Analyst to QA Lead, Test Manager, and specialized roles in automation and performance testing.',
      },
      {
        question: 'What are the core modules in this Software Testing program?',
        answer: 'Five modules: Testing Fundamentals, Manual Testing, Test Documentation, Defect Management, and Industry Practices & Readiness.',
      },
      {
        question: 'What career roles can this course lead to?',
        answer: 'Roles such as QA Analyst, Software Tester, Test Engineer, QA Lead, Quality Assurance Specialist, and Automation Test Engineer.',
      },
      {
        question: 'Does the course include real project experience?',
        answer: 'Yes, real-world project work plus a 1-month QA internship, so you practice testing on live applications rather than only theory.',
      },
      {
        question: 'Who typically enrolls in this Software Testing program?',
        answer: 'Engineering/IT graduates, career switchers moving into tech, and manual testers looking to upskill.',
      },
    ],
  },
  {
    id: 'erp',
    slug: 'erp',
    title: 'ERP Training',
    shortTitle: 'ERP',
    subtitle: 'Master Enterprise Resource Planning Systems',
    category: 'Business',
    icon: Database,
    color: 'cyan',
    duration: '7–8 Days',
    fee: 'As Applicable',
    mode: 'Online & Offline',
    certification: 'Certificate of Completion',
    internship: 'Case Project Included',
    featured: false,
    audience: ['Operations Executives', 'Business Analysts', 'Commerce/MBA Students'],
    overview: 'A practical ERP training program that helps learners understand business processes, operational workflows, and the role of ERP systems in organizations.',
    benefits: [
      'Understand ERP Fundamentals',
      'Learn Business Processes',
      'Understand Operational Workflows',
      'Explore Modern ERP Systems',
      'Learn How Organizations Manage Business Operations',
      'Develop Practical Business Technology Knowledge',
    ],
    whyChoose: 'ERP systems are the backbone of modern enterprise operations. Understanding ERP gives you a competitive advantage in business operations, consulting, and management roles across industries.',
    careerOpportunities: [
      'ERP Consultant',
      'Business Process Analyst',
      'Operations Manager',
      'Supply Chain Coordinator',
      'ERP Implementation Specialist',
      'Business Systems Analyst',
    ],
    modules: [
      {
        title: 'ERP Architecture & Fundamentals',
        icon: Database,
        topics: ['Enterprise Software Principles', 'Database Integration', 'Role-based Workflows'],
      },
      {
        title: 'Process Mapping',
        icon: GitBranch,
        topics: ['Business Process Re-engineering', 'Documentation', 'SOP Development'],
      },
      {
        title: 'Workflow & Operations Management',
        icon: Settings,
        topics: ['Purchase Lifecycle', 'Sales Lifecycle', 'Inventory Management', 'Fulfillment Tracking'],
      },
      {
        title: 'Resource Planning',
        icon: Layers,
        topics: ['Material Requirement Planning (MRP)', 'Resource Scheduling', 'Finance & Accounting Alignment'],
      },
      {
        title: 'Process Efficiency & Analytics',
        icon: PieChart,
        topics: ['Management Reporting', 'Audit Trails', 'Error Handling', 'Enterprise System Optimization'],
      },
    ],
    faqs: [
      {
        question: 'What ERP software will I learn?',
        answer: 'The training covers ERP fundamentals that apply across major platforms. Specific ERP software focus can be discussed with the admissions team based on your career goals and batch availability.',
      },
      {
        question: 'Is this suitable for someone without a business background?',
        answer: 'Yes! While a business background helps, the course is designed to build understanding from the ground up. Engineering and IT students can also benefit greatly from ERP knowledge.',
      },
      {
        question: 'How long is the course?',
        answer: 'The duration is customized based on batch size and depth of coverage. Contact our admissions team at +91 7 319 419 519 for upcoming batch dates and course structure details.',
      },
      {
        question: 'What topics are covered in the ERP modules?',
        answer: 'Five modules: ERP Architecture & Fundamentals, Process Mapping, Workflow & Operations Management, Resource Planning, and Process Efficiency & Analytics.',
      },
      {
        question: 'What career opportunities does ERP training open up?',
        answer: 'Roles such as ERP Consultant, Business Process Analyst, Operations Manager, Supply Chain Coordinator, and ERP Implementation Specialist.',
      },
      {
        question: 'Who typically takes this ERP course?',
        answer: 'Operations executives, business analysts, and commerce/MBA students, alongside engineering and IT students who want to add business-systems knowledge.',
      },
      {
        question: 'Is there a practical project component in this course?',
        answer: 'Yes, a case project is included so you apply ERP concepts to a realistic business scenario, not just study them.',
      },
      {
        question: 'Why is ERP knowledge valuable for my career?',
        answer: 'ERP systems are the backbone of modern enterprise operations, so understanding them gives a competitive advantage in business operations, consulting, and management roles across industries.',
      },
    ],
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================
export const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'BBA Student • Digital Marketing Graduate',
    image: studentRiyaImg,
    webp: studentRiyaImg,
    alt: 'Riya Sharma, Sky9 India Digital Marketing graduate',
    rating: 5,
    text: 'The practical approach made learning so easy and enjoyable! Working directly on live tools and executing real campaigns gave me the confidence I needed to apply for digital marketing roles.',
  },
  {
    name: 'Aman Verma',
    role: 'Recent Graduate • QA Engineer',
    image: studentAmanImg,
    webp: studentAmanImg,
    alt: 'Aman Verma, Sky9 India QA Engineering graduate',
    rating: 5,
    text: 'The mentorship and hands-on assignments helped me understand real industry expectations. The 1-month internship experience gave me the practical edge I couldn\'t get from textbooks.',
  },
  {
    name: 'Neha Gupta',
    role: 'Homemaker & Business Owner',
    image: studentNehaImg,
    webp: studentNehaImg,
    alt: 'Neha Gupta, Sky9 India Digital Marketing graduate and business owner',
    rating: 5,
    text: 'The Digital Marketing program helped me understand lead generation, social media advertising, and online branding. I was able to apply these lessons directly to grow my business from home.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Small Business Owner • AI Implementer',
    image: mentorVikramImg,
    webp: mentorVikramImg,
    alt: 'Rahul Mehta, Sky9 India AI & Automation course graduate',
    rating: 5,
    text: 'Coming from a non-technical background, I was intimidated by AI and automation. But Sky9\'s step-by-step guidance and real-world examples helped me automate key operational tasks in my business.',
  },
  {
    name: 'Priya Nair',
    role: 'Career Switcher • ERP Associate',
    image: mentorAnanyaImg,
    webp: mentorAnanyaImg,
    alt: 'Priya Nair, Sky9 India ERP career switcher graduate',
    rating: 5,
    text: 'Transitioning into tech was daunting, but the structured framework, supportive trainers, and self-paced practical sessions made my learning journey in AI and automation smooth and effective.',
  },
];

// ============================================================
// INTERNSHIP DETAILS
// ============================================================
export const internshipData = {
  title: 'Internship Program',
  subtitle: 'Gain Real-World Experience with Structured Industry Internships',
  description: 'Gain 1-month structured practical experience on live client deployments and workflows to build an authentic, verifiable portfolio.',
  structure: '1-Month Practical Internship integrated with training modules',
  delivery: 'Hands-on industry exposure under the direct supervision of experienced project leads',
  activities: [
    {
      title: 'Digital Marketing & Growth',
      course: 'Digital Marketing',
      activity: 'Real campaign execution, plan, launch, and optimize live digital marketing campaigns',
      description: 'Execute live campaigns, conduct keyword & technical SEO audits, manage Meta & Google Ad budgets, and track conversions with GA4.',
      task: 'Plan, launch, and optimize live campaigns across Google Ads, Meta Ads, SEO audits, and content funnels.',
      icon: Target,
      skills: ['SEO Audits', 'Google & Meta Ads', 'GA4 Analytics', 'Lead Funnels'],
    },
    {
      title: 'AI & Workflow Automation',
      course: 'AI & Automation',
      activity: 'Workflow automation pipelines, build and deploy real automation systems',
      description: 'Build multi-step automation pipelines, integrate generative AI tools into business workflows, and configure automated lead capture processes.',
      task: 'Build automated lead processing workflows, AI content generation pipelines, and multi-tool automations.',
      icon: Zap,
      skills: ['Prompt Engineering', 'Zapier / Make', 'Process Automation', 'AI Integrations'],
    },
    {
      title: 'Software Testing & QA',
      course: 'Software Testing',
      activity: 'Real-application test execution and bug reporting on live software projects',
      description: 'Perform manual and functional test execution, draft detailed test scenarios, identify regressions, and report defects using bug tracking tools.',
      task: 'Write comprehensive test cases, perform functional testing, log bug reports, and verify defect resolution.',
      icon: Bug,
      skills: ['Test Case Design', 'Functional QA', 'Bug Tracking', 'Regression Testing'],
    },
    {
      title: 'ERP & Business Systems',
      course: 'ERP Systems',
      activity: 'Business process mapping and enterprise workflow documentation',
      description: 'Map end-to-end enterprise workflows, assist in business process documentation, manage data validation, and configure ERP modules for real operations.',
      task: 'Map end-to-end business workflows, configure ERP modules, and document operational process flows.',
      icon: Database,
      skills: ['Process Mapping', 'Master Data Mgmt', 'ERP Workflows', 'Operational Reporting'],
    },
  ],
  deliverables: [
    'Verified Internship Experience Letter / Certificate',
    'Demonstrable project portfolio items',
    'Industry references from project supervisors',
    'Real-world work samples for your resume',
  ],
};

// ============================================================
// CERTIFICATION DETAILS
// ============================================================
export const certificationData = {
  title: 'Certification Support',
  subtitle: 'Earn Recognized Certifications to Validate Your Skills',
  description: 'Earn verified Sky9 course credentials alongside hands-on mentoring and preparation for recognized Google and Meta industry certifications.',
  internalCert: {
    title: 'Sky9 Course Completion Certificate',
    description: 'Every graduate receives an official Sky9 Course Completion Certificate validating project hours, competencies, and practical assignments completed during the program.',
  },
  externalCerts: [
    {
      title: 'Google Skillshop Certifications',
      description: 'Preparation and voucher guidance for Google Ads (Search, Display, Video, Measurement) and Google Analytics (GA4) certifications.',
      icon: Award,
      url: 'https://skillshop.exceedlms.com/student/catalog',
    },
    {
      title: 'Meta Blueprint Certification',
      description: 'Strategy and mock exams for Meta Certified Digital Marketing Associate examination.',
      icon: Shield,
      url: 'https://www.facebookblueprint.com/student/catalog',
    },
    {
      title: 'QA / Software Testing',
      description: 'Preparation for standard quality engineering assessments and industry-recognized QA certifications.',
      icon: CheckCircle,
      url: 'https://www.istqb.org/',
    },
    {
      title: 'AI Tools & Automation',
      description: 'Hands-on validation and project certification for Generative AI tools, prompt engineering, and automated workflow pipelines.',
      icon: Cpu,
      url: 'https://www.cloudskillsboost.google/catalog?keywords=generative+ai',
    },
  ],
};

// ============================================================
// CAREER SUPPORT
// ============================================================
export const careerData = {
  title: 'Career Support',
  subtitle: 'Your Career Growth is Our Mission',
  description: 'Accelerate your professional transition with tailored portfolio reviews, ATS resume building, mock interviews, and direct hiring referrals.',
  services: [
    {
      title: 'Professional Resume Writing',
      description: 'Expert guidance on crafting ATS-friendly resumes and optimizing your LinkedIn profile for maximum recruiter visibility.',
      icon: FileText,
    },
    {
      title: 'Portfolio Development',
      description: 'Build a professional portfolio showcasing live URLs, ad campaigns, test cases, automation workflows, and measurable project results.',
      icon: Layers,
    },
    {
      title: 'Mock Interviews',
      description: 'Practice with mock technical interviews and HR communication drills to build confidence and refine your presentation skills.',
      icon: Users,
    },
    {
      title: 'Interview Referrals',
      description: 'Direct interview referrals to hiring partner networks in Pune and pan-India across digital marketing, tech, and business roles.',
      icon: Briefcase,
    },
    {
      title: 'Freelancing Orientation',
      description: 'Guidance on starting your freelancing career, from client acquisition and proposal writing to pricing and project management.',
      icon: Globe,
    },
    {
      title: 'LinkedIn & Personal Branding',
      description: 'Strategic optimization of your LinkedIn presence, personal portfolio branding, and network positioning to attract inbound recruiters.',
      icon: TrendingUp,
    },
  ],
};

// ============================================================
// PAGE-SPECIFIC FAQs, About, Career, Internship, Certification, Contact, Courses Hub
// ============================================================
export const aboutFAQs = [
  { question: 'What makes Sky9 India different from other training institutes in Pune?', answer: 'The core difference is the practical-first structure, every course pairs theory with hands-on tools, real assignments, and a 1-month integrated internship, rather than lecture-only delivery followed by a certificate.' },
  { question: 'Who are the mentors and trainers at Sky9 India?', answer: 'Courses are designed and delivered by practicing professionals with real domain experience, agency leads, AI solutions architects, QA engineers, and ERP consultants, not exclusively full-time academic trainers.' },
  { question: 'Is Sky9 India based only in Pune, or can I learn from other cities?', answer: 'The main classroom campus is in Pune, but live interactive online batches let students from anywhere in India follow the identical curriculum and hands-on assignments.' },
  { question: 'Does Sky9 India guarantee job placement after course completion?', answer: 'No training provider can guarantee employment, but dedicated placement support, resume building, mock interviews, and hiring partner referrals, is built into every core program to maximize your readiness.' },
  { question: 'What does the "Learning by Doing" philosophy actually mean day to day?', answer: 'It means each session moves quickly from concept to application, you configure the tool, run the campaign, or write the test case yourself, with mentor feedback on your specific output.' },
  { question: 'How experienced are Sky9 India\'s instructors?', answer: 'Instructor experience ranges roughly 9-12+ years across their respective domains, based on real industry roles rather than teaching tenure alone.' },
  { question: 'Can I visit the Pune campus before enrolling?', answer: 'Yes, you can schedule a campus visit through the admissions team to see the training labs and speak with counselors before committing to a course.' },
  { question: 'Does Sky9 India offer only classroom training, or also online?', answer: 'Both. Every core program is available as offline classroom training at the Pune center or as live interactive online batches, with identical curriculum and assignments in either mode.' },
];

export const careerFAQs = [
  { question: 'Does Sky9 India guarantee a job after course completion?', answer: 'No training program can guarantee employment, but the placement cell works actively with you, resume building, mock interviews, and direct hiring partner referrals, to maximize your chances.' },
  { question: 'What kind of companies hire Sky9 India graduates?', answer: 'Graduates have been placed with agencies, IT services firms, and enterprise employers across Pune and pan-India, spanning digital marketing, QA, and ERP-related roles.' },
  { question: 'How does the mock interview process work?', answer: 'You go through personalized technical and behavioral mock interview drills based on real corporate interview formats for your specific course track, with direct feedback afterward.' },
  { question: 'Is career support included in the course fee, or is it a separate service?', answer: 'Career support, resume building, portfolio review, mock interviews, and referrals, is included as part of the core training programs, not sold as a separate add-on.' },
  { question: 'Do you help with resume writing and LinkedIn optimization?', answer: 'Yes, the placement cell provides ATS-friendly resume tailoring and LinkedIn profile optimization aimed at improving visibility to recruiters.' },
  { question: 'How soon after completing the course can I expect interview calls?', answer: 'Timelines vary, but many graduates begin receiving interview calls within 1-2 months of finishing their course and internship, with the placement team providing ongoing support during this period.' },
  { question: 'Do you provide career support for freelancing instead of full-time jobs?', answer: 'Yes, career services also cover freelancing orientation, including client acquisition, proposal writing, and pricing guidance for those who prefer independent work over full-time roles.' },
  { question: 'Is career counseling available even before I enroll in a course?', answer: 'Yes, admissions counselors offer guidance calls to help you understand which course and career track best fits your background before you commit to enrolling.' },
];

export const internshipFAQs = [
  { question: 'Is the 1-month internship paid or unpaid?', answer: 'The internship is a structured practical learning experience integrated into the course rather than a separately paid position, its value is the real project experience and verified certificate you build.' },
  { question: 'Do I work on real client projects during the internship, or simulated exercises?', answer: 'Real projects, live campaigns, functional test cycles, automation workflows, or ERP process mapping depending on your track, all performed under mentor supervision.' },
  { question: 'Is the internship mandatory, or can I opt out?', answer: 'The internship is integrated directly into the core training programs because it\'s where classroom learning becomes a demonstrable, portfolio-ready skill, so it\'s a standard part of course completion.' },
  { question: 'Will I receive an internship certificate or experience letter?', answer: 'Yes, graduates receive a verified Internship Experience Letter/Certificate along with demonstrable project portfolio items and industry references from project supervisors.' },
  { question: 'What if I\'m already working, can I still do the internship?', answer: 'Yes, internship scheduling is coordinated around your course batch (classroom or live online), and working professionals typically complete it through flexible timing alongside their job.' },
  { question: 'How is the internship structured, is it full-time or part-time?', answer: 'It runs as a structured 1-month period integrated with your training modules, with timing coordinated to fit both full-time students and working professionals.' },
  { question: 'Who supervises the internship work?', answer: 'Experienced project leads and mentors directly supervise internship tasks, reviewing deliverables the same way a workplace manager would evaluate real project output.' },
  { question: 'Can I choose which track (marketing, AI, QA, ERP) for my internship?', answer: 'Your internship track follows the course you\'re enrolled in, Digital Marketing, AI & Automation, Software Testing, or ERP, so it directly reinforces the skills from your specific program.' },
];

export const certificationFAQs = [
  { question: 'Is the Sky9 Course Completion Certificate recognized by employers?', answer: 'The certificate validates project hours, competencies, and practical assignments completed during the program, and is designed to be shareable and verifiable, though recognition ultimately depends on individual employer policies.' },
  { question: 'Do I need to pass a separate exam to get the Google or Meta certification?', answer: 'Yes, Google Skillshop and Meta Blueprint certifications are administered directly by Google and Meta; Sky9 India provides preparation, mentoring, and mock exams, but the certification exam itself is taken through the respective platform.' },
  { question: 'Is there an additional cost for external certifications like Google Ads or Meta Blueprint?', answer: 'Sky9 India provides certification guidance and exam preparation as part of the course; any exam voucher costs charged directly by Google or Meta are disclosed upfront, not hidden in the course fee.' },
  { question: 'How can employers verify my Sky9 certificate?', answer: 'The Sky9 Course Completion Certificate is issued as a verifiable digital credential, designed to be checked and confirmed by employers reviewing your application.' },
  { question: 'Can I add my certificate to LinkedIn?', answer: 'Yes, certificates are designed to be shareable on LinkedIn, letting you display verified course and certification credentials directly on your professional profile.' },
  { question: 'What happens if I don\'t pass the certification exam on the first attempt?', answer: 'Mentors provide continued preparation support and mock exams to help you retake and pass external certification exams like Google Ads or Meta Blueprint.' },
  { question: 'Do all courses include certification guidance, or only specific ones?', answer: 'Certification guidance is available across programs, though the specific external certifications differ by track, Google/Meta for Digital Marketing, and QA or AI/automation-specific credentials for other tracks.' },
  { question: 'How long does it take to receive my certificate after course completion?', answer: 'The Sky9 Course Completion Certificate is issued upon verified completion of course modules, practical assignments, and the internship; exact timing can be confirmed with your program coordinator.' },
];

export const contactFAQs = [
  { question: 'What are Sky9 India\'s office hours?', answer: 'The Pune office is open Monday through Saturday from 9:00 AM to 6:00 PM for in-person visits and calls.' },
  { question: 'How quickly will someone respond to my enquiry?', answer: 'Admissions counselors typically respond to phone, email, and contact form enquiries within the same working day during office hours.' },
  { question: 'Can I schedule an in-person visit to the Pune office?', answer: 'Yes, you can call ahead or use the contact form to arrange a visit to the Shri Nivas Towers campus and speak with an admissions counselor directly.' },
  { question: 'Do you offer counseling calls for people outside Pune?', answer: 'Yes, phone and online counseling is available for prospective students anywhere in India who plan to join a live online batch.' },
  { question: 'What\'s the best way to reach Sky9 India, phone, email, or the contact form?', answer: 'Phone (+91 7 319 419 519) gets the fastest response for urgent questions; email and the contact form work well for detailed queries about fees, batches, or course structure.' },
  { question: 'Can I get information about fees and batch timing without visiting in person?', answer: 'Yes, admissions counselors share full fee structures and upcoming batch schedules over phone, email, or during a live online counseling call.' },
  { question: 'Is WhatsApp support available for quick questions?', answer: 'The primary published contact channels are phone and email; ask your admissions counselor directly if WhatsApp support is available for your specific query.' },
  { question: 'Who do I contact for support after I\'ve already enrolled?', answer: 'Enrolled students work with their assigned program coordinator and mentor for course-related support, and can still reach the general admissions line for administrative questions.' },
];

export const resourceTypeFAQs = {
  'career-skill-guides': [
    { question: 'What kind of career guides are available in this section?', answer: 'In-depth roadmap articles covering Digital Marketing, AI & Automation, Software Testing, and ERP career paths, including guides like the Complete Digital Marketing Career Guide and the Software Testing & Bug Tracking Essentials guide.' },
    { question: 'Are these guides written by Sky9 India staff or outside contributors?', answer: 'Guides are prepared by Sky9 industry practitioners and mentors, drawing on the same practical curriculum taught in the paid courses.' },
    { question: 'Do I need to be enrolled in a course to read these guides?', answer: 'No, the guides are open resources meant to help anyone evaluate a career direction, whether or not they eventually enroll in a Sky9 India course.' },
    { question: 'Do the guides cover local, Pune-specific strategies as well as general skills?', answer: 'Yes, alongside general skill roadmaps, guides like the Local SEO Guide for Pune Small Businesses focus specifically on regional, practical tactics for entrepreneurs.' },
    { question: 'Is there a guide specifically about AI and prompting?', answer: 'Yes, the Beginner to Advanced AI Prompting Guide covers structured prompting techniques for ChatGPT, Claude, and AI productivity tools.' },
    { question: 'Is there a guide for software testing and QA basics?', answer: 'Yes, the Software Testing & Bug Tracking Essentials guide covers STLC, test case writing, Jira defect logging, and QA interview preparation.' },
    { question: 'Does this section include guidance for ERP or business-process careers?', answer: 'Yes, the Enterprise Process Mapping & SOP Guide covers business process re-engineering, procure-to-pay lifecycles, and ERP system architecture.' },
    { question: 'How many career guides are currently available in this section?', answer: 'Five guides, covering Digital Marketing, AI Prompting, Software Testing, ERP process mapping, and Local SEO for small businesses.' },
  ],
  'student-success-stories': [
    { question: 'What is documented in the Sky9 India case studies?', answer: 'Real accounts of how learners, including homemakers, business owners, career switchers, and graduates, applied their training, covering placements, business growth, and career transitions.' },
    { question: 'Are these the same as the testimonials on the Student Success page?', answer: 'They draw from the same pool of real student outcomes; this section frames them as more detailed, case-by-case stories rather than short testimonial quotes.' },
    { question: 'Do case studies cover business owners as well as job-seeking students?', answer: 'Yes, case studies include both graduates who moved into digital marketing or tech roles and business owners who grew their lead generation and revenue after training.' },
    { question: 'Do case studies include Software Testing or ERP outcomes, or only marketing stories?', answer: 'No, case studies span all program tracks, including Software Testing placements and ERP career transitions, not just marketing-related outcomes.' },
    { question: 'Can I speak with a case-study student before I enroll?', answer: 'Admissions counselors can help connect prospective learners with relevant graduate experiences for specific course tracks.' },
    { question: 'Do the case studies include specific numbers, or just general descriptions?', answer: 'Case studies focus on concrete, specific outcomes, like a business owner\'s lead generation change or a graduate\'s placement timeline, rather than vague success claims.' },
    { question: 'How is this case-studies section different from the wider Resources hub?', answer: 'It\'s the resource category specifically for documented student and business outcomes, while the broader Resources hub also includes guides, tools, and FAQs.' },
    { question: 'Are new case studies added as more students complete their courses?', answer: 'The section is intended to grow as more graduates complete courses and share verifiable outcomes.' },
  ],
  'industry-tool-index': [
    { question: 'How many tools are covered across Sky9 India\'s courses?', answer: '30+ industry-standard tools are taught across the programs, spanning digital marketing platforms, AI assistants, QA testing software, and ERP systems.' },
    { question: 'What categories of tools does this index include?', answer: 'It spans tools like Google Ads, Meta Ads Manager, and GA4 for marketing; Jira and Postman for QA; Zapier and Python-based scripting for automation; and core ERP module software.' },
    { question: 'Will I actually get hands-on practice with these tools, or just read about them?', answer: 'These are the same live tools used in each course\'s hands-on lab assignments, this index is a reference list, while the practical usage happens inside your enrolled course.' },
    { question: 'Are these tools specific to Digital Marketing, or used across all courses?', answer: 'They span every track, marketing platforms for Digital Marketing, Jira and Postman for Software Testing, Zapier and AI assistants for AI & Automation, and core modules for ERP.' },
    { question: 'Do I need to buy these tools myself before starting a course?', answer: 'Course lab sessions provide access to the tools needed for hands-on assignments; check with admissions for specifics on any tool that requires an individual account.' },
    { question: 'Is Jira included in this tools index?', answer: 'Yes, Jira is listed alongside Postman as part of the Software Testing toolset.' },
    { question: 'Which AI tools appear in this index?', answer: 'AI assistants used for productivity and content creation are listed alongside the automation tools, like Zapier, taught in AI & Automation Training.' },
    { question: 'Is this tools list kept up to date as the industry changes?', answer: 'The index reflects the tools actively taught in Sky9 India courses, updated as course curricula evolve.' },
  ],
  ebooks: [
    { question: 'What format are the Sky9 India e-books available in?', answer: 'Actionable PDF handbooks covering interview preparation playbooks and digital marketing cheat-sheets, built from the same practical curriculum used in the paid courses.' },
    { question: 'Are these e-books free to access?', answer: 'This section is designed as a free downloads library; check with admissions for current availability of specific titles.' },
    { question: 'Who are the e-books written for, beginners or experienced professionals?', answer: 'They are written to support both, foundational cheat-sheets for beginners exploring a topic, and interview-prep playbooks for learners closer to a job search.' },
    { question: 'Do the e-books span all 5 course tracks, or focus mainly on marketing?', answer: 'The library currently includes interview-prep playbooks and marketing cheat-sheets; coverage across every track expands as new titles are added.' },
    { question: 'How do I access an e-book once I find one I want?', answer: 'Check with the admissions team for current download availability of specific titles.' },
    { question: 'Are these e-books a substitute for the full paid course?', answer: 'No, they\'re lighter-weight reference material; the hands-on labs, mentor feedback, and internship are part of the full paid course only.' },
    { question: 'Do the e-books include exercises, or only reading material?', answer: 'They\'re built from the same practical curriculum as the courses, so they lean toward actionable steps rather than pure theory.' },
    { question: 'Is there an e-book specifically for interview preparation?', answer: 'Yes, interview preparation playbooks are part of this download library.' },
  ],
  checklists: [
    { question: 'What kind of checklists does Sky9 India provide?', answer: 'Production-ready technical SEO audit sheets, QA test execution checklists, and social media campaign launch protocols, structured the same way they are used in real internship assignments.' },
    { question: 'Are these checklists specific to one course or usable across tracks?', answer: 'Different checklists map to different tracks, SEO and campaign checklists relate to Digital Marketing, while test execution checklists relate to Software Testing.' },
    { question: 'Can I use these checklists without being enrolled in a course?', answer: 'Yes, they are designed as standalone reference sheets, though they reflect the same standard operating procedures taught inside the full courses.' },
    { question: 'Are these the exact checklists used during the internship, or simplified versions?', answer: 'They\'re structured the same way real internship assignments use them, production-ready sheets, not simplified summaries.' },
    { question: 'Do I need special software to use these checklists?', answer: 'They\'re designed as straightforward reference documents; no specialized software is required to use them.' },
    { question: 'Is there a checklist specifically for SEO audits?', answer: 'Yes, a technical SEO audit sheet is part of this section.' },
    { question: 'Does this section include QA-specific checklists?', answer: 'Yes, QA test execution checklists are included alongside the marketing-focused sheets.' },
    { question: 'Can business owners use these checklists, or are they only for QA and marketing students?', answer: 'The social media campaign launch protocol is directly usable by business owners; the more technical QA and SEO checklists are aimed at students on those specific tracks.' },
  ],
  templates: [
    { question: 'What kind of templates are available here?', answer: 'Test scenario matrices, client proposal templates, Looker Studio reporting dashboards, and email sequence templates drawn from real project deliverables.' },
    { question: 'Are these the same templates used during the internship?', answer: 'They follow the same structure as the deliverables built during Sky9 India\'s integrated internship, so they reflect actual working documents rather than generic samples.' },
    { question: 'Which course track do the reporting dashboard templates relate to?', answer: 'The Looker Studio dashboard templates relate to the Digital Marketing track\'s Google Analytics 4 & Performance Reporting module.' },
    { question: 'Do I need specific software like Looker Studio to use these templates?', answer: 'The reporting dashboard templates are built for Looker Studio specifically; the proposal, test matrix, and email templates are standard document formats.' },
    { question: 'Can I use the email sequence templates without taking the Digital Marketing course?', answer: 'Yes, they\'re provided as standalone reference templates, though they reflect the email marketing approach taught in that course.' },
    { question: 'Is there a template for client proposals?', answer: 'Yes, a client proposal template is included, drawn from real project deliverables.' },
    { question: 'Do these templates include instructions, or just the blank format?', answer: 'They follow the same structure as real project deliverables built during the internship, so the format itself demonstrates how each document is used.' },
    { question: 'Which course track do the test scenario matrices relate to?', answer: 'The test scenario matrices relate to the Software Testing track\'s Test Planning & Test Case Authoring module.' },
  ],
};

export const pricingFAQs = [
  { question: 'What exactly is included in the published course fee?', answer: 'Course materials, live lab simulations, mentorship sessions, and the 1-month integrated internship are all included in the stated fee, there are no separate charges added later for these core components.' },
  { question: 'Why does the ERP Training page show "As Applicable" instead of a fixed fee?', answer: 'ERP Training fees vary based on batch scope and duration (7-8 days), so the exact figure is confirmed directly with admissions rather than published as a single fixed number like the other four courses.' },
  { question: 'Does the fee change if I choose online instead of classroom training?', answer: 'No, the published fee for each course is the same whether you choose Pune classroom training or a live online batch, since both modes deliver the identical curriculum and hands-on assignments.' },
  { question: 'Can I pay the course fee in installments?', answer: 'Course fees are published as a single stated amount, but students can discuss batch timing and installment options directly with the admissions team based on their individual situation.' },
  { question: 'Is any scholarship or fee concession available?', answer: 'Use the "Scholarship Enquiry" option on this page to raise your situation directly with admissions, concessions, if any, are evaluated case by case rather than published as a fixed policy.' },
  { question: 'Which course is the most affordable starting point?', answer: 'The 7-day Digital Marketing for Business Owners bootcamp at ₹7,000 is the lowest-priced program; the 1-month AI & Automation course at ₹15,000 is the most affordable of the internship-integrated tracks.' },
  { question: 'Where can I compare all five course fees side by side?', answer: 'The "Compare Training Programs" table further down this page lists duration, investment, delivery mode, and internship inclusion for every Sky9 India course in one view.' },
  { question: 'Does the course fee cover certification exam costs like Google Ads or Meta Blueprint?', answer: 'The Sky9 course fee covers training, mentorship, and internship; certification guidance is included, though any exam voucher fee charged directly by Google or Meta is separate and disclosed upfront, not hidden in the course price.' },
];

export const coursesHubFAQs = [
  { question: 'How do I decide which course is right for me?', answer: 'Compare the overview, duration, and career outcomes on each course page, or book a free counseling call, admissions counselors match courses to your background and goals directly.' },
  { question: 'Can I enroll in more than one course at the same time?', answer: 'It\'s possible, but most students complete one program at a time so they can fully engage with the internship and assignments before starting another track.' },
  { question: 'Are all courses available in both online and offline mode?', answer: 'Yes, every core course (Digital Marketing, AI & Automation, Software Testing, ERP, and Digital Marketing for Business Owners) is offered both as Pune classroom training and live interactive online batches.' },
  { question: 'What is the typical fee range across Sky9 India\'s courses?', answer: 'Fees range from ₹7,000 for the 7-day Digital Marketing for Business Owners bootcamp up to ₹35,000 for the 4-6 month Software Testing program, with ERP fee confirmed based on batch scope.' },
  { question: 'Do all courses include a 1-month internship?', answer: 'The core programs (Digital Marketing, AI & Automation, Software Testing) include a full 1-month internship; shorter programs like the Business Owners bootcamp and ERP training include a practical project component instead.' },
  { question: 'Is there a free trial class before I commit to a course?', answer: 'Speak with an admissions counselor about sitting in on an introductory session for your course of interest before enrolling, availability depends on the current batch schedule.' },
  { question: 'Can I switch from one course to another after enrolling?', answer: 'Switching is handled case by case with the admissions team, since it depends on batch timing and how much of your original course you\'ve already completed.' },
  { question: 'Are there any prerequisites for these courses?', answer: 'No formal prerequisites apply, courses are designed to start from fundamentals, so students, freshers, career switchers, and business owners without prior experience in the subject can all join.' },
];

// ============================================================
// FAQs (General)
// ============================================================
export const generalFAQs = [
  {
    question: 'Who can join Sky9 India courses?',
    answer: 'Anyone looking to build in-demand practical skills, college students, recent graduates, working professionals upskilling or switching careers, and business owners.',
  },
  {
    question: 'Are the courses online or offline?',
    answer: 'Both! Sky9 India offers offline classroom batches at our Pune facility (Shri Nivas Towers) and live interactive online sessions for students across India.',
  },
  {
    question: 'Do I get an internship experience?',
    answer: 'Yes, our core courses include a 1-month hands-on internship where you work on real tasks and projects with mentor guidance.',
  },
  {
    question: 'What certifications will I earn?',
    answer: 'You will earn the verified Sky9 Course Completion Certificate and receive complete mentoring to pass Google, Meta, and QA industry certification exams.',
  },
  {
    question: 'How do I enroll?',
    answer: 'Click the "Enroll Now" button on any course page, or contact our admissions team at +91 7 319 419 519 or info@Sky9India.com.',
  },
  {
    question: 'What makes Sky9 India different from other training institutes?',
    answer: 'Our "Learning by Doing" philosophy means you spend 80% of your time on practical work, real campaigns, real tools, real projects. We also provide integrated internships, certification guidance, and career support.',
  },
  {
    question: 'How many courses does Sky9 India currently offer?',
    answer: 'Five programs: Digital Marketing Training, Digital Marketing for Business Owners, AI & Automation Training, Software Testing Training, and ERP Training.',
  },
  {
    question: 'Where is the Sky9 India classroom center located?',
    answer: '2nd Floor, Shri Nivas Towers, Above Baramati Bank, Pune – 411043, Maharashtra, India, with live online batches available for students outside Pune.',
  },
];

// ============================================================
// LANDING PAGE FAQS (8 CURRICULUM QUESTIONS)
// ============================================================
export const landingPageFAQs = [
  {
    id: 1,
    question: 'Search Engine Optimization (SEO)',
    answer: 'Learn the fundamentals of SEO, including keyword research, on-page optimization, technical SEO, and practical strategies to improve website visibility on search engines.',
  },
  {
    id: 2,
    question: 'Social Media Marketing',
    answer: 'Understand how to use social media platforms to build brand presence, create engaging content, reach the right audience, and support business growth.',
  },
  {
    id: 3,
    question: 'Google & Meta Ads (Paid Marketing)',
    answer: 'Learn the fundamentals of paid advertising through Google Ads and Meta Ads, including campaign setup, audience targeting, ad creation, and performance tracking.',
  },
  {
    id: 4,
    question: 'Lead Generation',
    answer: 'Learn practical methods for attracting potential customers, capturing leads, and creating digital marketing strategies that support business growth.',
  },
  {
    id: 5,
    question: 'AI Tools & Applications',
    answer: 'Explore practical AI tools and applications for content creation, productivity, marketing, and other real-world digital tasks.',
  },
  {
    id: 6,
    question: 'Workflow Automation',
    answer: 'Understand how automation can simplify repetitive tasks, connect digital processes, and improve efficiency using modern automation tools and AI.',
  },
  {
    id: 7,
    question: 'Software Testing (Manual & Functional)',
    answer: 'Learn the fundamentals of software testing, including manual testing, functional testing, quality assurance, test cases, and bug reporting.',
  },
  {
    id: 8,
    question: 'ERP Systems & Business Processes',
    answer: 'Understand ERP fundamentals, business processes, operations, and data management to develop practical knowledge of enterprise systems.',
  },
];

// Mirrors contentRepository.getCourseUrl() without importing it here (siteData
// is upstream of the CMS registry that module depends on, so importing it back
// would create a circular dependency).
function courseUrlFor(slug) {
  const URL_SLUGS = {
    'digital-marketing': 'courses/digital-marketing-training',
    'ai-automation': 'courses/ai-automation-training',
    'software-testing': 'courses/software-testing-training',
    erp: 'courses/erp-training',
  };
  if (URL_SLUGS[slug]) return `/${URL_SLUGS[slug]}`;
  if (slug === 'digital-marketing-for-business-owners') return '/business-owners/digital-marketing-for-business-owners';
  return `/${slug}`;
}

// ============================================================
// NAVIGATION
// ============================================================
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about/about-overview' },
  {
    label: 'Courses',
    path: '/courses',
    children: courses.map(c => ({
      label: c.title,
      path: courseUrlFor(c.slug),
      icon: c.icon,
      description: c.subtitle,
    })),
  },
  { label: 'Internship', path: '/internship/internship-overview' },
  { label: 'Certification', path: '/certification/certification-overview' },
  { label: 'Career', path: '/career/career-opportunities-overview' },
  { label: 'Resources', path: '/resources/learning-overview' },
  { label: 'Contact Us', path: '/contact-us' },
];

// ============================================================
// FOOTER
// ============================================================
export const footerData = {
  quickLinks: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about/about-overview' },
    { label: 'Resources', path: '/resources/learning-overview' },
    { label: 'Pricing & Fees', path: '/pricing' },
    { label: 'Locations', path: '/locations' },
    { label: 'Internship', path: '/internship/internship-overview' },
    { label: 'Certification', path: '/certification/certification-overview' },
    { label: 'Career', path: '/career/career-opportunities-overview' },
    { label: 'Sitemap', path: '/resources/visual-sitemap-directory' },
    { label: 'Design System', path: '/resources/ui-design-system' },
    { label: 'Contact Us', path: '/contact-us' },
  ],
  courseLinks: courses.map(c => ({
    label: c.shortTitle,
    path: courseUrlFor(c.slug),
  })),
};
