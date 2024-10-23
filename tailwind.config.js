/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				app: {
					primary: "#0a0a0a",
					secondary: "#111111",
					borderColor: "#272727",
				},
			},
			fontFamily: {
				manrope: ["Manrope"],
			},
			backgroundImage: {
				"title-span": "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
			},
		},
	},
	plugins: [],
};
