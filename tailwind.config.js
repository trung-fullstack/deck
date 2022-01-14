module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        deck: '1200px',
        card: '192px',
        'deck-sm': '360px',
        'card-sm': '103px',
      },
      height: {
        deck: '500px',
        card: '264px',
        'deck-sm': '400px',
        'card-sm': '140px',
      },
      colors: {
        red: '#F64242',
        yellow: '#EFCE4B',
        'yellow-light': '#FFF48C',
        orange: '#ED973E',
      },
    },
  },
  plugins: [],
};
