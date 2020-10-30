import express from 'express';
import {
  ListAirplanes,
  getResourceAirplaneById,
  putResourceAriplaneById,
  postResourceAirplane,
  updateResourceAirplane,
} from '../controllers/airplane.js';
import airlineRouter from './airline.js';

const airplaneRouter = express.Router();

airplaneRouter.get('/airplane', ListAirplanes);
airplaneRouter.get('/airplane/:id', getResourceAirplaneById);
airplaneRouter.put('/airplane/:id', putResourceAriplaneById);
airplaneRouter.post('/airplane', postResourceAirplane);

airlineRouter.update('/airplane', updateResourceAirplane);
export default airplaneRouter;
export default airplaneRouter;


