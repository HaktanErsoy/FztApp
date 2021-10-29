import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    enum: ["A", "B", "C"],
    required: true,
  },
  diseases: {
    type: [String],
    required: true,
  },
  treatmentTime: {
    type: Number,
    required: true,
  },
  physiotherapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const PatientModel = mongoose.model("Patient", patientSchema);
export default PatientModel;
