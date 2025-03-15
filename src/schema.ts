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

type Mutation {
    addFeedback(feedback: AddFeedbackInput!): Feedback
    deleteFeedback(id: ID): [Feedback!]
}

input AddFeedbackInput {
    author: String!
    content: String!
    rating: Int!
    event_id: String!
}
`

export default typeDefs
