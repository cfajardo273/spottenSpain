import {

  getAllAirplanes,
  getAirplaneById,
  postAirplane,
  updateAirplane,
  deleteAirplane,
} from '../models/airplane.js';

export const ListAirplanes = async (request, response) => {
  try {
    const airplanes = await getAllAirplanes();
    response.status(200).send(airplanes);
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
    response.status(200).send(airplane);
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
    return response.status(201).send(newAirplane);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};

export const updateResourceAirplane = async (request, response) => {
  const {
    params: { id },
    body,
  } = request;
  try {
    const updatedAirplane = await updateAirplane(id, body);
    return response.status(200).send(updatedAirplane);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};

export const deleteResourceAirplane = async (request, response) => {
  const {
    params: { id },
  } = request;

  try {
    const deleteMessage = await deleteAirplane(id);
    return response.status(200).send({
      message: deleteMessage,
    });
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
