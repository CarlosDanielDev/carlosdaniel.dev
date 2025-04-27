import { Interpolation } from 'styled-components';

export interface ThemePalette {
	background: string;
	backgroundHover: string;
	title: string;
	primary: string;
	textColorPrimary: string;
	textPrimary: string;
	secondary: string;
	placeholder: string;
	shadow: string;
	fadedShadow?: string;
	innerShadow?: string;
	error: string;
	windowBg?: string;
	buttonFace?: string;
	buttonHighlight?: string;
	buttonShadow?: string;
	buttonText?: string;
	windowHeader?: string;
	windowFrame?: string;
	activeTitleText?: string;
	accent1?: string;
	accent2?: string;
	accent3?: string;
	accent4?: string;
	glowText?: string;
	textGlow?: string;
	terminal: Interpolation<any>;
	scanline: string;
}

export interface ThemeBreakpoints {
	desktop?: string;
	xs?: string;
	sm?: string;
	md?: string;
	lg?: string;
	xl?: string;
	xxl?: string;
}

export interface ThemeModel {
	title: string;
	palette: ThemePalette;
	breakpoints: ThemeBreakpoints;
}

export type ThemeType = ThemeModel;
