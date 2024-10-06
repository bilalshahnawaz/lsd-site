import { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            h1: {
              color: theme('colors.foreground'),
              fontWeight: '600',
              fontSize: theme('fontSize.4xl'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.4'),
            },
            h2: {
              color: theme('colors.foreground'),
              fontWeight: '500',
              fontSize: theme('fontSize.3xl'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.3'),
            },
            h3: {
              color: theme('colors.foreground'),
              fontWeight: '500',
              fontSize: theme('fontSize.2xl'),
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.2'),
            },
            h4: {
              color: theme('colors.foreground'),
              fontWeight: '500',
              fontSize: theme('fontSize.xl'),
            },
          },
        },
      }),
    },
  },
};

export default config;