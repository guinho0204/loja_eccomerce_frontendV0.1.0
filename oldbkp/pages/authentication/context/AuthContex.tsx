import{createContext, ReactNode, useState} from 'react'
import { api } from '../../service/apiClient';
import { destroyCookie,setCookie,parseCookies } from 'nookies';
import Router from 'next/router';
import Home from '../..';



type LoginContextData = {
    user:UserProps| undefined;
    isAuthenticated:boolean;
    login:(credentials:LoginProps) => Promise<void>
    signOut: () => void;
}
type UserProps = {
    nome:string;
    email: string;
    password: string;
    rua: string;
    numero: string;
    bairro: string;
    complemento: string;
    cep: string;
}
type LoginProps ={
    email:string;
    password:string;
}
type AuthProviderProps={
    children: ReactNode;
}

export const AuthContext = createContext({} as LoginContextData)

 export function signOut(){
    try{
       destroyCookie(undefined,'@nextauth.token')
       Router.push('/')
    }catch{
        console.log('erro')
    }
 }

export function AuthProvider({children}: AuthProviderProps){
 const [user,setUser] = useState<UserProps>()
 const isAuthenticated = !!user;
 
  async function login({email, password}:LoginProps){

       const response =  await api.post('/login',{
        email,
        password
       })
       const {nome,
        rua,
        numero,
        bairro,
        complemento,
        cep,
        token} = response.data;

       setCookie(undefined, '@nextauth.token',token,{
        maxAge: 60*60*30,
        path:'/'
       })
       setUser({
        nome,
        rua,
        numero,
        bairro,
        complemento,
        cep,
        email,
        password
       })
       api.defaults.headers['Authorization'] = `Bearer ${token}`

       Router.push('/');
   }

   return (
    <AuthContext.Provider value={{user, isAuthenticated,login,signOut }}>
       {children}
    </AuthContext.Provider>
   )
}