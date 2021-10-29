import Patient from "../models/patients";

const Physiotherapist = {
  patients: async (parent: any) => {
    const patientsOfParent = await Patient.find({
      physiotherapist: parent._id,
    });
    return patientsOfParent;
  },
};

export default Physiotherapist;
