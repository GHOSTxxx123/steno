import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',
			"./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    		"./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",		
		],
	theme: {
		extend: {
			keyframes: {
				wiggleleft: {
				  '0%': { transform: 'rotate(0deg)' },
				  '100%': { transform: 'rotate(360deg)' },
				},
				wiggleright: {
					'100%': { transform: 'rotate(0deg)' },
					'0%': { transform: 'rotate(360deg)' },
				  }
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animation: {
				'spin-slow': 'wiggle 50s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
export default config;
