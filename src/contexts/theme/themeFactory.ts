import { ThemeModel } from './models';
import { dark } from './dark';
import { light } from './light';
import { y2k } from './y2k';
import { win98 } from './win98';
import { cyberpunk } from './cyberpunk';
import { retroComputer } from './retroComputer';

export class ThemeFactory {
	private static readonly themes = {
		dark,
		light,
		y2k,
		win98,
		cyberpunk,
		retroComputer,
	};

	public static createTheme(themeName: string): ThemeModel {
		const theme = this.themes[themeName as keyof typeof this.themes];

		if (!theme) {
			return this.themes.retroComputer;
		}

		return theme;
	}

	public static getNextTheme(currentTheme: ThemeModel): ThemeModel {
		const themeSequence = [
			'retroComputer',
			'win98',
			'light',
			'dark',
			'y2k',
			'cyberpunk',
		];

		const currentIndex = themeSequence.indexOf(currentTheme.title);
		const nextIndex = (currentIndex + 1) % themeSequence.length;

		return this.createTheme(themeSequence[nextIndex]);
	}
}
