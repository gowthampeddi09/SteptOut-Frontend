import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const AdminDashboard = () => {
  const [trainName, setTrainName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [seatCapacity, setSeatCapacity] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [arrivalTimeAtSource, setArrivalTimeAtSource] = useState('');
  const [arrivalTimeAtDestination, setArrivalTimeAtDestination] = useState('');

  const handleAddTrain = async () => {
    const trainData = {
      trainName,
      source,
      destination,
      seatCapacity,
      availableSeats,
      arrivalTimeAtSource,
      arrivalTimeAtDestination,
    };

    try {
      await axios.post('http://localhost:5000/api/admin/addTrain', trainData);
      alert('Train added successfully!');
    } catch (error) {
      console.error('Error adding train:', error);
      alert('Failed to add train');
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Add Train</h2>
      <input
        type="text"
        placeholder="Train Name"
        value={trainName}
        onChange={(e) => setTrainName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="number"
        placeholder="Seat Capacity"
        value={seatCapacity}
        onChange={(e) => setSeatCapacity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Available Seats"
        value={availableSeats}
        onChange={(e) => setAvailableSeats(e.target.value)}
      />
      <input
        type="time"
        placeholder="Arrival Time at Source"
        value={arrivalTimeAtSource}
        onChange={(e) => setArrivalTimeAtSource(e.target.value)}
      />
      <input
        type="time"
        placeholder="Arrival Time at Destination"
        value={arrivalTimeAtDestination}
        onChange={(e) => setArrivalTimeAtDestination(e.target.value)}
      />
      <button onClick={handleAddTrain}>Add Train</button>
    </div>
  );
};

export default AdminDashboard;
