import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import axios from "axios";

function App() {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password, phone } = formData;
      const response = await axios.post('http://localhost:8080/swvl/admin/register', {
        name,
        email,
        password,
        mobile: phone
      });
      navigate('/Login')
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4' label=' Name' size='lg' name='name' type='text' value={formData.name} onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Email' size='lg' name='email' type='email' value={formData.email} onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' name='password' type='password' value={formData.password} onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Phone' size='lg' name='phone' type='text' value={formData.phone} onChange={handleChange} />
            <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          </form>
          <div className="text-center">
            <Link to="/Login">Already have an account? Login</Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
