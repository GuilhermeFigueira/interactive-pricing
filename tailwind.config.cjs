/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Manrope", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				background: "url('/bg-pattern.svg')",
				circles: "url('/pattern-circles.svg')",
			},
			colors: {
				cyan: {
					soft: "hsl(174, 77%, 80%)",
					strong: "hsl(174, 86%, 45%)",
				},
				red: {
					gray: "hsl(14, 92%, 95%)",
					light: "hsl(15, 100%, 70%)",
				},
				blue: {
					pale: "hsl(226, 100%, 87%)",
					very_pale: "hsl(230, 100%, 99%)",
					light_gray_slider: "hsl(224, 65%, 95%)",
					light_gray_bg: "hsl(223, 50%, 87%)",
					gray: "hsl(225, 20%, 60%)",
					dark: "hsl(227, 35%, 25%)",
				},
			},
		},
	},
	plugins: [],
};
