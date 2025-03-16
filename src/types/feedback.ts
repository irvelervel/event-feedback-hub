export type FeedbackArgs = {
  id: string
  rating: number
}

export type Feedback = {
  id: string
  author: string
  content: string
  rating: number
  event_id: string
}
