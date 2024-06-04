/** @type {import('tailwindcss').Config} */
export default {
  content: ['*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dracula", "cmyk"],
  },
  safelist: [
    'badge',
    'badge-success',
    'badge-warning',
    'badge-error',
    'badge-sm',
    'alert',
    'alert-success',
    'alert-warning',
    'alert-error',
    'text-success',
    'mask',
    'mask-squircle',
    'drawer-side',
    'drawer-overlay',
    'menu'
  ]
}

