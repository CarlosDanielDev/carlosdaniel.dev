import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 20px;
	align-self: flex-end;
	z-index: 5;
`;

const LanguageButton = styled.button<{ isActive: boolean }>`
	background: ${props =>
		props.isActive ? ({ theme }) => theme.palette.primary : 'transparent'};
	color: ${props =>
		props.isActive ? '#FFFFFF' : ({ theme }) => theme.palette.title};
	border: 1px solid ${({ theme }) => theme.palette.primary};
	padding: 4px 10px;
	border-radius: 4px;
	font-size: 1.3rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${props =>
			props.isActive
				? ({ theme }) => theme.palette.primary
				: 'rgba(0, 0, 0, 0.05)'};
	}
`;

export const LanguageSwitcher: React.FC = () => {
	const { i18n, t } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<Container>
			<LanguageButton
				isActive={i18n.language === 'pt'}
				onClick={() => changeLanguage('pt')}
			>
				{t('components.flagLabels.pt')}
			</LanguageButton>
			<LanguageButton
				isActive={i18n.language === 'en'}
				onClick={() => changeLanguage('en')}
			>
				{t('components.flagLabels.en')}
			</LanguageButton>
		</Container>
	);
};
