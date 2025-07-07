import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import Calculator from './components/Calculator';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Calculator />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;