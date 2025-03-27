import { useState } from "react";
import "../App.css";

const SnapshotDemo = () => {
    const [count, setCount] = useState(0);
    const [snapshot, setSnapshot] = useState(null);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    const handleButtonClickDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleSnapshot = () => {
        setSnapshot(count);
    };

    const handleRestore = () => {
        if (snapshot !== null) {
            setCount(snapshot);
        }
    };

    return (
        <div className="event-container">
            <h1 className="event-title">Event Handling Demo</h1>
            <p className="event-count">Count: {count}</p>
            <button className="event-button increase-button" onClick={handleButtonClick}>
                Increase Count
            </button>
            <button className="event-button decrease-button" onClick={handleButtonClickDecrease}>
                Decrease Count
            </button>
            <button className="event-button snapshot-button" onClick={handleSnapshot}>
                Take Snapshot
            </button>
            <button className="event-button restore-button" onClick={handleRestore}>
                Restore Snapshot
            </button>
        </div>
    );
};

export default SnapshotDemo;
