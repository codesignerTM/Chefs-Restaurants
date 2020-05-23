import { gql } from "apollo-server";

const typeDefs = gql`
  type Chef {
    id: ID!
    name: String!
    restaurants: [Restaurant!]!
  }

  type Restaurant {
    id: ID!
    name: String!
  }

  type Query {
    chefs: [Chef!]!
  }
`;

export default typeDefs;


/*
  EXP on [Restaurant!]!
  Would be valid if:
  [Restaurant] => null, [null]
  [Restaurant!] => null
  [Restaurant]! => [null]
*/