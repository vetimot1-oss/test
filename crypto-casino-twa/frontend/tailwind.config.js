export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#486dff',
        accent: '#4897ff',
        dark: '#0c0e18',
        card: '#141e32',
        muted: '#525a70',
      },
      backdropBlur: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
