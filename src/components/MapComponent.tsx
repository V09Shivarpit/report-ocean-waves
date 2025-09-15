import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '@/hooks/useLanguage';

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
  const markersRef = useRef<L.Marker[]>([]);
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

  // Update markers when reports change
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => {
      mapInstanceRef.current?.removeLayer(marker);
    });
    markersRef.current = [];

    // Add new markers
    reports.forEach(report => {
      const marker = L.marker([report.latitude, report.longitude])
        .addTo(mapInstanceRef.current!)
        .bindPopup(`
          <div class="p-2">
            <h3 class="font-semibold text-sm">${report.type}</h3>
            <p class="text-xs text-gray-600 mt-1">${report.description}</p>
            <p class="text-xs text-gray-400 mt-2">${report.timestamp.toLocaleString()}</p>
          </div>
        `);
      
      markersRef.current.push(marker);
    });
  }, [reports]);

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
      <div ref={mapRef} className="w-full h-full rounded-xl shadow-card z-10" />
      {reports.length === 0 && (
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border rounded-lg px-3 py-2 z-20">
          <p className="text-sm text-muted-foreground">
            Demo Mode: Showing sample hazard data
          </p>
        </div>
      )}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border rounded-lg px-3 py-2 z-20">
        <p className="text-xs text-muted-foreground">
          {reports.length} hazard reports displayed
        </p>
      </div>
    </div>
  );
};

export default MapComponent;