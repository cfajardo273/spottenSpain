import { useEffect, useState } from 'react';
import { getAllAirplanes } from '../../lib/fetch-airplanes.js';

const AirplaneList = () => {
  const [aiplanes, setAirplanes] = useState([]);

  const fetchAirplanes = async () => {
    const airplanesData = await getAllAirplanes();
    setAirplanes(airplanesData);
  };

  useEffect(() => {
    fetchAirplanes();
  }, []);

  return (
    <main className="airplane">
      <nav>
        <ul>
          <li>
            <a href="../airlines">Lista de compañias aéreas</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
      <h2>Lista de aviones</h2>
      <ul>
        {aiplanes.map((airplane) => {
          return <li key={airplane._id}>{airplane.airplane}</li>;
        })}
      </ul>
    </main>
  );
};

export default AirplaneList;
