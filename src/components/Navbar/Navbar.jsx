import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';


const Navbar =({setshowlogin})=> {
    const [menu,setmenu]=useState("Menu");
    const {gettotalcartamount}=useContext(StoreContext);
  return (
    <div className='navbar'>
           <Link to="/"><img src={assets.logo} alt=""/></Link> 
            <ul className='navbar-menu'>
            <Link to='/'onClick={()=>setmenu("home")}className={menu==='home'?'active':''}>Home</Link>
            <a href='#explore-menu' onClick={()=>setmenu("Menu")}className={menu==='Menu'?'active':''}>Menu</a>
            <a href='#appdownload' onClick={()=>setmenu("MobileApp")}className={menu==='MobileApp'?'active':''}>Mobile-App</a>
            <a  href='#footer'onClick={()=>setmenu("ContactUs")}className={menu==='ContactUs'?'active':''}>Contact Us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="" />
                    <div className='navbar-search-icon'>
                 <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>   
                    <div className={gettotalcartamount()===0?"":"dot"}>

                    </div>
                    </div>
                    <button className='navbar-button' onClick={()=>setshowlogin(true)}>sign in</button>

            </div>
    </div>
  )
}

export default Navbar
