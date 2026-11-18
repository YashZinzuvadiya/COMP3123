import React, { Component } from 'react';
import axios from 'axios';
import { Row, Spinner, Alert } from 'react-bootstrap';
import PersonCard from './PersonCard';

// 1) Class component that fetches data with Axios (lab reference code)
export default class PersonList extends Component {
    //Define state default values
    state = {
        persons: [],
        loading: true,
        error: null
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons, loading: false });
            })
            .catch(error => {
                this.setState({ error: error.message, loading: false });
            })
    }

    render() {
        const { persons, loading, error } = this.state;

        if (loading) return <div className="text-center my-5"><Spinner animation="border" /></div>;
        if (error) return <Alert variant="danger">Error: {error}</Alert>;

        return (
            <Row>
                {persons.map(person => (
                    <PersonCard key={person.login.uuid} person={person} />
                ))}
            </Row>
        );
    }
}
