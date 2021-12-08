import { gql } from 'apollo-server';

const enrollmentType = gql`
  # Enrollment
  type Enrollment {
    status: EnrollmentStatus
    enrollmentDate: String
    egresDate: String
    project: Project!
    student: User!
  }
`;

const enums = gql`
  # Enum for status values
  enum EnrollmentStatus {
    acepted
    rejected
  }
`;

const queries = gql`
  # Query all enrollments
  type Query {
    allEnrollments: [Enrollment]
  }
`;

const mutations = gql`
  type Mutation {
    registerEnrollment(input: RegiInput!): Enrollment!
  }
  type  Mutation {
    deleteEnrollById(_id: ID): Enrollment!
  }
  type Mutation {
    updateEnrollment(_id:ID, input: UpdateInputEn!): Enrollment!
  }
`;

const inputs = gql`
  input RegiInput {
    projectId: ID!
    studentId: ID!
    status: String
  }
  input UpdateInputEn {
    status: String
  }
`;



export default [
  enrollmentType,
  enums,
  queries,
  mutations,
  inputs
];
