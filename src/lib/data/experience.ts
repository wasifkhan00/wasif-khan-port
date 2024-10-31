import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'ihealth',
		company: 'ihealthwellness',
		description: 'Deve',
		shortDescription: 'Creating awesome tools for developers.',
		contract: ContractType.PartTime,
		type: 'Fullstack Developer',
		location: 'New York, USA (Remote)',
		period: { from: new Date('2024-09-10'), to: new Date('2024-10-10') },
		skills: getSkills('ts', 'js'),
		name: 'Fullstack Developer',
		color: 'red',
		logo:Assets.Ihealth,
		links: [
			{
				label: 'Visit Company',
				to: 'https://google.com/',
			}
		],
	},
	{
		slug: 'inhouse',
		company: 'In-house',
		description: 'Creating awesome applications for customers.',
		shortDescription: 'Creating awesome applications for customers.',
		contract: ContractType.PartTime,
		type: 'Frontend Developer',
		location: 'New York, USA (Remote)',
		period: { from: new Date('2022-08-10'), to: new Date('2023-09-10') },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Frontend Developer',
		color: 'blue',
		logo:Assets.Inhouse,
		links: [
			{
				label: 'Visit Company',
				to: 'https://google.com/',
			}
		],
	},
	{
		slug: 'grey_journal',
		company: 'Grey Journal',
		description: 'Creating awesome applications for customers.',
		shortDescription: 'Creating awesome applications for customers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'New York, USA (Remote)',
		period: { from: new Date('2021-06-25'), to: new Date('2022-07-30') },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Web Content Writer',
		color: 'blue',
		logo:Assets.greyjournal,
		links: [
			{
				label: 'Visit Company',
				to: 'https://google.com/',
			}
		],
	},
	{
		slug: 'upwork',
		company: 'Upwork',
		description: 'Creating awesome applications for customers.',
		shortDescription: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date('2021-02-01'), to: new Date('2021-06-01') },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Web Developer',
		color: 'green',
		logo: Assets.upwork,
		links: [
			{
				label: 'Visit Company',
				to: 'https://google.com/',
			}
		],
	}
];

export const title = 'Experience';
