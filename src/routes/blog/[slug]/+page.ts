import { parseArticleMetaData } from '$lib/scripts/parseArticleMetaData';
export const prerender = true;
export async function load({ params }: { params: { slug: string } }) {
	const markdownFilePath = `./articles/markdown/${params.slug}.md`;

	const post = await import(/* @vite-ignore */ markdownFilePath);

	const metadata = parseArticleMetaData(post.metadata);
	const content = post.default;
	return {
		content,
		metadata
	};
}
export type PageLoad = Awaited<ReturnType<typeof load>>;
