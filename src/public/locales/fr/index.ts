import { calculateExperience } from 'src/utils';

const years = calculateExperience(2018);

export const fr = {
	translation: {
		home: {
			title: 'Carlos Daniel - Développeur',
			whoIs: 'Qui est Carlos Daniel?',
			description:
				'Carlos Daniel est un développeur frontend passionné par la musique, la philosophie, le Kung Fu et un mode de vie équilibré.',
			experience: 'Expérience professionnelle',
			experience1: `Plus de ${years} ans d'expérience en développement web et d'applications hybrides.`,
			experience2: "Connaissance de l'écosystème Azure.",
			experience3:
				'Expert en développement frontend, travaillant avec React et React Native.',
			experience4: 'Utilise TypeScript au quotidien.',
			thanksForVisiting: "Merci d'avoir visité mon site!",
			contact: 'Contact',
			moreInfo: "pour plus d'informations.",
			tryTerminal: "Essayez l'interface de terminal interactive",
			viewDetails: 'Voir les détails',
			experiences: [
				{
					name: 'Niceplanet',
					period: '2018 - 2020',
					role: 'Développeur Fullstack Junior (02/2018 - 08/2018) / Développeur Fullstack Intermédiaire (08/2018 - 06/2020)',
					projects: [
						{
							name: 'Niceplanet',
							description:
								"Smgeo - Projet d'analyse et de surveillance des propriétés utilisant PHP et Slim Framework avec le template Twig",
							status: 'En production',
						},
						{
							name: 'Smgeo Consulta',
							description:
								'Portail de consultation pour le suivi déjà effectué pour les clients Smgeo utilisant React.',
							status: 'En production',
						},
					],
				},
				{
					name: 'Primepass (maintenant Primepass Connect)',
					period: '2020 - 2020',
					role: 'Développeur Mobile Hybride Intermédiaire (06/2020 - 10/2020) / Développeur Mobile Hybride Senior (10/2020 - 12/2020)',
					projects: [
						{
							name: 'Primepass',
							description:
								"Application de vente de billets et d'événements par abonnement réalisée avec React Native.",
							status: 'Abandonné',
						},
					],
				},
				{
					name: 'Appertech (maintenant Mathex) - {Smiles[GOL]}',
					period: '2021 - 2021',
					role: 'Développeur Frontend Senior (01/2021 - 03/2021)',
					projects: [
						{
							name: 'Smiles',
							description:
								'Programme de fidélité GOL, développement de la fonctionnalité de location de voiture par Localiza sur le site Web Smiles.',
							status: 'En production',
						},
					],
				},
				{
					name: 'Appertech (maintenant Mathex) - {Stix}',
					period: '2021 - 2021',
					role: 'Développeur Mobile Hybride Senior (03/2021 - 12/2021)',
					projects: [
						{
							name: 'Stix',
							description:
								"Application de cashback, développement de nouvelles fonctionnalités et maintenance de l'application à l'aide de React Native.",
							status: 'En production',
						},
					],
				},
				{
					name: 'Puravida',
					period: '2022 - Présent',
					role: 'Développeur Frontend Senior (01/2022 - Présent)',
					projects: [
						{
							name: 'Puravida',
							description:
								"Magasin de produits naturels, développement de nouvelles fonctionnalités et maintenance du site Web à l'aide de React.",
							status: 'En production',
						},
						{
							name: 'Puravida PRIME',
							description:
								"Plateforme de streaming de contenu santé et bien-être, développement de nouvelles fonctionnalités et maintenance du site Web à l'aide de React et de l'application mobile à l'aide de React Native.",
							status: 'En production',
						},
					],
				},
			],
		},
		links: {
			jobTitle: 'Développeur logiciel',
		},
		tools: {
			title: 'Outils',
		},
		terminal: {
			headerTitle: 'terminal@carlosdaniel:~',
			promptUser: 'carlosdaniel',
			promptLocation: '~',
			clickToFocus: 'Cliquez pour concentrer',
			welcome:
				"Bienvenue dans le terminal interactif! Tapez 'help' pour voir les commandes disponibles.",
			typeHelp: "Tapez 'help' pour voir les commandes disponibles.",
			commandNotFound:
				"commande introuvable. Tapez 'help' pour les commandes disponibles.",
			availableCommands: 'Commandes disponibles',
			whoami: 'Carlos Daniel - Développeur Frontend',
			skills: {
				frontend: 'Frontend: React, TypeScript, Next.js',
				backend: 'Backend: Node.js, Express',
				other: 'Autre: Git, Docker, AWS',
			},
			projects:
				'1. Site Web Personnel - Ce site\n2. Plateforme E-commerce - React + Node.js\n3. Application de Gestion des Tâches - React Native\n4. Tableau de Bord de Visualisation de Données - D3.js + React',
			experience:
				'Développeur Frontend Senior @ NiceCompany (2020-Présent)\nDéveloppeur Frontend @ OtherCompany (2018-2020)\nDéveloppeur Junior @ StartupName (2017-2018)',
			contact:
				'Email: hello@carlosdaniel.dev\nGitHub: github.com/devcarlosdaniel',
			home: 'Redirection vers la vue standard...',
			about: 'Redirection vers la page à propos...',
			ls: 'whoami\nskills\nprojects\nexperience\ncontact\nhelp\nhome\nabout\nclear',
			instructions:
				'Tapez des commandes pour interagir avec le terminal. Essayez "help" pour voir les commandes disponibles.',
			commands: {
				whoami: 'Qui suis-je',
				skills: 'Mes compétences',
				projects: "Projets sur lesquels j'ai travaillé",
				experience: 'Mon expérience professionnelle',
				contact: 'Informations de contact',
				ls: 'Lister les commandes disponibles',
				clear: 'Effacer le terminal',
				home: "Retourner à la page d'accueil",
				about: 'Voir la page détaillée à propos de moi',
				help: 'Afficher les commandes disponibles',
			},
		},
		components: {
			footer: {
				infoFooter: 'fait avec ☕️ par @carlosdaniel.dev',
				copyright: 'Tous droits réservés',
			},
			flagLabels: {
				pt: 'Portugais',
				en: 'Anglais',
				de: 'Allemand',
				uk: 'Ukrainien',
				es: 'Espagnol',
				ru: 'Russe',
				fr: 'Français',
				jp: 'Japonais',
			},
			header: {
				home: "Page d'accueil",
				links: 'Liens',
				tools: 'Outils',
				about: 'À propos de moi',
			},
			timer: {
				message: 'bientôt disponible...',
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
				others: 'Autres: Git, GraphQL, Tests',
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
