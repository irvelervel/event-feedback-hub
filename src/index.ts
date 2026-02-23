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

// creating the express application
const app = express()
const httpServer = createServer(app)

// creates the schema from typeFeds and resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers })

// sets up the websocket server for enabling subscriptions notifications
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
})

// sets up graceful shutdown operations
const serverCleanup = useServer({ schema }, wsServer)

// creates the Apollo Server
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

// starts Apollo
await server.start()

// enables express core features
app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server),
)

// starts express, reading a PORT environment variable set in an .env file
httpServer.listen(process.env.PORT, () => {
  console.log(
    `Server is now running on ${process.env.URL}:${process.env.PORT}/graphql`,
  )
})
