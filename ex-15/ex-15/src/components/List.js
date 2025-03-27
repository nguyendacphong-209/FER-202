import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, InputGroup, Card } from "react-bootstrap";
import { FaSearch, FaEdit, FaTrash, FaCheck, FaPlusCircle } from "react-icons/fa";
import "../App.css";


function listReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.item] };
        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter((item) => item.id !== action.id) };
        case "EDIT_ITEM":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.id ? { ...item, name: action.newName } : item
                ),
            };
        default:
            return state;
    }
}

const initialState = { items: [] };

function ItemList() {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [newItemName, setNewItemName] = useState("");
    const [filterText, setFilterText] = useState("");
    const [editingItemId, setEditingItemId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleAddItem = () => {
        if (newItemName.trim() !== "") {
            dispatch({ type: "ADD_ITEM", item: { id: Date.now(), name: newItemName } });
            setNewItemName("");
        }
    };

    const handleRemoveItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", id });
    };

    const handleStartEdit = (id, name) => {
        setEditingItemId(id);
        setEditText(name);
    };

    const handleSaveEdit = (id) => {
        dispatch({ type: "EDIT_ITEM", id, newName: editText });
        setEditingItemId(null);
    };

    const filteredItems = state.items.filter((item) =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg p-4 item-card">
                        <Card.Title className="text-center mb-4">📌 Item Manager</Card.Title>
                        <Form>
                            <Form.Group controlId="formItem">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="text"
                                        value={newItemName}
                                        onChange={(e) => setNewItemName(e.target.value)}
                                        placeholder="Enter item name..."
                                    />
                                    <Button variant="primary" onClick={handleAddItem}>
                                        <FaPlusCircle /> Add Item
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            {/* Input tìm kiếm */}
                            <Form.Group>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>
                                        <FaSearch />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search item..."
                                        value={filterText}
                                        onChange={(e) => setFilterText(e.target.value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form>

                        {/* Danh sách Item */}
                        <h3 className="mt-4 text-center">📋 Item List:</h3>
                        {filteredItems.length === 0 ? (
                            <p className="text-center text-muted mt-2">No items found!</p>
                        ) : (
                            <div className="item-grid">
                                {filteredItems.map((item) => (
                                    <Card key={item.id} className="item-card">
                                        {editingItemId === item.id ? (
                                            <InputGroup>
                                                <Form.Control
                                                    type="text"
                                                    value={editText}
                                                    onChange={(e) => setEditText(e.target.value)}
                                                />
                                                <Button variant="success" onClick={() => handleSaveEdit(item.id)}>
                                                    <FaCheck />
                                                </Button>
                                            </InputGroup>
                                        ) : (
                                            <>
                                                <p className="item-name">{item.name}</p>
                                                <div className="item-buttons">
                                                    <Button
                                                        variant="warning"
                                                        size="sm"
                                                        onClick={() => handleStartEdit(item.id, item.name)}
                                                    >
                                                        <FaEdit />
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        size="sm"
                                                        onClick={() => handleRemoveItem(item.id)}
                                                    >
                                                        <FaTrash />
                                                    </Button>
                                                </div>
                                            </>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemList;
