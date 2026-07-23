import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Amrit Gopinath',
	description:
		'Research portfolio of Amrit Gopinath — NLP, multilingual representation learning, mechanistic interpretability, mixture-of-experts language models, classical Tamil NLP, and synthetic media detection.',
	lang: 'en-US',
	cleanUrls: true,
	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
		['link', { rel: 'icon', href: '/favicon.ico' }],
	],
	themeConfig: {},
});
