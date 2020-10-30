//import { request, response } from 'express';
import {
  createAirPlaneResource,
  getAllAirplanes,
  getAirplaneById,
} from '../models/airplane.js';

export const ListAirplanes = async (request, response) => {
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

export const getResourceAirplaneById = async (request, response) => {
  const {
    params: { id },
  } = request;
  try {
    const airplane = await getAirplaneById(id);
    response.status(200).send({
      airplane,
    });
  } catch (error) {
    const { message } = error;
    response.status(500).send({
      message,
    });
  }
};


export const createAirPlane = async (request, response) => {
  const { body } = request;

  try {

    const newAirPlaneResource = await createAirPlaneResource(body);
    return response.status(201).send(newAirPlaneResource);
  } catch (error) {
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};