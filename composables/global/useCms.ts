import GhostContentAPI from '@tryghost/content-api';

/// The API object will be available globally and is
/// initialized only once
const api = new GhostContentAPI({
	url: process.env.GHOST_URL ?? '',
	key: process.env.GHOST_API_KEY ?? '',
	version: 'v5.0'
});

export default function useCms() {
	return api;
};
