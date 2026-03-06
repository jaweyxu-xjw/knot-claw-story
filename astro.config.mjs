// @ts-check

import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap'; // 暂时移除 sitemap 避免构建报错
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx() /* , sitemap() */],
});