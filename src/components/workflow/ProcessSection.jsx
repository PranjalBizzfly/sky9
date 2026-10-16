import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, UserCheck, GraduationCap, Briefcase, Award, CheckCircle, Target, Zap, ShieldCheck, Users } from 'lucide-react';
import SectionLabel from '../common/SectionLabel';

export const studentWorkflow = [
  { step: '01', title: 'Course & Track Selection', desc: 'Choose Digital Marketing, AI & Automation, Software Testing, or ERP based on your career goals.', icon: BookOpen },
  { step: '02', title: 'Counseling & Enrollment', desc: 'Discuss batch timings (classroom Pune or live online) and complete simple enrollment.', icon: UserCheck },
  { step: '03', title: 'Hands-On Practical Training', desc: 'Master tools, live campaigns, and software lab exercises with expert mentor guidance.', icon: GraduationCap },
  { step: '04', title: '1-Month Integrated Internship', desc: 'Execute real projects under senior supervision and build a verified portfolio.', icon: Briefcase },
  { step: '05', title: 'Certification & Referrals', desc: 'Earn Sky9 & Google/Meta certificates, finalize resume, and receive interview referrals.', icon: Award }
];

export const businessOwnerWorkflow = [
  { step: '01', title: 'Business Need Analysis', desc: 'Identify core business challenges in lead generation, local visibility, or team efficiency.', icon: Target },
  { step: '02', title: '7-Day Growth Bootcamp', desc: 'Attend intensive, non-technical sessions designed specifically for entrepreneurs.', icon: GraduationCap },
  { step: '03', title: 'Lead Funnel & Ad Setup', desc: 'Build automated WhatsApp lead funnels and run targeted low-budget local ads.', icon: Zap },
  { step: '04', title: 'Operations Automation', desc: 'Deploy simple AI productivity tools and local Google Maps optimization for continuous growth.', icon: CheckCircle }
];

export const internshipWorkflow = [
  { step: '01', title: 'Program Enrollment', desc: 'Enroll in Sky9 core practical training track.', icon: BookOpen },
  { step: '02', title: 'Supervisor Orientation', desc: 'Assigned senior project mentor and live tool lab credentials.', icon: UserCheck },
  { step: '03', title: 'Live Client Task Execution', desc: 'Work on active digital campaigns, QA test suites, or ERP workflows.', icon: Briefcase },
  { step: '04', title: 'Verified Certificate', desc: 'Receive official Sky9 Internship Experience Certificate to boost resume credibility.', icon: ShieldCheck }
];

export const certificationWorkflow = [
  { step: '01', title: 'Skill Building', desc: 'Complete course modules and practical lab exercises.', icon: BookOpen },
  { step: '02', title: 'Practical Project Review', desc: 'Submit completed campaign setup or testing case studies.', icon: CheckCircle },
  { step: '03', title: 'Certification Award', desc: 'Earn official Sky9 Course Completion & Google/Meta blueprint guidance.', icon: Award },
  { step: '04', title: 'LinkedIn & Resume Verification', desc: 'Attach verified credential link to your professional resume.', icon: ShieldCheck }
];

export const careerWorkflow = [
  { step: '01', title: 'Skill Gap Assessment', desc: 'Map current experience against in-demand tech and marketing roles.', icon: Target },
  { step: '02', title: 'Practical Portfolio Building', desc: 'Build verified work samples during training and internship.', icon: Briefcase },
  { step: '03', title: 'Interview & Resume Drills', desc: 'Optimize resume, LinkedIn profile, and participate in technical mock interviews.', icon: Users },
  { step: '04', title: 'Hiring Partner Referrals', desc: 'Direct referral to hiring partners across Pune and pan-India.', icon: Award }
];

export function WorkflowStep({ step = {}, isLast = false }) {
  const IconComp = step.icon || CheckCircle;

  return (
    <div className="relative h-full flex flex-col items-center text-center group p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-300 dark:border-slate-800 hover:border-emerald-500/60 shadow-md hover:shadow-xl transition duration-300 glass-panel">
      {/* Step Icon Circle */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-slate-800 border-2 border-emerald-500/40 group-hover:border-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <IconComp className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
        {step.step && (
          <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-500 text-white shadow">
            {step.step}
          </span>
        )}
      </div>

      {/* Step Info */}
      <div className="mt-5 space-y-2">
        <h4 className="text-base font-bold dark:text-white text-slate-900 font-heading group-hover:text-emerald-500 transition-colors">
          {step.title || 'Step'}
        </h4>
        {step.desc && (
          <p className="text-xs sm:text-[13px] dark:text-slate-300 text-slate-700 leading-relaxed max-w-xs mx-auto font-normal">
            {step.desc}
          </p>
        )}
      </div>
    </div>
  );
}

export function ProcessSection({
  title = "Your Path From Learner To Professional",
  subtitle = "A step-by-step practical learning methodology designed to ensure real skill development and career success.",
  steps = studentWorkflow,
  badge = "Structured Journey"
}) {
  if (!Array.isArray(steps) || steps.length === 0) return null;

  return (
    <section className="py-8 sm:py-10 md:py-14 dark:bg-slate-900/50 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4">
          <SectionLabel>{badge}</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold dark:text-white text-slate-900 font-heading tracking-tight">
            {title}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 relative pt-4">
          {steps.map((step, idx) => (
            <div key={idx} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(20%-1.2rem)]">
              <WorkflowStep
                step={step}
                isLast={idx === steps.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
