import axios,{Axios, AxiosError} from 'axios'
import {parseCookies} from 'nookies'
import { signOut } from '../authentication/context/AuthContex'

export function setAPIClient(ctx = undefined){
  let cookies = parseCookies(ctx)
    const api = axios.create({
   

        baseURL:'http://10.0.0.100:8040',
        headers:{
            Authorization :`Bearer ${cookies['@nextauth.token']}`
        }

    })
    api.interceptors.response.use(response =>{
        return response;
    },(error: AxiosError) =>{
        if(error.response?.status === 401){
            if(typeof window !== undefined){
               signOut();
            }else{
                return Promise.reject(error)
            }
        }

    })
    return api
}