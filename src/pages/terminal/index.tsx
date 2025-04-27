import React from 'react';
import { CenteredContainer } from 'src/components/container';
import { RetroTerminalView } from './RetroTerminalView';
import * as S from './styles';

export const Terminal: React.FC = () => {
	return (
		<CenteredContainer>
			<RetroTerminalView />
			<S.HelpText>
				Type commands to interact with the terminal. Try &quot;help&quot; to see
				available commands.
			</S.HelpText>
		</CenteredContainer>
	);
};
