import React, { useState } from 'react';
import { useTheme } from 'src/contexts';
import * as S from './styles';

interface ToggleThemeProps {}

export const ToggleTheme: React.FC<ToggleThemeProps> = () => {
	const { currentTheme, toggleTheme } = useTheme();
	const [showDropdown, setShowDropdown] = useState(false);

	const themes = [
		{ id: 'retroComputer', name: 'Retro Computer' },
		{ id: 'win98', name: 'Windows 98' },
		{ id: 'light', name: 'Light' },
		{ id: 'dark', name: 'Dark' },
		{ id: 'y2k', name: 'Y2K' },
		{ id: 'cyberpunk', name: 'Cyberpunk' },
	];

	const handleThemeChange = (themeId: string) => {
		if (currentTheme.title === themeId) {
			setShowDropdown(false);
			return;
		}

		const currentIndex = themes.findIndex(
			theme => theme.id === currentTheme.title,
		);
		const targetIndex = themes.findIndex(theme => theme.id === themeId);

		const toggleCount =
			targetIndex > currentIndex
				? targetIndex - currentIndex
				: themes.length - currentIndex + targetIndex;

		toggleTheme();

		let count = 1;
		const intervalId = setInterval(() => {
			if (count >= toggleCount) {
				clearInterval(intervalId);
				return;
			}

			toggleTheme();
			count += 1;
		}, 100);

		setShowDropdown(false);
	};

	return (
		<S.ThemeContainer>
			<S.Container
				aria-label="theme switcher"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<span>🎨</span>
			</S.Container>

			{showDropdown && (
				<S.Dropdown>
					{themes.map(theme => (
						<S.ThemeOption
							key={theme.id}
							active={currentTheme.title === theme.id}
							onClick={() => handleThemeChange(theme.id)}
						>
							{theme.name}
						</S.ThemeOption>
					))}
				</S.Dropdown>
			)}
		</S.ThemeContainer>
	);
};
