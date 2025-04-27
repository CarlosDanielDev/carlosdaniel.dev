import React from 'react';
import { CenteredContainer } from 'src/components/container';
import { RetroTerminalView } from 'src/pages/terminal/RetroTerminalView';
import * as S from 'src/pages/terminal/styles';

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
