import type { Certificate } from '../types';
import Assets from './assets';

export const title = 'CERTIFICATIONS';

export const items: Array<Certificate> = [
	{
		name: 'Post Graduate Certificate Program In Software Engineering For Data Science',
		issuer: 'International Institute of Information Technology - Hyderabad',
		logo: Assets.Python,
		link: 'https://www.mygreatlearning.com/certificate/ROAOVUEZ',
		slug: 'software-engineering-data-science-iiit-hyderabad',
		category: 'core'
	},
	{
		name: 'Data Analysis with Python',
		issuer: 'IBM',
		logo: Assets.Python,
		link: 'https://coursera.org/share/03c66c56d76a6c969487ba582f6b85ec',
		slug: 'data-analysis-with-python',
		category: 'core'
	},
	{
		name: 'Introduction to Big Data with Spark and Hadoop',
		issuer: 'IBM',
		logo: Assets.Python,
		link: 'https://coursera.org/share/84ed613c40fa219eb117d69218eebe9a',
		slug: 'big-data-spark-hadoop',
		category: 'core'
	},
	{
		name: 'Introduction to Web Development',
		issuer: 'University of California, Davis',
		logo: Assets.HTML,
		link: 'https://coursera.org/share/2a79d9078123fd33e8189d7e560795a8',
		slug: 'web-development-uc-davis',
		category: 'extra'
	},
	{
		name: 'Introduction to Software Testing',
		issuer: 'University of Minnesota',
		logo: Assets.JavaScript,
		link: 'https://coursera.org/share/ba2b5f01f59d7a8d564eedbbb597f189',
		slug: 'software-testing-minnesota',
		category: 'core'
	},
	{
		name: 'Cloud Computing Foundations',
		issuer: 'Duke University',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/92de253cd7e16a34e16f84682a495693',
		slug: 'cloud-computing-foundations',
		category: 'extra'
	},
	{
		name: 'Object-Oriented Design',
		issuer: 'University of Alberta',
		logo: Assets.Cpp,
		link: 'https://coursera.org/share/db4362bf261d78ed76a706775964fa3d',
		slug: 'object-oriented-design-alberta',
		category: 'core'
	},
	{
		name: 'Cloud Computing Basics (Cloud 101)',
		issuer: 'LearnQuest',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/fa5278aa51939f4a2b793007fb48e694',
		slug: 'cloud-computing-basics',
		category: 'extra'
	},
	{
		name: 'Agile Software Development',
		issuer: 'University of Minnesota',
		logo: Assets.Git ?? Assets.Unknown,
		link: 'https://coursera.org/share/91679edc819c1939a9e81b6ea51d90b2',
		slug: 'agile-software-development',
		category: 'core'
	},
	{
		name: 'Software Development Processes and Methodologies',
		issuer: 'University of Minnesota',
		logo: Assets.Git ?? Assets.Unknown,
		link: 'https://coursera.org/share/196bbb6294ccd4bd9aca8be881b8913e',
		slug: 'software-development-methodologies',
		category: 'core'
	},
	{
		name: 'Cryptography',
		issuer: 'University of Maryland, College Park',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/2ed7ad99235220483182fa126c5dbf1d',
		slug: 'cryptography-maryland',
		category: 'core'
	},
	{
		name: 'The Bits and Bytes of Computer Networking',
		issuer: 'Google',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/af3cf6f842f177d4b976035a3cc6a797',
		slug: 'computer-networking-google',
		category: 'extra'
	},
	{
		name: 'Requirements Gathering for Secure Software Development',
		issuer: 'University of Colorado System',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/66df3b7cb0ad11d0ae51fd8cf110d614',
		slug: 'requirements-gathering-secure-dev',
		category: 'core'
	},
	{
		name: 'Introduction to Computer Vision and Image Processing',
		issuer: 'IBM',
		logo: Assets.HuggingFace ?? Assets.TensorFlow ?? Assets.Unknown,
		link: 'https://coursera.org/share/ecd902f0b37484d81dc8fdae0e405556',
		slug: 'computer-vision-image-processing',
		category: 'core'
	},
	{
		name: 'Introduction to the Internet of Things and Embedded Systems',
		issuer: 'University of California, Irvine',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/076b21aa383968b503e927d353d212ba',
		slug: 'iot-embedded-systems-uci',
		category: 'extra'
	},
	{
		name: 'Introduction to Graph Theory',
		issuer: 'University of California San Diego',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/3a044bf4e60f7c8ff1853bafbb18f530',
		slug: 'graph-theory-ucsd',
		category: 'extra'
	},
	{
		name: 'Database Management Essentials',
		issuer: 'University of Colorado System',
		logo: Assets.SQL ?? Assets.Unknown,
		link: 'https://coursera.org/share/ea05ea370b977cc0a6c4a411c571206b',
		slug: 'database-management-essentials',
		category: 'core'
	},
	{
		name: 'Introduction to Artificial Intelligence (AI)',
		issuer: 'IBM',
		logo: Assets.TensorFlow ?? Assets.Unknown,
		link: 'https://coursera.org/share/49119aaaefdb1852ccdf7d6bd4260270',
		slug: 'intro-to-ai-ibm',
		category: 'extra'
	},
	{
		name: 'Machine Translation',
		issuer: 'Karlsruhe Institute of Technology',
		logo: Assets.HuggingFace ?? Assets.Unknown,
		link: 'https://coursera.org/share/ff60f318d108c5d699baf6c37c155cea',
		slug: 'machine-translation-kit',
		category: 'core'
	},
	{
		name: 'Building AI Powered Chatbots Without Programming',
		issuer: 'IBM',
		logo: Assets.HuggingFace ?? Assets.Unknown,
		link: 'https://coursera.org/share/0eb9eb9fd5d07b186cf25480f0f49be0',
		slug: 'ai-chatbots-without-code',
		category: 'extra'
	},
	{
		name: 'Data Structures',
		issuer: 'University of California San Diego',
		logo: Assets.Cpp ?? Assets.Java ?? Assets.Unknown,
		link: 'https://coursera.org/share/6e76ba421575cf308c86ee885ad53763',
		slug: 'data-structures-ucsd',
		category: 'core'
	},
	{
		name: 'Build a Simple App in Android Studio with Java',
		issuer: 'Deprecated Guided Projects',
		logo: Assets.Android ?? Assets.Java ?? Assets.Unknown,
		link: 'https://coursera.org/share/9ffa380d04ac101ae077f6c3dc9e1a3a',
		slug: 'android-studio-java-app',
		category: 'extra'
	},
	{
		name: 'Technical Support Fundamentals',
		issuer: 'Google',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/2ca9567d2c2f6873e47ddf5c750d4972',
		slug: 'technical-support-fundamentals',
		category: 'extra'
	},
	{
		name: 'Learning How To Learn for Youth',
		issuer: 'Arizona State University',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/d18cf603373229978da6b77d24c4f945',
		slug: 'learning-how-to-learn-youth',
		category: 'extra'
	},
	{
		name: 'Create Your First Chatbot with Rasa and Python',
		issuer: 'Deprecated Guided Projects',
		logo: Assets.Python ?? Assets.Unknown,
		link: 'https://coursera.org/share/cdfcb81b0ba8547d97d633022c29c84d',
		slug: 'rasa-chatbot-python',
		category: 'extra'
	},
	{
		name: 'TCP/IP and Advanced Topics',
		issuer: 'University of Colorado System',
		logo: Assets.Unknown,
		link: 'https://coursera.org/share/504c8606a158446ef44f4bf50fa4e14d',
		slug: 'tcp-ip-advanced-topics',
		category: 'extra'
	},
	{
		name: 'Computer Architecture',
		issuer: 'Princeton University',
		logo: Assets.C ?? Assets.Unknown,
		link: '',
		slug: 'computer-architecture-princeton',
		category: 'core'
	}
];
