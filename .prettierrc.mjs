/** @type {import("prettier").Config} */

const config = {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	useTabs: true,
	tabWidth: 2,
	semi: false,
	singleQuote: false,
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
}

export default config
