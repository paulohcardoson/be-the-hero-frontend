import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: "Inter",
			},
			colors: {
				primary: "#e02041",
			},
		},
	},
	plugins: [],
};

export default config;
