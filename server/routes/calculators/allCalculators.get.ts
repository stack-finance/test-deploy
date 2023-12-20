import {serverSupabaseClient} from '#supabase/server';

const TABLE_NAME = 'calculators';

export default defineEventHandler( async(event) => {
	try {
		const db = await serverSupabaseClient(event);
		const { data, error } = await db.from(TABLE_NAME).select('*').order('id');
		
		if (error) {
			throw error;
		}
		
		return data;
	} catch (e) {
		console.error('Something went wrong while fetching calculators', e);
	}
});
