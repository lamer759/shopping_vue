
import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'
//解决编程式跳转时的报错，因为push和replace方法会返回一个promise，如果没有对错误进行捕获，控制台就会输出错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
//引入store，路由守卫
import store from "@/store";
let router = new VueRouter({
    routes,
    scrollBehavior() {
        return {
            y: 0
        }
    }
})
router.beforeEach(async (to, _, next) => {
    //console.log(store)
    let token = store.state.users.token
    let name = store.state.users.userInfo.name
    if (token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (name) {
                next();
            } else {
                try {
                    await  store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //tooken失效
                  await  store.dispatch('userlogout')
                  next('/login')
                }
            }
        }
    } else {
        //未登录
        let topath=to.path
        if(topath.indexOf('/trade')!=-1 || topath.indexOf('/pay')!=-1 || topath.indexOf('/center')!=-1){
            next('/login?redirect='+topath)
        }else{
            next()

        }
    }
})
export default router