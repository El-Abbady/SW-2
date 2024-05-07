import React from "react";
import portsaid from '../components/Destinations-assets/portsaid.jpg';
import hurghada from '../components/Destinations-assets/hurghada.jpg';
import nourthcost from '../components/Destinations-assets/nourthcost.jpg';
import alex from '../components/Destinations-assets/alex.jpg';
import sharm from '../components/Destinations-assets/sharm.jpg';
import ainelsokhna from '../components/Destinations-assets/ainelsokhna.jpg';
import '../css/Destination.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const user_destination = () => {
  return (
    <><br></br><div className="image-card">
      <div className="d-flex justify-content-around">
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={portsaid} />
          <Card.Body>
            <Card.Title>portsaid</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{margin:'1rem'}}>book</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={hurghada} />
          <Card.Body>
            <Card.Title>Hurghada</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{margin:'1rem'}}>book</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={nourthcost} />
          <Card.Body>
            <Card.Title>Nourth Coast</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{margin:'1rem'}}>book</Button>
          </Card.Body>
        </Card>

      </div>
      <br></br>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={alex} />
          <Card.Body>
            <Card.Title>Alexandria</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{margin:'1rem'}}>book</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={sharm} />
          <Card.Body>
            <Card.Title>Sharm Elshekh</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{margin:'1rem'}}>book</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={ainelsokhna} />
          <Card.Body>
            <Card.Title>El Ain El sokhna</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{margin:'1rem'}}>book</Button>
          </Card.Body>
        </Card>
      </div>
    </div></>
  )
}

export default user_destination;