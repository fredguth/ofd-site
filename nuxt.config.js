module.exports = () => {
    const pkg = require("./package");
    return {
        mode: "universal",
        /*
         ** Headers of the page
         */
        head: {
            title: "One Final Doc, just one.",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { hid: "description", name: "description", content: pkg.description }
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"
                },
                { rel: "stylesheet", href: "https://rsms.me/inter/inter-ui.css" },
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css"
                }
            ]
        },

        /*
         ** Customize the progress-bar color
         */
        loading: { color: "#fff" },

        /*
         ** Global CSS
         */
        css: [],

        /*
         ** Plugins to load before mounting the App
         */
        plugins: [],

        /*
         ** Nuxt.js modules
         */
        modules: [
            // Doc: https://axios.nuxtjs.org/usage
            "@nuxtjs/axios"
        ],
        /*
         ** Axios module configuration
         */
        axios: {
            // See https://github.com/nuxt-community/axios-module#options
        },

        generate: {
            fallback: true
        },
        /*
         ** Build configuration
         */
        build: {
            /*
             ** You can extend webpack config here
             */
            extend(config, ctx) {
                // Run ESLint on save
                if (ctx.isDev && ctx.isClient) {
                    config.module.rules.push({
                        enforce: "pre",
                        test: /\.(js|vue)$/,
                        exclude: /(node_modules)/
                    });
                }
            }
            // ,
            // filenames: {
            //   app: '[name].js',
            //   chunk: '[name].js'
            // }
        }
    };
};