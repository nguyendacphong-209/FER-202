import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";


const Cart = () => {
    const { cartItems, removeFromCart, clearCart, totalValue } =
        useContext(CartContext);


    const [message, setMessage] = useState("");

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            setMessage("Giỏ hàng đang trống!");
            return;
        }

        setMessage("Thanh toán thành công! Cảm ơn bạn đã đặt hàng.");
        clearCart();
    };


    return (
        <div className="cart-container">
            <h2>Giỏ hàng</h2>
            {message && <div className="alert">{message}</div>}
            {cartItems.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-card">
                            <img src={item.image} alt={item.name} className="cart-image" />
                            <div className="cart-info">
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>Xóa</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cartItems.length > 0 && (
                <div className="cart-summary">
                    <p>{`Tổng số món: ${cartItems.length}`}</p>
                    <p>{`Tổng giá trị: $${totalValue}`}</p>
                    <button onClick={handleCheckout}>Xác nhận đơn hàng</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
