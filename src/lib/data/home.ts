import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Harsha';
export const lastName = 'Udutha';

export const description =
	"I'm a Computer Science graduate passionate about building intelligent, user-centric systems. With hands-on experience in mobile development, game development, machine learning, and real-time wearable sensor applications, I specialize in developing impactful solutions—from stress prediction apps to data-driven dashboards and scalable web tools.";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Harsha-Udutha' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/harsha-udutha/'
	},
	{
		platform: Platform.Email,
		link: 'mailto:harudu31@gmail.com'
	}
];

// Actual top skills based on resume
export const skills = getSkills(
	'python',
	'kotlin',
	'csharp',
	'scikit-learn',
	'tensorflow',
	'unity',
	'git',
	'android-studio'
);
