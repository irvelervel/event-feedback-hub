import db from './data/db.js'
import { generateID } from './helpers.js'
import { EventArgs, Event } from './types/event.js'
import { Feedback, FeedbackArgs } from './types/feedback.js'
import { PubSub } from 'graphql-subscriptions'

// creates a PubSub object for managing subscriptions
const pubsub = new PubSub()

const resolvers = {
  // read operations
  Query: {
    event(parent: undefined, args: EventArgs) {
      return db.events.find((ev) => ev.id === args.id)
    },
    events() {
      return db.events
    },
    feedbacks() {
      return db.feedbacks
    },
    feedbacksForEvent(parent: undefined, args: FeedbackArgs) {
      if (args.id) {
        return db.feedbacks.filter((fb) => fb.event_id === args.id)
      } else {
        return db.feedbacks
      }
    },
  },
  Mutation: {
    // resolver for feedback creation
    addFeedback(parent: undefined, args: { feedback: Feedback }) {
      const newFb = {
        ...args.feedback,
        id: generateID(),
      }
      db.feedbacks.push(newFb)
      pubsub.publish('FEEDBACK_POSTED', { feedbackPosted: newFb })
      return newFb
    },
    // resolver for deleting a feedback, not used in the FE at the end of the day
    deleteFeedback(parent: undefined, args: FeedbackArgs) {
      db.feedbacks = db.feedbacks.filter((fb) => fb.id !== args.id)
      return db.feedbacks
    },
  },
  Subscription: {
    // subscription for new feedbacks
    feedbackPosted: {
      subscribe: () => pubsub.asyncIterableIterator(['FEEDBACK_POSTED']),
    },
  },
  Event: {
    // resolves feedbacks array in event
    feedbacks(parent: Event) {
      return db.feedbacks.filter((fb) => fb.event_id === parent.id)
    },
  },
  Feedback: {
    // resolves event sub-object in each feedback
    event(parent: Feedback) {
      return db.events.find((ev) => ev.id === parent.event_id)
    },
  },
}

export default resolvers
