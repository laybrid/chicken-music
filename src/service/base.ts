import axios from 'axios'
import { serviceParams } from '@/types';
const ERR_OK = 0;
const baseUrl = '/'
axios.defaults.baseURL = baseUrl
export function get (url:string,params?:serviceParams) {
    return axios.get(url,{
        params
    }).then(res=>{
        const serveData = res.data
        if(ERR_OK==0){
            return serveData.result;
        }
    }).catch(err=>{
        console.log(err);
    })
}