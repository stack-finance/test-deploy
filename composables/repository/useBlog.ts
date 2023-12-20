const getPostsByTag = async (tag: string, limit = 4) => {
	return await $fetch('/blogs/postsByTag', {
		method: 'post',
		body: { tag, limit }
	});
}

const getFeaturedPosts = async (limit = 4) => {
	return await $fetch('/blogs/featuredPosts', {
		method: 'post',
		body: { limit }
	});
}

const getPostBySlug = async (slug: string) => {
	return await $fetch('/blogs/postBySlug', {
		method: 'post',
		body: { slug }
	});
}

const getBlogCategories = () => {
	return {
		featured: {
			title: 'featured',
			img: 'https://webstatic.stackfinance.co/website/feature-blogs.webp'
		},
		newsletter: {
			title: 'The Sunday Investor',
			img: 'https://webstatic.stackfinance.co/website/weekly-stack.webp'
		},
		investing: {
			title: 'Investing 101',
			img: 'https://webstatic.stackfinance.co/website/investing-101.webp'
		},
		economy: {
			title: 'The Economy & You',
			img: 'https://webstatic.stackfinance.co/website/economy.webp'
		},
		finance: {
			title: 'personal finance',
			img: 'https://webstatic.stackfinance.co/website/personal-finance.webp'
		},
		stack: {
			title: 'everything stack',
			img: 'https://webstatic.stackfinance.co/website/everything-stack.webp'
		}
	};
}

export { getPostBySlug, getPostsByTag, getFeaturedPosts, getBlogCategories };
