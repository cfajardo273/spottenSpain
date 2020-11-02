import {
  getAllAirlines,
  getAirlineById,
  putAirlineById,
  postAirline,
  deleteAirlineResource,
} from '../models/airline.js';

export const ListAllAirlines = async (request, response) => {
  try {
    const airlines = await getAllAirlines();
    return response.status(200).send(airlines);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};

export const getResourceAirlineById = async (request, response) => {
  const {
    params: { id },
  } = request;
  try {
    const airline = await getAirlineById(id);
    response.status(200).send(airline);
  } catch (error) {
    const { message } = error;
    response.status(500).send({
      message,
    });
  }
};

export const putResourceAirlineById = async (request, response) => {
  const {
    params: { id },
    body,
  } = request;
  try {
    const airline = await putAirlineById(id, body);
    response.status(200).send(airline);
  } catch (error) {
    const { message } = error;
    response.status(500).send({
      message,
    });
  }
};

export const postResourceAirline = async (request, response) => {
  const { body } = request;
  try {
    const newAirline = await postAirline(body);
    return response.status(201).send(newAirline);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};

export const deleteResourceAirline = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
  } = request;

  try {
    // Called a function that is declared in the resource model
    const deleteMessage = await deleteAirlineResource(id);
    return response.status(200).send({
      message: deleteMessage,
    });
  } catch (error) {
    // if resource is not found send error message
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
