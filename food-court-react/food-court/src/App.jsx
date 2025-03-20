import { useState,useContext, createContext } from 'react';
import { Header } from './Components/Header';
import { BrowserRouter,Routes,Route} from 'react-router-dom';


import './App.css'
import { Home } from './Components/Home';
import { ViewCart } from './Components/ViewCart';



export const cartContext=createContext();

function App() {
  const [cart,setCart]=useState([]);

  

  return (

    // using use context

    <cartContext.Provider value={{cart,setCart}}>

   

    
   <BrowserRouter>
      <Header cart={cart}/>
    
    <div className="container">

      <Routes>
        {/* <Route path="/" element={<Home cart={cart} setCart={setCart} />}/> */}
        <Route path="/" element={<Home />}/>
        {/* <Route path="/Cart" element={<ViewCart cart={cart} setCart={setCart}/>}/> */}
        <Route path="/Cart" element={<ViewCart/>}/>

      </Routes>

      </div>
      </BrowserRouter>
    
    </cartContext.Provider>
  )
}


export default App



//  we can also use this by use Context(). we does not want to pass multiple parameters

// we can easily share the properties between the multiple files
