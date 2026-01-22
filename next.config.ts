import type { NextConfig } from 'next'
import path from 'path'

const isStandalone = process.env.NEXT_OUTPUT_STANDALONE === 'true'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: isStandalone ? 'standalone' : undefined,
  serverExternalPackages: ['pino', 'pino-pretty'],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  turbopack: {
    rules: {
      // one way to not use all svgs as RC is to add prefix: *.inline.svg
      '*.svg': {
        loaders: [{ loader: '@svgr/webpack', options: { svgo: false } }],
        as: '*.js',
      },
    },
  },
  // for build until turbopack is stable
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
      exclude: path.resolve(__dirname, 'src/app/icon0.svg'),
    })
    return config
  },
  // webpack(config) {
  //   // Grab the existing rule that handles SVG imports
  //   const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

  //   config.module.rules.push(
  //     // Reapply the existing rule, but only for svg imports ending in ?url
  //     {
  //       ...fileLoaderRule,
  //       test: /\.svg$/i,
  //       resourceQuery: /url/, // *.svg?url
  //     },
  //     // Convert all other *.svg imports to React components
  //     {
  //       test: /\.svg$/i,
  //       issuer: fileLoaderRule.issuer,
  //       resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
  //       use: [
  //         {
  //           loader: '@svgr/webpack',
  //           options: {
  //             svgo: false,
  //           },
  //         },
  //       ],
  //     }
  //   )

  //   // Modify the file loader rule to ignore *.svg, since we have it handled now.
  //   fileLoaderRule.exclude = /\.svg$/i

  //   return config
  // },
}

export default nextConfig
