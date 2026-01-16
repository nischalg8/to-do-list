const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/scripts/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },
    devtool: "eval-source-map", // for better debugging experience maps the errors to the original source code not main.js created by bundling
    devServer: {
        /* dev server bundles code and serves live server at localhost:3000 and watches file changes
        and rebuilds the bundle and refreshes the browser          
        */

        watchFiles: ["./src/index.html"],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // to load html files and images referenced in html in the bundle
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                // to load images in the bundle written in js 
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
