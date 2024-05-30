// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import DataTable from './components/DataTable';
import LineChart from './components/LineChart';

import './styles.css';

const App = () => {
  const [feedEvents, setFeedEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/data');
        const data = response.data.map(event => ({
          ...event,
          timestamp: event.timestamp // Ensure timestamp is a time string
        }));
        setFeedEvents(data);
      } catch (error) {
        console.error('Error fetching the feed data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Smart Pet Feeder Dashboard</Navbar.Brand>
      </Navbar>
      <Container fluid>
        
        <Row className="my-4">
          <Col>
            <h2>Feeding Events</h2>
            <DataTable feedEvents={feedEvents} />
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <h2>Distance Over Time</h2>
            <LineChart feedEvents={feedEvents} />
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default App;
