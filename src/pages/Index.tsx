import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useReports } from '@/hooks/useReports';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LiveDashboard from '@/components/LiveDashboard';
import SatelliteData from '@/components/SatelliteData';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import ReportModal from '@/components/ReportModal';

const Index: React.FC = () => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const { reports, loading, addReport } = useReports();
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleReportSubmit = async (data: {
    type: string;
    location: string;
    description: string;
    media?: File;
  }) => {
    try {
      const success = await addReport(data);
      
      if (success) {
        toast({
          title: "Success!",
          description: t('reportSubmitted'),
          duration: 5000,
        });
        setIsReportModalOpen(false);
      } else {
        throw new Error('Failed to submit report');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit report. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection onReportClick={() => setIsReportModalOpen(true)} />
      
      {/* Live Dashboard with Map */}
      <LiveDashboard reports={reports} />
      
      {/* Satellite Data Section */}
      <SatelliteData />
      
      {/* Platform Features */}
      <FeaturesSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Report Modal */}
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmit={handleReportSubmit}
      />
      
      {/* Loading overlay for initial data load */}
      {loading && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading ocean data...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;