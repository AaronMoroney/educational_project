import { createContext, Dispatch, SetStateAction } from 'react';

export interface ThemeContextType {
  themeMode: 'light' | 'dark';
  setThemeMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}

// Providing a default object with a no-op function
const defaultContextValue: ThemeContextType = {
  themeMode: 'dark',
  setThemeMode: () => {}, // No-op function
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);