import { Dispatch, SetStateAction } from 'react';

export interface TypingAnimationOptions {
	typeDelay: number;
	commandPauseDelay: number;
	outputPauseDelay: number;
	initialDelay: number;
	randomFactor: number;
}

export interface AnimationState {
	visibleLines: string[];
	currentLineIndex: number;
	currentCharIndex: number;
	showCursor: boolean;
}

export type AnimationStateUpdater = Dispatch<SetStateAction<AnimationState>>;

export class TypingAnimationService {
	private readonly commands: string[];

	private readonly outputs: string[];

	private readonly options: TypingAnimationOptions;

	private timeoutRef: NodeJS.Timeout | null = null;

	constructor(
		commands: string[],
		outputs: string[],
		options: Partial<TypingAnimationOptions> = {},
	) {
		this.commands = [...commands];
		this.outputs = [...outputs];
		this.options = {
			typeDelay: 75,
			commandPauseDelay: 500,
			outputPauseDelay: 1000,
			initialDelay: 1000,
			randomFactor: 0.5,
			...options,
		};
	}

	startAnimation(updateState: AnimationStateUpdater): () => void {
		const typeNextChar = (state: AnimationState): AnimationState => {
			const { visibleLines, currentLineIndex, currentCharIndex } = state;

			if (currentLineIndex >= this.commands.length * 2) {
				return { ...state, showCursor: true };
			}

			if (currentLineIndex % 2 === 0) {
				return this.processCommandLine(
					visibleLines,
					currentLineIndex,
					currentCharIndex,
				);
			}

			return this.processOutputLine(visibleLines, currentLineIndex);
		};

		const animationStep = (state: AnimationState) => {
			const newState = typeNextChar(state);
			updateState(newState);

			if (newState.currentLineIndex < this.commands.length * 2) {
				this.scheduleNextStep(newState, animationStep);
			}
		};

		this.timeoutRef = setTimeout(() => {
			updateState(state => {
				animationStep(state);
				return state;
			});
		}, this.options.initialDelay);

		return () => {
			if (this.timeoutRef) {
				clearTimeout(this.timeoutRef);
				this.timeoutRef = null;
			}
		};
	}

	private processCommandLine(
		visibleLines: string[],
		currentLineIndex: number,
		currentCharIndex: number,
	): AnimationState {
		const currentCommand = this.commands[currentLineIndex / 2];

		if (currentCharIndex < currentCommand.length) {
			const newLines = [...visibleLines];
			newLines[currentLineIndex] = currentCommand.substring(
				0,
				currentCharIndex + 1,
			);

			return {
				visibleLines: newLines,
				currentLineIndex,
				currentCharIndex: currentCharIndex + 1,
				showCursor: true,
			};
		}

		return {
			visibleLines,
			currentLineIndex: currentLineIndex + 1,
			currentCharIndex: 0,
			showCursor: false,
		};
	}

	private processOutputLine(
		visibleLines: string[],
		currentLineIndex: number,
	): AnimationState {
		const newLines = [...visibleLines];
		newLines[currentLineIndex] = this.outputs[(currentLineIndex - 1) / 2];

		return {
			visibleLines: newLines,
			currentLineIndex: currentLineIndex + 1,
			currentCharIndex: 0,
			showCursor: false,
		};
	}

	private scheduleNextStep(
		state: AnimationState,
		callback: (state: AnimationState) => void,
	): void {
		let delay = this.options.typeDelay;

		if (state.currentLineIndex % 2 === 0) {
			if (state.currentCharIndex === 0) {
				delay = this.options.commandPauseDelay;
			} else {
				delay =
					this.options.typeDelay +
					Math.random() * this.options.typeDelay * this.options.randomFactor;
			}
		} else {
			delay = this.options.outputPauseDelay;
		}

		this.timeoutRef = setTimeout(() => callback(state), delay);
	}
}
