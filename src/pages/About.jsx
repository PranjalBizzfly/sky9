import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, ArrowRight, Award, CheckCircle, Download } from 'lucide-react';
import { companyInfo, whyChooseUs, learningPillars, aboutFAQs } from '../data/siteData';
import { heroImages } from '../data/heroImages';
import PageHero from '../components/common/PageHero';
import SectionLabel from '../components/common/SectionLabel';
import SeoHead from '../components/common/SeoHead';
import FeatureCard from '../components/common/FeatureCard';
import StatsBar from '../components/home/StatsBar';
import TypewriterHeading from '../components/common/animations/TypewriterHeading';
import SpotlightCard from '../components/common/animations/SpotlightCard';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import DownloadDetailsModal from '../components/lead/DownloadDetailsModal';
import Picture from '../components/common/Picture';
import aboutCampusImg from '../assets/visuals/framework-lab.webp';
import mentorVikramImg from '../assets/mentors/mentor-vikram.webp';
import mentorAnanyaImg from '../assets/mentors/mentor-ananya.webp';
import mentorRajeshImg from '../assets/mentors/mentor-rajesh.webp';
import mentorSnehaImg from '../assets/mentors/mentor-sneha.webp';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const About = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SeoHead
        title="About Sky9 India"
        description="Learn Today, Build Your Tomorrow. Empowering learners with hands-on practical skills in Digital Marketing, AI & Automation, Software QA, and ERP."
        canonical="https://sky9india.com/about/about-overview"
      />
      <PageHero
        breadcrumbItems={[{ label: 'About', path: '/about/about-overview' }, { label: 'About Sky9 India' }]}
        eyebrow="Practical Training Institute • Pune"
        title="About Sky9 India"
        description="Learn Today, Build Your Tomorrow. Empowering learners with hands-on practical skills in Digital Marketing, AI & Automation, Software QA, and ERP."
        image={heroImages.about.url}
        imageWebp={heroImages.about.webp}
        imageAlt={heroImages.about.alt}
        imagePosition={heroImages.about.pos}
        primaryAction={{
          label: 'Explore Courses',
          to: '/courses'
        }}
        secondaryAction={{
          label: 'Contact Admissions',
          to: '/contact-us'
        }}
      />

      {/* Live Impact Stats Bar */}
      <StatsBar />

      <section className="py-8 sm:py-10 md:py-14 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionLabel>Pune Practical Institute</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
              Transforming Tech Education With <span>Learning By Doing</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {companyInfo?.description}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              {companyInfo?.fullDescription || 'We empower students, fresh graduates, career switchers, and entrepreneurs with hands-on, job-ready skills in digital marketing, artificial intelligence, software quality assurance, and enterprise systems.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">1-Month Live Internship</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Classroom & Live Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:bg-emerald-500 hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Course Details (PDF)</span>
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
              <Picture
                src={aboutCampusImg}
                webp={aboutCampusImg}
                alt="Sky9 India Pune training campus with Indian students attending live interactive tech workshop"
                className="w-full h-[380px] sm:h-[420px] object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-lg flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">Pune Tech Innovation Campus</h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Daily Interactive Practical Sprints</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-emerald-500 text-white font-extrabold text-xs shadow-md">
                  5,000+ Trained
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border-l-4 border-l-emerald-500 border border-slate-200 dark:border-slate-800"
          >
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white font-heading">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {companyInfo?.mission || 'Our mission is to help individuals build practical skills that can create meaningful career, professional, freelancing, and business opportunities.'}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border-l-4 border-l-emerald-500 border border-slate-200 dark:border-slate-800"
          >
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white font-heading">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {companyInfo?.vision || 'Our vision is to become a trusted destination for practical education, digital skills, technology training, and professional development.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-14 max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          <div className="mb-3"><SectionLabel>Core Advantages</SectionLabel></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 text-slate-900 dark:text-white font-heading">Why Choose Sky9 India</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">Discover the distinct advantages of our hands-on, career-focused learning methodology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(whyChooseUs || []).map((feature, idx, arr) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className={idx === arr.length - 1 && arr.length % 2 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-14 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6 sm:mb-10">
            <div className="mb-3"><SectionLabel>Methodology</SectionLabel></div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 text-slate-900 dark:text-white font-heading">Our Learning Framework</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">A structured, proven 4-stage methodology ensuring verifiable skill mastery.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(learningPillars || []).map((pillar, idx, arr) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`h-full ${idx === arr.length - 1 && arr.length % 2 !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <SpotlightCard className="h-full bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition duration-300">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                    <span className="font-extrabold text-base">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white font-heading">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Mentors & Practical Leadership */}
      <section className="py-8 sm:py-10 md:py-14 max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          <div className="mb-3"><SectionLabel>Practical Leadership</SectionLabel></div>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 sm:mb-4 text-slate-900 dark:text-white font-heading">
            <TypewriterHeading text="Learn Directly From Industry Practitioners" />
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Our programs are designed and coached by seasoned tech leads, agency directors, and enterprise consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              name: 'Vikram Deshmukh',
              role: 'Head of Digital Marketing',
              exp: '12+ Yrs • Ex-Agency Lead',
              image: mentorVikramImg,
              imageWebp: mentorVikramImg,
              alt: 'Vikram Deshmukh, Head of Digital Marketing at Sky9 India',
              tags: ['Google Ads', 'Meta Ads', 'SEO Growth'],
            },
            {
              name: 'Ananya Joshi',
              role: 'AI & Automation Lead',
              exp: '9+ Yrs • AI Solutions Architect',
              image: mentorAnanyaImg,
              imageWebp: mentorAnanyaImg,
              alt: 'Ananya Joshi, AI & Automation Lead at Sky9 India',
              tags: ['Generative AI', 'Make.com', 'LLM Agents'],
            },
            {
              name: 'Rajesh Kulkarni',
              role: 'Principal QA Lead',
              exp: '10+ Yrs • Automation Engineer',
              image: mentorRajeshImg,
              imageWebp: mentorRajeshImg,
              alt: 'Rajesh Kulkarni, Principal QA Lead at Sky9 India',
              tags: ['Selenium', 'Cypress', 'API Testing'],
            },
            {
              name: 'Sneha Patil',
              role: 'Enterprise ERP Consultant',
              exp: '11+ Yrs • SAP & Business QA',
              image: mentorSnehaImg,
              imageWebp: mentorSnehaImg,
              alt: 'Sneha Patil, Enterprise ERP Consultant at Sky9 India',
              tags: ['ERP Workflows', 'Finance', 'Supply Chain'],
            },
          ].map((mentor, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition duration-300 group">
                <div className="relative h-60 overflow-hidden">
                  <Picture
                    src={mentor.image}
                    webp={mentor.imageWebp}
                    alt={mentor.alt || mentor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-500/90 text-white font-bold text-[11px] backdrop-blur-xs">
                    {mentor.exp}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white font-heading mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                    {mentor.role}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About FAQs */}
      <FAQSection
        items={aboutFAQs}
        label="About Sky9 FAQs"
        description="Get answers to common queries about Sky9 India"
        className="py-8 sm:py-10 md:py-14 bg-slate-50 dark:bg-slate-800/50"
      />

      {/* CTA Section */}
      <CTASection
        title="Ready To Build Your Future With Sky9 India?"
        subtitle="Speak with our Pune admissions team to discover the right course, batch timing, and 1-month internship for your goals."
        primaryText="Explore Courses"
        primaryLink="/courses"
        secondaryText="Contact Admissions"
        secondaryLink="/contact-us"
        variant="green"
      />

      <DownloadDetailsModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        ctaSource="about-us-download-details"
      />
    </div>
  );
};

export default About;
