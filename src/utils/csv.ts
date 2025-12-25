import fs from 'node:fs';
import path from 'node:path';

export interface LocationData {
  state: string;
  state_slug: string;
  city: string;
  city_slug: string;
  population: number;
  market_size: 'small' | 'mid' | 'large';
  primary_keyword: string;
  secondary_keywords: string[];
  meta_title: string;
  meta_description: string;
  avg_seo_cost_low: number;
  avg_seo_cost_high: number;
  dominant_industries: string[];
  competition_level: 'low' | 'medium' | 'high';
}

export interface StateData {
  state: string;
  state_slug: string;
  cities: LocationData[];
  totalPopulation: number;
  averageCostLow: number;
  averageCostHigh: number;
}

let cachedLocations: LocationData[] | null = null;
let cachedStates: Map<string, StateData> | null = null;

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

export function loadLocations(): LocationData[] {
  if (cachedLocations) return cachedLocations;
  
  // Use import.meta.url to resolve path relative to this file (works on Cloudflare)
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const csvPath = path.resolve(__dirname, '../../seo-locations.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const lines = csvContent.split('\n').filter(line => line.trim());
  
  // Skip header row
  const dataLines = lines.slice(1);
  
  cachedLocations = dataLines.map(line => {
    const fields = parseCSVLine(line);
    
    return {
      state: fields[0] || '',
      state_slug: fields[1] || '',
      city: fields[2] || '',
      city_slug: fields[3] || '',
      population: parseInt(fields[4] || '0', 10),
      market_size: (fields[5] || 'small') as LocationData['market_size'],
      primary_keyword: fields[6] || '',
      secondary_keywords: (fields[7] || '').split(',').map(s => s.trim()).filter(Boolean),
      meta_title: fields[8] || '',
      meta_description: fields[9] || '',
      avg_seo_cost_low: parseInt(fields[10] || '0', 10),
      avg_seo_cost_high: parseInt(fields[11] || '0', 10),
      dominant_industries: (fields[12] || '').split(',').map(s => s.trim()).filter(Boolean),
      competition_level: (fields[13] || 'medium') as LocationData['competition_level'],
    };
  }).filter(loc => loc.city && loc.state);
  
  return cachedLocations;
}

export function loadStates(): Map<string, StateData> {
  if (cachedStates) return cachedStates;
  
  const locations = loadLocations();
  cachedStates = new Map();
  
  for (const location of locations) {
    if (!cachedStates.has(location.state_slug)) {
      cachedStates.set(location.state_slug, {
        state: location.state,
        state_slug: location.state_slug,
        cities: [],
        totalPopulation: 0,
        averageCostLow: 0,
        averageCostHigh: 0,
      });
    }
    
    const stateData = cachedStates.get(location.state_slug)!;
    stateData.cities.push(location);
    stateData.totalPopulation += location.population;
  }
  
  // Calculate averages
  for (const [, stateData] of cachedStates) {
    const cityCount = stateData.cities.length;
    if (cityCount > 0) {
      stateData.averageCostLow = Math.round(
        stateData.cities.reduce((sum, c) => sum + c.avg_seo_cost_low, 0) / cityCount
      );
      stateData.averageCostHigh = Math.round(
        stateData.cities.reduce((sum, c) => sum + c.avg_seo_cost_high, 0) / cityCount
      );
    }
    // Sort cities by population descending
    stateData.cities.sort((a, b) => b.population - a.population);
  }
  
  return cachedStates;
}

export function getLocationBySlug(stateSlug: string, citySlug: string): LocationData | undefined {
  const locations = loadLocations();
  return locations.find(
    loc => loc.state_slug === stateSlug && loc.city_slug === citySlug
  );
}

export function getStateBySlug(stateSlug: string): StateData | undefined {
  const states = loadStates();
  return states.get(stateSlug);
}

export function getAllStates(): StateData[] {
  const states = loadStates();
  return Array.from(states.values()).sort((a, b) => a.state.localeCompare(b.state));
}

export function formatPopulation(population: number): string {
  if (population >= 1000000) {
    return `${(population / 1000000).toFixed(1)}M`;
  } else if (population >= 1000) {
    return `${Math.round(population / 1000)}K`;
  }
  return population.toString();
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

