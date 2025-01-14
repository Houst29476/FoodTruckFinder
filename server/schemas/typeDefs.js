const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    reviews: [Review]
    friends: [User]
  }

  type Truck {
    owners: [String]
    description: String
    truckId: String!
    image: String
    link: String
    truckName: String!
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(_id: ID!): Review
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(reviewText: String!): Review
    addReaction(reviewId: ID!, reactionBody: String!): Review
    addFriend(friendId: ID!): User
    addTruck(owners: [String], description: String, truckId: String, image: String, link: String, truckName: String): Auth
    removeTruck (truckId: String!): Auth
  }
  
`;
// type Mutation
// editLocation
// editHours
// editMenu

module.exports = typeDefs;
