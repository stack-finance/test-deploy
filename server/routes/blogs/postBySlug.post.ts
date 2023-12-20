import {defineEventHandler} from 'h3';
import useCms from '~/composables/global/useCms';

export default defineEventHandler(async (event) => {
	const api = useCms();
	const { slug } = await readBody(event);
	const post = await api.posts.read({ slug	})
			.catch((err) => {
				console.error(err);
			});
	return {post};
});
