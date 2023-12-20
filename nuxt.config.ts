// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  css: [
		'bootstrap/dist/css/bootstrap.min.css',
		'@/assets/scss/app.scss'
	],
	modules: [
		'@stefanobartoletti/nuxt-social-share',
		'@bootstrap-vue-next/nuxt',
		'vue3-carousel-nuxt',
		'dayjs-nuxt',
		'@nuxtjs/supabase',
		'@nuxt/content',
		'@nuxtjs/robots',
		'nuxt-gtag',
		'nuxt-simple-sitemap'
	],
  supabase: {
		redirect: false
	},
	robots: {
		rules: {
			UserAgent: '*',
			Disallow: '',
			Sitemap: 'https://stackwealth.in/sitemap.xml'
		}
	},
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/', '/sitemap.xml']
		},
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
	},
	sitemap: {
		sources: [
			'/api/__sitemap__/blogs',
			'/api/__sitemap__/faqs',
			'/api/__sitemap__/opportunities',
			'/api/__sitemap__/calculators',
		]
	}
})
