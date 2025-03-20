import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Homes } from "./Pages/Homes"
import { User } from "./Pages/User"
import { Contact } from "./Pages/Contact"
import { Aboutss } from "./Pages/Aboutss"
// import { Dynamicrout } from "./Pages/Dynamicrout"
import { Navbar } from "./assets/component/Navbar"
import { Dynamicrout } from "./Pages/Dynamicrout"
import { Error } from "./Pages/Error"

function App() {


  return (
   < BrowserRouter>
   {/* the navbar also used here comon for all   instead of all all we con use heere */}
      < Navbar/>
      <Routes>
        <Route path="/Homes" element={<Homes/>}/>
        <Route path="/user" element={<User/>}/>
         <Route path="/contact" element={<Contact/>}/>
        <Route path="/Aboutss" element={<Aboutss/>}/> 
        <Route path="/dyn/:uname" element={<Dynamicrout/>}/>
        <Route path="*"element={<Error/>}/>
     </Routes>
    </BrowserRouter>

   
  )
}

export default App
