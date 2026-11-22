import assert from "node:assert/strict";
import { mapPath, rewriteBody } from "./src/index.js";

assert.equal(mapPath("/"), "/embry-wiki/");
assert.equal(mapPath("/flourish/"), "/embry-wiki/flourish/");
assert.equal(mapPath("/embry-wiki/flourish/"), "/embry-wiki/flourish/");
assert.equal(mapPath("/_astro/page.js"), "/embry-wiki/_astro/page.js");

const html = [
	'<link rel="canonical" href="https://jtembry.github.io/embry-wiki/flourish/"/>',
	'<a href="/embry-wiki/start/">Start</a>',
	'<script src="/embry-wiki/_astro/page.js"></script>',
	'<a href="https://github.com/jtembry/embry-wiki/edit/main/src/content/docs/flourish.md">Edit</a>',
].join("");
const out = rewriteBody(html);
assert.match(out, /href="https:\/\/wiki\.embry\.dev\/flourish\/"/);
assert.match(out, /href="\/start\/"/);
assert.match(out, /src="\/_astro\/page\.js"/);
assert.match(out, /href="https:\/\/github\.com\/jtembry\/embry-wiki\/edit\/main\/src\/content\/docs\/flourish\.md"/);
assert.equal(out.includes("/embry-wiki/start"), false);

console.log("ok");
