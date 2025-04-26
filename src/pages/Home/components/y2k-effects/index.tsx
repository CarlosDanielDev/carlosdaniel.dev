import React, { useState, useEffect } from 'react';
import { useTheme } from 'src/contexts/theme';
import * as S from './styles';

export const Y2KEffects: React.FC = () => {
	const { currentTheme } = useTheme();
	const isY2K = currentTheme.title === 'y2k';
	const isCyberpunk = currentTheme.title === 'cyberpunk';
	const [showBoot, setShowBoot] = useState(true);

	const matrixChars =
		'01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowBoot(false);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<S.RetroScanline />
			<S.CornerEffectBox isY2K={isY2K} isCyberpunk={isCyberpunk} />

			{showBoot && (
				<S.BootSequence>
					<S.TerminalLine delay={0.2}>SYSTEM BOOT SEQUENCE</S.TerminalLine>
					<S.TerminalLine delay={0.8}>INITIALIZING SYSTEM...</S.TerminalLine>
					<S.TerminalLine delay={1.5}>LOADING USER PROFILE</S.TerminalLine>
					<S.TerminalLine delay={2.2}>
						WELCOME TO CARLOS DANIEL.DEV
					</S.TerminalLine>
				</S.BootSequence>
			)}

			{isCyberpunk && (
				<>
					<S.MatrixContainer>
						{Array.from({ length: 10 }, (_, i) => (
							<S.MatrixCharacter key={i}>
								{matrixChars[Math.floor(Math.random() * matrixChars.length)]}
							</S.MatrixCharacter>
						))}
					</S.MatrixContainer>

					<S.GlitchEffect>SYS:// ACTIVE</S.GlitchEffect>
				</>
			)}
		</>
	);
};
