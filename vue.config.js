module.exports = {
    devServer: {
        proxy: {
            "/get": {
                target: 'https://www.jsanai.com/api/selfnews/',
                changeOrigin: true,
                pathRewrite: { "^/get": "" }
            },
            // '/chapter': {
            //     target: 'http://chapter2.zhuishushenqi.com/chapter',//设置你调用的接口域名和端口号 别忘了加http
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/chapter': ''
            //     }
            // }
        }
    }
}
