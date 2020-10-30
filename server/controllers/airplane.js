//import { request, response } from 'express';
import { request, response } from 'express';
import {
  getAllAirplanes,
  getAirplaneById,
  putAirplaneById,
  postAirplane,
  updateAirplane,

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

export const putResourceAriplaneById = async (request, response) => {
  const {
    params: { id },
  } = request;
  try {
    const airplane = await putAirplaneById(id);
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

export const postResourceAirplane = async (request, response) => {
  const { body } = request;
  try {
    const newAirplane = await postAirplane(body);
    return response.status(201).send({
      newAirplane,
    });
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};

export const updateResourceAirplane = async (request, response) => {
  const { id, ...data } = request;
  try {
    const updateAirplane = await updateAirplane(id, ...data);
    return response.status(200).send({
      updateAirplane,
    });
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};
