import {serverSupabaseClient} from '#supabase/server';
const TABLE_NAME = 'calculators';

export default defineSitemapEventHandler(async (event) => {
	const db = await serverSupabaseClient(event);
	const { data } = await db.from(TABLE_NAME).select('slug');

	if (!data?.length) {
		return [];
	}
	
	return [
			...data.map(c => `/calculators/${c.slug}`)
	]
});
