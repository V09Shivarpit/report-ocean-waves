import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { MapPin, Activity } from 'lucide-react';
import oceanHeroBg from '@/assets/ocean-hero-bg.jpg';

interface HeroSectionProps {
  onReportClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onReportClick }) => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(16, 42, 101, 0.8) 0%, rgba(16, 42, 101, 0.6) 50%, rgba(45, 85, 150, 0.4) 100%), url(${oceanHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated wave overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={onReportClick}
              className="group relative overflow-hidden"
            >
              <MapPin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t('reportHazard')}
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
            </Button>
            
            <Button
              variant="wave"
              size="xl"
              onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              <Activity className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              {t('liveMap')}
            </Button>
          </div>
          
          {/* Stats or additional info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="glass-effect rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-white/80">Real-time Monitoring</div>
            </div>
            <div className="glass-effect rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">6</div>
              <div className="text-sm text-white/80">Languages Supported</div>
            </div>
            <div className="glass-effect rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">∞</div>
              <div className="text-sm text-white/80">Citizen Reports</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;