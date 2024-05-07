import React, { useState } from "react";
import axios from "axios";
import '../../css/Booking.css';

const AddBus = () => {
    const [formData, setFormData] = useState({
        busName: '',
        driverName: '',
        busType: '',
        routeFrom: '',
        routeTo: '',
        busJourneyDate: '',
        arrivalTime: '',
        departureTime: '',
        seats: 0,
        availableSeats: 0,
        fare: 0,
        route: {
            routeFrom: '',
            routeTo: '',
            distance: 0
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData); // Check if form data is correct
        try {
            const aid = localStorage.getItem('aid');
            const response = await axios.post(`http://localhost:8080/swvl/admin/bus/add?key=${aid}`, formData);
            console.log('Response:', response); // Check the response from the server
            if (response.status === 200) {
                console.log('Bus added successfully');
                window.location.href = '/Home'; // Redirect to Home page
            } else {
                console.error('Failed to add bus');
            }
        } catch (error) {
            console.error('Error adding bus:', error);
        }
    };

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h2>Bus Information</h2>
                <div className="inputs">
                    <label>Bus Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="busName"
                        value={formData.busName}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Driver Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="driverName"
                        value={formData.driverName}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Bus Type</label>
                    <input
                        type="text"
                        className="form-control"
                        name="busType"
                        value={formData.busType}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Route From</label>
                    <input
                        type="text"
                        className="form-control"
                        name="routeFrom"
                        value={formData.routeFrom}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Route To</label>
                    <input
                        type="text"
                        className="form-control"
                        name="routeTo"
                        value={formData.routeTo}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Bus Journey Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="busJourneyDate"
                        value={formData.busJourneyDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Arrival Time</label>
                    <input
                        type="time"
                        className="form-control"
                        name="arrivalTime"
                        value={formData.arrivalTime}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Departure Time</label>
                    <input
                        type="time"
                        className="form-control"
                        name="departureTime"
                        value={formData.departureTime}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Total Seats</label>
                    <input
                        type="number"
                        className="form-control"
                        name="seats"
                        value={formData.seats}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Available Seats</label>
                    <input
                        type="number"
                        className="form-control"
                        name="availableSeats"
                        value={formData.availableSeats}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Fare</label>
                    <input
                        type="number"
                        className="form-control"
                        name="fare"
                        value={formData.fare}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Route ID</label>
                    <input
                        type="number"
                        className="form-control"
                        name="routeID"
                        value={formData.route.routeID}
                        onChange={(e) => {
                            setFormData(prevState => ({
                                ...prevState,
                                route: {
                                    ...prevState.route,
                                    routeID: e.target.value
                                }
                            }));
                        }}
                    />
                </div>
                <div className="inputs">
                    <label>Route From</label>
                    <input
                        type="text"
                        className="form-control"
                        name="routeFrom"
                        value={formData.route.routeFrom}
                        onChange={(e) => {
                            setFormData(prevState => ({
                                ...prevState,
                                route: {
                                    ...prevState.route,
                                    routeFrom: e.target.value
                                }
                            }));
                        }}
                    />
                </div>
                <div className="inputs">
                    <label>Route To</label>
                    <input
                        type="text"
                        className="form-control"
                        name="routeTo"
                        value={formData.route.routeTo}
                        onChange={(e) => {
                            setFormData(prevState => ({
                                ...prevState,
                                route: {
                                    ...prevState.route,
                                    routeTo: e.target.value
                                }
                            }));
                        }}
                    />
                </div>
                <div className="inputs">
                    <label>Route Distance</label>
                    <input
                        type="number"
                        className="form-control"
                        name="distance"
                        value={formData.route.distance}
                        onChange={(e) => {
                            setFormData(prevState => ({
                                ...prevState,
                                route: {
                                    ...prevState.route,
                                    distance: e.target.value
                                }
                            }));
                        }}
                    />
                </div>
                <div className="btn">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
    
};

export default AddBus;
