import express from 'express';
<<<<<<< HEAD
import { createAirLine, ListAllAirlines } from '../controllers/airline.js';
=======
import {
  ListAllAirlines,
  getResourceAirlineById,
  putResourceAirlineById,
  postResourceAirline,
  deleteResourceAirline,
} from '../controllers/airline.js';
>>>>>>> 6f31178c7e62778e97c51881ba28c85c6bcb54e2

const airlineRouter = express.Router();

airlineRouter.get('/airline', ListAllAirlines);
<<<<<<< HEAD
airlineRouter.post('/airline', createAirLine);
=======
airlineRouter.get('/airline/:id', getResourceAirlineById);
airlineRouter.put('/airline/:id', putResourceAirlineById);
airlineRouter.post('/airline', postResourceAirline);
airlineRouter.delete('/airline/:id', deleteResourceAirline);
>>>>>>> 6f31178c7e62778e97c51881ba28c85c6bcb54e2

export default airlineRouter;
