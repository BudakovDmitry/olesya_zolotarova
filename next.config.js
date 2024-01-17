// /** @type {import('next').NextConfig} */
// const nextConfig = {}
//
// module.exports = nextConfig

const withNextIntl = require('next-intl/plugin')(
    // Specify a custom path here
    './app/i18n.ts'
);

module.exports = withNextIntl({
    output: 'export',
    images: {
        unoptimized: true,
    },
});