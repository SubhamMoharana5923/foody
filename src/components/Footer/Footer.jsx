import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione amet sed nesciunt tempora numquam dolorem sapiente necessitatibus possimus reiciendis, hic aliquid fugit dolorum quidem a ab doloremque mollitia? Repudiandae?</p>
        <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />

        </div>
        </div>
        <div className="footer-content-center">
            <h2> Company</h2>
            <ul>
                <li>Home</li>
                <li>AboutUS</li>
                <li>Delivery</li>
                <li>Privacy-policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
            <li>
                7008206714
            </li>
            <li>Subhh@592gmail.com</li>
            </ul>
        </div>
     
        
    </div>
    <hr />
        <p className="footer-copy-right">
              Copyright @ALL the Reserved
        </p>
    </div>
  )
}

export default Footer
