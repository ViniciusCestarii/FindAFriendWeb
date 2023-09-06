import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        FindAfriendRed: '#F15156',
        FindAfriendLightRed: '#ec8588',
      },
      fontFamily: {
        title: 'var(--nunito)',
      },
    },
  },
  plugins: [],
}
export default config
