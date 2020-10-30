import { createAirLineResource, getAllAirlines } from '../models/airline.js';

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


export const createAirLine = async (request, response) => {
  const { body } = request;

  try {

    const newAirLineResource = await createAirLineResource(body);
    return response.status(201).send(newAirLineResource);
  } catch (error) {
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};
