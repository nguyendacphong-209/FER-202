// Home Component
import { Button } from 'react-bootstrap';

export function Home() {
    return (
        <div className="text-center home-container">
            <h1>Welcome to Our Blog</h1>
            <p>Explore various posts and articles</p>
            <Button variant="primary" href="/posts">View Posts</Button>
        </div>
    );
}