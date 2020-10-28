import Airplane from '../../models/airplane.js';
import Airline from '../../models/airline.js';
import { promises as fs } from 'fs';
import path from 'path';
import parse from 'csv-parse/lib/sync.js';
import { databaseURI } from '../../index.js';
import mongoose from 'mongoose';

const airplanePath = path.resolve('./data/seeds/airplanes.csv');
const airlinePath = path.resolve('./data/seeds/airlines.csv');

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getCsv = async (pathname) => {
  const csvContents = await fs.readFile(pathname, { encoding: 'utf-8' });
  return csvContents;
};

const start = async () => {
  // Airplane
  const airplaneCsv = await getCsv(airplanePath);

  const airplanesRawData = parse(airplaneCsv, {
    columns: true,
    skip_empty_lines: true,
  });

  const airplanesData = airplanesRawData.map((airplane) => {
    return {
      ...airplane,
      id: Number(airplane.id),
      id_airplane: Number(airplane.id_airplane),
    };
  });

  // Airline
  const airlineCsv = await getCsv(airlinePath);

  const airlineRawData = parse(airlineCsv, {
    columns: true,
    skip_empty_lines: true,
  });

  const airlineData = airlineRawData.map((airline) => {
    return { ...airline, id: Number(airline.id) };
  });

  Promise.all(
    airplanesData.map(async (airplane) => {
      const airplaneResource = await Airplane.create({ ...airplane });
      console.log(
        `The resource ${JSON.stringify(airplaneResource)} has been created`,
      );
    }),
  );

  Promise.all(
    airlineData.map(async (airline) => {
      const airlineResource = await Airline.create({ ...airline });
      console.log(
        `The resource ${JSON.stringify(airlineResource)} has been created`,
      );
    }),
  );
};

start();
