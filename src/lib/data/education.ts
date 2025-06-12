import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'M.S. in Computer Science',
		description: '',
		location: 'Fairfax, VA',
		logo: Assets.GMU, // You can replace this with your GMU logo if you add it to assets
		name: '',
		organization: 'George Mason University',
		period: { from: new Date(2023, 7, 21), to: new Date(2025, 5, 14) }, // Aug 2023 to May 2025
		shortDescription: 'GPA: 3.60 | Relevant: Systems Programming, Data Mining, Algorithms, Graphics, Mobile Dev',
		slug: 'gmu-ms-cs',
		subjects: ['Data Mining', 'Algorithms', 'Computer Graphics', 'Mobile Computing', 'Software Engineering']
	},
	{
		degree: 'B.Tech in Computer Science',
		description: '',
		location: 'Visakhapatnam, India',
		logo: Assets.GITAM, // Replace with GITAM logo if desired
		name: '',
		organization: 'GITAM University',
		period: { from: new Date(2019, 4, 1), to: new Date(2023, 3, 1) }, // May 2019 to Apr 2023
		shortDescription: 'GPA: 3.52 | Relevant: OOP, Data Structures, Networks, AI, Cloud, DBMS',
		slug: 'gitam-btech-cs',
		subjects: ['OOP', 'Data Structures', 'Operating Systems', 'Networks', 'DBMS', 'Artificial Intelligence', 'Cloud Computing']
	}
];

export const title = 'EDUCATION';
