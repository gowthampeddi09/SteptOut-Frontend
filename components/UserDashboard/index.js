import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const UserDashboard = () => {
  const [trains, setTrains] = useState([]);
  const [selectedTrainId, setSelectedTrainId] = useState('');
  const [numSeats, setNumSeats] = useState('');

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trains');
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  const handleBookSeats = async (trainId) => {
    try {
      await axios.post(`http://localhost:5000/api/users/bookSeats`, {
        trainId,
        numSeats,
      });
      alert('Seats booked successfully!');
    } catch (error) {
      console.error('Error booking seats:', error);
      alert('Failed to book seats');
    }
  };

  return (
    <div className="user-dashboard">
      <h2>Available Trains</h2>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Available Seats</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.id}>
              <td>{train.train_name}</td>
              <td>{train.source}</td>
              <td>{train.destination}</td>
              <td>{train.available_seats}</td>
              <td>
                <input
                  type="number"
                  placeholder="Seats to book"
                  value={numSeats}
                  onChange={(e) => setNumSeats(e.target.value)}
                />
                <button onClick={() => handleBookSeats(train.id)}>
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
