// mock data

let db = {
  events: [
    {
      id: '1',
      name: 'Google I/O',
    },
    {
      id: '2',
      name: 'Microsoft Build',
    },
    {
      id: '3',
      name: 'JSConf',
    },
    {
      id: '4',
      name: 'DockerCon',
    },
    {
      id: '5',
      name: 'React Conf',
    },
    {
      id: '6',
      name: 'Google Code Jam',
    },
  ],
  feedbacks: [
    {
      id: '1',
      author: 'Daniel Cooper',
      rating: 5,
      content: 'Brilliant! Exceeded my expectations in every way.',
      event_id: '3',
      timestamp: 1742125073,
    },
    {
      id: '2',
      author: 'Anna Miller',
      rating: 4,
      content: 'Great event, but could have used more hands-on sessions.',
      event_id: '2',
      timestamp: 1742126073,
    },
    {
      id: '3',
      author: 'John Harris',
      rating: 5,
      content: 'Absolutely amazing, highly informative and engaging!',
      event_id: '6',
      timestamp: 1742127073,
    },
    {
      id: '4',
      author: 'Eve Carter',
      rating: 3,
      content: 'It was okay, but not as exciting as expected.',
      event_id: '4',
      timestamp: 1742128073,
    },
    {
      id: '5',
      author: 'Lucas Anderson',
      rating: 4,
      content: 'Really insightful, though some parts felt too basic.',
      event_id: '5',
      timestamp: 1742129073,
    },
    {
      id: '6',
      author: 'Sophia Roberts',
      rating: 2,
      content: 'Disappointing, not much new information or value.',
      event_id: '1',
      timestamp: 1742130073,
    },
    {
      id: '7',
      author: 'James Bennett',
      rating: 5,
      content: 'Amazing content and speakers, a truly enriching experience!',
      event_id: '3',
      timestamp: 1742131073,
    },
    {
      id: '8',
      author: 'Olivia Turner',
      rating: 1,
      content: 'Boring and unorganized, I didn’t learn anything.',
      event_id: '2',
      timestamp: 1742132073,
    },
    {
      id: '9',
      author: 'Michael King',
      rating: 4,
      content: 'Solid event with great discussions, but could be longer.',
      event_id: '5',
      timestamp: 1742133073,
    },
    {
      id: '10',
      author: 'Emma Scott',
      rating: 5,
      content: 'One of the best events I’ve attended, highly recommend!',
      event_id: '1',
      timestamp: 1742134073,
    },
    {
      id: '11',
      author: 'Benjamin Evans',
      rating: 3,
      content: 'Good, but lacked depth in some areas.',
      event_id: '4',
      timestamp: 1742135073,
    },
    {
      id: '12',
      author: 'Chloe Stewart',
      rating: 4,
      content: 'Well-organized and informative, but could have been shorter.',
      event_id: '6',
      timestamp: 1742136073,
    },
    {
      id: '13',
      author: 'Daniel Cooper',
      rating: 5,
      content: 'Exceeded expectations, learned so much in a short time!',
      event_id: '5',
      timestamp: 1742137073,
    },
    {
      id: '14',
      author: 'Mia Walker',
      rating: 3,
      content: 'Decent event, but not much new content.',
      event_id: '2',
      timestamp: 1742138073,
    },
    {
      id: '15',
      author: 'Henry Lewis',
      rating: 5,
      content: 'Phenomenal! Every session was packed with value.',
      event_id: '3',
      timestamp: 1742139073,
    },
    {
      id: '16',
      author: 'Isabella Young',
      rating: 2,
      content: 'Poorly organized, not enough relevant content.',
      event_id: '4',
      timestamp: 1742140073,
    },
    {
      id: '17',
      author: 'David Phillips',
      rating: 4,
      content: 'Interesting and well-presented, but could have been shorter.',
      event_id: '6',
      timestamp: 1742141073,
    },
    {
      id: '18',
      author: 'Charlotte Nelson',
      rating: 5,
      content: 'Outstanding! Best event I’ve attended this year.',
      event_id: '2',
      timestamp: 1742142073,
    },
    {
      id: '19',
      author: 'William Morgan',
      rating: 4,
      content: 'Great experience, would love to see more practical examples.',
      event_id: '3',
      timestamp: 1742143073,
    },
    {
      id: '20',
      author: 'Amelia White',
      rating: 5,
      content: 'Incredible! I learned so much, definitely coming back.',
      event_id: '1',
      timestamp: 1742144073,
    },
    {
      id: '21',
      author: 'Matthew Adams',
      rating: 3,
      content: 'Not bad, but could have offered more advanced content.',
      event_id: '5',
      timestamp: 1742144273,
    },
    {
      id: '22',
      author: 'Lily Brooks',
      rating: 4,
      content: 'Very good, though a few sessions were too long.',
      event_id: '2',
      timestamp: 1742144473,
    },
    {
      id: '23',
      author: 'Samuel Collins',
      rating: 5,
      content: 'Fantastic event! Every moment was insightful and engaging.',
      event_id: '4',
      timestamp: 1742144673,
    },
    {
      id: '24',
      author: 'Ella Mitchell',
      rating: 2,
      content: 'Underwhelming, didn’t meet my expectations.',
      event_id: '6',
      timestamp: 1742144873,
    },
    {
      id: '25',
      author: 'Jack Perez',
      rating: 5,
      content: 'Perfect! The speakers and content were top-notch.',
      event_id: '5',
      timestamp: 1742145073,
    },
    {
      id: '26',
      author: 'Grace Ward',
      rating: 4,
      content: 'Good content, but the event was a bit too crowded.',
      event_id: '2',
      timestamp: 1742146073,
    },
    {
      id: '27',
      author: 'Ryan Evans',
      rating: 5,
      content: 'Exceeded all expectations, I learned so much!',
      event_id: '4',
      timestamp: 1742147073,
    },
    {
      id: '28',
      author: 'Hannah Moore',
      rating: 3,
      content: 'Not bad, but it could have been more engaging.',
      event_id: '6',
      timestamp: 1742148073,
    },
    {
      id: '29',
      author: 'George Lee',
      rating: 4,
      content: 'Good content, but the event was a bit too crowded.',
      event_id: '5',
      timestamp: 1742149073,
    },
    {
      id: '30',
      author: 'Sophie Wright',
      rating: 5,
      content: 'Fantastic! The best event I’ve attended so far!',
      event_id: '1',
      timestamp: 1742150073,
    },
  ],
}

export default db
