import PhysiotherapistModel from "../models/physiotherapists";
import ReservationModel from "../models/reservations";
import { PhysiotherapistType } from "../types";

const Query = {
  physiotherapists: async () => await PhysiotherapistModel.find({}),
  physiotherapist: async (_: any, { id }: PhysiotherapistType) =>
    await PhysiotherapistModel.findById(id),
  todaysReservations: async () =>
    await ReservationModel.find({})
      .populate("patient")
      .populate("physiotherapist"),
};

export default Query;
