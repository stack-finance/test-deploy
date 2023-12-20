import {serverSupabaseClient} from '#supabase/server';

const TABLE_NAME = 'faqTopics';

export default defineEventHandler( async (event) => {
	try {
		const { category } = await readBody(event);
		const db = await serverSupabaseClient(event);
		const { data, error } = await db.from(TABLE_NAME).select('id,icon,slug,title')
				.eq('category', category);
		
		if (error) {
			throw error;
		}
		return data;
	} catch (e) {
		console.error('Something went wrong while fetching FAQs by category', e);
	}
});
