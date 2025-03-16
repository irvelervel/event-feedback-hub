import db from './data/db.js'

// a tiny function used to generate a progressive ID for new feedbacks
export const generateID = () =>
  (parseInt(db.feedbacks[db.feedbacks.length - 1].id) + 1).toString()
