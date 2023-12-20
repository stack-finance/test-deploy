import {serverSupabaseClient} from '#supabase/server';
import {getAllCalculators} from '~/composables/repository/useCalculator';

const TABLE_NAME = 'calculators';

export default defineEventHandler( async (event) => {
	try {
		const { slug } = await readBody(event);
		const db = await serverSupabaseClient(event);
		const { data, error } = await db.from(TABLE_NAME).select('*').eq('slug', slug);
		/// TODO: Do better below
		const inactive = await getAllCalculators();
		const result = {
			active: data ? data[0] : [],
			inactive: inactive?.filter((c: any) => c.slug !== slug)?.slice(0, 3)
		};

		if (error) {
			throw error;
		}
		
		return Promise.resolve(result);
	} catch (e) {
		console.error('Something went wrong while fetching calculators', e);
	}
});
