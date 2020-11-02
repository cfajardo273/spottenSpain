import express from 'express';
import {
  ListAllAirlines,
  getResourceAirlineById,
  putResourceAirlineById,
  postResourceAirline,
  deleteResourceAirline,
} from '../controllers/airline.js';

const airlineRouter = express.Router();

airlineRouter.get('/airline', ListAllAirlines);
airlineRouter.get('/airline/:id', getResourceAirlineById);
airlineRouter.put('/airline/:id', putResourceAirlineById);
airlineRouter.post('/airline', postResourceAirline);
airlineRouter.delete('/airline/:id', deleteResourceAirline);

export default airlineRouter;
