/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		serverActions: true
	},
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true }
		return config
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**'
			}
		]
	}
}

module.exports = nextConfig
