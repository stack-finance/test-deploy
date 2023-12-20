import {serverSupabaseClient} from '#supabase/server';

const TABLE_NAME = 'opportunities';

export default defineEventHandler( async (event) => {
	try {
		const { opportunity } = await readBody(event);
		const db = await serverSupabaseClient(event);
		const { data, error } = await db.from(TABLE_NAME).select('*').eq('slug', opportunity);
		
		if (error) {
			throw error;
		}
		
		return data;
	} catch (e) {
		console.error('Something went wrong while fetching opportunities by slug', e);
	}
});
