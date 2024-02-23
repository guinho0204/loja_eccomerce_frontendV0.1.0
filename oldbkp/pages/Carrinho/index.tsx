import React, { useEffect, useState } from "react";
import { api } from "../service/api";
import { GetServerSideProps } from "next";
import Image from "next/image";
import styles from './carrinho.module.css'


type CarrinhoProps ={
  Id_Carrinho:number, 
  Imagem_Produto:string;
  Nome:string;
  Descricao:string;
  Quantidade:string;
  Tipo:string;
  Tamanho:string;
  Valor_produto:string;
  Total:number;
}
interface Carrinhoprops{
    carrinho:CarrinhoProps[];
}

export default function Carrinho({carrinho}:Carrinhoprops){
    const[carrinhoList,setCarrinhoList] = useState(carrinho || [])
    

    

        async  function caulculoCarrinho(){
          
            var numbers = [1,56,78,32,45];

            var sum = 0;
            

            
            for(var i =0;i<carrinhoList.length;i++){
               sum+=carrinhoList[i].Total;
            }
            
            console.log(sum);  
        }
        
        
         

  

   
    return(
        <>
         <h1 className={styles.title}>Carrinho</h1>
          <table className={styles.table}>
                    <thead>
                        <th></th>
                        <th>Nome</th>
                        <th>Tamanho</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </thead>
                

            {carrinhoList.map(item =>(
              <tbody className={styles.table}>
                <th>{item.Id_Carrinho}</th>
                 <th>{item.Nome}</th>
                 <th>{item.Tamanho}</th>
                 <th>{item.Quantidade}</th>
                 <th> R$ {item.Valor_produto}</th>
              </tbody>
            ))}
            
            

            </table>
            <div className={styles.bottom}>
              <p className={styles.txtTotal}>Valor a pagar R$:{carrinhoList[0].Total},00</p>
             </div>
                            
           <input type="button" onClick={caulculoCarrinho} value="calcular"/>
           
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async(context) =>{
     
    const response = await api.get('/setcarrinho')
    console.log(response.data)

    return{
        props:{
           carrinho:response.data
        }
    }

} 