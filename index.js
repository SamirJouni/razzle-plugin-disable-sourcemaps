const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");

const inject = (immutableConfig, { target, dev }, webpack) => {
	const isProd = dev === false;
	const isWeb = target === "web";
	const config = Object.assign({}, immutableConfig);

	config.devtool = false;

	if (isWeb && isProd) {
		config.optimization.minimizer.pop();
		config.optimization.minimizer.push(
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					parser: safePostCssParser,
					map: false
				}
			})
		);
	}

	return config;
};

module.exports = inject;
