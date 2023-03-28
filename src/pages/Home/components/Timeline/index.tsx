import React from 'react';
import * as S from './styles';

type Experience = {
	year: number;
	company: string;
	job_description: string;
	description: string;
	projects?: string[];
};

type Props = {
	items: Experience[];
};

export const Timeline: React.FC<Props> = ({ items }) => {
	return (
		<S.TimelineWrapper>
			{items.map((item, index) => (
				<S.TimelineItem key={`${index.toString()}-timeline`}>
					<S.TimelineYear>{item.year}</S.TimelineYear>
					<S.TimelineContent>
						<S.TimelineCompanyName>{item.company}</S.TimelineCompanyName>
						<S.TimelineDescription>{item.description}</S.TimelineDescription>
					</S.TimelineContent>
				</S.TimelineItem>
			))}
		</S.TimelineWrapper>
	);
};
