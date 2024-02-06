// next.config.mjs
const nextConfig = {
    // Add the following function to generate static export parameters
    generateStaticParams: async () => {
      // Define your static paths here
      const paths = {
        '/': { page: '/' },
        // Add more routes as needed
      };

      return paths;
    },
  };

next export { nextConfig };
