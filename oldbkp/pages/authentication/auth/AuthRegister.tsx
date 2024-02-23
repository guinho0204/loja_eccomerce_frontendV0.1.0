import React, { FormEvent } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link  from 'next/link';
import styles from './login.module.css'
import CustomTextField from '../../../src/components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

interface registerType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
  }

function AuthRegister({ title, subtitle, subtext }: registerType) {

     function Cadastrar(event : FormEvent){
       
     }


    return(
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box>
        <div className={styles.centralize}>

            <form onChange={Cadastrar}>
                <input type='text' placeholder='Nome' className={styles.txt}/>
                <input type='text' placeholder='Email' className={styles.txt}/>
                <input type='password' placeholder='Password' className={styles.txt}/>
                <p>Obervação: O endereço que utilizar aqui será utilizado para entrega</p>
                <input type='number' placeholder='Cep' className={styles.txt}/>
                <input type='text' placeholder='Rua' className={styles.txt}/>
                <input type='number' placeholder='Numero'className={styles.txt}/>
                <input type='text' placeholder='Bairro' className={styles.txt}/>
                <input type='text' placeholder='Complemento' className={styles.txt}/>
                <input type='submit' value={'Cadastrar'}/>
             </form>
        
        </div>    
      
        </Box>
        {subtitle}
    </>
  );
}

export default AuthRegister;
