import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { getAssetURL } from '$lib/data/assets';
import { base } from '$app/paths';



export const items: Array<Project> = [
	{
		slug: 'predictive-stress-monitoring',
		color: '#34a853',
		description:
		'Predictive Stress Monitoring is a real-time mobile AI system designed to anticipate stress episodes using physiological and contextual data from a smartwatch. The backend model was trained on a combination of four public datasets: WESAD, AffectiveROAD, Nurse Stress Dataset, and the Smartwatch Health Dataset. After preprocessing and aligning features like heart rate variability (HRV), step count, and motion signals, a LightGBM classifier was initially trained to predict stress labels. Later, the model was re-trained using TensorFlow, converted to TensorFlow Lite, and optimized for mobile inference. A rolling 3-minute buffer on the Android phone collects live sensor data from the Galaxy Watch 4 using the Wear OS Data Layer API. This buffer helps detect sustained physiological changes, avoiding false positives caused by temporary activity spikes. Context-aware logic suppresses stress alerts during or after caffeine intake or exercise. When potential stress is predicted, the app triggers synchronized notifications on both the phone and watch and asks the user to confirm their recent context. The project involved Android development in Kotlin, real-time sensor streaming, bidirectional device communication, and on-device machine learning using TFLite—all working together to deliver proactive, intelligent mental health support.',
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
		type: 'Mobile AI System',
		screenshots: [
			{
			src: `${base}/project/stressPredictive/1.png`,
			label: 'Data communication in Logcat'
			},
			{
				src: `${base}/project/stressPredictive/2.png`,
				label: 'Prompted with contextual alert'
			},
			{
				src: `${base}/project/stressPredictive/5.png`,
				label: 'Prompted user if pressed "YES"'
			},
			{
				src: `${base}/project/stressPredictive/4.png`,
				label: 'Prompted user if pressed "NO"'
			},
			{
				src: `${base}/project/stressPredictive/3.png`,
				label: 'Stress notification alert on Android system tray'
			},
			{
				src: `${base}/project/stressPredictive/Media1.mp4`,
				label: 'Demo - After Gaming Session'
			}
		]

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
		type: 'Web App',
		screenshots: [
			{
			src: `${base}/project/tradePlay/1.png`,
			label: 'Landing Page'
			},
			{
				src: `${base}/project/tradePlay/2.png`,
				label: 'Lisitngs'
			},
			{
				src: `${base}/project/tradePlay/3.png`,
				label: 'Sign-in / Sign-up'
			},
			{
				src: `${base}/project/tradePlay/4.png`,
				label: 'Contact Page'
			},
			{
				src: `${base}/project/tradePlay/5.png`,
				label: 'Chats'
			},
			{
				src: `${base}/project/tradePlay/6.png`,
				label: 'Forum'
			}
		]
	},

	{
		slug: 'vr-gaming-cardboard',
		color: '#4285f4',
		description: `Developed a fully functional virtual reality horror game using Unity and Google Cardboard, aiming to make immersive VR gaming accessible with over 70% cost reduction. The project leveraged affordable VR hardware such as generic headsets and wireless joysticks, integrated through Unity’s XR Toolkit and Google Cardboard API. Designed 3D environments and enemy AI using Unity assets, Blender, and Mixamo, and implemented core gameplay in C#. Features included player health tracking, shooting mechanics, zombie behavior, and user interface. A comprehensive testing phase with 15 participants revealed high immersion (85%) and effective fear response (75%), validating the use of low-cost VR for impactful experiences. The game ran at stable 60+ FPS on Android and Windows platforms, showing its suitability for both education and indie gaming communities.`,
		shortDescription:
			'Low-cost VR prototype using smartphones, Cardboard, and Unity.',
		links: [{ to: 'https://github.com/Harsha-Udutha/VR_Project', label: 'GitHub (Economical VR)' }],
		logo: Assets.Unity ?? Assets.Unknown,
		name: 'Economical VR Gaming System',
		period: {
			from: new Date(2023, 1, 1), to: new Date(2023,3, 1)
		},
		skills: getSkills('csharp', 'unity', 'android-studio', 'git'),
		type: 'VR System Prototype',
		screenshots: [
			{
			src: `${base}/project/VR_Project/1.png`,
			label: 'UI'
			},
			{
				src: `${base}/project/VR_Project/2.jpg`,
				label: 'Menu'
			},
			{
				src: `${base}/project/VR_Project/3.jpg`,
				label: 'Enemies'
			},
			{
				src: `${base}/project/VR_Project/4.jpg`,
				label: 'Environment'
			},
			{
				src: `${base}/project/VR_Project/5.jpg`,
				label: 'Performance'
			},
			{
				src: `${base}/project/VR_Project/6.jpg`,
				label: 'VR'
			},
			{
				src: `${base}/project/VR_Project/7.jpg`,
				label: 'Enemy Spawning'
			},
			{
				src: `${base}/project/VR_Project/8.jpg`,
				label: 'Enemy AI'
			}
		]
	}
	,{
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
	},

	{
	slug: 'buzz-vs-aldrin',
	name: 'Buzz vs. Aldrin',
	description:
		`A sci-fi adventure where players control Aldrin, a boy battling light-sensitive, metal-eating bugs inside his billion-dollar smart home somewhere in the space. Players use futuristic gravity-shift movement to explore the high-tech apartment, catch the Light-attracting Swarms, and capture 100 swarms before total system failure.`,
	shortDescription:
		'Sci-fi game with gravity-shift mechanics, light attracted bugs, and a suspenseful futuristic setting.',
	type: 'Game Development',
	color: 'gray',
	period: { from: new Date(2023, 5, 1), to: new Date(2023, 7, 1) },
	skills: getSkills('unity', 'csharp','blender', 'problem-solving'),
	logo: Assets.Unity ?? Assets.Unknown,
	links: [{ to: 'https://github.com/Harsha-Udutha/Buzz-Aldrin', label: 'GitHub' }],
}

];

export const title = 'PROJECTS';


