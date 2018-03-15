
export const baseURL = process.env.NODE_ENV == "production" ? 
                "" :    //正式环境后台地址
                "http://localhost:3000";  //测试环境后台地址

//超时时间
export const timeout = 1000;

export const header = {

};