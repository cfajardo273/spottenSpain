import { getAllAirplanes } from '../models/airplane.js';

export const ListAirplanes = async (resquest, response) => {
  try {
    const airplanes = await getAllAirplanes();
    response.status(200).send({
      airplanes,
    });
  } catch (error) {
    const { message } = error;
    response.status(500).send({
      message,
    });
  }
};
