import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	// Programming Languages
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Used for machine learning, data processing, automation, and backend tasks.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: 'Core language for OOP, Android development, and system-level programming.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: 'gray',
		description: 'Used for systems programming and performance-critical tasks.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'gray',
		description: 'C++ experience in algorithm-heavy coursework and simulation.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description: 'Used with Unity 3D to build interactive gameplay mechanics and UI.',
		logo: Assets.CSharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'orange',
		description: 'Database querying and management with SQL.',
		logo: Assets.SQL ?? Assets.Unknown,
		name: 'SQL',
		category: 'pro-lang'
	}),

	// Frameworks
	defineSkill({
		slug: 'tensorflow',
		color: 'orange',
		description: 'Built stress prediction models and TFLite for mobile deployment.',
		logo: Assets.TensorFlow ?? Assets.Unknown,
		name: 'TensorFlow',
		category: 'framework'
	}),
	defineSkill({
		slug: 'android-studio',
		color: 'green',
		description: 'Built Wear OS + Android apps with Kotlin, Jetpack, and Sensor APIs.',
		logo: Assets.Android ?? Assets.Unknown,
		name: 'Android Studio',
		category: 'framework'
	}),
	defineSkill({
		slug: 'unity',
		color: 'gray',
		description: 'Game development with C#, UI logic, 3D environments, and Google Cardboard.',
		logo: Assets.Unity ?? Assets.Unknown,
		name: 'Unity 3D',
		category: 'framework'
	}),

	// Libraries
	defineSkill({
		slug: 'scikit-learn',
		color: 'blue',
		description: 'Built ML models with Random Forest, Logistic Regression, clustering, and evaluation.',
		logo: Assets.ScikitLearn ?? Assets.Unknown,
		name: 'Scikit-learn',
		category: 'library'
	}),
	defineSkill({
		slug: 'hugging-face',
		color: 'yellow',
		description: 'Used pre-trained models for NLP and planned integration into TRADEPLAY project.',
		logo: Assets.HuggingFace ?? Assets.Unknown,
		name: 'Hugging Face',
		category: 'library'
	}),

	// Markup & Style
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'Structured frontend components for personal and course projects.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'Styled responsive UIs using plain CSS and Bootstrap.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),

	// Dev Tools
	defineSkill({
		slug: 'git',
		color: 'black',
		description: 'Version control using GitHub, Git CLI, and Git integrations in IDEs.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Containerization knowledge for development and deployment purposes.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vscode',
		color: 'cyan',
		description: 'Used as the primary IDE for Python, JS, and Android development.',
		logo: Assets.VSCode ?? Assets.Unknown,
		name: 'VS Code',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jupyter',
		color: 'gray',
		description: 'Interactive analysis and documentation of data science workflows.',
		logo: Assets.Jupyter ?? Assets.Unknown,
		name: 'Jupyter Notebook',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'plasticscm',
		color: 'gray',
		description: 'Used for version control in Unity projects during internship.',
		logo: Assets.PlasticSCM,
		name: 'PlasticSCM',
		category: 'devtools'
	}),

	// Soft Skills
	defineSkill({
		slug: 'problem-solving',
		color: 'teal',
		description: 'Creative problem-solver, especially in data-driven and mobile contexts.',
		logo: Assets.Unknown,
		name: 'Problem Solving',
		category: 'soft'
	}),
	defineSkill({
		slug: 'agile-leadership',
		color: 'purple',
		description: 'Familiar with Agile and Scrum workflows from both course and internship projects.',
		logo: Assets.Unknown,
		name: 'Agile Leadership',
		category: 'soft'
	}),
	defineSkill({
		slug: 'collaboration',
		color: 'blue',
		description: 'Worked across teams to deliver successful cross-functional projects.',
		logo: Assets.Unknown,
		name: 'Cross-functional Collaboration',
		category: 'soft'
	}),
	defineSkill({
		slug: 'public-speaking',
		color: 'orange',
		description: 'Presented ML insights, VR testing reports, and career mentoring sessions.',
		logo: Assets.Unknown,
		name: 'Public Speaking',
		category: 'soft'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		if (!item.category) {
			others.push(item);
			return;
		}

		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };
			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
