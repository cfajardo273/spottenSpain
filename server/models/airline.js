import mongoose from 'mongoose';

const airlineSchema = new mongoose.Schema(
  {
    id: Number,
    airline_name: String,
  },
  {
    timestamps: true,
  },
);

const Airline = mongoose.model('Airline', airlineSchema);

export const getAllAirlines = async () => {
  try {
    return await Airline.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getAirlineById = async (id) => {
  try {
    return await Airline.findById(id);
  } catch (error) {
    throw error;
  }
};

export const putAirlineById = async (id, data) => {
  try {
    return await Airline.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw error;
  }
};

export const postAirline = async (data) => {
  try {
    return await Airline.create({ ...data });
  } catch (error) {
    throw error;
  }
};

export const deleteAirlineResource = async (id) => {
  try {
    return await Airline.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Airline;
