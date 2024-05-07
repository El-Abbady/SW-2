import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const Header = () => {
  const handleLogout = () => {
    const aid = localStorage.getItem('aid');
    console.log(aid);

    fetch(`http://localhost:8080/swvl/admin/logout?key=${aid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.ok) {
        // Remove UUID from local storage
        localStorage.removeItem('aid');
        // Redirect to login page
        window.location.href = '/login';
      } else {
        // Handle error response
        console.error('Logout request failed:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error during logout:', error);
    });
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Bus Booking</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/desinations">Travel Destination</Link>
          <Link className="nav-link" to="/addbus">Add Bus</Link>
          <Link className="nav-link" to="/feedback">Feedback</Link>
          <Link className="nav-link" to="/allbuses">Buses</Link>

          {/* <Link className="nav-link" to="/user_destination">User Destination</Link> */}
          <NavDropdown title="Login" id="navbarScrollingDropdown">
            <Link className="dropdown-item" to="/login">Login as admin</Link>
            <Link className="dropdown-item" to="/login">Login as guest</Link>
            <NavDropdown.Divider />
            <Link className="dropdown-item" to="/register">Register</Link>
          </NavDropdown>
        </Nav>
          <Nav>
            <a href="/Login" className="nav-link" onClick={handleLogout}>Logout</a>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
