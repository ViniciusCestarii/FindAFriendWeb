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
        FindAFriendDarkRed: '#e7272e',
        FindAfriendRed: '#F15156',
        FindAfriendLightRed: '#ec8588',

        FindAFirendDarkYellow: '#ebc744',
        FindAFriendYellow: '#F4D35E',
        FindAFriendLightYellow: '#f2db86',
        subTitle: '#0D3B66',
      },
      fontFamily: {
        title: 'var(--nunito)',
      },
    },
  },
  plugins: [],
}
export default config
