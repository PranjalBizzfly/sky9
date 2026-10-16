import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import { careerData, careerFAQs } from '../data/siteData';
import { heroImages } from '../data/heroImages';
import PageHero from '../components/common/PageHero';
import SectionLabel from '../components/common/SectionLabel';
import SeoHead from '../components/common/SeoHead';
import FeatureCard from '../components/common/FeatureCard';
import { ProcessSection, careerWorkflow } from '../components/workflow/ProcessSection';
import StatsBar from '../components/home/StatsBar';
import TypewriterHeading from '../components/common/animations/TypewriterHeading';
import SpotlightCard from '../components/common/animations/SpotlightCard';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import Picture from '../components/common/Picture';
import careerPrepImg from '../assets/visuals/mock-interview-session.webp';
import mentorVikramImg from '../assets/mentors/mentor-vikram.webp';
import mentorAnanyaImg from '../assets/mentors/mentor-ananya.webp';
import mentorRajeshImg from '../assets/mentors/mentor-rajesh.webp';
import mentorSnehaImg from '../assets/mentors/mentor-sneha.webp';
import certHolderImg from '../assets/visuals/cert-holder.webp';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SeoHead
        title="Career Services"
        description="We provide comprehensive career support, resume building, technical mock interview drills, and direct placement referrals to help you land your dream job."
        canonical="https://sky9india.com/career/career-opportunities-overview"
      />
      <PageHero
        breadcrumbItems={[{ label: 'Career', path: '/career/career-opportunities-overview' }, { label: 'Career Opportunities Overview' }]}
        eyebrow="100% Placement Assistance • Pune"
        title="Career Opportunities Overview"
        description="We provide comprehensive career support, resume building, technical mock interview drills, and direct placement referrals to help you land your dream job."
        image={heroImages.career.url}
        imageWebp={heroImages.career.webp}
        imageAlt={heroImages.career.alt}
        imagePosition={heroImages.career.pos}
        primaryAction={{
          label: 'View Career Tracks',
          to: '/courses'
        }}
        secondaryAction={{
          label: 'Book Career Counseling',
          to: '/contact-us'
        }}
      />

      {/* Career Impact Stats */}
      <StatsBar />

      {/* Split Section: Real Placement Guidance in Action */}
      <section className="py-8 sm:py-10 md:py-14 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-6"
          >
            <SectionLabel icon={Briefcase}>100% Placement Assistance</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              One-on-One Mentorship, Mock Interviews & <span>Corporate Hiring</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {careerData?.description || 'Our dedicated placement cell works tirelessly to connect our students with top companies. From resume building to mock interviews, we guide you every step of the way.'}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              We conduct personalized behavioral & technical mock interview drills, ATS-friendly resume tailoring, and GitHub / campaign portfolio audits to ensure you stand out directly to hiring managers.
            </p>
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
                src={careerPrepImg}
                webp={careerPrepImg}
                alt="Sky9 India technical mentor conducting a one-on-one mock interview and portfolio review"
                className="w-full h-[360px] sm:h-[400px] object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-lg flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">Technical Mock Interview Drills</h4>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Real Corporate Interview Simulation</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-emerald-500 text-white font-extrabold text-xs shadow-md">
                  500+ Placed
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {(careerData?.services || []).map((service, idx, arr) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className={idx === arr.length - 1 && arr.length % 2 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <FeatureCard icon={service.icon} title={service.title} description={service.description} />
            </motion.div>
          ))}
        </div>

        {/* Real Placed Alumni Spotlight */}
        <div className="mt-4 sm:mt-8 pt-6 sm:pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-6 sm:mb-10">
            <div className="mb-3"><SectionLabel>Alumni Success</SectionLabel></div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
              <TypewriterHeading text="Meet Our Successfully Placed Graduates" />
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base mt-2">
              From freshers to high-growth tech roles across Pune and pan-India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Siddharth Rao',
                role: 'Software QA Engineer',
                company: 'Placed at Tech Mahindra',
                image: mentorRajeshImg,
                imageWebp: mentorRajeshImg,
                alt: 'Siddharth Rao, Sky9 Software QA alumnus placed at Tech Mahindra',
                course: 'Software Testing Training',
              },
              {
                name: 'Pooja Shinde',
                role: 'Performance Marketing Lead',
                company: 'Placed at Digital Agency Hub',
                image: certHolderImg,
                imageWebp: certHolderImg,
                alt: 'Pooja Shinde, Sky9 Digital Marketing alumna placed at Digital Agency Hub',
                course: 'Digital Marketing Training',
              },
              {
                name: 'Aditya Jagtap',
                role: 'ERP Solutions Associate',
                company: 'Placed at Enterprise IT Labs',
                image: mentorVikramImg,
                imageWebp: mentorVikramImg,
                alt: 'Aditya Jagtap, Sky9 ERP alumnus placed at Enterprise IT Labs',
                course: 'ERP Training Program',
              },
              {
                name: 'Snehal More',
                role: 'AI Automation Specialist',
                company: 'Placed at NextGen Solutions',
                image: mentorSnehaImg,
                imageWebp: mentorSnehaImg,
                alt: 'Snehal More, Sky9 AI Automation alumna placed at NextGen Solutions',
                course: 'AI & Automation Training',
              },
            ].map((alumni, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="h-full bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center">
                  <Picture
                    src={alumni.image}
                    webp={alumni.imageWebp}
                    alt={alumni.alt || alumni.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-emerald-500 shadow-md mb-4"
                    loading="lazy"
                  />
                  <h4 className="font-bold text-base text-slate-900 dark:text-white font-heading">
                    {alumni.name}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                    {alumni.role}
                  </p>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-3">
                    {alumni.company}
                  </span>
                  <span className="mt-auto px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                    {alumni.course}
                  </span>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        title="Career Placement Pathway"
        subtitle="How our dedicated placement assistance guides you from initial skills assessment to dream job placement."
        steps={careerWorkflow}
        badge="Placement Roadmap"
      />

      {/* Career FAQs */}
      <FAQSection
        items={careerFAQs}
        label="Career Services FAQs"
        description="Get answers to common queries about placement and career support"
      />

      {/* CTA Section */}
      <CTASection
        title="Ready To Launch Your High-Growth Tech Career?"
        subtitle="Schedule a 1-on-1 counseling session with our Pune placement team to map out your career transition."
        primaryText="Book Career Counseling"
        primaryLink="/contact-us"
        secondaryText="Explore Programs"
        secondaryLink="/courses"
        variant="green"
      />
    </div>
  );
};

export default Career;
