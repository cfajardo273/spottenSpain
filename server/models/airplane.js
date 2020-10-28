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

export default Airplane;
