import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { seaRegions, SeaRegionHotspot, getPriorityColor, getPrioritySize } from '@/lib/climateData';
import { useLanguage } from '@/hooks/useLanguage';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Fix for default markers in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface HazardReport {
  id: string;
  type: string;
  description: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
}

interface MapComponentProps {
  reports: HazardReport[];
}

const MapComponent: React.FC<MapComponentProps> = ({ reports }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const hotspotsRef = useRef<L.Circle[]>([]);
  const [selectedHotspot, setSelectedHotspot] = useState<SeaRegionHotspot | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([20.0, 77.0], 5);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors | INCOIS Ocean Hazard Platform',
      maxZoom: 18,
    }).addTo(map);

    mapInstanceRef.current = map;

    // Cleanup function
    return () => {
      map.remove();
    };
  }, []);

  // Update hotspots when sea regions change
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing hotspots
    hotspotsRef.current.forEach(hotspot => {
      mapInstanceRef.current?.removeLayer(hotspot);
    });
    hotspotsRef.current = [];

    // Add hotspot circles for each sea region
    seaRegions.forEach(seaRegion => {
      seaRegion.hotspots.forEach(hotspot => {
        const circle = L.circle(
          [hotspot.coordinates.latitude, hotspot.coordinates.longitude],
          {
            color: getPriorityColor(hotspot.priority),
            fillColor: getPriorityColor(hotspot.priority),
            fillOpacity: 0.3,
            radius: getPrioritySize(hotspot.priority) * 1000, // Convert to meters
            weight: 3,
          }
        ).addTo(mapInstanceRef.current!);

        // Create custom popup content
        const popupContent = `
          <div class="p-3 min-w-64">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-bold text-sm">${hotspot.name}</h3>
              <span class="px-2 py-1 rounded text-xs font-medium" style="background-color: ${getPriorityColor(hotspot.priority)}20; color: ${getPriorityColor(hotspot.priority)}">
                ${hotspot.priority.toUpperCase()}
              </span>
            </div>
            <div class="space-y-1 text-xs">
              <p><strong>Risk Score:</strong> ${hotspot.riskScore}/100</p>
              <p><strong>Total Reports:</strong> ${hotspot.totalReports}</p>
              <p><strong>Cities:</strong> ${hotspot.cities.length}</p>
              <p><strong>Avg Temperature:</strong> ${hotspot.averageConditions.temperature}°C</p>
              <p><strong>Avg Wave Height:</strong> ${hotspot.averageConditions.waveHeight}m</p>
            </div>
            <div class="mt-2 text-xs text-gray-600">
              Sea Region: ${seaRegion.name}
            </div>
          </div>
        `;

        circle.bindPopup(popupContent);
        
        // Add click event
        circle.on('click', () => {
          setSelectedHotspot(hotspot);
        });

        hotspotsRef.current.push(circle);
      });
    });

    // Add individual hazard reports as small markers
    reports.forEach(report => {
      const marker = L.marker([report.latitude, report.longitude], {
        icon: L.divIcon({
          className: 'custom-div-icon',
          html: `<div class="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-md"></div>`,
          iconSize: [12, 12],
          iconAnchor: [6, 6]
        })
      })
        .addTo(mapInstanceRef.current!)
        .bindPopup(`
          <div class="p-2">
            <h4 class="font-semibold text-xs">${report.type}</h4>
            <p class="text-xs text-gray-600 mt-1">${report.description}</p>
            <p class="text-xs text-gray-400 mt-1">${report.timestamp.toLocaleString()}</p>
          </div>
        `);
    });

  }, [reports]);

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
      <div ref={mapRef} className="w-full h-full rounded-xl shadow-card z-10" />
      
      {/* Legend */}
      <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border rounded-lg p-3 z-20 max-w-xs">
        <h4 className="text-sm font-semibold mb-2">Priority Hotspots</h4>
        <div className="space-y-1 text-xs">
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
        <div className="mt-2 pt-2 border-t">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full border border-white" />
            <span>Individual Reports</span>
          </div>
        </div>
      </div>

      {/* Sea Regions Info */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border rounded-lg p-3 z-20 max-w-sm">
        <h4 className="text-sm font-semibold mb-2">Sea Regions ({seaRegions.length})</h4>
        <div className="space-y-1 text-xs">
          {seaRegions.map(region => (
            <div key={region.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: region.color }}
                />
                <span>{region.name}</span>
              </div>
              <span className="text-muted-foreground">{region.hotspots.length} hotspots</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t text-xs text-muted-foreground">
          Total Reports: {reports.length} • Hotspots: {seaRegions.reduce((acc, region) => acc + region.hotspots.length, 0)}
        </div>
      </div>

      {/* Selected Hotspot Details */}
      {selectedHotspot && (
        <div className="absolute top-4 left-4 bg-card border rounded-lg p-4 z-20 max-w-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">{selectedHotspot.name}</h3>
            <button 
              onClick={() => setSelectedHotspot(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <div className="text-xs text-muted-foreground">Risk Score</div>
              <div className="font-semibold text-lg">{selectedHotspot.riskScore}/100</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Priority</div>
              <Badge 
                className="text-xs"
                style={{ 
                  backgroundColor: getPriorityColor(selectedHotspot.priority) + '20',
                  color: getPriorityColor(selectedHotspot.priority)
                }}
              >
                {selectedHotspot.priority.toUpperCase()}
              </Badge>
            </div>
          </div>

          <div className="text-sm space-y-2">
            <div>
              <strong>Cities Covered:</strong> {selectedHotspot.cities.map(c => c.name).join(', ')}
            </div>
            <div>
              <strong>Total Reports:</strong> {selectedHotspot.totalReports}
            </div>
            <div>
              <strong>Average Conditions:</strong>
              <div className="ml-2 text-xs space-y-1 mt-1">
                <div>Temperature: {selectedHotspot.averageConditions.temperature}°C</div>
                <div>Wave Height: {selectedHotspot.averageConditions.waveHeight}m</div>
                <div>Wind Speed: {selectedHotspot.averageConditions.windSpeed} km/h</div>
                <div>Air Quality: {selectedHotspot.averageConditions.airQuality} AQI</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;