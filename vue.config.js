const HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    resolve = (dir) => { return path.join(__dirname, dir) },
    thisLink = (arr) => {
        let link = ''
        arr.forEach(v => {
            link += '<link rel="'
                + v.rel +
                '" href="'
                + v.href +
                '" '
                + (v.type !== undefined ? 'type="' + v.type + '"' : '')
                + (v.sizes !== undefined ? 'sizes="' + v.sizes + '"' : '') +
                '>'
        })
        return link
    }

module.exports = {
    productionSourceMap: false,
    chainWebpack(config) {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icon'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'LF-[name]'
            })
            .end()
    },
    configureWebpack: config => {
        config.plugins.forEach((val) => {
            if (val instanceof HtmlWebpackPlugin) {
                // HtmlWebpackPlugin 配置
                val.options.title = 'OMG 机霸超大'
                val.options.meta = {
                    'Content-Security-Policy':
                        process.env.NODE_ENV === 'production'
                            ? { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' }
                            : {},
                    'X-UA-Compatible': { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=Edge,chrome=1' },
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                    description: '',
                    'theme-color': '#faeadd',
                    keywords: '',
                }

                val.options.hitokoto = 'What to do if the omg jier is too big?'
                val.options.copyright =
                    '|  _     _____ _ _ ____    _   _ _____ _____\n'
                    + '| | |   |  ___/ / |___ \\  | \\ | | ____|_   _|\n'
                    + '| | |   | |_  | | | __) | |  \\| |  _|   | |\n'
                    + '| | |___|  _| | | |/ __/ _| |\\  | |___  | |\n'
                    + '| |_____|_|   |_|_|_____(_)_| \\_|_____| |_|'

                val.options.link = thisLink([
                    { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
                    { rel: 'dns-prefetch', href: 'https://ae01.alicdn.com' },

                    { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Titillium+Web|Ubuntu:400,700' }
                ])
            }
        })
    }
}