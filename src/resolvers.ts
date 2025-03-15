import db from './data/db.js'
import { generateID } from './helpers.js'
import { EventArgs, Event } from './types/event.js'
import { Feedback, FeedbackArgs } from './types/feedback.js'

const resolvers = {
  Query: {
    events() {
      return db.events
    },
    event(parent: undefined, args: EventArgs) {
      return db.events.find((ev) => ev.id === args.id)
    },
    feedbacks() {
      return db.feedbacks
    },
    feedback(parent: undefined, args: FeedbackArgs) {
      return db.feedbacks.find((fb) => fb.id === args.id)
    },
  },
  Mutation: {
    addFeedback(parent: undefined, args: { feedback: Feedback }) {
      // console.log(args)
      const newFb = {
        ...args.feedback,
        id: generateID(),
      }
      // console.log(newFb)
      db.feedbacks.push(newFb)
      return newFb
    },
    deleteFeedback(parent: undefined, args: FeedbackArgs) {
      db.feedbacks = db.feedbacks.filter((fb) => fb.id !== args.id)
      return db.feedbacks
    },
  },
  Event: {
    feedbacks(parent: Event) {
      return db.feedbacks.filter((fb) => fb.event_id === parent.id)
    },
  },
  Feedback: {
    event(parent: Feedback) {
      return db.events.find((ev) => ev.id === parent.event_id)
    },
  },
}

export default resolvers
