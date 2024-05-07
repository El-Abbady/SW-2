import React from "react";
import seat2 from './home-assets/seat2.jpeg';
import bus2 from './home-assets/bus2.jpg';
import './Home.css' ;
import { Link } from "react-router-dom";
const  Home=() =>{
  return (
    <div className="home-container"> 
      <div className="image-container">
          <div className="intro">
            <h1>Welcome to Bus Booking</h1>

            <h4>Travel with confidence and luxury</h4>
          </div>
        </div>
        <div className="middle-image">
          <div>
          <img src={bus2} />
          <p>Modern and well maintained buses</p>

          </div>
          <div>
          <img src={seat2} />
            <p>Comfortable and spacious seats</p>
          </div>
          
        </div> 
        <div className="container">
        
            <div className='about text-center'>
                <h2 className="p-4">About Us</h2>
                <p>Bus Booking is a transport company based in Egypt that offer bus transport service to and from Egypt at very affodable cost.</p>
                  <p>Bus Booking allows you to check the available bus online without having to physically appear at the bus terminal hence saving you time and cost.</p><p> You can also book a seat online and check when the bus will be leaving. </p>
            </div>
        </div> 
        <div className="container">
        <h2 className='text-center bold'>Services</h2> <br/>
  <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Bus Booking</h4>
      </div>
      <div className="card-body">
        <ul className="list-unstyled mt-3 mb-4">
        <p>Check which bus is available, available seats, price per seat and book a seat online</p>
            <p>Our customers are our number one priolity.</p>
            
        </ul>
        <button type="button" className="bt btn-outline-dark service-btn">
            <Link to='/booking' className="p-3 text-white">reservation</Link>
        </button>

        {/* <a type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</a> */}
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Driver Registration</h4>
      </div>
      <div className="card-body">
        <ul className="list-unstyled mt-3 mb-4">
        <p>Are you a bus owner and you would like to get the value for your investment? </p>
            <p>Register your bus with us and relax, wait for the harvest.</p>
        </ul>
        <button type="button" className="bt btn-outline-dark service-btn">
            <Link to='/Feedback' className="p-3 text-white">Feedback</Link>
        </button>
      </div>
    </div>f
  </div>
  </div>
    </div>
  );
}

export default Home;