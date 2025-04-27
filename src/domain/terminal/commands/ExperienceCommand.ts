import { TFunction } from 'i18next';
import { CommandHandler } from '../CommandRepository';

interface Project {
	name: string;
	description: string;
	status: string;
}

interface Experience {
	name: string;
	period: string;
	role: string;
	projects: Project[];
}

export class ExperienceCommand implements CommandHandler {
	private readonly t: TFunction;

	constructor(t: TFunction) {
		this.t = t;
	}

	execute(): string {
		try {
			// Busca as experiências das traduções
			const experiences = this.t('home.experiences', {
				returnObjects: true,
			}) as Experience[];

			// Formata as experiências para exibição no terminal
			const formattedExperiences = experiences
				.map(experience => {
					const formattedProjects = experience.projects
						.map(
							project =>
								`    - ${project.name}: ${project.description} (${project.status})`,
						)
						.join('\n');

					return `
• ${experience.name} (${experience.period})
  ${experience.role}
  Projetos:
${formattedProjects}
`;
				})
				.join('\n');

			return `${this.t(
				'terminal.commands.experience',
				'Professional Experience:',
			)}\n${formattedExperiences}`;
		} catch (error) {
			return 'Error loading experiences. Try again later.';
		}
	}
}
