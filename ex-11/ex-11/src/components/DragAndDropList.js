import React, { useState } from "react";

const DragAndDropList = () => {
    const [items, setItems] = useState([
        "📘 Item 1",
        "📗 Item 2",
        "📕 Item 3",
        "📙 Item 4",
        "📓 Item 5",
    ]);
    const [draggingIndex, setDraggingIndex] = useState(null);

    const handleDragStart = (index) => {
        setDraggingIndex(index);
    };

    const handleDragOver = (index) => {
        if (draggingIndex === null || draggingIndex === index) return;

        const updatedItems = [...items];
        const draggedItem = updatedItems.splice(draggingIndex, 1)[0];
        updatedItems.splice(index, 0, draggedItem);

        setDraggingIndex(index);
        setItems(updatedItems);
    };

    const handleDragEnd = () => {
        setDraggingIndex(null);
    };

    return (
        <div className="drag-container">
            <h3>📌 Drag and Drop List</h3>
            <ul className="drag-list">
                {items.map((item, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => {
                            e.preventDefault();
                            handleDragOver(index);
                        }}
                        onDragEnd={handleDragEnd}
                        className={`drag-item ${draggingIndex === index ? "dragging" : ""}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DragAndDropList;
