// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: 'https://test-deploy-seven-beta.vercel.app',
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
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
	},
})
