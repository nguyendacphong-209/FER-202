import React from "react";
import { Form } from "react-bootstrap";

const Header = () => {
    return (
        <header className="bg-warning p-3 d-flex justify-content-between align-items-center">
            <h4>FPT UNIVERSITY</h4>
            <Form.Control type="text" placeholder="Search..." style={{ width: "200px" }} />
        </header>
    );
};

export default Header;
