import {serverSupabaseClient} from '#supabase/server';
const TABLE_NAME = 'faqTopics';

export default defineSitemapEventHandler(async (event) => {
	const db = await serverSupabaseClient(event);
	const { data } = await db.from(TABLE_NAME).select('slug');
	
	if (!data?.length) {
		return [];
	}
	
	return [
			...data.map(f => `/faqs/${f.slug}`)
	]
});
