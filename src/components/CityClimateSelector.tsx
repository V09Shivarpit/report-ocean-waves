import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/hooks/useLanguage';
import { seaRegions, getPriorityColor } from '@/lib/climateData';
import { useRealTimeData } from '@/hooks/useRealTimeData';
import { Waves, Wind, Thermometer, Droplets, MapPin, TrendingUp, Calendar, Activity, Clock, Download, Play, Pause } from 'lucide-react';

const CityClimateSelector: React.FC = () => {
  const [selectedSeaRegion, setSelectedSeaRegion] = useState<string>('arabian-sea');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const { t } = useLanguage();

  const selectedRegion = seaRegions.find(r => r.id === selectedSeaRegion);
  const allCities = selectedRegion ? selectedRegion.hotspots.flatMap(h => h.cities) : [];
  const selectedCityData = allCities.find(c => c.id === selectedCity);
  
  const { currentData, historicalData, isRecording, startRecording, stopRecording, exportData } = useRealTimeData(selectedCity);

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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Regional Ocean Climate Data</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed oceanic conditions organized by major sea regions and coastal hotspots
          </p>
        </div>

        {/* Sea Region and City Selectors */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 card-shadow">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Select Sea Region
            </h3>
            <Select value={selectedSeaRegion} onValueChange={setSelectedSeaRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a sea region" />
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border max-h-64">
                {seaRegions.map((region) => (
                  <SelectItem key={region.id} value={region.id}>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: region.color }}
                      />
                      {region.name} ({region.hotspots.length} hotspots)
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {selectedRegion && (
              <div className="mt-4 text-sm text-muted-foreground">
                <p>{selectedRegion.description}</p>
                <div className="mt-2 space-y-1">
                  <div>Total Hotspots: {selectedRegion.hotspots.length}</div>
                  <div>Cities: {selectedRegion.hotspots.reduce((acc, h) => acc + h.cities.length, 0)}</div>
                </div>
              </div>
            )}
          </Card>

          <Card className="p-6 card-shadow">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              Select Coastal City
            </h3>
            <Select value={selectedCity} onValueChange={setSelectedCity} disabled={!selectedSeaRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a coastal city" />
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border max-h-64">
                {allCities.map((city) => (
                  <SelectItem key={city.id} value={city.id}>
                    <div className="flex flex-col">
                      <span>{city.name}</span>
                      <span className="text-xs text-muted-foreground">{city.state}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {selectedRegion && (
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">Hotspots in {selectedRegion.name}:</div>
                <div className="space-y-1">
                  {selectedRegion.hotspots.map(hotspot => (
                    <div key={hotspot.id} className="flex items-center justify-between text-xs">
                      <span>{hotspot.name}</span>
                      <Badge 
                        variant="outline"
                        className="text-xs px-1 py-0"
                        style={{ 
                          borderColor: getPriorityColor(hotspot.priority),
                          color: getPriorityColor(hotspot.priority)
                        }}
                      >
                        {hotspot.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>

          <Card className="p-6 card-shadow">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Live Data Status
            </h3>
            
            {selectedCity && selectedCityData ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                  <span className="text-sm">
                    {isRecording ? 'Recording Live Data' : 'No Live Recording'}
                  </span>
                </div>
                
                <div className="text-xs space-y-1">
                  <div>Data Points: {historicalData.length}</div>
                  <div>Last Updated: {currentData?.lastUpdated.toLocaleTimeString()}</div>
                  <div>Location: {selectedCityData.coordinates.latitude.toFixed(3)}, {selectedCityData.coordinates.longitude.toFixed(3)}</div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={isRecording ? "destructive" : "default"}
                    onClick={isRecording ? stopRecording : startRecording}
                  >
                    {isRecording ? <Pause className="h-3 w-3 mr-1" /> : <Play className="h-3 w-3 mr-1" />}
                    {isRecording ? 'Stop' : 'Start'}
                  </Button>
                  
                  {historicalData.length > 0 && (
                    <Button variant="outline" size="sm" onClick={exportData}>
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Select a city to view live oceanic data
              </p>
            )}
          </Card>
        </div>

        {/* Detailed Climate Data */}
        {selectedCityData && (
          <div className="space-y-6">
            {/* City Header */}
            <Card className="p-6 card-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    {selectedCityData.name}, {selectedCityData.state}
                  </h3>
                  <p className="text-muted-foreground">
                    Coordinates: {selectedCityData.coordinates.latitude.toFixed(4)}°N, {selectedCityData.coordinates.longitude.toFixed(4)}°E
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Activity className={`h-4 w-4 ${isRecording ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`} />
                    {isRecording ? 'Recording Live' : 'Monitoring Ready'}
                  </div>
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
                    {currentData?.oceanicClimate.seaSurfaceTemp.current || selectedCityData.oceanicClimate.seaSurfaceTemp.current}°C
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Range: {selectedCityData.oceanicClimate.seaSurfaceTemp.min}°C - {selectedCityData.oceanicClimate.seaSurfaceTemp.max}°C
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
                    {currentData?.oceanicClimate.humidity.current || selectedCityData.oceanicClimate.humidity.current}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average: {selectedCityData.oceanicClimate.humidity.average}%
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
                      <p className="text-sm text-muted-foreground">{selectedCityData.oceanicClimate.windSpeed.direction} direction</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-500">
                    {currentData?.oceanicClimate.windSpeed.current || selectedCityData.oceanicClimate.windSpeed.current} km/h
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Max gust: {selectedCityData.oceanicClimate.windSpeed.maxGust} km/h
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
                    {currentData?.oceanicClimate.waveHeight.current || selectedCityData.oceanicClimate.waveHeight.current}m
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Significant: {selectedCityData.oceanicClimate.waveHeight.significant}m
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
                    {selectedCityData.oceanicClimate.salinity.current} PSU
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average: {selectedCityData.oceanicClimate.salinity.average} PSU
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
                  <Badge className={getAirQualityColor(selectedCityData.airQuality.aqi)}>
                    {selectedCityData.airQuality.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-indigo-500">
                    {selectedCityData.airQuality.aqi} AQI
                  </div>
                  <div className="text-sm text-muted-foreground">
                    PM2.5: {selectedCityData.airQuality.pm25} μg/m³
                  </div>
                </div>
              </Card>
            </div>

            {/* Regional Hotspot Info */}
            {selectedRegion && (
              <Card className="p-6 card-shadow">
                <h3 className="font-semibold mb-4">Regional Hotspot Information</h3>
                <div className="space-y-3">
                  {selectedRegion.hotspots
                    .filter(h => h.cities.some(c => c.id === selectedCity))
                    .map(hotspot => (
                      <div key={hotspot.id} className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{hotspot.name}</span>
                          <Badge 
                            style={{ 
                              backgroundColor: getPriorityColor(hotspot.priority) + '20',
                              color: getPriorityColor(hotspot.priority)
                            }}
                          >
                            {hotspot.priority.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="text-sm space-y-1">
                          <div>Risk Score: {hotspot.riskScore}/100</div>
                          <div>Total Reports: {hotspot.totalReports}</div>
                          <div>Cities in Hotspot: {hotspot.cities.length}</div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </Card>
            )}

            {/* Live Recording Status */}
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
                  Latest reading: {formatTime(currentData?.lastUpdated || new Date())}
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
              Last updated: {formatTime(currentData?.lastUpdated || selectedCityData.lastUpdated)} IST
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedCity && (
          <Card className="p-12 card-shadow text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Select a City</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Choose a sea region and coastal city to view detailed oceanic climate data with real-time recording capabilities organized by priority hotspots.
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default CityClimateSelector;