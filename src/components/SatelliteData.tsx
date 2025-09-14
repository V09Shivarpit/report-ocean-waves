import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Thermometer, Waves, Wind, Navigation } from 'lucide-react';

const SatelliteData: React.FC = () => {
  const { t } = useLanguage();

  const satelliteDataCards = [
    {
      id: 1,
      title: t('seaSurfaceTemp'),
      value: '28.5°C',
      location: 'Bay of Bengal',
      change: '+0.3°C',
      icon: Thermometer,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
    },
    {
      id: 2,
      title: t('waveHeight'),
      value: '2.1m',
      location: 'Arabian Sea',
      change: '-0.2m',
      icon: Waves,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    },
    {
      id: 3,
      title: t('windSpeed'),
      value: '15 km/h',
      location: 'Indian Ocean',
      change: '+2 km/h',
      icon: Wind,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
    },
    {
      id: 4,
      title: t('oceanCurrents'),
      value: '1.2 m/s',
      location: 'Palk Strait',
      change: 'Stable',
      icon: Navigation,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('satelliteData')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('satelliteSubtitle')}
          </p>
        </div>

        {/* Data Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {satelliteDataCards.map((data) => {
            const Icon = data.icon;
            return (
              <Card key={data.id} className="p-6 card-shadow hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${data.bgColor} group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${data.color}`} />
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    data.change.includes('+') 
                      ? 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300' 
                      : data.change.includes('-')
                      ? 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {data.change}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">{data.title}</h3>
                  <div className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {data.value}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{data.location}</span>
                  </div>
                </div>

                {/* Mini trend chart placeholder */}
                <div className="mt-4 h-8 bg-muted/30 rounded flex items-end justify-between px-1 overflow-hidden">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 ${data.color.replace('text-', 'bg-')} opacity-70 transition-all duration-300 group-hover:opacity-100`}
                      style={{ height: `${Math.random() * 100 + 20}%` }}
                    />
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Real-time indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live data • Updated every 5 minutes
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteData;