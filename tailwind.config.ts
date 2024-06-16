import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default <Partial<Config>>{
  plugins: [typography()],
  darkMode: 'class',
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace'],
      'sans-serif': ['Geist', 'Inter', 'sans-serif'],
    },
  },
};
