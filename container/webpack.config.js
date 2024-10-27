const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
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
            name: "container",
            filename: "remoteEntry.js",
            remotes: {
                app1 : "app1@http://localhost:3001/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
