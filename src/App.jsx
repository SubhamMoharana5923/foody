import {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home  from './pages/home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from  './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'


const App = () => {
  const [showlogin,setshowlogin] = useState(false);

  return(
    <>
    {showlogin?<Login setshowlogin={setshowlogin}/>:<></>}
       <div className='app'>
        <Navbar setshowlogin={setshowlogin}/>
        <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<Placeorder/>} />


        
        </Routes>

        </div>
        <Footer />
    </>
    
  )
}

export default App
