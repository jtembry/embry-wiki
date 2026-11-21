// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Served by GitHub Pages. Until the wiki.embry.dev CNAME exists the site lives at
// https://jtembry.github.io/embry-wiki/ (hence `base`). To move it to wiki.embry.dev:
// add a CNAME record wiki → jtembry.github.io in Cloudflare, put `wiki.embry.dev` in
// public/CNAME, set `site` to https://wiki.embry.dev and delete `base`.
export default defineConfig({
	site: 'https://jtembry.github.io',
	base: '/embry-wiki',
	integrations: [
		starlight({
			title: 'Embry Development Wiki',
			description: 'How the Embry Development products work: FieldADE, HomeADE, Kingdom Guide and LightScan.',
			social: [
				{ icon: 'external', label: 'embry.dev', href: 'https://embry.dev' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/jtembry' },
			],
			editLink: { baseUrl: 'https://github.com/jtembry/embry-wiki/edit/main/' },
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Start here', slug: 'start' },
				{
					label: 'Concepts',
					items: [
						{ label: 'The second brain', slug: 'concepts/second-brain' },
						{ label: 'Agents and models', slug: 'concepts/agents-and-models' },
						{ label: 'Skills, rules, hooks, connectors', slug: 'concepts/skills-rules-hooks-connectors' },
						{ label: 'Agents working in parallel', slug: 'concepts/working-in-parallel' },
						{ label: 'Follow-ups', slug: 'concepts/follow-ups' },
					],
				},
				{
					label: 'FieldADE (iPhone)',
					items: [
						{ label: 'Overview', slug: 'fieldade' },
						{ label: 'Setup', slug: 'fieldade/setup' },
						{ label: 'The Today screen', slug: 'fieldade/today-screen' },
						{ label: 'Ingest', slug: 'fieldade/ingest' },
						{ label: 'Email and texts', slug: 'fieldade/email-and-texts' },
						{ label: 'Chats', slug: 'fieldade/chats' },
						{ label: 'Settings', slug: 'fieldade/settings' },
						{ label: 'Widgets, share sheet, CarPlay', slug: 'fieldade/widgets-share-carplay' },
						{ label: 'Troubleshooting', slug: 'fieldade/troubleshooting' },
						{ label: 'Release notes', link: '/fieldade/release-notes/' },
					],
				},
				{
					label: 'HomeADE (Mac and Windows)',
					items: [
						{ label: 'Overview', slug: 'homeade' },
						{ label: 'Setup', slug: 'homeade/setup' },
						{ label: 'The window', slug: 'homeade/the-window' },
						{ label: 'Agents', slug: 'homeade/agents' },
						{ label: 'Settings', slug: 'homeade/settings' },
						{ label: 'Tickets', slug: 'homeade/tickets' },
						{ label: 'Troubleshooting', slug: 'homeade/troubleshooting' },
						{ label: 'Release notes', link: '/homeade/release-notes/' },
					],
				},
				{
					label: 'Other products',
					items: [
						{ label: 'Kingdom Guide', slug: 'kingdom-guide' },
						{ label: 'LightScan', slug: 'lightscan' },
					],
				},
				{
					label: 'Company',
					items: [
						{ label: 'About Embry Development', slug: 'company/about' },
						{ label: 'Services', slug: 'company/services' },
						{ label: 'Privacy and data', slug: 'company/privacy' },
					],
				},
			],
		}),
	],
});
