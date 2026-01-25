import { PersonalPost } from '../../types';

export const booksPosts: PersonalPost[] = [
  {
    id: 'book-1',
    caption: 'okay so this book made me quit my job and book a one-way ticket to spain (jk but the urge was REAL)',
    type: 'books',
    tags: ['philosophy', 'inspiration'],
    date: '2024-12-15',
    metadata: {
      author: 'Paulo Coelho',
      book: 'The Alchemist',
      rating: 5,
      detailedReview: [
        'the whole journey metaphor hits different when you\'re trying to figure out your own path',
        'made me realize that the obstacles we face are actually part of the journey, not detours',
        'the way it talks about following your "personal legend" is actually so motivating',
        'read this during a time when i was questioning all my life choices and it helped me see things differently',
        'the simplicity of the story but the depth of the message is what makes it special'
      ]
    }
  },
  {
    id: 'book-2',
    caption: 'this man just casually explained why humans are basically just advanced apes with anxiety and i\'m not okay',
    type: 'books',
    tags: ['history', 'philosophy'],
    date: '2024-12-10',
    metadata: {
      author: 'Yuval Noah Harari',
      book: 'Nexus',
      rating: 5,
      detailedReview: [
        'made me question everything i thought i knew about humans and society',
        'the way he connects past, present, and future is mind-blowing',
        'really made me think about how we\'re all connected in ways we don\'t even realize',
        'read this while studying AI and it gave me a whole new perspective on technology and humanity',
        'the historical context mixed with future predictions is actually wild'
      ]
    }
  },
  {
    id: 'book-3',
    caption: 'read this and immediately started analyzing everyone\'s power moves like i\'m in a game of thrones episode',
    type: 'books',
    tags: ['psychology', 'strategy'],
    date: '2024-12-05',
    metadata: {
      author: 'Robert Greene',
      book: '48 Laws of Power',
      rating: 5,
      detailedReview: [
        'some of these laws are actually wild but they make sense',
        'taught me to be more observant about power dynamics in everyday situations',
        'the historical examples are so interesting and make the concepts stick',
        'read this before starting my internship and it helped me navigate office politics better',
        'definitely made me more strategic in how i approach relationships and opportunities'
      ]
    }
  },
];
