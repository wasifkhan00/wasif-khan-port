import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { AiProjectDescription, CryptoCurrencyProjectDescription, MessengerProjectDescription, WeatherProjectDescription } from './ProjectsDescription';
const labels:string = 'Visit Project'
export const items: Array<Project> = [
	{
		slug: 'Ai_Application',
		color: '#5e95e3',
		description: AiProjectDescription.longDescription,
		shortDescription: AiProjectDescription.shortDescription,
		links: [{ to: 'https://voicera.netlify.app/', label:labels }],
		logo: Assets.ReactJs,
		name: 'Ai Web Application',
		period: {
			from: new Date('2024-09-10'),
			to: new Date('2024 10 1')
		},
		skills: getSkills(
			'reactjs',
			'ts',
			'tailwind',
			'vite',
			`tensor`,
			'tensorFlow',
			'netlify',
			'git',
			'github'
		),
		type: 'Face Detection App',
		screenshots: [
			{
				label: 'Home Page',
				src: `${Assets.aiOne}`
			},
			{
				label: 'Live Webcam',
				src: `${Assets.aiTwo}`
			},
			{
				label: "Ai Didn't Detected Face",
				src: `${Assets.aiThree}`
			},
			{
				label: 'Ai Detected Face ',
				src: `${Assets.aiFour}`
			},
			{
				label: 'Prompt',
				src: `${Assets.aiFive}`
			}
		]
	},
	// Project 2 start
	{
		slug: 'CryptoCurrency_Application',
		color: '#5e95e3',
		description: CryptoCurrencyProjectDescription.longDescription,
		shortDescription: CryptoCurrencyProjectDescription.shortDescription,
		links: [{ to: 'https://blockchainpal.netlify.app/', label: labels }],
		logo: Assets.ReactJs,
		name: 'Cryptocurrency Application',
		period: {
			from: new Date('2022-05-25'),
			to: new Date('2022 09 13 ')
		},
		skills: getSkills(
			'reactjs',
			'css',
			'js',
			'Restfulapi',
			'postman',
			'',
			'netlify',
			'git',
			'github',
			'mongodb',
			'expressjs',
			'nodejs'
		),
		type: 'CryptoCurrency Graphical Data Interface App',
		screenshots: [
			{
				label: 'Home (Light)',
				src: `${Assets.cryptoAppOne}`
			},
			{
				label: 'Home (Dark)',
				src: `${Assets.cryptoAppTwo}`
			},
			{
				label: 'Dashboard (Light)',
				src: `${Assets.cryptoAppThree}`
			},
			{
				label: 'Dashboard (Dark)',
				src: `${Assets.cryptoAppFour}`
			},
			{
				label: "Coin's Historical Data",
				src: `${Assets.cryptoAppFive}`
			},
			{
				label: 'Dashboard When Logged In ',
				src: `${Assets.cryptoAppSix}`
			},
			{
				label: 'Footer',
				src: `${Assets.cryptoAppSeven}`
			}
		]
	},
	// third application
	{
		slug: 'Weather_Application',
		color: '#5e95e3',
		description: WeatherProjectDescription.longDescription,
		shortDescription: WeatherProjectDescription.shortDescription,
		links: [
			{ to: 'https://wasifkhan00.github.io/weather/', label: labels }
		],
		logo: Assets.JavaScript,
		name: 'Real-time Weather Application',
		period: {
			from: new Date('2022-03-25'),
			to: new Date('2022 10 11')
		},
		skills: getSkills('js', 'css', 'html', 'git', 'github', 'Restfulapi', 'postman'),
		type: 'Real-time Weather Data based on your location',
		screenshots: [
			{
				label: 'screen',
				src: `${Assets.weatherOne}`
			}
		]
	},
	// third application

	{
		slug: 'Messenger_Application',
		color: '#5e95e3',
		description:MessengerProjectDescription.longDescription,
		shortDescription:MessengerProjectDescription.shortDescription,
		links: [{ to: 'https://stewardsmessenger.netlify.app/', label: labels}],
		logo: Assets.ReactJs,
		name: 'Real-time Communication Application',
		period: {
			from: new Date('2022-11-25'),
			to: new Date('2023 04 14')
		},
		skills: getSkills('reactjs', 'Restfulapi','css','aws','expressjs','mongodb','git','github','nodejs','netlify','linux','js'),
		type: 'Real-time Messaging Application'
	},

	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: labels }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projects';
