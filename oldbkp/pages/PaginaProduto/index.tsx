import React, { ReactElement, useState } from "react";
import styles from './Produto.module.css'
import Imagemsum from './../imagens/sapatoum.jpg'
import Image  from "next/image";
import Visa_Icons from './../imagems_ecomerceIcon/logo_visa.webp'
import Elo_Icon from './../imagems_ecomerceIcon/logo_elo.webp'
import Master_Icon from './../imagems_ecomerceIcon/logo_master.webp'
import Hyper_Icon from './../imagems_ecomerceIcon/logo_hipercard.webp'
import Dinners_Icon from './../imagems_ecomerceIcon/logo_diners.webp'
import boletos_Icon from './../imagems_ecomerceIcon/logo_boleto.webp'
import amex_Icon from './../imagems_ecomerceIcon/logo_amex.webp'
import PageContainer from "../../src/components/container/PageContainer";
import { Box } from "@mui/material";
import DashboardCard from "../../src/components/shared/DashboardCard";
import FullLayout from "../../src/layouts/full/FullLayout";
import Pagamento from "../Pagamento"
import Router from "next/router";
import Icon_whatsapp from './../imagems_ecomerceIcon/icone_whatsapp.svg'
import Icon_instagram from './../imagems_ecomerceIcon/instagram.svg'


 const MostrarProduto = () =>{

     const [counter, setConter] = useState(0)

    const MaisQuantidade = () =>{
         setConter(counter + 1)
    }
    const MenosQuantidade = () =>{
     setConter(counter - 1 )
    }
     function pagamentoshow(){
        Router.push('../Pagamento');
     }
    return(
         <>
     <PageContainer title="Pagina Produto" description="this is Ver">  
      <Box>
      
     <div className={styles.area}>
         <div className={styles.imagemProduto}>  
           <Image src={Imagemsum} alt="imagem produto" className={styles.ImagemProduto}/>
        </div>
        <div className={styles.infoProduto}>
          <h1>Tenis Tomy Hifigger</h1>
           <h2>R$ 40.00 </h2>
           <h2> ou 3x de R$ 13.03</h2>
           <h4>com 10% de desconto</h4>
            
            <div>
               <h3>Tamanhos</h3>
               <input type="button" value={'35'}className={styles.btnTamanho}/>
               <input type="button" value={'36'}className={styles.btnTamanho}/>
               <input type="button" value={'37'}className={styles.btnTamanho}/>
               <input type="button" value={'38'}className={styles.btnTamanho}/>
               <input type="button" value={'39'}className={styles.btnTamanho}/>
            </div>
           <p className={styles.txtQuantidade}>Quantidade</p> 
           <div className={styles.quantidadeview}>
               <input type="button" value={'+'} className={styles.btnAdicionar} onClick={MaisQuantidade}/>
               <div className={styles.midle}>
               <label>{counter}</label>
               </div>
               <input type='button' value={'-'} className={styles.btnDiminuir} onClick={MenosQuantidade}/>
               
           </div>
           <div className={styles.btns}>
               <input type="button"  className={styles.btnCarrinho} value={'Carrinho'} onClick={pagamentoshow}/>
               <div className={styles.divIcons}>
               <Image src={Visa_Icons} alt="icon visa" className={styles.icon}/>
               <Image src={Elo_Icon} alt="icon elo" className={styles.icon}/>
               <Image src={Master_Icon} alt=" Master Icon" className={styles.icon}/>
               <Image src={Hyper_Icon} alt='Hyper Icon' className={styles.icon}/>
               <Image src={Dinners_Icon} alt='Dinners Icons' className={styles.icon}/>
               <Image src={boletos_Icon} alt='bolletos Icon' className={styles.icon}/>
               <Image src={amex_Icon} alt='Amex Icon' className={styles.icon}/>
               </div>
           </div> 
            
        </div>  
     </div> 
    <div className={styles.infoTbales}> 
     <div className={styles.InfoProduto}>
            <h4>Informações do produto</h4>
            <div className={styles.divInfoP}>
               <table className={styles.table_ifoProduto}>
                  <tr>
                     <td>Cor</td>
                     <td>preta com borracha branca </td>  
                  </tr>
                  <tr>
                     <td>Faixa etaria</td>  
                     <td>Adulto</td>
                  </tr>
                  <tr>
                     <td>Genero</td>
                      <td>Feminino</td>
                  </tr>
                  <tr>
                     <td>tipo</td>
                     <td>Tenis</td>
                  </tr>
                  <tr>
                     <td>Material externo</td>
                     <td>Pano poliester</td>
                  </tr>
                  <tr>
                     <td>Peso pe</td>
                     <td>10 Gm</td>
                  </tr>
                  
               </table>
            </div>
           

        </div> 
        <div className={styles.Propaganda}>
                   <h4>Produto</h4>
                   <p>Este produto é destinado a pessoa do sexo feminino da faixa etaria adulto que deseja praticar sportes fisicos regularmente, com um bom acabamento da cor preto com o salto emborrachado branco flexivel com listras ao lado na cor vermelha preto e branco com extrema qualidade </p>
               </div>
       </div> 
        <div className={styles.listprodutoPromos}>
           <div className={styles.produtopromo}>
               <Image src={Imagemsum} alt='promotions List' className={styles.imagemPromo}/>
               <h4>Tenis Corrida Tommy</h4>
               <p>Tenis Corrida com 10% de desconto</p>
               <h3>R$ 20,00</h3>
               <input type="button" value={'carrinho'} className={styles.btnAddC}/>
           </div>    
        </div>


        <div className={styles.bottom}>
                    <p>Somos uma loja de sapatos visando o genero feminino.</p>
                    <p>@ Rua poti n°33 jardim tijuco - Taboao cep:09932-110 | cnpj:não disponivel</p>
                    <div className={styles.divRSocial}>
                      <Image src={Icon_instagram} alt='icone instagram' className={styles.imgIcom}/>
                       <a href='https://www.instagram.com/rarus_stylus/' className={styles.txt}>Instagram</a>
                    </div>
                      <div className={styles.divRSocial}>
                        <Image src={Icon_whatsapp} alt='icone whatsapp' className={styles.imgIcom}/>
                        <a href='https://www.instagram.com/rarus_stylus/' className={styles.txt}> +55 (11) 9866-31439</a>
                      </div>
                      <div className={styles.tableBandeiras} >
                          <p className={styles.txtBotom}>Aceitamos Esses tipos de bandeiras em sua compra</p>
                          <Image src={Visa_Icons} alt="icon visa" className={styles.icons}/>
                          <Image src={Elo_Icon} alt="icon elo" className={styles.icons}/>
                          <Image src={Master_Icon} alt=" Master Icon" className={styles.icons}/>
                          <Image src={Hyper_Icon} alt='Hyper Icon' className={styles.icons}/>
                          <Image src={Dinners_Icon} alt='Dinners Icons' className={styles.icons}/>
                          <Image src={boletos_Icon} alt='bolletos Icon' className={styles.icons}/>
                          <Image src={amex_Icon} alt='Amex Icon' className={styles.icons}/>
                         
           
                      </div>
                  </div>    
         
      </Box>
   </PageContainer>
  
         </>
    
 )
}
export default MostrarProduto;
MostrarProduto.getLayout = function getLayout(page:ReactElement){
   return<FullLayout>{page}</FullLayout>
}