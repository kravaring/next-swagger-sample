module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.resolve = {
      ...config.resolve,
      fallback: {
          "fs": false,
          "path": require.resolve( 'path-browserify' )
      },
    };
    config.resolve.alias.https = "https-browserify";
    config.resolve.alias.http = "http-browserify";
    return config;
  },
}
