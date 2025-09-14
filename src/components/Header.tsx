import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Waves } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { languages, Language } from '@/lib/translations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigationItems = [
    { key: 'home', href: '#home' },
    { key: 'liveMap', href: '#map' },
    { key: 'features', href: '#features' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Waves className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">INCOIS</h1>
              <p className="text-xs text-muted-foreground">Ocean Information Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  {languages.find(l => l.code === language)?.nativeName}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border border-border">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer ${language === lang.code ? 'bg-accent' : ''}`}
                  >
                    {lang.nativeName} ({lang.name})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="sm">
              {t('login')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Language / भाषा</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={language === lang.code ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className="justify-start text-xs"
                  >
                    {lang.nativeName}
                  </Button>
                ))}
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              {t('login')}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;