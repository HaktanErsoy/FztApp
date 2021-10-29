import PatientModel from "../models/patients";
import PhysiotherapistModel from "../models/physiotherapists";
import ReservationModel from "../models/reservations";
import { PatientType, PhysiotherapistType, ReservationType } from "../types";

const Mutation = {
  async createPhysiotherapist(_: any, { data }: { data: PhysiotherapistType }) {
    const newPhysiotherapist = await PhysiotherapistModel.create({
      name: data.name,
    });
    console.log(newPhysiotherapist);
    return newPhysiotherapist;
  },
  async createPatient(_: any, { data }: { data: PatientType }) {
    const newPatient = await PatientModel.create(data);
    return newPatient;
  },
  async createReservation(_: any, { data }: { data: ReservationType }) {
    const newReservation = await ReservationModel.create({
      ...data,
      startsAt: new Date(data.startsAt),
      endsAt: new Date(data.endsAt),
    });
    return newReservation;
  },
};

export default Mutation;
