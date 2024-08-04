import { Link } from 'react-router-dom';
import './index.css';

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <h1 className="home-heading">Welcome to IRCTC</h1>
      <p className="home-description">
        Book your train tickets easily with IRCTC. Experience a seamless and user-friendly way to plan your train journeys.
      </p>
      <Link to="/trains">
        <button type="button" className="explore-trains-button">
          Explore Trains
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
