import express from 'express';
import { ListAirplanes } from '../controllers/airplane.js';

const airplaneRouter = express.Router();

airplaneRouter.get('/airplane', ListAirplanes);

export default airplaneRouter;
