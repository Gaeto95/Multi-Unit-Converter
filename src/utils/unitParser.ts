// Unit definitions and conversion factors
export const TIME_UNITS = {
  s: { name: 'seconds', factor: 1 },
  sec: { name: 'seconds', factor: 1 },
  second: { name: 'seconds', factor: 1 },
  seconds: { name: 'seconds', factor: 1 },
  min: { name: 'minutes', factor: 60 },
  minute: { name: 'minutes', factor: 60 },
  minutes: { name: 'minutes', factor: 60 },
  h: { name: 'hours', factor: 3600 },
  hr: { name: 'hours', factor: 3600 },
  hour: { name: 'hours', factor: 3600 },
  hours: { name: 'hours', factor: 3600 },
  d: { name: 'days', factor: 86400 },
  day: { name: 'days', factor: 86400 },
  days: { name: 'days', factor: 86400 },
  w: { name: 'weeks', factor: 604800 },
  wk: { name: 'weeks', factor: 604800 },
  week: { name: 'weeks', factor: 604800 },
  weeks: { name: 'weeks', factor: 604800 },
  mo: { name: 'months', factor: 2629746 }, // 30.44 days
  month: { name: 'months', factor: 2629746 },
  months: { name: 'months', factor: 2629746 },
  y: { name: 'years', factor: 31556952 }, // 365.25 days
  yr: { name: 'years', factor: 31556952 },
  year: { name: 'years', factor: 31556952 },
  years: { name: 'years', factor: 31556952 },
};

export const DATA_UNITS = {
  b: { name: 'bytes', factor: 1 },
  byte: { name: 'bytes', factor: 1 },
  bytes: { name: 'bytes', factor: 1 },
  kb: { name: 'kilobytes', factor: 1024 },
  kilobyte: { name: 'kilobytes', factor: 1024 },
  kilobytes: { name: 'kilobytes', factor: 1024 },
  mb: { name: 'megabytes', factor: 1024 * 1024 },
  megabyte: { name: 'megabytes', factor: 1024 * 1024 },
  megabytes: { name: 'megabytes', factor: 1024 * 1024 },
  gb: { name: 'gigabytes', factor: 1024 * 1024 * 1024 },
  gigabyte: { name: 'gigabytes', factor: 1024 * 1024 * 1024 },
  gigabytes: { name: 'gigabytes', factor: 1024 * 1024 * 1024 },
  tb: { name: 'terabytes', factor: 1024 * 1024 * 1024 * 1024 },
  terabyte: { name: 'terabytes', factor: 1024 * 1024 * 1024 * 1024 },
  terabytes: { name: 'terabytes', factor: 1024 * 1024 * 1024 * 1024 },
  pb: { name: 'petabytes', factor: 1024 ** 5 },
  petabyte: { name: 'petabytes', factor: 1024 ** 5 },
  petabytes: { name: 'petabytes', factor: 1024 ** 5 },
};

export const DISTANCE_UNITS = {
  mm: { name: 'millimeters', factor: 0.001 },
  millimeter: { name: 'millimeters', factor: 0.001 },
  millimeters: { name: 'millimeters', factor: 0.001 },
  cm: { name: 'centimeters', factor: 0.01 },
  centimeter: { name: 'centimeters', factor: 0.01 },
  centimeters: { name: 'centimeters', factor: 0.01 },
  m: { name: 'meters', factor: 1 },
  meter: { name: 'meters', factor: 1 },
  meters: { name: 'meters', factor: 1 },
  km: { name: 'kilometers', factor: 1000 },
  kilometer: { name: 'kilometers', factor: 1000 },
  kilometers: { name: 'kilometers', factor: 1000 },
  in: { name: 'inches', factor: 0.0254 },
  inch: { name: 'inches', factor: 0.0254 },
  inches: { name: 'inches', factor: 0.0254 },
  ft: { name: 'feet', factor: 0.3048 },
  foot: { name: 'feet', factor: 0.3048 },
  feet: { name: 'feet', factor: 0.3048 },
  yd: { name: 'yards', factor: 0.9144 },
  yard: { name: 'yards', factor: 0.9144 },
  yards: { name: 'yards', factor: 0.9144 },
  mi: { name: 'miles', factor: 1609.344 },
  mile: { name: 'miles', factor: 1609.344 },
  miles: { name: 'miles', factor: 1609.344 },
};

export const TEMPERATURE_UNITS = {
  c: { name: 'celsius', factor: 1, offset: 0 },
  celsius: { name: 'celsius', factor: 1, offset: 0 },
  f: { name: 'fahrenheit', factor: 5/9, offset: -32 },
  fahrenheit: { name: 'fahrenheit', factor: 5/9, offset: -32 },
  k: { name: 'kelvin', factor: 1, offset: -273.15 },
  kelvin: { name: 'kelvin', factor: 1, offset: -273.15 },
};

export const WEIGHT_UNITS = {
  mg: { name: 'milligrams', factor: 0.001 },
  milligram: { name: 'milligrams', factor: 0.001 },
  milligrams: { name: 'milligrams', factor: 0.001 },
  g: { name: 'grams', factor: 1 },
  gram: { name: 'grams', factor: 1 },
  grams: { name: 'grams', factor: 1 },
  kg: { name: 'kilograms', factor: 1000 },
  kilogram: { name: 'kilograms', factor: 1000 },
  kilograms: { name: 'kilograms', factor: 1000 },
  oz: { name: 'ounces', factor: 28.3495 },
  ounce: { name: 'ounces', factor: 28.3495 },
  ounces: { name: 'ounces', factor: 28.3495 },
  lb: { name: 'pounds', factor: 453.592 },
  lbs: { name: 'pounds', factor: 453.592 },
  pound: { name: 'pounds', factor: 453.592 },
  pounds: { name: 'pounds', factor: 453.592 },
  t: { name: 'tonnes', factor: 1000000 },
  ton: { name: 'tonnes', factor: 1000000 },
  tonne: { name: 'tonnes', factor: 1000000 },
  tonnes: { name: 'tonnes', factor: 1000000 },
};

export const VOLUME_UNITS = {
  ml: { name: 'milliliters', factor: 0.001 },
  milliliter: { name: 'milliliters', factor: 0.001 },
  milliliters: { name: 'milliliters', factor: 0.001 },
  l: { name: 'liters', factor: 1 },
  liter: { name: 'liters', factor: 1 },
  liters: { name: 'liters', factor: 1 },
  gal: { name: 'gallons', factor: 3.78541 },
  gallon: { name: 'gallons', factor: 3.78541 },
  gallons: { name: 'gallons', factor: 3.78541 },
  qt: { name: 'quarts', factor: 0.946353 },
  quart: { name: 'quarts', factor: 0.946353 },
  quarts: { name: 'quarts', factor: 0.946353 },
  pt: { name: 'pints', factor: 0.473176 },
  pint: { name: 'pints', factor: 0.473176 },
  pints: { name: 'pints', factor: 0.473176 },
  cup: { name: 'cups', factor: 0.236588 },
  cups: { name: 'cups', factor: 0.236588 },
  floz: { name: 'fluid ounces', factor: 0.0295735 },
  'fl oz': { name: 'fluid ounces', factor: 0.0295735 },
};

export const AREA_UNITS = {
  'mm²': { name: 'square millimeters', factor: 0.000001 },
  'cm²': { name: 'square centimeters', factor: 0.0001 },
  'm²': { name: 'square meters', factor: 1 },
  'km²': { name: 'square kilometers', factor: 1000000 },
  'in²': { name: 'square inches', factor: 0.00064516 },
  'ft²': { name: 'square feet', factor: 0.092903 },
  'yd²': { name: 'square yards', factor: 0.836127 },
  'mi²': { name: 'square miles', factor: 2589988.11 },
  acre: { name: 'acres', factor: 4046.86 },
  acres: { name: 'acres', factor: 4046.86 },
  hectare: { name: 'hectares', factor: 10000 },
  hectares: { name: 'hectares', factor: 10000 },
};

export const SPEED_UNITS = {
  'km/h': { name: 'kilometers per hour', factor: 0.277778 },
  'kmh': { name: 'kilometers per hour', factor: 0.277778 },
  'mph': { name: 'miles per hour', factor: 0.44704 },
  'mi/h': { name: 'miles per hour', factor: 0.44704 },
  'ft/s': { name: 'feet per second', factor: 0.3048 },
  'fps': { name: 'feet per second', factor: 0.3048 },
  'm/s': { name: 'meters per second', factor: 1 },
  'mps': { name: 'meters per second', factor: 1 },
  knot: { name: 'knots', factor: 0.514444 },
  knots: { name: 'knots', factor: 0.514444 },
};

export type UnitType = 'time' | 'data' | 'distance' | 'temperature' | 'weight' | 'volume' | 'area' | 'speed';

export interface ParsedUnit {
  value: number;
  unit: string;
  type: UnitType;
  baseValue: number;
}

export interface UnitTotals {
  time: number;
  data: number;
  distance: number;
  temperature: number;
  weight: number;
  volume: number;
  area: number;
  speed: number;
}

/**
 * Determines the unit type for a given unit string
 * @param unit - The unit string to check
 * @returns The unit type or null if not found
 */
function getUnitType(unit: string): UnitType | null {
  const lowerUnit = unit.toLowerCase();
  if (TIME_UNITS[lowerUnit]) return 'time';
  if (DATA_UNITS[lowerUnit]) return 'data';
  if (DISTANCE_UNITS[lowerUnit]) return 'distance';
  if (TEMPERATURE_UNITS[lowerUnit]) return 'temperature';
  if (WEIGHT_UNITS[lowerUnit]) return 'weight';
  if (VOLUME_UNITS[lowerUnit]) return 'volume';
  if (AREA_UNITS[lowerUnit]) return 'area';
  if (SPEED_UNITS[lowerUnit]) return 'speed';
  return null;
}

/**
 * Gets the conversion factor for a unit
 * @param unit - The unit string
 * @returns The conversion factor
 */
function getUnitFactor(unit: string): number {
  const lowerUnit = unit.toLowerCase();
  return TIME_UNITS[lowerUnit]?.factor || 
         DATA_UNITS[lowerUnit]?.factor || 
         DISTANCE_UNITS[lowerUnit]?.factor ||
         TEMPERATURE_UNITS[lowerUnit]?.factor ||
         WEIGHT_UNITS[lowerUnit]?.factor ||
         VOLUME_UNITS[lowerUnit]?.factor ||
         AREA_UNITS[lowerUnit]?.factor ||
         SPEED_UNITS[lowerUnit]?.factor ||
         1;
}

/**
 * Converts temperature units to Celsius base
 * @param value - The temperature value
 * @param unit - The unit string
 * @returns The value in Celsius
 */
function convertTemperature(value: number, unit: string): number {
  const lowerUnit = unit.toLowerCase();
  const tempUnit = TEMPERATURE_UNITS[lowerUnit];
  if (!tempUnit) return value;
  
  if (lowerUnit === 'f' || lowerUnit === 'fahrenheit') {
    return (value - 32) * 5/9;
  } else if (lowerUnit === 'k' || lowerUnit === 'kelvin') {
    return value - 273.15;
  }
  return value; // Already Celsius
}

/**
 * Parses a mathematical expression with units
 * @param expression - The expression string to parse
 * @returns Parsed result with units, totals, and potential errors
 */
export function parseExpression(expression: string): {
  units: ParsedUnit[];
  totals: UnitTotals;
  error?: string;
} {
  try {
    // Remove extra spaces and normalize
    const cleanExpression = expression.trim().replace(/\s+/g, ' ');
    
    if (!cleanExpression) {
      return {
        units: [],
        totals: { time: 0, data: 0, distance: 0, temperature: 0, weight: 0, volume: 0, area: 0, speed: 0 }
      };
    }

    // Enhanced regex to handle more complex units including special characters
    const tokens = cleanExpression.split(/([+\-*/()])/);
    const units: ParsedUnit[] = [];
    const totals: UnitTotals = { time: 0, data: 0, distance: 0, temperature: 0, weight: 0, volume: 0, area: 0, speed: 0 };

    let currentOperator = '+';
    let lastUnitType: UnitType | null = null;
    
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i].trim();
      
      if (!token) continue;
      
      if (['+', '-', '*', '/'].includes(token)) {
        currentOperator = token;
        continue;
      }

      // Skip parentheses for now (future enhancement)
      if (['(', ')'].includes(token)) {
        continue;
      }

      // Enhanced regex to handle units with special characters
      const unitMatch = token.match(/^(\d*\.?\d+)\s*([a-zA-Z²/]+)$/);
      const scalarMatch = token.match(/^(\d*\.?\d+)$/);
      
      let match = unitMatch;
      let isScalar = false;
      
      if (!match && scalarMatch) {
        match = scalarMatch;
        isScalar = true;
      }
      
      if (!match) {
        throw new Error(`Invalid token: ${token}`);
      }

      const value = parseFloat(match[1]);
      
      if (isScalar) {
        // Handle scalar numbers for multiplication and division
        if (currentOperator === '*' || currentOperator === '/') {
          if (lastUnitType === null) {
            throw new Error('Cannot apply scalar operation without a previous unit');
          }
          
          // Apply scalar to the last unit type
          switch (currentOperator) {
            case '*':
              totals[lastUnitType] *= value;
              break;
            case '/':
              if (value === 0) throw new Error('Division by zero');
              totals[lastUnitType] /= value;
              break;
          }
          continue;
        } else {
          throw new Error('Scalar numbers can only be used with multiplication or division');
        }
      }

      const unit = match[2];
      const unitType = getUnitType(unit);
      if (!unitType) {
        throw new Error(`Unknown unit: ${unit}`);
      }
      
      lastUnitType = unitType;

      let baseValue: number;
      
      // Special handling for temperature
      if (unitType === 'temperature') {
        baseValue = convertTemperature(value, unit);
      } else {
        const factor = getUnitFactor(unit);
        baseValue = value * factor;
      }

      const parsedUnit: ParsedUnit = {
        value,
        unit,
        type: unitType,
        baseValue
      };

      units.push(parsedUnit);

      // Apply operation to totals
      switch (currentOperator) {
        case '+':
          totals[unitType] += baseValue;
          break;
        case '-':
          totals[unitType] -= baseValue;
          break;
        case '*':
          totals[unitType] *= baseValue;
          break;
        case '/':
          if (baseValue === 0) throw new Error('Division by zero');
          totals[unitType] /= baseValue;
          break;
      }
    }

    return { units, totals };
  } catch (error) {
    return {
      units: [],
      totals: { time: 0, data: 0, distance: 0, temperature: 0, weight: 0, volume: 0, area: 0, speed: 0 },
      error: error instanceof Error ? error.message : 'Invalid expression'
    };
  }
}

/**
 * Formats time in seconds to various time units
 * @param seconds - Time in seconds
 * @returns Array of formatted time strings
 */
export function formatTime(seconds: number): string[] {
  const units = [
    { name: 'years', factor: 31556952 },
    { name: 'months', factor: 2629746 },
    { name: 'weeks', factor: 604800 },
    { name: 'days', factor: 86400 },
    { name: 'hours', factor: 3600 },
    { name: 'minutes', factor: 60 },
    { name: 'seconds', factor: 1 }
  ];

  const results: string[] = [];
  let remaining = Math.abs(seconds);
  const sign = seconds < 0 ? '-' : '';

  for (const unit of units) {
    const value = remaining / unit.factor;
    if (value >= 1) {
      const formatted = value >= 1000000 ? value.toExponential(2) : value.toFixed(2);
      results.push(`${sign}${formatted} ${unit.name}`);
    }
  }

  return results.length > 0 ? results : [`${sign}0 seconds`];
}

/**
 * Formats data size in bytes to various data units
 * @param bytes - Data size in bytes
 * @returns Array of formatted data size strings
 */
export function formatData(bytes: number): string[] {
  const units = [
    { name: 'PB', factor: 1024 ** 5 },
    { name: 'TB', factor: 1024 ** 4 },
    { name: 'GB', factor: 1024 ** 3 },
    { name: 'MB', factor: 1024 ** 2 },
    { name: 'KB', factor: 1024 },
    { name: 'bytes', factor: 1 }
  ];

  const results: string[] = [];
  const absBytes = Math.abs(bytes);
  const sign = bytes < 0 ? '-' : '';

  for (const unit of units) {
    const value = absBytes / unit.factor;
    if (value >= 1) {
      const formatted = value >= 1000000 ? value.toExponential(2) : value.toFixed(2);
      results.push(`${sign}${formatted} ${unit.name}`);
    }
  }

  return results.length > 0 ? results : [`${sign}0 bytes`];
}

/**
 * Formats distance in meters to various distance units
 * @param meters - Distance in meters
 * @returns Array of formatted distance strings
 */
export function formatDistance(meters: number): string[] {
  const units = [
    { name: 'miles', factor: 1609.344 },
    { name: 'kilometers', factor: 1000 },
    { name: 'yards', factor: 0.9144 },
    { name: 'feet', factor: 0.3048 },
    { name: 'inches', factor: 0.0254 },
    { name: 'meters', factor: 1 },
    { name: 'centimeters', factor: 0.01 },
    { name: 'millimeters', factor: 0.001 }
  ];

  const results: string[] = [];
  const absMeters = Math.abs(meters);
  const sign = meters < 0 ? '-' : '';

  for (const unit of units) {
    const value = absMeters / unit.factor;
    if (value >= 1) {
      const formatted = value >= 1000000 ? value.toExponential(2) : value.toFixed(2);
      results.push(`${sign}${formatted} ${unit.name}`);
    }
  }

  return results.length > 0 ? results : [`${sign}0 meters`];
}

/**
 * Formats temperature in Celsius to various temperature units
 * @param celsius - Temperature in Celsius
 * @returns Array of formatted temperature strings
 */
export function formatTemperature(celsius: number): string[] {
  const results: string[] = [];
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  results.push(`${celsius.toFixed(2)}°C`);
  results.push(`${fahrenheit.toFixed(2)}°F`);
  results.push(`${kelvin.toFixed(2)}K`);

  return results;
}

/**
 * Formats weight in grams to various weight units
 * @param grams - Weight in grams
 * @returns Array of formatted weight strings
 */
export function formatWeight(grams: number): string[] {
  const units = [
    { name: 'tonnes', factor: 1000000 },
    { name: 'pounds', factor: 453.592 },
    { name: 'kilograms', factor: 1000 },
    { name: 'ounces', factor: 28.3495 },
    { name: 'grams', factor: 1 },
    { name: 'milligrams', factor: 0.001 }
  ];

  const results: string[] = [];
  const absGrams = Math.abs(grams);
  const sign = grams < 0 ? '-' : '';

  for (const unit of units) {
    const value = absGrams / unit.factor;
    if (value >= 1) {
      const formatted = value >= 1000000 ? value.toExponential(2) : value.toFixed(2);
      results.push(`${sign}${formatted} ${unit.name}`);
    }
  }

  return results.length > 0 ? results : [`${sign}0 grams`];
}

/**
 * Formats volume in liters to various volume units
 * @param liters - Volume in liters
 * @returns Array of formatted volume strings
 */
export function formatVolume(liters: number): string[] {
  const units = [
    { name: 'gallons', factor: 3.78541 },
    { name: 'quarts', factor: 0.946353 },
    { name: 'liters', factor: 1 },
    { name: 'pints', factor: 0.473176 },
    { name: 'cups', factor: 0.236588 },
    { name: 'fluid ounces', factor: 0.0295735 },
    { name: 'milliliters', factor: 0.001 }
  ];

  const results: string[] = [];
  const absLiters = Math.abs(liters);
  const sign = liters < 0 ? '-' : '';

  for (const unit of units) {
    const value = absLiters / unit.factor;
    if (value >= 1) {
      const formatted = value >= 1000000 ? value.toExponential(2) : value.toFixed(2);
      results.push(`${sign}${formatted} ${unit.name}`);
    }
  }

  return results.length > 0 ? results : [`${sign}0 liters`];
}

/**
 * Formats area in square meters to various area units
 * @param squareMeters - Area in square meters
 * @returns Array of formatted area strings
 */
export function formatArea(squareMeters: number): string[] {
  const units = [
    { name: 'square miles', factor: 2589988.11 },
    { name: 'square kilometers', factor: 1000000 },
    { name: 'hectares', factor: 10000 },
    { name: 'acres', factor: 4046.86 },
    { name: 'square yards', factor: 0.836127 },
    { name: 'square meters', factor: 1 },
    { name: 'square feet', factor: 0.092903 },
    { name: 'square inches', factor: 0.00064516 },
    { name: 'square centimeters', factor: 0.0001 },
    { name: 'square millimeters', factor: 0.000001 }
  ];

  const results: string[] = [];
  const absArea = Math.abs(squareMeters);
  const sign = squareMeters < 0 ? '-' : '';

  for (const unit of units) {
    const value = absArea / unit.factor;
    if (value >= 1) {
      const formatted = value >= 1000000 ? value.toExponential(2) : value.toFixed(2);
      results.push(`${sign}${formatted} ${unit.name}`);
    }
  }

  return results.length > 0 ? results : [`${sign}0 square meters`];
}

/**
 * Formats speed in meters per second to various speed units
 * @param metersPerSecond - Speed in meters per second
 * @returns Array of formatted speed strings
 */
export function formatSpeed(metersPerSecond: number): string[] {
  const units = [
    { name: 'km/h', factor: 0.277778 },
    { name: 'mph', factor: 0.44704 },
    { name: 'm/s', factor: 1 },
    { name: 'ft/s', factor: 0.3048 },
    { name: 'knots', factor: 0.514444 }
  ];

  const results: string[] = [];
  const absSpeed = Math.abs(metersPerSecond);
  const sign = metersPerSecond < 0 ? '-' : '';

  for (const unit of units) {
    const value = absSpeed / unit.factor;
    if (value >= 1) {
      const formatted = value >= 1000000 ? value.toExponential(2) : value.toFixed(2);
      results.push(`${sign}${formatted} ${unit.name}`);
    }
  }

  return results.length > 0 ? results : [`${sign}0 m/s`];
}

/**
 * Generates a shareable URL for the current calculation
 * @param expression - The expression to encode
 * @returns The shareable URL
 */
export function generateShareableUrl(expression: string): string {
  const encodedExpression = encodeURIComponent(expression);
  return `${window.location.origin}${window.location.pathname}?calc=${encodedExpression}`;
}

/**
 * Extracts calculation from URL parameters
 * @returns The decoded expression or null
 */
export function getCalculationFromUrl(): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  const calc = urlParams.get('calc');
  return calc ? decodeURIComponent(calc) : null;
}