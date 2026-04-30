import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'fy-amber':  'var(--amber)',
        'fy-fire':   'var(--fire)',
        'fy-bg':     'var(--bg)',
        'fy-surface':'var(--surface)',
        'fy-text':   'var(--text)',
        'fy-muted':  'var(--muted)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
