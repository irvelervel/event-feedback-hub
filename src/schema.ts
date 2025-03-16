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
    event(id: ID): Event
    events: [Event]
    feedbacks: [Feedback]
    feedbacksForEvent(rating: Int, id: ID): [Feedback]
}

type Mutation {
    addFeedback(feedback: AddFeedbackInput!): Feedback
    deleteFeedback(id: ID): [Feedback!]
}

type Subscription {
    feedbackPosted: Feedback
}

input AddFeedbackInput {
    author: String!
    content: String!
    rating: Int!
    event_id: String!
}
`

export default typeDefs
