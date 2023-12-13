import { calculateExperience } from 'src/utils';

const years = calculateExperience(2018);

export const de = {
	translation: {
		home: {
			title: 'Carlos Daniel - Softwareentwickler',
			whoIs: 'Wer ist Carlos Daniel?',
			description:
				'Carlos Daniel ist ein Softwareentwickler, der sich für Musik, Philosophie, Kung Fu und einen ausgewogenen Lebensstil begeistert.',
			experience: 'Berufserfahrung',
			experience1: `Über ${years} Jahre Erfahrung in der Entwicklung von Web- und Hybrid-Apps.`,
			experience2: 'Kenntnisse im Azure-Ökosystem.',
			experience3: 'Experte in Softwareentwickler mit React und React Native.',
			experience4: 'Verwendet TypeScript im täglichen Gebrauch.',
			thanksForVisiting: 'Danke, dass du meine Website besucht hast!',
			contact: 'Kontakt',
			moreInfo: 'für weitere Informationen.',
		},
		links: {
			jobTitle: 'Softwareentwickler',
		},
		tools: {
			title: '',
		},
		components: {
			footer: {
				infoFooter: 'fertig mit ☕️von @carlosdaniel.dev',
			},
			flagLabels: {
				pt: 'Portugiesisch',
				en: 'Englisch',
				de: 'Deutsch',
				uk: 'Ukrainisch',
				es: 'Spanisch',
				ru: 'Russisch',
				fr: 'Französisch',
				jp: 'Japans',
			},
			header: {
				home: 'Startseite',
				links: 'Linkseite',
				tools: '',
			},
			timer: {
				message: 'kommt bald ...',
			},
		},
	},
};
