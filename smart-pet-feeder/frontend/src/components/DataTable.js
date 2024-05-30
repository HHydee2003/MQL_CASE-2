// src/components/DataTable.js
import React from 'react';
import { Table } from 'react-bootstrap';
import { parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

const DataTable = ({ feedEvents }) => {
  const timeZone = 'Asia/Manila'; // Philippine Standard Time

  const formatTimestamp = (timestamp) => {
    const date = parseISO(timestamp);
    return formatInTimeZone(date, timeZone, 'yyyy-MM-dd HH:mm:ss');
  };

  return (
    <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Distance (cm)</th>
            <th>Duration (ms)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {feedEvents.map((event, index) => (
            <tr key={index}>
              <td>{formatTimestamp(event.timestamp)}</td>
              <td>{event.distance}</td>
              <td>{event.duration}</td>
              <td>{event.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
