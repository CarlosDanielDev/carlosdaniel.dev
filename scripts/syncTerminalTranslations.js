#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Caminhos para os arquivos de tradução
const localesDir = path.resolve(__dirname, '../src/public/locales');
const languages = ['en', 'pt', 'es', 'de', 'fr', 'jp', 'ru', 'uk'];

// Carregar a estrutura de tradução em inglês como base
console.log('Carregando arquivo de tradução em inglês...');
const englishTranslationsPath = path.join(localesDir, 'en/index.ts');

if (!fs.existsSync(englishTranslationsPath)) {
	console.error(`Arquivo não encontrado: ${englishTranslationsPath}`);
	process.exit(1);
}

const englishContent = fs.readFileSync(englishTranslationsPath, 'utf8');

// Template de tradução do terminal
const terminalTemplate = `
  headerTitle: 'terminal@carlosdaniel:~',
  promptUser: 'carlosdaniel',
  promptLocation: '~',
  clickToFocus: 'Click to focus',
  welcome: "Welcome to the interactive terminal! Type 'help' to see available commands.",
  typeHelp: "Type 'help' to see available commands.",
  commandNotFound: "command not found. Type 'help' for available commands.",
  availableCommands: 'Available commands',
  whoami: 'Carlos Daniel - Frontend Developer',
  skills: {
    frontend: 'Frontend: React, TypeScript, Next.js',
    backend: 'Backend: Node.js, Express',
    other: 'Other: Git, Docker, AWS',
  },
  projects:
    '1. Personal Website - This website\\n2. E-commerce Platform - React + Node.js\\n3. Task Management App - React Native\\n4. Data Visualization Dashboard - D3.js + React',
  experience:
    'Senior Frontend Developer @ NiceCompany (2020-Present)\\nFrontend Developer @ OtherCompany (2018-2020)\\nJunior Developer @ StartupName (2017-2018)',
  contact:
    'Email: hello@carlosdaniel.dev\\nGitHub: github.com/devcarlosdaniel',
  home: 'Redirecting to standard view...',
  about: 'Redirecting to about page...',
  ls: 'whoami\\nskills\\nprojects\\nexperience\\ncontact\\nhelp\\nhome\\nabout\\nclear',
  instructions:
    'Type commands to interact with the terminal. Try "help" to see available commands.',
  commands: {
    whoami: 'Who am I',
    skills: 'My skills',
    projects: "Projects I've worked on",
    experience: 'My professional experience',
    contact: 'Contact information',
    ls: 'List available commands',
    clear: 'Clear terminal',
    home: 'Go back to homepage',
    about: 'View detailed page about me',
    help: 'Show available commands',
  }
`;

// Template de tradução do retro terminal
const retroTerminalTemplate = `
  title: 'terminal@carlosdaniel:~',
  promptUser: 'carlosdaniel',
  promptLocation: '~',
  whoami: 'Carlos Daniel',
  pwd: '/home/user/projects/portfolio',
  skills: {
    frontend: 'Frontend: React, TypeScript, styled-components',
    backend: 'Backend: Node.js, Express, MongoDB',
    devops: 'DevOps: Docker, AWS',
    others: 'Others: Git, GraphQL, Testing',
  },
  projects: {
    total: 'total 4',
    dir1: 'drwxr-xr-x  2 carlosdaniel users 4096 Jun 10 09:45 .',
    dir2: 'drwxr-xr-x 19 carlosdaniel users 4096 Jun 10 09:45 ..',
    file1: '-rw-r--r--  1 carlosdaniel users  507 Jun 10 09:45 project1.md',
    file2: '-rw-r--r--  1 carlosdaniel users  721 Jun 10 09:45 project2.md',
    file3: '-rw-r--r--  1 carlosdaniel users  612 Jun 10 09:45 project3.md',
  },
  contactInfo: 'Email: hello@carlosdaniel.dev | GitHub: github.com/devcarlosdaniel'
`;

// Sincronizar cada idioma
console.log('Sincronizando traduções para todos os idiomas...');
languages.forEach(lang => {
	if (lang === 'en') return; // Já processamos o inglês

	console.log(`Processando idioma: ${lang}`);
	const langPath = path.join(localesDir, `${lang}/index.ts`);

	if (!fs.existsSync(langPath)) {
		console.warn(`Arquivo não encontrado para o idioma ${lang}, pulando...`);
		return;
	}

	try {
		let content = fs.readFileSync(langPath, 'utf8');

		// Verificar se já possui as estruturas
		const hasTerminal = content.includes('terminal:');
		const hasRetroTerminal = content.includes('retroTerminal:');

		if (!hasTerminal) {
			// Adicionar a estrutura do terminal
			content = content.replace(
				/(translation:\s*{[\s\S]*?)(}\s*};)/,
				`$1terminal: {${terminalTemplate}},\n$2`,
			);
		} else {
			// Atualizar a estrutura existente preservando valores quando possível
			content = content.replace(
				/terminal:\s*{[\s\S]*?},\s*(components|links|tools)/,
				`terminal: {${terminalTemplate}},\n  $1`,
			);
		}

		if (!hasRetroTerminal) {
			// Adicionar a estrutura do retroTerminal
			content = content.replace(
				/(translation:\s*{[\s\S]*?)(}\s*};)/,
				`$1retroTerminal: {${retroTerminalTemplate}},\n$2`,
			);
		} else {
			// Atualizar a estrutura existente preservando valores quando possível
			content = content.replace(
				/retroTerminal:\s*{[\s\S]*?}\s*},\s*}/,
				`retroTerminal: {${retroTerminalTemplate}}\n  },\n}`,
			);
		}

		// Salvar as alterações
		fs.writeFileSync(langPath, content, 'utf8');
		console.log(`✅ Traduções atualizadas para o idioma: ${lang}`);
	} catch (err) {
		console.error(`❌ Erro ao processar o idioma ${lang}:`, err);
	}
});

console.log('✨ Sincronização de traduções concluída com sucesso!');
