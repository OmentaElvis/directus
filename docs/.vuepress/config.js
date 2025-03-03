const readingTime = require('reading-time');
const getImageUrl = require('@thumbsmith/url').default;

module.exports = {
	base: '/',
	title: 'Directus Docs',
	description: 'Directus 9. An Instant App & API for your SQL Database.',
	ga: 'UA-24637628-7',
	head: [
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6644ff' }],
		['link', { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg' }],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				type: 'image/svg+xml',
				sizes: '180x180',
				href: '/favicon.svg',
			},
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/svg+xml',
				sizes: '32x32',
				href: '/favicon.svg',
			},
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/svg+xml',
				sizes: '16x16',
				href: '/favicon.svg',
			},
		],
		['meta', { name: 'application-name', content: 'Directus Docs' }],
		['meta', { name: 'theme-color', content: '#6644ff' }],
		['meta', { name: 'apple-mobile-web-app-title', content: 'Directus Docs' }],
		['meta', { name: 'msapplication-TileColor', content: '#6644ff' }],
		['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
	],
	themeConfig: {
		repo: 'directus/directus',
		docsBranch: 'main',
		logo: '/logo.svg',
		editLinks: true,
		docsDir: 'docs',
		lastUpdated: true,
		serviceWorker: false,
		patterns: ['docs/**/*.md'],
		sidebarDepth: 0,
		activeHeaderLinks: false,
		smoothScroll: false,
		algolia: {
			apiKey: '84890d566c1f9ad79ca62a1358e05c60',
			indexName: 'directus',
		},
		nav: [
			{ text: 'Website', link: 'https://directus.io' },
			{ text: 'Cloud', link: 'https://directus.cloud' },
		],
		sidebar: [
			{
				title: 'Getting Started',
				collapsable: false,
				children: [
					{
						type: 'page',
						path: '/getting-started/introduction',
						title: 'Introduction',
					},
					{
						type: 'page',
						path: '/getting-started/quickstart',
						title: 'Quickstart Guide',
					},
					{
						type: 'page',
						path: '/getting-started/architecture',
						title: 'Architecture',
					},
					{
						type: 'page',
						path: '/getting-started/support',
						title: 'Help & Support',
					},
					{
						type: 'page',
						path: '/getting-started/backing-directus',
						title: 'Backing Directus',
					},
					{
						type: 'page',
						path: '/getting-started/resources',
						title: 'Resources',
					},
					{
						type: 'page',
						path: '/getting-started/glossary',
						title: 'Glossary',
					},
				],
			},
			{
				title: 'App Guide',
				children: [
					{
						type: 'page',
						path: '/app/overview',
						title: 'Overview',
					},
					{ type: 'divider' },
					{
						type: 'page',
						path: '/app/content',
						title: 'Content',
						collapsable: false,
						children: [
							{
								type: 'page',
								path: '/app/content/collections',
								title: 'Collection Page',
							},
							{
								type: 'page',
								path: '/app/content/items',
								title: 'Item Page',
							},
							{
								type: 'page',
								path: '/app/content/data-sharing',
								title: 'Data Sharing',
							},
						],
					},
					{
						type: 'page',
						path: '/app/user-directory',
						title: 'User Directory',
					},
					{
						type: 'page',
						path: '/app/file-library',
						title: 'File Library',
					},
					{
						type: 'page',
						path: '/app/insights',
						title: 'Insights',
					},
					{
						type: 'page',
						path: '/app/documentation',
						title: 'Documentation',
					},
					{
						type: 'page',
						path: '/app/settings',
						title: 'Settings',
					},
					{ type: 'divider' },
					{
						type: 'page',
						path: '/app/display-templates',
						title: 'Display Templates',
					},
					{
						type: 'page',
						path: '/app/filters',
						title: 'Filters',
					},
					{
						type: 'page',
						path: '/app/layouts',
						title: 'Layouts',
					},
					{
						type: 'page',
						path: '/app/import-export',
						title: 'Import / Export',
					},
				],
			},
			{
				title: 'Configuration',
				children: [
					// {
					// 	type: 'page',
					// 	path: '/configuration/overview',
					// 	title: 'Overview',
					// },
					{
						type: 'page',
						path: '/configuration/project-settings',
						title: 'Project Settings',
					},
					{
						type: 'page',
						path: '/configuration/data-model',
						title: 'Data Model',
						collapsable: false,
						children: [
							{
								type: 'page',
								path: '/configuration/relationships',
								title: 'Relationships',
							},
						],
					},
					{
						type: 'page',
						path: '/configuration/users-roles-permissions',
						title: 'Users, Roles & Permissions',
					},
					{
						type: 'page',
						path: '/configuration/presets-bookmarks',
						title: 'Presets & Bookmarks',
					},
					{
						type: 'page',
						path: '/configuration/translation-strings',
						title: 'Translation Strings',
					},
					{
						type: 'page',
						path: '/configuration/webhooks',
						title: 'Webhooks',
					},
					{
						type: 'page',
						path: '/configuration/flows',
						title: 'Flows',
						collapsable: false,
						children: [
							{
								type: 'page',
								path: '/configuration/flows/triggers',
								title: 'Triggers',
							},
							{
								type: 'page',
								path: '/configuration/flows/operations',
								title: 'Operations',
							},
						],
					},
					{
						type: 'page',
						path: '/configuration/activity-log',
						title: 'Activity Log',
					},
					{
						type: 'divider',
					},
					// {
					// 	type: 'page',
					// 	path: '/configuration/security',
					// 	title: 'Security*',
					// },
					// {
					// 	type: 'page',
					// 	path: '/configuration/localization',
					// 	title: 'Localization*',
					// },
					// {
					// 	type: 'page',
					// 	path: '/configuration/faq',
					// 	title: 'Frequently Asked Questions*',
					// },
				],
			},
			{
				title: 'API Reference',
				children: [
					{
						type: 'page',
						path: '/reference/introduction',
						title: 'Introduction',
					},
					{
						type: 'page',
						path: '/reference/authentication',
						title: 'Authentication',
					},
					{
						type: 'page',
						title: 'Global Parameters',
						path: '/reference/query',
					},
					{
						type: 'page',
						path: '/reference/filter-rules',
						title: 'Filter Rules',
					},
					{
						type: 'page',
						title: 'Items',
						path: '/reference/items',
					},
					{
						type: 'page',
						path: '/reference/files',
						title: 'Files',
					},
					{
						type: 'divider',
					},
					{
						type: 'page',
						path: '/reference/cli',
						title: 'CLI',
					},
					{
						type: 'page',
						path: '/reference/sdk',
						title: 'JS-SDK',
					},
					{
						type: 'divider',
					},
					{
						type: 'page',
						path: '/reference/system/activity',
						title: 'Activity',
					},
					{
						type: 'page',
						path: '/reference/system/collections',
						title: 'Collections',
					},
					{
						type: 'page',
						path: '/reference/system/extensions',
						title: 'Extensions',
					},
					{
						type: 'page',
						path: '/reference/system/fields',
						title: 'Fields',
					},
					{
						type: 'page',
						path: '/reference/system/flows',
						title: 'Flows',
					},
					{
						type: 'page',
						path: '/reference/system/folders',
						title: 'Folders',
					},
					{
						type: 'page',
						path: '/reference/system/notifications',
						title: 'Notifications',
					},
					{
						type: 'page',
						path: '/reference/system/operations',
						title: 'Operations',
					},
					{
						type: 'page',
						path: '/reference/system/permissions',
						title: 'Permissions',
					},
					{
						type: 'page',
						path: '/reference/system/presets',
						title: 'Presets',
					},
					{
						type: 'page',
						path: '/reference/system/relations',
						title: 'Relations',
					},
					{
						type: 'page',
						path: '/reference/system/revisions',
						title: 'Revisions',
					},
					{
						type: 'page',
						path: '/reference/system/roles',
						title: 'Roles',
					},
					{
						type: 'page',
						path: '/reference/system/server',
						title: 'Server',
					},
					{
						type: 'page',
						path: '/reference/system/settings',
						title: 'Settings',
					},
					{
						type: 'page',
						path: '/reference/system/users',
						title: 'Users',
					},
					{
						type: 'page',
						path: '/reference/system/utilities',
						title: 'Utilities',
					},
					{
						type: 'page',
						path: '/reference/system/webhooks',
						title: 'Webhooks',
					},
				],
			},
			{
				title: 'Extensions',
				children: [
					{
						type: 'page',
						path: '/extensions/introduction',
						title: 'Introduction',
					},
					{
						type: 'page',
						path: '/extensions/creating-extensions',
						title: 'Creating Extensions',
					},
					{
						type: 'page',
						path: '/extensions/displays',
						title: 'Displays',
					},
					{
						type: 'page',
						path: '/extensions/email-templates',
						title: 'Email Templates',
					},
					{
						type: 'page',
						path: '/extensions/endpoints',
						title: 'Endpoints',
					},
					{
						type: 'page',
						path: '/extensions/hooks',
						title: 'Hooks',
					},
					{
						type: 'page',
						path: '/extensions/interfaces',
						title: 'Interfaces',
					},
					{
						type: 'page',
						path: '/extensions/layouts',
						title: 'Layouts',
					},
					{
						type: 'page',
						path: '/extensions/migrations',
						title: 'Migrations',
					},
					{
						type: 'page',
						path: '/extensions/modules',
						title: 'Modules',
					},
					{
						type: 'page',
						path: '/extensions/panels',
						title: 'Panels',
					},
					{
						type: 'page',
						path: '/extensions/themes',
						title: 'Themes',
					},
				],
			},
			{
				title: 'Contributing',
				children: [
					{
						type: 'page',
						path: '/contributing/introduction',
						title: 'Introduction',
					},
					{
						type: 'page',
						path: '/contributing/codebase-overview',
						title: 'Codebase Overview',
					},
					{
						type: 'page',
						path: '/contributing/running-locally',
						title: 'Running Locally',
					},
					{
						type: 'page',
						path: '/contributing/github-ci',
						title: 'GitHub CI',
					},
					{
						type: 'page',
						path: '/contributing/translations',
						title: 'Translating the App',
					},
				],
			},
			{ type: 'divider' },
			{
				title: 'Directus Cloud',
				children: [
					{
						type: 'page',
						path: '/cloud/overview',
						title: 'Overview',
					},
					{
						type: 'page',
						path: '/cloud/accounts',
						title: 'Accounts',
					},
					{
						type: 'page',
						path: '/cloud/teams',
						title: 'Teams',
					},
					{
						type: 'page',
						path: '/cloud/projects',
						title: 'Projects',
					},
					{
						type: 'page',
						path: '/cloud/glossary',
						title: 'Glossary',
					},
				],
			},
			{ type: 'divider' },
			{
				title: 'Self Hosted',
				children: [
					{
						type: 'page',
						path: '/self-hosted/quickstart',
						title: 'Quickstart',
					},
					{
						type: 'page',
						path: '/self-hosted/config-options',
						title: 'Config Options',
					},
					{
						type: 'page',
						path: '/self-hosted/sso',
						title: 'Single Sign-On (SSO)',
					},
					// {
					// 	type: 'page',
					// 	path: '/self-hosted/sso-examples',
					// 	title: 'SSO Examples',
					// },
					{
						type: 'page',
						path: '/self-hosted/installation',
						title: 'Installation',
						children: [
							{
								type: 'page',
								path: '/self-hosted/installation/aws',
								title: 'AWS',
							},
							{
								type: 'page',
								path: '/self-hosted/installation/cloudron',
								title: 'Cloudron',
							},
							{
								type: 'page',
								path: '/self-hosted/installation/cli',
								title: 'CLI',
							},
							{
								type: 'page',
								path: '/self-hosted/installation/digitalocean-app-platform',
								title: 'DigitalOcean',
							},
							{
								type: 'page',
								path: '/self-hosted/installation/docker',
								title: 'Docker',
							},
							{
								type: 'page',
								path: '/self-hosted/installation/gcp',
								title: 'Google Cloud Platform',
							},
							{
								type: 'page',
								path: '/self-hosted/installation/iis',
								title: 'IIS',
							},
							{
								type: 'page',
								path: '/self-hosted/installation/manual',
								title: 'Manual',
							},
							{
								type: 'page',
								path: '/self-hosted/installation/plesk',
								title: 'Plesk',
							},
							{
								type: 'page',
								path: '/self-hosted/installation/ubuntu',
								title: 'Ubuntu',
							},
						],
					},
					{
						type: 'page',
						path: '/self-hosted/upgrades-migrations',
						title: 'Upgrades & Migrations',
					},
				],
			},
		],
	},
	markdown: {
		toc: {
			includeLevel: [2],
		},
	},
	plugins: [
		[
			'vuepress-plugin-clean-urls',
			{
				normalSuffix: '/',
				indexSuffix: '/',
				notFoundPath: '/404.html',
			},
		],
	],

	// Runs once per page at build time
	// https://vuepress.vuejs.org/plugin/option-api.html#extendpagedata
	async extendPageData($page) {

		// === 1. Compute props for thumbnail

		// Page title
		let title = $page.title || $page._context.siteConfig.title;

		// Last updated date in a human readable format, ex: December 16, 2021
		const lastUpdated = new Date($page.lastUpdated)
			.toLocaleDateString(undefined, {
				year: "numeric",
				month: "long",
				day: "numeric",
			});

		// Approximate page read time, ex: 12 min read
		const readTime = $page._content ? readingTime($page._content).text : undefined;

		// Create breadcrumb array for page, ex: [ 'Configuration', 'Data Model', 'Relationships' ]
		let breadcrumb = null;
		let pageTitleInMenu = null
		const path = $page.path.replace('.html', '');
		const sidebar = $page._context.themeConfig.sidebar;
		const findCurrentPage = (menu, wipBreadcrumb) => {
			for (const item of menu) {
				if (item.path === path) {
					breadcrumb = wipBreadcrumb;
					pageTitleInMenu = item.title;
				} else if (!breadcrumb && item.children) {
					findCurrentPage(item.children, [...wipBreadcrumb, item.title]);
				}
			}
		}
		findCurrentPage(sidebar, []);

		// Avoid cases where the breadcrumb is the same as the title
		if (Array.isArray(breadcrumb) && breadcrumb[breadcrumb.length-1] === title) {
			title = pageTitleInMenu;
		}


		// === 2. Build thumbnail url
		const imageUrl = getImageUrl({
			account: 'directus',
			template: 'docs',
			data: { title, lastUpdated, readTime, breadcrumb },
			type: 'png',
		});


		// === 3. Build dynamic meta tags

		const pageUrl = `https://docs.directus.io${path}`;
		const description = $page._context.siteConfig.description;
		const meta = [
			// Open Graph meta tags (facebook, linkedin, discord, slack, etc...)
			{ property: 'og:title', content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:url', content: pageUrl },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:image', content: imageUrl },
			{ property: 'og:image:width', content: 1200 },
			{ property: 'og:image:height', content: 630 },

			// Twitter meta tags
			{ name: 'twitter:title', content: title },
			{ name: 'twitter:description', content: description },
			{ name: 'twitter:url', content: pageUrl },
			{ name: 'twitter:site', content: '@directus' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:image', content: imageUrl },
			{ name: 'twitter:image:width', content: 1200 },
			{ name: 'twitter:image:height', content: 630 },
		];

		// === 4. Append custom metadata to frontmatter meta

		$page.frontmatter.meta = [...($page.frontmatter.meta || []), ...meta];
	}
};
