import express from 'express';
import { ListAllAirlines } from '../controllers/airline.js';

const airlineRouter = express.Router();

airlineRouter.get('/airline', ListAllAirlines);

export default airlineRouter;
