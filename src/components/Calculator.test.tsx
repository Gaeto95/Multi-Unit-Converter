import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../contexts/ThemeContext';
import Calculator from './Calculator';

// Mock URL methods
Object.assign(window, {
  location: {
    ...window.location,
    origin: 'http://localhost:3000',
    pathname: '/',
  },
});

const renderCalculator = () => {
  return render(
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
};

describe('Calculator Component', () => {
  beforeEach(() => {
    // Mock clipboard API with proper spy
    vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the main heading', () => {
    renderCalculator();
    expect(screen.getByText('Universal Unit Calculator')).toBeInTheDocument();
  });

  it('renders the input field', () => {
    renderCalculator();
    expect(screen.getByPlaceholderText(/e.g., 1h \+ 30min/)).toBeInTheDocument();
  });

  it('displays example expressions', () => {
    renderCalculator();
    expect(screen.getByText('1h + 30min + 45s')).toBeInTheDocument();
    expect(screen.getByText('2GB + 500MB + 1024KB')).toBeInTheDocument();
  });

  it('calculates time expressions correctly', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const input = screen.getByPlaceholderText(/e.g., 1h \+ 30min/);
    await user.type(input, '1h + 30min');
    
    await waitFor(() => {
      expect(screen.getByText('Time')).toBeInTheDocument();
    });
  });

  it('shows error for invalid expressions', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const input = screen.getByPlaceholderText(/e.g., 1h \+ 30min/);
    await user.type(input, 'invalid expression');
    
    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  it('clears input when clear button is clicked', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const input = screen.getByPlaceholderText(/e.g., 1h \+ 30min/);
    await user.type(input, '1h + 30min');
    
    const clearButton = screen.getByTitle('Clear expression (Ctrl+K)');
    await user.click(clearButton);
    
    expect(input).toHaveValue('');
  });

  it('loads example expression when clicked', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const exampleButton = screen.getByText('1h + 30min + 45s');
    await user.click(exampleButton);
    
    const input = screen.getByPlaceholderText(/e.g., 1h \+ 30min/);
    expect(input).toHaveValue('1h + 30min + 45s');
  });

  it('toggles theme when theme button is clicked', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const themeButton = screen.getByTitle('Toggle theme (Ctrl+D)');
    await user.click(themeButton);
    
    // Check if dark mode class is applied to document
    expect(document.documentElement).toHaveClass('dark');
  });

  it('shows history panel when history button is clicked', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const historyButton = screen.getByTitle('View calculation history (Ctrl+H)');
    await user.click(historyButton);
    
    expect(screen.getByText('Calculation History')).toBeInTheDocument();
  });

  it('shows keyboard shortcuts when shortcuts button is clicked', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const shortcutsButton = screen.getByTitle('Keyboard shortcuts (Ctrl+/)');
    await user.click(shortcutsButton);
    
    expect(screen.getByText('Keyboard Shortcuts')).toBeInTheDocument();
  });

  it('handles keyboard shortcuts', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const input = screen.getByPlaceholderText(/e.g., 1h \+ 30min/);
    await user.type(input, '1h + 30min');
    
    // Test Ctrl+K to clear
    await user.keyboard('{Control>}k{/Control}');
    expect(input).toHaveValue('');
  });

  it('copies result to clipboard when copy button is clicked', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const input = screen.getByPlaceholderText(/e.g., 1h \+ 30min/);
    await user.type(input, '1h + 30min');
    
    await waitFor(() => {
      const copyButton = screen.getAllByTitle('Copy to clipboard')[0];
      return user.click(copyButton);
    });
    
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  });

  it('handles mixed unit types correctly', async () => {
    const user = userEvent.setup();
    renderCalculator();
    
    const input = screen.getByPlaceholderText(/e.g., 1h \+ 30min/);
    await user.type(input, '1h + 1GB + 1km');
    
    await waitFor(() => {
      expect(screen.getByText('Time')).toBeInTheDocument();
      expect(screen.getByText('Data Size')).toBeInTheDocument();
      expect(screen.getByText('Distance')).toBeInTheDocument();
    });
  });
});