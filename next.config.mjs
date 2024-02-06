// next.config.mjs
const nextConfig = {
    // Add the following line to enable static HTML export
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // Add more routes as needed
      };
    },
  };

export default nextConfig;
