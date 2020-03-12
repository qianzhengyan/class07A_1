// axios的二次封装
import * as axios from 'axios';
import historyProps from "../App"

const Axios:any = axios;
const httpAxios = Axios.create({
    baseUrl:process.env.NODE_ENV === 'production'?'http://49.232.77.197:8888':"",
    timeout:30000//延时3秒
})
// 添加请求拦截器
httpAxios.interceptors.request.use(function (config:axios.AxiosRequestConfig) {
    // 在发送请求之前做些什么
    config = {
        ...config,
        headers:{
            ...config.headers,
            auth:window.localStorage.token
        }
    }
  }, function (error:axios.AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
httpAxios.interceptors.response.use(function (response:axios.AxiosResponse) {
    // 对响应数据做点什么
    console.log(response,'响应数据')
    return response;
  }, function (error:axios.AxiosError) {
    // 对响应错误做点什么
    const response = error.response;
    switch(response?.status){
        case 404:{
            historyProps.replace('/404')
        }
    }
    return Promise.reject(error)
  });

  export default {
      get<T extends Object>(url:string,params?:T):axios.AxiosPromise{
          return httpAxios.get(url,{params})
      },
      set<T extends Object>(url:string,data?:T):axios.AxiosPromise{
        return httpAxios.get(url,{data})
    }
  }