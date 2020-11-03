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
    <main className="airline">
      <nav>
        <ul>
          <li>
            <a href="../airplanes">Lista de aviones</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
      <h2>Lista de Líneas Aéreas</h2>
      <ul>
        {airlines.map((airline) => {
          return <li key={airline._id}>{airline.airline_name}</li>;
        })}
      </ul>
    </main>
  );
};

export default ListAirlines;
