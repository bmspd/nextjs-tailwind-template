import postcssOklabFunction from '@csstools/postcss-oklab-function';
import postcssNesting from 'postcss-nesting';
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-nesting': postcssNesting(),
    '@csstools/postcss-oklab-function': postcssOklabFunction(),
    '@tailwindcss/postcss': {},
  },
};

export default config;