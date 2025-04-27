/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';
import { TerminalLineCollection } from './models';
import {
	AnimationState,
	TypingAnimationService,
} from './services/TypingAnimationService';
import { CommandLine } from './components/CommandLine';
import { CommandOutputComponent } from './components/CommandOutput';

interface RetroTerminalProps {
	className?: string;
}

export const RetroTerminal: React.FC<RetroTerminalProps> = ({ className }) => {
	const { t } = useTranslation();

	const terminalLineCollection = TerminalLineCollection.createDefaultLines(t);
	const commands = terminalLineCollection.getCommands();
	const outputs = terminalLineCollection.getOutputs();

	const [animationState, setAnimationState] = useState<AnimationState>({
		visibleLines: [],
		currentLineIndex: 0,
		currentCharIndex: 0,
		showCursor: true,
	});

	useEffect(() => {
		const animationService = new TypingAnimationService(commands, outputs);

		const cleanup = animationService.startAnimation(setAnimationState);

		return cleanup;
	}, [commands, outputs]);

	const { visibleLines, currentLineIndex, showCursor } = animationState;

	return (
		<S.TerminalWrapper className={className}>
			<S.TerminalHeader>
				<S.TerminalTitle>
					{t('retroTerminal.title', 'terminal@carlosdaniel:~')}
				</S.TerminalTitle>
			</S.TerminalHeader>
			<S.TerminalContent>
				{visibleLines.map((line, index) => {
					// Even indexes are commands, odd indexes are outputs
					if (index % 2 === 0) {
						return (
							<CommandLine
								key={index}
								command={line}
								isCurrent={index === currentLineIndex}
								showCursor={showCursor}
							/>
						);
					}

					// Output lines
					return <CommandOutputComponent key={index} output={line} />;
				})}

				{currentLineIndex >= commands.length * 2 && (
					<CommandLine command="" isCurrent showCursor={showCursor} />
				)}
			</S.TerminalContent>
		</S.TerminalWrapper>
	);
};
