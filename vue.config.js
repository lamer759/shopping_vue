const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //下三行代码配置启动serve后自动打开浏览器
  devServer:{
    host:'localhost',
    port:8080,
    //配置代理服务器,只要访问带有api接口的都会找代理服务器要数据
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn'
      }
    }
  },
  //项目打包不用生成map文件
  productionSourceMap:false
})
