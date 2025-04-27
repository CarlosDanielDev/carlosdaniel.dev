import { css } from 'styled-components';
import { colors } from './colors';

// Criando um tema cyberpunk completo manualmente para garantir compatibilidade com DefaultTheme
export const cyberpunk = {
	title: 'cyberpunk',
	palette: {
		background: colors.cyberBlack,
		backgroundHover: colors.cyberDarkBlue,
		title: colors.white,
		primary: colors.neonBlue,
		textColorPrimary: colors.white,
		textPrimary: colors.white,
		secondary: colors.white,
		placeholder: colors.neonBlue,
		shadow:
			'0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF, 0 0 40px #FF00FF',
		innerShadow: '0 0 5px #00FFFF inset, 0 0 10px #00FFFF inset',
		fadedShadow: '0 0 15px rgba(255, 0, 255, 0.7)',
		error: colors.red,
		windowBg: colors.cyberBlack,
		buttonFace: colors.cyberDarkBlue,
		buttonHighlight: colors.neonBlue,
		buttonShadow: colors.cyberBlack,
		buttonText: colors.white,
		windowHeader: colors.neonPurple,
		windowFrame: colors.neonPink,
		accent1: colors.neonPink,
		accent2: colors.neonBlue,
		accent3: colors.neonGreen,
		accent4: colors.electricBlue,
		glowText: colors.neonPink,
		textGlow: '0 0 5px #FF00FF, 0 0 10px #FF00FF',
		terminal: css`#0a0a16`,
		scanline: 'rgba(0, 255, 255, 0.05)',
	},
	breakpoints: {
		desktop: '(max-width: 576px)',
		xs: '480px',
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1200px',
		xxl: '1600px',
	},
};
