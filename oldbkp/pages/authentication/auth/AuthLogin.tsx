import React, { FormEvent } from "react";
import {
  Box,
  Typography,
  Stack,
} from "@mui/material";
import styles from './login.module.css'
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContex";
import { jsx } from "@emotion/react";
interface loginType {
  title:JSX.Element | JSX.Element[];
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}
function AuthLogin({ title, subtitle, subtext }: loginType){

  const{login} = useContext(AuthContext)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

 async function Login(event:FormEvent){
  event.preventDefault();
  

   
  let data = {
    email, 
    password
  }

   await login(data)
 }
  return(
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Stack>
      <Box> 
           <form onSubmit={Login}>
             <div className={styles.centralize}>
              <input type="text" placeholder="Email" className={styles.txt} value={email} onChange={(e) =>setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" className={styles.txt} value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <input type="submit" value={"Entrar"} className={styles.btn}/>
              </div> 
          </form>
           
        
    </Box>
    </Stack>
    {subtitle}
  </>

);
}

export default AuthLogin;
