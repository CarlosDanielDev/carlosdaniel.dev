import { calculateExperience } from 'src/utils';

const years = calculateExperience(2018);

export const pt = {
	translation: {
		home: {
			title: 'Carlos Daniel - Desenvolvedor',
			whoIs: 'Quem é Carlos Daniel?',
			description:
				'Carlos Daniel é um desenvolvedor frontend apaixonado por música, filosofia, Kung Fu e um estilo de vida de equilibrado.',
			experience: 'Experiência Profissional',
			experience1: `Mais de ${years} anos de experiência com desenvolvimento de apps web e híbrido.`,
			experience2: 'Conhecimento no ecossistema Azure.',
			experience3:
				'Especialista em frontend, trabalhando com React e React Native.',
			experience4: 'Usa TypeScript no dia a dia.',
			thanksForVisiting: 'Obrigado por visitar o meu site!',
			contact: 'contato',
			moreInfo: 'para mais informações.',
			experiences: [
				{
					name: 'Niceplanet',
					period: '2018 - 2020',
					role: 'Desenvolvedor Fullstack Júnior(02/2018 - 08/2018) / Desenvolvedor Fullstack Pleno(08/2018 - 06/2020)',
					projects: [
						{
							name: 'Niceplanet',
							description:
								'Smgeo - Projeto de análise e monitoramento de propriedades usando PHP e Slim Framework com Twig template',
							status: 'Em produção',
						},
						{
							name: 'Smgeo Consulta',
							description:
								'Portal de consulta no monitoramento já realizados para clientes do Smgeo utilizando React.',
							status: 'Em produção',
						},
					],
				},
				{
					name: 'Primepass(atual Primepass Connect)',
					period: '2020 - 2020',
					role: 'Desenvolvedor Mobile híbrido Pleno(06/2020 - 10/2020) / Desenvolvedor Mobile híbrido Sênior(10/2020 - 12/2020)',
					projects: [
						{
							name: 'Primepass',
							description:
								'Aplicativo de venda de ingressos e eventos por assinatura feito com React Native.',
							status: 'Descontinuado',
						},
					],
				},
				{
					name: 'Appertech(atual Mathex) - {Smiles[GOL]}',
					period: '2021 - 2021',
					role: 'Desenvolvedor Frontend Sênior (01/2021 - 03/2021)',
					projects: [
						{
							name: 'Smiles',
							description:
								'Programa de fidelidade da GOL, desenvolvimento da feature de aluguel de carros pela Localiza dentro do site da Smiles.',
							status: 'Em produção',
						},
					],
				},
				{
					name: 'Appertech(atual Mathex) - {Stix}',
					period: '2021 - 2021',
					role: 'Desenvolvedor Mobile híbrido Sênior (03/2021 - 12/2021)',
					projects: [
						{
							name: 'Stix',
							description:
								'Aplicativo de cashback, desenvolvimento de novas features e manutenção do aplicativo utilizando React Native.',
							status: 'Em produção',
						},
					],
				},
				{
					name: 'Puravida',
					period: '2022 - Atual',
					role: 'Desenvolvedor Frontend Sênior (01/2022 - Atual)',
					projects: [
						{
							name: 'Puravida',
							description:
								'Loja de produtos naturais, desenvolvimento de novas features e manutenção do site utilizando React.',
							status: 'Em produção',
						},
						{
							name: 'Puravida PRIME',
							description:
								'Plataforma de streaming de conteúdo de saúde e bem-estar, desenvolvimento de novas features e manutenção do site utilizando React e aplicativo mobile utilizando React Native.',
							status: 'Em produção',
						},
					],
				},
			],
		},
		links: {
			jobTitle: 'Desenvolvedor de software',
		},
		tools: {
			title: '',
		},
		components: {
			footer: {
				infoFooter: 'feito com ☕️ por @carlosdaniel.dev',
				copyright: 'Todos os direitos reservados',
			},
			flagLabels: {
				pt: 'Português',
				en: 'Inglês',
				de: 'Alemão',
				uk: 'Ucraniano',
				es: 'Espanhol',
				ru: 'Russo',
				fr: 'Francês',
				jp: 'Japonês',
			},
			header: {
				home: 'Página inicial',
				links: 'Página de links',
				tools: 'Ferramentas',
			},
			timer: {
				message: 'em breve...',
			},
		},
	},
};
