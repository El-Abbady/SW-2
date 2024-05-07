import React, { useState } from "react";
import { Link } from "react-router-dom";
const Feedback = () => {
    return (
        <form className="hero">
        <h2>Booking Information</h2>
        <div className="inputs">
            <label>feedBackId</label>
            <input
                type="text"
                className="form-control"
                placeholder="eg.3"
                // value={localStorage.getItem('feedBackId')}
                name="feedBackId" />
        </div>
        <div className="inputs">
            <label>driverRating</label>
            <input
                type="text"
                className="form-control"
                placeholder="eg.01221190822"
                name="driverRating" />
        </div>
        <div className="inputs">
            <label>serviceRating</label>
            <input
                type="text"
                className="form-control"
                placeholder="eg.Cairo"
                name="1-5" />
        </div>
        <div className="inputs">
            <label>overallRating</label>
            <input
                type="text"
                className="form-control"
                placeholder="eg.Cairo"
                name="1-5" />
        </div>
        <div className="inputs">
            <label>comments</label>
            <input
                type="text"
                className="form-control"
                placeholder="eg.22-3-2000"
                name="date" />
        </div>
        <div className="inputs">
            <label>feedbackDateTime</label>
            <input
                type="number"
                className="form-control"
                placeholder="00:00:00:00pm"
                name="time" />
        </div>

        

        <div className="btn">
            <a href="/Home" type="submit">add</a>
        </div>

    </form>
    )
}
export default Feedback;