import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Wasif Khan';

export const lastName = '';

export const description = '';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/wasifkhan00/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/ukhanwasif/'
	},

	{
		platform: Platform.Email,
		link: 'ukhanwasif@gmail.com'
	}
];

export const skills = getSkills(
	'js',
	'css',
	'html',
	'reactjs',
	'svelte',
	'ts',
	'Restfulapi',
	'angularjs',
	'Py',
	'aws',
	'azure',
	'docker',
	'github',
	'git',
	'expressjs',
	'linux',
	'mongodb',
	'netlify',
	'nextjs',
	'vite',
	'tensorFlow',
	'postman',
	'Illustrator',
	'photoshop'
);
