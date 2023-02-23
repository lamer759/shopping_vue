import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex)
import Home from "./Home";
import Search from "./Search";
import Detail from "./Detail";
import shopcart from './shopcart'
import users from './users'
import Trade from "./Trade";
export default new Vuex.Store({
    modules:{
        Home,
        Search,
        Detail,
        shopcart,
        users,
        Trade,
    }
})