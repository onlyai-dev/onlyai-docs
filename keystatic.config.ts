import { config, collection, fields } from "@keystatic/core";

const docSchema = {
	title: fields.slug({ name: { label: "Title" } }),
	description: fields.text({ label: "Description", multiline: true }),
	sidebar: fields.object(
		{ order: fields.number({ label: "Order in sidebar" }) },
		{ label: "Sidebar" },
	),
	content: fields.markdoc({
		label: "Content",
		extension: "md",
		options: {
			image: {
				directory: "public/images/docs",
				publicPath: "/images/docs/",
			},
		},
	}),
};

function docCollection(label: string, path: string) {
	return collection({
		label,
		slugField: "title",
		path,
		format: { contentField: "content" },
		schema: docSchema,
	});
}

const sections = [
	{ key: "getting_started", label: "Getting Started", dir: "getting-started" },
	{ key: "models", label: "Models", dir: "models" },
	{ key: "chats", label: "Chats", dir: "chats" },
	{ key: "content", label: "Content", dir: "content" },
	{ key: "welcome_flow", label: "Welcome Flow", dir: "welcome-flow" },
	{ key: "fan_lists", label: "Fan Lists", dir: "fan-lists" },
	{ key: "analytics", label: "Analytics", dir: "analytics" },
	{ key: "ai_tasks", label: "AI Tasks", dir: "content-requests" },
	{ key: "integrations", label: "Integrations", dir: "integrations" },
	{ key: "teams", label: "Teams", dir: "teams" },
	{ key: "settings", label: "Settings", dir: "settings" },
];

const languages = [
	{ prefix: "", flag: "🇬🇧", base: "src/content/docs" },
	{ prefix: "ru_", flag: "🪆", base: "src/content/docs/ru" },
	{ prefix: "uk_", flag: "🇺🇦", base: "src/content/docs/uk" },
];

const collections: Record<string, ReturnType<typeof collection>> = {};
const navigation: Record<string, string[]> = {};

for (const lang of languages) {
	const groupLabel = `${lang.flag} ${lang.prefix === "" ? "English" : lang.prefix === "ru_" ? "Русский" : "Українська"}`;
	navigation[groupLabel] = [];

	for (const section of sections) {
		const key = `docs_${lang.prefix}${section.key}`;
		collections[key] = docCollection(
			section.label,
			`${lang.base}/${section.dir}/*`,
		);
		navigation[groupLabel].push(key);
	}
}

const isDev = import.meta.env.DEV;

export default config({
	storage: isDev
		? { kind: "local" }
		: {
				kind: "github",
				repo: { owner: "onlyai-dev", name: "onlyai-docs" },
			},
	ui: {
		brand: {
			name: "OnlyAI Docs",
		},
		navigation,
	},
	collections,
});
