module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    indexPath: 'index.html',
    filenameHashing:true,
    pages: {
        index: {
            entry: "./src/pages/index/index.js", // 配置入口js文件
            template: "./src/pages/index/index.html", // 主页面
            filename: "index.html", // 打包后的html文件名称
            title: "首页", // 打包后的.html中<title>标签的文本内容
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        baicai: {
            entry: "./src/pages/baicai/baicai.js", // 配置入口js文件
            template: "./src/pages/baicai/baicai.html", // 主页面
            filename: "baicai.html", // 打包后的html文件名称
            title: "首页", // 打包后的.html中<title>标签的文本内容
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'baicai']
        },		
        },
}