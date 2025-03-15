import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { createServer } from 'http'
import cors from 'cors'
import express from 'express'
import { WebSocketServer } from 'ws'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { useServer } from 'graphql-ws/use/ws'
import typeDefs from './schema.js'
import resolvers from './resolvers.js'
// having troubles with the latest version of @types/ws, I had to pinpoint down a previous version in package.json

const app = express()
const httpServer = createServer(app)

const schema = makeExecutableSchema({ typeDefs, resolvers })

const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
})

const serverCleanup = useServer({ schema }, wsServer)

const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose()
          },
        }
      },
    },
  ],
})

await server.start()

app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server)
)

// reads a PORT environment variable set in an .env file
httpServer.listen(process.env.PORT, () => {
  console.log(
    `Server is now running on http://localhost:${process.env.PORT}/graphql`
  )
})
