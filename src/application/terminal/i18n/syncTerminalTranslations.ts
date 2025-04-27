import fs from 'fs';
import path from 'path';

// Caminhos para os arquivos de tradução
const localesDir = path.resolve(__dirname, '../../../../public/locales');
const languages = ['en', 'pt', 'es', 'de', 'fr', 'jp', 'ru', 'uk'];

// Carregar a estrutura de tradução em inglês como base
const englishTranslationsPath = path.join(localesDir, 'en/index.ts');
const englishContent = fs.readFileSync(englishTranslationsPath, 'utf8');

// Expressão regular para extrair o objeto de tradução
const translationRegex =
	/export const en = {\s*translation:\s*({[\s\S]*?})\s*};/;
const match = englishContent.match(translationRegex);

if (!match || !match[1]) {
	console.error('Não foi possível extrair as traduções em inglês');
	process.exit(1);
}

// Extrair a estrutura do terminal em inglês
const terminalRegex = /terminal:\s*({[\s\S]*?}),\s*components/;
const retroTerminalRegex = /retroTerminal:\s*({[\s\S]*?})\s*},\s*}/;

const terminalMatch = englishContent.match(terminalRegex);
const retroTerminalMatch = englishContent.match(retroTerminalRegex);

if (
	!terminalMatch ||
	!terminalMatch[1] ||
	!retroTerminalMatch ||
	!retroTerminalMatch[1]
) {
	console.error('Não foi possível extrair as traduções do terminal em inglês');
	process.exit(1);
}

const terminalStructure = terminalMatch[1];
const retroTerminalStructure = retroTerminalMatch[1];

// Processar cada idioma
languages.forEach(lang => {
	if (lang === 'en') return; // Já processamos o inglês

	const langPath = path.join(localesDir, `${lang}/index.ts`);
	let content = fs.readFileSync(langPath, 'utf8');

	// Verificar se já possui a estrutura do terminal
	const hasTerminal = content.includes('terminal:');
	const hasRetroTerminal = content.includes('retroTerminal:');

	if (!hasTerminal) {
		// Adicionar a estrutura do terminal
		content = content.replace(
			/(translation:\s*{[\s\S]*?)(}\s*};)/,
			`$1terminal: ${terminalStructure},\n$2`,
		);
	} else {
		// Atualizar a estrutura existente
		content = content.replace(
			/terminal:\s*{[\s\S]*?},\s*(components|links|tools)/,
			`terminal: ${terminalStructure},\n  $1`,
		);
	}

	if (!hasRetroTerminal) {
		// Adicionar a estrutura do retroTerminal
		content = content.replace(
			/(translation:\s*{[\s\S]*?)(}\s*};)/,
			`$1retroTerminal: ${retroTerminalStructure},\n$2`,
		);
	} else {
		// Atualizar a estrutura existente
		content = content.replace(
			/retroTerminal:\s*{[\s\S]*?}\s*},\s*}/,
			`retroTerminal: ${retroTerminalStructure}\n  },\n}`,
		);
	}

	// Salvar as alterações
	fs.writeFileSync(langPath, content, 'utf8');
	console.log(`Traduções atualizadas para o idioma: ${lang}`);
});

console.log('Sincronização de traduções concluída com sucesso!');
