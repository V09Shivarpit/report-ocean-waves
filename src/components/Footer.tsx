import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Waves, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/20">
                <Waves className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">INCOIS</h3>
                <p className="text-xs text-primary-foreground/80">Indian National Centre for Ocean Information Services</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Providing oceanographic services and information for maritime safety, coastal security, and sustainable ocean resource utilization.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h4 className="font-semibold mb-4">{t('about')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1">
                  {t('aboutIncois')}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1">
                  {t('services')}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1">
                  {t('research')}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ocean Atlas
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#map" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('liveMap')}
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('features')}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact')}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80">
                    Ocean Valley, Pragathi Nagar<br />
                    Nizampet, Hyderabad - 500090<br />
                    Telangana, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <a href="tel:+914023886000" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 40 2388 6000
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <a href="mailto:hazards@incois.gov.in" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  hazards@incois.gov.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
            © 2024 Indian National Centre for Ocean Information Services. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <span className="text-primary-foreground/40">•</span>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <span className="text-primary-foreground/40">•</span>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;