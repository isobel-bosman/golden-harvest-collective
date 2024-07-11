export default {
  content: ['.index.html', './src/**/*.{html,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
        },
        warning: 'var(--warning)',
        error: 'var(--error)',
        success: 'var(--success)',
      },
      height: {
        page: 'calc(100vh - 50px)',
      },
      backgroundImage: {
        bees: "url('./src/assets/images/about-us/bees.jpg')",
      },
    },
  },
  plugins: [],
};
