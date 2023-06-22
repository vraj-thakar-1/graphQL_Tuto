// entery points of our api
const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema/type-Defs')
const { resolvers } = require("./schema/resolver")


//  define server here  with two arguements
// typeDefs: its type defination of the data models 
//  resolver: resolver is functions that return required data
//  context : (it is a function )it is a object shared by all the resolvers (uses: keep data such as authentication, current user, database connection, data sources etc)
const server = new ApolloServer({ typeDefs, resolvers , context: ()=>{
return{name:"Vraj"}
}});

server.listen().then(({ url }) => {
    console.log(`Your Api is Runing At  :${url}`)
})
