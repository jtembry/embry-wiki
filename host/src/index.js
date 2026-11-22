// wiki.embry.dev in front of the GitHub Pages site. The Wrangler login on this Mac can attach a
// hostname to a Worker and cannot create a DNS record, so this Worker is the name. Pages stay the
// files: a push to main still publishes, and this Worker only forwards and rewrites the prefix.
const ORIGIN = "https://jtembry.github.io";
const PREFIX = "/embry-wiki";
const CANONICAL = "https://wiki.embry.dev";
const GITHUB_TREE = "https://github.com/jtembry/embry-wiki/";
const GITHUB_MARK = "\u0000GITHUB-TREE\u0000";

export function mapPath(pathname) {
	if (pathname === PREFIX || pathname.startsWith(`${PREFIX}/`)) return pathname;
	if (pathname === "/") return `${PREFIX}/`;
	return `${PREFIX}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function rewriteBody(body) {
	return body
		.replaceAll(GITHUB_TREE, GITHUB_MARK)
		.replaceAll(`${ORIGIN}${PREFIX}`, CANONICAL)
		.replaceAll(`${PREFIX}/`, "/")
		.replaceAll(GITHUB_MARK, GITHUB_TREE);
}

function textual(type) {
	return /text\/|javascript|json|xml|svg/.test(type);
}

export default {
	async fetch(request) {
		const incoming = new URL(request.url);
		const target = new URL(mapPath(incoming.pathname) + incoming.search, ORIGIN);
		const response = await fetch(target, { method: request.method, redirect: "manual" });
		const headers = new Headers(response.headers);
		const location = headers.get("location");
		if (location) headers.set("location", rewriteBody(location));
		headers.delete("content-length");
		const type = headers.get("content-type") || "";
		if (!textual(type)) return new Response(response.body, { status: response.status, headers });
		const body = rewriteBody(await response.text());
		return new Response(body, { status: response.status, headers });
	},
};
