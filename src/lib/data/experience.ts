import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'ihealth',
		company: 'Ihealth & Wellness Foundation Inc',
		description: 'Deve',
		shortDescription: 'Creating awesome tools for developers.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'New York, USA (Remote)',
		period: { from: new Date('2024-09-1') },
		skills: getSkills('ts', 'js'),
		name: 'Fullstack Developer',
		color: 'red',
		logo: Assets.Ihealth,
		links: [
			{
				label: 'Visit Company',
				to: 'https://www.ihealthwellness.org/about-us',
			}
		],
	},
	{
		slug: 'inhouse',
		company: 'In-house Inc',
		description: 'Deve',
		shortDescription: 'Creating awesome tools for developers.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Brooklyn NY, USA (Remote)',
		period: { from: new Date('2022-08-06'), to: new Date('2023-09-10') },
		skills: getSkills('ts', 'js'),
		name: 'Frontend Developer',
		color: 'red',
		logo: Assets.inhouse,
		links: [
			{
				label: 'Visit Company',
				to: 'https://in-house.com/',
			}
		],
	},
	{
		slug: 'grey_journal',
		company: 'Grey Journal Co',
		description: 'Creating awesome applications for customers.',
		shortDescription: 'Creating awesome applications for customers.',
		contract: ContractType.Internship,
		type: 'Content Writer (Wordpress)',
		location: 'New York, USA (Remote)',
		period: { from: new Date('2021-01-09'), to: new Date('2022-07-10') },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Content Writer (Wordpress)',
		color: 'blue',
		logo: Assets.grey,
		links: [
			{
				label: 'Visit Company',
				to: 'https://greyjournal.net/author/cap-ukhanwasifgmail-com/',
			}
		],
	},
	{
		slug: 'upwork',
		company: 'upwork Inc',
		description: 'Creating awesome applications for customers.',
		shortDescription: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Junior Web Developer',
		location: 'Remote',
		period: { from: new Date('2021-01-5'), to: new Date('2021-06-10') },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Web Developer',
		color: 'green',
		logo: Assets.upwork,
		links: [
			{
				label: 'Visit Company',
				to: 'https://www.upwork.com/freelancers/~01146a819bd557266a',
			}
		],
	}
];

export const title = 'Experience';
