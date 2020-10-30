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

export const getAirlinById = async (id) => {
  try {
    return await Airline.findById(id);
  } catch (error) {
    throw error;
  }
};

export const putAirlineById = async (id) => {
  try {
    return await Airline.findById(id);
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

  
export default Airline;
