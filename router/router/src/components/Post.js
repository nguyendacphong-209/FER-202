// Post Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaNewspaper, FaArrowLeft, FaBookOpen } from 'react-icons/fa';

export function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts.json')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error loading posts:', error));
    }, []);

    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center post-container">
            {posts.map(post => (
                <Card key={post.id} className="shadow-lg" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content.substring(0, 50)}...</Card.Text>
                        <Button variant="primary" as={Link} to={`/post/${post.id}`}><FaBookOpen /> Read More</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
