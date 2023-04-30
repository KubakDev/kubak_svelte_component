const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    colors: {
      'test': "#292e36"
    },
    extend: {
      container: {
        padding: '1rem',
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;