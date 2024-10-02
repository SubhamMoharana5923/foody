import React, { useContext } from 'react'

import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'

const Placeorder = () => {
  const {gettotalcartamount}=useContext(StoreContext)
  return (
   <form action="" className="placeorder">
    <div className="placeorder-left">
      <p className='tittle'>
Delihvery Information
      </p>
      <div className="multi-fields">
          <input type="text"  placeholder='first name'/>
          <input type="text" placeholder='last name' />
      </div>
        <input type="email" placeholder='email Address' />
        <input type="text" name="" id="" placeholder='street' />
        <div className="multi-fields">
          <input type="text"  placeholder='city'/>
          <input type="text" placeholder='state' />
      </div>
      <div className="multi-fields">
          <input type="text"  placeholder='zipcode'/>
          <input type="text" placeholder='country' />
      </div>
      <input type="text" placeholder='phone' />
    </div>
    <div className="place-order-right">
    <div className="cart-total">
          <h2></h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{gettotalcartamount()===0?"0":"2"}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{gettotalcartamount()===0?"0":gettotalcartamount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed To payment
          </button>
        </div>
    </div>
   </form>
  )
}

export default Placeorder
