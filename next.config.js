// next.config.js
// const nextConfig = {
//   output: 'export',
//   // Add the following function to generate static export parameters
//   async generateStaticParams() {
//     // Define your static paths here
//     const paths = {
//       '/': { page: '/' },
//       // Add more routes as needed
//     };

//     return paths;
//   },
// };

// module.exports = nextConfig;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig
