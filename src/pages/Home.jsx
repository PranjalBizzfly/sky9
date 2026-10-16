import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ToolsMarquee from '../components/common/animations/ToolsMarquee';
import StatsBar from '../components/home/StatsBar';
import AboutPreview from '../components/home/AboutPreview';
import PopularCourses from '../components/home/PopularCourses';
import WhyChooseUs from '../components/home/WhyChooseUs';
import LearningFramework from '../components/home/LearningFramework';
import CourseSpotlight from '../components/home/CourseSpotlight';
import InternshipPreview from '../components/home/InternshipPreview';
import CertificationPreview from '../components/home/CertificationPreview';
import CareerPreview from '../components/home/CareerPreview';
import MissionVisionCommitmentSection from '../components/home/MissionVisionCommitmentSection';
import Testimonials from '../components/home/Testimonials';
import FinalCTA from '../components/home/FinalCTA';
import LandingPageFAQ from '../components/home/LandingPageFAQ';
import SeoHead from '../components/common/SeoHead';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <SeoHead
        title="Sky9 India, Practical Training in Digital Marketing, AI, Software Testing & ERP"
        description="Premier practical training institute in Pune offering Digital Marketing, AI & Automation, Software Testing, and ERP courses with integrated 1-month internships."
        canonical="https://sky9india.com"
      />
      <HeroSection />
      <ToolsMarquee />
      <StatsBar />
      <AboutPreview />
      <PopularCourses />
      <WhyChooseUs />
      <LearningFramework />
      <CourseSpotlight courseSlug="digital-marketing" />
      <CourseSpotlight courseSlug="ai-automation" reversed />
      <CourseSpotlight courseSlug="digital-marketing-for-business-owners" />
      <CourseSpotlight courseSlug="software-testing" reversed />
      <CourseSpotlight courseSlug="erp" />
      <InternshipPreview />
      <CertificationPreview />
      <CareerPreview />
      
      {/* Mission / Vision / Commitment, 3-column single row section above Student Success Stories */}
      <MissionVisionCommitmentSection />
      
      {/* Student Success Stories */}
      <Testimonials />
      
      <FinalCTA />
      
      {/* 12-Item FAQ Section immediately above Footer */}
      <LandingPageFAQ />
    </div>
  );
};

export default Home;
