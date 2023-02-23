//detail模块的小仓库
import { reqGoods,reqAddShopCart } from '@/API/index'
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    uuid_token:getUUID()
}
const actions = {
    async getgoodInfo({ commit }, skuId) {
        let re = await reqGoods(skuId);
        if (re.code == 200) {
            commit('GETGOODINFO', re.data)
        }
    },
    async addShopCart(_,{skuId,skuNum}){
        //加入购物车以后，服务器没有返回其他数据，没必要三连环存储数据了
       let re= await reqAddShopCart(skuId,skuNum);
        //有async当前函数返回的一定 是一个promise
        if (re.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const getters = {
    categoryView(state) {
        //return state.goodInfo.categoryView //不能这样写，会报错
        return state.goodInfo.categoryView || []
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || []
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
} 