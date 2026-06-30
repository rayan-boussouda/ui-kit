export const typography = {
  fontFamily: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", monospace',
  },
  fontSize: {
    xs: { size: '0.75rem', lineHeight: '1rem' },
    sm: { size: '0.875rem', lineHeight: '1.25rem' },
    base: { size: '1rem', lineHeight: '1.5rem' },
    lg: { size: '1.125rem', lineHeight: '1.75rem' },
    xl: { size: '1.25rem', lineHeight: '1.75rem' },
    '2xl': { size: '1.5rem', lineHeight: '2rem' },
    '3xl': { size: '1.875rem', lineHeight: '2.25rem' },
    '4xl': { size: '2.25rem', lineHeight: '2.5rem' },
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const

export type Typography = typeof typography
