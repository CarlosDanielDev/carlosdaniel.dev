import React from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline } from './components';
import { Daniel } from './components/Daniel';
import * as S from './styles';

interface HomeProps {}

const data = [
	{
		year: 2018,
		company: 'Niceplanet',
		description: 'teste teste teste teste teste teste',
		job_description: 'Developer Jr',
	},
	{
		year: 2018,
		company: 'Niceplanet',
		description: 'teste teste teste teste teste teste',
		job_description: 'Developer Jr',
	},
	{
		year: 2018,
		company: 'Niceplanet',
		description: 'teste teste teste teste teste teste',
		job_description: 'Developer Jr',
	},
	{
		year: 2018,
		company: 'Niceplanet',
		description: 'teste teste teste teste teste teste',
		job_description: 'Developer Jr',
	},
	{
		year: 2018,
		company: 'Niceplanet',
		description: 'teste teste teste teste teste teste',
		job_description: 'Developer Jr',
	},
	{
		year: 2018,
		company: 'Niceplanet',
		description: 'teste teste teste teste teste teste',
		job_description: 'Developer Jr',
	},
];

export const Home: React.FC<HomeProps> = () => {
	const { t } = useTranslation();
	return (
		<S.Wrapper>
			<Daniel />
		</S.Wrapper>
	);
};
