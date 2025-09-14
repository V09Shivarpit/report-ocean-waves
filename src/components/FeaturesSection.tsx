import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Users, Shield, Brain } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      title: t('citizenReporting'),
      description: t('citizenReportingDesc'),
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: t('roleBasedAccess'),
      description: t('roleBasedAccessDesc'),
      icon: Shield,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: t('nlpAnalysis'),
      description: t('nlpAnalysisDesc'),
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="features" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('platformFeatures')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced capabilities for comprehensive ocean hazard monitoring and response
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.id} className="p-8 card-shadow hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="mt-6 flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${feature.color.replace('text-', 'bg-')} opacity-30 group-hover:opacity-70 transition-opacity duration-300`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to contribute to ocean safety?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of citizens and organizations working together to monitor and protect our oceans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#home"
                className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                Get Started
              </a>
              <a
                href="#map"
                className="inline-flex items-center justify-center h-11 rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
              >
                View Live Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;