const typeDefs = `#graphql

type Feedback {
    id: ID!
    author: String!
    content: String!
    rating: Int!
    event: Event!
}

type Event {
    id: ID!
    name: String!
    feedbacks: [Feedback!]
}

type Query {
    feedbacks: [Feedback]
    feedback(id: ID): Feedback
    events: [Event]
    event(id: ID): Event
}
`

export default typeDefs
