import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Facilities } from './components/Facilities';
import { WhyChoose } from './components/WhyChoose';
import { MembershipSection } from './components/MembershipSection';
import { ScheduleSection } from './components/ScheduleSection';
import { OwnerSection } from './components/OwnerSection';
import { TrainersSection } from './components/TrainersSection';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { JoinModal } from './components/JoinModal';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenJoinModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setJoinModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    handleOpenJoinModal(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F3F4F6] flex flex-col selection:bg-[#EAB308] selection:text-black">
      {/* Sticky Header Navigation */}
      <Navbar onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* 2. About Pulse Gym */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* 4. Facilities Section (Interactive Gallery) */}
        <Facilities />

        {/* 5. Why Choose Pulse Gym */}
        <WhyChoose />

        {/* 6. Membership & Admission Section */}
        <MembershipSection onOpenInquiry={handleOpenJoinModal} />

        {/* 7. Schedule & Batches Section */}
        <ScheduleSection onOpenInquiry={handleOpenJoinModal} />

        {/* 8. Owner / Leadership Section (Only renders if owner details provided) */}
        <OwnerSection />

        {/* 9. Trainers / Team Section (Only renders if trainers provided) */}
        <TrainersSection />

        {/* 10. Google Reviews Section (4.7 ⭐ from 206 Reviews) */}
        <Reviews />

        {/* 11. Location Section (Jaiswal Colony, Jagdalpur & Map) */}
        <LocationSection />

        {/* 12. Contact & Direct WhatsApp Inquiry Section */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* 13. Comprehensive Footer */}
      <Footer />

      {/* 14. Persistent Floating WhatsApp & Actions Button */}
      <FloatingActions />

      {/* 15. Join / Schedule Visit Modal */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
