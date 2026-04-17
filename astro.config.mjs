// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OnlyAI Docs',
			description: 'User documentation for the OnlyAI dashboard — manage your OnlyFans models, chats, content, and analytics in one place.',
			social: [],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is OnlyAI?', slug: 'getting-started/introduction' },
						{ label: 'Signing In', slug: 'getting-started/signing-in' },
						{ label: 'Dashboard Overview', slug: 'getting-started/dashboard-overview' },
					],
				},
				{
					label: 'Models',
					items: [
						{ label: 'Models Overview', slug: 'models/overview' },
						{ label: 'Connecting an OnlyFans Account', slug: 'models/connect-onlyfans' },
						{ label: 'Model Controls', slug: 'models/controls' },
						{ label: 'Profile & AI Persona', slug: 'models/profile' },
					],
				},
				{
					label: 'Chats',
					items: [
						{ label: 'Chats Overview', slug: 'chats/overview' },
					],
				},
				{
					label: 'Content',
					items: [
						{ label: 'Content Library', slug: 'content/library' },
						{ label: 'PPV Folders', slug: 'content/ppv-folders' },
						{ label: 'Welcome & Warmup Content', slug: 'content/welcome-warmup' },
					],
				},
				{
					label: 'Welcome Flow',
					items: [
						{ label: 'Setting Up Welcome Messages', slug: 'welcome-flow/setup' },
						{ label: 'Follow-up Sequences', slug: 'welcome-flow/follow-ups' },
					],
				},
				{
					label: 'Fan Lists',
					items: [
						{ label: 'Fan Lists & Routing', slug: 'fan-lists/overview' },
					],
				},
				{
					label: 'Analytics',
					items: [
						{ label: 'Revenue & Stats', slug: 'analytics/overview' },
						{ label: 'Understanding Metrics', slug: 'analytics/metrics' },
					],
				},
				{
					label: 'AI Tasks',
					items: [
						{ label: 'Content Requests', slug: 'content-requests/overview' },
					],
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'Telegram Notifications', slug: 'integrations/telegram' },
					],
				},
				{
					label: 'Teams',
					items: [
						{ label: 'Managing Your Team', slug: 'teams/overview' },
					],
				},
				{
					label: 'Settings',
					items: [
						{ label: 'Account Settings', slug: 'settings/overview' },
					],
				},
			],
		}),
	],
});
