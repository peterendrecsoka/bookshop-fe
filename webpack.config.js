var webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: [".ts",".js",".tsx"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.tsx$/, use: 'ts-loader' },
        ]
    },
    entry: {
        index: "./src/index.tsx"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'docs'),
    }
}
