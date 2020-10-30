import express from 'express';
import {
  ListAirplanes,
  getResourceAirplaneById,
  putResourceAriplaneById,
  postResourceAirplaneById,
} from '../controllers/airplane.js';

const airplaneRouter = express.Router();

airplaneRouter.get('/airplane', ListAirplanes);
airplaneRouter.get('/airplane/:id', getResourceAirplaneById);
airplaneRouter.put('/airplane/:id', putResourceAriplaneById);
airplaneRouter.post('/airplane/:id', postResourceAirplaneById);
export default airplaneRouter;