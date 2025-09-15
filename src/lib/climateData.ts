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

// Mock oceanic climate data for Indian coastal cities and districts
export const indianCoastalCities: CityClimateData[] = [
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