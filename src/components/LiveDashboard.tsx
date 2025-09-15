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
import { seaRegions, getPriorityColor } from '@/lib/climateData';
import { Filter, TrendingUp, Calendar, AlertTriangle, MapPin } from 'lucide-react';
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
      type: 'official',
      region: 'Maharashtra Coast'
    },
    {
      id: 2,
      user: '@fisherman_kerala',
      content: 'Unusual algae bloom observed near Kochi waters. Reporting to authorities.',
      time: '15 minutes ago',
      type: 'citizen',
      region: 'Kerala Coast'
    },
    {
      id: 3,
      user: '@weather_chennai',
      content: 'Sea surface temperature rising along Tamil Nadu coast. Monitoring continues.',
      time: '1 hour ago',
      type: 'official',
      region: 'Tamil Nadu Coast'
    },
    {
      id: 4,
      user: '@vizag_marine',
      content: 'Strong wind warnings issued for Andhra Pradesh coastal districts.',
      time: '2 hours ago',
      type: 'official',
      region: 'Andhra Pradesh Coast'
    }
  ];

  // Calculate priority statistics
  const priorityStats = seaRegions.reduce((acc, region) => {
    region.hotspots.forEach(hotspot => {
      acc[hotspot.priority] = (acc[hotspot.priority] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="map" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('hazardDashboard')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Regional priority hotspots based on user feedback and risk assessment
          </p>
        </div>

        {/* Priority Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(priorityStats).map(([priority, count]) => (
            <Card key={priority} className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle 
                  className="h-5 w-5 mr-2"
                  style={{ color: getPriorityColor(priority) }}
                />
                <span className="text-sm font-medium capitalize">{priority}</span>
              </div>
              <div className="text-2xl font-bold">{count}</div>
              <div className="text-xs text-muted-foreground">Hotspots</div>
            </Card>
          ))}
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters & Regional Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Filters Card */}
            <Card className="p-6 card-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{t('filtersAndTrends')}</h3>
              </div>

              <div className="space-y-4">
                {/* Sea Region Filter */}
                <div className="space-y-2">
                  <Label>Sea Region</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Regions" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border">
                      <SelectItem value="all">All Regions</SelectItem>
                      {seaRegions.map(region => (
                        <SelectItem key={region.id} value={region.id}>
                          {region.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Priority Filter */}
                <div className="space-y-2">
                  <Label>Priority Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Priorities" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border">
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Filter */}
                <div className="space-y-2">
                  <Label>{t('selectDate')}</Label>
                  <Input type="date" />
                </div>
              </div>
            </Card>

            {/* Regional Statistics */}
            <Card className="p-6 card-shadow">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Regional Overview</h3>
              </div>
              
              <div className="space-y-3">
                {seaRegions.map(region => (
                  <div key={region.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: region.color }}
                      />
                      <span>{region.name}</span>
                    </div>
                    <span className="font-medium">{region.hotspots.length}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Media Feed */}
            <Card className="p-6 card-shadow">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-primary" />
                <h4 className="font-medium text-sm">{t('socialMediaFeed')}</h4>
              </div>
              
              <div className="space-y-3 max-h-80 overflow-y-auto">
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
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{post.time}</span>
                      <span className="text-primary font-medium">{post.region}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Side - Map */}
          <div className="lg:col-span-3">
            <Card className="p-6 card-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">🗺️ Regional Priority Hotspots Map</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
              
              <div className="w-full h-[500px] lg:h-[600px]">
                <MapComponent reports={reports} />
              </div>
              
              {/* Enhanced Map Legend */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Sea Regions</h4>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {seaRegions.map(region => (
                      <div key={region.id} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: region.color }}
                        />
                        <span>{region.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Priority Levels</h4>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {['critical', 'high', 'medium', 'low'].map(priority => (
                      <div key={priority} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full border-2 border-white"
                          style={{ backgroundColor: getPriorityColor(priority) }}
                        />
                        <span className="capitalize">{priority}</span>
                      </div>
                    ))}
                  </div>
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