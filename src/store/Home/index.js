import {reqBanner, reqCategoryList} from '@/API/index'
//home模块的小仓库

const state ={ 
    categoryList:[],
    bannerList:[],
}
const actions={
    async categoryList({commit}){
        let result = await reqCategoryList();
        //console.log(result)
        if(result.code==200){
            commit('CATEGORYLIST',result.data)
        }
    },
    async getBannerlist({commit}){
       let re= await reqBanner();
       //console.log(re)
       if(re.code==200){
        commit('GETBANNERLIST',re.data)
    }
    }
}
const mutations ={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
       state.bannerList=bannerList
    }
}
const getters={}
export default {
    state,
    actions,
    mutations,
    getters,
}