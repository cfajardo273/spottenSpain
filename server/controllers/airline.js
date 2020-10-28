import { getAllAirlines } from '../models/airline.js';

export const ListAllAirlines = async (request, response) => {
  try {
    const airlines = await getAllAirlines();
    return response.status(200).send({
      airlines,
    });
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};
