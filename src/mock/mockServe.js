//mock的入口文件
import Mock from 'mockjs'
import banner from './banner.json'
//请求地址
Mock.mock('/mock/getbanner',{code:200,data:banner})