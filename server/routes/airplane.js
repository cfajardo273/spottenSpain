import express from 'express';
import {
  createAirPlane,
  ListAirplanes,
  getResourceAirplaneById,
} from '../controllers/airplane.js';

const airplaneRouter = express.Router();

airplaneRouter.get('/airplane', ListAirplanes);
airplaneRouter.get('/airplane/:id', getResourceAirplaneById);
airplaneRouter.post('/airplane', createAirPlane);

export default airplaneRouter;
