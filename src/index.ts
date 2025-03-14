import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './schema.js'
import resolvers from './resolvers.js'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const port = 4000

const { url } = await startStandaloneServer(server, {
  listen: {
    port,
  },
})

console.log('Server listening at port', port)
