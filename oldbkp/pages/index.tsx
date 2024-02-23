import type { FormEvent, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';
import { Grid, Box, Alert } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';
import styles from './App.module.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { api } from './service/apiClient';
import Icon_whatsapp from './imagems_ecomerceIcon/icone_whatsapp.svg'
import Icon_instagram from './imagems_ecomerceIcon/instagram.svg'


import Router from 'next/router';
// components

import FullLayout from '../src/layouts/full/FullLayout';

import Banner from './imagens/Banner_loja.png'
import Sapato from "./imagems_ecomerceIcon/imagem_sapato_edit_um.jpeg"
import { GetServerSideProps } from 'next';
import Visa_Icons from './imagems_ecomerceIcon/logo_visa.webp'
import Elo_Icon from './imagems_ecomerceIcon/logo_elo.webp'
import Master_Icon from './imagems_ecomerceIcon/logo_master.webp'
import Hyper_Icon from './imagems_ecomerceIcon/logo_hipercard.webp'
import Dinners_Icon from './imagems_ecomerceIcon/logo_diners.webp'
import boletos_Icon from './imagems_ecomerceIcon/logo_boleto.webp'
import amex_Icon from './imagems_ecomerceIcon/logo_amex.webp'
import Banner_1_promo from './imagens/promo_sap_tre.png'
import Banner_dois_promo from './imagens/banne_rosa.png'
import Banner_promotre from './imagens/banner_promo2.png'
import Banner_quint from './imagens/banner_quint.png'



type ProductProps = {
  
  Descricao:string;
  Id_Promocao:string;
  Imagem_Produto:string;
  Nome:string;
  Quantidade:string;
  Tamanho: string;
  Tipo:string;
  Valor_produto:string;
  
}
interface Promocaoprops{
  promotions:ProductProps[];
}
export default function Home({promotions}:Promocaoprops) {

    const [data,setData] = useState([])
    const [imagem_produto,setImagem_produto] = useState('');
    const [id_promocao,setId_Promocao] = useState('');
    const [nome,setNome] = useState('');
    const [descricao,setDescricao] = useState('');
    const [tipo,setTipo] = useState('');
    const [tamanho,setTamnho] = useState('');
    const [quantidade,setQuantidade] = useState('')
    const [valor_produto,setValor_Produto] = useState('');
    const [contador, setContador] = useState(0);
    
    const [datalist,setDataList] = useState(promotions || [])
    
      const carrinho = async(Id_Promocao:string,Imagem_Produto:string,Nome:string,Descricao:string,Quantidade:string,Tipo:string,Tamanho:string,Valor_produto:string)=>{ 
        var totalum = contador + 1;
        console.log(totalum)

        var quantidade = parseInt(Quantidade) 
        var valor_produto = parseFloat(Valor_produto)
        setContador(contador + 1)

        var total = valor_produto * quantidade

          const response = await api.post('/createcarrinho',{
            imagem_Produto:Imagem_Produto,
            nome:Nome,
            descricao:Descricao,
            quantidade:Quantidade,
            tipo:Tipo,
            tamanho:Tamanho,
            valor_produto:Valor_produto,
            total:total,
            produtoId:Id_Promocao
          })      
          console.log(response.data);
          Router.push('./PaginaProduto')
       }  
     
 

  return (
    <>
    <PageContainer title="Dashboard" description="this is Dashboard">
      
      <Box>
        <div className={styles.divHead}>
          <Image className={styles.banner}src={Banner} alt='banner frete gratis 1'/>
            <h1 className={styles.h1}>Promoções</h1>
            <div className={styles.catalogol1}>
              <Image src={Banner_1_promo}  className={styles.banner_dois}alt='banner frente dois'/>
              <Image src={Banner_dois_promo}  className={styles.banner_tres}alt='banner frente dois'/>
              <Image src={Banner_promotre} className={styles.banner_qua} alt='banner quatro'/>
              <Image src={Banner_quint}  className={styles.banner_quint}alt='banner frente dois'/>

              <div className={styles.barrapromo}>
                {datalist.map( item =>(
                        
                        <div className={styles.produto} onClick={() => carrinho(item.Id_Promocao,item.Imagem_Produto,item.Nome,item.Descricao,item.Quantidade,item.Tipo,item.Tamanho,item.Valor_produto)}>
                            <Image src={Sapato} alt='sapatos um' className={styles.imgproduto}/>
                            <p>{item.Nome}</p>
                            <label>{item.Descricao}</label>
                            <span><label>de R$:50,00</label><h4>por R$: {item.Valor_produto}</h4></span>  
                        </div>       
                ))}
              </div>
                <div className={styles.infoSite}>
                       <div className={styles.quemsomos}>
                           <h3>visão</h3>
                           <p>Esta loja tem como fundamento alcançar um número de clientes satisteitos com nossa prestação de serviço dês da parte de clicar em entrar até o fim do processo</p>
                       </div>
                       <div className={styles.quemsomos}>
                           <h3>Missão</h3>
                           <p>Nossa Missão é propor uma melhor experiencia ao nósso usuario dês do clique em entrar até o clique em sua entrega chegou</p>
                       </div>
                       <div className={styles.quemsomos}>
                           <h3>valores</h3>
                           <p>Nosso valor é  o usuario primeiro , tudo que nós fazemos dentro da plataforma é procurando melhorar nossos serviços para você usuario.</p>
                       </div>
                </div>

                <footer className={styles.bottom}>
                    <div className={styles.bottomInfo}>
                     <p>Somos uma loja de sapatos visando o genero feminino.</p>
                     <p>@ Rua poti n°33 jardim tijuco - Taboao cep:09932-110 | cnpj:não disponivel</p>
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
                        <div className={styles.divalinred}>
                        <div className={styles.divRSocial}>
                          <Image src={Icon_instagram} alt='icone instagram' className={styles.imgIcom}/>
                          <a href='https://www.instagram.com/rarus_stylus/' className={styles.txt}>Instagram</a>
                        </div>
                          <div className={styles.divRSocial}>
                            <Image src={Icon_whatsapp} alt='icone whatsapp' className={styles.imgIcomWhats}/>
                            <a href='https://www.instagram.com/rarus_stylus/' className={styles.txt}> +55 (11) 9866-31439</a>
                          </div>
                    </div>
               </footer>
        </div> 
       </div>
      </Box>

    </PageContainer>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};

export const getServerSideProps:GetServerSideProps = async (context) =>{

  const response = await api.get('/mostrarPromo')
  console.table(response.data)
  
  return{
     props:{
       promotions:response.data 
     }
  }
}
