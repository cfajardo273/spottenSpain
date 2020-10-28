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

export default Airline;
