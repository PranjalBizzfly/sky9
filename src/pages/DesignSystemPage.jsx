import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, ArrowRight, Star, ShieldCheck, Mail, Phone, Clock, Monitor, Award, Briefcase, Play } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import { Input, Select, Textarea } from '../components/ui/Input';
import { PricingCard, PricingSection } from '../components/pricing/PricingSection';
import { ProcessSection, studentWorkflow, businessOwnerWorkflow } from '../components/workflow/ProcessSection';
import { courses } from '../data/siteData';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeader from '../components/common/SectionHeader';
import CourseCard from '../components/common/CourseCard';
import FeatureCard from '../components/common/FeatureCard';
import PageHero from '../components/common/PageHero';
import SeoHead from '../components/common/SeoHead';
import { heroImages } from '../data/heroImages';

export default function DesignSystemPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SeoHead
        title="UI/UX Design System Documentation"
        description="Internal design system reference for Sky9 India's UI components."
        robots="noindex, nofollow"
      />
      {/* Hero */}
      <PageHero
        breadcrumbItems={[
          { label: 'Resources', path: '/resources/learning-overview' },
          { label: 'UI Design System', path: '/resources/ui-design-system' }
        ]}
        eyebrow="Sky9 India Design Tokens & UI Architecture"
        title="UI Design System"
        description="Centralized reusable tokens, typography scales, buttons, badges, cards, forms, pricing components, and workflow timelines engineered for 500+ scalable pages."
        heroImage={heroImages.designSystem}
      />

      {/* Main Showcase Grid */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg space-y-10 sm:space-y-16 md:space-y-20">
        <div className="max-w-7xl mx-auto px-4 space-y-10 sm:space-y-16 md:space-y-20">
          
          {/* Section 1: Color Tokens */}
          <div className="space-y-6">
            <SectionHeader badge="Brand & Theme Tokens" title="1. Color Palette & Dark/Light System" centered={false} />
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-xl bg-[#10B981] text-white space-y-2 shadow">
                <p className="text-xs font-bold uppercase">Emerald Primary</p>
                <p className="text-sm font-mono">#10B981</p>
              </div>
              <div className="p-4 rounded-xl bg-[#059669] text-white space-y-2 shadow">
                <p className="text-xs font-bold uppercase">Emerald Dark</p>
                <p className="text-sm font-mono">#059669</p>
              </div>
              <div className="p-4 rounded-xl bg-[#34D399] text-slate-900 space-y-2 shadow">
                <p className="text-xs font-bold uppercase">Emerald Light</p>
                <p className="text-sm font-mono">#34D399</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0B1121] text-white space-y-2 shadow border border-slate-700">
                <p className="text-xs font-bold uppercase">Dark Background</p>
                <p className="text-sm font-mono">#0B1121</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1E293B] text-white space-y-2 shadow border border-slate-700">
                <p className="text-xs font-bold uppercase">Dark Card</p>
                <p className="text-sm font-mono">#1E293B</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] text-slate-900 space-y-2 shadow border border-slate-200">
                <p className="text-xs font-bold uppercase">Light Background</p>
                <p className="text-sm font-mono">#F8FAFC</p>
              </div>
            </div>
          </div>

          {/* Section 2: Button System */}
          <div className="space-y-6">
            <SectionHeader badge="Actions" title="2. Button Component Matrix" centered={false} />
            <div className="p-8 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 space-y-6 glass-panel">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" icon={ArrowRight}>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="cta">CTA Button</Button>
                <Button variant="primary" disabled>Disabled State</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t dark:border-slate-700 border-slate-200">
                <Button variant="primary" size="sm">Small (sm)</Button>
                <Button variant="primary" size="md">Medium (md)</Button>
                <Button variant="primary" size="lg">Large (lg)</Button>
              </div>
            </div>
          </div>

          {/* Section 3: Badges & Tags */}
          <div className="space-y-6">
            <SectionHeader badge="Indicators" title="3. Badge & Status System" centered={false} />
            <div className="p-8 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 flex flex-wrap gap-3 glass-panel">
              <Badge variant="emerald" icon={CheckCircle}>Emerald Badge</Badge>
              <Badge variant="success">Success Badge</Badge>
              <Badge variant="neutral">Neutral Badge</Badge>
              <Badge variant="warning">Warning Badge</Badge>
              <Badge variant="outline">Outline Badge</Badge>
            </div>
          </div>

          {/* Section 4: Card Component System */}
          <div className="space-y-6">
            <SectionHeader badge="Containers" title="4. Card Component System" centered={false} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default">
                <h4 className="font-bold dark:text-white text-slate-900 mb-2">Default Card</h4>
                <p className="text-xs dark:text-slate-400 text-slate-600">Standard card layout with border and subtle background contrast.</p>
              </Card>
              <Card variant="interactive">
                <h4 className="font-bold dark:text-white text-slate-900 mb-2">Interactive Hover Card</h4>
                <p className="text-xs dark:text-slate-400 text-slate-600">Hover scale transform with emerald border glow effect.</p>
              </Card>
              <Card variant="gradient">
                <h4 className="font-bold text-white mb-2">Gradient Accent Card</h4>
                <p className="text-xs text-emerald-100">Featured gradient container for high-priority marketing blocks.</p>
              </Card>
            </div>
          </div>

          {/* Section 5: Form Inputs System */}
          <div className="space-y-6">
            <SectionHeader badge="Forms" title="5. Form Inputs & Control System" centered={false} />
            <div className="p-8 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 glass-panel">
              <Input label="Full Name" placeholder="e.g. Rahul Sharma" />
              <Input label="Email Address" type="email" placeholder="e.g. rahul@example.com" />
              <Select label="Interested Course" options={['Digital Marketing Training', 'AI & Automation', 'Software Testing', 'ERP Training']} />
              <Textarea label="Message or Query" placeholder="Write your message here..." />
            </div>
          </div>

          {/* Section 6: Reusable Course Pricing */}
          <div className="space-y-6">
            <SectionHeader badge="Commercial UI" title="6. Reusable Pricing System" centered={false} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PricingCard course={courses[0]} isFeatured={true} />
              <PricingCard course={courses[2]} isFeatured={false} />
            </div>
          </div>

          {/* Section 7: Process & Workflow UI */}
          <div className="space-y-6">
            <SectionHeader badge="Timelines" title="7. Data-Driven Workflow UI" centered={false} />
            <ProcessSection
              title="Student Practical Learning Journey"
              subtitle="Step-by-step pathway from enrollment to 1-month internship and career placement."
              steps={studentWorkflow}
            />
          </div>

        </div>
      </section>
    </div>
  );
}
