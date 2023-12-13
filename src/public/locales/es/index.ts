import { calculateExperience } from 'src/utils';

const years = calculateExperience(2018);

export const es = {
	translation: {
		home: {
			title: 'Carlos Daniel - Desarrollador',
			whoIs: '¿Quién es Carlos Daniel?',
			description:
				'Carlos Daniel es un desarrollador frontend apasionado por la música, la filosofía, el Kung Fu y un estilo de vida equilibrado.',
			experience: 'Experiencia Profesional',
			experience1: `Más de ${years} años de experiencia en desarrollo de aplicaciones web y híbridas.`,
			experience2: 'Conocimientos en el ecosistema de Azure.',
			experience3: 'Especialista en frontend, trabajando con React y React Native.',
			experience4: 'Usa TypeScript a diario.',
			thanksForVisiting: '¡Gracias por visitar mi sitio!',
			contact: 'contacto',
			moreInfo: 'para más información.',
		},
		links: {
			jobTitle: 'Desarrollador de software',
		},
		tools: {
			title: '',
		},
		components: {
			footer: {
				infoFooter: 'hecho con ☕️ por @carlosdaniel.dev',
			},
			flagLabels: {
				pt: 'Portugués',
				en: 'Inglés',
				de: 'Alemán',
				uk: 'Ucranio',
				es: 'Español',
				ru: 'Ruso',
				fr: 'Francés',
				jp: 'Japónes',
			},
			header: {
				home: 'Página de inicio',
				links: 'Página de enlace',
				tools: '',
			},
			timer: {
				message: 'muy pronto ...',
			},
		},
	},
};
