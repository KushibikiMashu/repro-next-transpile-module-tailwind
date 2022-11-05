/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{appDir: true},
}

const tm = require('next-transpile-modules')([
  'react-use',
])

const plugins = [tm]

module.exports = plugins.reduce((config, plugin) => plugin(config), nextConfig)
