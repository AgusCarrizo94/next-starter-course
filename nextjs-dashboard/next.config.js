/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["https://opulent-umbrella-jwq9v56vv4424gr-3000.app.github.dev/"]
        }
    }
};

module.exports = nextConfig;
