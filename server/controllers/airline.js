<<<<<<< HEAD
import { createAirLineResource, getAllAirlines } from '../models/airline.js';
=======
import {
  getAllAirlines,
  getAirlineById,
  putAirlineById,
  postAirline,
  deleteAirlineResource,
} from '../models/airline.js';
>>>>>>> 6f31178c7e62778e97c51881ba28c85c6bcb54e2

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

<<<<<<< HEAD

export const createAirLine = async (request, response) => {
  const { body } = request;

  try {

    const newAirLineResource = await createAirLineResource(body);
    return response.status(201).send(newAirLineResource);
  } catch (error) {
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
=======
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
>>>>>>> 6f31178c7e62778e97c51881ba28c85c6bcb54e2
    });
  }
};
