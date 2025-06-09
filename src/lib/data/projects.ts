import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'predictive-stress-monitoring',
		color: '#34a853',
		description:
			'A real-time stress prediction system that uses physiological sensor data from a Galaxy Watch. Integrated a TensorFlow Lite model, Wear OS ↔ Android communication, rolling buffer, and contextual logic (e.g., caffeine, exercise) to suppress false positives and deliver early warnings.',
		shortDescription:
			'Real-time stress detection using heart rate, step count, motion sensors, and TensorFlow Lite.',
		links: [
			{ to: 'https://github.com/Harsha-Udutha/StressPrediction', label: 'GitHub (Watch + Phone)' }
		],
		logo: Assets.Android ?? Assets.Unknown,
		name: 'Predictive Stress Monitoring',
		period: {
			from: new Date(2025, 0, 1), to: new Date(2025, 3, 31)
		},
		skills: getSkills('python', 'kotlin', 'tensorflow', 'android-studio', 'git'),
		type: 'Mobile AI System'
	},

	{
		slug: 'tradeplay-marketplace',
		color: '#fbbc05',
		description:
			'A web app concept for exchanging games and consoles. Includes user authentication, profile management, and game listings using Firebase. AI-powered modules are planned for fraud detection, smart pricing, search, and toxic content moderation.',
		shortDescription:
			'A community-driven marketplace for buying/trading games and accessories.',
		links: [
			{ to: 'https://github.com/Harsha-Udutha/TradePlay', label: 'GitHub (TRADEPLAY)' }
		],
		logo: Assets.JavaScript ?? Assets.Unknown,
		name: 'TRADEPLAY – Game Exchange Marketplace',
		period: {
			from: new Date(2025, 5, 1)
		},
		skills: getSkills('html', 'css', 'firebase', 'python', 'git'),
		type: 'Web App'
	},

	{
		slug: 'vr-gaming-cardboard',
		color: '#4285f4',
		description:
			'Designed a cost-effective VR gaming system using Unity and Google Cardboard. Integrated joystick input, 3D scenes, and mobile-friendly performance optimizations. Intended for educational and indie use cases with over 70% cost reduction.',
		shortDescription:
			'Low-cost VR prototype using smartphones, Cardboard, and Unity.',
		links: [{ to: 'https://github.com/Harsha-Udutha/VR_Project', label: 'GitHub (Economical VR)' }],
		logo: Assets.Unity ?? Assets.Unknown,
		name: 'Economical VR Gaming System',
		period: {
			from: new Date(2023, 1, 1), to: new Date(2023,3, 1)
		},
		skills: getSkills('csharp', 'unity', 'android-studio', 'git'),
		type: 'VR System Prototype'
	},

	{
		slug: 'parking-violation-prediction',
		color: '#ea4335',
		description:
			'Used NYC open data to identify parking violation hotspots. Engineered features from timestamps and location data, applied classification models (Random Forest, Logistic Regression), and visualized insights for city planning.',
		shortDescription:
			'ML model to predict high-risk parking violation zones in NYC.',
		links: [],
		logo: Assets.Python ?? Assets.Unknown,
		name: 'Parking Violation Prediction',
		period: {
			from: new Date(2022, 4, 1), to: new Date(2022,5,30)
		},
		skills: getSkills('python', 'scikit-learn', 'git'),
		type: 'Data Science Project'
	}
];

export const title = 'Projects';
