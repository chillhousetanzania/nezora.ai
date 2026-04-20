/**
 * Design Token TypeScript Types
 * 
 * This file defines TypeScript interfaces for all design tokens used in the Nezora AI redesign.
 * These types provide type safety and autocomplete when using design tokens throughout the application.
 * 
 * Requirements: 1.7, 19.6
 */

/**
 * Color scale with shades from 50 (lightest) to 900 (darkest)
 */
export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

/**
 * Complete color palette including neutral, primary, secondary, and semantic colors
 */
export interface ColorPalette {
  neutral: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  success: {
    50: string;
    500: string;
    600: string;
  };
  warning: {
    50: string;
    500: string;
    600: string;
  };
  error: {
    50: string;
    500: string;
    600: string;
  };
}

/**
 * Spacing scale based on 4px increments
 */
export interface SpacingScale {
  0: string;   // 0px
  1: string;   // 4px
  2: string;   // 8px
  3: string;   // 12px
  4: string;   // 16px
  5: string;   // 20px
  6: string;   // 24px
  8: string;   // 32px
  10: string;  // 40px
  12: string;  // 48px
  16: string;  // 64px
  20: string;  // 80px
  24: string;  // 96px
}

/**
 * Typography system including font families, sizes, and weights
 */
export interface TypographySystem {
  fontFamily: {
    body: string[];
    heading: string[];
  };
  fontSize: {
    xs: [string, { lineHeight: string; letterSpacing: string }];
    sm: [string, { lineHeight: string; letterSpacing: string }];
    base: [string, { lineHeight: string; letterSpacing: string }];
    lg: [string, { lineHeight: string; letterSpacing: string }];
    xl: [string, { lineHeight: string; letterSpacing: string }];
    '2xl': [string, { lineHeight: string; letterSpacing: string }];
    '3xl': [string, { lineHeight: string; letterSpacing: string }];
    '4xl': [string, { lineHeight: string; letterSpacing: string }];
    '5xl': [string, { lineHeight: string; letterSpacing: string }];
  };
  fontWeight: {
    normal: string;
    medium: string;
    semibold: string;
  };
}

/**
 * Shadow system for creating depth with soft shadows
 */
export interface ShadowSystem {
  'soft-xs': string;
  'soft-sm': string;
  'soft-md': string;
  'soft-lg': string;
  'soft-xl': string;
  'glow-primary': string;
  'glow-secondary': string;
}

/**
 * Border radius scale for rounded corners
 */
export interface RadiusScale {
  sm: string;    // 8px
  md: string;    // 12px
  lg: string;    // 16px
  xl: string;    // 20px
  '2xl': string; // 24px
  full: string;  // 9999px
}

/**
 * Transition presets for animations and micro-interactions
 */
export interface TransitionPresets {
  duration: {
    fast: string;    // 100ms
    normal: string;  // 200ms
    slow: string;    // 300ms
    slower: string;  // 400ms
  };
  timing: {
    'ease-out': string;
    'ease-in-out': string;
    bounce: string;
  };
}

/**
 * Complete theme configuration combining all design tokens
 */
export interface ThemeConfig {
  colors: ColorPalette;
  spacing: SpacingScale;
  typography: TypographySystem;
  shadows: ShadowSystem;
  radii: RadiusScale;
  transitions: TransitionPresets;
}
