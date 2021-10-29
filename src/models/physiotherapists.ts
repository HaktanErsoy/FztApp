import mongoose from "mongoose";

const physiotherapistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const PhysiotherapistModel = mongoose.model(
  "Physiotherapist",
  physiotherapistSchema
);

export default PhysiotherapistModel;
