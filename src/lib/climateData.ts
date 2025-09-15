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

export interface SeaRegionHotspot {
  id: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  priority: 'critical' | 'high' | 'medium' | 'low';
  riskScore: number; // 0-100
  totalReports: number;
  cities: CityClimateData[];
  averageConditions: {
    temperature: number;
    waveHeight: number;
    windSpeed: number;
    airQuality: number;
  };
}

export interface SeaCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  hotspots: SeaRegionHotspot[];
}

// Organized oceanic climate data by major sea regions
const citiesData: CityClimateData[] = [
  // WEST COAST - GUJARAT
  {
    id: 'dwarka',
    name: 'Dwarka',
    state: 'Gujarat',
    coordinates: { latitude: 22.2394, longitude: 68.9678 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 26.8, min: 24.5, max: 29.2, unit: '°C' },
      humidity: { current: 68, average: 65, unit: '%' },
      windSpeed: { current: 18.5, direction: 'W', maxGust: 28.3, unit: 'km/h' },
      waveHeight: { current: 2.2, significant: 2.5, max: 3.8, unit: 'm' },
      salinity: { current: 35.8, average: 35.6, unit: 'PSU' },
      tideLevel: { current: 2.8, nextHigh: '13:45', nextLow: '20:15', unit: 'm' },
    },
    airQuality: { aqi: 89, pm25: 38, pm10: 62, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'porbandar',
    name: 'Porbandar',
    state: 'Gujarat',
    coordinates: { latitude: 21.6417, longitude: 69.6293 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 27.2, min: 25.1, max: 29.8, unit: '°C' },
      humidity: { current: 71, average: 68, unit: '%' },
      windSpeed: { current: 16.8, direction: 'SW', maxGust: 24.7, unit: 'km/h' },
      waveHeight: { current: 1.9, significant: 2.2, max: 3.4, unit: 'm' },
      salinity: { current: 35.5, average: 35.4, unit: 'PSU' },
      tideLevel: { current: 2.1, nextHigh: '14:20', nextLow: '20:50', unit: 'm' },
    },
    airQuality: { aqi: 78, pm25: 32, pm10: 55, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'kandla',
    name: 'Kandla',
    state: 'Gujarat',
    coordinates: { latitude: 23.0333, longitude: 70.2167 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 26.5, min: 23.8, max: 28.9, unit: '°C' },
      humidity: { current: 64, average: 62, unit: '%' },
      windSpeed: { current: 20.3, direction: 'W', maxGust: 31.5, unit: 'km/h' },
      waveHeight: { current: 2.4, significant: 2.8, max: 4.1, unit: 'm' },
      salinity: { current: 36.1, average: 35.9, unit: 'PSU' },
      tideLevel: { current: 3.2, nextHigh: '13:10', nextLow: '19:40', unit: 'm' },
    },
    airQuality: { aqi: 134, pm25: 68, pm10: 95, status: 'Moderate' },
    lastUpdated: new Date(),
  },
  
  // WEST COAST - MAHARASHTRA
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
    id: 'ratnagiri',
    name: 'Ratnagiri',
    state: 'Maharashtra',
    coordinates: { latitude: 16.9944, longitude: 73.3000 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.9, min: 26.8, max: 30.5, unit: '°C' },
      humidity: { current: 83, average: 80, unit: '%' },
      windSpeed: { current: 12.4, direction: 'W', maxGust: 18.9, unit: 'km/h' },
      waveHeight: { current: 1.6, significant: 1.9, max: 2.8, unit: 'm' },
      salinity: { current: 35.0, average: 34.9, unit: 'PSU' },
      tideLevel: { current: 1.9, nextHigh: '15:00', nextLow: '21:25', unit: 'm' },
    },
    airQuality: { aqi: 68, pm25: 29, pm10: 48, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'alibag',
    name: 'Alibag',
    state: 'Maharashtra',
    coordinates: { latitude: 18.6414, longitude: 72.8722 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.3, min: 26.1, max: 29.8, unit: '°C' },
      humidity: { current: 78, average: 76, unit: '%' },
      windSpeed: { current: 14.7, direction: 'SW', maxGust: 21.3, unit: 'km/h' },
      waveHeight: { current: 1.7, significant: 2.0, max: 3.0, unit: 'm' },
      salinity: { current: 35.1, average: 34.9, unit: 'PSU' },
      tideLevel: { current: 2.1, nextHigh: '14:45', nextLow: '21:00', unit: 'm' },
    },
    airQuality: { aqi: 89, pm25: 41, pm10: 67, status: 'Good' },
    lastUpdated: new Date(),
  },
  
  // WEST COAST - KARNATAKA
  {
    id: 'mangalore',
    name: 'Mangalore',
    state: 'Karnataka',
    coordinates: { latitude: 12.9141, longitude: 74.8560 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 29.1, min: 27.3, max: 31.2, unit: '°C' },
      humidity: { current: 85, average: 82, unit: '%' },
      windSpeed: { current: 10.8, direction: 'SW', maxGust: 16.5, unit: 'km/h' },
      waveHeight: { current: 1.4, significant: 1.7, max: 2.5, unit: 'm' },
      salinity: { current: 35.3, average: 35.2, unit: 'PSU' },
      tideLevel: { current: 1.6, nextHigh: '16:20', nextLow: '22:10', unit: 'm' },
    },
    airQuality: { aqi: 71, pm25: 31, pm10: 52, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'udupi',
    name: 'Udupi',
    state: 'Karnataka',
    coordinates: { latitude: 13.3409, longitude: 74.7421 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.7, min: 26.9, max: 30.8, unit: '°C' },
      humidity: { current: 87, average: 84, unit: '%' },
      windSpeed: { current: 9.3, direction: 'W', maxGust: 14.8, unit: 'km/h' },
      waveHeight: { current: 1.3, significant: 1.6, max: 2.3, unit: 'm' },
      salinity: { current: 35.4, average: 35.2, unit: 'PSU' },
      tideLevel: { current: 1.5, nextHigh: '16:10', nextLow: '22:05', unit: 'm' },
    },
    airQuality: { aqi: 58, pm25: 24, pm10: 41, status: 'Good' },
    lastUpdated: new Date(),
  },
  
  // WEST COAST - KERALA
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
    id: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    state: 'Kerala',
    coordinates: { latitude: 8.5241, longitude: 76.9366 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.2, min: 26.8, max: 29.7, unit: '°C' },
      humidity: { current: 89, average: 87, unit: '%' },
      windSpeed: { current: 7.9, direction: 'SW', maxGust: 13.5, unit: 'km/h' },
      waveHeight: { current: 1.0, significant: 1.2, max: 2.0, unit: 'm' },
      salinity: { current: 35.6, average: 35.4, unit: 'PSU' },
      tideLevel: { current: 1.1, nextHigh: '17:00', nextLow: '22:45', unit: 'm' },
    },
    airQuality: { aqi: 61, pm25: 26, pm10: 42, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'alappuzha',
    name: 'Alappuzha',
    state: 'Kerala',
    coordinates: { latitude: 9.4981, longitude: 76.3388 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.0, min: 26.6, max: 29.5, unit: '°C' },
      humidity: { current: 90, average: 88, unit: '%' },
      windSpeed: { current: 8.1, direction: 'W', maxGust: 13.8, unit: 'km/h' },
      waveHeight: { current: 0.8, significant: 1.0, max: 1.9, unit: 'm' },
      salinity: { current: 35.3, average: 35.1, unit: 'PSU' },
      tideLevel: { current: 1.0, nextHigh: '16:55', nextLow: '22:40', unit: 'm' },
    },
    airQuality: { aqi: 57, pm25: 23, pm10: 39, status: 'Good' },
    lastUpdated: new Date(),
  },
  
  // WEST COAST - GOA
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
  },
  
  // EAST COAST - TAMIL NADU
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
    id: 'tuticorin',
    name: 'Tuticorin',
    state: 'Tamil Nadu',
    coordinates: { latitude: 8.7642, longitude: 78.1348 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 29.8, min: 28.1, max: 31.9, unit: '°C' },
      humidity: { current: 77, average: 75, unit: '%' },
      windSpeed: { current: 14.2, direction: 'SE', maxGust: 20.7, unit: 'km/h' },
      waveHeight: { current: 1.4, significant: 1.7, max: 2.6, unit: 'm' },
      salinity: { current: 35.1, average: 35.0, unit: 'PSU' },
      tideLevel: { current: 1.6, nextHigh: '15:50', nextLow: '21:35', unit: 'm' },
    },
    airQuality: { aqi: 143, pm25: 72, pm10: 98, status: 'Moderate' },
    lastUpdated: new Date(),
  },
  {
    id: 'rameswaram',
    name: 'Rameswaram',
    state: 'Tamil Nadu',
    coordinates: { latitude: 9.2876, longitude: 79.3129 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 29.5, min: 27.9, max: 31.6, unit: '°C' },
      humidity: { current: 79, average: 76, unit: '%' },
      windSpeed: { current: 13.6, direction: 'E', maxGust: 19.8, unit: 'km/h' },
      waveHeight: { current: 1.3, significant: 1.6, max: 2.4, unit: 'm' },
      salinity: { current: 35.2, average: 35.1, unit: 'PSU' },
      tideLevel: { current: 1.5, nextHigh: '15:25', nextLow: '21:10', unit: 'm' },
    },
    airQuality: { aqi: 76, pm25: 33, pm10: 54, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'nagapattinam',
    name: 'Nagapattinam',
    state: 'Tamil Nadu',
    coordinates: { latitude: 10.7657, longitude: 79.8420 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 29.0, min: 27.5, max: 31.1, unit: '°C' },
      humidity: { current: 84, average: 81, unit: '%' },
      windSpeed: { current: 11.9, direction: 'NE', maxGust: 17.4, unit: 'km/h' },
      waveHeight: { current: 1.1, significant: 1.4, max: 2.2, unit: 'm' },
      salinity: { current: 34.9, average: 34.8, unit: 'PSU' },
      tideLevel: { current: 1.7, nextHigh: '15:05', nextLow: '21:25', unit: 'm' },
    },
    airQuality: { aqi: 82, pm25: 37, pm10: 59, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'cuddalore',
    name: 'Cuddalore',
    state: 'Tamil Nadu',
    coordinates: { latitude: 11.7480, longitude: 79.7714 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.8, min: 27.2, max: 30.7, unit: '°C' },
      humidity: { current: 83, average: 80, unit: '%' },
      windSpeed: { current: 12.5, direction: 'NE', maxGust: 18.1, unit: 'km/h' },
      waveHeight: { current: 1.2, significant: 1.5, max: 2.3, unit: 'm' },
      salinity: { current: 34.7, average: 34.8, unit: 'PSU' },
      tideLevel: { current: 1.9, nextHigh: '14:50', nextLow: '21:15', unit: 'm' },
    },
    airQuality: { aqi: 108, pm25: 52, pm10: 78, status: 'Moderate' },
    lastUpdated: new Date(),
  },
  {
    id: 'pondicherry',
    name: 'Puducherry',
    state: 'Puducherry',
    coordinates: { latitude: 11.9416, longitude: 79.8083 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.9, min: 27.3, max: 30.8, unit: '°C' },
      humidity: { current: 81, average: 78, unit: '%' },
      windSpeed: { current: 13.1, direction: 'NE', maxGust: 18.9, unit: 'km/h' },
      waveHeight: { current: 1.3, significant: 1.6, max: 2.4, unit: 'm' },
      salinity: { current: 34.8, average: 34.7, unit: 'PSU' },
      tideLevel: { current: 1.8, nextHigh: '14:55', nextLow: '21:20', unit: 'm' },
    },
    airQuality: { aqi: 95, pm25: 44, pm10: 69, status: 'Good' },
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
  
  // EAST COAST - ANDHRA PRADESH
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
    id: 'kakinada',
    name: 'Kakinada',
    state: 'Andhra Pradesh',
    coordinates: { latitude: 16.9891, longitude: 82.2475 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 29.1, min: 27.4, max: 31.0, unit: '°C' },
      humidity: { current: 81, average: 78, unit: '%' },
      windSpeed: { current: 16.7, direction: 'SE', maxGust: 23.4, unit: 'km/h' },
      waveHeight: { current: 1.9, significant: 2.2, max: 3.3, unit: 'm' },
      salinity: { current: 34.8, average: 34.9, unit: 'PSU' },
      tideLevel: { current: 2.4, nextHigh: '13:35', nextLow: '20:05', unit: 'm' },
    },
    airQuality: { aqi: 118, pm25: 59, pm10: 84, status: 'Moderate' },
    lastUpdated: new Date(),
  },
  {
    id: 'machilipatnam',
    name: 'Machilipatnam',
    state: 'Andhra Pradesh',
    coordinates: { latitude: 16.1874, longitude: 81.1384 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.7, min: 26.9, max: 30.6, unit: '°C' },
      humidity: { current: 83, average: 80, unit: '%' },
      windSpeed: { current: 15.9, direction: 'E', maxGust: 22.1, unit: 'km/h' },
      waveHeight: { current: 1.7, significant: 2.0, max: 3.0, unit: 'm' },
      salinity: { current: 34.6, average: 34.7, unit: 'PSU' },
      tideLevel: { current: 2.2, nextHigh: '14:00', nextLow: '20:30', unit: 'm' },
    },
    airQuality: { aqi: 102, pm25: 48, pm10: 73, status: 'Moderate' },
    lastUpdated: new Date(),
  },
  {
    id: 'nellore',
    name: 'Nellore',
    state: 'Andhra Pradesh',
    coordinates: { latitude: 14.4426, longitude: 79.9865 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 29.3, min: 27.6, max: 31.2, unit: '°C' },
      humidity: { current: 78, average: 75, unit: '%' },
      windSpeed: { current: 14.5, direction: 'SE', maxGust: 20.8, unit: 'km/h' },
      waveHeight: { current: 1.5, significant: 1.8, max: 2.7, unit: 'm' },
      salinity: { current: 34.9, average: 34.8, unit: 'PSU' },
      tideLevel: { current: 2.0, nextHigh: '14:25', nextLow: '20:55', unit: 'm' },
    },
    airQuality: { aqi: 89, pm25: 40, pm10: 63, status: 'Good' },
    lastUpdated: new Date(),
  },
  
  // EAST COAST - ODISHA
  {
    id: 'puri',
    name: 'Puri',
    state: 'Odisha',
    coordinates: { latitude: 19.8135, longitude: 85.8312 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 27.5, min: 25.8, max: 29.4, unit: '°C' },
      humidity: { current: 86, average: 83, unit: '%' },
      windSpeed: { current: 13.8, direction: 'SE', maxGust: 19.5, unit: 'km/h' },
      waveHeight: { current: 1.6, significant: 1.9, max: 2.8, unit: 'm' },
      salinity: { current: 33.9, average: 34.1, unit: 'PSU' },
      tideLevel: { current: 2.8, nextHigh: '13:55', nextLow: '20:20', unit: 'm' },
    },
    airQuality: { aqi: 92, pm25: 42, pm10: 66, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'paradip',
    name: 'Paradip',
    state: 'Odisha',
    coordinates: { latitude: 20.3149, longitude: 86.6964 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 27.2, min: 25.5, max: 29.1, unit: '°C' },
      humidity: { current: 85, average: 82, unit: '%' },
      windSpeed: { current: 15.4, direction: 'SE', maxGust: 21.7, unit: 'km/h' },
      waveHeight: { current: 1.8, significant: 2.1, max: 3.1, unit: 'm' },
      salinity: { current: 34.0, average: 34.2, unit: 'PSU' },
      tideLevel: { current: 2.9, nextHigh: '13:40', nextLow: '20:05', unit: 'm' },
    },
    airQuality: { aqi: 128, pm25: 63, pm10: 91, status: 'Moderate' },
    lastUpdated: new Date(),
  },
  {
    id: 'gopalpur',
    name: 'Gopalpur',
    state: 'Odisha',
    coordinates: { latitude: 19.2644, longitude: 84.9178 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.0, min: 26.2, max: 29.8, unit: '°C' },
      humidity: { current: 84, average: 81, unit: '%' },
      windSpeed: { current: 14.2, direction: 'SE', maxGust: 20.1, unit: 'km/h' },
      waveHeight: { current: 1.7, significant: 2.0, max: 2.9, unit: 'm' },
      salinity: { current: 34.1, average: 34.3, unit: 'PSU' },
      tideLevel: { current: 2.6, nextHigh: '14:15', nextLow: '20:40', unit: 'm' },
    },
    airQuality: { aqi: 87, pm25: 39, pm10: 61, status: 'Good' },
    lastUpdated: new Date(),
  },
  
  // EAST COAST - WEST BENGAL
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
    id: 'digha',
    name: 'Digha',
    state: 'West Bengal',
    coordinates: { latitude: 21.6244, longitude: 87.5281 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 27.1, min: 25.3, max: 28.9, unit: '°C' },
      humidity: { current: 82, average: 79, unit: '%' },
      windSpeed: { current: 12.8, direction: 'S', maxGust: 18.4, unit: 'km/h' },
      waveHeight: { current: 1.4, significant: 1.7, max: 2.6, unit: 'm' },
      salinity: { current: 32.8, average: 33.0, unit: 'PSU' },
      tideLevel: { current: 2.9, nextHigh: '14:05', nextLow: '20:30', unit: 'm' },
    },
    airQuality: { aqi: 145, pm25: 71, pm10: 103, status: 'Moderate' },
    lastUpdated: new Date(),
  },
  {
    id: 'haldia',
    name: 'Haldia',
    state: 'West Bengal',
    coordinates: { latitude: 22.0582, longitude: 88.0603 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 26.9, min: 25.1, max: 28.6, unit: '°C' },
      humidity: { current: 85, average: 82, unit: '%' },
      windSpeed: { current: 10.9, direction: 'S', maxGust: 16.2, unit: 'km/h' },
      waveHeight: { current: 1.3, significant: 1.6, max: 2.4, unit: 'm' },
      salinity: { current: 32.3, average: 32.6, unit: 'PSU' },
      tideLevel: { current: 3.0, nextHigh: '14:08', nextLow: '20:28', unit: 'm' },
    },
    airQuality: { aqi: 165, pm25: 83, pm10: 117, status: 'Unhealthy' },
    lastUpdated: new Date(),
  },
  
  // ISLAND TERRITORIES
  {
    id: 'portblair',
    name: 'Port Blair',
    state: 'Andaman & Nicobar Islands',
    coordinates: { latitude: 11.6234, longitude: 92.7265 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 29.7, min: 28.1, max: 31.8, unit: '°C' },
      humidity: { current: 91, average: 89, unit: '%' },
      windSpeed: { current: 8.4, direction: 'NE', maxGust: 14.7, unit: 'km/h' },
      waveHeight: { current: 1.1, significant: 1.4, max: 2.2, unit: 'm' },
      salinity: { current: 35.8, average: 35.7, unit: 'PSU' },
      tideLevel: { current: 1.3, nextHigh: '16:30', nextLow: '22:15', unit: 'm' },
    },
    airQuality: { aqi: 48, pm25: 19, pm10: 32, status: 'Good' },
    lastUpdated: new Date(),
  },
  {
    id: 'kavaratti',
    name: 'Kavaratti',
    state: 'Lakshadweep',
    coordinates: { latitude: 10.5669, longitude: 72.6420 },
    oceanicClimate: {
      seaSurfaceTemp: { current: 28.6, min: 27.2, max: 30.1, unit: '°C' },
      humidity: { current: 88, average: 86, unit: '%' },
      windSpeed: { current: 9.8, direction: 'W', maxGust: 15.9, unit: 'km/h' },
      waveHeight: { current: 1.0, significant: 1.2, max: 1.9, unit: 'm' },
      salinity: { current: 36.2, average: 36.0, unit: 'PSU' },
      tideLevel: { current: 0.9, nextHigh: '17:15', nextLow: '23:00', unit: 'm' },
    },
    airQuality: { aqi: 42, pm25: 16, pm10: 28, status: 'Good' },
    lastUpdated: new Date(),
  }
];

// Organized sea regions with priority hotspots
export const seaRegions: SeaCategory[] = [
  {
    id: 'arabian-sea',
    name: 'Arabian Sea',
    description: 'Western coast of India from Gujarat to Kerala',
    color: '#3B82F6',
    hotspots: [
      {
        id: 'gujarat-coast',
        name: 'Gujarat Coastal Region',
        coordinates: { latitude: 22.5, longitude: 69.5 },
        priority: 'high',
        riskScore: 78,
        totalReports: 145,
        cities: citiesData.filter(city => ['dwarka', 'porbandar', 'kandla'].includes(city.id)),
        averageConditions: {
          temperature: 26.8,
          waveHeight: 2.2,
          windSpeed: 18.5,
          airQuality: 100
        }
      },
      {
        id: 'maharashtra-coast',
        name: 'Maharashtra Coastal Region',
        coordinates: { latitude: 18.0, longitude: 73.0 },
        priority: 'critical',
        riskScore: 89,
        totalReports: 234,
        cities: citiesData.filter(city => ['mumbai', 'ratnagiri', 'alibag'].includes(city.id)),
        averageConditions: {
          temperature: 28.6,
          waveHeight: 1.7,
          windSpeed: 14.1,
          airQuality: 103
        }
      },
      {
        id: 'karnataka-coast',
        name: 'Karnataka Coastal Region',
        coordinates: { latitude: 13.1, longitude: 74.8 },
        priority: 'medium',
        riskScore: 65,
        totalReports: 87,
        cities: citiesData.filter(city => ['mangalore', 'udupi'].includes(city.id)),
        averageConditions: {
          temperature: 28.9,
          waveHeight: 1.4,
          windSpeed: 10.1,
          airQuality: 65
        }
      },
      {
        id: 'kerala-coast',
        name: 'Kerala Coastal Region',
        coordinates: { latitude: 9.2, longitude: 76.5 },
        priority: 'low',
        riskScore: 45,
        totalReports: 56,
        cities: citiesData.filter(city => ['kochi', 'thiruvananthapuram', 'alappuzha'].includes(city.id)),
        averageConditions: {
          temperature: 28.0,
          waveHeight: 0.9,
          windSpeed: 8.2,
          airQuality: 61
        }
      },
      {
        id: 'goa-coast',
        name: 'Goa Coastal Region',
        coordinates: { latitude: 15.3, longitude: 74.1 },
        priority: 'low',
        riskScore: 42,
        totalReports: 38,
        cities: citiesData.filter(city => city.id === 'goa'),
        averageConditions: {
          temperature: 28.1,
          waveHeight: 1.3,
          windSpeed: 9.7,
          airQuality: 72
        }
      }
    ]
  },
  {
    id: 'bay-of-bengal',
    name: 'Bay of Bengal',
    description: 'Eastern coast from Tamil Nadu to West Bengal',
    color: '#10B981',
    hotspots: [
      {
        id: 'tamil-nadu-coast',
        name: 'Tamil Nadu Coastal Region',
        coordinates: { latitude: 11.5, longitude: 79.8 },
        priority: 'high',
        riskScore: 73,
        totalReports: 189,
        cities: citiesData.filter(city => ['chennai', 'tuticorin', 'rameswaram', 'nagapattinam', 'cuddalore', 'pondicherry'].includes(city.id)),
        averageConditions: {
          temperature: 29.1,
          waveHeight: 1.3,
          windSpeed: 12.9,
          airQuality: 84
        }
      },
      {
        id: 'andhra-pradesh-coast',
        name: 'Andhra Pradesh Coastal Region',
        coordinates: { latitude: 16.5, longitude: 82.0 },
        priority: 'critical',
        riskScore: 85,
        totalReports: 198,
        cities: citiesData.filter(city => ['visakhapatnam', 'kakinada', 'machilipatnam', 'nellore'].includes(city.id)),
        averageConditions: {
          temperature: 28.8,
          waveHeight: 1.8,
          windSpeed: 16.4,
          airQuality: 108
        }
      },
      {
        id: 'odisha-coast',
        name: 'Odisha Coastal Region',
        coordinates: { latitude: 19.8, longitude: 85.8 },
        priority: 'high',
        riskScore: 76,
        totalReports: 156,
        cities: citiesData.filter(city => ['puri', 'paradip', 'gopalpur'].includes(city.id)),
        averageConditions: {
          temperature: 27.6,
          waveHeight: 1.7,
          windSpeed: 14.5,
          airQuality: 102
        }
      },
      {
        id: 'west-bengal-coast',
        name: 'West Bengal Coastal Region',
        coordinates: { latitude: 22.0, longitude: 88.0 },
        priority: 'critical',
        riskScore: 92,
        totalReports: 267,
        cities: citiesData.filter(city => ['kolkata', 'digha', 'haldia'].includes(city.id)),
        averageConditions: {
          temperature: 26.9,
          waveHeight: 1.4,
          windSpeed: 11.6,
          airQuality: 163
        }
      }
    ]
  },
  {
    id: 'indian-ocean',
    name: 'Indian Ocean Islands',
    description: 'Andaman & Nicobar and Lakshadweep Islands',
    color: '#F59E0B',
    hotspots: [
      {
        id: 'andaman-nicobar',
        name: 'Andaman & Nicobar Islands',
        coordinates: { latitude: 11.6, longitude: 92.7 },
        priority: 'medium',
        riskScore: 58,
        totalReports: 42,
        cities: citiesData.filter(city => city.id === 'portblair'),
        averageConditions: {
          temperature: 29.7,
          waveHeight: 1.1,
          windSpeed: 8.4,
          airQuality: 48
        }
      },
      {
        id: 'lakshadweep',
        name: 'Lakshadweep Islands',
        coordinates: { latitude: 10.6, longitude: 72.6 },
        priority: 'low',
        riskScore: 35,
        totalReports: 18,
        cities: citiesData.filter(city => city.id === 'kavaratti'),
        averageConditions: {
          temperature: 28.6,
          waveHeight: 1.0,
          windSpeed: 9.8,
          airQuality: 42
        }
      }
    ]
  }
];

// Legacy export for backward compatibility
export const indianCoastalCities = citiesData;

// Helper functions
export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'critical': return '#EF4444';
    case 'high': return '#F59E0B';
    case 'medium': return '#3B82F6';
    case 'low': return '#10B981';
    default: return '#6B7280';
  }
};

export const getPrioritySize = (priority: string) => {
  switch (priority) {
    case 'critical': return 25;
    case 'high': return 20;
    case 'medium': return 15;
    case 'low': return 12;
    default: return 10;
  }
};
// Simulate real-time updates for hotspots
export const updateHotspotData = (hotspotId: string, seaId: string) => {
  const seaRegion = seaRegions.find(s => s.id === seaId);
  if (!seaRegion) return null;
  
  const hotspot = seaRegion.hotspots.find(h => h.id === hotspotId);
  if (!hotspot) return null;

  // Simulate priority changes based on conditions
  const variation = () => (Math.random() - 0.5) * 5;
  
  return {
    ...hotspot,
    riskScore: Math.max(0, Math.min(100, hotspot.riskScore + variation())),
    totalReports: hotspot.totalReports + Math.floor(Math.random() * 3),
    averageConditions: {
      ...hotspot.averageConditions,
      temperature: parseFloat((hotspot.averageConditions.temperature + (Math.random() - 0.5) * 0.5).toFixed(1)),
      waveHeight: parseFloat((Math.max(0, hotspot.averageConditions.waveHeight + (Math.random() - 0.5) * 0.3)).toFixed(1))
    }
  };
};