import express from 'express';
import { createAirLine, ListAllAirlines } from '../controllers/airline.js';

const airlineRouter = express.Router();

airlineRouter.get('/airline', ListAllAirlines);
airlineRouter.post('/airline', createAirLine);

export default airlineRouter;
