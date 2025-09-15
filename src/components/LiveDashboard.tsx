import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/hooks/useLanguage';
import { Filter, TrendingUp, Calendar } from 'lucide-react';
import MapComponent from './MapComponent';

interface HazardReport {
  id: string;
  type: string;
  description: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
}

interface LiveDashboardProps {
  reports: HazardReport[];
}

const LiveDashboard: React.FC<LiveDashboardProps> = ({ reports }) => {
  const { t } = useLanguage();

  const mockSocialPosts = [
    {
      id: 1,
      user: '@coastguard_mumbai',
      content: 'High wave alert issued for Mumbai coast. Fishermen advised to stay ashore.',
      time: '2 minutes ago',
      type: 'official'
    },
    {
      id: 2,
      user: '@fisherman_kerala',
      content: 'Unusual algae bloom observed near Kochi waters. Reporting to authorities.',
      time: '15 minutes ago',
      type: 'citizen'
    },
    {
      id: 3,
      user: '@weather_chennai',
      content: 'Sea surface temperature rising along Tamil Nadu coast. Monitoring continues.',
      time: '1 hour ago',
      type: 'official'
    }
  ];

  return (
    <section id="map" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('hazardDashboard')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('dashboardSubtitle')}
          </p>
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters & Trends */}
          <div className="lg:col-span-1">
            <Card className="p-6 card-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{t('filtersAndTrends')}</h3>
              </div>

              <div className="space-y-4">
                {/* Event Type Filter */}
                <div className="space-y-2">
                  <Label>{t('eventType')}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Events" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border">
                      <SelectItem value="all">All Events</SelectItem>
                      <SelectItem value="tsunami">Tsunami</SelectItem>
                      <SelectItem value="cyclone">Cyclone</SelectItem>
                      <SelectItem value="high-waves">High Waves</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Data Source Filter */}
                <div className="space-y-2">
                  <Label>{t('dataSource')}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Sources" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border">
                      <SelectItem value="all">All Sources</SelectItem>
                      <SelectItem value="satellite">Satellite</SelectItem>
                      <SelectItem value="citizen">Citizen Reports</SelectItem>
                      <SelectItem value="official">Official Agencies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Filter */}
                <div className="space-y-2">
                  <Label>{t('selectDate')}</Label>
                  <Input type="date" />
                </div>
              </div>

              {/* Social Media Feed */}
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <h4 className="font-medium text-sm">{t('socialMediaFeed')}</h4>
                </div>
                
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {mockSocialPosts.map(post => (
                    <div key={post.id} className="text-xs p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-primary">{post.user}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          post.type === 'official' 
                            ? 'bg-secondary text-secondary-foreground' 
                            : 'bg-accent text-accent-foreground'
                        }`}>
                          {post.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-1">{post.content}</p>
                      <span className="text-muted-foreground">{post.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Map */}
          <div className="lg:col-span-3">
            <Card className="p-6 card-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">🗺️ Live Ocean Hazard Map</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
              
              <div className="w-full h-[500px] lg:h-[600px]">
                <MapComponent reports={reports} />
              </div>
              
              {/* Map Legend */}
              <div className="mt-4 flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Tsunami Alert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>High Waves</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Algae Bloom</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Marine Debris</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;