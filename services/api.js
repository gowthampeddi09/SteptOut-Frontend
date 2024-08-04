import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const addTrain = (trainData) => api.post('/admin/addTrain', trainData);
export const getTrains = () => api.get('/trains');
export const bookSeats = (trainId, numSeats) => api.post('/users/bookSeats', { trainId, numSeats });
