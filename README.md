<div align="center">
  <h1>🧮 Universal Unit Calculator</h1>
  
  <p>A comprehensive web application for converting and calculating multiple unit types including time, data size, distance, temperature, weight, volume, area, and speed with arithmetic operations.</p>
  
  <p>
    <a href="https://frolicking-syrniki-e0f5b8.netlify.app" target="_blank">
      <img src="https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-blue?style=for-the-badge" alt="Live Demo" />
    </a>
  </p>
</div>

---

## Features

### 🧮 Multi-Unit Calculations
- **Time Units**: seconds, minutes, hours, days, weeks, months, years
- **Data Units**: bytes, KB, MB, GB, TB, PB
- **Distance Units**: mm, cm, m, km, in, ft, yd, mi
- **Temperature Units**: Celsius, Fahrenheit, Kelvin
- **Weight Units**: mg, g, kg, tonnes, oz, lb
- **Volume Units**: ml, L, gal, qt, pt, cups, fl oz
- **Area Units**: mm², cm², m², km², in², ft², yd², mi², acres, hectares
- **Speed Units**: m/s, km/h, mph, ft/s, knots

### ⚡ Advanced Features
- **Real-time Calculation**: Debounced parsing for optimal performance
- **Arithmetic Operations**: Support for +, -, *, / operations
- **Mixed Unit Types**: Combine different unit categories in one expression
- **Scientific Notation**: Handle very large/small numbers automatically
- **Error Handling**: Comprehensive error messages and graceful degradation

### 🎨 User Experience
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Keyboard Shortcuts**: Quick access to common functions
- **Calculation History**: Automatic saving of recent calculations
- **Copy Results**: One-click copying of any result
- **Share Calculations**: Generate shareable URLs for calculations
- **Export Results**: Download results as JSON files

### ♿ Accessibility
- **ARIA Labels**: Comprehensive screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **High Contrast**: Sufficient color contrast ratios
- **Focus Management**: Clear focus indicators
- **Error Announcements**: Screen reader error notifications

### 🔧 Technical Features
- **TypeScript**: Full type safety and IntelliSense support
- **React Hooks**: Modern React patterns with custom hooks
- **Local Storage**: Persistent settings and history
- **Error Boundaries**: Graceful error handling and recovery
- **Unit Tests**: Comprehensive test coverage with Vitest
- **Performance Optimized**: Debounced inputs and efficient rendering

## Usage Examples

```
1h + 30min + 45s                    // Time calculation
2GB + 500MB + 1024KB                // Data size calculation
5km + 2mi + 100m                    // Distance calculation
100°C + 32°F                        // Temperature calculation
5kg + 2lb + 100g                    // Weight calculation
2L + 1gal + 500ml                   // Volume calculation
100m² + 50ft²                       // Area calculation
60mph + 30km/h                      // Speed calculation
1d + 8h - 30min                     // Subtraction
100MB * 2 + 1GB                     // Multiplication and addition
```

## Keyboard Shortcuts

- `Ctrl+K` - Clear expression
- `Ctrl+H` - Toggle calculation history
- `Ctrl+D` - Toggle dark/light mode
- `Ctrl+/` - Show keyboard shortcuts

## Installation

```bash
npm install
npm run dev
```

## Testing

```bash
npm test          # Run tests
npm run test:ui   # Run tests with UI
```

## Building

```bash
npm run build     # Build for production
npm run preview   # Preview production build
```

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with ES2020 support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Acknowledgments

- Built with React, TypeScript, and Tailwind CSS
- Icons provided by Lucide React
- Testing with Vitest and Testing Library