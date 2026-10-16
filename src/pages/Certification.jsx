import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { certificationData, certificationFAQs } from '../data/siteData';
import { heroImages } from '../data/heroImages';
import PageHero from '../components/common/PageHero';
import SectionLabel from '../components/common/SectionLabel';
import SeoHead from '../components/common/SeoHead';
import { ProcessSection, certificationWorkflow } from '../components/workflow/ProcessSection';
import StatsBar from '../components/home/StatsBar';
import TypewriterHeading from '../components/common/animations/TypewriterHeading';
import SpotlightCard from '../components/common/animations/SpotlightCard';
import BorderBeam from '../components/common/animations/BorderBeam';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import Picture from '../components/common/Picture';
import certHolderImg from '../assets/visuals/cert-holder.webp';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Certification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SeoHead
        title="Certifications"
        description="Earn globally recognized certificates upon completing your course modules, hands-on tool assignments, and 1-month practical internships."
        canonical="https://sky9india.com/certification/certification-overview"
      />
      <PageHero
        breadcrumbItems={[{ label: 'Certification', path: '/certification/certification-overview' }, { label: 'Certification Overview' }]}
        eyebrow="Industry-Recognized Credentials • Pune"
        title="Certification Overview"
        description="Earn globally recognized certificates upon completing your course modules, hands-on tool assignments, and 1-month practical internships."
        image={heroImages.certification.url}
        imageWebp={heroImages.certification.webp}
        imageAlt={heroImages.certification.alt}
        imagePosition={heroImages.certification.pos}
        primaryAction={{
          label: 'Explore Certified Courses',
          to: '/courses'
        }}
        secondaryAction={{
          label: 'Verify Certificate',
          to: '/contact-us'
        }}
      />

      {/* Stats Bar */}
      <StatsBar />

      <section className="py-8 sm:py-10 md:py-14 max-w-7xl mx-auto px-4">
        {/* Certificate Feature Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 mb-8 sm:mb-10 md:mb-12 relative overflow-hidden"
        >
          <BorderBeam size={280} duration={12} delay={2} colorFrom="#10b981" colorTo="#14b8a6" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-6"><SectionLabel icon={Award}>Sky9 Official Certification</SectionLabel></div>
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white font-heading">
                {certificationData?.internalCert?.title || 'Industry Recognized Certificate'}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
                {certificationData?.internalCert?.description || 'Upon successful completion of any course, you will receive a verifiable digital certificate recognized across modern tech agencies and corporate IT employers.'}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Tamper-Proof QR Code
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Sparkles className="w-4 h-4 text-emerald-500" /> Shareable on LinkedIn
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl group">
                <Picture
                  src={certHolderImg}
                  webp={certHolderImg}
                  alt="Sky9 certified student holding verifiable industry accredited course certificate"
                  className="w-full h-[280px] sm:h-[320px] object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white font-heading">QR Verifiable Credential</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    LinkedIn Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-6 sm:mb-10 text-center sm:text-left">
          <div className="mb-3"><SectionLabel>Global Standards</SectionLabel></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-slate-900 dark:text-white font-heading">
            <TypewriterHeading text="Partner & Platform Certifications" />
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">We prepare you for leading external global certifications in the tech and digital ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(certificationData?.externalCerts || []).map((cert, idx, arr) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className={`h-full ${idx === arr.length - 1 && arr.length % 2 !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <SpotlightCard className="h-full bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-sm">
                <div>
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-900 dark:text-white font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      <ProcessSection
        title="Certification Roadmap"
        subtitle="Step-by-step path to obtaining official Sky9 certificates and industry credentials."
        steps={certificationWorkflow}
        badge="Certification Journey"
      />

      {/* Certification FAQs */}
      <FAQSection
        items={certificationFAQs}
        label="Certification FAQs"
        description="Get answers to common queries about Sky9 and partner certifications"
      />

      {/* CTA Section */}
      <CTASection
        title="Earn Industry-Recognized Credentials"
        subtitle="Validate your practical skills with verifiable certifications that open doors to high-paying tech jobs."
        primaryText="Explore Programs"
        primaryLink="/courses"
        secondaryText="Verify a Certificate"
        secondaryLink="/contact-us"
        variant="green"
      />
    </div>
  );
};

export default Certification;
