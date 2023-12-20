import useCms from '~/composables/global/useCms';
export default defineSitemapEventHandler(async (e) => {
	const categories = ['newsletter', 'investing', 'economy', 'finance', 'stack'];
	const limit = 100;
	const api = useCms();
	const featured = await api.posts.browse({ filter: 'featured:true', limit });
	const newsletter = await api.posts.browse({
		filter: 'tag:newsletter',
		limit
	});
	const investing = await api.posts.browse({ filter: 'tag:investing', limit });
	const economy = await api.posts.browse({ filter: 'tag:economy', limit });
	const stack = await api.posts.browse({ filter: 'tag:stack', limit });
	const finance = await api.posts.browse({ filter: 'tag:finance', limit });
	return [
		...featured.map(p => `/blogs/featured/${p.slug}/`),
		...newsletter.map(p => `/blogs/newsletter/${p.slug}/`),
		...investing.map(p => `/blogs/investing/${p.slug}/`),
		...economy.map(p => `/blogs/economy/${p.slug}/`),
		...finance.map(p => `/blogs/finance/${p.slug}/`),
		...stack.map(p => `/blogs/stack/${p.slug}/`),
		...categories.map(c => `/blogs/${c}/`)
	];
});
