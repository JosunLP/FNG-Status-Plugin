module.exports = {
    module: {
        rules: [
            // ... other rules omitted

            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            // webpack.config.js -> module.rules
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            // sass-loader version >= 8
                            sassOptions: {
                                indentedSyntax: true
                            }
                        }
                    }
                ]
            }
        ]
    },
    // plugin omitted
}