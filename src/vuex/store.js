import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loginDialog: false, //登陆框
        isLogin: false, //登陆状态
        users: {}       //登陆信息
    },
    mutations: {
        store_LoginDialog (state,isShow) {  //打开登陆框
            state.loginDialog = isShow
        },
        store_Onlogin (state, users) {  //登陆成功更新
            state.users.userName = users.userName;
            state.loginDialog = false;
            state.isLogin = true;
        },
        store_SignOut (state) {  //登陆成功更新
            state.users = {};
            state.isLogin = false;
        },
    }
})

export default store
