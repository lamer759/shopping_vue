
import {reqAddressInfo,reqOrderInfo} from '@/API'
const state={
    address:[],
    orderInfo:[]
}
const actions={
    async getUseraddress({commit}){
        let re = await reqAddressInfo()
        //console.log(re)
        if(re.code==200){
            commit('GETUSERDGGRESS',re.data)
        }
    },
    async getOrderInfo({commit}){
        let re = await reqOrderInfo()
        //console.log(re)
        if(re.code==200){
            commit('GETORDERINFO',re.data)
        }
    }
}
const mutations={
    GETUSERDGGRESS(state,address){
        state.address=address
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo=orderInfo
    }
}
const getters={}

export default {
    state,
    actions,
    mutations,
    getters
}