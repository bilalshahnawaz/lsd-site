import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
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
            p: {
              color: theme('colors.foreground'),
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
            },
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            blockquote: {
              color: theme('colors.foreground'),
              borderLeftColor: theme('colors.blue.500'),
              fontStyle: 'italic',
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.800'),
              padding: theme('spacing.1'),
              borderRadius: theme('borderRadius.md'),
            },
            pre: {
              color: theme('colors.foreground'),
              backgroundColor: theme('colors.gray.800'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.md'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;