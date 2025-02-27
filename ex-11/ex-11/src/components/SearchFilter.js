import React, { useState } from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";

// Danh sách sản phẩm có thêm ảnh minh họa
const products = [
  { id: 1, name: "Sách", color: "Xanh", year: 2023, image: "https://static.tramdoc.vn/image/img.news/0/0/0/8341.jpg?v=1&w=300&h=200&nocache=1" },
  { id: 2, name: "Bút", color: "Đỏ", year: 2022, image: "https://anlocviet.vn/upload/product/3-1178.jpg" },
  { id: 3, name: "Viết", color: "Đen", year: 2021, image: "https://anlocviet.vn/upload/product/3-1178.jpg" },
  { id: 4, name: "Vở", color: "Trắng", year: 2023, image: "https://product.hstatic.net/200000050856/product/vohh0515_d56b505262c94f92907fe9bb9b145ff1_1024x1024.png" },
  { id: 5, name: "Thước", color: "Vàng", year: 2020, image: "https://faber-castell.com.vn/cfind/thumbs/thumb/images/product/pl/700x700-pl/thumb_450_450_cover_contain_w700_h700_170640.jpg.png" },
];

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc sản phẩm dựa trên từ khóa tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center text-primary">🔎 Tìm kiếm sản phẩm</h3>
          <Form.Control
            type="text"
            placeholder="Nhập tên sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 shadow-sm"
          />
        </Col>
      </Row>

      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="shadow-lg border-0 rounded-lg">
                <Card.Img variant="top" src={product.image} alt={product.name} className="p-3 rounded" />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{product.name}</Card.Title>
                  <Card.Text>
                    <strong>Màu:</strong> {product.color} <br />
                    <strong>Năm sản xuất:</strong> {product.year}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-danger fw-bold">❌ Không tìm thấy sản phẩm nào!</p>
        )}
      </Row>
    </Container>
  );
}

export default SearchFilter;
