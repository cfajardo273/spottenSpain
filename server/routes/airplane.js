import express from 'express';
import {
  ListAirplanes,
  getResourceAirplaneById,
} from '../controllers/airplane.js';

const airplaneRouter = express.Router();

airplaneRouter.get('/airplane', ListAirplanes);
airplaneRouter.get('/airplane/:id', getResourceAirplaneById);

export default airplaneRouter;
