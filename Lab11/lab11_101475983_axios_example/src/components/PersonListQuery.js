import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Row, Spinner, Alert, Button } from 'react-bootstrap';
import PersonCard from './PersonCard';

const fetchPersons = async () => {
    const res = await axios.get('https://randomuser.me/api/?results=10');
    return res.data.results;
};

// 3) Function component that uses TanStack Query (React Query) + Axios
const PersonListQuery = () => {
    const { data: persons, isPending, isError, error, refetch, isFetching } = useQuery({
        queryKey: ['persons'],
        queryFn: fetchPersons,
        staleTime: 60 * 1000 // cache results for 1 minute
    });

    if (isPending) return <div className="text-center my-5"><Spinner animation="border" /></div>;
    if (isError) return <Alert variant="danger">Error: {error.message}</Alert>;

    return (
        <>
            <div className="text-end mb-3">
                <Button variant="outline-primary" size="sm" onClick={() => refetch()} disabled={isFetching}>
                    {isFetching ? 'Refreshing...' : 'Load new users'}
                </Button>
            </div>
            <Row>
                {persons.map(person => (
                    <PersonCard key={person.login.uuid} person={person} />
                ))}
            </Row>
        </>
    );
};

export default PersonListQuery;
