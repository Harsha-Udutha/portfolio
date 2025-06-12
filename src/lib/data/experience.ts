import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [	

		{
		slug: 'outdoor-supervisor-gmu',
		company: 'George Mason University',
		description:
			'In this part-time campus role, I was responsible for managing outdoor sports venues and ensuring safety, cleanliness, and accurate usage tracking. I collected hourly activity data and uploaded it to the Connect2 platform, then used Python with Pandas and Matplotlib to analyze trends in facility utilization. These insights supported smarter resource allocation and scheduling. I also coordinated with staff during events, assisted in handling minor incidents, and ensured venue readiness, blending operational support with basic data analytics.',
		contract: ContractType.PartTime,
		type: 'Facility Management / Data Support',
		location: 'Onsite: Fairfax, VA',
		period: { from: new Date(2024, 7, 1), to: new Date(2025, 4, 31) }, // Aug 2021 – Dec 2021
		skills: getSkills('python', 'pandas', 'matplotlib'),
		name: 'Outdoor Supervisor',
		color: 'orange',
		links: [],
		logo: Assets.GMU,
		shortDescription: 'Managed sports ground usage and performed data reporting for university scheduling.'
	},

	{
		slug: 'unity-intern-quleep',
		company: 'Quleep Pvt Ltd',
		description:
			'At Quleep Pvt Ltd, I contributed to the development of a metaverse platform "FESTEMVERSE" by implementing core gameplay mechanics and character systems using Unity and C#. I designed reusable scripts for object interactions and avatar control, and collaborated closely with artists to integrate 3D models, animations, and shader effects into the production pipeline. My role also involved conducting iterative QA cycles, identifying over 25+ bugs and performance bottlenecks, and contributing to continuous improvements that stabilized deployment builds across devices.',
		contract: ContractType.Internship,
		type: 'Game Development',
		location: 'Remote',
		period: { from: new Date(2021, 4, 1), to: new Date(2023, 3, 30) }, // May 2022 – Apr 2023
		skills: getSkills('csharp', 'unity', 'git', 'plasticscm'),
		name: 'Unity Developer Intern',
		color: 'purple',
		links: [],
		logo: Assets.Unity ?? Assets.Unknown,
		shortDescription: 'Developed gameplay systems and performed QA for a Unity-based metaverse platform.'
	},
	{
		slug: 'student-coordinator-gitam',
		company: 'GITAM Career Guidance Centre',
		description:
			'As a student coordinator, I guided over 400 students through international application processes and study-abroad pathways. I designed and analyzed surveys to capture student preferences, used Python and Excel to clean and visualize response data, and built dashboards that helped faculty identify popular destinations and in-demand programs. I also helped organize large-scale university events, ensured data confidentiality, and facilitated communication between students and external university partners — combining technical skills with leadership in a high-responsibility environment. Recognized by faculty for leadership, teamwork, and communication; received a recommendation letter citing academic and personal strengths.',
		contract: ContractType.Volunteer,
		type: 'Career Services / Analytics',
		location: 'Onsite: Visakhapatnam, India',
		period: { from: new Date(2022, 2, 1), to: new Date(2022, 9, 31) }, // Mar 2022 – Oct 2022
		skills: getSkills('python', 'excel'),
		name: 'Student Coordinator – Career Services',
		color: 'teal',
		links: [],
		logo: Assets.GITAM,
		shortDescription: 'Organized career guidance events and created dashboards for academic advising.'
	},
	{
		slug: 'data-intern-tcr',
		company: 'TCR Innovations',
		description:
			'During this internship, I built machine learning models to predict employee attrition using classification algorithms like Random Forest and Logistic Regression. I cleaned and transformed a large HR dataset of 10,000+ entries, engineered relevant features, and evaluated model performance using precision, recall, and ROC-AUC. I used Python libraries such as Scikit-learn, Pandas, and Matplotlib for exploratory analysis and presented insights to project mentors through visually-rich, data-driven reports. The experience sharpened my ability to translate raw data into actionable insights.',
		contract: ContractType.Internship,
		type: 'Data Science',
		location: 'Remote',
		period: { from: new Date(2022, 3, 26), to: new Date(2022, 7, 14) },
		skills: getSkills('python', 'scikit-learn', 'pandas'),
		name: 'Data Science Summer Intern',
		color: 'blue',
		links: [
			{
				to: 'https://drive.google.com/file/d/1XA9_agFPIENpyJmcGnjqi2LZp9BWxvQT/view?usp=sharing',
				label: 'Letter of Recommendation'
			},
			{
				to: 'https://verification.givemycertificate.com/v/664f4687-0246-4876-9bee-304b01fed6c7',
				label: 'Certificate'
			}
		],
		logo: Assets.Python ?? Assets.Unknown,
		shortDescription: 'Built ML models and performed data analysis to predict employee attrition.'
	}
];

export const title = 'EXPERIENCE';
