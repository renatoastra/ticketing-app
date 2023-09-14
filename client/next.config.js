module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
       config.watchOptions.poll = 300;
       return config;
    }
  }
  return nextConfig
}