import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';

const src = resolve(__dirname, 'src');
const components = resolve(__dirname, 'src/components');

export default defineConfig({
	plugins: [
		react(),
		alias({
			entries: [
				{ find: 'src', replacement: src },
				{ find: 'components', replacement: components },
			],
		}),
	],
});
