export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
// This exports an object with a plugins property containing the configuration for the PostCSS plugins used in the project. When this configuration is used in a PostCSS setup (like in a postcss.config.js file), PostCSS will apply the specified plugins (Tailwind CSS and Autoprefixer) during the CSS transformation process.