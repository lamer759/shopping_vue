import { reqCartList, reqDelate, reqCheckedId } from '@/API/index'

const state = {
  cartlist: []
}
const actions = {
  async getCartList({ commit }) {
    let re = await reqCartList()
    //console.log(re)
    if (re.code == 200) {
      commit('GETCARTLIST', re.data)
    }
  },
  async delateshopcatr(_, skuId) {
    let re = await reqDelate(skuId)
    if (re.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //修改产品
  async updatedChecked(_, { skuId, isChecked }) {
    let re = await reqCheckedId(skuId, isChecked)
    if (re.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  delateAllChecked({ dispatch, getters }) {
    //console.log(dispatch,getters)
    let promiseAll=[]
    getters.cartlist.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('delateshopcatr', item.skuId) : ''
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll) 
  },
  updateAllChecked({dispatch,getters},isChecked){
    let promiseAll=[]
    getters.cartlist.cartInfoList.forEach(i=>{
      let promise = dispatch('updatedChecked', {skuId:i.skuId,isChecked:isChecked})
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll) 
  }
}
const mutations = {
  GETCARTLIST(state, cartlist) {
    state.cartlist = cartlist
  }
}
const getters = {
  cartlist(state) {
    return state.cartlist[0] || {}
  }
}
export default {
  state,
  actions,
  mutations,
  getters,
}