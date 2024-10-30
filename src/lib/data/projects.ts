import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import {
	AiProjectDescription,
	CryptoCurrencyProjectDescription,
	MessengerProjectDescription,
	restfulApi,
	WeatherProjectDescription
} from './ProjectsDescription';
const labels: string = 'Visit Project';
export const items: Array<Project> = [
	{
		slug: 'Ai_Application',
		color: '#5e95e3',
		description: AiProjectDescription.longDescription,
		shortDescription: AiProjectDescription.shortDescription,
		links: [{ to: 'https://voicera.netlify.app/', label: labels }],
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
		links: [{ to: 'https://wasifkhan00.github.io/weather/', label: labels }],
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
				label: 'Home',
				src: `${Assets.weatherOne}`
			},
			{
				label: 'Hourly Weather Forecast',
				src: `${Assets.weatherTwo}`
			},
			{
				label: 'Hourly Forecast Cards',
				src: `${Assets.weatherThree}`
			},
			{
				label: 'Footer',
				src: `${Assets.weatherFour}`
			},
			{
				label: 'Weekly Forecast',
				src: `${Assets.weatherFive}`
			},
			{
				label: 'Weekly Forecast Cards',
				src: `${Assets.weatherSix}`
			}
		]
	},
	// third application

	{
		slug: 'Messenger_Application',
		color: '#5e95e3',
		description: MessengerProjectDescription.longDescription,
		shortDescription: MessengerProjectDescription.shortDescription,
		links: [{ to: 'https://communicado.netlify.app/', label: labels }],
		logo: Assets.ReactJs,
		name: 'Real-time Communication Application',
		period: {
			from: new Date('2022-11-25'),
			to: new Date('2023 04 14')
		},
		skills: getSkills(
			'reactjs',
			'Restfulapi',
			'css',
			'aws',
			'expressjs',
			'mongodb',
			'git',
			'github',
			'nodejs',
			'netlify',
			'linux',
			'js'
		),
		type: 'Real-time Messaging Application',
		screenshots: [
			{
				label: 'Login UI',
				src: `${Assets.chatAppOne}`
			},
			{
				label: 'Login Validation',
				src: `${Assets.chatAppTwo}`
			},
			{
				label: 'Sign Up',
				src: `${Assets.chatAppThree}`
			},
			{
				label: 'New User',
				src: `${Assets.chatAppFour}`
			},
			{
				label: 'Creating Group',
				src: `${Assets.chatAppFive}`
			},
			{
				label: 'Adding Friends in Group',
				src: `${Assets.chatAppSix}`
			},
			{
				label: 'Additional Friends Validation',
				src: `${Assets.chatAppSeven}`
			},
			{
				label: 'Selected Friends',
				src: `${Assets.chatAppEight}`
			},
			{
				label: 'New Chat',
				src: `${Assets.chatAppNine}`
			},
			{
				label: 'Sending Image',
				src: `${Assets.chatAppTen}`
			},
			{
				label: 'Discussions In Chats',
				src: `${Assets.chatAppEleven}`
			},
			{
				label: 'Fetching Missed Messages',
				src: `${Assets.chatAppTwelve}`
			},
			{
				label: 'New Chat (Dark Theme)',
				src: `${Assets.chatAppThireteen}`
			},
			{
				label: 'Adding More Friends in existing group',
				src: `${Assets.chatAppFourteen}`
			},
			
		]
	},

	{
		slug: 'api',
		color: '#ff3e00',
		description: restfulApi.longDescription,
		shortDescription: restfulApi.shortDescription,
		links: [{ to: 'https://spaceinfo-omega.vercel.app/', label: labels }],
		logo: Assets.api,
		name: 'Scientific Info API',
		period: {
			from: new Date('2022-09-24'),
			to: new Date('2022 10 1')
		},
		skills: getSkills('Restfulapi', 'expressjs', 'mongodb','nodejs','postman','js','github', 'git'),
		type: 'Fetch Scientific Info API',
		screenshots: [
			{
				label: 'Fetching APi via Web',
				src: `${Assets.apiOne}`
			},
			{
				label: 'Fetching APi via Postman',
				src: `${Assets.apiTwo}`
			}
		]
	}
];

export const title = 'Projects';
