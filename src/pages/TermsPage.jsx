import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText, ScrollText, CreditCard, RefreshCcw, BookOpen, Briefcase,
  ShieldCheck, Copyright, Award, AlertTriangle, Lock, Gavel, RefreshCw, Mail
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SeoHead from '../components/common/SeoHead';
import { heroImages } from '../data/heroImages';
import { companyInfo } from '../data/siteData';

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const sections = [
  {
    id: 'acceptance',
    icon: ScrollText,
    title: '1. Acceptance Of Terms',
    body: [
      `These Terms and Conditions ("Terms") govern your access to and use of the ${companyInfo.name} website, courses, classroom and live-online training programs, internship program, and any related services (collectively, the "Services").`,
      'By visiting our website, enquiring about a course, enrolling in a program, or otherwise using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Services.',
    ],
  },
  {
    id: 'admission',
    icon: BookOpen,
    title: '2. Admission & Enrollment',
    body: [
      'Enrollment in any course is confirmed only after submission of the required registration details and payment of the applicable fee (in full or as per an agreed installment plan).',
      `${companyInfo.shortName} India reserves the right to accept or decline any application for admission at its sole discretion, including in cases of incomplete information, batch capacity constraints, or prerequisite mismatch.`,
      'Batch schedules, timings, and delivery mode (classroom at our Pune campus or live online) are shared at the time of enrollment and may be adjusted to maintain training quality, subject to reasonable prior notice to enrolled students.',
    ],
  },
  {
    id: 'fees',
    icon: CreditCard,
    title: '3. Fees & Payment',
    body: [
      'Course fees are as displayed on our website or as communicated in writing at the time of enrollment. Fees may be revised for future batches without affecting students already enrolled at a confirmed rate.',
      'Where installment plans are offered, subsequent installments must be paid by the agreed due dates. Access to live sessions, labs, or certification support may be paused for accounts with overdue payments until the balance is cleared.',
      'All fees are quoted in Indian Rupees (INR) unless stated otherwise, and any applicable taxes are additional unless explicitly mentioned as inclusive.',
    ],
  },
  {
    id: 'refunds',
    icon: RefreshCcw,
    title: '4. Refund & Cancellation Policy',
    body: [
      'Refund requests are evaluated on a case-by-case basis and must be raised in writing to our admissions team before a significant portion of the course content has been delivered or accessed.',
      'Registration fees, payment gateway charges, and the value of any study material, software licenses, or certification vouchers already issued are generally non-refundable.',
      'No refunds are provided for non-attendance, voluntary withdrawal after the eligible window, or suspension of access due to a breach of the Code of Conduct described below.',
      'Approved refunds, where applicable, are processed to the original mode of payment within a reasonable timeframe, typically 7–14 business days.',
    ],
  },
  {
    id: 'course-content',
    icon: FileText,
    title: '5. Course Content, Schedule & Changes',
    body: [
      'Course curricula, tools, trainers, and session schedules are curated to reflect current industry practice and may be updated, reordered, or substituted with equivalent value to keep training relevant.',
      'Recorded sessions, study material, and lab access (where provided) are for the personal use of the enrolled student and are governed by the Intellectual Property section below.',
      `${companyInfo.shortName} India makes reasonable efforts to maintain session continuity but is not liable for delays or rescheduling caused by circumstances beyond its control (e.g., technical outages, trainer unavailability, or force majeure events).`,
    ],
  },
  {
    id: 'internship-placement',
    icon: Briefcase,
    title: '6. Internship & Placement Assistance',
    body: [
      'Where a course includes an internship component, it is intended to provide practical, project-based experience and does not guarantee employment, a stipend, or a specific outcome.',
      'Career support services, including resume reviews, mock interviews, and referrals, are offered on a best-effort basis. Final hiring decisions rest solely with the respective hiring companies, and we do not guarantee placement, job offers, or minimum salary outcomes.',
      'Certification exam vouchers or guidance for third-party certifications (such as Google or Meta) are subject to the respective certifying body\'s own terms, availability, and eligibility criteria, which are outside our control.',
    ],
  },
  {
    id: 'conduct',
    icon: ShieldCheck,
    title: '7. Student Code Of Conduct',
    body: [
      'Students are expected to engage respectfully with trainers, staff, and fellow students, both on campus and during live-online sessions, and to use shared learning tools and platforms responsibly.',
      `${companyInfo.shortName} India reserves the right to suspend or terminate access to the Services, without refund, in cases of misconduct, harassment, academic dishonesty, unauthorized redistribution of course material, or misuse of platform credentials.`,
    ],
  },
  {
    id: 'ip',
    icon: Copyright,
    title: '8. Intellectual Property',
    body: [
      `All course content, presentations, recorded videos, assignments, branding, and website material are the intellectual property of ${companyInfo.name} or its licensors and are protected under applicable copyright and trademark laws.`,
      'Students may use course material for personal learning only. Reproducing, publishing, reselling, or distributing course content without prior written consent is strictly prohibited.',
    ],
  },
  {
    id: 'certification',
    icon: Award,
    title: '9. Certificates',
    body: [
      `Certificates of completion issued by ${companyInfo.shortName} India acknowledge successful completion of the training program based on attendance and evaluation criteria communicated during the course.`,
      'Such certificates are institutional training certificates and are distinct from, and do not substitute for, official third-party credentials (e.g., Google, Meta) which are issued directly by those platforms upon passing their respective exams.',
    ],
  },
  {
    id: 'liability',
    icon: AlertTriangle,
    title: '10. Limitation Of Liability',
    body: [
      `To the fullest extent permitted by law, ${companyInfo.name} shall not be liable for any indirect, incidental, or consequential loss arising from the use of, or inability to use, our Services, including reliance on third-party tools, platforms, or ad accounts used during practical training.`,
      'Our total liability in connection with the Services shall not exceed the total course fee actually paid by the student for the specific program in question.',
    ],
  },
  {
    id: 'privacy',
    icon: Lock,
    title: '11. Privacy',
    body: [
      'Personal information shared with us during enquiry or enrollment (such as your name, contact details, and payment information) is used solely to provide and improve our Services, communicate updates, and fulfil legal or administrative requirements.',
      'We do not sell your personal data to third parties. Information may be shared with trusted partners (such as payment gateways or certification providers) strictly to the extent necessary to deliver the Services.',
    ],
  },
  {
    id: 'governing-law',
    icon: Gavel,
    title: '12. Governing Law & Jurisdiction',
    body: [
      `These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms or the Services shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.`,
    ],
  },
  {
    id: 'changes',
    icon: RefreshCw,
    title: '13. Changes To These Terms',
    body: [
      `${companyInfo.shortName} India may update these Terms from time to time to reflect changes in our Services or applicable law. The revised Terms will be posted on this page with an updated effective date, and continued use of our Services after such changes constitutes acceptance of the revised Terms.`,
    ],
  },
];

export default function TermsPage() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const lastUpdated = 'September 10, 2026';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SeoHead
        title="Terms & Conditions"
        description={`Please read these Terms carefully before enrolling in or using any ${companyInfo.name} course, service, or website feature.`}
        canonical="https://sky9india.com/terms-and-conditions"
      />
      <PageHero
        breadcrumbItems={[{ label: 'Terms & Conditions', path: '/terms-and-conditions' }]}
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Please read these Terms carefully before enrolling in or using any ${companyInfo.name} course, service, or website feature.`}
        image={heroImages.genericDefault.url}
        imageWebp={heroImages.genericDefault.webp}
        imageAlt={heroImages.genericDefault.alt}
        imagePosition={heroImages.genericDefault.pos}
        primaryAction={{
          label: 'Contact Admissions',
          to: '/contact-us'
        }}
        secondaryAction={{
          label: 'Back to Homepage',
          to: '/'
        }}
      >
        <p className="text-sm text-slate-300">Last updated: {lastUpdated}</p>
      </PageHero>

      <section className="py-10 sm:py-14 md:py-16 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {/* Table of Contents */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-28">
            <div className="p-5 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-slate-200 glass-panel">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4">
                On This Page
              </h2>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveId(s.id)}
                    className={`text-sm py-1.5 px-2 rounded-lg transition-colors leading-snug ${
                      activeId === s.id
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="mt-5 pt-4 border-t dark:border-slate-700 border-slate-200">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Questions? Contact us
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="p-5 sm:p-6 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-slate-200 glass-panel"
            >
              <p className="text-sm sm:text-base leading-relaxed dark:text-slate-300 text-slate-700">
                Welcome to {companyInfo.name}. These Terms & Conditions ("Terms") form a binding agreement between you
                and {companyInfo.name} ("{companyInfo.shortName} India", "we", "us", or "our"), the operator of this website and
                the practical training, internship, and certification-support programs offered under the Sky9 India brand
                from our Pune training facility and live-online classrooms across India.
              </p>
            </motion.div>

            {sections.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  id={s.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.03, 0.2) }}
                  className="p-5 sm:p-6 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-slate-200 scroll-mt-28 glass-panel"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold font-heading dark:text-white text-slate-900">
                      {s.title}
                    </h2>
                  </div>
                  <div className="space-y-3 pl-0 sm:pl-12">
                    {s.body.map((p, i) => (
                      <p key={i} className="text-sm sm:text-[15px] leading-relaxed dark:text-slate-300 text-slate-700">
                        {p}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Contact Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              id="contact"
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white scroll-mt-28"
            >
              <h2 className="text-lg sm:text-xl font-bold font-heading mb-2">14. Contact Us</h2>
              <p className="text-sm sm:text-[15px] leading-relaxed text-emerald-50 mb-4">
                If you have any questions about these Terms & Conditions, please reach out to us:
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6 sm:gap-y-2 text-sm">
                <a href={`mailto:${companyInfo.email}`} className="font-semibold hover:underline break-all">
                  {companyInfo.email}
                </a>
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="font-semibold hover:underline whitespace-nowrap">
                  {companyInfo.phone}
                </a>
                <span className="text-emerald-50">{companyInfo.address}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
