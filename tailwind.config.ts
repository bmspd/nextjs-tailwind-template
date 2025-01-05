import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': 'var(--font-nunito)',
      },
    },
  },
  plugins: [],
}

export default config
