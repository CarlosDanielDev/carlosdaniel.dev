import { calculateExperience } from 'src/utils';

const years = calculateExperience(2018);

export const uk = {
	translation: {
		home: {
			title: 'Карлос Даніель - Розробник',
			whoIs: 'Хто такий Карлос Даніель?',
			description:
				'Карлос Даніель - розробник інтерфейсів, захоплений музикою, філософією, Кунг Фу та здоровим способом життя.',
			experience: 'Досвід роботи',
			experience1: `Більше ${years} років досвіду розробки веб- та гібридних додатків.`,
			experience2: 'Знання екосистеми Azure.',
			experience3:
				'Спеціаліст з інтерфейсів, що працює з React та React Native.',
			experience4: 'Використовує TypeScript у повсякденній роботі.',
			thanksForVisiting: 'Дякуємо за відвідування нашого сайту!',
			contact: 'контакт',
			moreInfo: 'для отримання додаткової інформації.',
		},
		links: {
			jobTitle: 'Розробник програмного забезпечення',
		},
		tools: {
			title: '',
		},
		components: {
			footer: {
				infoFooter: 'зроблено з ☕️ @carlosdaniel.dev',
			},
			flagLabels: {
				pt: 'португальська',
				en: 'англійська',
				de: 'німецька',
				uk: 'український',
				es: 'іспанська',
				ru: 'російський',
				fr: 'французький',
				jp: 'Японський',
			},
			header: {
				home: 'домашня сторінка',
				links: 'Сторінка посилань',
				tools: '',
			},
			timer: {
				message: 'незабаром...',
			},
		},
	},
};
