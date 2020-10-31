import { useEffect, useState } from 'react';
import { getAllAirlines } from '../../lib/fetch-airlines.js';

const ListAirlines = () => {
  const [airlines, setAirlines] = useState([]);

  const fetchAirplanes = async () => {
    const airplanesData = await getAllAirlines();
    setAirlines(airplanesData);
  };

  useEffect(() => {
    fetchAirplanes();
  }, []);

  return (
    <main>
      <h2>Lista de Lineas areas</h2>
      <ul>
        {airlines.map((airline) => {
          return <li key={airline._id}>{airline.airline_name}</li>;
        })}
      </ul>
    </main>
  );
};

export default ListAirlines;
