import { useEffect, useState } from 'react';
import { Row, Spinner, Alert } from 'react-bootstrap';
import PersonCard from './PersonCard';

// 2) Function component that fetches data with the native JS Fetch API
const PersonListFetch = () => {
    const [persons, setPersons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        fetch('https://randomuser.me/api/?results=10', { signal: controller.signal })
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setPersons(data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setLoading(false);
                }
            });

        // cancel the request if the component unmounts
        return () => controller.abort();
    }, []);

    if (loading) return <div className="text-center my-5"><Spinner animation="border" /></div>;
    if (error) return <Alert variant="danger">Error: {error}</Alert>;

    return (
        <Row>
            {persons.map(person => (
                <PersonCard key={person.login.uuid} person={person} />
            ))}
        </Row>
    );
};

export default PersonListFetch;
