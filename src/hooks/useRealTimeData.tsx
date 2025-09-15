import { useState, useEffect, useRef } from 'react';
import { CityClimateData, indianCoastalCities } from '@/lib/climateData';

interface RealTimeDataPoint {
  timestamp: Date;
  temperature: number;
  humidity: number;
  windSpeed: number;
  waveHeight: number;
}

export const useRealTimeData = (cityId: string) => {
  const [currentData, setCurrentData] = useState<CityClimateData | null>(null);
  const [historicalData, setHistoricalData] = useState<RealTimeDataPoint[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start real-time monitoring
    if (cityId) {
      startRecording();
    }

    return () => {
      stopRecording();
    };
  }, [cityId]);

  const startRecording = () => {
    if (intervalRef.current) return;
    
    setIsRecording(true);
    
    // Update every 5 seconds for demo purposes
    intervalRef.current = setInterval(() => {
      const city = indianCoastalCities.find(c => c.id === cityId);
      if (!city) return;

      // Simulate small variations in real-time data
      const variation = () => (Math.random() - 0.5) * 0.2;
      
      const updatedData = {
        ...city,
        oceanicClimate: {
          ...city.oceanicClimate,
          seaSurfaceTemp: {
            ...city.oceanicClimate.seaSurfaceTemp,
            current: parseFloat((city.oceanicClimate.seaSurfaceTemp.current + variation()).toFixed(1))
          },
          humidity: {
            ...city.oceanicClimate.humidity,
            current: Math.max(0, Math.min(100, Math.round(city.oceanicClimate.humidity.current + variation() * 5)))
          },
          windSpeed: {
            ...city.oceanicClimate.windSpeed,
            current: parseFloat((Math.max(0, city.oceanicClimate.windSpeed.current + variation() * 3)).toFixed(1))
          },
          waveHeight: {
            ...city.oceanicClimate.waveHeight,
            current: parseFloat((Math.max(0, city.oceanicClimate.waveHeight.current + variation())).toFixed(1))
          }
        },
        lastUpdated: new Date()
      };

      if (updatedData) {
        setCurrentData(updatedData);
        
        // Add to historical data
        const dataPoint: RealTimeDataPoint = {
          timestamp: new Date(),
          temperature: updatedData.oceanicClimate.seaSurfaceTemp.current,
          humidity: updatedData.oceanicClimate.humidity.current,
          windSpeed: updatedData.oceanicClimate.windSpeed.current,
          waveHeight: updatedData.oceanicClimate.waveHeight.current,
        };
        
        setHistoricalData(prev => {
          const newData = [dataPoint, ...prev];
          // Keep last 50 data points (about 4 minutes of data)
          return newData.slice(0, 50);
        });
      }
    }, 5000);
  };

  const stopRecording = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRecording(false);
  };

  const exportData = () => {
    const csvContent = [
      'Timestamp,Temperature(°C),Humidity(%),Wind Speed(km/h),Wave Height(m)',
      ...historicalData.map(point => 
        `${point.timestamp.toISOString()},${point.temperature},${point.humidity},${point.windSpeed},${point.waveHeight}`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ocean-data-${cityId}-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return {
    currentData,
    historicalData,
    isRecording,
    startRecording,
    stopRecording,
    exportData,
  };
};
