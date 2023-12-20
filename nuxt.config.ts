// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseUrl: 'https://test-deploy-seven-beta.vercel.app',
  },
  router: {
		options: {
			scrollBehaviorType: 'smooth'
		}
	},
	pages: true,
  components: [
		{
			path: '~/components',
			pathPrefix: false
		}
	],
  nitro: {
		prerender: {
			// failOnError: false,
			crawlLinks: true,
			routes: ['/', '/sitemap.xml']
		},
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
	},
})
