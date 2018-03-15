import * as axios from './axios';

//用户注册
export const register = (user) =>{
    console.log(user);
}
//用户登录
export const login = (user)=>{
    return axios.post('/zel',user);
}

