// src/components/FoodItem/FoodItem.jsx

import  { useContext } from 'react';
import PropTypes from 'prop-types';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, image, description, price }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const itemCount = cartItems[id] || 0;

    return (
        <div className='food-item'>
            <div className='food-item-image-container'>
                <img src={image} className="food-item-image" alt={`${name}`} />
                {itemCount === 0 ? (
                    <img
                        className="add"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt="Add"
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt="Remove"
                        />
                        <p>{itemCount}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt="Add"
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className='food-item-desc'>
                    {description}
                </p>
                <p className='food-item-price'>
                    ₹{price}
                </p>
            </div>
        </div>
    );
};

FoodItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default FoodItem;
