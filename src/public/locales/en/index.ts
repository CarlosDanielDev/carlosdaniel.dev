import { calculateExperience } from 'src/utils';

const years = calculateExperience(2018);

export const en = {
	translation: {
		home: {
			title: 'Carlos Daniel - Developer',
			whoIs: 'Who is Carlos Daniel?',
			description:
				'Carlos Daniel is a frontend developer passionate about music, philosophy, Kung Fu and a balanced lifestyle.',
			experience: 'Professional Experience',
			experience1: `Over ${years} years of experience with web and hybrid app development.`,
			experience2: 'Knowledge of the Azure ecosystem.',
			experience3:
				'Expert in frontend development, working with React and React Native.',
			experience4: 'Uses TypeScript on a daily basis.',
			thanksForVisiting: 'Thanks for visiting my site!',
			contact: 'Contact',
			moreInfo: 'for more information.',
			tryTerminal: 'Try the interactive terminal interface',
			viewDetails: 'View details',
			experiences: [
				{
					name: 'Niceplanet',
					period: '2018 - 2020',
					role: 'Junior Fullstack Developer (02/2018 - 08/2018) / Mid-level Fullstack Developer (08/2018 - 06/2020)',
					projects: [
						{
							name: 'Niceplanet',
							description:
								'Smgeo - Property analysis and monitoring project using PHP and Slim Framework with Twig template',
							status: 'In production',
						},
						{
							name: 'Smgeo Consulta',
							description:
								'Consultation portal for monitoring already carried out for Smgeo clients using React.',
							status: 'In production',
						},
					],
				},
				{
					name: 'Primepass (now Primepass Connect)',
					period: '2020 - 2020',
					role: 'Mid-level Hybrid Mobile Developer (06/2020 - 10/2020) / Senior Hybrid Mobile Developer (10/2020 - 12/2020)',
					projects: [
						{
							name: 'Primepass',
							description:
								'Ticket sales and subscription events app made with React Native.',
							status: 'Discontinued',
						},
					],
				},
				{
					name: 'Appertech (now Mathex) - {Smiles[GOL]}',
					period: '2021 - 2021',
					role: 'Senior Frontend Developer (01/2021 - 03/2021)',
					projects: [
						{
							name: 'Smiles',
							description:
								'GOL loyalty program, development of the car rental feature by Localiza within the Smiles website.',
							status: 'In production',
						},
					],
				},
				{
					name: 'Appertech (now Mathex) - {Stix}',
					period: '2021 - 2021',
					role: 'Senior Hybrid Mobile Developer (03/2021 - 12/2021)',
					projects: [
						{
							name: 'Stix',
							description:
								'Cashback app, development of new features and maintenance of the app using React Native.',
							status: 'In production',
						},
					],
				},
				{
					name: 'Puravida',
					period: '2022 - Present',
					role: 'Senior Frontend Developer (01/2022 - Present)',
					projects: [
						{
							name: 'Puravida',
							description:
								'Natural products store, development of new features and website maintenance using React.',
							status: 'In production',
						},
						{
							name: 'Puravida PRIME',
							description:
								'Health and wellness content streaming platform, development of new features and website maintenance using React and mobile app using React Native.',
							status: 'In production',
						},
					],
				},
			],
		},
		links: {
			jobTitle: 'Software developer',
		},
		tools: {
			title: 'Tools',
		},
		terminal: {
			headerTitle: 'terminal@carlosdaniel:~',
			promptUser: 'carlosdaniel',
			promptLocation: '~',
			clickToFocus: 'Click to focus',
			welcome:
				"Welcome to the interactive terminal! Type 'help' to see available commands.",
			typeHelp: "Type 'help' to see available commands.",
			commandNotFound: "command not found. Type 'help' for available commands.",
			availableCommands: 'Available commands',
			whoami: 'Carlos Daniel - Frontend Developer',
			skills: {
				frontend: 'Frontend: React, TypeScript, Next.js',
				backend: 'Backend: Node.js, Express',
				other: 'Other: Git, Docker, AWS',
			},
			projects:
				'1. Personal Website - This website\n2. E-commerce Platform - React + Node.js\n3. Task Management App - React Native\n4. Data Visualization Dashboard - D3.js + React',
			experience:
				'Senior Frontend Developer @ NiceCompany (2020-Present)\nFrontend Developer @ OtherCompany (2018-2020)\nJunior Developer @ StartupName (2017-2018)',
			contact:
				'Email: hello@carlosdaniel.dev\nGitHub: github.com/devcarlosdaniel',
			home: 'Redirecting to standard view...',
			about: 'Redirecting to about page...',
			ls: 'whoami\nskills\nprojects\nexperience\ncontact\nhelp\nhome\nabout\nclear',
			instructions:
				'Type commands to interact with the terminal. Try "help" to see available commands.',
			commands: {
				whoami: 'Who am I',
				skills: 'My skills',
				projects: "Projects I've worked on",
				experience: 'My professional experience',
				contact: 'Contact information',
				ls: 'List available commands',
				clear: 'Clear terminal',
				home: 'Go back to homepage',
				about: 'View detailed page about me',
				help: 'Show available commands',
			},
		},
		components: {
			footer: {
				infoFooter: 'made with ☕️ by @carlosdaniel.dev',
				copyright: 'All rights reserved',
			},
			flagLabels: {
				pt: 'Portuguese',
				en: 'English',
				de: 'German',
				uk: 'Ukrainian',
				es: 'Spanish',
				ru: 'Russian',
				fr: 'French',
				jp: 'Japanese',
			},
			header: {
				home: 'Homepage',
				links: 'Links',
				tools: 'Tools',
				about: 'About me',
			},
			timer: {
				message: 'coming soon...',
			},
		},
		retroTerminal: {
			title: 'terminal@carlosdaniel:~',
			promptUser: 'carlosdaniel',
			promptLocation: '~',
			whoami: 'Carlos Daniel',
			pwd: '/home/user/projects/portfolio',
			skills: {
				frontend: 'Frontend: React, TypeScript, styled-components',
				backend: 'Backend: Node.js, Express, MongoDB',
				devops: 'DevOps: Docker, AWS',
				others: 'Others: Git, GraphQL, Testing',
			},
			projects: {
				total: 'total 4',
				dir1: 'drwxr-xr-x  2 carlosdaniel users 4096 Jun 10 09:45 .',
				dir2: 'drwxr-xr-x 19 carlosdaniel users 4096 Jun 10 09:45 ..',
				file1: '-rw-r--r--  1 carlosdaniel users  507 Jun 10 09:45 project1.md',
				file2: '-rw-r--r--  1 carlosdaniel users  721 Jun 10 09:45 project2.md',
				file3: '-rw-r--r--  1 carlosdaniel users  612 Jun 10 09:45 project3.md',
			},
			contactInfo:
				'Email: hello@carlosdaniel.dev | GitHub: github.com/devcarlosdaniel',
		},
	},
};
