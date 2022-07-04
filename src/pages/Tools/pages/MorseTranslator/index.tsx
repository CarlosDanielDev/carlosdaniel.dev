import React from 'react';
import { RefreshCw, Copy } from 'react-feather';
import { decodeAlphabet, encodeAlphabet } from 'src/constants';
import * as S from './styles';

type Timeout = ReturnType<typeof setTimeout>;

interface MorseTranslatorProps {}

export const MorseTranslator: React.FC<MorseTranslatorProps> = () => {
	const [output, setOutput] = React.useState('Translation');
	const [input, setInput] = React.useState('');
	const [order, setOrder] = React.useState(false);
	const searchTimeout = React.useRef<Timeout>({} as Timeout);

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			alert('Copied successfully');
		} catch {
			alert('Oops, try again!');
		}
	};

	const handleDecode = (morseCode: string) => {
		const alphabet: any = decodeAlphabet;
		return morseCode
			.split(' ')
			.map(word =>
				word
					.split(' ')
					.map(letter => alphabet[letter])
					.join(''),
			)
			.join('');
	};

	const handleEncode = (word: string) => {
		const alphabet: any = encodeAlphabet;

		return word
			.split('')
			.map(letter => alphabet[letter.toLowerCase()])
			.join(' ')
			.replace(/ +/g, ' ');
	};

	const handleTranslate = React.useCallback(
		(inputText: string, decode: boolean) => {
			return !decode ? handleEncode(inputText) : handleDecode(inputText);
		},
		[],
	);

	const toggleOrder = () => {
		setOrder(state => !state);
	};

	React.useEffect(() => {
		if (input.length) {
			const translated = handleTranslate(input, order);
			console.log({ translated });
			setOutput(translated);
		}
	}, [input, order, handleTranslate]);

	return (
		<S.Container>
			<S.Title>Morse translator</S.Title>
			<S.Options>
				<S.Label withWidth>{!order ? 'Word' : 'Morse'}</S.Label>
				<S.ChangeOrderButton onClick={toggleOrder} type="button">
					<RefreshCw size={20} />
				</S.ChangeOrderButton>
				<S.Label withWidth>{order ? 'Word' : 'Morse'}</S.Label>
			</S.Options>
			<S.Box>
				<S.InputContainer>
					<S.Label>Input</S.Label>
					<S.InputWord
						placeholder="Type here..."
						name="input-morse"
						defaultValue={input}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							clearTimeout(searchTimeout.current);

							searchTimeout.current = setTimeout(() => {
								setInput(event.target.value);
							}, 1000);
						}}
					/>

					<S.CopyToClipboardButton onClick={() => copyToClipboard(input)}>
						<Copy />
					</S.CopyToClipboardButton>
				</S.InputContainer>
				<S.OutputMorse>
					<S.Label>Output</S.Label>
					<S.OutputWord>{output}</S.OutputWord>
					<S.CopyToClipboardButton onClick={() => copyToClipboard(output)}>
						<Copy />
					</S.CopyToClipboardButton>
				</S.OutputMorse>
			</S.Box>
		</S.Container>
	);
};
