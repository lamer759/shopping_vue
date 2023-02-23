//对axios二次封装
import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
import store from '@/store'
const requests = axios.create({
    baseURL:'/api',
    timeout:5000,
});

//请求拦截器
requests.interceptors.request.use((config)=>{
    // nprogress.start();
    // return config 
    
    //uuid带响应头
    if(store.state.Detail.uuid_token){
        config.headers.userTempId=store.state.Detail.uuid_token
    }
    nprogress.start();
    //携带token
    if(store.state.users.token){
        config.headers.token=store.state.users.token
    }
    return config
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new error(`faile`));
});

export default requests