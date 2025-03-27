import React, { useState } from "react";
import { Dropdown, DropdownButton, Container, Card } from "react-bootstrap";

function MyDropdown() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (eventKey, event) => {
        // Correct order: eventKey, event
        setSelectedItem(event.target.innerText); // Get text from event.target
    };

    return (
        <Container>
            <Card className="mt-3">
                <Card.Body>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={selectedItem || "Select an item"}
                        onSelect={handleSelect} // No change here
                    >
                        <Dropdown.Item eventKey="1">Item 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Item 2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Item 3</Dropdown.Item>
                    </DropdownButton>

                    {selectedItem && (
                        <div className="mt-2">
                            <p>You selected: {selectedItem}</p>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default MyDropdown;
