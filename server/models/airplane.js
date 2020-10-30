import mongoose from 'mongoose';

const airplaneSchema = new mongoose.Schema(
  {
    id: Number,
    id_airplane: Number,
    airplane: String,
  },
  {
    timestamps: true,
  },
);

const Airplane = mongoose.model('Airplane', airplaneSchema);

export const getAllAirplanes = async () => {
  try {
    return await Airplane.find();
  } catch (error) {
    throw error;
  }
};

export const getAirplaneById = async (id) => {
  try {
    return await Airplane.findById(id);
  } catch (error) {
    throw error;
  }
};

export const putAirplaneById = async (id) => {
  try {
    return await Airplane.findById(id);
  } catch (error) {
    throw error;
  }
};

export const postAirplane = async (data) => {
  try {
    return await Airplane.create({ ...data });
  } catch (error) {
    throw error;
  }
};

export default Airplane;
