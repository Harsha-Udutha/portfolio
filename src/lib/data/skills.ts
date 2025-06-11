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
		description: 'Used Python extensively across data science, ML, and backend projects. Built predictive models with scikit-learn, processed large public datasets, and engineered rolling buffers and contextual filters for stress detection. Also used for feature engineering, data visualization, and exploratory analysis in internship and academic settings.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: 'Used Java during early Android development to build basic UI components and handle backend logic. Experience includes working with Activities, Intents, and XML layouts in Android Studio.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: 'gray',
		description: 'Strong foundational understanding of C from academic coursework. Comfortable with pointers, memory management, and low-level programming, and eager to apply C in future system-level or embedded projects.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'gray',
		description: 'Applied C++ in game development projects using Unreal Engine. Familiar with object-oriented programming, game loops, and real-time rendering concepts. Keen to deepen experience by building high-performance applications or game systems.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description: 'Primarily used C# in Unity to script gameplay mechanics, manage object behaviors, and implement features like scriptable objects, UI systems, and collision handling. Also built small utilities like calculators and clocks outside Unity. Strong understanding of C# in real-time interactive environments.',
		logo: Assets.CSharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'orange',
		description: 'Utilized SQL for querying and managing structured datasets during data analysis and machine learning workflows. Experienced with writing complex joins, filtering, grouping, and aggregations for preprocessing large-scale data in projects like attrition analysis.',
		logo: Assets.SQL ?? Assets.Unknown,
		name: 'SQL',
		category: 'pro-lang'
	}),

	// Frameworks
	defineSkill({
		slug: 'tensorflow',
		color: 'orange',
		description: 'Used TensorFlow to build and train stress prediction models based on physiological sensor data. Converted trained models into TensorFlow Lite format for efficient deployment on mobile devices, enabling real-time inference in the Android-based stress monitoring system.',
		logo: Assets.TensorFlow ?? Assets.Unknown,
		name: 'TensorFlow',
		category: 'framework'
	}),
	defineSkill({
		slug: 'android-studio',
		color: 'green',
		description: 'Developed and debugged Wear OS and Android phone apps for real-time stress monitoring using Android Studio. Leveraged Jetpack libraries, Sensor APIs, and TFLite model integration for on-device ML inference. Also used Android Studio to build and sign Unity-generated APKs for Android deployment, handling compatibility settings and device-specific optimizations.',
		logo: Assets.Android ?? Assets.Unknown,
		name: 'Android Studio',
		category: 'framework'
	}),
	defineSkill({
		slug: 'unity',
		color: 'gray',
		description: 'Designed interactive gameplay systems and immersive environments using Unity 3D. Implemented C# scripts for player movement, object interaction, UI logic, and state management. Worked with animations, shaders, physics, and post-processing to enhance user experience. Built many polished games, VR prototype using Google Cardboard and exported Android-compatible APKs via Unity–Android Studio integration.',
		logo: Assets.Unity ?? Assets.Unknown,
		name: 'Unity 3D',
		category: 'framework'
	}),

	// Libraries
	defineSkill({
		slug: 'scikit-learn',
		color: 'blue',
		description: 'Applied Scikit-learn extensively for classification and prediction tasks across data science projects. Trained and evaluated models such as Random Forest, Logistic Regression, and KMeans clustering. Performed hyperparameter tuning, cross-validation, and feature engineering to optimize model accuracy and generalization. Used it to predict real-world scenarios like employee attrition and parking violations.',
		logo: Assets.ScikitLearn ?? Assets.Unknown,
		name: 'Scikit-learn',
		category: 'library'
	}),
	defineSkill({
		slug: 'hugging-face',
		color: 'yellow',
		description: 'Explored pre-trained transformer models from Hugging Face for natural language processing tasks. Experimented with sentiment analysis, text classification, and language embeddings. Planned integration into TRADEPLAY for detecting toxic messages and generating smart responses in user chats.',
		logo: Assets.HuggingFace ?? Assets.Unknown,
		name: 'Hugging Face',
		category: 'library'
	}),

	// Markup & Style
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'Used HTML to structure responsive frontend components in web projects like TRADEPLAY. Built semantic layouts for authentication, profile management, and listings. Applied best practices in accessibility and maintainability.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'Styled web pages and user interfaces for projects like TRADEPLAY and GMU surveys using plain CSS and Bootstrap. Focused on responsive design, layout alignment, custom theming, and maintaining consistent visual aesthetics across components.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),

	// Dev Tools
	defineSkill({
		slug: 'git',
		color: 'black',
		description: 'Used Git for version control across academic and personal projects. Managed branches, commits, and merges on GitHub, especially during collaborative work like the Unity VR project and stress prediction app. Experienced with Git CLI and GitHub desktop integrations in VS Code and Android Studio.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Familiar with Docker fundamentals for containerizing Python-based machine learning pipelines and streamlining deployment. Explored Docker setup for isolating development environments and simplifying reproducibility of AI projects during coursework and self-paced learning.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vscode',
		color: 'cyan',
		description: 'Primary development environment for projects in Python, JavaScript, and web development. Used extensively with extensions for Git, Jupyter, and Svelte; configured launch settings and integrated terminal workflows to streamline development and debugging processes.',
		logo: Assets.VSCode ?? Assets.Unknown,
		name: 'VS Code',
		category: 'devtools'
	}),
		defineSkill({
		slug: 'vsstudio',
		color: 'blue',
		description: 'Used primarily for C# and Unity development. Enabled efficient scripting of game mechanics, debugging Unity projects, and managing complex scenes using integrated features like IntelliSense, visual debuggers, and asset management tools. Also utilized for building and testing smaller Windows desktop utilities.',
		logo: Assets.VS ?? Assets.Unknown,
		name: 'VS Studio',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jupyter',
		color: 'gray',
		description: 'Used for data exploration, model training, and documentation in machine learning projects. Enabled step-by-step analysis with inline visualizations (Matplotlib, Seaborn) and iterative debugging for stress prediction and data science tasks.',
		logo: Assets.Jupyter ?? Assets.Unknown,
		name: 'Jupyter Notebook',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'plasticscm',
		color: 'gray',
		description: 'Used as the primary version control system during Unity-based internship projects. Managed branching, merging, and collaboration across game assets and C# scripts, enabling efficient team development and conflict resolution in large Unity projects.',
		logo: Assets.PlasticSCM,
		name: 'PlasticSCM',
		category: 'devtools'
	}),

	// Soft Skills
	defineSkill({
		slug: 'problem-solving',
		color: 'teal',
		description: 'Demonstrated strong analytical thinking in both technical and non-technical roles — from debugging Unity game logic and sensor communication issues in the Stress Prediction project to analyzing sports venue demand patterns as an Outdoor Supervisor using Python. Proactively addressed challenges, optimized workflows, and delivered solutions under tight timelines.',
		logo: Assets.Unknown,
		name: 'Problem Solving',
		category: 'soft'
	}),
	defineSkill({
		slug: 'agile-leadership',
		color: 'purple',
		description: 'Practiced Agile methodologies during internship and project work by iteratively developing Unity gameplay modules and refining machine learning pipelines based on mentor feedback. As Student Coordinator, effectively led planning cycles for international education sessions, adjusting strategies based on student feedback.',
		logo: Assets.Unknown,
		name: 'Agile Leadership',
		category: 'soft'
	}),
	defineSkill({
		slug: 'collaboration',
		color: 'blue',
		description: 'Collaborated with designers, developers, and faculty while working on Unity projects, career events, and mobile apps. Coordinated between university departments, external partners, and over 400+ students at GITAM Career Guidance Centre to organize international education sessions and career fairs.',
		logo: Assets.Unknown,
		name: 'Cross-functional Collaboration',
		category: 'soft'
	}),
	defineSkill({
		slug: 'public-speaking',
		color: 'orange',
		description: 'Regularly presented complex ideas, including ML project outcomes and technical summaries, to non-technical stakeholders. Led interactive career workshops, delivered onboarding sessions for new students, and explained stress model results during evaluation meetings — all requiring clarity, confidence, and adaptability in public communication.',
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
