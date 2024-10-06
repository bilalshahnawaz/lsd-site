import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/blog/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: (theme) => ({
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
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.2'),
            },
            h5: {
              color: theme('colors.foreground'),
              fontWeight: '500',
              fontSize: theme('fontSize.lg'),
              marginTop: theme('spacing.3'),
              marginBottom: theme('spacing.1'),
            },
            h6: {
              color: theme('colors.foreground'),
              fontWeight: '500',
              fontSize: theme('fontSize.base'),
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.1'),
            },
            p: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
            strong: {
              color: theme('colors.foreground'),
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.500'),
              paddingLeft: theme('spacing.4'),
              fontStyle: 'italic',
            },
            ul: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
              paddingLeft: theme('spacing.5'),
            },
            ol: {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
              paddingLeft: theme('spacing.5'),
            },
            li: {
              marginTop: theme('spacing.1'),
              marginBottom: theme('spacing.1'),
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