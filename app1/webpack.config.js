const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 3001,
    },
    entry: "./src/index",
    cache: false,
    devtool: "source-map",
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app1",
            filename: "remoteEntry.js",
            exposes: {
                "./App1Init": "./src/bootstrap",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
