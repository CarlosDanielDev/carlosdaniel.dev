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
			experience3: 'Expert in frontend development, working with React and React Native.',
			experience4: 'Uses TypeScript on a daily basis.',
			thanksForVisiting: 'Thanks for visiting my site!',
			contact: 'contact',
			moreInfo: 'for more information.',
		},
		links: {
			jobTitle: 'Software developer',
		},
		tools: {
			title: '',
		},
		components: {
			footer: {
				infoFooter: 'made with ☕️ by @carlosdaniel.dev',
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
				links: 'Links page',
				tools: 'Tools',
			},
			timer: {
				message: 'coming soon...',
			},
		},
	},
};
