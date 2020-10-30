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
    <main>
      <h2>Lista de caviones</h2>
      <ul>
        {aiplanes.map((airplane) => {
          return <li key={airplane._id}>{airplane.airplane}</li>;
        })}
      </ul>
    </main>
  );
};

export default AirplaneList;
