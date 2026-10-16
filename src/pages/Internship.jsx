import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Sparkles, Building, Code2, Target, Zap, Bug, Database, Briefcase } from 'lucide-react';
import { internshipData, internshipFAQs } from '../data/siteData';
import { heroImages } from '../data/heroImages';
import internTeamImg from '../assets/visuals/intern-team.webp';
import Picture from '../components/common/Picture';
import PageHero from '../components/common/PageHero';
import SectionLabel from '../components/common/SectionLabel';
import SeoHead from '../components/common/SeoHead';
import { ProcessSection, internshipWorkflow } from '../components/workflow/ProcessSection';
import StatsBar from '../components/home/StatsBar';
import TypewriterHeading from '../components/common/animations/TypewriterHeading';
import SpotlightCard from '../components/common/animations/SpotlightCard';
import FAQSection from '../components/common/FAQSection';
import CTASection from '../components/common/CTASection';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const defaultActivities = [
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
];

const Internship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <SeoHead
        title="Internship Program"
        description="Gain hands-on experience by executing real-world agency campaigns, building automation workflows, and executing automated QA test suites."
        canonical="https://sky9india.com/internship/internship-overview"
      />
      <PageHero
        breadcrumbItems={[{ label: 'Internship', path: '/internship/internship-overview' }, { label: 'Internship Overview' }]}
        eyebrow="1-Month Practical Internship • Pune"
        title="Internship Overview"
        description="Gain hands-on experience by executing real-world agency campaigns, building automation workflows, and executing automated QA test suites."
        image={heroImages.internship.url}
        imageWebp={heroImages.internship.webp}
        imageAlt={heroImages.internship.alt}
        imagePosition={heroImages.internship.pos}
        primaryAction={{
          label: 'Apply for Internship Cohort',
          to: '/contact-us'
        }}
        secondaryAction={{
          label: 'View Course Tracks',
          to: '/courses'
        }}
      />

      {/* Internship Stats Bar */}
      <StatsBar />

      <section className="py-8 sm:py-10 md:py-14 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-7 space-y-4 sm:space-y-6">
            <SectionLabel icon={Briefcase}>Real Workplace Execution</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              Work On <span>Live Client Deliverables</span>, Not Toy Demos
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {internshipData?.description || 'Gain 1-month structured practical experience on live client deployments and workflows to build an authentic, verifiable portfolio.'}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              During the 1-month internship, you work alongside experienced developers and marketers. You will create live Google Ads funnels, build Selenium QA test pipelines, automate lead workflows in Make.com, or manage ERP database configurations.
            </p>

            <div className="pt-2 sm:pt-4">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white font-heading">Key Internship Deliverables:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(internshipData?.deliverables || ['Live Project Experience', 'Industry Mentor Guidance', 'Letter of Recommendation', 'Performance Certificate']).map((item, idx, arr) => (
                  <div key={idx} className={`flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 ${idx === arr.length - 1 && arr.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}>
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
              <Picture
                src={internTeamImg}
                webp={internTeamImg}
                alt="Sky9 Indian interns and student cohort collaborating on live client deliverables in practical studio workshop"
                className="w-full h-[320px] sm:h-[440px] object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">Live Client Workflows</h4>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Verified Experience Certificate</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500 text-white font-extrabold text-xs shadow-md">
                    100% Practical
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6 sm:mb-10">
            <div className="mb-3"><SectionLabel>Track Specializations</SectionLabel></div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 text-slate-900 dark:text-white font-heading">
              <TypewriterHeading text="Activities & Focus Areas" />
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Hands-on practical exposure across our specialized technology and business internship tracks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(internshipData?.activities && internshipData.activities.length > 0 ? internshipData.activities : defaultActivities).map((activity, idx, arr) => {
              const IconComponent = activity.icon || Sparkles;
              const isDanglingLast = idx === arr.length - 1 && arr.length % 2 !== 0;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className={`h-full ${isDanglingLast ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <SpotlightCard className="h-full bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 sm:mb-3 text-slate-900 dark:text-white font-heading">
                        {activity.title || activity.course}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {activity.description || activity.activity || activity.task}
                      </p>
                    </div>
                    {activity.skills && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                        {activity.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection
        title="Internship Progression Pathway"
        subtitle="How our 1-month integrated live project internship gives you industry-ready work experience."
        steps={internshipWorkflow}
        badge="Internship Process"
      />

      {/* Internship FAQs */}
      <FAQSection
        items={internshipFAQs}
        label="Internship FAQs"
        description="Get answers to common queries about the 1-month internship"
        className="py-8 sm:py-10 md:py-14 bg-slate-50 dark:bg-slate-800/50"
      />

      {/* CTA Section */}
      <CTASection
        title="Gain Verified 1-Month Industry Experience"
        subtitle="Apply for our upcoming internship cohort and build a live portfolio with real client workflows."
        primaryText="Apply for Internship"
        primaryLink="/contact-us"
        secondaryText="View Courses"
        secondaryLink="/courses"
        variant="green"
      />
    </div>
  );
};

export default Internship;
