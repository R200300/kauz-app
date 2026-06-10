import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        electric: '#00D9FF',
        'electric-dark': '#00A8CC',
        'dark-gray': '#1A1A1A',
        'gray-light': '#2A2A2A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
      },
      backgroundColor: {
        dark: '#000000',
        'dark-secondary': '#1A1A1A',
      },
      borderColor: {
        electric: '#00D9FF',
      },
    },
  },
  plugins: [],
};

export default config;
