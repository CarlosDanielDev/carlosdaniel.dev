import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../styles';

interface CommandLineProps {
	command: string;
	isCurrent: boolean;
	showCursor: boolean;
}

export const CommandLine: React.FC<CommandLineProps> = ({
	command,
	isCurrent,
	showCursor,
}) => {
	const { t } = useTranslation();

	return (
		<S.TerminalPrompt>
			<S.PromptUser>
				{t('retroTerminal.promptUser', 'carlosdaniel')}
			</S.PromptUser>
			<S.PromptLocation>
				{t('retroTerminal.promptLocation', '~')}
			</S.PromptLocation>
			<S.PromptChar>$</S.PromptChar>
			<S.TerminalLine>
				{command}
				{isCurrent && showCursor && <S.Cursor position={command.length} />}
			</S.TerminalLine>
		</S.TerminalPrompt>
	);
};
