//postcss.config.js
const tailwindcss = require('tailwindcss');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.html',
        './public/**/*.html',
        './src/**/*.js',
    ],
    css: ['./src/css/tailwind.css'],
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ],
};