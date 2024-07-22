import React from 'react';
import { calculateExperience } from 'src/utils';
import * as S from './styles';

const experiences = [
	{
		start: 2018,
		end: 2020,
		name: 'Niceplanet',
		hyperlink: 'https://niceplanet.com.br',
		description:
			'Desenvolvedor Fullstack Júnior(02/2018 - 08/2018) / Desenvolvedor Fullstack Pleno(08/2018 - 06/2020)',
		projects: [
			{
				link: 'https://niceplanet.com.br',
				name: 'Niceplanet',
				description:
					'Smgeo - Projeto de análise e monitoramento de propriedades usando PHP e Slim Framework com Twig template',
				status: 'Em produção',
			},
			{
				link: 'https://consulta.smgeo.com.br',
				name: 'Smgeo Consulta',
				description:
					'Portal de consulta no monitoramento já realizados para clientes do Smgeo utlizando React.',
				status: 'Em produção',
			},
		],
	},
	{
		start: 2020,
		end: 2020,
		name: 'Primepass(current Primepass Connect)',
		hyperlink: 'https://www.primepconnect.com',
		description:
			'Desenvolvedor Mobile híbrido Pleno(06/2020 - 10/2020) / Desenvolvedor Mobile híbrido Sênior(10/2020 - 12/2020)',
		projects: [
			{
				link: 'https://www.primepconnect.com',
				name: 'Primepass',
				description:
					'Aplicativo de venda de ingressos e eventos por assinatura feito com React Native.',
				status: 'Discontinuado',
			},
		],
	},
	{
		start: 2021,
		end: 2021,
		name: 'Appertech(current Mathex) - {Smiles[GOL]}',
		hyperlink: 'https://mathex.com.br',
		description: 'Desenvolvedor Frontend Sênior (01/2021 - 03/2021)',
		projects: [
			{
				link: 'https://www.smiles.com.br',
				name: 'Smiles',
				description:
					'Programa de fidelidade da GOL, desenvolvimento da feature de aluguel de carros pela Localiza dentro do site da Smiles.',
				status: 'Em produção',
			},
		],
	},
	{
		start: 2021,
		end: 2021,
		name: 'Appertech(current Mathex) - {Stix}',
		hyperlink: 'https://mathex.com.br',
		description: 'Desenvolvedor Mobile híbrido Sênior (03/2021 - 12/2021)',
		projects: [
			{
				link: 'https://www.soustix.com.br',
				name: 'Stix',
				description:
					'Aplicativo de cashback, desenvolvimento de novas features e manutenção do aplicativo utilizando React Native.',
				status: 'Em produção',
			},
		],
	},
	{
		start: 2022,
		end: undefined,
		name: 'Puravida',
		hyperlink: 'https://puravida.com.br',
		description: 'Desenvolvedor Frontend Sênior (01/2022 - Atual)',
		projects: [
			{
				link: 'https://www.puravida.com.br',
				name: 'Puravida',
				description:
					'Loja de produtos naturais, desenvolvimento de novas features e manutenção do site utilizando React.',
				status: 'Em produção',
			},
			{
				link: 'https://app.puravidaprime.com.br',
				name: 'Puravida PRIME',
				description:
					'Plataforma de streaming de conteúdo de saúde e bem-estar, desenvolvimento de novas features e manutenção do site utilizando React e aplicativo mobile utilizando React Native.',
				status: 'Em produção',
			},
		],
	},
];

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const years = calculateExperience(2018);
	return (
		<S.Wrapper>
			<S.Section>
				<S.Title>Olá,</S.Title>
				<S.Paragraph>
					Meu nome é Carlos Daniel, sou desenvolvedor há {years} anos e este é o meu site pessoal.
				</S.Paragraph>
			</S.Section>

			<S.Section>
				<S.Paragraph>
					Aqui abaixo você pode encontrar alguns dos meus projetos e projetos que eu participei ao
					longo da minha carreira.
				</S.Paragraph>
			</S.Section>

			<S.Section>
				<S.ExperienceList>
					{experiences.map((experience, index) => (
						<S.ExperienceItem key={`${index + 1}-xp`}>
							<S.ExperienceDate>
								{experience.start} - {experience.end ?? 'Atual'}
							</S.ExperienceDate>
							<S.ExperienceName
								href={experience.hyperlink}
								target="_blank"
								rel="noopener noreferrer"
							>
								{experience.name}
							</S.ExperienceName>
							<S.Paragraph>{experience.description}</S.Paragraph>
							{experience.projects.map((project, index) => (
								<S.ProjectPreview key={`${index + 1}-item`}>
									<S.ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
										{project.name}
									</S.ProjectLink>
									<S.Paragraph>{project.description}</S.Paragraph>
									<S.Status>{project.status}</S.Status>
								</S.ProjectPreview>
							))}
						</S.ExperienceItem>
					))}
				</S.ExperienceList>
			</S.Section>
		</S.Wrapper>
	);
};
