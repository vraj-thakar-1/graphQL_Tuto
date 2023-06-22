const { gql } = require("apollo-server")

const typeDefs = gql`  
        type User{
            id:ID!
            name:String!
            username:String!
            age:Int!
            nationality:Nationality!
            friends:[User]
            favoriteMovies: [Movie]
        }
        type Movie{
            id:ID!
            name:String!
            yearofPublication:Int!
            isInTheaters:Boolean!

        }

       type  Query {
        users: UsersResult!
      user(id:ID!):User!
      movies:[Movie!]!
      movie(name:String!):Movie!
       }


 input CreateUserInput {
            name:String!
            username:String!
            # default 
            age:Int=18 
            nationality:Nationality =INDIA
 }

 input UpdateUserName {
id:ID!
newUserName:String!
 }
       
       
       type Mutation{
        createUser(input: CreateUserInput!): User
        updateUserName(input:UpdateUserName):User
        deleteUser(id:ID!):User
       }
# An enum is a GraphQL schema type that represents a predefined list of possible values.
       enum Nationality{
        INDIA
        US
        CANADA
       }
type UserSuccessfulResult{
    users:[User!]!
}
type UserErrorResult{
    message:String!
}
union UsersResult= UserSuccessfulResult | UserErrorResult
`;

module.exports = { typeDefs }