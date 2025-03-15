import db from './data/db.js'

export const generateID = () =>
  (parseInt(db.feedbacks[db.feedbacks.length - 1].id) + 1).toString()
