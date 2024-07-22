import { useTranslation } from 'react-i18next';
import * as S from './styles';

export const Daniel: React.FC = () => {
	const { t } = useTranslation();

	return (
		<S.Wrapper>
			<S.Header>
				<S.Title>{t('home.title')}</S.Title>
			</S.Header>
			<S.Container>
				<S.Subtitle>{t('home.whoIs')}</S.Subtitle>
				<S.Paragraph>{t('home.description')}</S.Paragraph>
				<S.Subtitle>{t('home.experience')}</S.Subtitle>
				<S.UnorderedList>
					<S.ListItem>{t('home.experience1')}</S.ListItem>
					<S.ListItem>{t('home.experience2')}</S.ListItem>
					<S.ListItem>{t('home.experience3')}</S.ListItem>
					<S.ListItem>{t('home.experience4')}</S.ListItem>
				</S.UnorderedList>
			</S.Container>
			<S.Footer>
				<S.Paragraph>
					{t('home.thanksForVisiting')} <br />
					<S.Anchor to="/links">{t('home.contact')}</S.Anchor>{' '}
					{t('home.moreInfo')}
				</S.Paragraph>
			</S.Footer>
		</S.Wrapper>
	);
};
