import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Harsha';
export const lastName = 'Udutha';

export const description =
	"I’m a software developer with a game development background, now transitioning toward data science and data engineering. My work combines interactive systems, mobile applications, machine learning, and structured data workflows — from Unity-based gameplay systems to wearable AI projects that process real-time sensor data. I’m currently building TradePlay while strengthening my skills in Python, SQL, machine learning, and data-driven application development.";
	
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
	'sql',
	'tensorflow',
	'scikit-learn',
	'unity',
	'csharp',
	'kotlin',
	'android-studio',
	'git'
);
