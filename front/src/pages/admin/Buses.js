import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "react-bootstrap";
export const Buses = () => {
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBuses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/swvl/bus/all');
                setBuses(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchBuses();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleDelete = async (busId) => {
        try {
            const aid = localStorage.getItem('aid');
            const response = await axios.delete(`http://localhost:8080/swvl/admin/bus/delete/${busId}?key=${aid}`);
            if (response.status === 200) {
                // Filter out the deleted bus from the state
                setBuses(prevBuses => prevBuses.filter(bus => bus.busId !== busId));
            }
        } catch (error) {
            console.error('Error deleting bus:', error);
        }
    };
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>All Buses</h2>
            <Row>
                {buses.map(bus => (
                    <Col key={bus.busId} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{bus.busName}</Card.Title>
                                <Card.Text>
                                    Driver Name: {bus.driverName}<br />
                                    Bus Type: {bus.busType}<br />
                                    Route From: {bus.routeFrom}<br />
                                    Route To: {bus.routeTo}<br />
                                    Bus Journey Date: {bus.busJourneyDate}<br />
                                    Arrival Time: {bus.arrivalTime}<br />
                                    Departure Time: {bus.departureTime}<br />
                                    Total Seats: {bus.seats}<br />
                                    Available Seats: {bus.availableSeats}<br />
                                    Fare: {bus.fare}<br />
                                    Route ID: {bus.route.routeID}<br />
                                    Route From: {bus.route.routeFrom}<br />
                                    Route To: {bus.route.routeTo}<br />
                                    Route Distance: {bus.route.distance}<br />
                                </Card.Text>
                                <Button variant="danger" onClick={() => {handleDelete(bus.id)}}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
