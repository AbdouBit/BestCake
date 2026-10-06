/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-warm': 'var(--color-surface-warm)',
        cream: 'var(--color-cream)',
        chocolate: 'var(--color-chocolate)',
        'chocolate-light': 'var(--color-chocolate-light)',
        caramel: 'var(--color-caramel)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        honey: 'var(--color-honey)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(43, 24, 16, 0.05)',
        'warm-md': '0 8px 24px -4px rgba(43, 24, 16, 0.08)',
        'warm-lg': '0 16px 36px -6px rgba(43, 24, 16, 0.12)',
        'warm-xl': '0 24px 48px -12px rgba(43, 24, 16, 0.16)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
