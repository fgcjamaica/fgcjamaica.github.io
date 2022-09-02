const frontmatter = require('front-matter');
const { readFile, readdir, writeFile } = require('fs/promises');
(async () => {
	try {
		const articleDir = './src/routes/blog/[slug]/articles';
		const postDir = `${articleDir}/markdown`;
		const files = await readdir(postDir);
		const posts = files.filter((file) => file.endsWith('.md'));
		const metadatas = [];
		for (const filename of posts) {
			const content = await readFile(`${postDir}/${filename}`, 'utf8');
			const { attributes } = frontmatter(content);
			metadatas.push({ ...attributes, slug: filename.replace('.md', '') });
		}
		await writeFile(`${articleDir}/articles.meta.json`, JSON.stringify(metadatas));
		console.log('Successfully built articles.meta.json');
	} catch (error) {
		console.log(error);
	}
})();
