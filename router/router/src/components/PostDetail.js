// PostDetail Component
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaNewspaper, FaArrowLeft, FaBookOpen } from 'react-icons/fa';

export function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('/posts.json')
            .then(response => response.json())
            .then(data => setPost(data.find(p => p.id === id)))
            .catch(error => console.error('Error loading post:', error));
    }, [id]);

    if (!post) {
        return <h2 className="text-center">Post not found</h2>;
    }

    return (
        <Card className="mx-auto mt-4 shadow-lg" style={{ width: '50%' }}>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Button variant="secondary" as={Link} to="/posts"><FaArrowLeft /> Back to Posts</Button>
            </Card.Body>
        </Card>
    );
}