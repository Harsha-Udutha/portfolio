import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Harsha';
export const lastName = 'Udutha';

export const description =
	"I'm a curious coder 🧠, caffeinated thinker ☕, and freshly minted Computer Science graduate 🎓 who loves turning ideas into smart, user-friendly tech 💡. Whether it's building mobile apps that predict stress before you even feel it 📱😅, crafting VR zombie games on a student budget 🧟‍♂️🎮, or wrangling machine learning models into useful insights 🤖📊 — I bring code to life. With hands-on experience in Android dev 🤓📱, Unity games 🕹️, wearable tech ⌚, and data science 📈, I thrive on blending logic with creativity to make technology feel HUMAN.";

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
