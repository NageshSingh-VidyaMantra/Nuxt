// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
    tailwindcss: {cssPath: '~/assets/css/input.css'}
})
