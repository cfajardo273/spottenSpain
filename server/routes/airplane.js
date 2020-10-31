import express from 'express';
import {
  ListAirplanes,
  getResourceAirplaneById,
  updateResourceAirplane,
  postResourceAirplane,
  deleteResourceAirplane,
} from '../controllers/airplane.js';

const airplaneRouter = express.Router();

airplaneRouter.get('/airplane', ListAirplanes);
airplaneRouter.get('/airplane/:id', getResourceAirplaneById);
airplaneRouter.put('/airplane/:id', updateResourceAirplane);
airplaneRouter.post('/airplane', postResourceAirplane);
airplaneRouter.delete('/airplane/:id', deleteResourceAirplane);

export default airplaneRouter;
