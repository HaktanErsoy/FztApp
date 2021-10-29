import { ObjectId } from "mongoose";
interface PhysiotherapistType {
  id: ObjectId;
  name: string;
}

interface PatientType {
  id: ObjectId;
  name: string;
  category: PatientCategory;
  diseases: [string];
  treatmentTime: number;
  physiotherapist: string;
}

interface ReservationType {
  id: ObjectId;
  startsAt: Date;
  endsAt: Date;
  patient: ObjectId;
  physiotherapist: ObjectId;
}

enum PatientCategory {
  A,
  B,
  C,
}

export { PhysiotherapistType, PatientType, ReservationType };
