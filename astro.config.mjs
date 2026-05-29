// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	// Skew protection sets `assetQueryParams` on the Vercel adapter, which enables Astro’s
	// `plugin-chunk-imports` rewrite. That plugin mishandles dynamic `import()` offsets and can emit
	// invalid JS (`import("./chunk.js"?dpl=…)`), breaking the client build with `!~{NNN}~` placeholders
	// and esbuild “Expected ':' but found ')'”. See https://github.com/withastro/astro/issues/16258
	adapter: vercel({ skewProtection: false }),
	integrations: [
		react(),
		keystatic(),
		starlight({
			title: 'OnlyAI Docs',
			description: 'User documentation for the OnlyAI dashboard — manage your OnlyFans models, chats, content, and analytics in one place.',
			social: [],
			customCss: ['./src/styles/custom.css'],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
				uk: {
					label: 'Українська',
					lang: 'uk',
				},
			},
			sidebar: [
				{
					label: 'Getting Started',
					translations: { ru: 'Начало работы', uk: 'Початок роботи' },
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Models',
					translations: { ru: 'Модели', uk: 'Моделі' },
					autogenerate: { directory: 'models' },
				},
				{
					label: 'Chats',
					translations: { ru: 'Чаты', uk: 'Чати' },
					autogenerate: { directory: 'chats' },
				},
				{
					label: 'Content',
					translations: { ru: 'Контент', uk: 'Контент' },
					autogenerate: { directory: 'content' },
				},
				{
					label: 'Welcome Flow',
					translations: { ru: 'Приветствие', uk: 'Привітання' },
					autogenerate: { directory: 'welcome-flow' },
				},
				{
					label: 'Fan Lists',
					translations: { ru: 'Списки фанатов', uk: 'Списки фанатів' },
					autogenerate: { directory: 'fan-lists' },
				},
				{
					label: 'Analytics',
					translations: { ru: 'Аналитика', uk: 'Аналітика' },
					autogenerate: { directory: 'analytics' },
				},
				{
					label: 'AI Tasks',
					translations: { ru: 'AI-задачи', uk: 'AI-завдання' },
					autogenerate: { directory: 'content-requests' },
				},
				{
					label: 'Integrations',
					translations: { ru: 'Интеграции', uk: 'Інтеграції' },
					autogenerate: { directory: 'integrations' },
				},
				{
					label: 'Teams',
					translations: { ru: 'Команды', uk: 'Команди' },
					autogenerate: { directory: 'teams' },
				},
				{
					label: 'Settings',
					translations: { ru: 'Настройки', uk: 'Налаштування' },
					autogenerate: { directory: 'settings' },
				},
			],
		}),
	],
});
