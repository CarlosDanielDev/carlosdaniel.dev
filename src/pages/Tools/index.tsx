import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'react-feather';
import * as S from './styles';

interface ToolsProps {}

export const Tools: React.FC<ToolsProps> = () => {
	const data = useMemo(
		() => [
			{
				name: 'To-Do list',
				id: 'to-do-list',
				route: 'todo-list',
				icon: <List size={40} />,
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
