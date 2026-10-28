import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink, Sparkles, Navigation, CheckCircle, Building } from 'lucide-react';
import { companyInfo, contactFAQs } from '../data/siteData';
import { heroImages } from '../data/heroImages';
import PageHero from '../components/common/PageHero';
import SectionLabel from '../components/common/SectionLabel';
import SeoHead from '../components/common/SeoHead';
import EnquiryForm from '../components/common/EnquiryForm';
import TypewriterHeading from '../components/common/animations/TypewriterHeading';
import SpotlightCard from '../components/common/animations/SpotlightCard';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';
import { SocialLinksBar } from '../components/common/BrandIcons';
import Picture from '../components/common/Picture';
import counselorImg from '../assets/counselor-pune.webp';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SeoHead
        title="Contact Us"
        description="Have questions about our programs, fees, or batches? Our Pune counselors and mentors are available to guide you."
        canonical="https://sky9india.com/contact-us"
      />
      <PageHero
        breadcrumbItems={[{ label: 'Contact Us' }]}
        eyebrow="Get in Touch • Admissions Open"
        title="Contact Us"
        description="Have questions about our programs, fees, or batches? Our Pune counselors and mentors are available to guide you."
        image={heroImages.contact.url}
        imageWebp={heroImages.contact.webp}
        imageAlt={heroImages.contact.alt}
        imagePosition={heroImages.contact.pos}
        primaryAction={{
          label: 'Call Admissions',
          href: 'tel:+917319419519'
        }}
        secondaryAction={{
          label: 'Email Support',
          href: 'mailto:info@Sky9India.com'
        }}
      />

      <section className="py-8 sm:py-10 md:py-14 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            {/* Admissions Counselor Card */}
            <SpotlightCard className="mb-6 sm:mb-8 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition duration-300">
              <Picture
                src={counselorImg}
                webp={counselorImg}
                alt="Sky9 India admissions counselor in a Pune office ready to assist students"
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-emerald-500 shadow-md flex-shrink-0"
              />
              <div>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[11px] uppercase tracking-wider">
                  Admissions & Counseling
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white font-heading mt-1">
                  Speak with our Pune Counselors
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Get personalized guidance on batch schedules, practical syllabi, and 1-month internships.
                </p>
              </div>
            </SpotlightCard>

            <div className="mb-3"><SectionLabel>Direct Assistance</SectionLabel></div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-8 text-slate-900 dark:text-white font-heading">Contact Information</h2>
            
            <div className="space-y-4 sm:space-y-8 mb-6 sm:mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-white font-heading">Our Office</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{companyInfo?.address || '2nd Floor, Shri Nivas Towers, Above Baramati Bank, Pune – 411043'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-white font-heading">Phone</h4>
                  <a href={`tel:${companyInfo?.phone?.replace(/\s+/g, '') || '+917319419519'}`} className="phone-number text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-medium">
                    {companyInfo?.phone || '+91 7 319 419 519'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-white font-heading">Email</h4>
                  <a href={`mailto:${companyInfo?.email || 'info@Sky9India.com'}`} className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-medium">
                    {companyInfo?.email || 'info@Sky9India.com'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-white font-heading">Office Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{companyInfo?.officeHours || 'Monday - Saturday: 9:00 AM - 6:00 PM'}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3.5 text-slate-900 dark:text-white font-heading">Follow Us</h4>
              <SocialLinksBar />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white font-heading">Send us a Message</h3>
              <EnquiryForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pune Campus Location Showcase Card */}
      <section className="py-8 sm:py-10 md:py-14 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <SectionLabel icon={Building}>Main Training Center</SectionLabel>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                  Visit Our Pune Headquarters
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {companyInfo?.address || '2nd Floor, Shri Nivas Towers, Above Baramati Bank, Pune – 411043'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>High-Speed Practical Computer Labs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dedicated Mentor Desks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>In-Person Admissions Counseling</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Weekend & Weekday Batches</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo?.address || 'Sky9 India Pune')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
                <a
                  href={`tel:${companyInfo?.phone?.replace(/\s+/g, '') || '+917319419519'}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm sm:text-base border border-slate-200 dark:border-slate-700 transition"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>Call <span className="phone-number">+91 7 319 419 519</span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <FAQSection
        items={contactFAQs}
        label="Contact FAQs"
        description="Get answers to common queries about reaching Sky9 India"
        className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg"
      />

      {/* CTA Section */}
      <CTASection
        title="Ready To Start Learning With Sky9 India?"
        subtitle="Contact our admissions counselors to find the right batch timing and course track for you."
        primaryText="Enquire Now"
        primaryLink="/contact-us"
        secondaryText="Explore Courses"
        secondaryLink="/courses"
        variant="green"
      />
    </div>
  );
};

export default Contact;
