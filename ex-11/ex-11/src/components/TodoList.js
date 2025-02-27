import React, { useState } from "react";
import { Button, Form, ListGroup, Container, Row, Col } from "react-bootstrap";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Reset ô nhập
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center">Danh sách công việc</h3>
          <Form className="d-flex mb-3">
            <Form.Control
              type="text"
              placeholder="Nhập công việc..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button variant="primary" onClick={addTask} className="ms-2">
              Thêm
            </Button>
          </Form>
          <ListGroup>
            {tasks.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between">
                {item}
                <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>
                  Xóa
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
