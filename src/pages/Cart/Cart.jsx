// src/components/Cart/Cart.jsx

import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, gettotalcartamount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    *
                  </p>
                </div>
                <hr />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="cart-bottom">
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
            Proceed To CheckOut
          </button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have Promo code Enter it Here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocde " />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
