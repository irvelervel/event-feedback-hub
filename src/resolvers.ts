import db from './data/db.js'
import { EventArgs, Event } from './types/event'
import { Feedback, FeedbackArgs } from './types/feedback'

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
