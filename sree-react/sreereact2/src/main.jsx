import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import'./Qrcode.css'
import { Cart } from './formsamples/Cart'
// import{Sree} from'./formsamples/Sree.jsx'
// import{States2} from'./formsamples/States2.jsx'
import {AdviceApp} from './formsamples/AdviceApp.jsx'


// import { UserCard } from './UserCard.jsx'
// import {Qrcode} from './Qrcode.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* it is for practice */}
    {/* <App /> */}
    {/* it is project 1 */}

    {/* <UserCard /> */}

    {/* it is project 2 */}
    {/* <Qrcode/> */}
    {/* <Cart/> */}
    {/* <States2/> */}


    <AdviceApp/>


   

   {/* <Sree/> */}


  </StrictMode>,
)
