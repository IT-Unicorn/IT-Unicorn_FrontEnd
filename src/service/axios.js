import axios from 'axios';
import * as config from './config';
import  qs from 'qs'
// axios.defaults.withCredentials=true;
var Axios = axios.create({
    baseURL: config.baseURL,
    // timeout: config.timeout,
    // headers: config.header,
  });

//get请求
 export const get = (url='',data={})=>{
    Axios.get(url,{data:data})
    .then((res)=>{
        return res;
    })
    .catch((err)=>{
        return err;
    })
 } 
 //同步get请求
 export const asyncGet = async (url='',data={})=>{
    await Axios.get(url,{data:data})
    .then((res)=>{
        return res;
    })
    .catch((err)=>{
        return err;
    })
 } 

 //post请求
 export const post = (url='',data={})=>{
     console.log(data);
    Axios.post(url,{data:data})
    .then((res)=>{
        console.log(res.data);
        return res;
    })
    .catch((err)=>{
        console.log('err');
        return err;
    })
 }