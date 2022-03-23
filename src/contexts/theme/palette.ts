import { colors } from 'src/contexts/theme/colors';

export const palette = {
	palette01: {
		dark: {
			background: colors.charlestonGreen,
			backgroundHover: colors.outerSpace,
			title: colors.white,
			primary: colors.brandeisBlue,
			textColorPrimary: colors.white,
			secondary: colors.manatee,
			placeholder: colors.sonicSilver,
			shadow:
				'rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px',
			fadedShadow: `0px 22px 119px 0px ${colors.outerSpace75}`,
			error: colors.red,
		},
		light: {
			background: colors.ghostWhite,
			backgroundHover: colors.white,
			title: colors.outerSpace,
			primary: colors.brandeisBlue,
			textColorPrimary: colors.white,
			secondary: colors.spanishGrey,
			placeholder: colors.sonicSilver,
			shadow:
				'rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px',
			fadedShadow: `0px 22px 119px 0px ${colors.white75}`,
			error: colors.red,
		},
	},
	palette02: {
		dark: {
			background: '',
			backgroundHover: '',
			title: '',
			primary: '',
			textColorPrimary: '',
			secondary: '',
			placeholder: '',
			shadow: '',
			fadedShadow: '',
			error: '',
		},
		light: {
			background: '',
			backgroundHover: '',
			title: '',
			primary: '',
			textColorPrimary: '',
			secondary: '',
			placeholder: '',
			shadow: '',
			fadedShadow: '',
			error: '',
		},
	},
};
