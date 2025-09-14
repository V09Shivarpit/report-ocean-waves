import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { useRealTimeData } from '@/hooks/useRealTimeData';
import { indianCoastalCities } from '@/lib/climateData';
import { 
  MapPin, 
  Thermometer, 
  Droplets, 
  Wind, 
  Waves, 
  Activity,
  Download,
  Play,
  Pause,
  Clock
} from 'lucide-react';

const CityClimateSelector: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<string>('');
  const { t } = useLanguage();
  const { currentData, historicalData, isRecording, startRecording, stopRecording, exportData } = useRealTimeData(selectedCityId);

  const getAirQualityColor = (aqi: number) => {
    if (aqi <= 50) return 'bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-300';
    if (aqi <= 100) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-300';
    if (aqi <= 150) return 'bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-300';
    return 'bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300';
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">City-Specific Oceanic Climate</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select any coastal city to view detailed real-time oceanic climate data with live recording capabilities
          </p>
        </div>

        {/* City Selector */}
        <div className="max-w-md mx-auto mb-8">
          <Select value={selectedCityId} onValueChange={setSelectedCityId}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a coastal city..." />
            </SelectTrigger>
            <SelectContent className="bg-popover border border-border">
              {indianCoastalCities.map((city) => (
                <SelectItem key={city.id} value={city.id}>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {city.name}, {city.state}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Real-time Data Display */}
        {currentData && (
          <div className="space-y-8">
            {/* City Header with Real-time Controls */}
            <Card className="p-6 card-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    {currentData.name}, {currentData.state}
                  </h3>
                  <p className="text-muted-foreground">
                    Coordinates: {currentData.coordinates.latitude.toFixed(4)}°N, {currentData.coordinates.longitude.toFixed(4)}°E
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Activity className={`h-4 w-4 ${isRecording ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`} />
                    {isRecording ? 'Recording Live' : 'Monitoring Ready'}
                  </div>
                  
                  <Button
                    variant={isRecording ? "destructive" : "ocean"}
                    size="sm"
                    onClick={isRecording ? stopRecording : startRecording}
                  >
                    {isRecording ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isRecording ? 'Stop' : 'Start'} Recording
                  </Button>
                  
                  {historicalData.length > 0 && (
                    <Button variant="outline" size="sm" onClick={exportData}>
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            {/* Live Climate Data Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sea Surface Temperature */}
              <Card className="p-6 card-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20">
                      <Thermometer className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sea Surface Temperature</h4>
                      <p className="text-sm text-muted-foreground">Real-time SST</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-red-500">
                    {currentData.oceanicClimate.seaSurfaceTemp.current}{currentData.oceanicClimate.seaSurfaceTemp.unit}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Range: {currentData.oceanicClimate.seaSurfaceTemp.min} - {currentData.oceanicClimate.seaSurfaceTemp.max}{currentData.oceanicClimate.seaSurfaceTemp.unit}
                  </div>
                </div>
              </Card>

              {/* Humidity */}
              <Card className="p-6 card-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                      <Droplets className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Humidity</h4>
                      <p className="text-sm text-muted-foreground">Atmospheric moisture</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-500">
                    {currentData.oceanicClimate.humidity.current}{currentData.oceanicClimate.humidity.unit}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average: {currentData.oceanicClimate.humidity.average}{currentData.oceanicClimate.humidity.unit}
                  </div>
                </div>
              </Card>

              {/* Wind Speed */}
              <Card className="p-6 card-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
                      <Wind className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Wind Speed</h4>
                      <p className="text-sm text-muted-foreground">{currentData.oceanicClimate.windSpeed.direction} direction</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-500">
                    {currentData.oceanicClimate.windSpeed.current} {currentData.oceanicClimate.windSpeed.unit}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Max gust: {currentData.oceanicClimate.windSpeed.maxGust} {currentData.oceanicClimate.windSpeed.unit}
                  </div>
                </div>
              </Card>

              {/* Wave Height */}
              <Card className="p-6 card-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-cyan-50 dark:bg-cyan-950/20">
                      <Waves className="h-6 w-6 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Wave Height</h4>
                      <p className="text-sm text-muted-foreground">Significant wave height</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyan-500">
                    {currentData.oceanicClimate.waveHeight.current} {currentData.oceanicClimate.waveHeight.unit}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Significant: {currentData.oceanicClimate.waveHeight.significant} {currentData.oceanicClimate.waveHeight.unit}
                  </div>
                </div>
              </Card>

              {/* Salinity */}
              <Card className="p-6 card-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20">
                      <Droplets className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Salinity</h4>
                      <p className="text-sm text-muted-foreground">Water salinity level</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">Real-time</Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-500">
                    {currentData.oceanicClimate.salinity.current} {currentData.oceanicClimate.salinity.unit}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average: {currentData.oceanicClimate.salinity.average} {currentData.oceanicClimate.salinity.unit}
                  </div>
                </div>
              </Card>

              {/* Air Quality */}
              <Card className="p-6 card-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
                      <Activity className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Air Quality</h4>
                      <p className="text-sm text-muted-foreground">Environmental conditions</p>
                    </div>
                  </div>
                  <Badge className={getAirQualityColor(currentData.airQuality.aqi)}>
                    {currentData.airQuality.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-indigo-500">
                    {currentData.airQuality.aqi} AQI
                  </div>
                  <div className="text-sm text-muted-foreground">
                    PM2.5: {currentData.airQuality.pm25} μg/m³
                  </div>
                </div>
              </Card>
            </div>

            {/* Recording Status and Data Points */}
            {isRecording && historicalData.length > 0 && (
              <Card className="p-6 card-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Activity className="h-5 w-5 text-red-500 animate-pulse" />
                    Live Data Recording
                  </h4>
                  <Badge variant="secondary">
                    {historicalData.length} data points recorded
                  </Badge>
                </div>
                
                <div className="text-sm text-muted-foreground mb-4">
                  Latest reading: {formatTime(currentData.lastUpdated)}
                </div>
                
                {/* Mini chart visualization */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Temperature Trend</div>
                    <div className="h-12 bg-muted/30 rounded flex items-end justify-between px-1">
                      {historicalData.slice(-10).map((point, i) => (
                        <div
                          key={i}
                          className="w-1 bg-red-500 opacity-70"
                          style={{ height: `${(point.temperature / 35) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Humidity Trend</div>
                    <div className="h-12 bg-muted/30 rounded flex items-end justify-between px-1">
                      {historicalData.slice(-10).map((point, i) => (
                        <div
                          key={i}
                          className="w-1 bg-blue-500 opacity-70"
                          style={{ height: `${(point.humidity / 100) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Wind Speed Trend</div>
                    <div className="h-12 bg-muted/30 rounded flex items-end justify-between px-1">
                      {historicalData.slice(-10).map((point, i) => (
                        <div
                          key={i}
                          className="w-1 bg-green-500 opacity-70"
                          style={{ height: `${(point.windSpeed / 30) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Wave Height Trend</div>
                    <div className="h-12 bg-muted/30 rounded flex items-end justify-between px-1">
                      {historicalData.slice(-10).map((point, i) => (
                        <div
                          key={i}
                          className="w-1 bg-cyan-500 opacity-70"
                          style={{ height: `${(point.waveHeight / 5) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Last Updated */}
            <div className="text-center text-sm text-muted-foreground">
              Last updated: {formatTime(currentData.lastUpdated)} IST
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedCityId && (
          <Card className="p-12 card-shadow text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Select a City</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Choose a coastal city from the dropdown above to view detailed oceanic climate data with real-time recording capabilities.
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default CityClimateSelector;