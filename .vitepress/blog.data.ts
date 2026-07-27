import { createContentLoader } from 'vitepress';

export interface BlogPost {
	title: string;
	date: string;
	url: string;
	description?: string;
}

declare const data: BlogPost[];
export { data };

export default createContentLoader('blog/*.md', {
	excerpt: false,
	transform(raw) {
		return raw
			.filter((page) => page.url !== '/blog/')
			.map((page) => ({
				title: page.frontmatter.title ?? page.url,
				date: page.frontmatter.date ?? '',
				url: page.url,
				description: page.frontmatter.description ?? '',
			}))
			.sort((a, b) => (a.date < b.date ? 1 : -1));
	},
});
