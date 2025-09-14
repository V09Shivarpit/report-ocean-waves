export interface CityClimateData {
  id: string;
  name: string;
  state: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  oceanicClimate: {
    seaSurfaceTemp: {
      current: number;
      min: number;
      max: number;
      unit: string;
    };
    humidity: {
      current: number;
      average: number;
      unit: string;
    };
    windSpeed: {
      current: number;
      direction: string;
      maxGust: number;
      unit: string;
    };
    waveHeight: {
      current: number;
      significant: number;
      max: number;
      unit: string;
    };
    salinity: {
      current: number;
      average: number;
      unit: string;
    };
    tideLevel: {
      current: number;
      nextHigh: string;
      nextLow: string;
      unit: string;
    };
  };
  airQuality: {
    aqi: number;
    pm25: number;
    pm10: number;
    status: string;
  };
  lastUpdated: Date;
}

// Mock oceanic climate data for Indian coastal cities
export const indianCoastalCities: CityClimateData[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    coordinates: { latitude: 19.0760, longitude: 72.8777 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.5, min: 26.2, max: 30.1, unit: '°C' },
      humidity: { current: 76, average: 74, unit: '%' },
      windSpeed: { current: 15.2, direction: 'SW', maxGust: 22.8, unit: 'km/h' },
      waveHeight: { current: 1.8, significant: 2.1, max: 3.2, unit: 'm' },
      salinity: { current: 35.2, average: 35.0, unit: 'PSU' },
      tideLevel: { current: 2.3, nextHigh: '14:30', nextLow: '20:45', unit: 'm' },
    },
    airQuality: { aqi: 152, pm25: 78, pm10: 112, status: 'Moderate' },
    lastUpdated: new Date(),
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    coordinates: { latitude: 13.0827, longitude: 80.2707 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 29.2, min: 27.8, max: 31.5, unit: '°C' },
      humidity: { current: 82, average: 79, unit: '%' },
      windSpeed: { current: 12.8, direction: 'NE', maxGust: 18.5, unit: 'km/h' },
      waveHeight: { current: 1.2, significant: 1.5, max: 2.8, unit: 'm' },
      salinity: { current: 34.8, average: 34.9, unit: 'PSU' },
      tideLevel: { current: 1.8, nextHigh: '15:15', nextLow: '21:20', unit: 'm' },
    },
    airQuality: { aqi: 98, pm25: 42, pm10: 68, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    coordinates: { latitude: 9.9312, longitude: 76.2673 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 27.8, min: 26.5, max: 29.3, unit: '°C' },
      humidity: { current: 88, average: 85, unit: '%' },
      windSpeed: { current: 8.5, direction: 'W', maxGust: 14.2, unit: 'km/h' },
      waveHeight: { current: 0.9, significant: 1.1, max: 2.1, unit: 'm' },
      salinity: { current: 35.5, average: 35.3, unit: 'PSU' },
      tideLevel: { current: 1.2, nextHigh: '16:45', nextLow: '22:30', unit: 'm' },
    },
    airQuality: { aqi: 65, pm25: 28, pm10: 45, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    coordinates: { latitude: 17.6868, longitude: 83.2185 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.9, min: 27.1, max: 30.8, unit: '°C' },
      humidity: { current: 79, average: 76, unit: '%' },
      windSpeed: { current: 18.3, direction: 'SE', maxGust: 25.7, unit: 'km/h' },
      waveHeight: { current: 2.1, significant: 2.4, max: 3.6, unit: 'm' },
      salinity: { current: 34.9, average: 35.1, unit: 'PSU' },
      tideLevel: { current: 2.7, nextHigh: '13:20', nextLow: '19:50', unit: 'm' },
    },
    airQuality: { aqi: 124, pm25: 65, pm10: 89, status: 'Moderate' },
    lastUpdated: new Date(),
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    coordinates: { latitude: 22.5726, longitude: 88.3639 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 26.8, min: 24.9, max: 28.7, unit: '°C' },
      humidity: { current: 84, average: 81, unit: '%' },
      windSpeed: { current: 11.2, direction: 'S', maxGust: 16.8, unit: 'km/h' },
      waveHeight: { current: 1.5, significant: 1.8, max: 2.9, unit: 'm' },
      salinity: { current: 32.1, average: 32.8, unit: 'PSU' },
      tideLevel: { current: 3.1, nextHigh: '14:10', nextLow: '20:25', unit: 'm' },
    },
    airQuality: { aqi: 178, pm25: 95, pm10: 128, status: 'Unhealthy' },
    lastUpdated: new Date(),
  },
  {
    id: 'goa',
    name: 'Panaji',
    state: 'Goa',
    coordinates: { latitude: 15.2993, longitude: 74.1240 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.1, min: 26.8, max: 29.8, unit: '°C' },
      humidity: { current: 81, average: 78, unit: '%' },
      windSpeed: { current: 9.7, direction: 'W', maxGust: 15.3, unit: 'km/h' },
      waveHeight: { current: 1.3, significant: 1.6, max: 2.5, unit: 'm' },
      salinity: { current: 35.1, average: 35.0, unit: 'PSU' },
      tideLevel: { current: 1.9, nextHigh: '15:40', nextLow: '21:55', unit: 'm' },
    },
    airQuality: { aqi: 72, pm25: 32, pm10: 51, status: 'Good' },
    lastUpdated: new Date(),
  }
];

// Simulate real-time updates
export const updateCityClimateData = (cityId: string): CityClimateData | null => {
  const city = indianCoastalCities.find(c => c.id === cityId);
  if (!city) return null;

  // Simulate small variations in real-time data
  const variation = () => (Math.random() - 0.5) * 0.2;
  
  return {
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
};