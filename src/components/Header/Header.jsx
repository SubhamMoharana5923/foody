import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>The key to a good food website— whether it’s a recipe blog, a restaurant website or selling a product— is photography. When you browse the designs below, notice how all the best designs have excellent photography. </p>

        <button className='button-header' >ViewMenu</button>
      </div>
    </div>
  )
}

export default Header
