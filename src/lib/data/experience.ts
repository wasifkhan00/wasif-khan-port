import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Frontend_Developer',
		company: 'Grey Journal',
		description: 'Deve',
		shortDescription: 'Creating awesome tools for developers.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'New York, USA (Remote)',
		period: { from: new Date('2024-09-10'), to: new Date('2024-10-10') },
		skills: getSkills('ts', 'js'),
		name: 'Grey Journal',
		color: 'red',
		logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQF8BAO3P1p_uA/company-logo_200_200/company-logo_200_200/0/1631307147394?e=1738195200&v=beta&t=L1gOhxWiERouFZiVq4mvzpyvEUVKG4YnX9uDuh7du54',
		links: [
			{
				label: 'Visit Company',
				to: 'https://google.com/',
			}
		],
	},
	{
		slug: 'Backend_Developer',
		company: 'In-house',
		description: 'Creating awesome applications for customers.',
		shortDescription: 'Creating awesome applications for customers.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'New York, USA (Remote)',
		period: { from: new Date('2024-09-10'), to: new Date('2024-10-10') },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Backend Developer',
		color: 'blue',
		logo: `https://media.licdn.com/dms/image/v2/C560BAQE5aTGyaCjDfQ/company-logo_200_200/company-logo_200_200/0/1630652084887/in_house6_logo?e=1738195200&v=beta&t=C0AB_6yzSEFNFnkcMIgGdy_ii1KjGGpjvEgiFTvyeZA`,
		links: [
			{
				label: 'Visit Company',
				to: 'https://google.com/',
			}
		],
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		shortDescription: 'Creating awesome applications for customers.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date('2024-09-10'), to: new Date('2024-10-10') },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		logo: `https://media.licdn.com/dms/image/v2/C560BAQE5aTGyaCjDfQ/company-logo_200_200/company-logo_200_200/0/1630652084887/in_house6_logo?e=1738195200&v=beta&t=C0AB_6yzSEFNFnkcMIgGdy_ii1KjGGpjvEgiFTvyeZA`,
		links: [
			{
				label: 'Visit Company',
				to: 'https://google.com/',
			}
		],
	}
];

export const title = 'Experience';
