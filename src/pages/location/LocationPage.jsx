import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight, Building, Globe, Monitor } from 'lucide-react';
import { locationCities } from '../../data/sitemapData';
import { courses, companyInfo } from '../../data/siteData';
import { heroImages, getCourseHeroImage } from '../../data/heroImages';
import contentRepository from '../../services/contentRepository';
import Breadcrumb from '../../components/common/Breadcrumb';
import SectionHeader from '../../components/common/SectionHeader';
import CourseCard from '../../components/common/CourseCard';
import CTASection from '../../components/common/CTASection';
import PageHero from '../../components/common/PageHero';
import SeoHead from '../../components/common/SeoHead';
import FAQSection from '../../components/common/FAQSection';
import TypewriterHeading from '../../components/common/animations/TypewriterHeading';
import Picture from '../../components/common/Picture';
import aboutCampusImg from '../../assets/visuals/framework-lab.webp';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

// Builds page-specific FAQs from real location/course data, no citySlug means the
// /locations hub, citySlug alone means a city page, and citySlug+courseSlug means a
// combined location+course landing page.
function getLocationFaqs(citySlug, city, targetCourse) {
  if (!citySlug) {
    return [
      { question: 'Does Sky9 India have a physical classroom, or is it fully online?', answer: 'Sky9 India runs an offline classroom center in Pune at Shri Nivas Towers, alongside live interactive online batches available to students across India.' },
      { question: 'Which cities can I join Sky9 India from?', answer: `Live online batches are available from ${locationCities.filter(c => !c.isMainHub).map(c => c.name).join(', ')}, in addition to the Pune classroom hub.` },
      { question: 'Is the online training the same quality as the Pune classroom program?', answer: 'Yes, both delivery modes follow the identical curriculum, hands-on assignments, and mentor guidance; the only difference is whether you attend in person or via live online sessions.' },
      { question: 'How do I choose between classroom and online if I live outside Pune?', answer: 'If you cannot regularly travel to the Pune center, a live online batch delivers the same practical training and internship; admissions counselors can help you compare both options for your situation.' },
      { question: 'Are live online sessions recorded in case I miss one?', answer: 'Yes, live online batches include session recordings as backup, so missing a live session doesn\'t mean losing that day\'s content.' },
      { question: 'Does the course fee change depending on which location I choose?', answer: 'No, published course fees are the same whether you study at the Pune classroom or through a live online batch.' },
      { question: 'Does the 1-month internship work the same way for online students as classroom students?', answer: 'Yes, the internship is coordinated with your batch timing regardless of whether you\'re in the Pune classroom or a live online batch.' },
      { question: 'Who do I contact to discuss which location option fits me best?', answer: `Sky9 India's admissions team can be reached at ${companyInfo.phone} or ${companyInfo.email} to help you choose between the Pune classroom and a live online batch.` },
    ];
  }

  if (city.isMainHub) {
    return [
      {
        question: targetCourse ? `Where exactly can I attend ${targetCourse.title} classroom training in ${city.name}?` : `Where exactly is the Sky9 India center located in ${city.name}?`,
        answer: targetCourse ? `${targetCourse.title} classroom sessions run at ${companyInfo.address}, the same facility used for every Sky9 India course.` : `The classroom center is at ${companyInfo.address}, with high-speed practical computer labs and 1-on-1 mentor desks on-site.`,
      },
      {
        question: targetCourse ? `Can I visit the ${city.name} campus before enrolling in ${targetCourse.title}?` : `Can I visit the ${city.name} campus before enrolling?`,
        answer: targetCourse ? `Yes, you can schedule a visit through the admissions team to see where ${targetCourse.title} classes run and speak with counselors in person before committing.` : `Yes, you can schedule a visit through the admissions team to see the training labs and speak with counselors in person before committing to a course.`,
      },
      {
        question: targetCourse ? `Is ${targetCourse.title} one of the courses offered at the ${city.name} classroom center?` : `Are all 5 Sky9 India courses available in ${city.name}?`,
        answer: targetCourse ? `Yes, ${targetCourse.title} is offered as a classroom batch at the ${city.name} center, alongside a live online option.` : `Yes, all courses, Digital Marketing, AI & Automation, Software Testing, ERP, and Digital Marketing for Business Owners, are offered as classroom batches at the ${city.name} hub.`,
      },
      {
        question: targetCourse ? `Is ${targetCourse.title} taught in the ${city.name} classroom, or only online?` : `Which Sky9 India courses can I study at the ${city.name} classroom center?`,
        answer: targetCourse ? `${targetCourse.title} (${targetCourse.duration}, ${targetCourse.fee}) is available as a classroom batch at the ${city.name} center as well as a live online option, both following the same curriculum.` : `All five Sky9 India courses, Digital Marketing, AI & Automation, Software Testing, ERP, and Digital Marketing for Business Owners, are available as classroom batches at the ${city.name} center.`,
      },
      {
        question: targetCourse ? `What facilities support ${targetCourse.title} students at the ${city.name} center?` : `What are the facilities like at the ${city.name} training center?`,
        answer: targetCourse ? `${targetCourse.title} students use the same high-speed practical computer labs and 1-on-1 mentor desks available to every course at the ${city.name} center.` : `The center includes high-speed practical computer labs and 1-on-1 mentor desks, alongside in-person admissions counseling.`,
      },
      {
        question: targetCourse ? `Does the ${targetCourse.title} classroom batch in ${city.name} include the same internship as its online batch?` : `Does studying at the ${city.name} classroom include the same internship as online batches?`,
        answer: targetCourse ? `Yes, ${targetCourse.internship || 'the integrated internship'} applies equally whether you study ${targetCourse.title} at the ${city.name} classroom or through a live online batch.` : `Yes, the integrated internship applies equally whether you study at the ${city.name} classroom or through a live online batch.`,
      },
      {
        question: targetCourse ? `Is the ${targetCourse.title} fee different for classroom students at ${city.name} compared to online students?` : `Is the course fee different for classroom students at ${city.name} compared to online students?`,
        answer: targetCourse ? `No, ${targetCourse.fee} is the published fee for ${targetCourse.title} regardless of whether you choose the ${city.name} classroom or a live online batch.` : `No, published course fees are the same regardless of whether you choose the ${city.name} classroom or a live online batch.`,
      },
      {
        question: targetCourse ? `How do I get in touch with the ${city.name} center about ${targetCourse.title}?` : `How do I get in touch with the ${city.name} center directly?`,
        answer: targetCourse ? `Contact Sky9 India admissions at ${companyInfo.phone} or ${companyInfo.email} to ask specifically about ${targetCourse.title} batch timing at the ${city.name} center.` : `Contact Sky9 India admissions at ${companyInfo.phone} or ${companyInfo.email}, or use the "Get Directions" option on this page to find the ${city.name} center.`,
      },
    ];
  }

  return [
    {
      question: targetCourse ? `Does Sky9 India have a classroom in ${city.name} for ${targetCourse.title}?` : `Does Sky9 India have a physical office in ${city.name}?`,
      answer: targetCourse ? `No, ${targetCourse.title} is delivered to ${city.name} through live interactive online batches and regional mentorship rather than a physical classroom; the only offline classroom center is in Pune.` : `${city.name} is served through live interactive online batches and regional mentorship rather than a physical classroom; the only offline classroom center is in Pune.`,
    },
    {
      question: targetCourse ? `How does studying ${targetCourse.title} online from ${city.name} compare to the Pune classroom?` : `How is the live online experience different from studying in ${city.name} versus Pune?`,
      answer: targetCourse ? `Students studying ${targetCourse.title} from ${city.name} join the same live sessions, assignments, and internship as the Pune classroom batch, screen-share lab assistance replaces in-person guidance, and session recordings are available as backup.` : `Students in ${city.name} join the same live sessions, assignments, and 1-month internship as the Pune classroom batch, screen-share lab assistance replaces in-person guidance, and session recordings are available as backup.`,
    },
    {
      question: targetCourse ? `Can I get placement support in ${city.name} after completing ${targetCourse.title} online?` : `Can I get placement support in ${city.name} after completing a course online?`,
      answer: targetCourse ? `Yes, career support for ${targetCourse.title}, including resume building, mock interviews, and hiring partner referrals, applies to online learners in ${city.name} the same way it applies to Pune classroom graduates.` : `Yes, career support including resume building, mock interviews, and hiring partner referrals applies to online learners in ${city.name} the same way it applies to Pune classroom graduates.`,
    },
    {
      question: targetCourse ? `What is the fee and duration for ${targetCourse.title} for students in ${city.name}?` : `Which Sky9 India courses can I study live online from ${city.name}?`,
      answer: targetCourse ? `${targetCourse.title} runs for ${targetCourse.duration} at ${targetCourse.fee}, delivered live online to ${city.name} with the same curriculum and internship as every other batch.` : `All five Sky9 India courses are available live online to students in ${city.name}, following the identical curriculum taught at the Pune classroom.`,
    },
    {
      question: targetCourse ? `Is the ${targetCourse.title} internship included for students joining from ${city.name}?` : `Is the 1-month internship included for students joining from ${city.name}?`,
      answer: targetCourse ? `Yes, ${targetCourse.internship || 'the integrated internship'} applies to ${city.name} students taking ${targetCourse.title} live online, the same as it does for the Pune classroom batch.` : `Yes, the same integrated internship applies to live online students in ${city.name} as it does for the Pune classroom batch.`,
    },
    {
      question: targetCourse ? `Does the ${targetCourse.title} fee change for students joining from ${city.name}?` : `Does the course fee change for students joining from ${city.name}?`,
      answer: targetCourse ? `No, ${targetCourse.fee} is the published fee for ${targetCourse.title} for ${city.name} students, the same as the Pune classroom batch.` : `No, published course fees are the same for ${city.name} students as for the Pune classroom batch.`,
    },
    {
      question: targetCourse ? `Will I get the same certificate studying ${targetCourse.title} online from ${city.name}?` : `Will I get the same certificate studying online from ${city.name}?`,
      answer: targetCourse ? `Yes, ${targetCourse.certification || 'the Sky9 Course Completion Certificate'} for ${targetCourse.title} is issued the same way regardless of whether you study from ${city.name} or attend the Pune classroom.` : `Yes, the Sky9 Course Completion Certificate is issued the same way regardless of whether you study from ${city.name} or attend the Pune classroom.`,
    },
    {
      question: targetCourse ? `How do I get in touch with admissions from ${city.name} about ${targetCourse.title}?` : `How do I get in touch with admissions from ${city.name}?`,
      answer: targetCourse ? `Contact Sky9 India admissions at ${companyInfo.phone} or ${companyInfo.email} to ask specifically about ${targetCourse.title} for students in ${city.name}.` : `Contact Sky9 India admissions at ${companyInfo.phone} or ${companyInfo.email}, phone and online counseling is available for prospective students joining from ${city.name} or anywhere else in India.`,
    },
  ];
}

export default function LocationPage() {
  const { citySlug, courseSlug } = useParams();

  const city = locationCities.find(c => c.slug === citySlug) || locationCities[0]; // fallback Pune
  const targetCourse = courseSlug
    ? courses.find(c => c.slug === courseSlug || c.slug === courseSlug.replace(/-training$/, '') || (courseSlug === 'digital-marketing-for-business-owners' && c.slug === 'digital-marketing-for-business-owners'))
    : null;

  const seoTitle = targetCourse
    ? `${targetCourse.shortTitle} Training in ${city.name}`
    : citySlug
    ? `Practical Training Institute in ${city.name}`
    : 'Training Centers & Online Learning';

  const pageDescription = city.isMainHub
    ? `Visit our Pune classroom center at ${companyInfo.address} or join interactive live online batches.`
    : `Join high-engagement live online training with 1-month practical internships from ${city.name}.`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city, targetCourse, citySlug]);

  const pageTitle = targetCourse
    ? `${targetCourse.title} In ${city.name}`
    : `Practical Training Institute, ${city.name}`;

  const heroImg = targetCourse ? getCourseHeroImage(targetCourse.slug) : heroImages.location;

  return (
    <div>
      <SeoHead
        title={seoTitle}
        description={pageDescription}
        canonical={`https://sky9india.com/locations${citySlug ? `/${citySlug}` : ''}${courseSlug ? `/${courseSlug}` : ''}`}
      />
      {/* Hero */}
      <PageHero
        breadcrumbItems={[
          { label: 'Locations', path: '/locations' },
          ...(citySlug ? [{ label: city.name, path: `/locations/${city.slug}` }] : []),
          ...(targetCourse ? [{ label: targetCourse.title, path: `/locations/${city.slug}/${targetCourse.slug}` }] : [])
        ]}
        eyebrow={city.isMainHub ? 'Main Headquarters Center' : 'Pan-India Live Online Batches'}
        title={pageTitle}
        description={pageDescription}
        image={heroImg.url}
        imageWebp={heroImg.webp}
        imageAlt={heroImg.alt}
        imagePosition={heroImg.pos}
        primaryAction={{
          label: targetCourse ? `Enroll in ${targetCourse.shortTitle}` : 'Explore Programs',
          to: targetCourse ? contentRepository.getCourseUrl(targetCourse.slug) : '/courses'
        }}
        secondaryAction={{
          label: 'Contact Campus',
          to: '/contact-us'
        }}
      />

      {/* Main Content */}
      <section className="py-8 sm:py-10 md:py-14 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 space-y-6 sm:space-y-8">
          {/* Location Hub Info Card */}
          <div className="p-5 sm:p-10 rounded-3xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-slate-200 shadow-sm glass-panel">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 font-heading">
                  Learning Facilities & Delivery Modes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl dark:bg-slate-700/40 bg-slate-50 border dark:border-slate-700 border-slate-200 glass-panel">
                    <Building className="w-6 h-6 text-emerald-500 mb-3" />
                    <h3 className="font-bold text-base dark:text-white text-slate-900">Classroom Batches (Pune Hub)</h3>
                    <p className="text-xs dark:text-slate-400 text-slate-600 mt-1.5 leading-relaxed">
                      2nd Floor, Shri Nivas Towers, Above Baramati Bank, Pune – 411043. High-speed practical computer labs with 1-on-1 mentor desks.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl dark:bg-slate-700/40 bg-slate-50 border dark:border-slate-700 border-slate-200 glass-panel">
                    <Monitor className="w-6 h-6 text-emerald-500 mb-3" />
                    <h3 className="font-bold text-base dark:text-white text-slate-900">Interactive Live Online</h3>
                    <p className="text-xs dark:text-slate-400 text-slate-600 mt-1.5 leading-relaxed">
                      Pan-India live virtual classrooms with real-time screen-share assistance, daily doubts clearing, and remote internship sprints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 dark:border-slate-700 group">
                  <Picture
                    src={aboutCampusImg}
                    webp={aboutCampusImg}
                    alt="Sky9 Pune training center campus with modern interactive computing labs and mentors"
                    className="w-full h-[260px] sm:h-[290px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 flex items-center justify-between text-white">
                    <span className="text-xs font-bold font-heading">Pune Hub Practical Labs</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">
                      Modern Facility
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cities Directory */}
          {!citySlug && (
            <div>
              <SectionHeader
                badge="Available Hubs"
                title="Select Your Nearest Location"
                subtitle="Classroom offline batches in Pune or interactive online training pan-India."
              />
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {locationCities.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/locations/${c.slug}`}
                    className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] p-6 rounded-2xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500/50 transition group flex flex-col justify-between glass-panel"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg dark:text-white text-slate-900 group-hover:text-emerald-500 transition-colors">
                          {c.name}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold">{c.state}</span>
                      </div>
                      <p className="text-xs dark:text-slate-400 text-slate-500">{c.hub}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center text-xs font-bold text-emerald-500 group-hover:translate-x-1 transition-transform">
                      View Courses in {c.name} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Featured Courses */}
          <div>
            <SectionHeader
              badge="Top Courses"
              title={targetCourse ? `${targetCourse.title} Curriculum` : `Available Courses In ${city.name}`}
              subtitle="All courses include 100% practical training, mentor feedback, and 1-month internships."
            />
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {targetCourse ? (
                <div className="w-full max-w-sm">
                  <CourseCard course={targetCourse} />
                </div>
              ) : (
                courses.map((course) => (
                  <div key={course.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]">
                    <CourseCard course={course} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location FAQs */}
      <FAQSection
        items={getLocationFaqs(citySlug, city, targetCourse)}
        label="Location FAQs"
        description={targetCourse ? `Get answers about ${targetCourse.shortTitle} in ${city.name}` : citySlug ? `Get answers about training in ${city.name}` : 'Get answers about Sky9 India training locations'}
      />

      {/* CTA */}
      <CTASection
        title={`Enroll For Training In ${city.name}`}
        subtitle="Contact admissions at +91 7 319 419 519 or info@Sky9India.com for upcoming batch timings."
        primaryText="Contact Admissions"
        primaryLink="/contact-us"
        secondaryText="View All Courses"
        secondaryLink="/courses"
        variant="green"
      />
    </div>
  );
}
