import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5001/products";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setProducts(response.data.products))
            .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
    }, []);

    const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", currentPrice: "" });

    const handleAddProduct = () => {
        if (!newProduct.name || !newProduct.currentPrice) return;

        axios.post(API_URL, newProduct)
            .then(response => setProducts([...products, response.data]))
            .catch(error => console.error("Lỗi khi thêm sản phẩm:", error));

        setNewProduct({ name: "", description: "", price: "", currentPrice: "" });
    };
    const handleDeleteProduct = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(() => setProducts(products.filter(product => product.id !== id)))
            .catch(error => console.error("Lỗi khi xóa sản phẩm:", error));
    };

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={`http://localhost:5001${product.image}`} alt={product.name} width="100" onClick={() => { navigate(`/product/${product.id}`) }} />
                        <p>{product.name} - {product.currentPrice} VND</p>
                        <button onClick={() => handleDeleteProduct(product.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
            <h3>Thêm sản phẩm</h3>
            <input type="text" placeholder="Tên sản phẩm" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <input type="text" placeholder="Giá hiện tại" value={newProduct.currentPrice} onChange={(e) => setNewProduct({ ...newProduct, currentPrice: e.target.value })} />
            <button onClick={handleAddProduct}>Thêm</button>
        </div>
    );
};

export default ProductList;
