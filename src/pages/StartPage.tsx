import React from 'react'
import StartHero from "../components/StartHero"
import HowInterlinkHelpsSection from '../components/HowInterlinkHelpsSection'
import StudentJourneyComparisonSection from '../components/StudentJourneyComparisonSection'
import ComparisonTableSection from '../components/ComparisonTableSection'
import StudyOptionsSection from '../components/StudyOptionsSection'
import CleanJourneyTimeline from "../components/CleanJourneyTimeline"
import TimelineSection from '../components/TimelineSection'
import TestimonialsSection from '../components/TestimonialsSection'
import StudentLifeSection from '../components/StudentLifeSection'
import OnTheFenceSection from '../components/OnTheFenceSection'
// import IsRightForYouSection from '../components/IsRightForYouSection'
import FAQSection from '../components/FAQSection'
import LastCTASection from '../components/LastCTASection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const StartPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      
      {/* NEW FLOATING + TEXT ROTATE HERO SECTION */}
      <StartHero />
      
      {/* REPLACED SECTION: Start pursuing your goals with INTERLINK! */}
      <HowInterlinkHelpsSection />
      
      {/* REPLACED: Speaking English Pays Off with Student Journey Comparison */}
      <StudentJourneyComparisonSection />
      
      {/* UPDATED SECTION: Comparison Table */}
      <ComparisonTableSection />
      
      {/* UPDATED SECTION: Study Options */}
      <StudyOptionsSection />
      
      {/* CleanJourneyTimeline */}
      <CleanJourneyTimeline />
      
      {/* NEW SECTION: Timeline - What happens after you apply */}
      <TimelineSection />
      
      {/* NEW SECTION: Testimonials - Not touching as requested */}
      <TestimonialsSection />
      
      {/* NEW SECTION: Student Life Section - Added between Testimonials and On The Fence */}
      <StudentLifeSection />
      
      {/* NEW SECTION: On The Fence */}
      <OnTheFenceSection />
      
      {/* NEW SECTION: Is Right For You - Commented out as requested */}
      {/* <IsRightForYouSection /> */}
      
      {/* NEW SECTION: FAQ */}
      <FAQSection />
      
      {/* FINAL CTA SECTION - Updated */}
      <LastCTASection />

      <Footer />
    </div>
  )
}

export default StartPage
