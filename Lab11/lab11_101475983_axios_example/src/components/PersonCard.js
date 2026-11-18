import { Card, Col, ListGroup, Badge } from 'react-bootstrap';

// Presentational card for a single person returned by randomuser.me
const PersonCard = ({ person }) => {
    const { name, picture, gender, email, phone, cell, login, location, dob, nat } = person;

    return (
        <Col xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                    <img
                        src={picture.large}
                        alt={`${name.first} ${name.last}`}
                        className="rounded-circle mb-3 border border-3 border-primary"
                        width="110"
                        height="110"
                    />
                    <Card.Title>
                        {name.title} {name.first} {name.last}
                    </Card.Title>
                    <Card.Subtitle className="text-muted mb-2">@{login.username}</Card.Subtitle>
                    <Badge bg={gender === 'male' ? 'info' : 'danger'} className="me-1 text-capitalize">
                        {gender}
                    </Badge>
                    <Badge bg="secondary">{nat}</Badge>
                </Card.Body>
                <ListGroup variant="flush" className="small">
                    <ListGroup.Item><strong>Email:</strong> {email}</ListGroup.Item>
                    <ListGroup.Item><strong>Phone:</strong> {phone}</ListGroup.Item>
                    <ListGroup.Item><strong>Cell:</strong> {cell}</ListGroup.Item>
                    <ListGroup.Item>
                        <strong>DOB:</strong> {new Date(dob.date).toLocaleDateString()} (Age {dob.age})
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Address:</strong> {location.street.number} {location.street.name},{' '}
                        {location.city}, {location.state}, {location.country} - {location.postcode}
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default PersonCard;
