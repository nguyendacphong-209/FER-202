import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "../App.css";

const News = () => {
    const newsList = [
        { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: '/images/event-1.jpg', link: '#' },
        { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: '/images/event-2.jpg', link: '#' },
        { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: '/images/event-3.jpg', link: '#' },
        { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: '/images/event-4.jpg', link: '#' },
        { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: '/images/event-5.jpg', link: '#' },
        { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: '/images/event-6.jpg', link: '#' },
        { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: '/images/event-7.jpg', link: '#' },
        { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: '/images/event-8.jpg', link: '#' }
    ];

    return (
        <Container>
            <h2 className="mb-4 text-center">News Page</h2>
            <Row className="news-container">
                {newsList.map(news => (
                    <Col key={news.id} md={4} className="d-flex">
                        <Card className="news-card">
                            <Card.Img variant="top" src={news.images} alt={news.title} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text>{news.description}</Card.Text>
                                <Button variant="primary" href={news.link} target="_blank">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default News;
