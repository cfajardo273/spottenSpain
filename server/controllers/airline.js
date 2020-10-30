//import { request, response } from 'express';
import { request, response } from 'express';
import {
  getAllAirlines,
  getAirlineById,
  putAirlineById,
  postAirline,
  updateAirline,

} from '../models/airline.js';

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

export const getResourceAirlineById = async (request, response) => {
  const {
    params: { id },
  } = request;
  try {
    const airline = await getAirlineById(id);
    response.status(200).send({
      airline,
    });
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
  } = request;
  try {
    const airline = await putAirlineById(id);
    response.status(200).send({
      airline,
    });
  } catch (error) {
    response.status(500).send({
      message,
    });
  }
};

export const postResourceAirline = async (request, response) => {
  const { body } = request;
  try {
    const newAirline = await postAirline(body);
    return response.status(201).send({
      newAirline,
    });
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};

export const updateResourceAirline = async (request, response) => {
  const { id, ...data } = request;
  try {
    const updateAirline = await updateAirline(id, ...data);
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