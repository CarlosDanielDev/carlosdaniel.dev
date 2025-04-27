import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		palette: {
			textColorPrimary: Interpolation<
				ThemedStyledProps<
					Omit<
						DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
						'ref'
					> & {
						ref?:
							| ((instance: HTMLSpanElement | null) => void)
							| RefObject<HTMLSpanElement>
							| null
							| undefined;
					},
					DefaultTheme
				>
			>;
			scanline: string;
			terminal: Interpolation<any>;
			background: string;
			backgroundHover: string;
			title: string;
			primary: string;
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
			terminalText?: string;
			terminalPrompt?: string;
			terminalCommand?: string;
		};
		breakpoints: {
			xs?: string;
			sm?: string;
			md?: string;
			lg?: string;
			xl?: string;
			xxl?: string;
			desktop?: string;
		};
	}
}
