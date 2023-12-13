import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { en, pt, de, es, ru, uk, fr, jp } from 'src/public/locales';

i18n
	.use(initReactI18next)
	// .use(LanguageDetector)
	.init({
		debug: true,
		fallbackLng: 'pt',
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		resources: {
			pt,
			en,
			jp,
			de,
			es,
			ru,
			uk,
			fr,
		},
	});

export default i18n;
