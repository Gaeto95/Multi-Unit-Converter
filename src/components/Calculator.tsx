import React, { useState, useEffect } from 'react';
import { 
  Calculator as CalculatorIcon, 
  Copy, 
  Check, 
  Clock, 
  HardDrive, 
  Ruler, 
  Thermometer,
  Weight,
  Beaker,
  Square,
  Zap,
  Moon,
  Sun,
  History,
  Share2,
  Download,
  Trash2,
  Keyboard
} from 'lucide-react';
import { 
  parseExpression, 
  formatTime, 
  formatData, 
  formatDistance,
  formatTemperature,
  formatWeight,
  formatVolume,
  formatArea,
  formatSpeed,
  generateShareableUrl,
  getCalculationFromUrl
} from '../utils/unitParser';
import { useDebounce } from '../hooks/useDebounce';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import { useTheme } from '../contexts/ThemeContext';

const EXAMPLE_EXPRESSIONS = [
  "1h + 30min + 45s",
  "2GB + 500MB + 1024KB",
  "5km + 2mi + 100m",
  "1d + 8h - 30min",
  "100MB * 2 + 1GB",
  "10ft + 5in + 2m",
  "1y + 6mo + 2w + 3d",
  "100°C + 32°F",
  "5kg + 2lb + 100g",
  "2L + 1gal + 500ml",
  "100m² + 50ft²",
  "60mph + 30km/h"
];

interface CalculationHistory {
  id: string;
  expression: string;
  timestamp: number;
}

/**
 * Main calculator component with comprehensive unit conversion capabilities
 */
export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useLocalStorage<CalculationHistory[]>('calculation-history', []);
  const [showHistory, setShowHistory] = useState(false);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});
  const { theme, toggleTheme } = useTheme();
  
  // Debounce expression parsing for performance
  const debouncedExpression = useDebounce(expression, 300);
  const result = parseExpression(debouncedExpression);

  // Load calculation from URL on mount
  useEffect(() => {
    const urlCalc = getCalculationFromUrl();
    if (urlCalc) {
      setExpression(urlCalc);
      // Clean URL after loading
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Save to history when expression changes and is valid
  useEffect(() => {
    if (debouncedExpression && !result.error && 
        (result.totals.time !== 0 || result.totals.data !== 0 || result.totals.distance !== 0 ||
         result.totals.temperature !== 0 || result.totals.weight !== 0 || result.totals.volume !== 0 ||
         result.totals.area !== 0 || result.totals.speed !== 0)) {
      
      const newEntry: CalculationHistory = {
        id: Date.now().toString(),
        expression: debouncedExpression,
        timestamp: Date.now()
      };
      
      setHistory(prev => {
        const filtered = prev.filter(item => item.expression !== debouncedExpression);
        return [newEntry, ...filtered].slice(0, 50); // Keep last 50 calculations
      });
    }
  }, [debouncedExpression, result, setHistory]);

  // Keyboard shortcuts
  useKeyboardShortcuts([
    {
      key: 'k',
      ctrlKey: true,
      callback: () => setExpression('')
    },
    {
      key: 'h',
      ctrlKey: true,
      callback: () => setShowHistory(!showHistory)
    },
    {
      key: '/',
      ctrlKey: true,
      callback: () => setShowKeyboardShortcuts(!showKeyboardShortcuts)
    },
    {
      key: 'd',
      ctrlKey: true,
      callback: () => toggleTheme()
    }
  ]);

  const handleExampleClick = (example: string) => {
    setExpression(example);
  };

  const handleHistoryClick = (historyExpression: string) => {
    setExpression(historyExpression);
    setShowHistory(false);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareCalculation = async () => {
    if (!expression) return;
    
    const shareUrl = generateShareableUrl(expression);
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Unit Calculator Result',
          text: `Check out this calculation: ${expression}`,
          url: shareUrl
        });
      } else {
        await copyToClipboard(shareUrl, 'share-url');
      }
    } catch (err) {
      console.error('Failed to share:', err);
    }
  };

  const exportResults = () => {
    if (!expression || result.error) return;

    const data = {
      expression,
      timestamp: new Date().toISOString(),
      results: {
        time: result.totals.time !== 0 ? formatTime(result.totals.time) : null,
        data: result.totals.data !== 0 ? formatData(result.totals.data) : null,
        distance: result.totals.distance !== 0 ? formatDistance(result.totals.distance) : null,
        temperature: result.totals.temperature !== 0 ? formatTemperature(result.totals.temperature) : null,
        weight: result.totals.weight !== 0 ? formatWeight(result.totals.weight) : null,
        volume: result.totals.volume !== 0 ? formatVolume(result.totals.volume) : null,
        area: result.totals.area !== 0 ? formatArea(result.totals.area) : null,
        speed: result.totals.speed !== 0 ? formatSpeed(result.totals.speed) : null,
      }
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `calculation-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const CopyButton = ({ text, copyKey }: { text: string; copyKey: string }) => (
    <button
      onClick={() => copyToClipboard(text, copyKey)}
      className="ml-2 p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
      title="Copy to clipboard"
      aria-label="Copy to clipboard"
    >
      {copiedStates[copyKey] ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );

  const ResultSection = ({ 
    title, 
    icon: Icon, 
    value, 
    formatter, 
    bgColor 
  }: { 
    title: string; 
    icon: any; 
    value: number; 
    formatter: (val: number) => string[];
    bgColor: string;
  }) => {
    if (value === 0) return null;

    const formattedValues = formatter(value);
    
    return (
      <div className={`rounded-lg p-6 ${bgColor} border border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        </div>
        <div className="space-y-2">
          {formattedValues.map((formatted, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300 font-medium">{formatted}</span>
              <CopyButton text={formatted} copyKey={`${title}-${index}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalculatorIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Universal Unit Calculator</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Combine and convert time, data, distance, temperature, weight, volume, area, and speed units with arithmetic operations. 
            Type expressions like "1h + 30min + 2GB + 500MB + 100°C" to get instant calculations across all unit types.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              title="View calculation history (Ctrl+H)"
            >
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
            </button>
            <button
              onClick={shareCalculation}
              disabled={!expression}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Share calculation"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>
            <button
              onClick={exportResults}
              disabled={!expression || !!result.error}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              title="Export results as JSON"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              title="Keyboard shortcuts (Ctrl+/)"
            >
              <Keyboard className="w-4 h-4" />
            </button>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              title="Toggle theme (Ctrl+D)"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <label htmlFor="expression" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enter your expression
          </label>
          <div className="relative">
            <input
              id="expression"
              type="text"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              placeholder="e.g., 1h + 30min + 2GB + 500MB + 100°C + 5kg"
              className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              aria-describedby={result.error ? "expression-error" : undefined}
            />
            {expression && (
              <button
                onClick={() => setExpression('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                title="Clear expression (Ctrl+K)"
                aria-label="Clear expression"
              >
                ×
              </button>
            )}
          </div>
          
          {result.error && (
            <div id="expression-error" className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg" role="alert">
              <p className="text-red-700 dark:text-red-400 text-sm">{result.error}</p>
            </div>
          )}
        </div>

        {/* History Panel */}
        {showHistory && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Calculation History</h2>
              <button
                onClick={clearHistory}
                className="flex items-center gap-2 px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
            </div>
            <div className="max-h-60 overflow-y-auto space-y-2">
              {history.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">No calculations yet</p>
              ) : (
                history.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleHistoryClick(item.expression)}
                    className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <div className="font-mono text-sm text-gray-700 dark:text-gray-300">{item.expression}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(item.timestamp).toLocaleString()}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        )}

        {/* Keyboard Shortcuts Panel */}
        {showKeyboardShortcuts && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Keyboard Shortcuts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Clear expression</span>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">Ctrl+K</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Toggle history</span>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">Ctrl+H</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Toggle theme</span>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">Ctrl+D</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Show shortcuts</span>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">Ctrl+/</kbd>
              </div>
            </div>
          </div>
        )}

        {/* Example Expressions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Example Expressions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXAMPLE_EXPRESSIONS.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(example)}
                className="p-3 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors border border-gray-200 dark:border-gray-600"
              >
                <code className="text-sm text-gray-700 dark:text-gray-300">{example}</code>
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {(result.totals.time !== 0 || result.totals.data !== 0 || result.totals.distance !== 0 || 
          result.totals.temperature !== 0 || result.totals.weight !== 0 || result.totals.volume !== 0 ||
          result.totals.area !== 0 || result.totals.speed !== 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            <ResultSection
              title="Time"
              icon={Clock}
              value={result.totals.time}
              formatter={formatTime}
              bgColor="bg-blue-50 dark:bg-blue-900/20"
            />
            <ResultSection
              title="Data Size"
              icon={HardDrive}
              value={result.totals.data}
              formatter={formatData}
              bgColor="bg-green-50 dark:bg-green-900/20"
            />
            <ResultSection
              title="Distance"
              icon={Ruler}
              value={result.totals.distance}
              formatter={formatDistance}
              bgColor="bg-purple-50 dark:bg-purple-900/20"
            />
            <ResultSection
              title="Temperature"
              icon={Thermometer}
              value={result.totals.temperature}
              formatter={formatTemperature}
              bgColor="bg-red-50 dark:bg-red-900/20"
            />
            <ResultSection
              title="Weight"
              icon={Weight}
              value={result.totals.weight}
              formatter={formatWeight}
              bgColor="bg-yellow-50 dark:bg-yellow-900/20"
            />
            <ResultSection
              title="Volume"
              icon={Beaker}
              value={result.totals.volume}
              formatter={formatVolume}
              bgColor="bg-cyan-50 dark:bg-cyan-900/20"
            />
            <ResultSection
              title="Area"
              icon={Square}
              value={result.totals.area}
              formatter={formatArea}
              bgColor="bg-pink-50 dark:bg-pink-900/20"
            />
            <ResultSection
              title="Speed"
              icon={Zap}
              value={result.totals.speed}
              formatter={formatSpeed}
              bgColor="bg-orange-50 dark:bg-orange-900/20"
            />
          </div>
        )}

        {/* Unit Reference */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Supported Units</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time Units
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>s, sec, seconds</div>
                <div>min, minutes</div>
                <div>h, hr, hours</div>
                <div>d, day, days</div>
                <div>w, wk, weeks</div>
                <div>mo, months</div>
                <div>y, yr, years</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <HardDrive className="w-4 h-4" />
                Data Units
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>B, bytes</div>
                <div>KB, kilobytes</div>
                <div>MB, megabytes</div>
                <div>GB, gigabytes</div>
                <div>TB, terabytes</div>
                <div>PB, petabytes</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                Distance Units
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>mm, cm, m, km</div>
                <div>in, ft, yd, mi</div>
                <div>millimeters, centimeters</div>
                <div>meters, kilometers</div>
                <div>inches, feet, yards, miles</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Thermometer className="w-4 h-4" />
                Temperature Units
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>°C, celsius</div>
                <div>°F, fahrenheit</div>
                <div>K, kelvin</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Weight className="w-4 h-4" />
                Weight Units
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>mg, g, kg, t</div>
                <div>oz, lb, lbs</div>
                <div>milligrams, grams</div>
                <div>kilograms, tonnes</div>
                <div>ounces, pounds</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Beaker className="w-4 h-4" />
                Volume Units
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>ml, l, liters</div>
                <div>gal, qt, pt, cups</div>
                <div>fl oz, fluid ounces</div>
                <div>gallons, quarts, pints</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Square className="w-4 h-4" />
                Area Units
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>mm², cm², m², km²</div>
                <div>in², ft², yd², mi²</div>
                <div>acres, hectares</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Speed Units
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>m/s, mps</div>
                <div>km/h, kmh</div>
                <div>mph, mi/h</div>
                <div>ft/s, fps</div>
                <div>knots</div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Tips:</strong> Use +, -, *, / operators to perform calculations. 
              Mix different unit types in the same expression for comprehensive results.
              Use keyboard shortcuts for faster navigation and access the calculation history to revisit previous calculations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}