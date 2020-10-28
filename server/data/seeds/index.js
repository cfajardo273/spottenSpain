import Airplane from '../../models/airplane.js';
import Airline from '../../models/airline.js';
import { promises as fs } from 'fs';
import path from 'path';
import parse from 'csv-parse/lib/sync.js';

const airplanePath = path.resolve('./data/seeds/airplanes.csv');
const airlinePath = path.resolve('./data/seeds/airlines.csv');

console.log({ airplanePath });

const getCsv = async (pathname) => {
  const csvContents = await fs.readFile(pathname, { encoding: 'utf-8' });
  return csvContents;
};

const start = async () => {
  const airplaneCsv = await getCsv(airplanePath);

  const records = parse(airplaneCsv, {
    columns: true,
    skip_empty_lines: true,
  });

  console.log({ records });
};

start();
