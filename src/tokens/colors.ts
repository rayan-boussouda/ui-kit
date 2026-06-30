export const colors = {
  brand: {
    50: 'oklch(0.97 0.01 260)',
    100: 'oklch(0.93 0.04 260)',
    200: 'oklch(0.87 0.07 260)',
    300: 'oklch(0.78 0.12 260)',
    400: 'oklch(0.68 0.18 260)',
    500: 'oklch(0.58 0.22 260)',
    600: 'oklch(0.49 0.23 260)',
    700: 'oklch(0.41 0.21 260)',
    800: 'oklch(0.33 0.17 260)',
    900: 'oklch(0.25 0.12 260)',
  },
  neutral: {
    50: 'oklch(0.985 0 0)',
    100: 'oklch(0.96 0 0)',
    200: 'oklch(0.92 0 0)',
    300: 'oklch(0.87 0 0)',
    400: 'oklch(0.72 0 0)',
    500: 'oklch(0.56 0 0)',
    600: 'oklch(0.44 0 0)',
    700: 'oklch(0.36 0 0)',
    800: 'oklch(0.27 0 0)',
    900: 'oklch(0.20 0 0)',
    950: 'oklch(0.13 0 0)',
  },
  destructive: {
    50: 'oklch(0.97 0.01 27)',
    500: 'oklch(0.63 0.24 27)',
    600: 'oklch(0.52 0.24 27)',
    700: 'oklch(0.43 0.22 27)',
  },
  success: {
    500: 'oklch(0.65 0.19 145)',
    600: 'oklch(0.55 0.19 145)',
  },
  warning: {
    400: 'oklch(0.84 0.18 75)',
    500: 'oklch(0.78 0.17 75)',
  },
} as const

export type Colors = typeof colors
