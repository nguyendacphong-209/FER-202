import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import PropTypes from "prop-types";

// DishesList component renders the list of dishes and adds them to the cart
const DishesList = ({ dishes }) => {
    const { addToCart } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState("");
    // Lọc danh sách món ăn theo tên hoặc mô tả
    const filteredDishes = dishes.filter((dish) =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Danh sách món ăn</h2>

            {/* Ô nhập để tìm kiếm món ăn */}
            <input
                type="text"
                placeholder="Tìm kiếm món ăn..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            <div className="dishes">
                {filteredDishes.length > 0 ? (
                    filteredDishes.map((dish) => (
                        <div key={dish.id} className="dish-item">
                            <img src={dish.image} alt={dish.name} />
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                            <p>{`Price: $${parseFloat(dish.price).toFixed(2)}`}</p>
                            <button onClick={() => addToCart(dish)}>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p className="no-results">Không tìm thấy món ăn phù hợp.</p>
                )}
            </div>
        </div>
    );
};

// Prop validation to ensure proper data structure
DishesList.propTypes = {
    dishes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default DishesList;

