// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			screens: {
				xs: "320px",
				// => @media (min-width: 320px) { ... }
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "1024px",
				// => @media (min-width: 1024px) { ... }

				lg: "1280px",
				// => @media (min-width: 1280px) { ... }
			},
		},
	},
	plugins: [],
}

export default config;

// module.exports = {
//     content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
// };
  
