import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  startsAt: {
    type: Date,
    required: true,
  },
  endsAt: {
    type: Date,
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  physiotherapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Physiotherapist",
  },
});

const ReservationModel = mongoose.model("Reservation", reservationSchema);
export default ReservationModel;
