import Vue from 'vue'
import Vuex from 'vuex'
import * as Util from '@/util'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin: false, //登陆状态
        users: {}       //登陆信息
    },
    mutations: {
        store_Login (state, users) {  //登陆成功更新
            state.users.userName = users.userName;
            state.isLogin = true;
            Util.setLocalStorage('userName',users.userName);
        },
        store_SignOut (state) {  //登陆成功更新
            state.users = {};
            state.isLogin = false;
            Util.removeLocalStorage('userName');
        },
    }
})

export default store
