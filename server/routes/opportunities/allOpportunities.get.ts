import {serverSupabaseClient} from '#supabase/server';

const TABLE_NAME = 'opportunities';
const cardFields = 'name,icon,annualizedReturns,pageDesc,slug,priority';

export default defineEventHandler( async (event) => {
	try {
		const db = await serverSupabaseClient(event);
		const { data, error } = await db.from(TABLE_NAME).select(cardFields).order('priority');
		
		if (error) {
			throw error;
		}
		
		return data;
	} catch (e) {
		console.error('Something went wrong while fetching all opportunities', e);
	}
});
