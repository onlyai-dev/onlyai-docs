// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import { transform as esbuildTransform } from 'esbuild';

/**
 * Vite plugin: Astro extracts <script> blocks as virtual `.js` modules even
 * when they contain TypeScript (e.g. Starlight's Search.astro uses typed
 * parameters like `event?: MouseEvent` or optional params like `param?)`).
 * On Linux/Vercel, esbuild processes these with the `js` loader and fails on
 * TS syntax.
 *
 * We match by the virtual module ID pattern Astro always uses for extracted
 * script blocks (`_astro_type_script_`), which is platform-independent.
 */
function fixAstroScriptTs() {
	return {
		name: 'fix-astro-script-ts',
		enforce: /** @type {'pre'} */ ('pre'),
		/** @param {string} code @param {string} id */
		async transform(code, id) {
			if (id.includes('_astro_type_script_') && id.endsWith('.js')) {
				try {
					const result = await esbuildTransform(code, {
						loader: 'ts',
						target: 'esnext',
						sourcemap: false,
					});
					return { code: result.code, map: null };
				} catch {
					return null;
				}
			}
		},
	};
}

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	vite: {
		plugins: [fixAstroScriptTs()],
	},
	redirects: {
		'/admin': '/keystatic',
	},
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
					items: [
						{ label: 'What is OnlyAI?', translations: { ru: 'Что такое OnlyAI?', uk: 'Що таке OnlyAI?' }, slug: 'getting-started/introduction' },
						{ label: 'Signing In', translations: { ru: 'Вход в систему', uk: 'Вхід до системи' }, slug: 'getting-started/signing-in' },
						{ label: 'Dashboard Overview', translations: { ru: 'Обзор панели управления', uk: 'Огляд панелі керування' }, slug: 'getting-started/dashboard-overview' },
					],
				},
				{
					label: 'Models',
					translations: { ru: 'Модели', uk: 'Моделі' },
					items: [
						{ label: 'Models Overview', translations: { ru: 'Обзор моделей', uk: 'Огляд моделей' }, slug: 'models/overview' },
						{ label: 'Connecting an OnlyFans Account', translations: { ru: 'Подключение OnlyFans', uk: 'Підключення OnlyFans' }, slug: 'models/connect-onlyfans' },
						{ label: 'Model Controls', translations: { ru: 'Управление моделью', uk: 'Керування моделлю' }, slug: 'models/controls' },
						{ label: 'Profile & AI Persona', translations: { ru: 'Профиль и AI-персона', uk: 'Профіль та AI-персона' }, slug: 'models/profile' },
					],
				},
				{
					label: 'Chats',
					translations: { ru: 'Чаты', uk: 'Чати' },
					items: [
						{ label: 'Chats Overview', translations: { ru: 'Обзор чатов', uk: 'Огляд чатів' }, slug: 'chats/overview' },
					],
				},
				{
					label: 'Content',
					translations: { ru: 'Контент', uk: 'Контент' },
					items: [
						{ label: 'Content Library', translations: { ru: 'Библиотека контента', uk: 'Бібліотека контенту' }, slug: 'content/library' },
						{ label: 'PPV Folders', translations: { ru: 'PPV-папки', uk: 'PPV-папки' }, slug: 'content/ppv-folders' },
						{ label: 'Welcome & Warmup Content', translations: { ru: 'Приветственный контент', uk: 'Вітальний контент' }, slug: 'content/welcome-warmup' },
					],
				},
				{
					label: 'Welcome Flow',
					translations: { ru: 'Приветствие', uk: 'Привітання' },
					items: [
						{ label: 'Setting Up Welcome Messages', translations: { ru: 'Приветственные сообщения', uk: 'Вітальні повідомлення' }, slug: 'welcome-flow/setup' },
						{ label: 'Follow-up Sequences', translations: { ru: 'Серии follow-up', uk: 'Серії follow-up' }, slug: 'welcome-flow/follow-ups' },
					],
				},
				{
					label: 'Fan Lists',
					translations: { ru: 'Списки фанатов', uk: 'Списки фанатів' },
					items: [
						{ label: 'Fan Lists & Routing', translations: { ru: 'Списки и маршрутизация', uk: 'Списки та маршрутизація' }, slug: 'fan-lists/overview' },
					],
				},
				{
					label: 'Analytics',
					translations: { ru: 'Аналитика', uk: 'Аналітика' },
					items: [
						{ label: 'Revenue & Stats', translations: { ru: 'Доход и статистика', uk: 'Дохід та статистика' }, slug: 'analytics/overview' },
						{ label: 'Understanding Metrics', translations: { ru: 'Понимание метрик', uk: 'Розуміння метрик' }, slug: 'analytics/metrics' },
					],
				},
				{
					label: 'AI Tasks',
					translations: { ru: 'AI-задачи', uk: 'AI-завдання' },
					items: [
						{ label: 'Content Requests', translations: { ru: 'Запросы контента', uk: 'Запити контенту' }, slug: 'content-requests/overview' },
					],
				},
				{
					label: 'Integrations',
					translations: { ru: 'Интеграции', uk: 'Інтеграції' },
					items: [
						{ label: 'Telegram Notifications', translations: { ru: 'Уведомления Telegram', uk: 'Сповіщення Telegram' }, slug: 'integrations/telegram' },
					],
				},
				{
					label: 'Teams',
					translations: { ru: 'Команды', uk: 'Команди' },
					items: [
						{ label: 'Managing Your Team', translations: { ru: 'Управление командой', uk: 'Керування командою' }, slug: 'teams/overview' },
					],
				},
				{
					label: 'Settings',
					translations: { ru: 'Настройки', uk: 'Налаштування' },
					items: [
						{ label: 'Account Settings', translations: { ru: 'Настройки аккаунта', uk: 'Налаштування акаунту' }, slug: 'settings/overview' },
					],
				},
			],
		}),
	],
});
