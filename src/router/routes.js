
// import HomeVue from '../pages/Home/HomeVue.vue'
import LoginVue from '../pages/Login/LoginVue.vue'
import SearchVue from '../pages/Search/SearchVue.vue'
import RegisterVue from '../pages/Register/RegisterVue.vue'
import DetailVue from '../pages/Detail/DetailVue.vue'
import AddcartSuccess from '../pages/AddCartSuccess/AddcartSuccess.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import TradeVue from '../pages/Trade/TradeVue.vue'
import PayVue from '../pages/Pay/PayVue.vue'
import PaySuccess from '../pages/PaySuccess/PaySuccess.vue'
import CenterVue from '../pages/Center/CenterVue.vue'
//引入二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

//路由懒加载
const foo=()=> import('../pages/Home/HomeVue.vue')

export default [
    { 
        path: '/home',
        component: foo,
        //footer的显示
        meta: { show: true }
    }, {
        path: '/login',
        component: LoginVue,
        meta: { show: false }
    }, {
        name: 'search',
        path: '/search/:keyword?',
        component: SearchVue,
        meta: { show: true }
    }, {
        path: '/register',
        component: RegisterVue,
        meta: { show: false }
    }, {
        //重定向
        path: '*',
        redirect: '/home'
    }, {
        path: '/detail/:skuid',
        component: DetailVue,
        meta: { show: true }
    }, {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddcartSuccess,
        meta: { show: true }
    }, {
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true }
    }, {
        path: '/trade',
        component: TradeVue,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    }, {
        path: '/pay',
        component: PayVue,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    }, {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true }
    }, {
        path: '/center',
        component: CenterVue,
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component: MyOrder,
            }, {
                path: 'grouporder',
                component: GroupOrder,
            },{
                //重定向，保证一上来默认显示
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
]