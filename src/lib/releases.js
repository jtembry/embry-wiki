/**
 * The release lists live in the public embry.dev repo (src/data/<product>-releases.json), which the
 * product pages and the App Store text already read. Fetched once per build; a miss gives [] so a
 * network blip never breaks the deploy.
 */
const RAW = 'https://raw.githubusercontent.com/jtembry/embry.dev/main/src/data';

export async function loadReleases(product) {
	try {
		const res = await fetch(`${RAW}/${product}-releases.json`);
		if (!res.ok) throw new Error(`${res.status}`);
		const list = await res.json();
		return Array.isArray(list) ? list : [];
	} catch (err) {
		console.warn(`[releases] ${product}: ${err.message}`);
		return [];
	}
}
