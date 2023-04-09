import AOS from "aos"

import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 300
      // once: true
    }) // eslint-disable-line new-cap
  }
})