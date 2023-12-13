import { calculateExperience } from 'src/utils';

const years = calculateExperience(2018);

export const ru = {
	translation: {
		home: {
			title: 'Карлос Даниэль - Разработчик',
			whoIs: 'Кто такой Карлос Даниэль?',
			description:
				'Карлос Даниэль - разработчик интерфейсов, увлеченный музыкой, философией, Кунг Фу и здоровым образом жизни.',
			experience: 'Опыт работы',
			experience1: `Более ${years} лет опыта разработки веб- и гибридных приложений.`,
			experience2: 'Знание экосистемы Azure.',
			experience3: 'Специалист по интерфейсам, работающий с React и React Native.',
			experience4: 'Использует TypeScript в повседневной работе.',
			thanksForVisiting: 'Благодарим за посещение нашего сайта!',
			contact: 'контакт',
			moreInfo: 'для получения дополнительной информации.',
		},
		links: {
			jobTitle: 'Разработчик программного обеспечения',
		},
		tools: {
			title: '',
		},
		components: {
			footer: {
				infoFooter: 'сделано с ☕️ @carlosdaniel.dev',
			},
			flagLabels: {
				pt: 'Португальский',
				en: 'английский',
				de: 'Немецкий',
				uk: 'украинец',
				es: 'испанский язык',
				ru: 'русский',
				fr: 'Французский',
				jp: 'Японский',
			},
			header: {
				home: 'домашняя страница',
				links: 'Страница ссылок',
				tools: '',
			},
			timer: {
				message: 'вскоре ...',
			},
		},
	},
};
