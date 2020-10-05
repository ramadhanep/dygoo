export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      title: 'Dygoo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
          { src: "/libs/jquery/jquery.min.js" },
          { src: "/libs/bootstrap/js/bootstrap.bundle.min.js" },
          { src: "/libs/metismenu/metisMenu.min.js" },
          { src: "/libs/simplebar/simplebar.min.js" },
          { src: "/libs/node-waves/waves.min.js" },
          { src: "/libs/waypoints/lib/jquery.waypoints.min.js" },
          { src: "/libs/jquery.counterup/jquery.counterup.min.js" },
          { src: "/js/app.js" }
      ]
    },
  
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "~/assets/css/bootstrap-dark.min.css",
        "~/assets/css/icons.min.css",
        "~/assets/css/app.min.css"
    ],
  
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
    ],
  
    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,
  
    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],
  
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
    ],
  
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    }
  }
  