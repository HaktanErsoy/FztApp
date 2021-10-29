import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    physiotherapists: [Physiotherapist!]!
    physiotherapist(id: String!): Physiotherapist!
    todaysReservations: [Reservation!]!
    patients: [Patient!]!
    patient: Patient!
  }

  type Mutation {
    createPhysiotherapist(data: PhysiotherapistInput): Physiotherapist!
    createPatient(data: PatientInput): Patient!
    createReservation(data: ReservationInput): Reservation!
  }

  enum PatientCategory {
    A
    B
    C
  }

  type Physiotherapist {
    id: ID!
    name: String!
    patients: [Patient!]!
  }

  input PhysiotherapistInput {
    name: String!
  }

  type Patient {
    id: ID!
    category: PatientCategory!
    name: String!
    disease: [String!]!
    treatmentTime: Int!
    physiotherapist: String!
  }
  input PatientInput {
    category: PatientCategory!
    name: String!
    disease: [String!]!
    treatmentTime: Int!
    physiotherapist: String!
  }

  type Reservation {
    id: ID!
    startsAt: String!
    endsAt: String!
    patient: Patient!
    physiotherapist: Physiotherapist!
  }

  input ReservationInput {
    startsAt: String!
    endsAt: String!
    patient: String!
    physiotherapist: String!
  }
`;

export default typeDefs;
