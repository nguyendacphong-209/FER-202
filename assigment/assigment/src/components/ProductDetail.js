import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5001/products";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [editing, setEditing] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState({});

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                const foundProduct = response.data.products.find((p) => p.id === id);
                setProduct(foundProduct);
                setUpdatedProduct(foundProduct);
            })
            .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
    }, [id]);

    const handleSave = () => {
        axios.put(`${API_URL}/${id}`, updatedProduct)
            .then(() => {
                setProduct(updatedProduct);
                setEditing(false);
            })
            .catch(error => console.error("Lỗi khi cập nhật:", error));
    };

    return product ? (
        <div>
            <h2>Chi tiết sản phẩm</h2>
            {editing ? (
                <div>
                    <input type="text" value={updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} />
                    <button onClick={handleSave}>Lưu</button>
                </div>
            ) : (
                <div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <button onClick={() => setEditing(true)}>Chỉnh sửa</button>
                </div>
            )}
            <button onClick={() => navigate("/")}>Quay lại</button>
        </div>
    ) : <p>Không tìm thấy sản phẩm</p>;
};

export default ProductDetail;
