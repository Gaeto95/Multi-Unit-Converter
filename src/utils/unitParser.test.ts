import { describe, it, expect } from 'vitest';
import { parseExpression, formatTime, formatData, formatDistance } from './unitParser';

describe('parseExpression', () => {
  it('should parse simple time expressions', () => {
    const result = parseExpression('1h + 30min');
    expect(result.totals.time).toBe(5400); // 1 hour + 30 minutes in seconds
    expect(result.error).toBeUndefined();
  });

  it('should parse data size expressions', () => {
    const result = parseExpression('1GB + 500MB');
    expect(result.totals.data).toBe(1598029824); // 1GB + 500MB in bytes
    expect(result.error).toBeUndefined();
  });

  it('should parse distance expressions', () => {
    const result = parseExpression('1km + 500m');
    expect(result.totals.distance).toBe(1500); // 1.5km in meters
    expect(result.error).toBeUndefined();
  });

  it('should handle mixed unit types', () => {
    const result = parseExpression('1h + 1GB + 1km');
    expect(result.totals.time).toBe(3600);
    expect(result.totals.data).toBe(1073741824);
    expect(result.totals.distance).toBe(1000);
    expect(result.error).toBeUndefined();
  });

  it('should handle subtraction', () => {
    const result = parseExpression('2h - 30min');
    expect(result.totals.time).toBe(5400); // 1.5 hours in seconds
    expect(result.error).toBeUndefined();
  });

  it('should handle multiplication', () => {
    const result = parseExpression('100MB * 2');
    expect(result.totals.data).toBe(209715200); // 200MB in bytes
    expect(result.error).toBeUndefined();
  });

  it('should handle division', () => {
    const result = parseExpression('1GB / 2');
    expect(result.totals.data).toBe(536870912); // 0.5GB in bytes
    expect(result.error).toBeUndefined();
  });

  it('should handle invalid expressions', () => {
    const result = parseExpression('invalid expression');
    expect(result.error).toBeDefined();
    expect(result.totals.time).toBe(0);
  });

  it('should handle division by zero', () => {
    const result = parseExpression('1GB / 0MB');
    expect(result.error).toBe('Division by zero');
  });

  it('should handle empty expressions', () => {
    const result = parseExpression('');
    expect(result.totals.time).toBe(0);
    expect(result.totals.data).toBe(0);
    expect(result.totals.distance).toBe(0);
    expect(result.error).toBeUndefined();
  });
});

describe('formatTime', () => {
  it('should format seconds correctly', () => {
    const result = formatTime(3661);
    expect(result).toContain('1.02 hours');
    expect(result).toContain('61.02 minutes');
  });

  it('should handle negative values', () => {
    const result = formatTime(-3600);
    expect(result[0]).toContain('-1.00 hours');
  });

  it('should handle zero', () => {
    const result = formatTime(0);
    expect(result).toEqual(['0 seconds']);
  });
});

describe('formatData', () => {
  it('should format bytes correctly', () => {
    const result = formatData(1073741824);
    expect(result).toContain('1.00 GB');
  });

  it('should handle negative values', () => {
    const result = formatData(-1024);
    expect(result[0]).toContain('-1.00 KB');
  });

  it('should handle zero', () => {
    const result = formatData(0);
    expect(result).toEqual(['0 bytes']);
  });
});

describe('formatDistance', () => {
  it('should format meters correctly', () => {
    const result = formatDistance(1609.344);
    expect(result).toContain('1.00 miles');
  });

  it('should handle negative values', () => {
    const result = formatDistance(-1000);
    expect(result[0]).toContain('-1.00 kilometers');
  });

  it('should handle zero', () => {
    const result = formatDistance(0);
    expect(result).toEqual(['0 meters']);
  });
});