import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const EventHandlingDemo = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    const handleButtonClickDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <Card className="p-4 text-center shadow-lg rounded-lg w-96 mx-auto mt-5">
            <Card.Body>
                <Card.Title className="text-xl font-bold mb-4">Event Handling Demo</Card.Title>
                <Card.Text className="text-lg mb-2">Count: {count}</Card.Text>
                <Button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mr-2"
                    onClick={handleButtonClick}
                >
                    Increase Count
                </Button>
                <Button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                    onClick={handleButtonClickDecrease}
                >
                    Decrease Count
                </Button>
            </Card.Body>
        </Card>
    );
};

export default EventHandlingDemo;
