import React from "react";
import '../../css/Form.css';
const BookingForm=()=>{
    return(
        
            <form className="hero">
                <h2>Booking Information</h2>
                <div className="inputs">
                    <label>User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg.3"
                        value={localStorage.getItem('userId')}
                        name="user_name" />
                </div>
                <div className="inputs">
                    <label>Your Phone No.</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg.01221190822"
                        name="phone_no" />
                </div>
                <div className="inputs">
                    <label>source</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg.Cairo"
                        name="source" />
                </div>
                <div className="inputs">
                    <label>Destination</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg.Cairo"
                        name="destination" />
                </div>
                <div className="inputs">
                    <label>Date</label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="eg.22-3-2000"
                        name="date" />
                </div>
                <div className="inputs">
                    <label>Time</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="00:00:00:00pm"
                        name="time" />
                </div>

                <div className="inputs">
                    <label>Number of Seats</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg.3"
                        name="no_of_seats" />
                </div>
                <div className="inputs">
                    <label>You Will Pay</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="cash"
                        readonly
                        name="price"
                         />
                </div>
                <div hidden className="inputs">
                    <label>bus id</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="eg.3"
                        value={localStorage.getItem('busId')}
                        hidden
                        name="bus_id" />
                </div>

                <div className="btn">
                    <a href="/Home" type="submit">reservation</a>
                </div>

            </form>
        
    );
}
export default BookingForm;