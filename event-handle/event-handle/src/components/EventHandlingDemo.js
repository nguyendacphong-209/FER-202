import { useState } from "react";

const EventHandlingDemo = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="p-4 text-center">
            <h1 className="text-xl font-bold mb-4">Event Handling Demo</h1>
            <p className="text-lg mb-2">Count: {count}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-700"
                onClick={handleButtonClick}
            >
                Click me
            </button>
        </div>
    );
};

export default EventHandlingDemo;
