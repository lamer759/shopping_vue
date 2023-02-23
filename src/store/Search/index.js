
//search模块的小仓库
import { reqGetsearch } from '@/API/index'
const state = { 
    searchList:{}
 }
const actions = {
    async getsearchList({ commit }, params) {
        //params至少是一个空对象
        let re = await reqGetsearch(params);
        if (re.code == 200) {
            commit('GETSEARCHLIST', re.data)
        }
    }
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
}
const getters = {
    goodsList(state){
       return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    },
}
export default {
    state,
    mutations,
    actions,
    getters,
}