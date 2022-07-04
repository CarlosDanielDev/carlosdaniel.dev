import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, MoreHorizontal } from 'react-feather';
import * as S from './styles';

interface ToolsProps {}

export const Tools: React.FC<ToolsProps> = () => {
	const data = useMemo(
		() => [
			{
				name: 'Task list',
				id: 'task-list',
				route: 'task-list',
				icon: <CheckSquare size={40} />,
			},
			{
				name: 'Morse Translator',
				id: 'morse-translator',
				route: 'morse',
				icon: <MoreHorizontal size={40} />,
			},
		],
		[],
	);
	return (
		<S.Container>
			<S.Title>Ferramentas</S.Title>

			<S.List>
				{data.map(tool => (
					<Link to={tool.route}>
						<S.Item key={tool.id}>
							{tool.icon}
							<S.CaptionContainer className="title-tool-item">
								<S.Caption>{tool.name}</S.Caption>
							</S.CaptionContainer>
						</S.Item>
					</Link>
				))}
			</S.List>
		</S.Container>
	);
};
