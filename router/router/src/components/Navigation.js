// Navigation Component
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaNewspaper, FaArrowLeft, FaBookOpen, FaUser } from 'react-icons/fa';

export function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">React Blog</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/"> <FaHome /> Home</Nav.Link>
                    <Nav.Link as={Link} to="/about"> <FaInfoCircle /> About</Nav.Link>
                    <Nav.Link as={Link} to="/posts"> <FaNewspaper /> Posts</Nav.Link>
                    <Nav.Link as={Link} to="/login"> <FaUser /> Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
