//用于API接口统一管理
import requests from "./request";
import mockRequest from './mock'
export const reqCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get',
    })
}
export const reqBanner = () => mockRequest.get('/getbanner')
// export const reqBanner=()=>{
//  return mockRequest({
//     url:'/getbanner',
//     method:'get'
//  })
// }

//这个传递的参数至少是一个空对象
export const reqGetsearch = (params) => requests({ url: '/list', method: 'post', data: params })

//产品路由
export const reqGoods = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

//产品加入购物车
export const reqAddShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
})
//获取购物车列表数据接口
export const reqCartList = () => requests({
    url: '/cart/cartList',
    method: 'get'
})

//删除购物车产品的接口
export const reqDelate = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

//修改商品选中状态
//export const reqCheckedId=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//export const reqCheckedid=()=>requests({url:`/cart/checkCart` ,method:'get'})
export const reqCheckedId = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})

//获取验证码
export const reqGetcode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})

//注册
export const reqUser=(data)=>requests({
    url:`/user/passport/register`,
    data,
    method:'post'
})
//登录
export const reqUsersLogin=(data)=>requests({
    url:'/user/passport/login',
    data:data,
    method:'post'
})
//携带token向服务器要用户信息
export const reqUserInfo =()=>requests({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
})
export const reqLogout=()=>requests({
    url:'/user/passport/logout',
    method:'get'
})
export const reqAddressInfo=()=>requests({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get'
})
//获取商品清单
export const reqOrderInfo=()=>requests({
    url:'/order/auth/trade',
    method:'get'
})
//提交订单,之后不再练习vuex了
export const reqSubmit=(tradeNo,data)=>requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data:data,
    method:'post'
})
//获取支付信息
export const reqPayInfo=(orderId)=>requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
})
//获取订单支付状态
export const reqPayStatus=(orderId)=>requests({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
})
//我的订单
export const reqMyorderList =(page,limit)=>requests({
    url:`/order/auth/${page}/${limit}`,
    method:'get'
})