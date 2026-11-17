/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg:         'rgb(var(--bg) / <alpha-value>)',
        surface:    'rgb(var(--surface) / <alpha-value>)',
        elevated:   'rgb(var(--elevated) / <alpha-value>)',
        fg:         'rgb(var(--fg) / <alpha-value>)',
        muted:      'rgb(var(--muted) / <alpha-value>)',
        subtle:     'rgb(var(--subtle) / <alpha-value>)',
        line:       'rgb(var(--line) / <alpha-value>)',
        accent:     'rgb(var(--accent) / <alpha-value>)',
        onaccent:   'rgb(var(--on-accent) / <alpha-value>)',
        emerald:    'rgb(var(--emerald) / <alpha-value>)',
        cyan:       'rgb(var(--cyan) / <alpha-value>)',
        amber:      'rgb(var(--amber) / <alpha-value>)',
        rose:       'rgb(var(--rose) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}