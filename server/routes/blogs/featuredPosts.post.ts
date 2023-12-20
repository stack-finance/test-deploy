import {defineEventHandler} from 'h3';
import useCms from '~/composables/global/useCms';

export default defineEventHandler(async(event) => {
	const api = useCms();
	const { limit = 4 } = await readBody(event);
	const posts = await api.posts.browse({
		filter: 'featured:true',
		limit,
		include: ['tags', 'authors'],
		fields: 'title,slug,url,feature_image,published_at,reading_time'
	})
			.catch((err) => {
			});
	return {posts};
});
