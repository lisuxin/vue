import axios from 'axios';
import querystring from 'querystring'

const errorHandle=(status,info) =>{
    switch(status){
        case 400:
            console("语义错误")
            break;
            case 401:
            console("服务器认证失败")
            break;
            case 403:
            console("服务器拒绝访问")
            break;
            case 404:
            console("地址错误")
            break;
            case 500:
            console("服务器报出异常")
            break;
            case 502:
            console("服务器报无响应")
            break;
    }
}

const instance = axios.create({
    //新axios对象的公共配置
    timeout:5000 //请求超时时间
})
//拦截器最常用的

//发送数据之前
instance.interceptors.request.use(
    config =>{
        if (config.method == "post"){
            config.data = querystring.stringify(config.data)
        }
        //包含网络请求的所有信息
        return config
    },
    error=>{
        return Promise.reject(error)
        //异常
    }
);

//获取数据之前
instance.interceptors.response.use(
    response =>{
        return response.status == 200 ? Promise.resolve(response) : Promise.reject(response)
    },
    error =>{
        const {response} = error;
        errorHandle(response.status,response.info)
    }
);

export default instance;