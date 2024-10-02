// src/components/FoodDisplay/FoodDisplay.jsx

import  { useContext } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ catagory }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list && food_list.length > 0 ? (
                    food_list.map((food, index) => (
                        (catagory === "All" || catagory === food.category) && (
                            <FoodItem 
                                key={index}
                                id={food._id}
                                name={food.name}
                                image={food.image}
                                description={food.description}
                                price={food.price}
                            />
                        )
                    ))
                ) : (
                    <p>No food items available.</p>
                )}
            </div>
        </div>
    );
};

export default FoodDisplay;
