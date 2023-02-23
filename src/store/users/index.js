//登录注册小仓库
import { reqGetcode, reqUser,reqUsersLogin,reqUserInfo,reqLogout } from '@/API'
const state = {
    code: '',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
}
const actions = { 
    //注册
    async getCode({ commit }, phone) {
        let re = await reqGetcode(phone)
        // console.log(re)
        if (re.code == 200) {
            commit('GETCODE', re.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister(_, user) {
        let re = await reqUser(user)
        //console.log(re)
        if (re.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //登录token
    async userLogin({commit},data){
        let re=await reqUsersLogin(data)
        //console.log(re,commit)
        if(re.code==200){
            commit('USERLOGIN',re.data.token)
            //持久化存储token
            localStorage.setItem('TOKEN',re.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async getUserInfo({commit}){
        let re = await reqUserInfo()
        //console.log(re)
        if(re.code==200){
            commit('GETUSERINFO',re.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //退出登录
    async userlogout({commit}){
        let re = await reqLogout()
        if (re.code == 200) {
            commit('CLEARALL')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
        
    }
}
const mutations = {
    GETCODE(state, code) {
        state.code = code 
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    //清除所有
    CLEARALL(state){
      state.token='';
      state.userInfo=''
      localStorage.removeItem('TOKEN')
    }
}
const getters = {}
export default {
    state,
    actions,
    mutations,
    getters,
}