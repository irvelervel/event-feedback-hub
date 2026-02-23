# Feedback Hub - Backend

This application is designed to allow users to share their feedback on several events and to show a real-time feed of contributions.

## Features

- Built using `Node.js` and the `express` Framework
- `GraphQL` API layer via `@apollo/server`
- Ephemeral data using a file database
- Queries and mutations for handling feedback submission and retrieval
- Filters for events and ratings
- Real-time notifications to connected clients using websocket and `GraphQL` subscriptions

## Operation

The application loads a webserver for handling `http` and `ws` connections from Feedback Hub clients.

Data is stored in a `db.ts` file for simplicity, all the mutations will be persisted as long as the backend application is running.

`GraphQL` schema and resolvers handle the necessary CRUD operations for events and feedbacks; they can be found in `/src`.

`graphql-ws` and `ws` libraries are used to establish a websocket connection to the connected clients and notify them when a mutation for a new feedback has been received and succesfully completed.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Environment Variables

You need a couple of env vara to get this started:

```bash
URL
PORT
```

Assign a valid port number in order to successfully start the server locally (e.g. `4000`).
A `.env.example` file can be found in the repository.

### Development

TS transpilation:

```bash
npm run build
```

Start the development server:

```bash
npm run dev
```

The server will be available at `http://${URL}:${PORT}/graphql`, and browsing this URL will load the Apollo Sandbox.
