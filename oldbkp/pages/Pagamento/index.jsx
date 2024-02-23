import React from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'




function Pagamento (){

  return(
    <>
        <div id="wallet_container">
         <Wallet initialization={{ preferenceId: '840635832-ea904ba4-bd08-4fda-904e-ba58867a241a' }} />
        </div>
       
    </>
  )
}
export default Pagamento();