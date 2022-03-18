import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'react-feather';
import * as S from './styles';

interface FlagSelectProps {}

type FlagItem = {
	code: string;
	image: string;
	label: string;
	enabled: boolean;
};

export const FlagSelect: React.FC<FlagSelectProps> = () => {
	const { t, i18n } = useTranslation();

	const [isListVisible, setIsListVisible] = useState(false);
	const flagData = useMemo(
		() => [
			{
				image: 'https://i.imgur.com/FBbgMx9.png',
				label: t('components.flagLabels.pt'),
				code: 'pt',
				enabled: true,
			},
			{
				image: 'https://i.imgur.com/nbq1JB0.png',
				label: t('components.flagLabels.en'),
				code: 'en',
				enabled: true,
			},
			{
				image: 'https://i.imgur.com/YjDLPmT.png',
				label: t('components.flagLabels.es'),
				code: 'es',
				enabled: true,
			},
			{
				image: 'https://i.imgur.com/ptCzgAo.png',
				label: t('components.flagLabels.uk'),
				code: 'uk',
				enabled: true,
			},
			{
				image: 'https://i.imgur.com/ODVvTzT.png',
				label: t('components.flagLabels.de'),
				code: 'de',
				enabled: true,
			},
			{
				image: 'https://i.imgur.com/MsyuHm1.png',
				label: t('components.flagLabels.fr'),
				code: 'fr',
				enabled: true,
			},
			{
				image: 'https://i.imgur.com/DRH1wY7.png',
				label: t('components.flagLabels.ru'),
				code: 'ru',
				enabled: true,
			},
		],
		[t],
	);

	const [active, setActive] = useState<FlagItem>({} as FlagItem);

	const handleOpenSelectFlagList = () => {
		setIsListVisible(state => !state);
	};

	useEffect(() => {
		const current = flagData.find(item => item.code === i18n.language);
		if (current) {
			setActive(current);
		}
	}, [flagData, i18n.language]);

	return (
		<S.Container>
			<S.Item
				enabled
				active={isListVisible}
				key={active.code}
				onClick={handleOpenSelectFlagList}
			>
				<S.ImageContainer>
					<S.Flag src={active.image} />
				</S.ImageContainer>
				<S.LabelContainer className="label-container">
					<S.Label>{active.label}</S.Label>
					<ChevronDown size={16} />
				</S.LabelContainer>
			</S.Item>
			{isListVisible && (
				<S.List>
					{flagData
						.filter(item => item.code !== active.code)
						.map(flag => (
							<S.Item
								active={isListVisible}
								enabled={flag.enabled}
								key={flag.code}
								onClick={() => {
									if (flag.enabled) {
										i18n.changeLanguage(flag.code).then(() => {
											const item = {
												...flag,
												label: t(`components.flagLabels.${flag.code}`),
											};
											setActive(item as FlagItem);
											handleOpenSelectFlagList();
										});
									}
								}}
							>
								<S.ImageContainer>
									<S.Flag src={flag.image} />
								</S.ImageContainer>
								<S.LabelContainer className="label-container">
									<S.Label title={flag.label}>{flag.label}</S.Label>
								</S.LabelContainer>
							</S.Item>
						))}
				</S.List>
			)}
		</S.Container>
	);
};
