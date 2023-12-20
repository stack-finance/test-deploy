import {serverSupabaseClient} from '#supabase/server';

const TABLE_NAME = 'opportunities';
const cardFields = 'name,icon,annualizedReturns,pageDesc,slug,priority';

export default defineEventHandler( async (event) => {
	try {
		let response;
		const {priority} = await readBody(event);
		const db = await serverSupabaseClient(event);
		if (priority <= 2) {
			response = await db.from(TABLE_NAME).select(cardFields).gt('priority', priority).order('priority').limit(2);
		} else {
			response = await db.from(TABLE_NAME).select(cardFields).lt('priority', priority).order('priority').limit(2);
		}
		
		if (response.error) {
			throw response.error;
		}
		
		return response.data;
	} catch (e) {
		console.error('Something went wrong while fetching related opportunities', e);
	}
});
